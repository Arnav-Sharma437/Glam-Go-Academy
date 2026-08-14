import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0D0C0B] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5 items-stretch">
          
          {/* Left Side: Mockup Image overlay CTA Card (5 columns) */}
          <div className="lg:col-span-5 relative overflow-hidden bg-black flex flex-col justify-end p-8 md:p-10 min-h-[300px] border border-white/5 shadow-2xl">
            {/* Background image of beauty cosmetics flatlay (dark organizor) */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/footer_cosmetics.jpg"
                alt="Luxury Cosmetics & Makeup Organizer Tray"
                fill
                className="object-cover opacity-35 hover:scale-103 transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>

            {/* Overlay Content */}
            <div className="relative z-10">
              <h3 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                Ready to Glow?
              </h3>
              <p className="font-sans text-xs text-white/80 leading-relaxed mb-6 max-w-sm">
                Start your aesthetics career or book your next luxury clinical appointment with our expert practitioners.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://glamandgolondon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-accent hover:bg-white hover:text-black text-[10px] font-sans tracking-widest uppercase font-bold text-white transition-all duration-300 shadow-md inline-block"
                >
                  Book Salon
                </a>
                <a
                  href="#courses"
                  className="px-5 py-2.5 border border-accent text-accent hover:bg-accent hover:text-white text-[10px] font-sans tracking-widest uppercase font-bold transition-all duration-300 inline-block"
                >
                  Book Aesthetics
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Mockup Columns (7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:pl-6 pt-4 lg:pt-0">
            
            {/* Column 1: QUICK LINKS */}
            <div className="flex flex-col">
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold font-sans mb-5 border-b border-white/5 pb-2">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-xs text-white/70 hover:text-accent font-sans transition-colors duration-200 block">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#why-us" className="text-xs text-white/70 hover:text-accent font-sans transition-colors duration-200 block">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#courses" className="text-xs text-white/70 hover:text-accent font-sans transition-colors duration-200 block">
                    Academy Courses
                  </a>
                </li>
                <li>
                  <a href="#courses" className="text-xs text-white/70 hover:text-accent font-sans transition-colors duration-200 block">
                    Special Offers
                  </a>
                </li>
                <li>
                  <a href="https://glamandgolondon.com" target="_blank" rel="noopener noreferrer" className="text-xs text-white/70 hover:text-accent font-sans transition-colors duration-200 block">
                    Visit Salon
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: OUR SERVICES */}
            <div className="flex flex-col">
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold font-sans mb-5 border-b border-white/5 pb-2">
                Our Academy
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#courses" className="text-xs text-white/70 hover:text-accent font-sans transition-colors duration-200 block">
                    Injectables (5)
                  </a>
                </li>
                <li>
                  <a href="#courses" className="text-xs text-white/70 hover:text-accent font-sans transition-colors duration-200 block">
                    Skin Treatments (3)
                  </a>
                </li>
                <li>
                  <a href="#courses" className="text-xs text-white/70 hover:text-accent font-sans transition-colors duration-200 block">
                    Wellness Infusions (4)
                  </a>
                </li>
                <li>
                  <a href="#courses" className="text-xs text-white/70 hover:text-accent font-sans transition-colors duration-200 block">
                    Foundation Anatomy (1)
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="text-xs text-white/70 hover:text-accent font-sans transition-colors duration-200 block">
                    Student Placements
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: CONTACT US */}
            <div className="flex flex-col">
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold font-sans mb-5 border-b border-white/5 pb-2">
                Contact Us
              </h4>
              
              <ul className="space-y-4">
                {/* Phone */}
                <li className="flex items-start space-x-3 text-xs text-white/70">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+44 7946 0958</span>
                </li>

                {/* Email */}
                <li className="flex items-start space-x-3 text-xs text-white/70">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all">info@glamandgoacademy.com</span>
                </li>

                {/* Address */}
                <li className="flex items-start space-x-3 text-xs text-white/70">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    Suite 4, 12 Old Compton Street<br />
                    Soho, London, W1D 4TQ
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] text-white/40 uppercase tracking-wider font-sans">
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
