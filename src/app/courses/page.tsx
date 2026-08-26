"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COURSES } from "@/data/courses";

const CATEGORIES = [
  { id: "all", name: "All Programs", desc: "Browse our complete list of CPD-certified and regulated cosmetics and beauty therapy courses." },
  { id: "injectables", name: "Injectables", desc: "CPD certified and regulated injectables, fillers, and advanced technique modules." },
  { id: "skin", name: "Skin Care", desc: "Skincare therapies, mechanical peeling methods, and micro-needling rejuvenation." },
  { id: "wellness", name: "Wellness & Infusions", desc: "Intramuscular vitamins, phlebotomy access, and IV therapy infusion certifications." },
  { id: "foundation", name: "Foundation Science", desc: "Essential biological anatomy, physiology, and basic clinical theory for practitioners." }
];

function CoursesPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam && CATEGORIES.some(cat => cat.id === categoryParam)) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("all");
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsDropdownOpen(false);
    
    // Update router parameters
    if (categoryId === "all") {
      router.push("/courses");
    } else {
      router.push(`/courses?category=${categoryId}`);
    }
  };

  // Split courses by accreditation
  const cpdCourses = selectedCategory === "all"
    ? COURSES.filter(c => c.accreditation === "CPD")
    : COURSES.filter(c => c.accreditation === "CPD" && c.category === selectedCategory);

  const vtctCourses = selectedCategory === "all"
    ? COURSES.filter(c => c.accreditation === "VTCT")
    : COURSES.filter(c => c.accreditation === "VTCT" && c.category === selectedCategory);

  const activeCategoryDetails = CATEGORIES.find(cat => cat.id === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {/* Intro */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text mb-4">
          Training Programs & Courses
        </h1>
        <p className="font-sans text-sm text-muted leading-relaxed">
          Gain professional qualifications with our certified aesthetics masterclasses and regulated beauty qualifications. Select a course field below to explore dates, rates, and detailed syllabus lists.
        </p>
      </div>

      {/* Category Select Dropdown */}
      <div className="max-w-xs mx-auto mb-16 relative">
        <label className="block text-[10px] uppercase tracking-wider text-muted font-sans font-bold mb-2 text-center">
          Filter by Category
        </label>
        
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between p-3.5 bg-card-bg border border-muted-light/60 hover:border-accent transition-all duration-300 font-sans text-xs font-semibold text-text rounded-lg cursor-pointer shadow-sm"
        >
          <span>{activeCategoryDetails?.name}</span>
          <svg
            className={`w-4 h-4 text-muted transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Options */}
        <div
          className={`absolute left-0 right-0 mt-2 bg-card-bg border border-muted-light/60 shadow-xl rounded-xl py-2.5 z-40 transition-all duration-300 ${
            isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`w-full text-left px-5 py-2.5 text-xs transition-colors duration-200 font-sans font-semibold cursor-pointer ${
                cat.id === selectedCategory
                  ? "text-accent bg-muted-light/35"
                  : "text-text/80 hover:text-accent hover:bg-muted-light/20"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Category Description Text */}
      {activeCategoryDetails && (
        <div className="border-b border-muted-light/60 pb-6 mb-10 max-w-3xl mx-auto text-center">
          <h2 className="font-sans text-xl font-bold text-text uppercase tracking-wider mb-1">
            {activeCategoryDetails.name}
          </h2>
          <p className="font-sans text-xs text-muted leading-relaxed">
            {activeCategoryDetails.desc}
          </p>
        </div>
      )}

      {/* CPD Section */}
      <div className="space-y-8">
        <div className="border-b border-muted-light/40 pb-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold block mb-1">Aesthetics & Skin Certification</span>
          <h2 className="font-sans text-2xl font-bold text-text">CPD Certified Courses</h2>
        </div>
        
        {cpdCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cpdCourses.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col bg-card-bg border border-muted-light/60 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 cursor-pointer animate-fade-in-tab"
              >
                {/* Card Image */}
                <div className="relative aspect-[4/3] w-full bg-muted-light overflow-hidden rounded-t-2xl">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="px-2.5 py-1 bg-bg/90 backdrop-blur-sm text-text text-[8px] uppercase tracking-wider font-bold font-sans border border-muted-light/40 rounded-md">
                      {course.level}
                    </span>
                    <span className="px-2 py-1 bg-accent text-white text-[8px] uppercase tracking-wider font-bold font-sans rounded-md shadow-sm">
                      CPD
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="font-sans text-sm font-bold text-text mb-1.5 group-hover:text-accent transition-colors duration-300 min-h-[40px] line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <span className="text-[10px] font-sans font-medium text-accent tracking-wide mb-3 block">
                    Next Start Date: {course.startDate}
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
                        £{course.price}
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
        ) : (
          <p className="font-sans text-xs text-muted">No CPD certified courses available in this category.</p>
        )}
      </div>

      {/* VTCT Section */}
      {vtctCourses.length > 0 && (
        <div className="mt-20 pt-16 border-t border-muted-light/60 space-y-8">
          <div className="border-b border-muted-light/40 pb-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold block mb-1">Ofqual-Regulated Qualifications</span>
            <h2 className="font-sans text-2xl font-bold text-text">VTCT Approved Qualifications</h2>
            <p className="text-[10px] text-muted font-sans mt-1">
              * Note: VTCT registration, exam, and certification fees are included in the listed tuition fees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {vtctCourses.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col bg-card-bg border border-muted-light/60 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 cursor-pointer animate-fade-in-tab"
              >
                {/* Card Image */}
                <div className="relative aspect-[4/3] w-full bg-muted-light overflow-hidden rounded-t-2xl">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="px-2.5 py-1 bg-bg/90 backdrop-blur-sm text-text text-[8px] uppercase tracking-wider font-bold font-sans border border-muted-light/40 rounded-md">
                      {course.level}
                    </span>
                    <span className="px-2 py-1 bg-accent text-white text-[8px] uppercase tracking-wider font-bold font-sans rounded-md shadow-sm">
                      VTCT
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="font-sans text-sm font-bold text-text mb-1.5 group-hover:text-accent transition-colors duration-300 min-h-[40px] line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <span className="text-[10px] font-sans font-medium text-accent tracking-wide mb-3 block">
                    Status: {course.startDate}
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
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx global>{`
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
      `}</style>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-32 pb-24">
        <Suspense fallback={
          <div className="min-h-[50vh] flex items-center justify-center">
            <svg className="animate-spin h-8 w-8 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        }>
          <CoursesPageContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
