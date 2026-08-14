import Image from "next/image";
import Link from "next/link";

interface Course {
  id: string;
  slug: string;
  title: string;
  category: "nvq" | "aesthetics" | "fast-track";
  level: "Beginner" | "Intermediate" | "Advanced";
  startDate: string;
  description: string;
  price: number;
  image: string;
}

const COURSES: Course[] = [
  {
    id: "1",
    slug: "nvq-level-2-beauty-therapy",
    title: "NVQ Level 2 Beauty Therapy Diploma",
    category: "nvq",
    level: "Beginner",
    startDate: "Sept 15, 2026",
    description: "Gain core beauty therapist qualifications covering luxury facials, skincare, waxing, manicure, and pedicure treatments.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600",
  },
  {
    id: "2",
    slug: "nvq-level-3-beauty-therapy",
    title: "NVQ Level 3 Beauty Therapy Diploma",
    category: "nvq",
    level: "Intermediate",
    startDate: "Sept 20, 2026",
    description: "Advance into full body treatments, professional massage styles, electrotherapy facials, and advanced clinical skincare.",
    price: 1500,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600",
  },
  {
    id: "3",
    slug: "nvq-level-2-nail-technology",
    title: "NVQ Level 2 Nail Technology Diploma",
    category: "nvq",
    level: "Beginner",
    startDate: "Sept 18, 2026",
    description: "Master essential nail care, professional manicures, pedicures, acrylic enhancements, and basic nail art designs.",
    price: 950,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600",
  },
  {
    id: "4",
    slug: "nvq-level-3-nail-technology",
    title: "NVQ Level 3 Nail Technology Diploma",
    category: "nvq",
    level: "Intermediate",
    startDate: "Oct 02, 2026",
    description: "Learn advanced acrylic extensions, tip sculpting, electric filing, custom nail designs, and professional salon operations.",
    price: 1100,
    image: "https://images.unsplash.com/photo-1632345031435-8797b2d58045?q=80&w=600",
  },
  {
    id: "5",
    slug: "vtct-level-4-microneedling",
    title: "Level 4 Microneedling & Chemical Peels",
    category: "aesthetics",
    level: "Advanced",
    startDate: "Oct 12, 2026",
    description: "Advanced clinical cosmetic rejuvenation training covering micro-needling, collagen induction, and acid peel applications.",
    price: 1800,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600",
  },
  {
    id: "6",
    slug: "vtct-level-4-laser-ipl",
    title: "Level 4 Laser & IPL Hair Removal",
    category: "aesthetics",
    level: "Advanced",
    startDate: "Oct 15, 2026",
    description: "Specialized safety training in Laser and IPL devices for hair reduction, skin typing, and thermal skin treatments.",
    price: 2200,
    image: "https://images.unsplash.com/photo-1522337360788-8b13edd793be?q=80&w=600",
  },
  {
    id: "7",
    slug: "lash-extensions-masterclass",
    title: "Lash Extensions Masterclass",
    category: "fast-track",
    level: "Beginner",
    startDate: "Sept 12, 2026",
    description: "Master the complete artistry of classic individual and advanced Russian volume lash isolation and fan crafting.",
    price: 450,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600",
  },
  {
    id: "8",
    slug: "brow-artist-certification",
    title: "Brow Artist Certification",
    category: "fast-track",
    level: "Beginner",
    startDate: "Sept 24, 2026",
    description: "Learn symmetrical facial mapping, waxing, styling, tinting, and modern brow lamination chemical treatments.",
    price: 350,
    image: "https://images.unsplash.com/photo-1522337060767-14175287dc34?q=80&w=600",
  },
  {
    id: "9",
    slug: "makeup-artistry-diploma",
    title: "Professional Makeup Artistry Diploma",
    category: "fast-track",
    level: "Beginner",
    startDate: "Oct 10, 2026",
    description: "Develop professional makeup skills from base blending and contouring to bridal aesthetics and high-fashion editorial runway looks.",
    price: 600,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600",
  }
];

const CATEGORIES = [
  { id: "nvq", name: "VTCT NVQ Diplomas", count: 4, desc: "Accredited state qualifications for salon employment." },
  { id: "aesthetics", name: "Aesthetics & Laser", count: 2, desc: "Advanced cosmetic treatments and skin therapy technologies." },
  { id: "fast-track", name: "Fast-Track Specialty", count: 3, desc: "Intensive training courses for rapid skill certification." }
];

export default function CoursesOverview() {
  return (
    <section id="courses" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold font-sans mb-3 block">
              Our Training Programs
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-text">
              Transform Passion Into A Professional Career
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-muted max-w-sm mt-4 md:mt-0 leading-relaxed">
            Fully accredited qualifications designed for fast-track careers. Gain the confidence, technique, and industry certificates that clients trust.
          </p>
        </div>

        {/* Categories Sticky Quick-Nav Menu */}
        <div className="flex flex-wrap gap-2.5 pb-5 border-b border-muted-light/60 mb-10 sticky top-[72px] bg-bg/95 backdrop-blur-md z-40 py-4 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
          <span className="text-[10px] uppercase tracking-widest font-bold text-muted mr-4 self-center">
            Jump to:
          </span>
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="px-4 py-2 border border-muted-light/80 hover:border-accent hover:text-accent font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer bg-card-bg"
            >
              {cat.name} ({cat.count})
            </a>
          ))}
        </div>

        {/* Grouped Courses Lists */}
        <div className="space-y-16">
          {CATEGORIES.map((category) => {
            const categoryCourses = COURSES.filter((c) => c.category === category.id);
            return (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-28 border-b border-muted-light/60 pb-16 last:border-0 last:pb-0"
              >
                {/* Category Header */}
                <div className="mb-8">
                  <h3 className="font-sans text-xl font-bold text-text uppercase tracking-wider">
                    {category.name}
                  </h3>
                  <p className="font-sans text-xs text-muted mt-1">
                    {category.desc}
                  </p>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <span className="absolute top-4 left-4 px-3 py-1 bg-bg/90 backdrop-blur-sm text-text text-[9px] uppercase tracking-widest font-semibold font-sans border border-muted-light/40">
                          {course.level}
                        </span>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 flex-grow flex flex-col">
                        <h4 className="font-sans text-base font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300 min-h-[48px] line-clamp-2">
                          {course.title}
                        </h4>
                        
                        <span className="text-[11px] font-sans font-medium text-accent tracking-wider mb-4 block">
                          Next Start Date | {course.startDate}
                        </span>
                        
                        <p className="font-sans text-xs text-muted leading-relaxed mb-6 flex-grow line-clamp-3">
                          {course.description}
                        </p>

                        <div className="pt-5 border-t border-muted-light/60 flex items-center justify-between mt-auto">
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-wider text-muted font-sans font-semibold">
                              Tuition Fees
                            </span>
                            <span className="font-sans font-bold text-text text-sm">
                              From £{course.price}
                            </span>
                          </div>

                          <Link
                            href={`/courses/${course.slug}`}
                            className="text-[11px] font-sans uppercase tracking-widest font-bold text-text group-hover:text-accent transition-colors duration-300 hover-underline-reveal"
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
