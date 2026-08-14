export default function PlacementSupport() {
  const steps = [
    {
      num: "01",
      title: "CV & Portfolio Coaching",
      desc: "Our advisors help you structure a professional beauty CV and curate a clean social media treatment portfolio to attract recruiters."
    },
    {
      num: "02",
      title: "Direct Salon Referrals",
      desc: "We drop your CV directly to hiring managers in our partner salons, skipping public application queues."
    },
    {
      num: "03",
      title: "Guaranteed Interviews",
      desc: "Prepare for success with simulated interview coaching sessions and guaranteed interviews at our active recruitment partners."
    }
  ];

  const partners = [
    { name: "Harrods Beauty", role: "Cosmetics & Retail Consultant Placements" },
    { name: "Saks Hair & Beauty", role: "Spa Therapist & Lash Stylist Roles" },
    { name: "Steiner Cruise Spas", type: "Global", role: "International Shipboard Beauty Contracts" },
    { name: "Selfridges & Co.", role: "Beauty Counter & Cosmetic Specialist Roles" },
    { name: "Toni & Guy Salons", role: "Brow & Eyelash Extension Specialist Placements" },
    { name: "Urban Retreat Soho", role: "Clinical Skincare & Advanced Aesthetic Careers" }
  ];

  return (
    <section className="py-24 bg-bg border-t border-muted-light/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold font-sans mb-3 block">
              Career & Placements
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-text">
              Direct Placement Partners & Support
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-muted max-w-sm mt-4 md:mt-0 leading-relaxed">
            We don't just train you—we launch your career. Our placement cell connects graduates directly with London's luxury salons and department store cosmetic counters.
          </p>
        </div>

        {/* How Support Works Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-b border-muted-light/60 pb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="flex space-x-5">
              <span className="font-sans text-3xl font-bold text-accent/30 mt-1 select-none">
                {step.num}
              </span>
              <div className="flex flex-col">
                <h3 className="font-sans text-base font-bold text-text mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Placement Partners Section */}
        <div>
          <div className="mb-10 text-center md:text-left">
            <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-text mb-2">
              Where Our Graduates Work
            </h3>
            <p className="font-sans text-xs text-muted">
              Active recruitment connections and direct candidate placement channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="p-6 bg-card-bg border border-muted-light/60 flex flex-col justify-between hover:border-accent/40 transition-colors duration-250 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-base font-bold text-text tracking-tight">
                      {partner.name}
                    </span>
                    {partner.type && (
                      <span className="px-2 py-0.5 border border-accent/30 text-[8px] uppercase tracking-widest text-accent font-bold font-sans">
                        {partner.type}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-xs text-muted leading-relaxed">
                    {partner.role}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-muted-light/40 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-widest text-accent font-semibold font-sans">
                    Placement Partner
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-muted"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
