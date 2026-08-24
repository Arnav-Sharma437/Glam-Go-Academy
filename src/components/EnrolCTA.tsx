import Link from "next/link";

export default function EnrolCTA() {
  return (
    <section className="bg-[#1C1A17] dark:bg-[#12100E] text-[#FAF7F2] py-24 text-center relative overflow-hidden transition-colors duration-300">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold mb-4 block">
          Begin Your Journey
        </span>
        
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F2] mb-6 leading-tight">
          Ready to Start Your Career <br className="hidden sm:inline" />
          in Professional Beauty?
        </h2>
        
        <p className="font-sans text-xs sm:text-sm text-[#FAF7F2]/70 max-w-lg mx-auto mb-10 leading-relaxed">
          Secure your seat in our next London studio cohort. Small classes ensure direct 
          one-to-one mentorship from our industry-certified experts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center">
          <a
            href="#courses"
            className="px-8 py-4 bg-accent text-[#FAF7F2] text-xs font-sans tracking-widest uppercase font-semibold hover:bg-[#FAF7F2] hover:text-[#1C1A17] transition-all duration-300 shadow-md w-full sm:w-auto text-center cursor-pointer rounded-lg hover:scale-102"
          >
            Enrol Online
          </a>
        </div>
      </div>
    </section>
  );
}
