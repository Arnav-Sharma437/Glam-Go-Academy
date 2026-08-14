export default function TrustStrip() {
  const highlights = [
    { value: "500+", label: "Students Trained" },
    { value: "London", label: "Est. Studio Location" },
    { value: "100%", label: "Hands-on Training" },
    { value: "1:1", label: "Expert Tutor Support" }
  ];

  return (
    <section className="border-y border-muted-light/60 bg-bg py-5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-muted-light/60 text-center">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center ${
                index > 1 ? "pt-4 md:pt-0" : ""
              } ${index === 1 ? "pt-0 md:pt-0" : ""}`}
            >
              <span className="font-sans text-xl md:text-2xl text-text font-bold mb-0.5">
                {item.value}
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-muted font-sans font-semibold">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
