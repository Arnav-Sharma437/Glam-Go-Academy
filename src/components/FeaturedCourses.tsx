import Image from "next/image";
import Link from "next/link";
import { COURSES, getCourseDeadlineInfo } from "@/data/courses";

// Pull the 3 specific courses by their unique IDs from the unified database
const FEATURED_COURSES = COURSES.filter(c => 
  ["foundation-injectables", "microneedling", "biotin-glutathione"].includes(c.id)
);

export default function FeaturedCourses() {
  return (
    <section className="py-16 md:py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-wider text-accent font-semibold font-sans mb-2 block">
              Featured Training Programs
            </span>
            <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-text">
              Launch Your Career in Professional Cosmetics
            </h2>
          </div>
          <p className="font-sans text-xs text-muted max-w-sm mt-3 md:mt-0 leading-relaxed">
            Gain certified CPD qualifications. Learn hands-on in our Central London studio under the supervision of leading clinical practitioners.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {FEATURED_COURSES.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col bg-card-bg border border-muted-light/60 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full bg-muted-light overflow-hidden rounded-t-2xl">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 33vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="px-2.5 py-1 bg-bg/90 backdrop-blur-sm text-text text-[8px] uppercase tracking-wider font-bold font-sans border border-muted-light/40 rounded-md">
                    {course.level}
                  </span>
                  <span className="px-2 py-1 bg-accent text-white text-[8px] uppercase tracking-wider font-bold font-sans rounded-md shadow-sm">
                    {course.accreditation}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="font-sans text-sm font-bold text-text mb-1.5 group-hover:text-accent transition-colors duration-300 min-h-[40px] line-clamp-2">
                  {course.title}
                </h3>
                
                <div className="space-y-0.5 mb-3">
                  <span className="text-[10px] font-sans font-medium text-accent tracking-wide block">
                    Next Start: {course.startDate}
                  </span>
                  <span className="text-[9px] font-sans text-muted tracking-wide block">
                    Deadline: {getCourseDeadlineInfo(course).fullFormatted}
                  </span>
                </div>
                
                <p className="font-sans text-xs text-muted leading-relaxed mb-4 flex-grow line-clamp-3">
                  {course.description}
                </p>

                <div className="pt-4 border-t border-muted-light/60 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-muted font-sans font-bold">
                      Tuition Fees
                    </span>
                    <span className="font-sans font-bold text-text text-xs sm:text-sm">
                      From £{course.price}
                    </span>
                  </div>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-[10px] font-sans uppercase tracking-wider font-bold text-text group-hover:text-accent transition-colors duration-300 hover-underline-reveal cursor-pointer"
                  >
                    View Course →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/courses"
            className="inline-flex px-8 py-4 bg-text text-bg text-xs font-sans tracking-wider uppercase font-semibold hover:bg-accent hover:text-white transition-all duration-300 rounded-lg shadow-md hover:scale-102 cursor-pointer"
          >
            Explore All Academy Courses ({COURSES.length}) →
          </Link>
        </div>

      </div>
    </section>
  );
}
