import Image from "next/image";
import Link from "next/link";

interface Course {
  id: string;
  slug: string;
  title: string;
  category: "injectables" | "skin" | "wellness" | "foundation";
  level: "Beginner" | "Intermediate" | "Advanced";
  startDate: string;
  description: string;
  price: number;
  image: string;
}

const COURSES: Course[] = [
  // Injectables (5)
  {
    id: "1",
    slug: "foundation-injectables",
    title: "Foundation Injectables",
    category: "injectables",
    level: "Beginner",
    startDate: "Sept 15, 2026",
    description: "Your first supervised injecting day – facial anatomy, analysis and basic upper face technique on live models.",
    price: 895,
    image: "https://images.unsplash.com/photo-1614859324967-bdf461fec769?q=80&w=600",
  },
  {
    id: "2",
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    category: "injectables",
    level: "Beginner",
    startDate: "Sept 20, 2026",
    description: "Lip and nasolabial foundation with live models, full consultation and complication protocols.",
    price: 895,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600",
  },
  {
    id: "3",
    slug: "advanced-injectables",
    title: "Advanced Injectables",
    category: "injectables",
    level: "Advanced",
    startDate: "Sept 28, 2026",
    description: "Full face advanced treatments for practicing injectors. Taught in tiny results-focused groups of four.",
    price: 1095,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600",
  },
  {
    id: "4",
    slug: "advanced-fillers-russian-lip",
    title: "Advanced Fillers & Russian Lip",
    category: "injectables",
    level: "Advanced",
    startDate: "Oct 02, 2026",
    description: "Advanced lip and mid face techniques including the Russian technique – our most popular module.",
    price: 1095,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600",
  },
  {
    id: "5",
    slug: "fat-dissolving-injectables",
    title: "Fat Dissolving Injectables",
    category: "injectables",
    level: "Beginner",
    startDate: "Oct 12, 2026",
    description: "Aqualyx & Desobody treatments – client assessment, injection technique and safety aftercare.",
    price: 795,
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=600",
  },
  
  // Skin (3)
  {
    id: "6",
    slug: "microneedling",
    title: "Microneedling",
    category: "skin",
    level: "Beginner",
    startDate: "Sept 24, 2026",
    description: "Professional microneedling for face & hair. Skincare theory, protocols and hands-on practice.",
    price: 595,
    image: "https://images.unsplash.com/photo-1522337360788-8b13edd793be?q=80&w=600",
  },
  {
    id: "7",
    slug: "dermaplaning",
    title: "Dermaplaning",
    category: "skin",
    level: "Beginner",
    startDate: "Sept 18, 2026",
    description: "Safe blade work, skin preparation and finishing for instantly smoother and brighter skin.",
    price: 495,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600",
  },
  {
    id: "8",
    slug: "prp-therapy",
    title: "PRP Therapy",
    category: "skin",
    level: "Intermediate",
    startDate: "Oct 05, 2026",
    description: "Platelet-Rich Plasma – the full face & scalp treatment for skin rejuvenation and hair stimulation.",
    price: 795,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600",
  },

  // Wellness (4)
  {
    id: "9",
    slug: "vitamin-injections",
    title: "Vitamin Injections",
    category: "wellness",
    level: "Beginner",
    startDate: "Oct 10, 2026",
    description: "IM injection techniques, client screening and record-keeping for vitamin therapies.",
    price: 495,
    image: "https://images.unsplash.com/photo-1607619056574-7b8f30413b58?q=80&w=600",
  },
  {
    id: "10",
    slug: "biotin-glutathione",
    title: "Biotin & Glutathione",
    category: "wellness",
    level: "Beginner",
    startDate: "Oct 18, 2026",
    description: "Extend your injection menu with hair, skin and antioxidant body support protocols.",
    price: 495,
    image: "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?q=80&w=600",
  },
  {
    id: "11",
    slug: "iv-nutrition-therapy",
    title: "IV Nutrition Therapy",
    category: "wellness",
    level: "Intermediate",
    startDate: "Oct 22, 2026",
    description: "Cannulation refresher, drip bag assembly, vitamin cocktails and safe infusion monitoring.",
    price: 795,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600",
  },
  {
    id: "12",
    slug: "phlebotomy",
    title: "Phlebotomy",
    category: "wellness",
    level: "Beginner",
    startDate: "Oct 25, 2026",
    description: "Venepuncture from first draw to safe disposal, with practice training arms and live draws.",
    price: 595,
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600",
  },

  // Foundation (1)
  {
    id: "13",
    slug: "anatomy-physiology-aesthetics",
    title: "Anatomy & Physiology for Aesthetics",
    category: "foundation",
    level: "Beginner",
    startDate: "Self-Paced",
    description: "The essential theory foundation covering skeletal, muscular, circulatory and skin structures.",
    price: 395,
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=600",
  }
];

const CATEGORIES = [
  { id: "injectables", name: "Injectables", count: 5, desc: "CPD accredited injectable and cosmetic filler training modules." },
  { id: "skin", name: "Skin", count: 3, desc: "Skincare treatments, exfoliation methods, and dermis rejuvenation." },
  { id: "wellness", name: "Wellness", count: 4, desc: "Intramuscular vitamins, venepuncture, and IV therapy infusions." },
  { id: "foundation", name: "Foundation", count: 1, desc: "Essential biological theory required for cosmetic practice." }
];

export default function CoursesOverview() {
  return (
    <section id="courses" className="py-16 md:py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold font-sans mb-2 block">
              Our Training Programs
            </span>
            <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-text">
              Transform Passion Into A Professional Career
            </h2>
          </div>
          <p className="font-sans text-xs text-muted max-w-sm mt-3 md:mt-0 leading-relaxed">
            Fully accredited CPD qualifications designed for fast-track careers. Gain the confidence, technique, and industry certificates that clients trust.
          </p>
        </div>

        {/* Categories Sticky Quick-Nav Menu */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-muted-light/60 mb-8 sticky top-[68px] bg-bg/95 backdrop-blur-md z-40 py-3 shadow-[0_2px_4px_rgba(0,0,0,0.01)]">
          <span className="text-[10px] uppercase tracking-widest font-bold text-muted mr-3 self-center">
            Jump to:
          </span>
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="px-3.5 py-1.5 border border-muted-light/80 hover:border-accent hover:text-accent font-sans text-[11px] uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer bg-card-bg"
            >
              {cat.name} ({cat.count})
            </a>
          ))}
        </div>

        {/* Grouped Courses Lists */}
        <div className="space-y-12">
          {CATEGORIES.map((category) => {
            const categoryCourses = COURSES.filter((c) => c.category === category.id);
            return (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-24 border-b border-muted-light/60 pb-12 last:border-0 last:pb-0"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="font-sans text-lg font-bold text-text uppercase tracking-wider">
                    {category.name}
                  </h3>
                  <p className="font-sans text-xs text-muted mt-0.5">
                    {category.desc}
                  </p>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {categoryCourses.map((course) => (
                    <div
                      key={course.id}
                      className="group flex flex-col bg-card-bg border border-muted-light/60 overflow-hidden transition-all duration-300 hover:border-accent/40 shadow-sm"
                    >
                      {/* Image with Level Badge */}
                      <div className="relative aspect-[4/3] w-full bg-muted-light overflow-hidden">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 400px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute top-3 left-3 px-2 py-0.5 bg-bg/90 backdrop-blur-sm text-text text-[8px] uppercase tracking-widest font-semibold font-sans border border-muted-light/40">
                          {course.level}
                        </span>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 flex-grow flex flex-col">
                        <h4 className="font-sans text-sm font-bold text-text mb-1.5 group-hover:text-accent transition-colors duration-300 min-h-[40px] line-clamp-2">
                          {course.title}
                        </h4>
                        
                        <span className="text-[10px] font-sans font-medium text-accent tracking-wider mb-3 block">
                          Next Start Date | {course.startDate}
                        </span>
                        
                        <p className="font-sans text-xs text-muted leading-relaxed mb-4 flex-grow line-clamp-3">
                          {course.description}
                        </p>

                        <div className="pt-4 border-t border-muted-light/60 flex items-center justify-between mt-auto">
                          <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-wider text-muted font-sans font-semibold">
                              Tuition Fees
                            </span>
                            <span className="font-sans font-bold text-text text-xs sm:text-sm">
                              From £{course.price}
                            </span>
                          </div>

                          <Link
                            href={`/courses/${course.slug}`}
                            className="text-[10px] font-sans uppercase tracking-widest font-bold text-text group-hover:text-accent transition-colors duration-300 hover-underline-reveal"
                          >
                            View Course →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
