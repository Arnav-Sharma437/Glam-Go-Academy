import Link from "next/link";

export default function EnrolCTA() {
  return (
    <section className="bg-text text-bg py-24 text-center relative overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold mb-4 block">
          Begin Your Journey
        </span>
        
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-bg mb-6 leading-tight">
          Ready to Start Your Career <br className="hidden sm:inline" />
          in Professional Beauty?
        </h2>
        
        <p className="font-sans text-xs sm:text-sm text-bg/70 max-w-lg mx-auto mb-10 leading-relaxed">
          Secure your seat in our next London studio cohort. Small classes ensure direct 
          one-to-one mentorship from our industry-certified experts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#courses"
            className="px-8 py-4 bg-accent text-bg text-xs font-sans tracking-widest uppercase font-semibold hover:bg-bg hover:text-text transition-colors duration-300 shadow-md w-full sm:w-auto text-center"
          >
            Enrol Online
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-bg/20 text-bg text-xs font-sans tracking-widest uppercase font-semibold hover:bg-bg/5 hover:border-bg transition-colors duration-300 w-full sm:w-auto text-center"
          >
            Request Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
