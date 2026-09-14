import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why Train With Us | Glam and Go London Academy",
  description:
    "Discover beauty therapy qualifications, VTCT certified pathways, CPD aesthetics masterclasses, skin & wellness training, and 1-to-1 refresher courses at Glam and Go London.",
  alternates: {
    canonical: "https://academy.glamandgolondon.com/about",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://academy.glamandgolondon.com/about",
    title: "Why Train With Us | Glam and Go London Academy",
    description:
      "Discover beauty therapy qualifications, VTCT certified pathways, CPD aesthetics masterclasses, skin & wellness training, and 1-to-1 refresher courses at Glam and Go London.",
    siteName: "Glam and Go London",
    images: [
      {
        url: "https://academy.glamandgolondon.com/images/hero_aesthetics.jpg",
        width: 1200,
        height: 630,
        alt: "Beauty and Aesthetics Clinical Training at Glam and Go London Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Train With Us | Glam and Go London Academy",
    description:
      "Discover beauty therapy qualifications, VTCT certified pathways, CPD aesthetics masterclasses, skin & wellness training, and 1-to-1 refresher courses at Glam and Go London.",
    images: ["https://academy.glamandgolondon.com/images/hero_aesthetics.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-bg text-text min-h-screen pt-28 pb-20 font-sans transition-colors duration-300">
        
        {/* Section 1: Luxury Editorial Hero Split */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Premium Typography & Key Highlights */}
            <div className="lg:col-span-5 space-y-8 animate-fade-in">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold block">
                  London Training Academy
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-text font-sans">
                  Professional <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-text to-accent dark:via-white">
                    Beauty & Aesthetics
                  </span> <br />
                  Education
                </h1>
                
                {/* Custom Gold-Gradient Separator */}
                <div className="relative w-24 h-[2px] mt-6 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent via-[#F4E1D2] to-accent"></div>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-md">
                We deliver recognized VTCT beauty therapy qualifications, CPD-certified cosmetic masterclasses, advanced skin therapies, wellness infusions, and bespoke practical refresher courses. Based in Central London, our programs combine comprehensive theoretical understanding with supervised hands-on practice.
              </p>
              
              {/* Luxury counters grid */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-muted-light/60">
                <div className="space-y-1">
                  <span className="block text-xl sm:text-2xl font-extrabold text-accent tracking-tight">VTCT & CPD</span>
                  <span className="block text-[8px] uppercase tracking-wider text-muted font-bold leading-tight">Accredited Pathways</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-xl sm:text-2xl font-extrabold text-accent tracking-tight">Hands-On</span>
                  <span className="block text-[8px] uppercase tracking-wider text-muted font-bold leading-tight">Supervised Training</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-xl sm:text-2xl font-extrabold text-accent tracking-tight">Soho</span>
                  <span className="block text-[8px] uppercase tracking-wider text-muted font-bold leading-tight">London W1D</span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Offset Gallery Frame */}
            <div className="lg:col-span-7 relative group">
              {/* Outer Glow Blur */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent/25 via-accent/5 to-transparent blur-2xl opacity-75 transition-all duration-700 group-hover:scale-105"></div>
              {/* Asymmetric offset lines */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/30 rounded-3xl pointer-events-none hidden sm:block"></div>
              <div className="absolute -top-3 -left-3 w-full h-full border border-muted-light/40 rounded-3xl pointer-events-none hidden sm:block"></div>
              
              {/* Core Image Container */}
              <div className="relative aspect-[16/10] w-full bg-muted-light rounded-3xl overflow-hidden shadow-2xl border border-muted-light/40 z-10 transition-transform duration-500 hover:scale-[1.01]">
                <Image
                  src="/images/hero_aesthetics.jpg"
                  alt="Practical clinical skincare treatment and observation session with practitioner and student"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 700px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Asymmetric Lookbook Collage */}
        <section className="border-t border-muted-light/60 py-28 bg-muted-light/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Asymmetric Images Collage */}
              <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
                {/* Large Background Image */}
                <div className="col-span-12 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-muted-light/60">
                  <Image
                    src="/images/courses/foundation_injectables.png"
                    alt="Cosmetic facial treatment demonstration with micro-syringe technique"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 650px"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                {/* Small Overlay Image */}
                <div className="absolute -bottom-10 -right-6 w-1/3 aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-bg hidden md:block">
                  <Image
                    src="/images/courses/vitamin_injections.png"
                    alt="Practitioner in clinical attire preparing sterile ampoule and syringe"
                    fill
                    sizes="(max-width: 768px) 33vw, 220px"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Description Text with Glassmorphic Accent */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold block">
                  Our Foundation
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight leading-tight text-text">
                  Comprehensive Training in Central London
                </h2>
                
                <div className="w-12 h-[1px] bg-accent/50"></div>
                
                <div className="space-y-4 font-sans text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    Glam and Go London is a dedicated beauty, aesthetics, and regulated qualification academy located in Soho. We provide structured training pathways for beginners entering beauty therapy, salon professionals upskilling, and experienced practitioners seeking technique refinement.
                  </p>
                  <p>
                    From foundational beauty therapy and clinical skincare to advanced cosmetic masterclasses and wellness injections, our curriculum emphasizes safety standards, facial anatomy, precision technique, and complication management.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Pillars of Training (Luxury Grid) */}
        <section className="border-t border-muted-light/60 py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold block">
                Our Method
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-text">
                Our Training Philosophy
              </h2>
              <div className="w-12 h-[1px] bg-accent/50 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Philosophy Card 1 */}
              <div className="bg-card-bg border border-muted-light/60 p-8 rounded-3xl shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-accent/40 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-accent/20 group-hover:bg-accent transition-colors duration-300"></div>
                <div className="space-y-6">
                  <div className="text-accent font-extrabold text-2xl font-sans tracking-tight opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    01
                  </div>
                  <h3 className="text-base font-extrabold text-text">Safety & Clinical Rigour</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Our programs prioritize client safety and hygiene standards. Training covers anatomical structures, aseptic protocols, product handling, and comprehensive complication recognition and emergency management.
                  </p>
                </div>
              </div>

              {/* Philosophy Card 2 */}
              <div className="bg-card-bg border border-muted-light/60 p-8 rounded-3xl shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-accent/40 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-accent/20 group-hover:bg-accent transition-colors duration-300"></div>
                <div className="space-y-6">
                  <div className="text-accent font-extrabold text-2xl font-sans tracking-tight opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    02
                  </div>
                  <h3 className="text-base font-extrabold text-text">Focused Small Cohorts</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    We restrict cohort sizes to ensure every learner receives close educator attention, real-time technique correction, and dedicated support suited to their individual learning pace.
                  </p>
                </div>
              </div>

              {/* Philosophy Card 3 */}
              <div className="bg-card-bg border border-muted-light/60 p-8 rounded-3xl shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-accent/40 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-accent/20 group-hover:bg-accent transition-colors duration-300"></div>
                <div className="space-y-6">
                  <div className="text-accent font-extrabold text-2xl font-sans tracking-tight opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    03
                  </div>
                  <h3 className="text-base font-extrabold text-text">Supervised Practical Application</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Learners transition seamlessly from classroom theory to practical application on live models under tutor supervision, building real-world technique, consultation ability, and professional confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Premium Accreditation Board */}
        <section className="border-t border-muted-light/60 py-28 bg-muted-light/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-4 block">
              Certified Standards
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-text mb-6">
              Accredited Education Pathways
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-2xl mx-auto mb-16">
              Our training aligns with established professional frameworks, offering CPD certification for practitioners and Ofqual-regulated VTCT beauty qualifications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* CPD Accreditation card */}
              <div className="bg-card-bg border border-muted-light/60 p-8 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left shadow-md relative group hover:scale-[1.01] transition-transform duration-300">
                <div className="absolute top-4 right-4 text-[9px] uppercase tracking-wider font-bold text-accent">CPD Certified</div>
                <div className="h-16 w-20 flex flex-col items-center justify-center border border-accent/20 bg-bg rounded-xl shrink-0 select-none shadow-sm">
                  <span className="text-lg font-extrabold tracking-widest text-text">CPD</span>
                  <span className="text-[6px] uppercase font-bold text-muted -mt-0.5 tracking-wider">Certified</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-text">CPD Masterclasses & Certification</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Our CPD courses cover cosmetic treatments, skin therapies, and wellness injections. On successful completion, graduates receive a CPD certificate designed to support practitioner insurance applications, subject to individual insurance provider terms and prerequisite checks.
                  </p>
                  <div className="pt-1">
                    <Link
                      href="/courses?category=cpd"
                      className="text-[11px] font-bold text-accent hover:underline inline-flex items-center gap-1"
                    >
                      Browse CPD Courses →
                    </Link>
                  </div>
                </div>
              </div>

              {/* VTCT Framework support card */}
              <div className="bg-card-bg border border-muted-light/60 p-8 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left shadow-md relative group hover:scale-[1.01] transition-transform duration-300">
                <div className="absolute top-4 right-4 text-[9px] uppercase tracking-wider font-bold text-accent">VTCT Qualifications</div>
                <div className="h-16 w-20 flex flex-col items-center justify-center border border-accent/20 bg-bg rounded-xl shrink-0 select-none shadow-sm">
                  <span className="text-lg font-extrabold tracking-widest text-text">VTCT</span>
                  <span className="text-[6px] uppercase font-bold text-muted -mt-0.5 tracking-wider">Qualifications</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-text">VTCT Regulated Qualifications</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Nationally recognized, Ofqual-regulated beauty therapy qualifications structured by specific qualification level:
                  </p>
                  <ul className="space-y-1.5 text-xs text-left">
                    <li className="flex items-center justify-between bg-bg/70 px-3 py-1.5 rounded-lg border border-muted-light/40">
                      <Link href="/courses/vtct-level-2-beauty-therapy" className="hover:text-accent font-medium text-text">
                        VTCT Level 2 Diploma in Beauty Therapy
                      </Link>
                      <span className="text-[9px] uppercase font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">
                        Approved
                      </span>
                    </li>
                    <li className="flex items-center justify-between bg-bg/70 px-3 py-1.5 rounded-lg border border-muted-light/40">
                      <Link href="/courses/vtct-level-3-beauty-therapy-treatments" className="hover:text-accent font-medium text-text">
                        VTCT Level 3 Diploma in Beauty Therapy Treatments
                      </Link>
                      <span className="text-[9px] uppercase font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">
                        Approved
                      </span>
                    </li>
                    <li className="flex items-center justify-between bg-bg/70 px-3 py-1.5 rounded-lg border border-muted-light/40">
                      <Link href="/courses/vtct-level-4-beauty-therapy" className="hover:text-accent font-medium text-text">
                        VTCT Level 4 Advanced Beauty Therapy
                      </Link>
                      <span className="text-[9px] uppercase font-bold text-muted bg-muted-light/40 px-2 py-0.5 rounded">
                        Pending Approval
                      </span>
                    </li>
                  </ul>
                  <div className="pt-1">
                    <Link
                      href="/courses?category=vtct"
                      className="text-[11px] font-bold text-accent hover:underline inline-flex items-center gap-1"
                    >
                      View All VTCT Qualifications →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: The Soho Studio Experience (Luxury Gallery Layout) */}
        <section className="border-t border-muted-light/60 py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Details & Features */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold block">
                    Our Location
                  </span>
                  <h2 className="text-3xl font-extrabold tracking-tight text-text leading-tight">
                    Central London <br />
                    Aesthetics Studio
                  </h2>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    Our modern, fully-equipped clinical space is located in the heart of London’s West End. We offer a sterile, professional environment mimicking a real-world clinic setting.
                  </p>
                </div>

                {/* Facilities List */}
                <div className="border-t border-muted-light/60 pt-6 space-y-4 font-sans text-xs">
                  <h3 className="text-[10px] uppercase tracking-wider text-text font-bold">Studio Facilities:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Sterile treatment rooms
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Autoclave equipment
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Intramuscular stations
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Platelet centrifuges
                    </li>
                  </ul>
                </div>
                
                {/* Address block */}
                <div className="border-t border-muted-light/60 pt-6 font-sans text-xs">
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
                    className="inline-block px-5 py-3 border border-text/15 text-text text-xs tracking-wider uppercase font-semibold hover:bg-text hover:text-bg hover:border-text transition-all duration-300 rounded-lg cursor-pointer hover:scale-102"
                  >
                    Find Us on Google Maps
                  </a>
                </div>
              </div>

              {/* Right Column: Dynamic Visual Grid */}
              <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative group">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent/25 via-accent/5 to-transparent blur-2xl opacity-75 transition-all duration-700"></div>
                
                {/* Main Studio Image */}
                <div className="col-span-12 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-muted-light/40 z-10">
                  <Image
                    src="/images/courses/biotin_glutathione.png"
                    alt="Clinical tray with cosmetic ampoules, vials, and sterile instruments on marble countertop"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 700px"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 6: Luxury Call-to-Action Panel */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="bg-gradient-to-br from-[#1C1A17] via-[#12100E] to-[#1C1A17] border border-muted-light/20 p-12 sm:p-20 rounded-3xl text-center text-[#FAF7F2] relative overflow-hidden transition-all duration-300 shadow-2xl group">
            {/* Backdrop glow leek */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,75,0.08)_0%,transparent_70%)] pointer-events-none"></div>
            
            <div className="max-w-xl mx-auto relative z-10 space-y-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold block animate-pulse">
                Begin Your Training
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAF7F2] leading-tight font-sans">
                Advance Your Beauty & <br />
                Aesthetics Career
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF7F2]/75 leading-relaxed max-w-md mx-auto">
                Explore our upcoming cohort dates across VTCT qualifications, CPD certified courses, and refresher modules. Enrol online or speak with our admissions team.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/courses"
                  className="px-8 py-4 bg-accent text-[#FAF7F2] text-xs font-sans tracking-widest uppercase font-semibold text-center hover:bg-[#FAF7F2] hover:text-[#1C1A17] transition-all duration-300 shadow-md w-full sm:w-auto rounded-lg cursor-pointer hover:scale-105 active:scale-95"
                >
                  Explore Courses
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-[#FAF7F2]/20 text-[#FAF7F2] text-xs font-sans tracking-widest uppercase font-semibold text-center hover:bg-[#FAF7F2]/5 hover:border-[#FAF7F2] transition-all duration-300 w-full sm:w-auto rounded-lg cursor-pointer hover:scale-105 active:scale-95"
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
