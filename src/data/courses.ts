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
  category: "injectables" | "skin" | "wellness" | "refresher" | "vtct";
  startDate: string;
  alternateDates: string[];
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  duration: string;
  accreditation: "CPD" | "VTCT";
  curriculum: string[];
  whatsIncluded?: string[];
  isRefresher?: boolean;
  benefits?: { title: string; desc: string }[];
}

export const VAT_CONFIG = {
  status: ""
};

export const COURSES: Course[] = [
  // ==========================================
  // 1. CPD INJECTABLES (CORE AESTHETIC COURSES)
  // ==========================================
  {
    id: "foundation-upper-face-lines",
    slug: "foundation-upper-face-lines",
    title: "Foundation Facial Line Injections (Upper Face)",
    publicName: "Foundation Facial Line Injections (Upper Face Lines)",
    certifiedTitle: "CPD Certified Certificate in Foundation Facial Line Aesthetics",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "injectables",
    startDate: "Sept 12, 2026",
    alternateDates: ["Sept 12, 2026", "Oct 10, 2026", "Nov 07, 2026"],
    description: "Dedicated CPD certification masterclass focusing specifically on the primary three upper-face treatment zones: Forehead lines, Frown/brow lines, and Crow's feet. Gain comprehensive anatomy training, sterile preparation, dosage calculation, and supervised live model injecting.",
    price: 985,
    originalPrice: 1500,
    image: "/images/courses/foundation_upper_face.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Medical professional (Doctor, Nurse, Dentist, Pharmacist) or qualified practitioner (NVQ/VTCT Level 3 Beauty with needle experience)",
      minAge: 21,
      insurance: "Eligible for cosmetic practitioner indemnity insurance on completion"
    },
    minimumAge: 21,
    curriculum: [
      "Forehead lines (frontalis muscle relaxation & landmark mapping)",
      "Frown / brow lines (glabella complex & corrugator supercilii)",
      "Crow's feet (lateral orbicularis oculi precision micro-injections)",
      "Facial musculature anatomy, dynamic vs. static lines, and depth selection",
      "Sterile product reconstitution, unit calculations, and syringe ergonomics",
      "Client medical consultation, photographic records, and contraindication screening",
      "Emergency protocols, ptosis prevention, and complication management"
    ]
  },
  {
    id: "advanced-full-face-body-lines",
    slug: "advanced-full-face-body-lines",
    title: "Advanced Full-Face & Body Line Injections",
    publicName: "Advanced Full-Face & Body Line Injections (14 Specialized Areas)",
    certifiedTitle: "CPD Certified Certificate in Advanced Facial & Body Aesthetics",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Advanced",
    level: "Advanced",
    category: "injectables",
    startDate: "Sept 26, 2026",
    alternateDates: ["Sept 26, 2026", "Oct 24, 2026", "Nov 21, 2026"],
    description: "Intensive advanced CPD masterclass covering 14 specialized full-face and body treatment indications. Master non-surgical facial sculpting, lip flips, lower face contouring, bruxism relief, neck rejuvenation, hyperhidrosis, and Korean glass micro-facial protocols.",
    price: 1205,
    originalPrice: 2000,
    image: "/images/courses/advanced_full_face.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Foundation Injectables / Foundation Facial Lines Certificate with minimum 6 months clinical experience",
      minAge: 21,
      insurance: "Requires active aesthetic indemnity insurance"
    },
    minimumAge: 21,
    curriculum: [
      "Brow lift (lateral orbicularis elevation & brow shaping)",
      "Lip flip (orbicularis oris superficial border relaxation)",
      "Bunny lines (nasalis muscle smoothing)",
      "Gummy smile (levator labii superioris alaeque nasi relaxation)",
      "Nose lift & tip elevation protocols",
      "Nose slimming injection landmarks",
      "Lip lines / smoker's lines perioral smoothing",
      "Marionette lines & downturned mouth corners (depressor anguli oris)",
      "Cobble chin (mentalis muscle smoothing)",
      "Jaw slimming (masseter hypertrophy reduction)",
      "Teeth grinding (Bruxism) clinical relief protocols",
      "Neck slimming & platysmal neck bands (Nefertiti lift)",
      "Hyperhidrosis (excessive underarm axillary sweating protocols)",
      "Korean glass facial (pore-refining micro-droplet intradermal technique)"
    ]
  },
  {
    id: "foundation-injectables",
    slug: "foundation-injectables",
    title: "Foundation Injectables",
    publicName: "Foundation Injectables (Upper Face)",
    certifiedTitle: "CPD Certified Certificate in Foundation Injectables",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "injectables",
    startDate: "Sept 15, 2026",
    alternateDates: ["Sept 15, 2026", "Oct 13, 2026", "Nov 10, 2026"],
    description: "Comprehensive practical training for three essential upper face treatment zones. Covers facial muscle anatomy, precise injection landmarks, clinical hygiene, patient consultation, and emergency complication management.",
    price: 985,
    image: "/images/courses/foundation_injectables.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Medical professional (Doctor, Nurse, Dentist, Pharmacist) or qualified aesthetic practitioner (NVQ/VTCT Level 3 Beauty Therapy with needle experience)",
      minAge: 21,
      insurance: "Eligible for practitioner indemnity insurance upon completion"
    },
    minimumAge: 21,
    curriculum: [
      "Facial musculature anatomy and nerve mapping",
      "Forehead lines (frontalis muscle relaxation)",
      "Frown / brow lines (glabella & corrugator complex)",
      "Crow's feet (lateral orbicularis oculi)",
      "Reconstitution formulas, dosage titration & sterile syringe preparation",
      "Client medical screening, consultation & photographic consent",
      "Managing adverse reactions & complication protocols"
    ]
  },
  {
    id: "advanced-injectables",
    slug: "advanced-injectables",
    title: "Advanced Injectables",
    publicName: "Advanced Injectables (Full Face & Body)",
    certifiedTitle: "CPD Certified Certificate in Advanced Injectables",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Advanced",
    level: "Advanced",
    category: "injectables",
    startDate: "Sept 28, 2026",
    alternateDates: ["Sept 28, 2026", "Oct 26, 2026", "Nov 23, 2026"],
    description: "Master full-face precision injection protocols and lower-face sculpting techniques for experienced cosmetic practitioners. Taught in small, intensive clinical groups with extensive live model practice.",
    price: 1205,
    image: "/images/courses/advanced_injectables.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Foundation Injectables Certification with minimum 6 months clinical injecting experience",
      minAge: 21,
      insurance: "Requires active aesthetic indemnity insurance"
    },
    minimumAge: 21,
    curriculum: [
      "Brow lift injection placement & lateral elevation",
      "Lip flip & perioral relaxation",
      "Bunny lines (nasalis muscle smoothing)",
      "Gummy smile reduction (levator labii superioris alaeque nasi)",
      "Nose lift & non-surgical nose tip refinement",
      "Nose slimming injection landmarks",
      "Lip lines & smoker's lines smoothing",
      "Marionette lines & downturned mouth corners (DAO muscle)",
      "Cobble chin (mentalis muscle smoothing)",
      "Jaw slimming & Masseter muscle reduction",
      "Teeth grinding (Bruxism) relief protocols",
      "Neck slimming & Platysmal neck bands",
      "Hyperhidrosis treatment for excessive underarm sweating",
      "Korean glass facial / pore-focused micro-droplet technique"
    ]
  },
  {
    id: "dermal-fillers",
    slug: "dermal-fillers",
    title: "Foundation Dermal Fillers",
    publicName: "Foundation Dermal Fillers (Lips & Lower Face)",
    certifiedTitle: "CPD Certified Certificate in Foundation Dermal Fillers",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "injectables",
    startDate: "Sept 20, 2026",
    alternateDates: ["Sept 20, 2026", "Oct 18, 2026", "Nov 15, 2026"],
    description: "Learn essential hyaluronic acid dermal filler techniques for lips, nasolabial folds, and marionette lines with supervised live model injecting, vascular mapping, and complication management.",
    price: 985,
    image: "/images/courses/dermal_fillers.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Medical professional or Level 3 Beauty Therapy with needle experience / Phlebotomy",
      minAge: 21,
      insurance: "Eligible for cosmetic practitioner insurance"
    },
    minimumAge: 21,
    curriculum: [
      "Hyaluronic acid rheology, G-prime, and product selection",
      "Lip enhancement: Vermilion border, Cupid's bow, and body volume",
      "Nasolabial folds correction and dermal layering",
      "Marionette lines and oral commissure support",
      "Facial vascular anatomy and danger zones",
      "Aspiration techniques and vascular occlusion emergency protocols",
      "Client consultation, managing expectations, and aftercare"
    ]
  },
  {
    id: "advanced-fillers-russian-lip",
    slug: "advanced-fillers-russian-lip",
    title: "Advanced Dermal Fillers & Contouring",
    publicName: "Advanced Dermal Fillers, Cannula & Russian Lip",
    certifiedTitle: "CPD Certified Certificate in Advanced Dermal Fillers & Contouring",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Advanced",
    level: "Advanced",
    category: "injectables",
    startDate: "Oct 02, 2026",
    alternateDates: ["Oct 02, 2026", "Oct 30, 2026", "Nov 27, 2026"],
    description: "Advanced structural facial contouring masterclass. Covers cheek projection, jawline definition, chin sculpting, micro-cannula delivery, and the specialized Russian Lip vertical tenting technique.",
    price: 1315,
    image: "/images/courses/russian_lip.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Foundation Dermal Fillers certification with proven practical experience",
      minAge: 21,
      insurance: "Requires active cosmetic indemnity insurance"
    },
    minimumAge: 21,
    curriculum: [
      "Full facial contouring & Golden Ratio assessment",
      "Cheek augmentation & zygomatic arch projection",
      "Jawline definition & mandibular angle contouring",
      "Chin augmentation, projection & mental crease restoration",
      "Blunt-tip micro-cannula vs. sharp needle delivery techniques",
      "Russian Lip masterclass: vertical tenting & flat side-profile technique",
      "Deep bolus placement vs. superficial linear threading",
      "Emergency vascular protocols and advanced complication prevention"
    ]
  },
  {
    id: "polynucleotides",
    slug: "polynucleotides",
    title: "Polynucleotides Biostimulator Therapy",
    publicName: "Polynucleotides Regenerative Biostimulator Therapy",
    certifiedTitle: "CPD Certified Certificate in Polynucleotides Therapy",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Intermediate",
    level: "Intermediate",
    category: "injectables",
    startDate: "Oct 08, 2026",
    alternateDates: ["Oct 08, 2026", "Nov 05, 2026", "Dec 03, 2026"],
    description: "Master high-demand regenerative biostimulation using purified salmon DNA polymer fractions (PDRN). Designed to stimulate deep fibroblast activation, cellular repair, collagen synthesis, and rejuvenate delicate peri-orbital eye areas and facial skin.",
    price: 795,
    image: "/images/courses/polynucleotides.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Foundation Injectables, Dermal Fillers, or Level 3 Beauty with needle experience",
      minAge: 21,
      insurance: "Eligible for cosmetic practitioner indemnity insurance"
    },
    minimumAge: 21,
    curriculum: [
      "Polynucleotide science: Highly purified DNA fractions (PDRN) & cellular healing",
      "Under-eye peri-orbital rejuvenation & dark circle treatment protocols",
      "Full-face, neck, and décolletage biostimulation injection points",
      "Micro-papular needle technique and blunt cannula fanning methods",
      "Treatment course planning: multi-session schedules & maintenance",
      "Patient assessment, fish allergy screening, and safety guidelines",
      "Synergistic combination protocols with skin boosters and chemical peels"
    ]
  },
  {
    id: "exosomes-therapy",
    slug: "exosomes-therapy",
    title: "Exosomes Regenerative Skin Therapy",
    publicName: "Exosomes Regenerative Skin & Scalp Therapy",
    certifiedTitle: "CPD Certified Certificate in Exosomes Regenerative Aesthetics",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Intermediate",
    level: "Intermediate",
    category: "injectables",
    startDate: "Oct 14, 2026",
    alternateDates: ["Oct 14, 2026", "Nov 11, 2026", "Dec 09, 2026"],
    description: "Learn advanced regenerative aesthetics with exosome nanovesicles. Explore intercellular signalling, growth factor delivery, and micro-channel infusion techniques to accelerate skin barrier renewal, collagen production, and hair follicle revitalization.",
    price: 850,
    image: "/images/courses/exosomes.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Microneedling, Mesotherapy, or Injectables qualification",
      minAge: 18,
      insurance: "Eligible for aesthetic insurance"
    },
    minimumAge: 18,
    curriculum: [
      "Exosome biology: Extracellular vesicles, peptide delivery & cellular signalling",
      "Skin barrier regeneration and deep collagen remodeling protocols",
      "Micro-needling and mesotherapy delivery channel integration",
      "Targeted scalp and hair density stimulation protocols",
      "Product stability, cold-chain handling, and preparation sterility",
      "Client consultation, skin preparation, and post-procedure protocols"
    ]
  },
  {
    id: "profhilo-bap",
    slug: "profhilo-bap",
    title: "Advanced Skin Booster — Profhilo BAP Technique",
    publicName: "Profhilo Bio Aesthetic Points (BAP) Masterclass",
    certifiedTitle: "CPD Certified Certificate in Profhilo & BAP Skin Bio-Remodelling",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Intermediate",
    level: "Intermediate",
    category: "injectables",
    startDate: "Sept 30, 2026",
    alternateDates: ["Sept 30, 2026", "Oct 28, 2026", "Nov 25, 2026"],
    description: "Master the standardized 5-point Bio Aesthetic Points (BAP) technique using high and low molecular weight hybrid hyaluronic acid. Stimulates multi-layer elastin and collagen bio-remodelling for facial laxity, neck, and hands.",
    price: 825,
    image: "/images/courses/profhilo_bap.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Foundation Injectables, Dermal Fillers, or Level 3 Beauty with needle experience",
      minAge: 21,
      insurance: "Eligible for practitioner indemnity insurance"
    },
    minimumAge: 21,
    curriculum: [
      "Hybrid cooperative complexes (NAHYCO technology) & hyaluronic acid science",
      "Anatomical mapping of the 5 Bio Aesthetic Points (BAP) on the face",
      "Neck and hands BAP injection protocols",
      "Multi-layer bio-remodelling: stimulating 4 types of collagen and elastin",
      "Treatment regimes: 2-session protocols, intervals, and annual maintenance",
      "Injection depth, bolus administration, and avoiding major facial vessels",
      "Client consultation, suitability guidelines, and aftercare"
    ]
  },
  {
    id: "skin-boosters-mesotherapy",
    slug: "skin-boosters-mesotherapy",
    title: "Skin Boosters & Mesotherapy",
    publicName: "Skin Boosters & Clinical Mesotherapy Rejuvenation",
    certifiedTitle: "CPD Certified Certificate in Skin Boosters & Mesotherapy",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "injectables",
    startDate: "Oct 16, 2026",
    alternateDates: ["Oct 16, 2026", "Nov 13, 2026", "Dec 11, 2026"],
    description: "Learn micro-injection skin rejuvenation using uncrosslinked hyaluronic acid, amino acids, antioxidants, and peptide mesotherapy cocktails to deliver intense cellular hydration, improved skin tone, and luminous radiance.",
    price: 745,
    image: "/images/courses/skin_boosters.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Level 3 Beauty Therapy, Phlebotomy, Microneedling, or healthcare background",
      minAge: 18,
      insurance: "Eligible for aesthetic insurance"
    },
    minimumAge: 18,
    curriculum: [
      "Skin booster science vs. traditional cross-linked dermal fillers",
      "Nappage and micro-papular micro-injection techniques",
      "Facial hydration mapping, neck, and décolletage rejuvenation",
      "Custom cocktail blending: hyaluronic acid, amino acids, and multivitamins",
      "Point-by-point superficial mesotherapy protocols for texture and tone",
      "Pain management, depth control, and sterile handling",
      "Pre-treatment consultation, contraindications, and home care"
    ]
  },
  {
    id: "prp-therapy",
    slug: "prp-therapy",
    title: "PRP Therapy (Platelet-Rich Plasma)",
    publicName: "Platelet-Rich Plasma (PRP) Clinical Aesthetics",
    certifiedTitle: "CPD Certified Certificate in PRP Facial Rejuvenation",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Intermediate",
    level: "Intermediate",
    category: "injectables",
    startDate: "Oct 05, 2026",
    alternateDates: ["Oct 05, 2026", "Nov 02, 2026", "Nov 30, 2026"],
    description: "Learn Platelet-Rich Plasma procedures – the premier autologous rejuvenation treatment for facial tissue renewal, under-eye brightening, collagen stimulation, and hair density restoration.",
    price: 875,
    image: "/images/courses/prp_therapy.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Phlebotomy certification required (can be combined on consecutive dates) or medical background",
      minAge: 18,
      insurance: "Eligible for public liability insurance on completion"
    },
    minimumAge: 18,
    curriculum: [
      "Platelet biology, autologous growth factors & tissue regeneration",
      "Centrifuge operation, speed selection, and separation protocols",
      "Vampire facial micro-needle infusion and subdermal micro-injections",
      "Under-eye rejuvenation & dark circle reduction technique",
      "Scalp and hair follicle rejuvenation protocols",
      "Sterile kit assembly and infection control"
    ]
  },
  {
    id: "fat-dissolving-injections",
    slug: "fat-dissolving-injections",
    title: "Fat Dissolving Injections",
    publicName: "Fat Dissolving Injections (Face & Body Contouring)",
    certifiedTitle: "CPD Certified Certificate in Fat Dissolving Treatments",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "injectables",
    startDate: "Oct 12, 2026",
    alternateDates: ["Oct 12, 2026", "Nov 09, 2026", "Dec 07, 2026"],
    description: "Master localized adipocyte reduction treatments using sodium deoxycholate and lemon-bottle lipolytic solutions. Covers client assessment, precise depth control, injection grid mapping, and safety aftercare.",
    price: 875,
    image: "/images/courses/fat_dissolving.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Level 3 Beauty Therapy, Phlebotomy, Microneedling, or healthcare background",
      minAge: 18,
      insurance: "Eligible for public liability insurance on completion"
    },
    minimumAge: 18,
    curriculum: [
      "Adipocyte pharmacology & deoxycholic acid mechanisms",
      "Submental double-chin assessment and injection grid mapping",
      "Body contouring protocols: abdomen, flanks, love handles & arms",
      "Needle vs. cannula administration methods and depth management",
      "Client suitability, pinch tests & expected treatment courses",
      "Managing swelling, inflammatory responses & post-care protocols"
    ]
  },

  // ==========================================
  // 2. CPD SKIN CARE & ADVANCED THERAPIES
  // ==========================================
  {
    id: "microneedling",
    slug: "microneedling",
    title: "Microneedling Skin Rejuvenation",
    publicName: "Microneedling & Collagen Induction Therapy",
    certifiedTitle: "CPD Certified Certificate in Microneedling & Skin Therapy",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "skin",
    startDate: "Sept 24, 2026",
    alternateDates: ["Sept 24, 2026", "Oct 22, 2026", "Nov 19, 2026"],
    description: "Master automated micro-needling for facial rejuvenation, acne scarring, hyperpigmentation, and texture refinement. Covers skin analysis, needle depths, glide serums, and live model practice.",
    price: 655,
    image: "/images/courses/microneedling.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Facial qualification, Level 2/3 Beauty, or medical background",
      minAge: 18,
      insurance: "Eligible for public liability insurance on completion"
    },
    minimumAge: 18,
    curriculum: [
      "Skin anatomy, wound healing cascade, and collagen induction",
      "Needle depth protocols: 0.25mm to 2.5mm per facial zone",
      "Treating fine lines, acne scarring, enlarged pores & pigmentation",
      "Sterile cartridge selection and active meso-glide serums",
      "Safety, hygiene, contraindications, and pre-treatment numbing",
      "Post-procedure aftercare and home skincare advice"
    ]
  },
  {
    id: "dermaplaning",
    slug: "dermaplaning",
    title: "Dermaplaning Facial Treatment",
    publicName: "Dermaplaning & Clinical Exfoliation",
    certifiedTitle: "CPD Certified Certificate in Dermaplaning Facial Therapy",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "skin",
    startDate: "Sept 18, 2026",
    alternateDates: ["Sept 18, 2026", "Oct 16, 2026", "Nov 13, 2026"],
    description: "Learn safe surgical blade exfoliation to remove stratum corneum dead skin cells and vellus hair (peach fuzz), delivering instant glowing skin and enhanced product penetration.",
    price: 655,
    image: "/images/courses/dermaplaning.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Facial qualification, Level 2/3 Beauty, or medical background",
      minAge: 18,
      insurance: "Eligible for public liability insurance on completion"
    },
    minimumAge: 18,
    curriculum: [
      "Epidermal biology and hair growth cycle science",
      "Surgical scalpel handling, grip, and 45-degree angle technique",
      "Skin tensioning, zone mapping, and safe glide protocols",
      "Combining dermaplaning with enzyme peels & LED light therapy",
      "Sharps handling, blade disposal, and clinical sterility",
      "Client consultation, skin preparation, and SPF guidance"
    ]
  },
  {
    id: "anatomy-physiology-aesthetics",
    slug: "anatomy-physiology-aesthetics",
    title: "Anatomy & Physiology for Aesthetics",
    publicName: "Level 3 Anatomy & Physiology for Aesthetics",
    certifiedTitle: "Level 3 Award in Anatomy and Physiology for Aesthetics",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "skin",
    startDate: "Self-Paced",
    alternateDates: ["Immediate Access (Online Module)"],
    description: "The essential biological theory foundation covering facial musculature, vascular pathways, trigeminal nerves, and skin histology necessary for clinical cosmetic practitioners.",
    price: 435,
    image: "/images/courses/anatomy_physiology.png",
    duration: "Self-Paced Online (20 Study Hours)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "No prior experience or beauty certificate required",
      minAge: 18,
      insurance: "Not required for online theory study"
    },
    minimumAge: 18,
    curriculum: [
      "Facial musculature (muscles of expression and mastication)",
      "Trigeminal and facial nerve pathways & sensory distributions",
      "Facial arterial and venous blood supply mapping",
      "Skin layers, dermal cells, and wound healing phases",
      "Lymphatic system and drainage pathways of the face and neck",
      "Anatomical danger zones and avoidance strategies"
    ]
  },

  // ==========================================
  // 3. CPD IV DRIPS & WELLNESS INFUSIONS
  // ==========================================
  {
    id: "iv-nutrition-therapy",
    slug: "iv-nutrition-therapy",
    title: "IV Nutrition Therapy (Intravenous Infusions)",
    publicName: "Intravenous (IV) Nutrition Therapy & Wellness Drips",
    certifiedTitle: "CPD Certified Certificate in IV Nutrition Therapy",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Intermediate",
    level: "Intermediate",
    category: "wellness",
    startDate: "Oct 22, 2026",
    alternateDates: ["Oct 22, 2026", "Nov 19, 2026", "Dec 17, 2026"],
    description: "Comprehensive practical certification in intravenous wellness infusions. Master sterile venous cannulation, drip rate calculation, vitamin/antioxidant cocktail formulation, infusion monitoring, and client health screening.",
    price: 875,
    image: "/images/courses/iv_nutrition.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Phlebotomy certification (can be trained prior) or healthcare professional",
      minAge: 18,
      insurance: "Eligible for public liability insurance on completion"
    },
    minimumAge: 18,
    curriculum: [
      "Intravenous hydration principles, osmolarity, and saline solutions",
      "Sterile intravenous cannulation and vein selection",
      "Formulating wellness infusions: Vitamin C, B-Complex, Magnesium, and Zinc",
      "Gravity drip chamber assembly, line priming, and infusion rate calculation",
      "Patient health screening, vital signs assessment, and contraindications",
      "Managing adverse infusion reactions, phlebitis prevention, and emergency protocols"
    ]
  },
  {
    id: "biotin-glutathione",
    slug: "biotin-glutathione",
    title: "Biotin & Glutathione Wellness Injections",
    publicName: "Biotin & Glutathione Antioxidant Wellness Injections",
    certifiedTitle: "CPD Certified Certificate in Biotin and Glutathione Wellness Therapy",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "wellness",
    startDate: "Oct 18, 2026",
    alternateDates: ["Oct 18, 2026", "Nov 15, 2026", "Dec 13, 2026"],
    description: "Learn intramuscular and intravenous injection protocols for master antioxidant Glutathione and Vitamin H (Biotin). Covers cellular antioxidant support, skin radiance, natural detoxification pathways, and client lifestyle protocols.",
    price: 545,
    image: "/images/courses/biotin_glutathione.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Phlebotomy, Vitamin B12, or needle qualification required",
      minAge: 18,
      insurance: "Eligible for practitioner indemnity insurance"
    },
    minimumAge: 18,
    benefits: [
      {
        title: "Skin Radiance",
        desc: "Supports a brighter, more refined and even-looking complexion."
      },
      {
        title: "Detox Support",
        desc: "Supports the body’s natural detoxification pathways and antioxidant defence systems."
      },
      {
        title: "Pollution & Environmental Exposure",
        desc: "Ideal for clients exposed to urban pollution, smoke and environmental oxidative stress."
      },
      {
        title: "Lifestyle Recovery",
        desc: "A premium wellness option for demanding lifestyles, frequent travel and periods of increased stress."
      },
      {
        title: "Ageing & Oxidative Stress",
        desc: "Helps protect cells from oxidative damage while supporting skin quality, clarity and vitality."
      }
    ],
    curriculum: [
      "Glutathione biochemistry: The body's master intracellular antioxidant",
      "Skin radiance & cellular antioxidant mechanisms",
      "Detox support: Assisting hepatic pathways and natural defence systems",
      "Biotin (Vitamin B7) pharmacology for keratin, hair, and nail vitality",
      "Intramuscular injection administration (gluteal & deltoid)",
      "Dosage schedules, multi-treatment plans, and client consultation"
    ]
  },
  {
    id: "vitamin-injections",
    slug: "vitamin-injections",
    title: "Vitamin Injections (B12 & Wellness)",
    publicName: "Intramuscular Vitamin B12 & Wellness Injections",
    certifiedTitle: "CPD Certified Certificate in Vitamin Injections",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "wellness",
    startDate: "Oct 10, 2026",
    alternateDates: ["Oct 10, 2026", "Nov 07, 2026", "Dec 05, 2026"],
    description: "Learn intramuscular injection techniques for Vitamin B12 (Hydroxocobalamin / Methylcobalamin), Vitamin C, and Vitamin D. Covers energy metabolism support, client health screening, and aseptic protocols.",
    price: 545,
    image: "/images/courses/vitamin_injections.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "No prior experience required; needle safety and injection techniques are fully taught",
      minAge: 18,
      insurance: "Eligible for public liability insurance on completion"
    },
    minimumAge: 18,
    curriculum: [
      "Vitamin B12, C, and D pharmacology and metabolic roles",
      "Intramuscular (IM) injection techniques and anatomical landmarks",
      "Deltoid, dorsogluteal, and ventrogluteal site selection",
      "Z-track technique and aspiration safety",
      "Dosage guidelines, frequency, and medical screening",
      "Anaphylaxis recognition and emergency response"
    ]
  },
  {
    id: "phlebotomy",
    slug: "phlebotomy",
    title: "Phlebotomy & Venepuncture",
    publicName: "Clinical Phlebotomy & Venepuncture Training",
    certifiedTitle: "CPD Certified Certificate in Phlebotomy",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "wellness",
    startDate: "Oct 25, 2026",
    alternateDates: ["Oct 25, 2026", "Nov 22, 2026", "Dec 20, 2026"],
    description: "Master venepuncture blood collection from first draw to safe vacutainer filling and disposal. Essential foundational skill for PRP therapy and IV wellness drips.",
    price: 655,
    image: "/images/courses/phlebotomy.png",
    duration: "1 Day (10:00 - 17:30)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "No prior experience required",
      minAge: 18,
      insurance: "Eligible for public liability insurance on completion"
    },
    minimumAge: 18,
    curriculum: [
      "Venous anatomy of the upper limb (median cubital, cephalic, basilic veins)",
      "Vacutainer systems, needle gauges, and butterfly sets",
      "Tourniquet application and vein palpation techniques",
      "Order of draw and specimen handling protocols",
      "Sharps safety, needle-stick prevention, and clinical waste disposal",
      "Extensive practice on simulated training arms and live models"
    ]
  },

  // ==========================================
  // 4. REFRESHER COURSES (SKILL UPGRADE OPTIONS)
  // ==========================================
  {
    id: "injectables-refresher",
    slug: "injectables-refresher",
    title: "Injectables Practical Refresher",
    publicName: "Injectables Practical Refresher (1-to-1 Live Models)",
    certifiedTitle: "CPD Verified Refresher in Cosmetic Injectables",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Intermediate",
    level: "Intermediate",
    category: "refresher",
    isRefresher: true,
    startDate: "Flexible / By Appointment",
    alternateDates: ["Every Friday & Saturday", "Contact Academy for Bespoke Dates"],
    description: "Designed for previously qualified practitioners who want to regain confidence, refresh their injecting technique, or transition back to clinical practice under direct expert supervision.",
    price: 395,
    image: "/images/courses/foundation_injectables.png",
    duration: "Half Day (10:00 - 14:00 or 14:00 - 18:00)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Proof of prior Foundation Injectables certification",
      minAge: 21,
      insurance: "Requires active cosmetic indemnity insurance or academy coverage"
    },
    minimumAge: 21,
    curriculum: [
      "Technique review: needle angles, landmarking, and depth assessment",
      "Supervised live model injecting for upper face treatment zones",
      "Current regulatory guidance, product handling & dosage refresh",
      "1-to-1 mentor feedback and troubleshooting common clinical challenges"
    ]
  },
  {
    id: "fillers-refresher",
    slug: "fillers-refresher",
    title: "Dermal Fillers Practical Refresher",
    publicName: "Dermal Fillers Practical Refresher (Live Models)",
    certifiedTitle: "CPD Verified Refresher in Dermal Fillers",
    accreditationType: "CPD",
    certificateNumber: "",
    difficulty: "Intermediate",
    level: "Intermediate",
    category: "refresher",
    isRefresher: true,
    startDate: "Flexible / By Appointment",
    alternateDates: ["Every Friday & Saturday", "Contact Academy for Bespoke Dates"],
    description: "Hands-on refresher masterclass for certified filler practitioners focusing on precision lip contouring, nasolabial correction, cannula handling, and complication prevention.",
    price: 395,
    image: "/images/courses/dermal_fillers.png",
    duration: "Half Day (10:00 - 14:00 or 14:00 - 18:00)",
    accreditation: "CPD",
    prerequisites: {
      qualification: "Proof of prior Foundation Dermal Fillers certification",
      minAge: 21,
      insurance: "Requires active cosmetic indemnity insurance"
    },
    minimumAge: 21,
    curriculum: [
      "Lip border and body technique precision review",
      "Lower-face filler placement on live models",
      "Micro-cannula navigation and aspiration best practices",
      "Complication management and vascular emergency action plan review"
    ]
  },

  // ==========================================
  // 5. VTCT OFQUAL-REGULATED QUALIFICATIONS
  // ==========================================
  {
    id: "vtct-level-2-beauty-therapy",
    slug: "vtct-level-2-beauty-therapy",
    title: "VTCT Level 2 Diploma in Beauty Therapy",
    publicName: "VTCT Level 2 Diploma in Beauty Therapy (Regulated)",
    certifiedTitle: "VTCT Level 2 Diploma in Beauty Therapy",
    accreditationType: "VTCT",
    certificateNumber: "",
    difficulty: "Beginner",
    level: "Beginner",
    category: "vtct",
    startDate: "Intake Enrolling",
    alternateDates: ["Intake Enrolling", "Contact Academy for Schedules"],
    description: "Official Ofqual-regulated entry-level qualification for aspiring beauty specialists. Covers facial skincare, eye treatments, professional makeup, manicure, pedicure, waxing, and salon hygiene. VTCT registration, exam, and certification fees are included.",
    price: 2200,
    image: "/images/courses/vtct_level_2.png",
    duration: "Months-long Program (Part-Time / Full-Time)",
    accreditation: "VTCT",
    prerequisites: {
      qualification: "No prior experience required; open to beginners",
      minAge: 16,
      insurance: "Provided during academy clinical training"
    },
    minimumAge: 16,
    curriculum: [
      "Facial skin care treatments and skin analysis",
      "Eyelash and eyebrow tinting and shaping beauty treatments",
      "Professional makeup application techniques",
      "Manicure and pedicure nail therapies",
      "Waxing hair removal techniques",
      "Client care, consultation, health and salon safety regulations"
    ]
  },
  {
    id: "vtct-level-3-beauty-therapy-treatments",
    slug: "vtct-level-3-beauty-therapy-treatments",
    title: "VTCT Level 3 Diploma in Beauty Therapy Treatments",
    publicName: "VTCT Level 3 Diploma in Beauty Therapy Treatments (Regulated)",
    certifiedTitle: "VTCT Level 3 Diploma in Beauty Therapy Treatments",
    accreditationType: "VTCT",
    certificateNumber: "",
    difficulty: "Intermediate",
    level: "Intermediate",
    category: "vtct",
    startDate: "Awaiting Awarding-Body Approval (Waitlist)",
    alternateDates: ["Waitlist Registration Open"],
    description: "Advanced regulated qualification covering body massage, facial electrotherapy, advanced skincare therapies, and micro-current skin toning. Enrolling on waitlist only. VTCT registration, exam, and certification fees are included.",
    price: 2200,
    image: "/images/courses/vtct_level_3.png",
    duration: "Months-long Program",
    accreditation: "VTCT",
    prerequisites: {
      qualification: "VTCT Level 2 Beauty Therapy or equivalent beauty diploma",
      minAge: 16,
      insurance: "Awaiting final awarding body approval"
    },
    minimumAge: 16,
    curriculum: [
      "VTCT Level 3 Beauty Therapy treatments modules",
      "Facial electrical treatments (micro-current, galvanic, high frequency)",
      "Body massage & mechanical lymphatic drainage",
      "Advanced skin therapies and cellular skin analysis",
      "Client wellness assessment guidelines and salon management"
    ]
  },
  {
    id: "vtct-level-4-beauty-therapy",
    slug: "vtct-level-4-beauty-therapy",
    title: "VTCT Level 4 Beauty Therapy",
    publicName: "VTCT Level 4 Advanced Beauty Therapy (Laser & Clinical Skin)",
    certifiedTitle: "VTCT Level 4 Certificate in Advanced Skin & Clinical Aesthetics",
    accreditationType: "VTCT",
    certificateNumber: "",
    difficulty: "Advanced",
    level: "Advanced",
    category: "vtct",
    startDate: "Coming Soon (Register Interest)",
    alternateDates: ["Pre-registration Open"],
    description: "Ofqual-regulated Level 4 qualification covering advanced non-surgical aesthetics, laser/IPL skin therapies, and chemical peeling procedures. Register interest today to receive cohort syllabus updates. VTCT registration, exam, and certification fees are included.",
    price: 0,
    image: "/images/courses/vtct_level_4.png",
    duration: "Coming Soon",
    accreditation: "VTCT",
    prerequisites: {
      qualification: "VTCT Level 3 Beauty Therapy or equivalent healthcare credential",
      minAge: 18,
      insurance: "Not required for register interest"
    },
    minimumAge: 18,
    curriculum: [
      "VTCT Level 4 advanced skin anatomy and physiology",
      "Laser and intense pulsed light (IPL) safety and protocols",
      "Advanced chemical peeling and microneedling modalities",
      "Clinical consultation, management of tissue trauma, and ethics"
    ]
  }
];
