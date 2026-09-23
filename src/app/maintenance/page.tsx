"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function MaintenancePage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

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
    <div className="min-h-screen bg-bg text-text flex flex-col justify-between selection:bg-accent selection:text-bg font-sans relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      {/* Top Bar */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {!logoError ? (
            <Image
              src="/images/logo.png"
              alt="Glam and Go London"
              width={140}
              height={45}
              className="h-10 w-auto object-contain brightness-90 dark:brightness-100"
              onError={() => setLogoError(true)}
              priority
            />
          ) : (
            <span className="text-lg font-extrabold tracking-wider uppercase text-accent">
              GLAM & GO
            </span>
          )}
        </div>

        {/* Dark / Light Mode Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2.5 rounded-full border border-muted-light/60 bg-card-bg hover:border-accent/40 text-muted hover:text-text transition-all duration-300 shadow-sm cursor-pointer"
        >
          {theme === "light" ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-3xl mx-auto px-6 py-12 flex flex-col items-center text-center my-auto">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-8 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span>Scheduled Maintenance</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text mb-6">
          We&apos;ll Be Back Shortly
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-muted max-w-xl leading-relaxed mb-10">
          Glam and Go London Academy is currently undergoing scheduled platform maintenance and system updates. We apologize for any inconvenience.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="https://wa.me/442039180949"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:+442039180949"
            className="w-full sm:w-auto px-7 py-3.5 bg-card-bg hover:bg-muted-light/30 text-text border border-muted-light/80 hover:border-accent font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+44 20 3918 0949</span>
          </a>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left">
          <div className="bg-card-bg border border-muted-light/60 p-5 rounded-2xl shadow-xs">
            <span className="text-[10px] uppercase font-bold text-accent tracking-wider block mb-1">
              Direct Inquiries & Bookings
            </span>
            <p className="text-xs text-muted mb-2">
              For urgent questions or cohort registrations, email our team directly:
            </p>
            <a
              href="mailto:glamandgohounslow@gmail.com"
              className="text-xs font-semibold text-text hover:text-accent transition-colors"
            >
              glamandgohounslow@gmail.com
            </a>
          </div>

          <div className="bg-card-bg border border-muted-light/60 p-5 rounded-2xl shadow-xs">
            <span className="text-[10px] uppercase font-bold text-accent tracking-wider block mb-1">
              Academy Venue
            </span>
            <p className="text-xs text-muted">
              Unit 21, Hounslow High Street<br />
              Hounslow, TW3 1ES, United Kingdom
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-6 border-t border-muted-light/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <div>
          © {new Date().getFullYear()} Glam and Go London. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/glamngoacademy?stkn=MXJqbTVjcWFyMnc0cg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Instagram
          </a>
          <span>•</span>
          <a
            href="https://www.facebook.com/profile.php?id=61594383416371"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Facebook
          </a>
        </div>
      </footer>
    </div>
  );
}
