import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-bg text-text min-h-screen pt-28 pb-20 font-sans transition-colors duration-300">
        
        {/* Section 1: Hero (Redesigned Editorial Split Grid) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text & Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block animate-fade-in">
                London Academy
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-text">
                Glam and Go London
              </h1>
              
              <div className="w-12 h-[2px] bg-accent/60 my-6"></div>
              
              <p className="text-sm text-muted leading-relaxed">
                We specialize in delivering intensive, clinically-led aesthetics and cosmetic training. Based in the heart of London, our programs bridge classroom theory with supervised hands-on practice.
              </p>
              
              {/* Highlights grid */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-muted-light/60">
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-muted font-bold mb-1">Academy Studio</span>
                  <span className="text-xs text-text font-semibold">Soho, London</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-muted font-bold mb-1">Accreditation</span>
                  <span className="text-xs text-text font-semibold">CPD & VTCT Framework</span>
                </div>
              </div>
            </div>

            {/* Right: Immersive Image Layout */}
            <div className="lg:col-span-7 relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-accent/10 to-transparent blur-lg"></div>
              <div className="relative aspect-[16/10] w-full bg-muted-light rounded-2xl overflow-hidden shadow-md border border-muted-light/40">
                <Image
                  src="/images/hero_aesthetics.jpg"
                  alt="Glam and Go London Academy Studio"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Who We Are */}
        <section className="border-t border-muted-light/60 py-20 bg-muted-light/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
                Elite Training in Central London
              </h2>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Glam and Go London is a dedicated training academy located in Soho. We cater to beauty specialists, salon staff, and aspiring cosmetic practitioners looking to build a certified career in clinical beauty.
              </p>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                By maintaining standard safety guidelines and providing high-quality sterile study rooms, our students learn correct needle depth, facial anatomy danger zones, and complication management.
              </p>
            </div>
            
            <div className="relative aspect-[4/3] w-full bg-muted-light rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/courses/foundation_injectables.jpg"
                alt="Supervised Aesthetics Practice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Training Philosophy */}
        <section className="border-t border-muted-light/60 py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-3 block">
                Our Method
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
                Our Training Philosophy
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-card-bg border border-muted-light/60 p-8 rounded-2xl shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-accent/40">
                <div>
                  <div className="text-accent font-bold text-lg mb-6 font-sans">01</div>
                  <h3 className="text-base font-bold text-text mb-4">Safety First</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Our training prioritizes patient health. We cover facial anatomy danger zones, product reconstitution safety, and complications/emergency dissolving management.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-card-bg border border-muted-light/60 p-8 rounded-2xl shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-accent/40">
                <div>
                  <div className="text-accent font-bold text-lg mb-6 font-sans">02</div>
                  <h3 className="text-base font-bold text-text mb-4">Small Cohorts</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    We restrict class sizes to small groups to ensure each student receives direct, one-to-one guidance and real-time needle technique mentoring from clinical tutors.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-card-bg border border-muted-light/60 p-8 rounded-2xl shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-accent/40">
                <div>
                  <div className="text-accent font-bold text-lg mb-6 font-sans">03</div>
                  <h3 className="text-base font-bold text-text mb-4">Hands-on Practice</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Students practice techniques directly on live models in our clinical environment. This builds treatment-room confidence for graduation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Accreditation */}
        <section className="border-t border-muted-light/60 py-20 bg-muted-light/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-3 block">
              Certified Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text mb-6">
              Accredited Education Pathways
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-2xl mx-auto mb-12">
              Our training standards coordinate with established educational frameworks. Upon completion, you receive accredited certifications to satisfy insurance requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-3xl mx-auto">
              {/* CPD Block */}
              <div className="bg-card-bg border border-muted-light/60 p-6 rounded-2xl flex items-center gap-4 text-left w-full sm:w-1/2 shadow-sm">
                <div className="h-12 w-16 flex flex-col items-center justify-center border border-muted-light bg-bg rounded-lg shrink-0">
                  <span className="text-sm font-extrabold tracking-widest text-text">CPD</span>
                  <span className="text-[5px] uppercase font-bold text-muted -mt-0.5 tracking-wide">Accredited</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text">CPD Accreditation</h4>
                  <p className="text-[10px] text-muted leading-relaxed mt-1">
                    Recognized by leading cosmetic insurers. Earn CPD hours across all 13 core modules.
                  </p>
                </div>
              </div>

              {/* VTCT Block */}
              <div className="bg-card-bg border border-muted-light/60 p-6 rounded-2xl flex items-center gap-4 text-left w-full sm:w-1/2 shadow-sm">
                <div className="h-12 w-16 flex flex-col items-center justify-center border border-muted-light bg-bg rounded-lg shrink-0">
                  <span className="text-sm font-extrabold tracking-widest text-text">VTCT</span>
                  <span className="text-[5px] uppercase font-bold text-muted -mt-0.5 tracking-wide">Approved</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text">VTCT Framework Support</h4>
                  <p className="text-[10px] text-muted leading-relaxed mt-1">
                    Structured mapping ready for Level 2, Level 3 and Level 4 beauty therapy additions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Our Soho Studio */}
        <section className="border-t border-muted-light/60 py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
                Our Location
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
                Central London Aesthetic Studio
              </h2>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Our modern, fully-equipped clinical space is located in the heart of London’s West End. We offer a sterile, professional environment mimicking a real-world clinic setting.
              </p>
              
              <div className="border-t border-muted-light/60 pt-6 font-sans text-xs space-y-3">
                <div className="text-muted">
                  <strong className="text-text block uppercase tracking-wider text-[9px] mb-1">Studio Address</strong>
                  <p className="leading-relaxed">
                    Suite 4, 12 Old Compton Street<br />
                    Soho, London, W1D 4TQ
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=12+Old+Compton+Street,+Soho,+London,+W1D+4TQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-3 border border-text/15 text-text text-xs tracking-wider uppercase font-semibold hover:bg-text/5 hover:border-text transition-all duration-300 rounded-lg cursor-pointer hover:scale-102"
                >
                  Find Us on Google Maps
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 relative aspect-[16/10] w-full bg-muted-light rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/courses/biotin_glutathione.jpg"
                alt="Glam and Go London Aesthetics Studio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 6: Final CTA */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="bg-[#1C1A17] dark:bg-[#12100E] border border-muted-light/20 p-12 sm:p-16 rounded-3xl text-center text-[#FAF7F2] relative overflow-hidden transition-colors duration-300">
            <div className="max-w-xl mx-auto relative z-10 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block animate-pulse">
                Begin Your Journey
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#FAF7F2] leading-tight">
                Develop Certified Aesthetics Skills
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF7F2]/70 leading-relaxed">
                Secure your seat in our next Soho clinical training cohort. Keep classes small, hands-on, and secure.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/courses"
                  className="px-6 py-3.5 bg-accent text-[#FAF7F2] text-xs font-sans tracking-widest uppercase font-semibold text-center hover:bg-[#FAF7F2] hover:text-[#1C1A17] transition-all duration-300 shadow-md w-full sm:w-auto rounded-lg cursor-pointer hover:scale-102"
                >
                  Explore Courses
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 border border-[#FAF7F2]/20 text-[#FAF7F2] text-xs font-sans tracking-widest uppercase font-semibold text-center hover:bg-[#FAF7F2]/5 hover:border-[#FAF7F2] transition-all duration-300 w-full sm:w-auto rounded-lg cursor-pointer hover:scale-102"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
