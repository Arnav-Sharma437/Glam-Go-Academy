"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COURSES, VAT_CONFIG } from "@/data/courses";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ success?: string; session_id?: string }>;
}

export default function CourseDetailPage({ params, searchParams }: PageProps) {
  const { slug } = use(params);
  const { session_id: sessionId } = use(searchParams);
  
  // Find matching course from unified database
  const course = COURSES.find(c => c.slug === slug);

  const [selectedDate, setSelectedDate] = useState(course?.startDate || "");
  const [paymentOption, setPaymentOption] = useState("full");
  const [ageCertified, setAgeCertified] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  
  // Secure verification states
  const [success, setSuccess] = useState(false);
  const [verifying, setVerifying] = useState(!!sessionId);
  const [verifiedName, setVerifiedName] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState("");

  // Trigger payment verification when returning from Stripe with a session_id
  useEffect(() => {
    if (!sessionId) return;

    let active = true;

    const verifyStripePayment = async () => {
      try {
        const response = await fetch(`/api/verify-session?session_id=${sessionId}`);
        const data = await response.json();

        if (active) {
          if (response.ok && data.verified) {
            setVerifiedName(data.customerName || "");
            setVerifiedEmail(data.customerEmail || "");
            setSuccess(true);
          } else {
            console.error("Stripe Verification Failed:", data.error);
            alert("We could not verify your payment with Stripe. Please contact support.");
            setSuccess(false);
          }
        }
      } catch (error) {
        console.error("Stripe verification hook error:", error);
        if (active) {
          alert("An error occurred while confirming your transaction details with Stripe.");
        }
      } finally {
        if (active) {
          setVerifying(false);
        }
      }
    };

    verifyStripePayment();

    return () => {
      active = false;
    };
  }, [sessionId]);

  if (!course) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex flex-col items-center justify-center bg-bg text-center px-6">
          <h1 className="font-sans text-3xl font-bold mb-4">Course Not Found</h1>
          <p className="font-sans text-sm text-muted mb-8">The course program you requested does not exist or has been moved.</p>
          <Link href="/" className="px-6 py-3 bg-text text-bg text-xs tracking-widest uppercase font-semibold hover:bg-accent transition-colors duration-300 rounded-lg cursor-pointer">
            Back to Homepage
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ageCertified) {
      alert(`You must certify that you satisfy the minimum age policy (${course.prerequisites.minAge}+) to book this course.`);
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId: course.id,
          paymentOption,
          selectedDate,
          customer: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session.");
      }

      if (data.url) {
        // Redirect the customer to Stripe hosted checkout URL
        window.location.href = data.url;
      } else {
        throw new Error("No redirection URL returned from Stripe.");
      }
    } catch (err: any) {
      console.error("Enrolment error:", err);
      alert(err.message || "An unexpected error occurred during checkout setup.");
      setLoading(false);
    }
  };

  // Calculate pricing values dynamically
  const installment3Val = (course.price / 3).toFixed(0);
  const installment4Val = (course.price / 4).toFixed(0);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Breadcrumb */}
          <nav className="mb-10 text-xs tracking-wider uppercase font-sans font-semibold text-muted">
            <Link href="/" className="hover:text-accent transition-colors duration-200 cursor-pointer">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-text">{course.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Course Details */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative aspect-[16/9] w-full bg-muted-light mb-8 overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-bg/95 backdrop-blur-sm text-text text-[9px] uppercase tracking-wider font-bold font-sans border border-muted-light/40 rounded-md">
                    {course.level}
                  </span>
                  <span className="px-3 py-1 bg-accent text-white text-[9px] uppercase tracking-wider font-bold font-sans rounded-md">
                    {course.accreditation} ACCREDITED
                  </span>
                </div>
              </div>

              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-text mb-6">
                {course.title}
              </h1>

              <div className="flex flex-wrap gap-y-4 gap-x-8 pb-6 border-b border-muted-light/60 mb-8 font-sans text-xs tracking-wide text-muted">
                <div>
                  <span className="block font-semibold text-text uppercase text-[10px] tracking-wider mb-1">Duration</span>
                  <span>{course.duration}</span>
                </div>
                <div>
                  <span className="block font-semibold text-text uppercase text-[10px] tracking-wider mb-1">Location</span>
                  <span>Central London Studio (Soho)</span>
                </div>
                <div>
                  <span className="block font-semibold text-text uppercase text-[10px] tracking-wider mb-1">Age Limit</span>
                  <span>{course.prerequisites.minAge}+</span>
                </div>
              </div>

              {/* Prerequisites & Eligibility Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h2 className="font-sans text-lg font-bold text-text mb-3">Prerequisites & Eligibility</h2>
                  <div className="bg-card-bg border border-muted-light/60 rounded-xl p-5 font-sans text-xs space-y-3 shadow-sm h-full">
                    <div>
                      <span className="block font-bold text-text uppercase tracking-wider text-[9px] mb-0.5">Prior Qualifications</span>
                      <span className="text-muted">{course.prerequisites.qualification}</span>
                    </div>
                    <div className="border-t border-muted-light/40 pt-2.5">
                      <span className="block font-bold text-text uppercase tracking-wider text-[9px] mb-0.5">Minimum Age Limit</span>
                      <span className="text-muted">{course.prerequisites.minAge} years or older</span>
                    </div>
                    <div className="border-t border-muted-light/40 pt-2.5">
                      <span className="block font-bold text-text uppercase tracking-wider text-[9px] mb-0.5">Insurance Coverage</span>
                      <span className="text-muted">{course.prerequisites.insurance}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-sans text-lg font-bold text-text mb-3">Accreditation Info</h2>
                  <div className="bg-card-bg border border-muted-light/60 rounded-xl p-5 font-sans text-xs space-y-3 shadow-sm h-full">
                    <div>
                      <span className="block font-bold text-text uppercase tracking-wider text-[9px] mb-0.5">Accrediting Body</span>
                      <span className="text-muted">{course.accreditation} Certified Academy</span>
                    </div>
                    <div className="border-t border-muted-light/40 pt-2.5">
                      <span className="block font-bold text-text uppercase tracking-wider text-[9px] mb-0.5">Certificate Issued</span>
                      <span className="text-muted">Accredited Certificate in {course.title}</span>
                    </div>
                    <div className="border-t border-muted-light/40 pt-2.5">
                      <span className="block font-bold text-text uppercase tracking-wider text-[9px] mb-0.5">Underwriter Approved</span>
                      <span className="text-muted">Eligible for cosmetic practitioner insurance</span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="font-sans text-lg font-bold text-text mb-3">Course Description</h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-8">
                {course.description}
              </p>

              <h2 className="font-sans text-lg font-bold text-text mb-3">Curriculum Overview</h2>
              <ul className="space-y-4 mb-8">
                {course.curriculum.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-sans text-accent font-bold text-sm mr-4 mt-0.5">0{index + 1}</span>
                    <span className="font-sans text-sm text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Checkout Sidebar */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="bg-card-bg border border-muted-light/60 p-8 shadow-sm rounded-2xl">
                {verifying ? (
                  // Secure loading verification view
                  <div className="text-center py-12 flex flex-col items-center justify-center">
                    <svg className="animate-spin h-8 w-8 text-accent mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <h3 className="font-sans text-base font-bold text-text mb-2">Verifying Payment</h3>
                    <p className="font-sans text-xs text-muted max-w-xs leading-relaxed">
                      Please wait while we confirm your checkout session securely with Stripe...
                    </p>
                  </div>
                ) : !success ? (
                  <form onSubmit={handleSubmit} className="flex flex-col">
                    <h3 className="font-sans text-xl font-bold text-text mb-6">Enrol in Program</h3>
                    
                    <div className="mb-4">
                      <label className="block text-[10px] uppercase tracking-wider text-muted font-sans font-semibold mb-2">
                        Select Cohort Date
                      </label>
                      <select
                        name="cohort"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full p-3 border border-muted-light bg-bg font-sans text-xs text-text focus:outline-none focus:border-accent rounded-lg cursor-pointer"
                        required
                      >
                        {course.alternateDates.map((date) => (
                          <option key={date} value={date}>
                            {date} (London Studio)
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-[10px] uppercase tracking-wider text-muted font-sans font-semibold mb-2">
                        Payment Option
                      </label>
                      <select
                        name="paymentOption"
                        value={paymentOption}
                        onChange={(e) => setPaymentOption(e.target.value)}
                        className="w-full p-3 border border-muted-light bg-bg font-sans text-xs text-text focus:outline-none focus:border-accent rounded-lg cursor-pointer"
                        required
                      >
                        <option value="full">Pay in Full (£{course.price})</option>
                        <option value="installments3">3 Interest-Free Installments (£{installment3Val}/mo)</option>
                        <option value="installments4">4 Interest-Free Installments (£{installment4Val}/mo)</option>
                        <option value="deposit">Secure Place with a Deposit (£150)</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-[10px] uppercase tracking-wider text-muted font-sans font-semibold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="E.g., Sarah Jenkins"
                        className="w-full p-3 border border-muted-light bg-bg font-sans text-xs text-text focus:outline-none focus:border-accent rounded-lg"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-[10px] uppercase tracking-wider text-muted font-sans font-semibold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="E.g., sarah@gmail.com"
                        className="w-full p-3 border border-muted-light bg-bg font-sans text-xs text-text focus:outline-none focus:border-accent rounded-lg"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-[10px] uppercase tracking-wider text-muted font-sans font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="E.g., +44 7946 0958"
                        className="w-full p-3 border border-muted-light bg-bg font-sans text-xs text-text focus:outline-none focus:border-accent rounded-lg"
                        required
                      />
                    </div>

                    {/* Age and Terms policy tickbox required by user */}
                    <div className="mb-6 flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="ageCertified"
                        checked={ageCertified}
                        onChange={(e) => setAgeCertified(e.target.checked)}
                        className="mt-0.5 h-4 w-4 border border-muted-light bg-bg rounded accent-accent cursor-pointer"
                        required
                      />
                      <label htmlFor="ageCertified" className="font-sans text-[10px] text-muted leading-tight cursor-pointer select-none">
                        I certify that I am at least {course.prerequisites.minAge} years old and agree to the booking policies, clinical screening terms, and model consent guidelines.
                      </label>
                    </div>

                    <div className="bg-muted-light/30 p-4 border border-muted-light/40 flex items-center justify-between mb-6 rounded-lg">
                      <span className="text-xs font-sans text-muted">Total Due:</span>
                      <span className="text-lg font-bold text-text">
                        {paymentOption === "full" && `£${course.price}`}
                        {paymentOption === "installments3" && `£${installment3Val} (1st of 3)`}
                        {paymentOption === "installments4" && `£${installment4Val} (1st of 4)`}
                        {paymentOption === "deposit" && "£150 (Deposit)"}
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-text text-bg text-xs font-sans tracking-wider uppercase font-semibold hover:bg-accent hover:text-white transition-all duration-300 rounded-lg shadow-md flex items-center justify-center space-x-2 cursor-pointer hover:scale-102"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Redirecting...</span>
                        </>
                      ) : (
                        <span>Confirm Enrolment</span>
                      )}
                    </button>

                    {/* Data Use & placeholders */}
                    <p className="text-[10px] text-muted leading-relaxed text-center mt-3">
                      By enrolling, you consent to Glam and Go London storing your registration details to manage your training in accordance with our Privacy Policy.
                    </p>

                    {/* Render VAT status if configured in VAT_CONFIG */}
                    {VAT_CONFIG.status === "inclusive" && (
                      <p className="text-[10px] text-muted text-center mt-2">
                        * Tuition fee is inclusive of VAT
                      </p>
                    )}
                    {VAT_CONFIG.status === "exclusive" && (
                      <p className="text-[10px] text-muted text-center mt-2">
                        * Tuition fee is subject to VAT
                      </p>
                    )}

                    {/* Render What's Included list if defined in database */}
                    {course.whatsIncluded && course.whatsIncluded.length > 0 && (
                      <div className="mt-4 text-[10px] text-muted space-y-1 bg-muted-light/10 p-3 rounded-lg border border-muted-light/30">
                        <p className="font-bold text-text mb-1 uppercase tracking-wider text-[9px]">What's Included:</p>
                        <ul className="list-disc list-inside space-y-0.5">
                          {course.whatsIncluded.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </form>
                ) : (
                  <div className="text-center py-8">
                    {/* Success Icon */}
                    <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-2xl text-text font-bold mb-3">Enrolment Confirmed</h3>
                    <p className="font-sans text-xs text-muted leading-relaxed mb-6">
                      Thank you for enrolling{verifiedName ? `, ${verifiedName}` : formData.name ? `, ${formData.name}` : ""}. Your enrolment has been confirmed. Stripe will provide your payment confirmation.
                    </p>
                    <p className="font-sans text-xs text-muted leading-relaxed mb-8">
                      We look forward to seeing you at our Soho studio on <span className="font-semibold text-text">{selectedDate}</span>.
                    </p>
                    <Link
                      href="/"
                      className="inline-block px-6 py-3 border border-text/20 text-text text-xs tracking-wider uppercase font-semibold hover:bg-text hover:text-bg transition-colors duration-300 rounded-lg cursor-pointer"
                    >
                      Return to Home
                    </Link>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
