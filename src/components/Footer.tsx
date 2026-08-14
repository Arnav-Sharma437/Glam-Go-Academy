import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-bg border-t border-muted-light/60 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-muted-light/60 items-start">
          
          {/* Cosmetics vertical card on the left (Desktop only) */}
          <div className="hidden lg:block lg:col-span-3 relative aspect-[3/4] overflow-hidden bg-muted-light border border-muted-light/50">
            <Image
              src="/images/footer_cosmetics.jpg"
              alt="Premium Cosmetics - Glam & Go London Salon Aesthetics"
              fill
              className="object-cover opacity-85 hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Logo & Tagline */}
          <div className="lg:col-span-3 lg:col-start-4 flex flex-col justify-start">
            <Link href="/" className="flex flex-col group mb-4">
              <span className="font-sans text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-accent">
                GLAM & GO
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted -mt-1 font-sans font-semibold">
                Academy
              </span>
            </Link>
            <p className="font-sans text-xs text-muted leading-relaxed max-w-xs">
              London’s premier beauty education hub. We train aspiring practitioners and salon staff in professional aesthetics, injectables, and skin therapies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-text font-bold font-sans mb-3.5">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-xs text-muted hover:text-accent transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <a href="#courses" className="text-xs text-muted hover:text-accent transition-colors duration-200">
                  Courses
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-xs text-muted hover:text-accent transition-colors duration-200">
                  Why Train Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-xs text-muted hover:text-accent transition-colors duration-200">
                  Contact Info
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Info */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-text font-bold font-sans mb-3.5">
              London Studio
            </h4>
            <address className="not-italic font-sans text-xs text-muted leading-relaxed space-y-2.5">
              <p>
                Suite 4, 12 Old Compton Street<br />
                Soho, London, W1D 4TQ
              </p>
              <p className="pt-1.5">
                <span className="font-semibold text-text">Phone:</span> +44 7946 0958<br />
                <span className="font-semibold text-text">Email:</span> info@glamandgoacademy.com
              </p>
            </address>
          </div>

          {/* Socials & Parent Brand */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-text font-bold font-sans mb-3.5">
              Follow Us
            </h4>
            <div className="flex items-center space-x-3.5 mb-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            
            {/* Connection text */}
            <div className="pt-2 border-t border-muted-light/60">
              <span className="text-[10px] text-muted font-sans tracking-wide">
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
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] text-muted uppercase tracking-wider font-sans">
          <span>&copy; {currentYear} Glam and Go Academy. All rights reserved.</span>
          <div className="flex items-center space-x-6 mt-3 sm:mt-0">
            <Link href="/" className="hover:text-accent transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-accent transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
