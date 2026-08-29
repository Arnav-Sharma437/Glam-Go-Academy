"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-32 pb-24 font-sans text-text">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-wider text-accent font-semibold mb-2 block">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Contact Glam and Go London
            </h1>
            <p className="text-xs text-muted leading-relaxed">
              Have questions about our training courses, dates, or payment options? Contact our support team below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-card-bg border border-muted-light/60 p-8 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-6 text-text">Academy Information</h3>
                
                <div className="space-y-6 text-xs text-muted leading-relaxed">
                  <div>
                    <span className="block font-bold text-text uppercase tracking-wider text-[9px] mb-1">London Studio (Training Location)</span>
                    <p>
                      Suite 4, 12 Old Compton Street<br />
                      Soho, London, W1D 4TQ
                    </p>
                  </div>

                  <div className="border-t border-muted-light/40 pt-4">
                    <span className="block font-bold text-text uppercase tracking-wider text-[9px] mb-1">Head Office (Business Address)</span>
                    <p>
                      Unit 21, Treaty Centre, Hounslow High Street<br />
                      Hounslow, TW3 1ES
                    </p>
                  </div>
                  
                  <div className="border-t border-muted-light/40 pt-4">
                    <span className="block font-bold text-text uppercase tracking-wider text-[9px] mb-1">Phone Number</span>
                    <a href="tel:02085771333" className="hover:text-accent transition-colors duration-200">020 8577 1333</a>
                  </div>

                  <div className="border-t border-muted-light/40 pt-4">
                    <span className="block font-bold text-text uppercase tracking-wider text-[9px] mb-1">Email Address</span>
                    <a href="mailto:glamandgohounslow@gmail.com" className="hover:text-accent transition-colors duration-200">glamandgohounslow@gmail.com</a>
                  </div>

                  <div className="border-t border-muted-light/40 pt-4">
                    <span className="block font-bold text-text uppercase tracking-wider text-[9px] mb-1">Opening Hours</span>
                    <p>
                      Mon–Sat: 09:00–20:00<br />
                      Sun: 10:00–19:00
                    </p>
                  </div>

                  <div className="border-t border-muted-light/40 pt-4">
                    <span className="block font-bold text-text uppercase tracking-wider text-[9px] mb-1">Accreditation & Registry</span>
                    <p>
                      CPD Certified by The CPD Certification Service, Member No. 22588<br />
                      VTCT Approved Centre 4558/001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-card-bg border border-muted-light/60 p-8 rounded-2xl shadow-sm">
                {!success ? (
                  <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <h3 className="text-lg font-bold mb-4 text-text">Send an Enquiry</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Sarah Jenkins"
                          className="w-full p-3 border border-muted-light bg-bg text-xs text-text focus:outline-none focus:border-accent rounded-lg"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="sarah@gmail.com"
                          className="w-full p-3 border border-muted-light bg-bg text-xs text-text focus:outline-none focus:border-accent rounded-lg"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+44 7946 0958"
                        className="w-full p-3 border border-muted-light bg-bg text-xs text-text focus:outline-none focus:border-accent rounded-lg"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-muted font-bold mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please write details about your query here..."
                        rows={5}
                        className="w-full p-3 border border-muted-light bg-bg text-xs text-text focus:outline-none focus:border-accent rounded-lg resize-none"
                        required
                      />
                    </div>

                    <div className="pt-2">
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
                            <span>Sending...</span>
                          </>
                        ) : (
                          <span>Send Message</span>
                        )}
                      </button>
                    </div>

                    {/* Data-use line required by user */}
                    <p className="text-[10px] text-muted leading-relaxed text-center pt-2">
                      By submitting this form, you consent to Glam and Go London storing your contact details to respond to your enquiry in accordance with our Privacy Policy.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Message Sent</h3>
                    <p className="text-xs text-muted leading-relaxed mb-6">
                      Thank you for contacting us, <span className="font-semibold text-text">{formData.name}</span>. A course advisor will review your message and reach back to you at <span className="font-semibold text-text">{formData.email}</span> shortly.
                    </p>
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
