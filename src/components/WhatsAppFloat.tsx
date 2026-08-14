"use client";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/4479460958"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-30 bg-[#25D366] hover:bg-[#22c35e] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group cursor-pointer"
      aria-label="Chat with a course advisor on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-16 bg-bg border border-muted-light/60 px-3 py-1.5 text-text font-sans text-[10px] uppercase tracking-wider font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap rounded-lg">
        Compare Courses? Chat With Us
      </span>
      
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.419 9.86-9.86.002-2.636-1.02-5.115-2.879-6.979C16.592 1.901 14.118.88 11.488.88c-5.44 0-9.862 4.42-9.865 9.861-.001 1.762.483 3.486 1.4 5.01L2.011 22.07l6.568-1.721z" />
      </svg>
      
      {/* Pulse outer glow */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-35 pointer-events-none"></span>
    </a>
  );
}
