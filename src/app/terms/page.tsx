import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-32 pb-24 font-sans text-text">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <span className="text-[11px] uppercase tracking-wider text-accent font-semibold mb-2 block">
            Legal Agreements
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-sm dark:prose-invert max-w-none text-muted leading-relaxed space-y-6 text-sm">
            <p>
              These Terms & Conditions govern your enrolment in training programs and beauty courses provided by <strong>Glam and Go London</strong>. By booking a course with us, you agree to comply with these terms in full.
            </p>

            <h2 className="text-xl font-bold text-text pt-4">1. Enrolment and Eligibility</h2>
            <p>
              Students enrolling in courses at Glam and Go London must satisfy all prerequisites specified on the course profile. It is the student’s responsibility to check that they satisfy age requirements (minimum 18 years for standard courses, minimum 21 years for injectable courses) and hold any necessary beauty therapy certificates or phlebotomy access credentials before booking.
            </p>

            <h2 className="text-xl font-bold text-text pt-4">2. Bookings and Payments</h2>
            <p>
              Your place on a course is not secured until payment is received (either paid in full, through an approved installment program, or upon receipt of a deposit). Course tuition fees must be settled in full before the cohort start date unless a prior written arrangement is established.
            </p>

            <h2 className="text-xl font-bold text-text pt-4">3. Code of Conduct</h2>
            <p>
              Glam and Go London maintains a strict professional standard inside our clinical training studios. Students are expected to treat instructors, colleagues, and live models with respect. Failure to follow hygiene, sterilization, or safety protocols will result in immediate dismissal without refund.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
