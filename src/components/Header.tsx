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
        <Link href="/" className="flex flex-col group">
          <span className="font-sans text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-accent">
            GLAM & GO
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted -mt-1 font-sans font-semibold">
            Academy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link
            href="/"
            className="text-xs uppercase font-sans tracking-widest font-semibold text-text/80 hover:text-text transition-colors duration-200 hover-underline-reveal"
          >
            Home
          </Link>
          <a
            href="#courses"
            className="text-xs uppercase font-sans tracking-widest font-semibold text-text/80 hover:text-text transition-colors duration-200 hover-underline-reveal"
          >
            Courses
          </a>
          <a
            href="#why-us"
            className="text-xs uppercase font-sans tracking-widest font-semibold text-text/80 hover:text-text transition-colors duration-200 hover-underline-reveal"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-xs uppercase font-sans tracking-widest font-semibold text-text/80 hover:text-text transition-colors duration-200 hover-underline-reveal"
          >
            Contact
          </a>
        </nav>

        {/* Action Tray: WhatsApp + Theme Toggle + CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* WhatsApp Callout */}
          <a
            href="https://wa.me/4479460958"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-xs font-sans tracking-wide text-muted hover:text-accent transition-colors duration-300"
            aria-label="Contact us on WhatsApp"
          >
            <svg
              className="w-4 h-4 fill-current text-[#25D366]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.419 9.86-9.86.002-2.636-1.02-5.115-2.879-6.979C16.592 1.901 14.118.88 11.488.88c-5.44 0-9.862 4.42-9.865 9.861-.001 1.762.483 3.486 1.4 5.01L2.011 22.07l6.568-1.721z" />
            </svg>
            <span className="font-semibold text-text/90">+44 7946 0958</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 border border-muted-light/60 text-text hover:text-accent hover:border-accent/40 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle light and dark mode"
          >
            {theme === "light" ? (
              /* Moon Icon */
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
              /* Sun Icon */
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

          {/* Enquire Now Button */}
          <a
            href="#contact"
            className="px-6 py-3 bg-text text-bg text-xs font-sans tracking-widest uppercase font-semibold hover:bg-accent hover:text-bg transition-colors duration-300 shadow-sm"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile controls: Theme toggle + Menu trigger */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 border border-muted-light/60 text-text hover:text-accent transition-colors duration-200 focus:outline-none"
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
            className="p-2 text-text focus:outline-none"
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
              className="text-xl uppercase font-sans tracking-widest font-bold text-text hover:text-accent transition-colors duration-200"
            >
              Home
            </Link>
            <a
              href="#courses"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl uppercase font-sans tracking-widest font-bold text-text hover:text-accent transition-colors duration-200"
            >
              Courses
            </a>
            <a
              href="#why-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl uppercase font-sans tracking-widest font-bold text-text hover:text-accent transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl uppercase font-sans tracking-widest font-bold text-text hover:text-accent transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <a
              href="https://wa.me/4479460958"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-sans tracking-wide text-muted hover:text-accent transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 fill-current text-[#25D366]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.419 9.86-9.86.002-2.636-1.02-5.115-2.879-6.979C16.592 1.901 14.118.88 11.488.88c-5.44 0-9.862 4.42-9.865 9.861-.001 1.762.483 3.486 1.4 5.01L2.011 22.07l6.568-1.721z" />
              </svg>
              <span>+44 7946 0958</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-6 py-4 bg-text text-bg text-xs font-sans tracking-widest uppercase font-semibold hover:bg-accent hover:text-bg transition-colors duration-300"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
