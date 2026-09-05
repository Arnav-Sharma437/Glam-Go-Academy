import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COURSES, Course } from "@/data/courses";
import CourseFilterDropdown from "./CourseFilterDropdown";

const CATEGORIES = [
  { id: "all", name: "All Programs", desc: "Browse our complete catalog of CPD-certified aesthetics masterclasses, regulated VTCT qualifications, and clinical refresher courses." },
  { id: "vtct", name: "VTCT Qualifications", desc: "Official Ofqual-regulated qualifications covering Level 2, Level 3, and Level 4 Beauty Therapy, Treatments, and Clinical Skin." },
  { id: "cpd", name: "CPD Courses", desc: "Professional CPD-certified masterclasses in cosmetic injectables, advanced skin therapies, and wellness infusions for practitioners." },
  { id: "injectables", name: "Injectables", desc: "CPD certified cosmetic injectables, dermal fillers, polynucleotides, exosomes, skin bio-remodelling, and facial contouring." },
  { id: "skin", name: "Skin Care", desc: "Clinical skincare therapies including automated microneedling, surgical dermaplaning, and anatomical science foundations." },
  { id: "wellness", name: "IV Drips & Wellness", desc: "Intravenous (IV) nutrition therapy drips, intramuscular vitamin injections, phlebotomy, and cellular antioxidant protocols." },
  { id: "refresher", name: "Refresher Courses", desc: "Intensive 1-to-1 live model refresher masterclasses for previously qualified practitioners seeking technique updates and confidence." }
];

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

function CourseCard({ course }: { course: Course }) {
  const isVtct = course.accreditation === "VTCT";
  const isRefresher = course.isRefresher || course.category === "refresher";

  return (
    <div
      key={course.id}
      className="group flex flex-col bg-card-bg border border-muted-light/60 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 animate-fade-in-tab"
    >
      {/* Clickable Card Image */}
      <Link href={`/courses/${course.slug}`} className="relative aspect-[4/3] w-full bg-muted-light overflow-hidden block">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 400px"
          className="object-cover transition-transform duration-700 group-hover:scale-103"
        />
        <div className="absolute top-3 left-3 flex gap-1.5 z-10">
          <span className="px-2.5 py-1 bg-bg/90 backdrop-blur-sm text-text text-[8px] uppercase tracking-wider font-bold font-sans border border-muted-light/40 rounded-md">
            {course.level}
          </span>
          <span className={`px-2 py-1 text-white text-[8px] uppercase tracking-wider font-bold font-sans rounded-md shadow-sm ${
            isVtct ? "bg-accent" : isRefresher ? "bg-stone-700" : "bg-accent"
          }`}>
            {isVtct ? "VTCT Regulated" : isRefresher ? "Refresher" : "CPD Certified"}
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-sans text-sm font-bold text-text mb-1.5 min-h-[40px] line-clamp-2">
          <Link href={`/courses/${course.slug}`} className="hover:text-accent transition-colors duration-300">
            {course.title}
          </Link>
        </h3>
        
        <span className="text-[10px] font-sans font-medium text-accent tracking-wide mb-3 block">
          {isVtct ? `Status: ${course.startDate}` : `Next Date: ${course.startDate}`}
        </span>
        
        <p className="font-sans text-xs text-muted leading-relaxed mb-4 flex-grow line-clamp-3">
          {course.description}
        </p>

        <div className="pt-4 border-t border-muted-light/60 flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-wider text-muted font-sans font-bold">
              Tuition Fees
            </span>
            <span className="font-sans font-bold text-text text-xs sm:text-sm">
              {course.price > 0 ? `£${course.price}` : "Coming Soon"}
            </span>
          </div>

          <Link
            href={`/courses/${course.slug}`}
            className="text-[10px] font-sans uppercase tracking-wider font-bold text-text group-hover:text-accent transition-colors duration-300 hover-underline-reveal cursor-pointer"
          >
            {isVtct ? "View Details →" : "View Course →"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function CoursesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const selectedCategory = params.category && CATEGORIES.some(cat => cat.id === params.category)
    ? params.category
    : "all";

  const activeCategoryDetails = CATEGORIES.find(cat => cat.id === selectedCategory);

  // Grouped datasets
  const vtctCourses = COURSES.filter(c => c.accreditation === "VTCT");
  const cpdInjectables = COURSES.filter(c => c.accreditation === "CPD" && c.category === "injectables" && !c.isRefresher);
  const cpdSkin = COURSES.filter(c => c.accreditation === "CPD" && c.category === "skin" && !c.isRefresher);
  const cpdWellness = COURSES.filter(c => c.accreditation === "CPD" && c.category === "wellness" && !c.isRefresher);
  const refresherCourses = COURSES.filter(c => c.isRefresher || c.category === "refresher");
  const allCpdCourses = COURSES.filter(c => c.accreditation === "CPD");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Intro Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold block mb-2 font-sans">
              Academy Course Directory
            </span>
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text mb-4">
              Training Programs & Masterclasses
            </h1>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Gain prestigious industry qualifications with our CPD-certified aesthetics masterclasses, hands-on refresher modules, and Ofqual-regulated VTCT beauty therapy qualifications.
            </p>
          </div>

          {/* NHS Discount Notice Banner (Text-based compliant notice) */}
          <div className="max-w-3xl mx-auto mb-10 bg-card-bg border border-accent/30 rounded-xl p-4 sm:p-5 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
              <span className="font-sans font-bold text-accent text-xs">NHS</span>
            </div>
            <div className="flex-1">
              <h2 className="font-sans text-xs font-bold text-text uppercase tracking-wider mb-0.5">
                NHS Staff Discount Available
              </h2>
              <p className="font-sans text-xs text-muted leading-relaxed">
                We proudly offer a <strong>10% tuition discount</strong> on all CPD certified courses and training programs for verified NHS healthcare staff. Please present your valid NHS ID during enquiry.
              </p>
            </div>
          </div>

          {/* Category Filter Dropdown */}
          <CourseFilterDropdown categories={CATEGORIES} selectedCategory={selectedCategory} />

          {/* Selected Category Intro */}
          {activeCategoryDetails && selectedCategory !== "all" && (
            <div className="border-b border-muted-light/60 pb-6 mb-12 max-w-3xl mx-auto text-center animate-fade-in-tab">
              <h2 className="font-sans text-xl font-bold text-text uppercase tracking-wider mb-1">
                {activeCategoryDetails.name}
              </h2>
              <p className="font-sans text-xs text-muted leading-relaxed">
                {activeCategoryDetails.desc}
              </p>
            </div>
          )}

          {/* ==========================================
              VIEW 1: ALL PROGRAMS (Structured Sections)
             ========================================== */}
          {selectedCategory === "all" && (
            <div className="space-y-20">
              {/* Section 1: VTCT Regulated Qualifications */}
              <section className="space-y-6">
                <div className="border-b border-muted-light/60 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold block mb-1">
                    Ofqual-Regulated Qualifications
                  </span>
                  <h2 className="font-sans text-2xl font-bold text-text">
                    VTCT Approved Qualifications
                  </h2>
                  <p className="text-xs text-muted font-sans mt-1">
                    Officially recognized regulated beauty therapy qualifications from Level 2 to Level 4. Includes exam, registration, and awarding body fees.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {vtctCourses.map(course => <CourseCard key={course.id} course={course} />)}
                </div>
              </section>

              {/* Section 2: CPD Injectables */}
              <section className="space-y-6 pt-6">
                <div className="border-b border-muted-light/60 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold block mb-1">
                    CPD Certified Aesthetic Masterclasses
                  </span>
                  <h2 className="font-sans text-2xl font-bold text-text">
                    CPD Injectables & Biostimulators
                  </h2>
                  <p className="text-xs text-muted font-sans mt-1">
                    Upper face, full facial contouring, polynucleotides, exosomes, Profhilo BAP, skin boosters, and PRP therapies with extensive live model practice.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {cpdInjectables.map(course => <CourseCard key={course.id} course={course} />)}
                </div>
              </section>

              {/* Section 3: CPD Skin Care */}
              <section className="space-y-6 pt-6">
                <div className="border-b border-muted-light/60 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold block mb-1">
                    Clinical Skin Therapies
                  </span>
                  <h2 className="font-sans text-2xl font-bold text-text">
                    CPD Skin Care & Advanced Therapies
                  </h2>
                  <p className="text-xs text-muted font-sans mt-1">
                    Automated microneedling collagen induction, surgical dermaplaning exfoliation, and anatomical theory foundations.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {cpdSkin.map(course => <CourseCard key={course.id} course={course} />)}
                </div>
              </section>

              {/* Section 4: IV Drips & Wellness */}
              <section className="space-y-6 pt-6">
                <div className="border-b border-muted-light/60 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold block mb-1">
                    Wellness Infusions & Phlebotomy
                  </span>
                  <h2 className="font-sans text-2xl font-bold text-text">
                    IV Drips & Wellness Injections
                  </h2>
                  <p className="text-xs text-muted font-sans mt-1">
                    Intravenous vitamin drips, antioxidant Glutathione & Biotin wellness protocols, intramuscular B12, and clinical venepuncture training.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {cpdWellness.map(course => <CourseCard key={course.id} course={course} />)}
                </div>
              </section>

              {/* Section 5: Refresher Courses */}
              <section className="space-y-6 pt-6">
                <div className="border-b border-muted-light/60 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold block mb-1">
                    Skill Upgrade & 1-to-1 Mentorship
                  </span>
                  <h2 className="font-sans text-2xl font-bold text-text">
                    Refresher Courses for Qualified Practitioners
                  </h2>
                  <p className="text-xs text-muted font-sans mt-1">
                    Intensive half-day practical refresher modules with live models for practitioners who are already qualified and want to refresh their clinical technique or gain confidence.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {refresherCourses.map(course => <CourseCard key={course.id} course={course} />)}
                </div>
              </section>
            </div>
          )}

          {/* ==========================================
              VIEW 2: VTCT ONLY
             ========================================== */}
          {selectedCategory === "vtct" && (
            <div className="space-y-8 animate-fade-in-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {vtctCourses.map(course => <CourseCard key={course.id} course={course} />)}
              </div>
            </div>
          )}

          {/* ==========================================
              VIEW 3: CPD COURSES (ALL CPD)
             ========================================== */}
          {selectedCategory === "cpd" && (
            <div className="space-y-8 animate-fade-in-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {allCpdCourses.map(course => <CourseCard key={course.id} course={course} />)}
              </div>
            </div>
          )}

          {/* ==========================================
              VIEW 4: INJECTABLES
             ========================================== */}
          {selectedCategory === "injectables" && (
            <div className="space-y-8 animate-fade-in-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {cpdInjectables.map(course => <CourseCard key={course.id} course={course} />)}
              </div>
            </div>
          )}

          {/* ==========================================
              VIEW 5: SKIN CARE
             ========================================== */}
          {selectedCategory === "skin" && (
            <div className="space-y-8 animate-fade-in-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {cpdSkin.map(course => <CourseCard key={course.id} course={course} />)}
              </div>
            </div>
          )}

          {/* ==========================================
              VIEW 6: WELLNESS & IV DRIPS
             ========================================== */}
          {selectedCategory === "wellness" && (
            <div className="space-y-8 animate-fade-in-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {cpdWellness.map(course => <CourseCard key={course.id} course={course} />)}
              </div>
            </div>
          )}

          {/* ==========================================
              VIEW 7: REFRESHER COURSES
             ========================================== */}
          {selectedCategory === "refresher" && (
            <div className="space-y-8 animate-fade-in-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {refresherCourses.map(course => <CourseCard key={course.id} course={course} />)}
              </div>
            </div>
          )}

        </div>
      </main>
      <Footer />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInTab {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-tab {
          animation: fadeInTab 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </>
  );
}

