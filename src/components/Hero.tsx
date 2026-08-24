"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  image: string;
  category: string;
  title: string;
  description: string;
}

const SLIDES: Slide[] = [
  {
    image: "/images/hero_lashes.jpg",
    category: "Lash Masterclasses",
    title: "Train With Glam and Go London",
    description: "Master the classic and Russian volume eyelash techniques. Gain hands-on practice on live models under expert supervision."
  },
  {
    image: "/images/hero_brows.jpg",
    category: "Brow & Lamination",
    title: "Master the Art of Precision Brow Styling",
    description: "Learn symmetrical mapping, mapping formulas, and advanced lamination styling to build your independent beauty business."
  },
  {
    image: "/images/hero_aesthetics.jpg",
    category: "Clinical Aesthetics",
    title: "Advanced Skin & Aesthetics Training",
    description: "Earn credentials in chemical peels, dermaplaning, and micro-needling. Start practicing as an advanced cosmetics therapist."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-text"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      {SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/45 z-20 mix-blend-multiply"></div>
          
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover transition-transform duration-[10000ms] ease-linear scale-100"
            style={{
              transform: idx === currentSlide ? "scale(1.06)" : "scale(1.0)"
            }}
          />
        </div>
      ))}

      {/* Slide Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 w-full text-left pt-12">
        <div className="max-w-2xl flex flex-col justify-center">
          
          {/* Subheading category */}
          <div className="inline-flex items-center space-x-2 mb-4 animate-slide-in">
            <span className="h-px w-6 bg-accent"></span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-accent font-bold font-sans">
              {SLIDES[currentSlide].category}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-4 animate-slide-in-up">
            {SLIDES[currentSlide].title}
          </h1>

          {/* Description */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 max-w-lg leading-relaxed mb-8">
            {SLIDES[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <Link
              href="/courses"
              className="px-6 py-3.5 bg-accent text-white text-xs font-sans tracking-widest uppercase font-semibold text-center hover:bg-white hover:text-text transition-all duration-300 shadow-md rounded-lg cursor-pointer hover:scale-102"
            >
              Book
            </Link>
            
            <Link
              href="/contact"
              className="px-6 py-3.5 border border-white/30 text-white text-xs font-sans tracking-widest uppercase font-semibold text-center hover:border-white hover:bg-white/10 transition-all duration-300 rounded-lg cursor-pointer hover:scale-102"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>

      {/* Manual Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-35 p-3 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-200 focus:outline-none hidden md:flex items-center justify-center cursor-pointer"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-35 p-3 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-200 focus:outline-none hidden md:flex items-center justify-center cursor-pointer"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-35 flex items-center space-x-3">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlide ? "w-6 bg-accent" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
      
      {styleInjections}
    </section>
  );
}

// Slide-in animations CSS
const styleInjections = (
  <style jsx global>{`
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(15px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-8px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .animate-slide-in-up {
      animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .animate-slide-in {
      animation: slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `}</style>
);
