"use client";

import { useState, useEffect } from "react";

export default function ChatNudge() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show nudge after 3 seconds for a soft entry
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up max-w-[280px]">
      <a
        href="https://wa.me/4479460958"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-bg border border-muted-light/80 p-4 shadow-xl hover:border-accent/40 transition-all duration-300 relative group cursor-pointer"
      >
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 p-1 text-muted hover:text-text transition-colors duration-200"
          aria-label="Dismiss chat notification"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Nudge Content */}
        <div className="flex items-start space-x-3 pr-4">
          {/* Avatar/Icon with Online Indicator */}
          <div className="relative flex-shrink-0 mt-1">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-serif font-bold text-xs">
              GG
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] border-2 border-bg rounded-full"></span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-muted font-sans font-semibold">
              Course Advisor
            </span>
            <p className="font-sans text-xs text-text font-medium leading-relaxed mt-1 group-hover:text-accent transition-colors duration-200">
              Comparing courses? Chat with us on WhatsApp.
            </p>
          </div>
        </div>
      </a>

      {/* Tailwind animation keyframe injection */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
