"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomTabBar() {
  const pathname = usePathname();

  const tabs = [
    {
      label: "Home",
      href: "/",
      isActive: pathname === "/",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      label: "Courses",
      href: "/courses",
      isActive: pathname.startsWith("/courses"),
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      label: "About",
      href: "/about",
      isActive: pathname === "/about",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      label: "Contact",
      href: "/contact",
      isActive: pathname === "/contact",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-2 11a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2v11z" />
        </svg>
      )
    }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-45 bg-bg/95 backdrop-blur-md border-t border-muted-light/60 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] h-16 pb-safe flex items-center justify-around">
      {tabs.map((tab, idx) => (
        <Link
          key={idx}
          href={tab.href}
          className={`flex flex-col items-center justify-center w-20 h-full transition-colors duration-250 cursor-pointer ${
            tab.isActive ? "text-accent" : "text-muted hover:text-text"
          }`}
        >
          <div className="mb-0.5">{tab.icon}</div>
          <span className="text-[9px] font-sans font-semibold uppercase tracking-wider">
            {tab.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
