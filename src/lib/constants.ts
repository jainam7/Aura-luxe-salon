// Constants for Aura Unisex Salon (en-CA locale)

export interface Service {
  id: string;
  name: string;
  category: string;
  priceMin: number;
  priceMax: number;
  durationMin: number;
  durationMax: number;
  description: string;
}

export const SALONS_SERVICES: Service[] = [
  // HAIR SERVICES
  {
    id: "hair-women-cut",
    name: "Women's Haircut & Blow-dry",
    category: "Hair",
    priceMin: 65,
    priceMax: 120,
    durationMin: 45,
    durationMax: 60,
    description: "Tailored haircut customized to complement your face shape, followed by a professional blowout."
  },
  {
    id: "hair-men-cut",
    name: "Men's Haircut (Scissor or Clipper)",
    category: "Hair",
    priceMin: 35,
    priceMax: 60,
    durationMin: 30,
    durationMax: 45,
    description: "Precision haircut that includes shampoo, scalp massage, and customized styling."
  },
  /*
  {
    id: "hair-child-cut",
    name: "Children's Haircut (Under 12)",
    category: "Hair",
    priceMin: 25,
    priceMax: 40,
    durationMin: 20,
    durationMax: 30,
    description: "Gentle and stylish haircut for our youngest clientele."
  },
  {
    id: "hair-fringe",
    name: "Bang/Fringe Trim",
    category: "Hair",
    priceMin: 15,
    priceMax: 25,
    durationMin: 15,
    durationMax: 15,
    description: "Quick touch-up to maintain your fringe between full haircut services."
  },
  {
    id: "hair-blowdry",
    name: "Shampoo & Blow-dry",
    category: "Hair",
    priceMin: 45,
    priceMax: 80,
    durationMin: 30,
    durationMax: 45,
    description: "Luxurious hair wash with premium shampoo and customized professional blowout styling."
  },
  {
    id: "hair-iron",
    name: "Curling / Flat Iron Styling",
    category: "Hair",
    priceMin: 55,
    priceMax: 95,
    durationMin: 30,
    durationMax: 45,
    description: "Add sleek straightness or gorgeous, bouncy curls with professional styling tools."
  },
  {
    id: "hair-updo",
    name: "Updo & Formal Styling",
    category: "Hair",
    priceMin: 85,
    priceMax: 160,
    durationMin: 60,
    durationMax: 90,
    description: "Elegant updos and elaborate styles designed for galas, anniversaries, or formal events."
  },
  {
    id: "hair-colour",
    name: "Global Hair Colour",
    category: "Hair",
    priceMin: 90,
    priceMax: 150,
    durationMin: 90,
    durationMax: 120,
    description: "Full, luxurious single-process all-over hair color using organic, hair-healthy dyes."
  },
  {
    id: "hair-highlights",
    name: "Highlights (Partial / Full)",
    category: "Hair",
    priceMin: 110,
    priceMax: 220,
    durationMin: 90,
    durationMax: 150,
    description: "Dimension-enhancing professional highlights tailored to brighten your overall look."
  },
  */
  {
    id: "hair-balayage",
    name: "Balayage & Ombre",
    category: "Hair",
    priceMin: 180,
    priceMax: 320,
    durationMin: 150,
    durationMax: 210,
    description: "Hand-painted, natural-looking hand-gradient coloring that offers soft, beautiful growth."
  },
  /*
  {
    id: "hair-toner",
    name: "Toner / Gloss Treatment",
    category: "Hair",
    priceMin: 55,
    priceMax: 95,
    durationMin: 30,
    durationMax: 45,
    description: "Refreshes dull hair tones and coats each strand in a high-gloss, protective shield."
  },
  {
    id: "hair-root",
    name: "Root Touch-Up",
    category: "Hair",
    priceMin: 75,
    priceMax: 130,
    durationMin: 60,
    durationMax: 75,
    description: "Precise application to roots only to cover grays and maintain solid base color consistency."
  },
  {
    id: "hair-correction",
    name: "Colour Correction",
    category: "Hair",
    priceMin: 250,
    priceMax: 600,
    durationMin: 180,
    durationMax: 300,
    description: "Specialized service to correct previous hair color errors or transition dramatically."
  },
  {
    id: "hair-keratin",
    name: "Keratin Smoothing Treatment",
    category: "Hair",
    priceMin: 250,
    priceMax: 500,
    durationMin: 150,
    durationMax: 210,
    description: "Frizz-eliminating keratin formula that seals cuticle, cutting styling time in half."
  },
  {
    id: "hair-botox",
    name: "Hair Botox / Deep Conditioning",
    category: "Hair",
    priceMin: 120,
    priceMax: 250,
    durationMin: 60,
    durationMax: 90,
    description: "Restorative deep therapy that nourishes damaged hair and injects essential nutrients."
  },
  {
    id: "hair-scalp",
    name: "Scalp Treatment",
    category: "Hair",
    priceMin: 75,
    priceMax: 130,
    durationMin: 45,
    durationMax: 60,
    description: "Purifying scrub, steam therapy, and deep massage designed to improve follicle growth and health."
  },
  {
    id: "hair-extensions",
    name: "Hair Extensions (Tape-in / Weft)",
    category: "Hair",
    priceMin: 400,
    priceMax: 900,
    durationMin: 150,
    durationMax: 210,
    description: "Add incredible volume, thickness, and length using premium-grade, damage-free extensions."
  },
  {
    id: "hair-perm",
    name: "Perms / Wave Treatments",
    category: "Hair",
    priceMin: 150,
    priceMax: 280,
    durationMin: 120,
    durationMax: 180,
    description: "Long-lasting texturizing curl or wave service that creates natural-looking body."
  },
  */

  // BARBERING SERVICES
  {
    id: "barber-beard",
    name: "Classic Beard Trim & Shape",
    category: "Barbering",
    priceMin: 25,
    priceMax: 45,
    durationMin: 20,
    durationMax: 30,
    description: "Sculpting, line crispness, and conditioning with high-quality oils and hot towel finish."
  },
  {
    id: "barber-shave",
    name: "Hot Towel Shave",
    category: "Barbering",
    priceMin: 40,
    priceMax: 65,
    durationMin: 30,
    durationMax: 45,
    description: "Traditional straight-razor shave with pre-shave cream, warm towels, and soothing balm."
  },
  {
    id: "barber-combo",
    name: "Haircut + Beard Combo",
    category: "Barbering",
    priceMin: 55,
    priceMax: 90,
    durationMin: 45,
    durationMax: 60,
    description: "Combined signature hair cut and a classic beard shape with hot towel styling."
  },
  /*
  {
    id: "barber-fade",
    name: "Fade / Taper (Skin, Low, Mid, High)",
    category: "Barbering",
    priceMin: 40,
    priceMax: 65,
    durationMin: 30,
    durationMax: 45,
    description: "Precision-grade clippering fading to skin with absolute seamless transition."
  },
  {
    id: "barber-head",
    name: "Head Shave",
    category: "Barbering",
    priceMin: 35,
    priceMax: 55,
    durationMin: 30,
    durationMax: 30,
    description: "Full straight razor head shave for the ultimate clean, comfortable experience."
  },
  */

  // SKIN & FACIAL SERVICES
  {
    id: "skin-classic",
    name: "Classic Facial",
    category: "Skin",
    priceMin: 75,
    priceMax: 120,
    durationMin: 60,
    durationMax: 60,
    description: "Essential wellness routine: gentle cleansing, toning, exfoliating, masking, and hydration."
  },
  {
    id: "skin-cleansing",
    name: "Deep Cleansing / Acne Facial",
    category: "Skin",
    priceMin: 90,
    priceMax: 145,
    durationMin: 75,
    durationMax: 75,
    description: "Unclogs congested pores, targets sebum hotspots, extraction, and balances skin flora."
  },
  /*
  {
    id: "skin-aging",
    name: "Hydrating / Anti-Aging Facial",
    category: "Skin",
    priceMin: 110,
    priceMax: 180,
    durationMin: 75,
    durationMax: 90,
    description: "Collagen-boosting massage, active peptide serums, and intensive moisture lock."
  },
  {
    id: "skin-brightening",
    name: "Brightening & De-Tan Facial",
    category: "Skin",
    priceMin: 85,
    priceMax: 130,
    durationMin: 60,
    durationMax: 60,
    description: "Vitamins-rich formula addressing color unevenness and revealing skin radiance."
  },
  */
  {
    id: "skin-micro",
    name: "Microdermabrasion",
    category: "Skin",
    priceMin: 120,
    priceMax: 200,
    durationMin: 60,
    durationMax: 60,
    description: "Diamond-tip mechanical peel that resurfaces top layers to erase fine lines."
  },
  /*
  {
    id: "skin-led",
    name: "LED Light Therapy Facial",
    category: "Skin",
    priceMin: 100,
    priceMax: 180,
    durationMin: 45,
    durationMax: 60,
    description: "Targeted LED spectrum treatment to calm inflammation or accelerate repair."
  },
  {
    id: "skin-brow-shape",
    name: "Eyebrow Shaping (Wax or Thread)",
    category: "Skin",
    priceMin: 18,
    priceMax: 30,
    durationMin: 15,
    durationMax: 20,
    description: "Sculpts browser lines and structures the natural alignment of your face."
  },
  {
    id: "skin-brow-tint",
    name: "Eyebrow Tinting",
    category: "Skin",
    priceMin: 25,
    priceMax: 40,
    durationMin: 20,
    durationMax: 20,
    description: "Darkens light strands to give brows an instantly fuller and defined look."
  },
  {
    id: "skin-lash-tint",
    name: "Eyelash Tinting",
    category: "Skin",
    priceMin: 35,
    priceMax: 55,
    durationMin: 20,
    durationMax: 30,
    description: "Eyelash-safe pigment that replaces mascara, creating darker, longer lash visuals."
  },
  {
    id: "skin-lash-lift",
    name: "Lash Lift & Tint",
    category: "Skin",
    priceMin: 90,
    priceMax: 140,
    durationMin: 60,
    durationMax: 60,
    description: "Curves lashes upward and deep-tints them, adding long-lasting definition."
  },
  {
    id: "skin-face-wax",
    name: "Full Face Waxing",
    category: "Skin",
    priceMin: 55,
    priceMax: 85,
    durationMin: 30,
    durationMax: 40,
    description: "Smooth, clean facial hair removal from roots using honey-derived skin wax."
  },
  */

  // NAIL SERVICES
  {
    id: "nail-classic-mani",
    name: "Classic Manicure",
    category: "Nails",
    priceMin: 35,
    priceMax: 55,
    durationMin: 30,
    durationMax: 45,
    description: "Cuticle shaping, brief hand massage, base/color coats, and nourishing hand butter."
  },
  {
    id: "nail-classic-pedi",
    name: "Classic Pedicure",
    category: "Nails",
    priceMin: 50,
    priceMax: 75,
    durationMin: 45,
    durationMax: 60,
    description: "Soothing foot bath scrub, heel sanding, nail trims, and foot massage."
  },
  {
    id: "nail-gel-mani",
    name: "Gel Manicure",
    category: "Nails",
    priceMin: 50,
    priceMax: 75,
    durationMin: 45,
    durationMax: 60,
    description: "Long-lasting LED curable gel overlay that avoids chipping for up to 3 weeks."
  },
  /*
  {
    id: "nail-gel-pedi",
    name: "Gel Pedicure",
    category: "Nails",
    priceMin: 65,
    priceMax: 90,
    durationMin: 60,
    durationMax: 75,
    description: "Spa pedicure topped off with indestructible, high-shine gel nail polish configuration."
  },
  {
    id: "nail-combo",
    name: "Spa Manicure & Pedicure Combo",
    category: "Nails",
    priceMin: 100,
    priceMax: 150,
    durationMin: 90,
    durationMax: 120,
    description: "Complete hands and feet escape featuring dual exfoliation and warm oil moisturization."
  },
  {
    id: "nail-gel-remove",
    name: "Gel Removal",
    category: "Nails",
    priceMin: 20,
    priceMax: 35,
    durationMin: 20,
    durationMax: 30,
    description: "Safe foil wrap soak designed to dissolve gel without damaging nail plates."
  },
  {
    id: "nail-acrylic",
    name: "Acrylic Full Set",
    category: "Nails",
    priceMin: 70,
    priceMax: 110,
    durationMin: 60,
    durationMax: 90,
    description: "Stunning nail length extensions shaped to your preference with durable acrylic."
  },
  {
    id: "nail-art",
    name: "Nail Art (Full Hand Accent)",
    category: "Nails",
    priceMin: 35,
    priceMax: 80,
    durationMin: 30,
    durationMax: 60,
    description: "Custom hand-drawn vector art, gem placements, and intricate patterns."
  },
  {
    id: "nail-dip",
    name: "Dip Powder Manicure",
    category: "Nails",
    priceMin: 60,
    priceMax: 90,
    durationMin: 45,
    durationMax: 60,
    description: "Odorless acrylic dipping system designed to add incredible structural hardness."
  },
  */

  // MASSAGE & SPA SERVICES
  {
    id: "spa-swedish-60",
    name: "Swedish Relaxation Massage (60 min)",
    category: "Massage & Spa",
    priceMin: 95,
    priceMax: 130,
    durationMin: 60,
    durationMax: 60,
    description: "Gentle rhythmic effleurage stroke strokes to soothe overall nervous tension."
  },
  /*
  {
    id: "spa-swedish-90",
    name: "Swedish Relaxation Massage (90 min)",
    category: "Massage & Spa",
    priceMin: 130,
    priceMax: 175,
    durationMin: 90,
    durationMax: 90,
    description: "Extended deep full-body decompression to entirely reset muscle tissues."
  },
  */
  {
    id: "spa-deep-tissue",
    name: "Deep Tissue Massage",
    category: "Massage & Spa",
    priceMin: 110,
    priceMax: 160,
    durationMin: 60,
    durationMax: 90,
    description: "Targets severe knots, chronic layout tightness, and myofascial restriction points."
  },
  {
    id: "spa-hot-stone",
    name: "Hot Stone Massage",
    category: "Massage & Spa",
    priceMin: 130,
    priceMax: 190,
    durationMin: 75,
    durationMax: 90,
    description: "Warm Basalt stones conduct direct heat deep into sore, tense muscles."
  },
  /*
  {
    id: "spa-scalp",
    name: "Scalp & Head Massage",
    category: "Massage & Spa",
    priceMin: 45,
    priceMax: 75,
    durationMin: 30,
    durationMax: 30,
    description: "Nirvana-inducing pressure point rub on scalp, templates, and upper neck."
  },
  {
    id: "spa-back",
    name: "Back, Neck & Shoulder Massage",
    category: "Massage & Spa",
    priceMin: 65,
    priceMax: 100,
    durationMin: 45,
    durationMax: 45,
    description: "Focuses intensively on the desk-worker stress points of your upper frame."
  },
  {
    id: "spa-scrub",
    name: "Body Scrub & Polish",
    category: "Massage & Spa",
    priceMin: 95,
    priceMax: 150,
    durationMin: 60,
    durationMax: 75,
    description: "Full body sea-salt polish followed by dynamic essential oil hydration."
  },
  */

  // BRIDAL & SPECIAL OCCASION
  {
    id: "bridal-styling",
    name: "Bridal Hair Styling",
    category: "Bridal & Occasion",
    priceMin: 200,
    priceMax: 450,
    durationMin: 90,
    durationMax: 180,
    description: "Exquisite show-stopping bridal styling including veil placement and tiara fitting."
  },
  {
    id: "bridal-makeup",
    name: "Bridal Makeup (Airbrush available)",
    category: "Bridal & Occasion",
    priceMin: 250,
    priceMax: 500,
    durationMin: 90,
    durationMax: 120,
    description: "HD long-lasting photo-ready application custom structured to glow all day."
  },
  {
    id: "bridal-combo",
    name: "Bridal Hair + Makeup Package",
    category: "Bridal & Occasion",
    priceMin: 400,
    priceMax: 900,
    durationMin: 180,
    durationMax: 240,
    description: "Ultimate luxury bridal care styling and makeup with premium skin prep treatments."
  },
  /*
  {
    id: "bridal-trial",
    name: "Trial Hair & Makeup Session",
    category: "Bridal & Occasion",
    priceMin: 180,
    priceMax: 350,
    durationMin: 90,
    durationMax: 120,
    description: "Collaborative mock session to refine and perfect your exact visual outline."
  },
  {
    id: "bridal-bridesmaid",
    name: "Bridesmaid Hair Styling",
    category: "Bridal & Occasion",
    priceMin: 85,
    priceMax: 160,
    durationMin: 60,
    durationMax: 90,
    description: "Cohesively styled curls, braids, or updos coordinate perfectly with bridal themes."
  },
  {
    id: "bridal-mother",
    name: "Mother of Bride/Groom Package",
    category: "Bridal & Occasion",
    priceMin: 180,
    priceMax: 300,
    durationMin: 90,
    durationMax: 120,
    description: "Polished styling and skin-brightening makeup for the mothers of the wedding hosts."
  },
  {
    id: "bridal-groom",
    name: "Groom Grooming Package (Cut + Beard + Facial)",
    category: "Bridal & Occasion",
    priceMin: 120,
    priceMax: 200,
    durationMin: 90,
    durationMax: 120,
    description: "Crisp haircut, beard symmetry, clear facial scrub, and refreshing eye patches."
  },
  */

  // VALUE PACKAGES
  {
    id: "pkg-refresh",
    name: "The Refresh (Haircut + Blowdry + Brow Shape)",
    category: "Packages",
    priceMin: 95,
    priceMax: 145,
    durationMin: 60,
    durationMax: 90,
    description: "The perfect quick-turn wellness bundle to completely upgrade your weekly alignment."
  },
  {
    id: "pkg-works",
    name: "The Works (Cut + Colour + Conditioning Therapy)",
    category: "Packages",
    priceMin: 220,
    priceMax: 380,
    durationMin: 120,
    durationMax: 180,
    description: "Full transformational hair redesign with high-potency conditioning preservation."
  },
  {
    id: "pkg-pamper",
    name: "Pamper Day (Facial + Manicure + Pedicure)",
    category: "Packages",
    priceMin: 160,
    priceMax: 230,
    durationMin: 120,
    durationMax: 150,
    description: "Complete glow treatment targeting facial skin cells, hands, and nails collectively."
  },
  /*
  {
    id: "pkg-couples",
    name: "Couple's Spa (Massage + Facial for two)",
    category: "Packages",
    priceMin: 280,
    priceMax: 420,
    durationMin: 120,
    durationMax: 150,
    description: "Double relaxation: parallel Swedish massages and deep classic facial hydration side-by-side."
  },
  {
    id: "pkg-pre-bridal",
    name: "Pre-Bridal Package (4 sessions over 4 weeks)",
    category: "Packages",
    priceMin: 600,
    priceMax: 1200,
    durationMin: 360,
    durationMax: 480,
    description: "Intensive 4-week calendar featuring structural exfoliations, hair prep, and skin glow build-ups."
  },
  {
    id: "pkg-mens-groom",
    name: "Men's Total Grooming (Cut + Shave + Facial)",
    category: "Packages",
    priceMin: 110,
    priceMax: 170,
    durationMin: 90,
    durationMax: 120,
    description: "Full masculine signature upgrade: modern fade, traditional hot towel shave, and mud facial."
  }
  */
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bilingual: boolean;
  avatar: string;
}

export const SALONS_TEAM: TeamMember[] = [
  {
    id: "team-olivia",
    name: "Olivia Tremblay-Martin",
    role: "Master Creative Director",
    specialty: "Balayage, High-Fashion Updos, Colour Correction",
    experience: "14 Years",
    bilingual: true,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "team-marcus",
    name: "Marcus Dubois",
    role: "Senior Barbering Stylist",
    specialty: "Skin Fades, Hot Towel straight shaves, Beard Sculpting",
    experience: "10 Years",
    bilingual: true,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "team-chloe",
    name: "Chloe Henderson",
    role: "Senior Aesthetic Specialist",
    specialty: "LED Facials, Brightening, Eyebrow Threading & Lifting",
    experience: "8 Years",
    bilingual: false,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "team-daniel",
    name: "Daniel Gauthier",
    role: "Lead Salon Stylist",
    specialty: "Precision Razor Bob Cut, Keratin Therapies",
    experience: "11 Years",
    bilingual: true,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "team-sophie",
    name: "Sophie Roy",
    role: "Master Nail Artist",
    specialty: "Dipping Powder, Intricate Gel Vector Art, Mani-Pedi combos",
    experience: "7 Years",
    bilingual: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "team-ethan",
    name: "Ethan Smith-Clark",
    role: "Expert Massage Therapist",
    specialty: "Deep Tissue Knots, Swedish Therapy, Hot Stone",
    experience: "9 Years",
    bilingual: false,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
  }
];

export interface FAQ {
  q: string;
  a: string;
}

export const SALONS_FAQS: FAQ[] = [
  {
    q: "Do you accept Interac, Visa, and Mastercard?",
    a: "Yes, we accept all major Canadian payment methods including Interac Debit, Visa, Mastercard, American Express, Apple Pay, and Google Pay."
  },
  {
    q: "Do you charge HST/GST on top of listed prices?",
    a: "Yes, in accordance with Provincial and Federal regulations, standard HST/GST will be added to the price of all treatments and retail products at checkout."
  },
  {
    q: "Do you accommodate walk-ins or is appointment preferred?",
    a: "While we accept walk-ins based on designer availability, we strongly recommend booking your appointment in advance to secure your preferred stylist and time slot."
  },
  {
    q: "Do you offer bilingual service (English/French)?",
    a: "Absolutely! Several of our expert stylists, including Olivia Tremblay-Martin, Marcus Dubois, and Daniel Gauthier, are fully bilingual and ready to offer services in both English and French."
  },
  {
    q: "What is your cancellation policy?",
    a: "We kindly request at least 24 hours' notice for cancellations. Cancellations made within 24 hours of your appointment may be subject to a fee equal to 50% of the scheduled service value."
  },
  {
    q: "Do you have parking available?",
    a: "Yes, we have complimentary, dedicated visitor parking spots located directly behind the salon building, as well as ample street parking along the main entrance boulevard."
  },
  {
    q: "Are your products cruelty-free and Canadian?",
    a: "We are deeply committed to clean beauty. Over 90% of our luxury styling shampoos, creams, and colorings are certified organic, cruelty-free, and proudly sourced from premium Canadian manufacturers."
  },
  {
    q: "Do you offer gift cards?",
    a: "Yes, we offer both physical gold-embossed gift certificates in-salon and electronic digital gift cards delivered instantly via email, starting at $25 CAD up to $500 CAD."
  },
  {
    q: "What COVID/hygiene protocols do you follow?",
    a: "Our salon has state-of-the-art HEPA custom ventilation. Every single styling station, scissor set, comb guide, and sink bowl is thoroughly misted and sterilized with medical-grade cleaners between clients."
  },
  {
    q: "Do you offer student or senior discounts?",
    a: "Yes, we offer a 10% discount on haircuts and styling for all active high-school / university students and seniors (65+) on Tuesdays and Wednesdays with a valid ID."
  }
];

export const SALON_TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Vibrant Balayage Client",
    service: "Balayage & Ombre",
    stars: 5,
    text: "Olivia did a marvelous job with my balayage! The transition from dark roots is incredibly soft, and my hair still feels super silky. Worth every Canadian Dollar!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "Mathieu Tremblay",
    role: "Regular Grooming Client",
    service: "Haircut + Beard Combo",
    stars: 5,
    text: "Marcus has been shaping my beard for over two years now. The straight razor hot towel beard shave is the absolute peak of relaxation. Strongly recommend the combo!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "Emmanuelle Lavigne",
    role: "Luxury Spa Admirer",
    service: "Pamper Day Package",
    stars: 5,
    text: "Received the Pamper Day bundle as a birthday gift card. Chloe and Sophie treated me like a queen. The hydrating facial is divine, and my nails never looked better.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "Robert Sinclair",
    role: "Modern Fade Enthusiast",
    service: "Fade / Taper Cut",
    stars: 5,
    text: "Fast, extremely clean clipper line work, and an elegant cup of dark roast espresso on the house. This is a five-star hospitality establishment first, salon second.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300"
  }
];

export const INSTAGRAM_MOCKED = [
  {
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400",
    likes: "248",
    comments: "14",
    tag: "#AuraWaves"
  },
  {
    url: "https://images.unsplash.com/photo-1620331713240-1da2392a796a?auto=format&fit=crop&q=80&w=400",
    likes: "512",
    comments: "38",
    tag: "#CanadianBeauty"
  },
  {
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400",
    likes: "194",
    comments: "9",
    tag: "#BalayageArt"
  },
  {
    url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400",
    likes: "420",
    comments: "25",
    tag: "#MarcusBarbering"
  },
  {
    url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400",
    likes: "305",
    comments: "18",
    tag: "#GlowFacial"
  },
  {
    url: "https://images.unsplash.com/photo-1604654894610-df4906b1103a?auto=format&fit=crop&q=80&w=400",
    likes: "612",
    comments: "44",
    tag: "#GelNailElegance"
  }
];
