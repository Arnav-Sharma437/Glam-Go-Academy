"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COURSES } from "@/data/courses";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CourseDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  
  // Find matching course from unified database
  const course = COURSES.find(c => c.slug === slug);

  const [selectedDate, setSelectedDate] = useState(course?.startDate || "");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", cardNumber: "", expiry: "", cvc: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate premium payment processing
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Breadcrumb */}
          <nav className="mb-10 text-xs tracking-widest uppercase font-sans font-semibold text-muted">
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
                <span className="absolute top-4 left-4 px-3 py-1 bg-bg/95 backdrop-blur-sm text-text text-[9px] uppercase tracking-wider font-bold font-sans border border-muted-light/40 rounded-md">
                  {course.level}
                </span>
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

              {/* Prerequisites and Eligibility Section */}
              <h2 className="font-sans text-xl font-bold text-text mb-4">Prerequisites & Eligibility</h2>
              <div className="bg-card-bg border border-muted-light/60 rounded-xl p-5 mb-8 font-sans text-xs space-y-3 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-bold text-text uppercase tracking-wider text-[9px]">Prior Qualifications:</span>
                  <span className="text-muted sm:text-right">{course.prerequisites.qualification}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-t border-muted-light/40 pt-3">
                  <span className="font-bold text-text uppercase tracking-wider text-[9px]">Minimum Age Limit:</span>
                  <span className="text-muted sm:text-right">{course.prerequisites.minAge} years or older</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-t border-muted-light/40 pt-3">
                  <span className="font-bold text-text uppercase tracking-wider text-[9px]">Insurance Coverage:</span>
                  <span className="text-muted sm:text-right">{course.prerequisites.insurance}</span>
                </div>
              </div>

              <h2 className="font-sans text-xl font-bold text-text mb-4">Course Description</h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-8">
                {course.description} This intensive training program provides you with state-of-the-art methodology, intensive practice sessions, and professional kits to launch a profitable cosmetic styling business immediately after graduation.
              </p>

              <h2 className="font-sans text-xl font-bold text-text mb-4">Curriculum Overview</h2>
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
                {!success ? (
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

                    <div className="mb-6">
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

                    {/* Stripe Simulation Fields */}
                    <div className="border-t border-muted-light/60 pt-6 mt-2 mb-6">
                      <h4 className="text-[10px] uppercase tracking-wider text-text font-bold font-sans mb-4">
                        Secure Payment Info
                      </h4>
                      
                      <div className="mb-4">
                        <label className="block text-[9px] uppercase tracking-wider text-muted font-sans font-semibold mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="4242 •••• •••• 4242"
                          className="w-full p-3 border border-muted-light bg-bg font-sans text-xs text-text focus:outline-none focus:border-accent rounded-lg"
                          maxLength={19}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[9px] uppercase tracking-wider text-muted font-sans font-semibold mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            placeholder="MM / YY"
                            className="w-full p-3 border border-muted-light bg-bg font-sans text-xs text-text focus:outline-none focus:border-accent rounded-lg"
                            maxLength={5}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] uppercase tracking-wider text-muted font-sans font-semibold mb-1">
                            CVC Code
                          </label>
                          <input
                            type="password"
                            name="cvc"
                            value={formData.cvc}
                            onChange={handleInputChange}
                            placeholder="•••"
                            className="w-full p-3 border border-muted-light bg-bg font-sans text-xs text-text focus:outline-none focus:border-accent rounded-lg"
                            maxLength={4}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted-light/30 p-4 border border-muted-light/40 flex items-center justify-between mb-6 rounded-lg">
                      <span className="text-xs font-sans text-muted">Total Tuition Fee:</span>
                      <span className="text-lg font-bold text-text">£{course.price}</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-text text-bg text-xs font-sans tracking-wider uppercase font-semibold hover:bg-accent transition-all duration-300 rounded-lg shadow-md flex items-center justify-center space-x-2 cursor-pointer hover:scale-102"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <span>Confirm Enrolment</span>
                      )}
                    </button>
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
                      Thank you for enrolling, <span className="font-semibold text-text">{formData.name}</span>. A payment confirmation receipt and starter pack guide has been sent to <span className="font-semibold text-text">{formData.email}</span>.
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
