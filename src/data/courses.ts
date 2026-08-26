export interface Course {
  id: string;
  slug: string;
  title: string;
  publicName: string;
  certifiedTitle: string;
  accreditationType: "CPD" | "VTCT";
  certificateNumber: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  level: "Beginner" | "Intermediate" | "Advanced";
  prerequisites: {
    qualification: string;
    minAge: number;
    insurance: string;
  };
  minimumAge: number;
  category: "injectables" | "skin" | "wellness" | "foundation";
  startDate: string;
  alternateDates: string[];
  description: string;
  price: number;
  image: string;
  duration: string;
  accreditation: "CPD" | "VTCT";
  curriculum: string[];
  whatsIncluded?: string[];
}

export const VAT_CONFIG = {
  status: ""
};

export const COURSES: Course[] = [
  {
    id: "anatomy-physiology-aesthetics",
    slug: "anatomy-physiology-aesthetics",
    title: "Anatomy & Physiology for Aesthetics",
    publicName: "Anatomy & Physiology for Aesthetics",
    certifiedTitle: "Level 3 Award in Anatomy and Physiology for Aesthetics",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "foundation",
    startDate: "Self-Paced",
    alternateDates: ["Immediate Access (Online Module)"],
    description: "The essential theory foundation covering skeletal, muscular, circulatory, and skin systems necessary for clinical cosmetic treatments.",
    price: 435,
    image: "/images/courses/anatomy_physiology.jpg",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "No prior experience or beauty certificate required",
      minAge: 18,
      insurance: "Not required for online theory study"
    },
    minimumAge: 18,
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
    publicName: "Vitamin Injections",
    certifiedTitle: "Intramuscular Vitamin B12 and Vitamin Therapy Certificate",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "wellness",
    startDate: "Oct 10, 2026",
    alternateDates: ["Oct 10, 2026", "Nov 07, 2026", "Dec 05, 2026"],
    description: "Learn intramuscular injection techniques, client screening, and record-keeping for vitamin wellness therapies.",
    price: 545,
    image: "/images/courses/vitamin_injections.jpg",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "No prior experience required; needle safety is fully taught",
      minAge: 21,
      insurance: "Eligible for public liability insurance on completion"
    },
    minimumAge: 21,
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
    publicName: "Biotin & Glutathione",
    certifiedTitle: "Biotin & Glutathione Intramuscular Administration Certification",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "wellness",
    startDate: "Oct 18, 2026",
    alternateDates: ["Oct 18, 2026", "Nov 15, 2026", "Dec 13, 2026"],
    description: "Extend your injection menu with hair, skin, and antioxidant body support wellness protocols.",
    price: 545,
    image: "/images/courses/biotin_glutathione.jpg",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Vitamin Injections certificate or prior intramuscular training",
      minAge: 21,
      insurance: "Required (specialist wellness insurance add-on)"
    },
    minimumAge: 21,
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
    publicName: "Microneedling",
    certifiedTitle: "Cosmetic Microneedling and Collagen Induction Therapy Certificate",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "skin",
    startDate: "Sept 24, 2026",
    alternateDates: ["Sept 24, 2026", "Oct 22, 2026", "Nov 19, 2026"],
    description: "Master professional microneedling for skin and hair. Learn skincare theory, pen protocols, and hands-on practice.",
    price: 655,
    image: "/images/courses/microneedling.jpg",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Level 3 Beauty Therapy OR Anatomy & Physiology Level 3 equivalent",
      minAge: 18,
      insurance: "Required (specialist facial therapy insurance cover)"
    },
    minimumAge: 18,
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
    publicName: "Dermaplaning",
    certifiedTitle: "Professional Dermaplaning Exfoliation Therapy Certificate",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "skin",
    startDate: "Sept 18, 2026",
    alternateDates: ["Sept 18, 2026", "Oct 16, 2026", "Nov 13, 2026"],
    description: "Learn safe blade work, skin preparation, and finishing to deliver instantly smoother and brighter skin for clients.",
    price: 655,
    image: "/images/courses/dermaplaning.jpg",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Level 2 Beauty Therapy or equivalent facial certificate",
      minAge: 18,
      insurance: "Required (standard treatment insurance coverage)"
    },
    minimumAge: 18,
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
    publicName: "Phlebotomy",
    certifiedTitle: "Certificate in Phlebotomy and Venepuncture Blood Draw Techniques",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "foundation",
    startDate: "Oct 25, 2026",
    alternateDates: ["Oct 25, 2026", "Nov 22, 2026", "Dec 20, 2026"],
    description: "Master venepuncture techniques from first draw to safe disposal, practicing on simulated arms and live models.",
    price: 655,
    image: "/images/courses/phlebotomy.jpg",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "No prior experience required; full draw safety is taught",
      minAge: 21,
      insurance: "Required for live blood draw practices"
    },
    minimumAge: 21,
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
    publicName: "Fat Dissolving Injections",
    certifiedTitle: "Localised Adipose Tissue Lipolysis and Intralipotherapy Certificate",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Intermediate",
    level: "Intermediate",
    category: "injectables",
    startDate: "Oct 12, 2026",
    alternateDates: ["Oct 12, 2026", "Nov 09, 2026", "Dec 07, 2026"],
    description: "Master localized fat reduction treatments – covering client assessment, injection techniques, and safety aftercare.",
    price: 875,
    image: "/images/courses/fat_dissolving.jpg",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Level 3 Beauty Therapy OR Anatomy & Physiology Level 3 with needle experience",
      minAge: 21,
      insurance: "Required (specialist clinical aesthetic cover)"
    },
    minimumAge: 21,
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
    publicName: "PRP Therapy",
    certifiedTitle: "Platelet-Rich Plasma Autologous Rejuvenation and Scalp Therapy Certificate",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Intermediate",
    level: "Intermediate",
    category: "skin",
    startDate: "Oct 05, 2026",
    alternateDates: ["Oct 05, 2026", "Nov 02, 2026", "Nov 30, 2026"],
    description: "Learn Platelet-Rich Plasma procedures – the ultimate autologous treatment for skin rejuvenation and hair stimulation.",
    price: 875,
    image: "/images/courses/prp_therapy.jpg",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Phlebotomy certification (venepuncture draw capability is mandatory)",
      minAge: 21,
      insurance: "Required (blood-product therapy insurance add-on)"
    },
    minimumAge: 21,
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
    publicName: "IV Nutrition Therapy",
    certifiedTitle: "Intravenous Cannulation and Nutrient Drip Infusion Therapy Certificate",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Intermediate",
    level: "Intermediate",
    category: "wellness",
    startDate: "Oct 22, 2026",
    alternateDates: ["Oct 22, 2026", "Nov 19, 2026", "Dec 17, 2026"],
    description: "Master cannulation setups, drip bag assembly, vitamin cocktails, and safe infusion monitoring.",
    price: 875,
    image: "/images/courses/iv_nutrition.jpg",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Phlebotomy certification or prior cannula insertion experience",
      minAge: 21,
      insurance: "Required (intravenous therapy insurance cover)"
    },
    minimumAge: 21,
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
    publicName: "Foundation Injectables",
    certifiedTitle: "Facial Anatomy Analysis and Injection Technique Certificate (Upper Face)",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Intermediate",
    level: "Intermediate",
    category: "injectables",
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
    minimumAge: 21,
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
    publicName: "Dermal Fillers",
    certifiedTitle: "Hyaluronic Acid Dermal Filler Lip and Nasolabial Administration Certificate",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Intermediate",
    level: "Intermediate",
    category: "injectables",
    startDate: "Sept 20, 2026",
    alternateDates: ["Sept 20, 2026", "Oct 18, 2026", "Nov 15, 2026"],
    description: "Learn lip and nasolabial foundation techniques with live models, full consultation, and complication protocols.",
    price: 985,
    image: "/images/courses/dermal_fillers.jpg",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Level 3 Beauty Therapy OR Anatomy & Physiology Level 3 with Phlebotomy or needle experience",
      minAge: 21,
      insurance: "Required (specialist dermal filler insurance cover)"
    },
    minimumAge: 21,
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
    publicName: "Advanced Injectables",
    certifiedTitle: "Advanced Full Face Injection Point Mapping and Complications Certificate",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Advanced",
    level: "Advanced",
    category: "injectables",
    startDate: "Sept 28, 2026",
    alternateDates: ["Sept 28, 2026", "Oct 26, 2026", "Nov 23, 2026"],
    description: "Master full face advanced needle techniques for experienced practitioners. Taught in small groups of four.",
    price: 1205,
    image: "/images/courses/advanced_injectables.jpg",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Foundation Injectables certification with 6+ months injecting experience",
      minAge: 21,
      insurance: "Required (advanced aesthetics insurance cover)"
    },
    minimumAge: 21,
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
    publicName: "Advanced Fillers & Russian Lip",
    certifiedTitle: "Advanced Dermal Filler Cheek Volumisation and Russian Lip Technique Certificate",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Advanced",
    level: "Advanced",
    category: "injectables",
    startDate: "Oct 02, 2026",
    alternateDates: ["Oct 02, 2026", "Oct 30, 2026", "Nov 27, 2026"],
    description: "Master the flat-profile Russian lip style and mid-face volume restoration technique.",
    price: 1315,
    image: "/images/courses/russian_lip.jpg",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Dermal Fillers certification with 6+ months active injecting experience",
      minAge: 21,
      insurance: "Required (advanced dermal filler insurance cover)"
    },
    minimumAge: 21,
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
