export default function PlacementSupport() {
  const steps = [
    {
      num: "01",
      title: "CV & Portfolio Guidance",
      desc: "Our advisors help you structure a professional beauty CV and curate a clean social media treatment portfolio to showcase your work."
    },
    {
      num: "02",
      title: "Interview Preparation",
      desc: "Prepare for salon hiring processes with simulated interview coaching sessions and practical assessment preparation."
    },
    {
      num: "03",
      title: "Employer & Insurer Criteria",
      desc: "Understand the standards employers expect and what underwriters look for when assessing insurance eligibility."
    }
  ];

  return (
    <section className="py-16 bg-bg border-t border-muted-light/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold font-sans mb-2 block">
              Career Support
            </span>
            <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-text">
              Professional Development & Guidance
            </h2>
          </div>
          <p className="font-sans text-xs text-muted max-w-sm mt-3 md:mt-0 leading-relaxed">
            We support your transition into the beauty sector. Learn to package your skills, understand job markets, and prepare for interviews.
          </p>
        </div>

        {/* How Support Works Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 border-b border-muted-light/60 pb-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex space-x-4">
              <span className="font-sans text-2xl font-bold text-accent/30 mt-0.5 select-none">
                {step.num}
              </span>
              <div className="flex flex-col">
                <h3 className="font-sans text-sm font-bold text-text mb-1.5">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Brands and Equipment Section */}
        <div className="bg-card-bg border border-muted-light/60 p-8 rounded-2xl shadow-sm max-w-4xl">
          <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-text mb-3">
            Brands and equipment you'll train with
          </h3>
          <p className="font-sans text-sm text-muted leading-relaxed">
            You'll train using L'Oréal Professionnel and Kérastase professional products, with SkinCeuticals medical-grade skincare, on Lynton Initia laser equipment — the same products and equipment used on paying clients in our salon and clinic.
          </p>
        </div>

      </div>
    </section>
  );
}
