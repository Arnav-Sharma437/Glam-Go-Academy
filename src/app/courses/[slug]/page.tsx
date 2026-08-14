"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Course {
  slug: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  startDate: string;
  alternateDates: string[];
  description: string;
  price: number;
  image: string;
  duration: string;
  curriculum: string[];
}

const COURSES: Record<string, Course> = {
  "foundation-injectables": {
    slug: "foundation-injectables",
    title: "Foundation Injectables",
    level: "Beginner",
    startDate: "Sept 15, 2026",
    alternateDates: ["Sept 15, 2026", "Oct 13, 2026", "Nov 10, 2026"],
    description: "Your first supervised injecting day – facial anatomy, analysis and basic upper face technique on live models.",
    price: 895,
    image: "/images/courses/foundation_injectables.jpg",
    duration: "1 Day (10:00 - 17:30)",
    curriculum: [
      "Facial nerve and muscle anatomy",
      "Product science and reconstitution",
      "Upper face injection landmarks",
      "Live model injection practice",
      "Complication management and emergency hyaluronidase",
      "Client consultation and aftercare protocols"
    ]
  },
  "dermal-fillers": {
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    level: "Beginner",
    startDate: "Sept 20, 2026",
    alternateDates: ["Sept 20, 2026", "Oct 18, 2026", "Nov 15, 2026"],
    description: "Lip and nasolabial foundation with live models, full consultation and complication protocols.",
    price: 895,
    image: "/images/courses/dermal_fillers.jpg",
    duration: "1 Day (09:30 - 18:00)",
    curriculum: [
      "Lip and nasolabial fold anatomy",
      "Rheology of hyaluronic acid fillers",
      "Linear threading and bolus techniques",
      "Supervised live model lip fillers",
      "Complication management and vascular occlusion safety",
      "Hyaluronidase reconstitution and dissolving protocols"
    ]
  },
  "advanced-injectables": {
    slug: "advanced-injectables",
    title: "Advanced Injectables",
    level: "Advanced",
    startDate: "Sept 28, 2026",
    alternateDates: ["Sept 28, 2026", "Oct 26, 2026", "Nov 23, 2026"],
    description: "Full face advanced treatments for practicing injectors. Taught in tiny results-focused groups of four.",
    price: 1095,
    image: "/images/courses/advanced_injectables.jpg",
    duration: "1 Day (10:00 - 17:00)",
    curriculum: [
      "Lower face Botox injection points",
      "Nefertiti neck lift technique",
      "Hyperhidrosis (excessive sweating) therapy",
      "Gummy smile and lip flip procedures",
      "Masseter and jawline slimming injections",
      "Advanced clinical case evaluations and live practices"
    ]
  },
  "advanced-fillers-russian-lip": {
    slug: "advanced-fillers-russian-lip",
    title: "Advanced Fillers & Russian Lip",
    level: "Advanced",
    startDate: "Oct 02, 2026",
    alternateDates: ["Oct 02, 2026", "Oct 30, 2026", "Nov 27, 2026"],
    description: "Advanced lip and mid face techniques including the Russian technique – our most popular module.",
    price: 1095,
    image: "/images/courses/russian_lip.jpg",
    duration: "1 Day (09:30 - 17:30)",
    curriculum: [
      "The flat-profile Russian lip technique",
      "Micro-droplet and vertical tenting lip fillers",
      "Jawline and chin contouring procedures",
      "Cheek volume restoration landmarks",
      "Cannula vs. needle application methods",
      "Live model advanced styling sessions"
    ]
  },
  "fat-dissolving-injectables": {
    slug: "fat-dissolving-injectables",
    title: "Fat Dissolving Injectables",
    level: "Beginner",
    startDate: "Oct 12, 2026",
    alternateDates: ["Oct 12, 2026", "Nov 09, 2026", "Dec 07, 2026"],
    description: "Aqualyx & Desobody treatments – client assessment, injection technique and safety aftercare.",
    price: 795,
    image: "/images/courses/fat_dissolving.jpg",
    duration: "1 Day (10:00 - 16:30)",
    curriculum: [
      "Adipose tissue anatomy and lipolysis chemistry",
      "Aqualyx and Desobody product guidelines",
      "Submental (double chin) injection patterns",
      "Abdomen and flank fat-dissolving grids",
      "Intralipotherapy technique using specialised needles",
      "Client screening, contraindications, and aftercare"
    ]
  },
  "microneedling": {
    slug: "microneedling",
    title: "Microneedling",
    level: "Beginner",
    startDate: "Sept 24, 2026",
    alternateDates: ["Sept 24, 2026", "Oct 22, 2026", "Nov 19, 2026"],
    description: "Professional microneedling for face & hair. Skincare theory, protocols and hands-on practice.",
    price: 595,
    image: "/images/courses/microneedling.jpg",
    duration: "1 Day (10:00 - 17:00)",
    curriculum: [
      "Wound healing cascade and skin histology",
      "Microneedling pen depth guidelines (0.25mm - 2.5mm)",
      "Serum formulations and vitamin cocktail selections",
      "Facial treatment protocol on live models",
      "Scalp/hair needling for hair thinning",
      "Aftercare, sterilization, and hygiene standards"
    ]
  },
  "dermaplaning": {
    slug: "dermaplaning",
    title: "Dermaplaning",
    level: "Beginner",
    startDate: "Sept 18, 2026",
    alternateDates: ["Sept 18, 2026", "Oct 16, 2026", "Nov 13, 2026"],
    description: "Safe blade work, skin preparation and finishing for instantly smoother and brighter skin.",
    price: 495,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200",
    duration: "1 Day (10:00 - 16:00)",
    curriculum: [
      "Blade handling, insertion, and angle safety (10R blade)",
      "Vellus hair (peach fuzz) removal technique",
      "Skin preparation, peeling, and hydration methods",
      "Facial dermaplaning on live models",
      "Combining dermaplaning with chemical peels",
      "Sterilisation, waste disposal, and safety protocols"
    ]
  },
  "prp-therapy": {
    slug: "prp-therapy",
    title: "PRP Therapy",
    level: "Intermediate",
    startDate: "Oct 05, 2026",
    alternateDates: ["Oct 05, 2026", "Nov 02, 2026", "Nov 30, 2026"],
    description: "Platelet-Rich Plasma – the full face & scalp treatment for skin rejuvenation and hair stimulation.",
    price: 795,
    image: "https://images.unsplash.com/photo-1581091921389-a5c22bb6224f?q=80&w=1200",
    duration: "1 Day (09:30 - 17:30)",
    curriculum: [
      "Autologous platelet-rich plasma chemistry",
      "Centrifuge operation and platelet separation",
      "Meso-injection technique for skin rejuvenation",
      "PRP scalp therapy for hair restoration",
      "Numbing protocols and patient comfort care",
      "Vampire facial protocols on live clinical models"
    ]
  },
  "vitamin-injections": {
    slug: "vitamin-injections",
    title: "Vitamin Injections",
    level: "Beginner",
    startDate: "Oct 10, 2026",
    alternateDates: ["Oct 10, 2026", "Nov 07, 2026", "Dec 05, 2026"],
    description: "IM injection techniques, client screening and record-keeping for vitamin therapies.",
    price: 495,
    image: "https://images.unsplash.com/photo-1607619056574-7b8f30413b58?q=80&w=1200",
    duration: "1 Day (10:00 - 16:30)",
    curriculum: [
      "Vitamin B12, C, and D pharmacology",
      "Intramuscular (IM) injection techniques",
      "Deltoid and gluteal landmark identification",
      "Aseptic technique and syringe preparation",
      "Dosage regulations and customer screening",
      "Anaphylaxis management and emergency protocols"
    ]
  },
  "biotin-glutathione": {
    slug: "biotin-glutathione",
    title: "Biotin & Glutathione",
    level: "Beginner",
    startDate: "Oct 18, 2026",
    alternateDates: ["Oct 18, 2026", "Nov 15, 2026", "Dec 13, 2026"],
    description: "Extend your injection menu with hair, skin and antioxidant body support protocols.",
    price: 495,
    image: "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?q=80&w=1200",
    duration: "1 Day (10:00 - 16:00)",
    curriculum: [
      "Antioxidant chemistry and cellular benefits",
      "Biotin (Vitamin H) for hair/nail strengthening",
      "Glutathione skin brightening and detoxification",
      "Intramuscular (IM) injection practice",
      "Vial reconstitution and compounding protocols",
      "Vitamins menu building for clinic expansion"
    ]
  },
  "iv-nutrition-therapy": {
    slug: "iv-nutrition-therapy",
    title: "IV Nutrition Therapy",
    level: "Intermediate",
    startDate: "Oct 22, 2026",
    alternateDates: ["Oct 22, 2026", "Nov 19, 2026", "Dec 17, 2026"],
    description: "Cannulation refresher, drip bag assembly, vitamin cocktails and safe infusion monitoring.",
    price: 795,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200",
    duration: "1 Day (09:30 - 18:00)",
    curriculum: [
      "Intravenous (IV) cannulation and access",
      "IV drip bag setup, assembly, and flow calculation",
      "Cocktail mixing (Myers' Cocktail, wellness blends)",
      "Patient monitoring and infiltration management",
      "Complications, hematoma, and phlebitis recovery",
      "Live clinical cannulation practice on model arms"
    ]
  },
  "phlebotomy": {
    slug: "phlebotomy",
    title: "Phlebotomy",
    level: "Beginner",
    startDate: "Oct 25, 2026",
    alternateDates: ["Oct 25, 2026", "Nov 22, 2026", "Dec 20, 2026"],
    description: "Venepuncture from first draw to safe disposal, with practice training arms and live draws.",
    price: 595,
    image: "/images/courses/phlebotomy.jpg",
    duration: "1 Day (09:30 - 17:30)",
    curriculum: [
      "Venous anatomy and vein selection guidelines",
      "Vacutainer, butterfly needle, and syringe draw systems",
      "Skin puncture and sterile blood collection order",
      "Practice on phantom simulation arms",
      "Live supervised blood draws",
      "Biohazard disposal and sharps container safety"
    ]
  },
  "anatomy-physiology-aesthetics": {
    slug: "anatomy-physiology-aesthetics",
    title: "Anatomy & Physiology for Aesthetics",
    level: "Beginner",
    startDate: "Self-Paced",
    alternateDates: ["Immediate Access (Online Module)"],
    description: "The essential theory foundation covering skeletal, muscular, circulatory and skin structures.",
    price: 395,
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1200",
    duration: "Online Study (Approx. 20 hours)",
    curriculum: [
      "Facial musculature (muscles of expression)",
      "Trigeminal and facial nerve pathways",
      "Facial blood supply (arterial and venous pathways)",
      "Skin layers, dermal cells, and wound healing phases",
      "Lymphatic system and drainage pathways of the neck",
      "Contraindications and anatomical danger zones"
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CourseDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const course = COURSES[slug];

  const [selectedDate, setSelectedDate] = useState(course?.startDate || "");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", cardNumber: "", expiry: "", cvc: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!course) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex flex-col items-center justify-center bg-bg text-center px-6">
          <h1 className="font-sans text-3xl font-bold mb-4">Course Not Found</h1>
          <p className="font-sans text-sm text-muted mb-8">The course program you requested does not exist or has been moved.</p>
          <Link href="/" className="px-6 py-3 bg-text text-bg text-xs tracking-widest uppercase font-semibold hover:bg-accent transition-colors duration-300">
            Back to Homepage
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate premium payment processing
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Breadcrumb */}
          <nav className="mb-10 text-xs tracking-widest uppercase font-sans font-semibold text-muted">
            <Link href="/" className="hover:text-accent transition-colors duration-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-text">{course.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Course Details */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative aspect-[16/9] w-full bg-muted-light mb-8 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  priority
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-bg/95 backdrop-blur-sm text-text text-[9px] uppercase tracking-widest font-semibold font-sans border border-muted-light/40">
                  {course.level}
                </span>
              </div>

              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-text mb-6">
                {course.title}
              </h1>

              <div className="flex flex-wrap gap-y-4 gap-x-8 pb-6 border-b border-muted-light/60 mb-8 font-sans text-xs tracking-wide text-muted">
                <div>
                  <span className="block font-semibold text-text uppercase text-[10px] tracking-widest mb-1">Duration</span>
                  <span>{course.duration}</span>
                </div>
                <div>
                  <span className="block font-semibold text-text uppercase text-[10px] tracking-widest mb-1">Location</span>
                  <span>Central London Studio (Soho)</span>
                </div>
                <div>
                  <span className="block font-semibold text-text uppercase text-[10px] tracking-widest mb-1">Requirements</span>
                  <span>No prior experience needed</span>
                </div>
              </div>

              <h2 className="font-sans text-xl font-bold text-text mb-4">Course Description</h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-8">
                {course.description} This intensive training program provides you with state-of-the-art methodology, intensive practice sessions, and professional kits to launch a profitable cosmetic styling business immediately after graduation.
              </p>

              <h2 className="font-sans text-xl font-bold text-text mb-4">Curriculum Overview</h2>
              <ul className="space-y-4 mb-8">
                {course.curriculum.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-sans text-accent font-bold text-sm mr-4 mt-0.5">0{index + 1}</span>
                    <span className="font-sans text-sm text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Checkout Sidebar */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="bg-card-bg border border-muted-light/60 p-8 shadow-sm">
                {!success ? (
                  <form onSubmit={handleSubmit} className="flex flex-col">
                    <h3 className="font-sans text-xl font-bold text-text mb-6">Enrol in Program</h3>
                    
                    <div className="mb-4">
                      <label className="block text-[10px] uppercase tracking-wider text-muted font-sans font-semibold mb-2">
                        Select Cohort Date
                      </label>
                      <select
                        name="cohort"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full p-3 border border-muted-light bg-bg font-sans text-xs text-text focus:outline-none focus:border-accent"
                        required
                      >
                        {course.alternateDates.map((date) => (
                          <option key={date} value={date}>
                            {date} (London Studio)
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-[10px] uppercase tracking-wider text-muted font-sans font-semibold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="E.g., Sarah Jenkins"
                        className="w-full p-3 border border-muted-light bg-bg font-sans text-xs text-text focus:outline-none focus:border-accent"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-[10px] uppercase tracking-wider text-muted font-sans font-semibold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="E.g., sarah@gmail.com"
                        className="w-full p-3 border border-muted-light bg-bg font-sans text-xs text-text focus:outline-none focus:border-accent"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-[10px] uppercase tracking-wider text-muted font-sans font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="E.g., +44 7946 0958"
                        className="w-full p-3 border border-muted-light bg-bg font-sans text-xs text-text focus:outline-none focus:border-accent"
                        required
                      />
                    </div>

                    {/* Stripe Simulation Fields */}
                    <div className="border-t border-muted-light/60 pt-6 mt-2 mb-6">
                      <h4 className="text-[10px] uppercase tracking-widest text-text font-bold font-sans mb-4">
                        Secure Payment Info
                      </h4>
                      
                      <div className="mb-4">
                        <label className="block text-[9px] uppercase tracking-wider text-muted font-sans font-semibold mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="4242 •••• •••• 4242"
                          className="w-full p-3 border border-muted-light bg-bg font-sans text-xs text-text focus:outline-none focus:border-accent"
                          maxLength={19}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[9px] uppercase tracking-wider text-muted font-sans font-semibold mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            placeholder="MM / YY"
                            className="w-full p-3 border border-muted-light bg-bg font-sans text-xs text-text focus:outline-none focus:border-accent"
                            maxLength={5}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] uppercase tracking-wider text-muted font-sans font-semibold mb-1">
                            CVC Code
                          </label>
                          <input
                            type="password"
                            name="cvc"
                            value={formData.cvc}
                            onChange={handleInputChange}
                            placeholder="•••"
                            className="w-full p-3 border border-muted-light bg-bg font-sans text-xs text-text focus:outline-none focus:border-accent"
                            maxLength={4}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted-light/30 p-4 border border-muted-light/40 flex items-center justify-between mb-6">
                      <span className="text-xs font-sans text-muted">Total Tuition Fee:</span>
                      <span className="text-lg font-bold text-text">£{course.price}</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-text text-bg text-xs font-sans tracking-widest uppercase font-semibold hover:bg-accent transition-colors duration-300 shadow-md flex items-center justify-center space-x-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <span>Confirm Enrolment</span>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    {/* Success Icon */}
                    <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-2xl text-text font-bold mb-3">Enrolment Confirmed</h3>
                    <p className="font-sans text-xs text-muted leading-relaxed mb-6">
                      Thank you for enrolling, <span className="font-semibold text-text">{formData.name}</span>. A payment confirmation receipt and starter pack guide has been sent to <span className="font-semibold text-text">{formData.email}</span>.
                    </p>
                    <p className="font-sans text-xs text-muted leading-relaxed mb-8">
                      We look forward to seeing you at our Soho studio on <span className="font-semibold text-text">{selectedDate}</span>.
                    </p>
                    <Link
                      href="/"
                      className="inline-block px-6 py-3 border border-text/20 text-text text-xs tracking-widest uppercase font-semibold hover:bg-text hover:text-bg transition-colors duration-300"
                    >
                      Return to Home
                    </Link>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
