import { useState } from "react";
import { Search, Clock } from "lucide-react";
import { SALONS_SERVICES } from "../../lib/constants";
import { formatCAD } from "../../lib/formatters";
import AnimatedSection from "../shared/AnimatedSection";

import luxurySalonWash from "../../assets/images/luxury_salon_wash_1779553381429.png";
import luxuryStylingChair from "../../assets/images/luxury_styling_chair_1779553424756.png";
import manTransformation from "../../assets/images/man_transformation_1779552943470.png";
import stylingBalayageFoils from "../../assets/images/styling_balayage_foils_1779553403460.png";
import womanTransformation from "../../assets/images/woman_transformation_1779552923773.png";

interface ServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

const CATEGORIES = [
  { label: "All Menu", value: "All" },
  { label: "💇 Hair Care", value: "Hair" },
  { label: "🪒 Barbering", value: "Barbering" },
  { label: "🧖 Skin & Facial", value: "Skin" },
  { label: "💅 Nail Spa", value: "Nails" },
  { label: "💆 Massage & Spa", value: "Massage & Spa" },
  { label: "👰 Bridal Themes", value: "Bridal & Occasion" },
  { label: "📦 Special Packages", value: "Packages" },
];

export default function ServicesInteractiveGrid({
  onSelectService,
}: ServicesGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const getServiceSpecificImageUrl = (id: string, category: string) => {
    switch (id) {
      // Hair Care (18 items)
      case "hair-women-cut":
        return "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=600";
      case "hair-men-cut":
        return manTransformation;
      case "hair-child-cut":
        return "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?auto=format&fit=crop&q=80&w=600";
      case "hair-fringe":
        return "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&q=80&w=600";
      case "hair-blowdry":
        return "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600";
      case "hair-iron":
        return "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=600";
      case "hair-updo":
        return "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600";
      case "hair-colour":
        return "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=600";
      case "hair-highlights":
        return stylingBalayageFoils;
      case "hair-balayage":
        return womanTransformation;
      case "hair-toner":
        return "https://images.unsplash.com/photo-1605497746444-12ded6440f8e?auto=format&fit=crop&q=80&w=600";
      case "hair-root":
        return "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600";
      case "hair-correction":
        return womanTransformation;
      case "hair-keratin":
        return "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600";
      case "hair-botox":
        return luxurySalonWash;
      case "hair-scalp":
        return "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600";
      case "hair-extensions":
        return "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&q=80&w=600";
      case "hair-perm":
        return "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=600";

      // Barbering (5 items)
      case "barber-beard":
        return "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600";
      case "barber-shave":
        return "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600";
      case "barber-combo":
        return manTransformation;
      case "barber-fade":
        return "https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?auto=format&fit=crop&q=80&w=600";
      case "barber-head":
        return "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600";

      // Skin & Facial (11 items)
      case "skin-classic":
        return luxurySalonWash;
      case "skin-cleansing":
        return "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=600";
      case "skin-aging":
        return "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600";
      case "skin-brightening":
        return "https://images.unsplash.com/photo-1608889175123-8ec330b86f84?auto=format&fit=crop&q=80&w=600";
      case "skin-micro":
        return "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600";
      case "skin-led":
        return "https://images.unsplash.com/photo-1608889175123-8ec330b86f84?auto=format&fit=crop&q=80&w=600";
      case "skin-brow-shape":
        return "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600";
      case "skin-brow-tint":
        return "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600";
      case "skin-lash-tint":
        return "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600";
      case "skin-lash-lift":
        return "https://images.unsplash.com/photo-1583307130407-3c004f74f762?auto=format&fit=crop&q=80&w=600";
      case "skin-face-wax":
        return "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600";

      // Nails (9 items)
      case "nail-classic-mani":
        return "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=600";
      case "nail-classic-pedi":
        return "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600";
      case "nail-gel-mani":
        return "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600";
      case "nail-gel-pedi":
        return "https://images.unsplash.com/photo-1519415510236-8a51600db346?auto=format&fit=crop&q=80&w=600";
      case "nail-combo":
        return "https://images.unsplash.com/photo-1604654894610-df4906b1103a?auto=format&fit=crop&q=80&w=600";
      case "nail-gel-remove":
        return "https://images.unsplash.com/photo-1519415510236-8a51600db346?auto=format&fit=crop&q=80&w=600";
      case "nail-acrylic":
        return "https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&q=80&w=600";
      case "nail-art":
        return "https://images.unsplash.com/photo-1604654894610-df4906b1103a?auto=format&fit=crop&q=80&w=600";
      case "nail-dip":
        return "https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&q=80&w=600";

      // Massage & Spa (7 items)
      case "spa-swedish-60":
        return "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600";
      case "spa-swedish-90":
        return "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600";
      case "spa-deep-tissue":
        return "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600";
      case "spa-hot-stone":
        return "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600";
      case "spa-scalp":
        return luxurySalonWash;
      case "spa-back":
        return "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600";
      case "spa-scrub":
        return "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600";

      // Bridal & Occasion (7 items)
      case "bridal-styling":
        return "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600";
      case "bridal-makeup":
        return "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600";
      case "bridal-combo":
        return "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600";
      case "bridal-trial":
        return "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600";
      case "bridal-bridesmaid":
        return "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600";
      case "bridal-mother":
        return "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600";
      case "bridal-groom":
        return manTransformation;

      // Value Packages (6 items)
      case "pkg-refresh":
        return "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=600";
      case "pkg-works":
        return womanTransformation;
      case "pkg-pamper":
        return luxuryStylingChair;
      case "pkg-couples":
        return "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600";
      case "pkg-pre-bridal":
        return "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600";
      case "pkg-mens-groom":
        return manTransformation;

      default:
        // Category fallbacks
        switch (category) {
          case "Hair":
            return "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600";
          case "Barbering":
            return "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600";
          case "Skin":
            return "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600";
          case "Nails":
            return "https://images.unsplash.com/photo-1604654894610-df4906b1103a?auto=format&fit=crop&q=80&w=600";
          case "Massage & Spa":
            return "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600";
          case "Bridal & Occasion":
            return "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600";
          default:
            return "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600";
        }
    }
  };

  const filteredServices = SALONS_SERVICES.filter((service) => {
    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      id="services_page"
      className="bg-surface py-12 text-primary px-4 sm:px-6 lg:px-8"
    >
      {/* Page header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase font-bold">
          PRICING & OPTIONS
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mt-2 text-primary">
          Our Services Menu
        </h2>
        <p className="text-xs sm:text-sm text-text-muted mt-3 font-light max-w-2xl mx-auto leading-relaxed">
          Select from our wide suite of specialized unisex barbering, luxury
          hair styling, clinical facials, skin enhancements, and holistic body
          massages.
        </p>
        <div className="w-12 h-[1px] bg-accent/40 mx-auto mt-5" />
      </div>

      {/* Control bar */}
      <div className="max-w-7xl mx-auto flex flex-col gap-4 mb-12 bg-secondary/20 p-4 sm:p-6 border border-border-custom rounded-[20px] shadow-xs">
        {/* Categories Strip */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2 md:justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`text-[10px] sm:text-xs uppercase tracking-wider font-mono px-3 py-2.5 sm:px-4 rounded-[10px] border transition-all duration-300 cursor-pointer select-none text-center justify-center flex items-center whitespace-nowrap ${
                  selectedCategory === cat.value
                    ? "bg-accent border-accent text-primary font-bold shadow-md shadow-accent/10"
                    : "bg-surface border-border-custom text-text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Separator line */}
        <div className="w-full h-[1px] bg-border-custom/50" />

        {/* Search Input & Total Count Status */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/65" />
            <input
              type="text"
              placeholder="Search specialized treatment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface py-2.5 pl-10 pr-4 text-xs font-mono rounded-[10px] border border-border-custom input-gold-focus shadow-xs"
            />
          </div>

          <div className="text-[11px] font-mono text-text-muted/80 tracking-wider">
            SHOWING{" "}
            <span className="text-accent font-bold font-sans text-xs">
              {filteredServices.length}
            </span>{" "}
            PREMIUM TREATMENT{filteredServices.length === 1 ? "" : "S"}
          </div>
        </div>
      </div>

      {/* Main Grid mapping */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service, index) => (
          <AnimatedSection
            key={service.id}
            direction="up"
            delay={Math.min(index * 0.05, 0.25)}
            className="flex flex-col bg-surface border border-border-custom hover:shadow-2xl hover:shadow-accent/5 rounded-[16px] overflow-hidden group transition-all duration-300"
          >
            {/* Header image category specific */}
            <div className="h-[180px] relative overflow-hidden">
              <img
                src={getServiceSpecificImageUrl(service.id, service.category)}
                alt={service.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Category tag */}
              <span className="absolute top-4 left-4 text-[9px] tracking-wider font-mono uppercase bg-accent text-primary px-2 py-1 rounded-[4px] font-semibold">
                {service.category}
              </span>
            </div>

            {/* Content body */}
            <div className="p-6 flex flex-col justify-between flex-grow gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start gap-3">
                  <h4 className="font-serif text-lg font-medium tracking-tight text-primary leading-tight group-hover:text-accent transition-colors">
                    {service.name}
                  </h4>
                  <div className="flex flex-col items-end shrink-0">
                    <span className="text-xs font-semibold font-mono text-accent">
                      {formatCAD(service.priceMin)} –{" "}
                      {formatCAD(service.priceMax)}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-text-muted font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Timing info and button actions */}
              <div className="flex flex-col gap-3.5 pt-2 border-t border-border-custom">
                <div className="flex justify-between items-center text-[10px] font-mono text-text-muted/80">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    {service.durationMin === service.durationMax
                      ? `${service.durationMin} min`
                      : `${service.durationMin}–${service.durationMax} min`}
                  </span>
                  <span>* Pre-tax price</span>
                </div>

                <button
                  onClick={() => onSelectService(service.name)}
                  className="w-full text-center py-2.5 bg-secondary hover:bg-accent text-primary border border-accent/10 rounded-[8px] hover:text-primary transition-all text-[11px] font-mono font-medium tracking-widest uppercase cursor-pointer"
                >
                  Book This Service
                </button>
              </div>
            </div>
          </AnimatedSection>
        ))}

        {filteredServices.length === 0 && (
          <div className="col-span-full py-16 text-center border border-dashed border-accent/30 rounded-[16px] bg-secondary/20">
            <p className="font-serif text-lg text-text-muted font-light">
              No matching specialized treatments discovered.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 border border-accent rounded-lg text-xs font-mono text-accent hover:bg-accent hover:text-primary transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Luxury service notes */}
      <div className="max-w-7xl mx-auto mt-16 p-6 rounded-[16px] bg-primary/95 text-secondary border border-accent/15 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-lg">
          <h4 className="font-serif text-lg font-light text-accent tracking-wide">
            Need a bespoke custom treatment?
          </h4>
          <p className="text-secondary/60 text-xs font-light tracking-wide mt-1 leading-relaxed">
            Several specialized operations like extensive Bridal Updo combos or
            full high-fades are custom-quoted based on length or complexity.
            Talk to coordinates on-site.
          </p>
        </div>
        <div className="flex gap-4">
          <span className="text-[10px] font-mono text-accent-light/50 tracking-wider uppercase border border-accent/20 px-3 py-1.5 rounded-[4px]">
            13% HST APPLIES AT CHECKOUT
          </span>
        </div>
      </div>
    </div>
  );
}
