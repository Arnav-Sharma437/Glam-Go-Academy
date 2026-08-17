"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    image: "/images/courses/foundation_injectables.jpg",
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
    image: "/images/courses/dermal_fillers.jpg",
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
    image: "/images/courses/advanced_injectables.jpg",
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
    image: "/images/courses/russian_lip.jpg",
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
    image: "/images/courses/fat_dissolving.jpg",
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
    image: "/images/courses/microneedling.jpg",
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
    image: "/images/courses/dermaplaning.jpg",
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
    image: "/images/courses/prp_therapy.jpg",
  },

  // Wellness (3)
  {
    id: "9",
    slug: "vitamin-injections",
    title: "Vitamin Injections",
    category: "wellness",
    level: "Beginner",
    startDate: "Oct 10, 2026",
    description: "IM injection techniques, client screening and record-keeping for vitamin therapies.",
    price: 495,
    image: "/images/courses/vitamin_injections.jpg",
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
    image: "/images/courses/biotin_glutathione.jpg",
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
    image: "/images/courses/iv_nutrition.jpg",
  },

  // Foundation (2)
  {
    id: "12",
    slug: "phlebotomy",
    title: "Phlebotomy",
    category: "foundation",
    level: "Beginner",
    startDate: "Oct 25, 2026",
    description: "Venepuncture from first draw to safe disposal, with practice training arms and live draws.",
    price: 595,
    image: "/images/courses/phlebotomy.jpg",
  },
  {
    id: "13",
    slug: "anatomy-physiology-aesthetics",
    title: "Anatomy & Physiology for Aesthetics",
    category: "foundation",
    level: "Beginner",
    startDate: "Self-Paced",
    description: "The essential theory foundation covering skeletal, muscular, circulatory and skin structures.",
    price: 395,
    image: "/images/courses/anatomy_physiology.jpg",
  }
];

const CATEGORIES = [
  { id: "all", name: "All Programs", desc: "Browse our complete list of CPD-accredited cosmetics, wellness, and clinical training courses." },
  { id: "injectables", name: "Injectables", desc: "CPD accredited injectables, dermal fillers, and anti-aging technique training modules." },
  { id: "skin", name: "Skin Care", desc: "Skincare therapies, mechanical peeling methods, and micro-needling rejuvenation." },
  { id: "wellness", name: "Wellness & Infusions", desc: "Intramuscular vitamins, phlebotomy access, and IV therapy infusion certifications." },
  { id: "foundation", name: "Foundation Science", desc: "Essential biological anatomy, physiology, and basic clinical theory for practitioners." }
];

function CoursesPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sync category state with search parameters
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

  const filteredCourses = selectedCategory === "all" 
    ? COURSES 
    : COURSES.filter(c => c.category === selectedCategory);

  const activeCategoryDetails = CATEGORIES.find(cat => cat.id === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {/* Intro */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text mb-4">
          Training Programs & Courses
        </h1>
        <p className="font-sans text-sm text-muted leading-relaxed">
          Gain professional qualifications with our certified aesthetics masterclasses. Select a course field below to explore dates, rates, and detailed syllabus lists.
        </p>
      </div>

      {/* Premium Luxury Category Select Dropdown */}
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

      {/* Filtered Course Cards Grid */}
      <div key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-in-tab">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="group flex flex-col bg-card-bg border border-muted-light/60 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 cursor-pointer"
          >
            {/* Card Image */}
            <div className="relative aspect-[4/3] w-full bg-muted-light overflow-hidden rounded-t-2xl">
              <Image
                src={course.image}
                alt={course.title}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                priority
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-bg/90 backdrop-blur-sm text-text text-[8px] uppercase tracking-wider font-bold font-sans border border-muted-light/40 rounded-md">
                {course.level}
              </span>
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
