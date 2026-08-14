export default function WhyTrain() {
  const points = [
    {
      num: "01",
      title: "Certified Master Tutors",
      desc: "Learn from active industry practitioners who bring years of clinical salon and editorial experience."
    },
    {
      num: "02",
      title: "Hands-On Studio Work",
      desc: "Gain confidence by training on live models under close supervision in a real studio layout."
    },
    {
      num: "03",
      title: "Central London Studio",
      desc: "Train in our premium, state-of-the-art studio space situated in the heart of London."
    },
    {
      num: "04",
      title: "Post-Graduation Support",
      desc: "Receive career mentoring, portfolio building assistance, and access to our salon network."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-bg border-t border-muted-light/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold font-sans mb-3 block">
            Why Train With Us
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-text">
            Designed for the Modern Beauty Professional
          </h2>
        </div>

        {/* Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col text-left">
              <span className="font-sans text-3xl md:text-4xl text-accent font-bold mb-4 block border-b border-muted-light/60 pb-2">
                {point.num}
              </span>
              <h3 className="font-sans text-lg font-bold text-text mb-2">
                {point.title}
              </h3>
              <p className="font-sans text-xs text-muted leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
