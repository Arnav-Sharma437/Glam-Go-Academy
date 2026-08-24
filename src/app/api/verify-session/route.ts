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
