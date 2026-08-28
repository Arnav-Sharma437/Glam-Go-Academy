import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Missing session_id parameter." },
        { status: 400 }
      );
    }

    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      console.error("Stripe Secret Key is missing from environment variables.");
      return NextResponse.json(
        { error: "Stripe integration is not configured on the server." },
        { status: 500 }
      );
    }

    // Initialize Stripe client inside handler to avoid pre-build evaluation issues
    const stripe = new Stripe(secretKey, {
      typescript: true,
    });

    // Retrieve Stripe Checkout Session from Stripe server securely
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Validate payment completion status
    if (session.payment_status === "paid" || session.status === "complete") {
      // Setup future auto-charging installments if checking out with the dynamic plan option
      if (session.metadata?.paymentOption === "plan" && session.customer) {
        const customerId = session.customer as string;

        // 1. Set the PaymentMethod as default for future off-session charges
        if (session.payment_intent) {
          const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent as string);
          if (paymentIntent.payment_method) {
            await stripe.customers.update(customerId, {
              invoice_settings: {
                default_payment_method: paymentIntent.payment_method as string,
              },
            });
          }
        }

        // 2. Prevent duplicate scheduled payments (check metadata)
        const existingInvoices = await stripe.invoices.list({
          customer: customerId,
          limit: 20,
        });

        const alreadyScheduled = existingInvoices.data.some(
          (inv) => inv.metadata?.courseId === session.metadata?.courseId
        );

        if (!alreadyScheduled) {
          const numInstallments = parseInt(session.metadata.numberOfInstallments || "0");
          const instAmount = parseFloat(session.metadata.installmentAmount || "0");
          const courseTitle = session.metadata.courseTitle || "Course";

          for (let i = 1; i <= numInstallments; i++) {
            const dueDate = new Date();
            dueDate.setMonth(dueDate.getMonth() + i);

            // Create individual invoice items
            await stripe.invoiceItems.create({
              customer: customerId,
              amount: Math.round(instAmount * 100),
              currency: "gbp",
              description: `Instalment ${i} of ${numInstallments} - ${courseTitle}`,
            });

            // Create auto-charging future-dated invoice
            await stripe.invoices.create({
              customer: customerId,
              auto_advance: true,
              collection_method: "charge_automatically",
              due_date: Math.floor(dueDate.getTime() / 1000),
              metadata: {
                courseId: session.metadata.courseId || "",
                installmentIndex: i.toString(),
                totalInstallments: numInstallments.toString(),
              },
            });
          }
        }
      }

      return NextResponse.json({
        verified: true,
        customerName: session.customer_details?.name || "",
        customerEmail: session.customer_details?.email || "",
      });
    }

    return NextResponse.json(
      { verified: false, error: "Payment not completed." },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Stripe Verification API Error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error during verification." },
      { status: 500 }
    );
  }
}
