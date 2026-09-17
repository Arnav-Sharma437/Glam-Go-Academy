"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  return (
    <footer id="contact" className="bg-bg border-t border-muted-light/60 pt-16 pb-24 md:pb-10 text-text transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-muted-light/60 items-start">
          
          {/* Column 1: Brand Logo, Tagline & Socials & Accreditation Logos */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <Link href="/" className="flex flex-col group mb-4">
              {!logoError ? (
                <div className="relative h-12 w-48 mb-2">
                  <Image
                    src="/images/logo/Glam-Go-logo.webp"
                    alt="Glam and Go London Logo"
                    fill
                    className="object-contain object-left brightness-0 dark:invert"
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <>
                  <span className="font-sans text-2xl font-bold tracking-tight text-text transition-colors duration-300 group-hover:text-accent">
                    GLAM & GO
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-muted -mt-1 font-sans font-semibold">
                    London
                  </span>
                </>
              )}
            </Link>
            <p className="font-sans text-xs text-muted leading-relaxed max-w-sm mb-6">
              Professional beauty education hub based in Hounslow. We train aspiring practitioners and salon staff in professional aesthetics, injectables, and advanced skin therapies.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 mb-6">
              <a
                href="https://www.instagram.com/glamngoacademy?stkn=MXJqbTVjcWFyMnc0cg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-200"
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
                className="text-muted hover:text-accent transition-colors duration-200"
                aria-label="Follow Glam & Go Academy on Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://wa.me/442039180949"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-[#25D366] transition-colors duration-200"
                aria-label="Chat with Glam & Go Academy on WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>

            {/* VTCT and CPD Badges/Logos inside footer */}
            <div className="flex items-center gap-3">
              {/* CPD Badge */}
              <div className="flex flex-col items-center justify-center border border-muted-light/60 bg-card-bg rounded-lg py-1 px-3 shadow-sm select-none">
                <span className="text-[10px] font-sans font-extrabold tracking-widest text-text">CPD</span>
                <span className="text-[6px] font-sans uppercase font-bold text-muted tracking-wide -mt-0.5">Certified</span>
              </div>
              {/* VTCT Badge */}
              <div className="flex flex-col items-center justify-center border border-muted-light/60 bg-card-bg rounded-lg py-1 px-3 shadow-sm select-none">
                <span className="text-[10px] font-sans font-extrabold tracking-widest text-text">VTCT</span>
                <span className="text-[6px] font-sans uppercase font-bold text-muted tracking-wide -mt-0.5">Approved</span>
              </div>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[10px] uppercase tracking-wider text-accent font-bold font-sans mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-xs text-muted hover:text-accent transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-xs text-muted hover:text-accent transition-colors duration-200">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xs text-muted hover:text-accent transition-colors duration-200">
                  Why Train With Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-muted hover:text-accent transition-colors duration-200">
                  Contact Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academy Programs */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-[10px] uppercase tracking-wider text-accent font-bold font-sans mb-4">
              Our Programs
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/courses?category=vtct" className="text-xs text-muted hover:text-accent transition-colors duration-200">
                  VTCT Qualifications (3 Programs)
                </Link>
              </li>
              <li>
                <Link href="/courses?category=cpd" className="text-xs text-muted hover:text-accent transition-colors duration-200">
                  CPD Courses & Masterclasses
                </Link>
              </li>
              <li>
                <Link href="/courses?category=injectables" className="text-xs text-muted hover:text-accent transition-colors duration-200">
                  Cosmetic Injectables
                </Link>
              </li>
              <li>
                <Link href="/courses?category=skin" className="text-xs text-muted hover:text-accent transition-colors duration-200">
                  Advanced Skin Care
                </Link>
              </li>
              <li>
                <Link href="/courses?category=wellness" className="text-xs text-muted hover:text-accent transition-colors duration-200">
                  IV Drips & Wellness
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Head Office Details */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-[10px] uppercase tracking-wider text-accent font-bold font-sans mb-4">
              Head Office
            </h4>
            <address className="not-italic font-sans text-xs text-muted leading-relaxed space-y-2.5">
              <div>
                <span className="font-semibold text-text uppercase text-[8px] tracking-wider block mb-0.5">Academy Venue & Office</span>
                <p>
                  Unit 21, Hounslow High Street<br />
                  Hounslow, TW3 1ES<br />
                  United Kingdom
                </p>
              </div>
              <p className="pt-2 border-t border-muted-light/60 space-y-1">
                <span className="block"><span className="font-semibold text-text">Phone:</span> <a href="tel:+442039180949" className="hover:text-accent transition-colors duration-200">+44 20 3918 0949</a></span>
                <span className="block"><span className="font-semibold text-text">WhatsApp:</span> <a href="https://wa.me/442039180949" target="_blank" rel="noopener noreferrer" className="hover:text-accent text-[#25D366] transition-colors duration-200 font-semibold">+44 20 3918 0949</a></span>
                <span className="block"><span className="font-semibold text-text">Email:</span> <a href="mailto:glamandgohounslow@gmail.com" className="hover:text-accent transition-colors duration-200">glamandgohounslow@gmail.com</a></span>
              </p>
            </address>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] text-muted uppercase tracking-wider font-sans">
          <span>&copy; {currentYear} Glam & Go London — Training Academy. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 sm:mt-0">
            <span className="text-muted lowercase">
              Part of{" "}
              <a
                href="https://glamandgolondon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-text hover:text-accent transition-colors duration-200"
              >
                Glam & Go London
              </a>
            </span>
            <Link href="/privacy" className="hover:text-accent transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors duration-200">
              Terms & Conditions
            </Link>
            <Link href="/cookies" className="hover:text-accent transition-colors duration-200">
              Cookie Policy
            </Link>
            <Link href="/refunds" className="hover:text-accent transition-colors duration-200">
              Refund Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
