import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RefundsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-32 pb-24 font-sans text-text">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <span className="text-[11px] uppercase tracking-wider text-accent font-semibold mb-2 block">
            Cancellations & Fees
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Refund & Cancellation Policy
          </h1>
          
          <div className="prose prose-sm dark:prose-invert max-w-none text-muted leading-relaxed space-y-6 text-sm">
            <p>
              This Refund & Cancellation Policy outlines terms surrounding course enrollment payments, secure deposits, and date-shift requests at <strong>Glam and Go London</strong>.
            </p>

            <h2 className="text-xl font-bold text-text pt-4">1. Non-Refundable Secure Deposits</h2>
            <p>
              When booking a training program with a deposit option, please note that all deposits are strictly non-refundable. Deposits secure your specific seat reservation and cover preparation and materials costs.
            </p>

            <h2 className="text-xl font-bold text-text pt-4">2. Course Cancellation Terms</h2>
            <p>
              To request a course cancellation and claim a refund for any balance paid in excess of the secure deposit, you must submit a written request at least 14 days before the scheduled cohort start date. Cancellations requested within 14 days of the start date are not eligible for refunds.
            </p>

            <h2 className="text-xl font-bold text-text pt-4">3. Date Rescheduling Policy</h2>
            <p>
              Glam and Go London understands that schedules change. You may request to shift your cohort booking date once at no cost, provided you give us at least 7 days' notice. Rescheduling requests submitted within 7 days of the course date are subject to a nominal rescheduling fee.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
