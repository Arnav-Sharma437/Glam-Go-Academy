import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-32 pb-24 font-sans text-text">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <span className="text-[11px] uppercase tracking-wider text-accent font-semibold mb-2 block">
            Information Disclosure
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-sm dark:prose-invert max-w-none text-muted leading-relaxed space-y-6 text-sm">
            <p>
              This Privacy Policy explains how <strong>Glam and Go London</strong> collects, uses, and protects personal data provided by students, models, and visitors to our website.
            </p>

            <h2 className="text-xl font-bold text-text pt-4">1. Information We Collect</h2>
            <p>
              When you submit a contact form or book a training course, we collect your name, email address, phone number, and any relevant qualification files. Payment details are processed securely through our payment provider (Stripe) and are not stored on our servers.
            </p>

            <h2 className="text-xl font-bold text-text pt-4">2. How We Use Your Data</h2>
            <p>
              We use your contact details exclusively to manage your course booking, verify prerequisites, and respond to support enquiries. We will never share or sell your information to third-party marketing companies.
            </p>

            <h2 className="text-xl font-bold text-text pt-4">3. Data Retention and Consent</h2>
            <p>
              By submitting an enquiry or registering for a cohort, you consent to our storing of your data to perform course registration services. You have the right to request a copy of the information we hold about you or request its deletion at any time.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
