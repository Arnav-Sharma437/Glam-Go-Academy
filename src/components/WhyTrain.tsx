export default function WhyTrain() {
  const points = [
    {
      num: "01",
      title: "Certified Tutors",
      desc: "Learn from active practitioners who bring years of clinical salon and treatment experience."
    },
    {
      num: "02",
      title: "Hands-On Work",
      desc: "Gain confidence by training on live models under close supervision in a real studio layout."
    },
    {
      num: "03",
      title: "London Location",
      desc: "Train in our premium, state-of-the-art studio space situated in the heart of London."
    },
    {
      num: "04",
      title: "Post-Grad Support",
      desc: "Receive career mentoring, portfolio building assistance, and access to our salon network."
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-bg border-t border-muted-light/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold font-sans mb-2 block">
            Why Train With Us
          </span>
          <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-text">
            Designed for the Modern Beauty Professional
          </h2>
        </div>

        {/* Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="flex flex-col text-left p-6 bg-card-bg border border-muted-light/60 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent/40 cursor-pointer"
            >
              <span className="font-sans text-2xl md:text-3xl text-accent font-bold mb-3 block border-b border-muted-light/60 pb-2 select-none">
                {point.num}
              </span>
              <h3 className="font-sans text-base font-bold text-text mb-1.5">
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
