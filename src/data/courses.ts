export interface Course {
  id: string;
  slug: string;
  title: string;
  category: "injectables" | "skin" | "wellness" | "foundation";
  level: "Beginner" | "Intermediate" | "Advanced";
  startDate: string;
  alternateDates: string[];
  description: string;
  price: number;
  image: string;
  duration: string;
  accreditation: "CPD" | "VTCT";
  prerequisites: {
    qualification: string;
    minAge: number;
    insurance: string;
  };
  curriculum: string[];
  whatsIncluded?: string[];
}

export const VAT_CONFIG = {
  // Set to "inclusive" or "exclusive" once confirmed, or leave empty/false for no display
  status: ""
};

export const COURSES: Course[] = [
  {
    id: "anatomy-physiology-aesthetics",
    slug: "anatomy-physiology-aesthetics",
    title: "Anatomy & Physiology for Aesthetics",
    category: "foundation",
    level: "Beginner",
    startDate: "Self-Paced",
    alternateDates: ["Immediate Access (Online Module)"],
    description: "The essential theory foundation covering skeletal, muscular, circulatory, and skin systems necessary for clinical cosmetic treatments.",
    price: 435,
    image: "/images/courses/anatomy_physiology.jpg",
    duration: "Online Study (Approx. 20 hours)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "No prior experience or beauty certificate required",
      minAge: 18,
      insurance: "Not required for online theory study"
    },
    curriculum: [
      "Facial musculature (muscles of expression)",
      "Trigeminal and facial nerve pathways",
      "Facial blood supply (arterial and venous pathways)",
      "Skin layers, dermal cells, and wound healing phases",
      "Lymphatic system and drainage pathways of the neck",
      "Anatomical danger zones and vascular mapping"
    ]
  },
  {
    id: "vitamin-injections",
    slug: "vitamin-injections",
    title: "Vitamin Injections",
    category: "wellness",
    level: "Beginner",
    startDate: "Oct 10, 2026",
    alternateDates: ["Oct 10, 2026", "Nov 07, 2026", "Dec 05, 2026"],
    description: "Learn intramuscular injection techniques, client screening, and record-keeping for vitamin wellness therapies.",
    price: 545,
    image: "/images/courses/vitamin_injections.jpg",
    duration: "1 Day (10:00 - 16:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "No prior experience required; needle safety is fully taught",
      minAge: 21,
      insurance: "Eligible for public liability insurance on completion"
    },
    curriculum: [
      "Vitamin pharmacology and wellness benefits",
      "Intramuscular (IM) injection techniques",
      "Deltoid and gluteal landmark identification",
      "Aseptic technique and syringe preparation",
      "Dosage regulations and customer screening",
      "Anaphylaxis management and emergency protocols"
    ]
  },
  {
    id: "biotin-glutathione",
    slug: "biotin-glutathione",
    title: "Biotin & Glutathione",
    category: "wellness",
    level: "Beginner",
    startDate: "Oct 18, 2026",
    alternateDates: ["Oct 18, 2026", "Nov 15, 2026", "Dec 13, 2026"],
    description: "Extend your injection menu with hair, skin, and antioxidant body support wellness protocols.",
    price: 545,
    image: "/images/courses/biotin_glutathione.jpg",
    duration: "1 Day (10:00 - 16:00)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Vitamin Injections certificate or prior intramuscular training",
      minAge: 21,
      insurance: "Required (specialist wellness insurance add-on)"
    },
    curriculum: [
      "Antioxidant chemistry and cellular benefits",
      "Biotin for hair and nail strengthening",
      "Glutathione skin brightening and detoxification",
      "Intramuscular (IM) injection practice",
      "Vial reconstitution and compounding protocols",
      "Wellness menus building for clinic expansion"
    ]
  },
  {
    id: "microneedling",
    slug: "microneedling",
    title: "Microneedling",
    category: "skin",
    level: "Beginner",
    startDate: "Sept 24, 2026",
    alternateDates: ["Sept 24, 2026", "Oct 22, 2026", "Nov 19, 2026"],
    description: "Master professional microneedling for skin and hair. Learn skincare theory, pen protocols, and hands-on practice.",
    price: 655,
    image: "/images/courses/microneedling.jpg",
    duration: "1 Day (10:00 - 17:00)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Level 3 Beauty Therapy OR Anatomy & Physiology Level 3 equivalent",
      minAge: 18,
      insurance: "Required (specialist facial therapy insurance cover)"
    },
    curriculum: [
      "Wound healing cascade and skin histology",
      "Microneedling pen depth guidelines (0.25mm - 2.5mm)",
      "Serum formulations and vitamin cocktail selections",
      "Facial treatment protocol on live models",
      "Scalp and hair needling for hair thinning",
      "Aftercare, sterilization, and hygiene standards"
    ]
  },
  {
    id: "dermaplaning",
    slug: "dermaplaning",
    title: "Dermaplaning",
    category: "skin",
    level: "Beginner",
    startDate: "Sept 18, 2026",
    alternateDates: ["Sept 18, 2026", "Oct 16, 2026", "Nov 13, 2026"],
    description: "Learn safe blade work, skin preparation, and finishing to deliver instantly smoother and brighter skin for clients.",
    price: 655,
    image: "/images/courses/dermaplaning.jpg",
    duration: "1 Day (10:00 - 16:00)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Level 2 Beauty Therapy or equivalent facial certificate",
      minAge: 18,
      insurance: "Required (standard treatment insurance coverage)"
    },
    curriculum: [
      "Blade handling, insertion, and angle safety (10R blade)",
      "Vellus hair (peach fuzz) removal technique",
      "Skin preparation, peeling, and hydration methods",
      "Facial dermaplaning on live models",
      "Combining dermaplaning with chemical peels",
      "Sterilisation, waste disposal, and safety protocols"
    ]
  },
  {
    id: "phlebotomy",
    slug: "phlebotomy",
    title: "Phlebotomy",
    category: "foundation",
    level: "Beginner",
    startDate: "Oct 25, 2026",
    alternateDates: ["Oct 25, 2026", "Nov 22, 2026", "Dec 20, 2026"],
    description: "Master venepuncture techniques from first draw to safe disposal, practicing on simulated arms and live models.",
    price: 655,
    image: "/images/courses/phlebotomy.jpg",
    duration: "1 Day (09:30 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "No prior experience required; full draw safety is taught",
      minAge: 21,
      insurance: "Required for live blood draw practices"
    },
    curriculum: [
      "Venous anatomy and vein selection guidelines",
      "Vacutainer, butterfly needle, and syringe draw systems",
      "Skin puncture and sterile blood collection order",
      "Practice on phantom simulation arms",
      "Live supervised blood draws",
      "Biohazard disposal and sharps container safety"
    ]
  },
  {
    id: "fat-dissolving-injections",
    slug: "fat-dissolving-injections",
    title: "Fat Dissolving Injections",
    category: "injectables",
    level: "Intermediate",
    startDate: "Oct 12, 2026",
    alternateDates: ["Oct 12, 2026", "Nov 09, 2026", "Dec 07, 2026"],
    description: "Master localized fat reduction treatments – covering client assessment, injection techniques, and safety aftercare.",
    price: 875,
    image: "/images/courses/fat_dissolving.jpg",
    duration: "1 Day (10:00 - 16:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Level 3 Beauty Therapy OR Anatomy & Physiology Level 3 with needle experience",
      minAge: 21,
      insurance: "Required (specialist clinical aesthetic cover)"
    },
    curriculum: [
      "Adipose tissue anatomy and lipolysis chemistry",
      "Fat reduction product guidelines and safe storage",
      "Submental (double chin) injection patterns",
      "Abdomen and flank fat-reduction grids",
      "Intralipotherapy technique using specialised needles",
      "Client screening, contraindications, and aftercare"
    ]
  },
  {
    id: "prp-therapy",
    slug: "prp-therapy",
    title: "PRP Therapy",
    category: "skin",
    level: "Intermediate",
    startDate: "Oct 05, 2026",
    alternateDates: ["Oct 05, 2026", "Nov 02, 2026", "Nov 30, 2026"],
    description: "Learn Platelet-Rich Plasma procedures – the ultimate autologous treatment for skin rejuvenation and hair stimulation.",
    price: 875,
    image: "/images/courses/prp_therapy.jpg",
    duration: "1 Day (09:30 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Phlebotomy certification (venepuncture draw capability is mandatory)",
      minAge: 21,
      insurance: "Required (blood-product therapy insurance add-on)"
    },
    curriculum: [
      "Autologous platelet-rich plasma chemistry",
      "Centrifuge operation and platelet separation",
      "Meso-injection technique for skin rejuvenation",
      "PRP scalp therapy for hair restoration",
      "Numbing protocols and patient comfort care",
      "PRP therapy protocols on live clinical models"
    ]
  },
  {
    id: "iv-nutrition-therapy",
    slug: "iv-nutrition-therapy",
    title: "IV Nutrition Therapy",
    category: "wellness",
    level: "Intermediate",
    startDate: "Oct 22, 2026",
    alternateDates: ["Oct 22, 2026", "Nov 19, 2026", "Dec 17, 2026"],
    description: "Master cannulation setups, drip bag assembly, vitamin cocktails, and safe infusion monitoring.",
    price: 875,
    image: "/images/courses/iv_nutrition.jpg",
    duration: "1 Day (09:30 - 18:00)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Phlebotomy certification or prior cannula insertion experience",
      minAge: 21,
      insurance: "Required (intravenous therapy insurance cover)"
    },
    curriculum: [
      "Intravenous (IV) cannulation and access",
      "IV drip bag setup, assembly, and flow calculation",
      "Cocktail mixing and wellness blend guidelines",
      "Patient monitoring and infiltration management",
      "Complications, hematoma, and phlebitis recovery",
      "Live clinical cannulation practice on model arms"
    ]
  },
  {
    id: "foundation-injectables",
    slug: "foundation-injectables",
    title: "Foundation Injectables",
    category: "injectables",
    level: "Intermediate",
    startDate: "Sept 15, 2026",
    alternateDates: ["Sept 15, 2026", "Oct 13, 2026", "Nov 10, 2026"],
    description: "Learn essential facial anatomy, analysis, and upper face needle techniques on live models under expert supervision.",
    price: 985,
    image: "/images/courses/foundation_injectables.jpg",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Level 3 Beauty Therapy OR Anatomy & Physiology Level 3 with Phlebotomy or needle experience",
      minAge: 21,
      insurance: "Required (specialist clinical aesthetic cover)"
    },
    curriculum: [
      "Facial nerve and muscle anatomy",
      "Product science and reconstitution",
      "Upper face injection technique points",
      "Live model injection practice",
      "Complication management and emergency dissolving protocols",
      "Client consultation and aftercare protocols"
    ]
  },
  {
    id: "dermal-fillers",
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    category: "injectables",
    level: "Intermediate",
    startDate: "Sept 20, 2026",
    alternateDates: ["Sept 20, 2026", "Oct 18, 2026", "Nov 15, 2026"],
    description: "Learn lip and nasolabial foundation techniques with live models, full consultation, and complication protocols.",
    price: 985,
    image: "/images/courses/dermal_fillers.jpg",
    duration: "1 Day (09:30 - 18:00)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Level 3 Beauty Therapy OR Anatomy & Physiology Level 3 with Phlebotomy or needle experience",
      minAge: 21,
      insurance: "Required (specialist dermal filler insurance cover)"
    },
    curriculum: [
      "Lip and nasolabial fold anatomy",
      "Rheology of hyaluronic acid fillers",
      "Linear threading and bolus techniques",
      "Supervised live model lip fillers",
      "Complication management and vascular occlusion safety",
      "Dissolving agent reconstitution and protocols"
    ]
  },
  {
    id: "advanced-injectables",
    slug: "advanced-injectables",
    title: "Advanced Injectables",
    category: "injectables",
    level: "Advanced",
    startDate: "Sept 28, 2026",
    alternateDates: ["Sept 28, 2026", "Oct 26, 2026", "Nov 23, 2026"],
    description: "Master full face advanced needle techniques for experienced practitioners. Taught in small groups of four.",
    price: 1205,
    image: "/images/courses/advanced_injectables.jpg",
    duration: "1 Day (10:00 - 17:00)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Foundation Injectables certification with 6+ months injecting experience",
      minAge: 21,
      insurance: "Required (advanced aesthetics insurance cover)"
    },
    curriculum: [
      "Lower face injection technique points",
      "Nefertiti neck lift technique",
      "Hyperhidrosis (excessive sweating) therapy",
      "Gummy smile and lip flip procedures",
      "Masseter and jawline slimming injections",
      "Advanced clinical case evaluations and live practices"
    ]
  },
  {
    id: "advanced-fillers-russian-lip",
    slug: "advanced-fillers-russian-lip",
    title: "Advanced Fillers & Russian Lip",
    category: "injectables",
    level: "Advanced",
    startDate: "Oct 02, 2026",
    alternateDates: ["Oct 02, 2026", "Oct 30, 2026", "Nov 27, 2026"],
    description: "Master the flat-profile Russian lip style and mid-face volume restoration technique.",
    price: 1315,
    image: "/images/courses/russian_lip.jpg",
    duration: "1 Day (09:30 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Dermal Fillers certification with 6+ months active injecting experience",
      minAge: 21,
      insurance: "Required (advanced dermal filler insurance cover)"
    },
    curriculum: [
      "The flat-profile Russian lip technique",
      "Micro-droplet and vertical tenting lip fillers",
      "Jawline and chin contouring procedures",
      "Cheek volume restoration landmarks",
      "Cannula vs. needle application methods",
      "Live model advanced styling sessions"
    ]
  }
];
