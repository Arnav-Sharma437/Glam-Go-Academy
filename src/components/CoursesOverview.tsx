"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/data/courses";

const CATEGORIES = [
  { id: "injectables", name: "Injectables", count: 5, desc: "CPD certified injectable and cosmetic filler training modules." },
  { id: "skin", name: "Skin", count: 3, desc: "Skincare treatments, exfoliation methods, and dermis rejuvenation." },
  { id: "wellness", name: "Wellness", count: 3, desc: "Intramuscular vitamins and IV therapy infusions." },
  { id: "foundation", name: "Foundation", count: 2, desc: "Essential biological theory and phlebotomy practices required for cosmetic training." }
];

export default function CoursesOverview() {
  const [activeCategory, setActiveCategory] = useState("injectables");

  const filteredCourses = COURSES.filter((course) => course.category === activeCategory);
  const activeDetails = CATEGORIES.find((cat) => cat.id === activeCategory);

  return (
    <section id="courses" className="py-16 md:py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-wider text-accent font-semibold font-sans mb-2 block">
              Our Training Programs
            </span>
            <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-text">
              Transform Passion Into A Professional Career
            </h2>
          </div>
          <p className="font-sans text-xs text-muted max-w-sm mt-3 md:mt-0 leading-relaxed">
            Fully certified CPD qualifications designed for fast-track careers. Gain the confidence, technique, and industry certificates that clients trust.
          </p>
        </div>

        {/* Categories Dynamic Tabs Menu */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-muted-light/60 mb-8 sticky top-[68px] bg-bg/95 backdrop-blur-md z-20 py-3 shadow-[0_2px_4px_rgba(0,0,0,0.01)]">
          <span className="text-[10px] uppercase tracking-widest font-bold text-muted mr-3 self-center">
            Category:
          </span>
          {CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 border font-sans text-[11px] uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer rounded-lg hover:scale-102 ${
                  isActive
                    ? "bg-accent text-white border-accent shadow-sm shadow-accent/15"
                    : "border-muted-light/80 bg-card-bg text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            );
          })}
        </div>

        {/* Dynamic Category View (with anim key) */}
        <div key={activeCategory} className="space-y-6 animate-fade-in-tab">
          {activeDetails && (
            <div className="mb-6">
              <h3 className="font-sans text-lg font-bold text-text uppercase tracking-wider">
                {activeDetails.name} Programs
              </h3>
              <p className="font-sans text-xs text-muted mt-0.5">
                {activeDetails.desc}
              </p>
            </div>
          )}

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col bg-card-bg border border-muted-light/60 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 cursor-pointer"
              >
                {/* Image with Level Badge */}
                <div className="relative aspect-[4/3] w-full bg-muted-light overflow-hidden rounded-t-2xl">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 400px"
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
                      className="text-[10px] font-sans uppercase tracking-wider font-bold text-text group-hover:text-accent transition-colors duration-300 hover-underline-reveal cursor-pointer"
                    >
                      View Course →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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
    </section>
  );
}
