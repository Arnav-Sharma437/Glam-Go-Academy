import Image from "next/image";
import Link from "next/link";

interface Course {
  id: string;
  slug: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  startDate: string;
  description: string;
  price: number;
  image: string;
}

const COURSES: Course[] = [
  {
    id: "1",
    slug: "lash-extensions-masterclass",
    title: "Lash Extensions Masterclass",
    level: "Beginner",
    startDate: "Sept 12, 2026",
    description: "Master the complete artistry of classic individual and advanced Russian volume lashes.",
    price: 450,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600",
  },
  {
    id: "2",
    slug: "brow-artist-certification",
    title: "Brow Artist Certification",
    level: "Beginner",
    startDate: "Sept 24, 2026",
    description: "Learn precision brow mapping, waxing, tinting, and modern lamination styling.",
    price: 350,
    image: "https://images.unsplash.com/photo-1522337060767-14175287dc34?q=80&w=600",
  },
  {
    id: "3",
    slug: "aesthetics-practitioner-course",
    title: "Aesthetics Practitioner Course",
    level: "Advanced",
    startDate: "Oct 05, 2026",
    description: "Advanced skin needling, professional dermaplaning, and chemical peel techniques.",
    price: 799,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600",
  },
];

export default function CoursesOverview() {
  return (
    <section id="courses" className="py-24 md:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold font-sans mb-3 block">
              Our Training Programs
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-text">
              Transform Passion Into A Professional Career
            </h2>
          </div>
          <p className="font-sans text-sm text-muted max-w-sm mt-4 md:mt-0 leading-relaxed">
            Accredited curriculum designed for fast-track careers. Gain the confidence, technique, and industry certificates that clients trust.
          </p>
        </div>

        {/* Course Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col bg-card-bg border border-muted-light/60 overflow-hidden transition-all duration-300 hover:border-accent/40"
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
                <span className="absolute top-4 left-4 px-3 py-1 bg-bg/90 backdrop-blur-sm text-text text-[9px] uppercase tracking-widest font-semibold font-sans rounded-none border border-muted-light/40">
                  {course.level}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-sans text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                  {course.title}
                </h3>
                
                <span className="text-[11px] font-sans font-medium text-accent tracking-wider mb-4 block">
                  Next Start Date | {course.startDate}
                </span>
                
                <p className="font-sans text-xs text-muted leading-relaxed mb-6 flex-grow">
                  {course.description}
                </p>

                <div className="pt-5 border-t border-muted-light/60 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-muted font-sans">
                      Tuition Fees
                    </span>
                    <span className="font-sans font-bold text-text text-base">
                      From £{course.price}
                    </span>
                  </div>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-[11px] font-sans uppercase tracking-widest font-semibold text-text group-hover:text-accent transition-colors duration-300 hover-underline-reveal"
                  >
                    View Course →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
