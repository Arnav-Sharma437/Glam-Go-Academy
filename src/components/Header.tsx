"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

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

  // Dynamic contrast class mappings
  const logoTextClass = isScrolled ? "text-text" : "text-white";
  const logoSubTextClass = isScrolled ? "text-muted" : "text-white/70";
  
  const navLinkClass = `text-xs uppercase font-sans tracking-widest font-semibold transition-colors duration-200 cursor-pointer hover-underline-reveal ${
    isScrolled ? "text-text/80 hover:text-text" : "text-white/80 hover:text-white"
  }`;

  const toggleBtnClass = `p-2 border transition-colors duration-200 focus:outline-none rounded-lg cursor-pointer ${
    isScrolled
      ? "border-muted-light/60 text-text hover:text-accent hover:border-accent/40"
      : "border-white/20 text-white hover:text-accent hover:border-accent/40"
  }`;

  const visitSalonClass = `px-5 py-3 border text-xs font-sans tracking-widest uppercase font-semibold transition-all duration-300 rounded-lg cursor-pointer hover:scale-102 ${
    isScrolled
      ? "border-text/15 text-text hover:bg-text/5 hover:border-text"
      : "border-white/20 text-white hover:bg-white/10 hover:border-white"
  }`;

  const enquireClass = `px-6 py-3 text-xs font-sans tracking-widest uppercase font-semibold transition-all duration-300 shadow-sm rounded-lg cursor-pointer hover:scale-102 ${
    isScrolled
      ? "bg-text text-bg hover:bg-accent hover:text-bg"
      : "bg-white text-black hover:bg-accent hover:text-white"
  }`;

  const burgerClass = `p-2 focus:outline-none transition-colors duration-200 cursor-pointer ${
    isScrolled ? "text-text" : "text-white"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-bg/95 backdrop-blur-md py-4 border-b border-muted-light/60 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col group cursor-pointer">
          <span className={`font-sans text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-accent ${logoTextClass}`}>
            GLAM & GO
          </span>
          <span className={`text-[10px] uppercase tracking-[0.25em] -mt-1 font-sans font-semibold transition-colors duration-300 ${logoSubTextClass}`}>
            Academy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <a href="#courses" className={navLinkClass}>
            Courses
          </a>
          <a href="#why-us" className={navLinkClass}>
            About
          </a>
          <a href="#contact" className={navLinkClass}>
            Contact
          </a>
        </nav>

        {/* Action Tray: Theme Toggle + Visit Salon + CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={toggleBtnClass}
            aria-label="Toggle light and dark mode"
          >
            {theme === "light" ? (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
                xmlns="http://www.w3.org/2000/svg"
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
            className={visitSalonClass}
          >
            Visit Salon
          </a>

          {/* Enquire Now Button */}
          <a
            href="#contact"
            className={enquireClass}
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile controls: Theme toggle + Menu trigger */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 border rounded-lg transition-colors duration-200 focus:outline-none cursor-pointer ${
              isScrolled ? "border-muted-light/60 text-text" : "border-white/20 text-white"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m0 13.5V21M4.95 4.95l1.59 1.59m10.92 10.92l1.59 1.59M3 12h2.25m13.5 0H21M6.54 17.46l-1.59 1.59m12.36-12.36l-1.59 1.59M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"
                />
              </svg>
            )}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={burgerClass}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] z-40 bg-bg transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 space-y-6 border-t border-muted-light/60 h-[calc(100vh-72px)] justify-between pb-24">
          <div className="flex flex-col space-y-6">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl uppercase font-sans tracking-widest font-bold text-text hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              Home
            </Link>
            <a
              href="#courses"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl uppercase font-sans tracking-widest font-bold text-text hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              Courses
            </a>
            <a
              href="#why-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl uppercase font-sans tracking-widest font-bold text-text hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl uppercase font-sans tracking-widest font-bold text-text hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              Contact
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <a
              href="https://glamandgolondon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-4 border border-text/15 text-text text-xs font-sans tracking-widest uppercase font-semibold hover:bg-text/5 hover:border-text transition-all duration-300 rounded-lg cursor-pointer"
            >
              Visit Salon
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-6 py-4 bg-text text-bg text-xs font-sans tracking-widest uppercase font-semibold hover:bg-accent hover:text-bg transition-colors duration-300 rounded-lg cursor-pointer shadow-sm"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
