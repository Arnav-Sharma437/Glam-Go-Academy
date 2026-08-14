export default function Testimonials() {
  const testimonials = [
    {
      quote: "The lash masterclass was life-changing. The tutors took their time to make sure my isolation technique was absolutely perfect before I worked on a live model.",
      author: "Charlotte Evans",
      course: "Lash Extensions Graduate"
    },
    {
      quote: "As a complete beginner, I was nervous about mapping brows. The step-by-step guidance and small class sizes gave me the confidence to launch my own home salon.",
      author: "Amara Okoye",
      course: "Brow Styling Graduate"
    },
    {
      quote: "Highly recommend the advanced skin training. Very detailed theory coupled with extensive practice. The support even after finishing the course has been incredible.",
      author: "Jessica Taylor",
      course: "Aesthetics Practitioner Graduate"
    }
  ];

  return (
    <section className="py-16 bg-bg border-t border-muted-light/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="max-w-xl mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold font-sans mb-2 block">
            Success Stories
          </span>
          <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-text">
            Loved by Our Students
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-card-bg border border-muted-light/60 flex flex-col justify-between shadow-sm rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent/30 cursor-pointer"
            >
              {/* Quote Mark SVG */}
              <svg
                className="w-6 h-6 text-accent/20 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.39 9.39-9.39v2.856c-3.111 0-4.39 2.012-4.39 4.39h4.39v9.535H14.017zm-14 0v-7.391c0-5.704 3.748-9.39 9.407-9.39v2.856c-3.116 0-4.407 2.012-4.407 4.39h4.407v9.535H.017z" />
              </svg>

              <blockquote className="font-sans text-xs italic text-text/80 leading-relaxed mb-6 flex-grow">
                “{t.quote}”
              </blockquote>

              <div className="flex flex-col border-t border-muted-light/40 pt-3">
                <cite className="not-italic font-sans font-bold text-[11px] tracking-wider text-text uppercase">
                  {t.author}
                </cite>
                <span className="text-[9px] text-accent uppercase tracking-widest font-sans font-semibold mt-0.5">
                  {t.course}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
