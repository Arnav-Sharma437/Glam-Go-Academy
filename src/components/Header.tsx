"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const COURSE_CATEGORIES = [
  { 
    id: "vtct", 
    name: "VTCT Qualifications", 
    subtitle: "Ofqual-regulated Level 2, 3 & 4 beauty therapy programs"
  },
  { 
    id: "cpd", 
    name: "CPD Courses", 
    subtitle: "Certified aesthetics, skin, and wellness masterclasses"
  },
  { 
    id: "injectables", 
    name: "Injectables & Fillers", 
    subtitle: "Upper face, full contouring, polynucleotides & bio-remodelling"
  },
  { 
    id: "skin", 
    name: "Skin Care Therapies", 
    subtitle: "Automated microneedling, dermaplaning & anatomy"
  },
  { 
    id: "wellness", 
    name: "IV Drips & Wellness", 
    subtitle: "Intravenous nutrition drips, glutathione & vitamin injections"
  },
  { 
    id: "refresher", 
    name: "Refresher Courses", 
    subtitle: "1-to-1 live model mentoring for qualified practitioners"
  }
];

export default function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [logoError, setLogoError] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync theme state with document class on mount
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Toggle theme handler
  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  // Contrast states
  const isSolid = !isHomepage || isScrolled || isMobileMenuOpen;

  const getNavLinkClass = (href: string) => {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `relative text-[13px] font-sans tracking-wide uppercase font-semibold transition-all duration-200 cursor-pointer py-1 ${
      isActive 
        ? "text-accent font-bold" 
        : isSolid 
          ? "text-text/80 hover:text-accent" 
          : "text-white/85 hover:text-white"
    }`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSolid
            ? "bg-bg/90 backdrop-blur-xl py-3.5 border-b border-muted-light/60 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group cursor-pointer shrink-0">
            {!logoError ? (
              <div className="relative h-10 w-40 sm:h-12 sm:w-48 md:h-12 md:w-52 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo/Glam-Go-logo.webp"
                  alt="Glam and Go London Academy"
                  fill
                  className={`object-contain transition-all duration-300 ${
                    isSolid ? "brightness-0 dark:invert" : "brightness-0 invert"
                  }`}
                  priority
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              <div className="flex flex-col">
                <span className={`font-sans text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-accent ${
                  isSolid ? "text-text" : "text-white"
                }`}>
                  GLAM & GO
                </span>
                <span className={`text-[9px] uppercase tracking-[0.25em] -mt-1 font-sans font-semibold ${
                  isSolid ? "text-muted" : "text-white/70"
                }`}>
                  Training Academy
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <Link href="/" className={getNavLinkClass("/")}>
              Home
            </Link>
            
            {/* Courses Dropdown Link with Floating Mega Card */}
            <div className="relative group py-2">
              <Link
                href="/courses"
                className={`${getNavLinkClass("/courses")} flex items-center gap-1.5`}
              >
                Courses
                <svg
                  className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Floating Dropdown Card with hover bridge */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 bg-card-bg border border-muted-light/70 shadow-2xl rounded-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3">
                <div className="px-3 pt-2 pb-1 border-b border-muted-light/40 flex items-center justify-between">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-accent">
                    Course Categories
                  </span>
                  <span className="text-[9px] font-sans text-muted">
                    CPD & VTCT
                  </span>
                </div>

                <div className="py-2 space-y-1">
                  {COURSE_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/courses?category=${cat.id}`}
                      className="group/item flex flex-col px-3.5 py-2.5 rounded-xl transition-all duration-200 hover:bg-muted-light/35"
                    >
                      <span className="text-xs font-sans font-bold text-text group-hover/item:text-accent transition-colors duration-200">
                        {cat.name}
                      </span>
                      <span className="text-[10px] font-sans text-muted leading-tight mt-0.5 line-clamp-1">
                        {cat.subtitle}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="pt-2 border-t border-muted-light/40 text-center">
                  <Link
                    href="/courses"
                    className="inline-block text-[11px] font-sans font-bold text-accent hover:text-accent-hover transition-colors py-1 uppercase tracking-wider"
                  >
                    View All Courses ({COURSE_CATEGORIES.length}+ Programs) →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about" className={getNavLinkClass("/about")}>
              About
            </Link>
            
            <Link href="/contact" className={getNavLinkClass("/contact")}>
              Contact
            </Link>
          </nav>

          {/* Action Tray (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 border transition-all duration-200 focus:outline-none rounded-xl cursor-pointer ${
                isSolid
                  ? "border-muted-light/60 text-text hover:text-accent hover:border-accent/40 bg-card-bg"
                  : "border-white/20 text-white hover:text-accent hover:border-accent/40 bg-white/5 backdrop-blur-sm"
              }`}
              aria-label="Toggle light and dark theme"
            >
              {theme === "light" ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m0 13.5V21M4.95 4.95l1.59 1.59m10.92 10.92l1.59 1.59M3 12h2.25m13.5 0H21M6.54 17.46l-1.59 1.59m12.36-12.36l-1.59 1.59M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"
                  />
                </svg>
              )}
            </button>

            {/* Visit Salon Button */}
            <a
              href="https://glamandgolondon.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2.5 border text-xs font-sans tracking-wider uppercase font-semibold transition-all duration-300 rounded-xl cursor-pointer hover:scale-[1.02] flex items-center gap-1.5 ${
                isSolid
                  ? "border-muted-light/80 text-text hover:bg-muted-light/30 hover:border-text/30"
                  : "border-white/25 text-white hover:bg-white/10 hover:border-white"
              }`}
            >
              <span>Salon</span>
              <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>

            {/* Enquire Now CTA Button */}
            <Link
              href="/contact"
              className="px-5 py-2.5 text-xs font-sans tracking-wider uppercase font-bold transition-all duration-300 shadow-sm rounded-xl cursor-pointer hover:scale-[1.02] bg-accent text-white hover:bg-accent-hover"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu & Theme Trigger */}
          <div className="flex items-center space-x-2.5 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 border rounded-xl transition-colors duration-200 focus:outline-none cursor-pointer ${
                isSolid ? "border-muted-light/60 text-text bg-card-bg" : "border-white/20 text-white bg-white/5"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.95 4.95l1.59 1.59m10.92 10.92l1.59 1.59M3 12h2.25m13.5 0H21M6.54 17.46l-1.59 1.59m12.36-12.36l-1.59 1.59M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
                </svg>
              )}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none transition-colors duration-200 cursor-pointer border rounded-xl ${
                isSolid ? "border-muted-light/60 text-text bg-card-bg" : "border-white/20 text-white bg-white/5"
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer (Smooth overlay) */}
      <div
        className={`md:hidden fixed inset-0 top-[65px] z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-full"
        }`}
        style={{
          backgroundColor: theme === "light" ? "#FAF7F2" : "#0C0A09",
        }}
      >
        <div className="flex flex-col p-6 sm:p-8 space-y-6 border-t border-muted-light/60 h-[calc(100vh-65px)] justify-between overflow-y-auto pb-20">
          
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg uppercase font-sans tracking-wider font-bold transition-colors duration-200 py-2 border-b border-muted-light/30 ${
                pathname === "/" ? "text-accent" : "text-text"
              }`}
            >
              Home
            </Link>
            
            {/* Mobile Accordion for Courses */}
            <div className="flex flex-col border-b border-muted-light/30 pb-2">
              <button
                onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                className={`flex items-center justify-between w-full text-lg uppercase font-sans tracking-wider font-bold py-2 ${
                  pathname.startsWith("/courses") ? "text-accent" : "text-text"
                }`}
              >
                <span>Courses & Qualifications</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isMobileCoursesOpen ? "rotate-180 text-accent" : "text-muted"}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`flex flex-col pl-3 space-y-2.5 overflow-hidden transition-all duration-300 ${
                  isMobileCoursesOpen ? "max-h-96 opacity-100 mt-2 pb-2" : "max-h-0 opacity-0"
                }`}
              >
                <Link
                  href="/courses"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs font-sans tracking-wider uppercase font-bold text-accent py-1"
                >
                  Explore All Programs →
                </Link>
                {COURSE_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/courses?category=${cat.id}`}
                    onClick={() => {
                      setIsMobileCoursesOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-sm font-sans tracking-wide font-medium text-text/85 hover:text-accent transition-colors duration-200 py-1"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg uppercase font-sans tracking-wider font-bold transition-colors duration-200 py-2 border-b border-muted-light/30 ${
                pathname === "/about" ? "text-accent" : "text-text"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg uppercase font-sans tracking-wider font-bold transition-colors duration-200 py-2 border-b border-muted-light/30 ${
                pathname === "/contact" ? "text-accent" : "text-text"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Bottom CTAs & Contact Info */}
          <div className="flex flex-col space-y-3 pt-4 border-t border-muted-light/60">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-6 py-3.5 bg-accent text-white text-xs font-sans tracking-wider uppercase font-bold transition-colors duration-300 rounded-xl shadow-md"
            >
              Enquire / Book Course
            </Link>
            
            <a
              href="https://glamandgolondon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-3 border border-muted-light/80 text-text text-xs font-sans tracking-wider uppercase font-semibold hover:bg-muted-light/20 transition-all duration-300 rounded-xl flex items-center justify-center gap-1.5"
            >
              <span>Visit Salon</span>
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>

            <a
              href="https://wa.me/442039180949"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-3.5 bg-[#25D366] text-white text-xs font-sans tracking-wider uppercase font-bold hover:bg-[#20bd5a] transition-colors duration-300 rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>

            <div className="text-center pt-2">
              <span className="text-[10px] uppercase tracking-wider text-muted font-sans block">
                Direct Inquiries: <a href="tel:+442039180949" className="text-text font-bold hover:text-accent">+44 20 3918 0949</a>
              </span>
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center gap-5 pt-3 border-t border-muted-light/40">
              <a
                href="https://www.instagram.com/glamngoacademy?stkn=MXJqbTVjcWFyMnc0cg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-muted hover:text-accent transition-colors duration-200"
                aria-label="Follow Glam & Go Academy on Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61594383416371"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-muted hover:text-accent transition-colors duration-200"
                aria-label="Follow Glam & Go Academy on Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://vm.tiktok.com/ZN8jv7JLD/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-muted hover:text-accent transition-colors duration-200"
                aria-label="Follow Glam & Go Academy on TikTok"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298 0 .59.04.87.11V9.41a6.33 6.33 0 00-.87-.06A6.34 6.34 0 003 15.69a6.34 6.34 0 0010.81 4.47 6.26 6.26 0 001.99-4.49V8.58a8.28 8.28 0 004.84 1.56V6.69z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@glamandgolondon9985"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-muted hover:text-accent transition-colors duration-200"
                aria-label="Subscribe to Glam & Go London on YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

