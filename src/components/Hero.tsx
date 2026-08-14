import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 md:pt-40 flex items-center justify-center overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="h-px w-8 bg-accent"></span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold font-sans">
              London Academy of Beauty
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight text-text mb-8">
            Train With London’s <br className="hidden sm:inline" />
            Leading Beauty <span className="italic font-light text-accent">Academy</span>.
          </h1>

          <p className="font-sans text-base md:text-lg text-muted max-w-xl leading-relaxed mb-10">
            Professional, hands-on courses in lashes, brows, and advanced cosmetics. 
            Designed to build industry-ready skills and launch your career in beauty 
            from our central London studio.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            {/* Primary CTA */}
            <a
              href="#courses"
              className="px-8 py-4 bg-text text-bg text-xs font-sans tracking-widest uppercase font-medium text-center hover:bg-accent transition-colors duration-300 shadow-md"
            >
              Explore Courses
            </a>
            
            {/* Secondary CTA */}
            <a
              href="#contact"
              className="px-8 py-4 border border-text/20 text-text text-xs font-sans tracking-widest uppercase font-medium text-center hover:border-text hover:bg-text/5 transition-all duration-300"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Image */}
        <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
          <div className="absolute inset-0 border border-muted-light/60 transform translate-x-4 translate-y-4 z-0"></div>
          <div className="relative z-10 w-full h-full overflow-hidden bg-muted-light">
            <Image
              src="https://images.unsplash.com/photo-1522337360788-8b13edd793be?q=80&w=1200"
              alt="Professional beauty training and treatment sessions at Glam and Go Academy London"
              fill
              priority
              sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 600px"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
