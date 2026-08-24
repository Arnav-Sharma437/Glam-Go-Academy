import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { COURSES } from "@/data/courses";

export async function POST(request: NextRequest) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      console.error("Stripe Secret Key is missing from environment variables.");
      return NextResponse.json(
        { error: "Stripe integration is not configured on the server." },
        { status: 500 }
      );
    }

    // Initialize Stripe client inside the handler to prevent build-time static evaluation errors
    const stripe = new Stripe(secretKey, {
      typescript: true,
    });

    const body = await request.json();
    const { courseId, slug, paymentOption, selectedDate } = body;

    // Verify courseId or slug is valid using server-side source of truth database
    const course = COURSES.find(
      (c) => c.id === courseId || c.slug === slug || c.slug === courseId || c.id === slug
    );
    if (!course) {
      return NextResponse.json(
        { error: "Invalid course program selection." },
        { status: 400 }
      );
    }

    // Determine target charge amount in GBP (Pounds) based on selected option
    // Server-side calculation only: do NOT trust prices submitted from frontend client
    let amountInPounds = course.price;
    let descriptionPrefix = "Pay in Full";

    if (paymentOption === "deposit") {
      amountInPounds = 150;
      descriptionPrefix = "Deposit Payment";
    } else if (paymentOption === "installments3") {
      amountInPounds = Math.round(course.price / 3);
      descriptionPrefix = "1st of 3 Installments";
    } else if (paymentOption === "installments4") {
      amountInPounds = Math.round(course.price / 4);
      descriptionPrefix = "1st of 4 Installments";
    }

    const amountInPence = amountInPounds * 100;
    const origin = request.headers.get("origin") || "http://localhost:3000";

    // Setup absolute image URL for Stripe Hosted Checkout Page
    const imageUrl = course.image.startsWith("http")
      ? course.image
      : `${origin}${course.image}`;

    // Create session details
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: course.title,
              description: `Course Enrolment - ${descriptionPrefix} - Cohort Date: ${
                selectedDate || course.startDate
              }`,
              images: [imageUrl],
            },
            unit_amount: amountInPence,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/courses/${course.slug}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/courses/${course.slug}`,
      metadata: {
        courseId: course.id,
        courseSlug: course.slug,
        paymentOption,
        selectedDate: selectedDate || course.startDate,
      },
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error: any) {
    console.error("Stripe Checkout Session API Error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error." },
      { status: 500 }
    );
  }
}
