import { useRef } from "react";
import {
  Scissors,
  Sparkles,
  Brush,
  Layers,
  Heart,
  Waves,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { formatCAD } from "../../lib/formatters";
import AnimatedSection from "../shared/AnimatedSection";
import stylingBalayageFoils from "../../assets/images/styling_balayage_foils_1779553403460.png";

interface ServicesCarouselProps {
  onInteract: (targetTab: string) => void;
}

const FEATURED_HIGHLIGHTS = [
  {
    icon: Scissors,
    name: "Women's Haircut & Blow-dry",
    price: 65,
    desc: "Bespoke scissor design backed by customized shampoo treatments and high-volume blowouts.",
    bgImage:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=400",
  },
  {
    icon: RazorIcon, // We can define a scissor / razor layout or standard icon from Lucide
    name: "Men's Styling & Combo",
    price: 55,
    desc: "Precision taper blending coupled with premium alignment beard-trim styling and steam wellness.",
    bgImage:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=400",
  },
  {
    icon: Brush,
    name: "Balayage & Ombre Paint",
    price: 180,
    desc: "Bespoke, hand-painted gradients designed to expand depth while maintaining root preservation.",
    bgImage: stylingBalayageFoils,
  },
  {
    icon: Layers,
    name: "Hydrating Facial Cure",
    price: 110,
    desc: "Collagen restoration, peptide serum masking, and deep mineral mist infusion for active glow.",
    bgImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400",
  },
  {
    icon: Sparkles,
    name: "Gel Polish Hand Artisan",
    price: 50,
    desc: "Sculpted nail configurations topped off with ultra-gloss LED curable organic gels.",
    bgImage:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=400",
  },
  {
    icon: Waves,
    name: "Swedish Relax Massage",
    price: 95,
    desc: "Tension relieving rhythmic massage strokes with essential botanical oils to calm overall nervous state.",
    bgImage:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400",
  },
];

// Fallback inline Razor / Beard icon since Lucide razor doesn't always exist in classic versions
function RazorIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h1m10 0h1a2 2 0 0 1 2 2v2" />
      <path d="M3 11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-1H3v1Z" />
      <path d="M12 14v5a2 2 0 0 1-2 2H8" />
    </svg>
  );
}

export default function ServicesCarousel({
  onInteract,
}: ServicesCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      // Scroll by one clientWidth to smoothly paginated screen view
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-[#FAF7F2] text-primary select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase font-bold">
              CURATED EXPERIENCES
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mt-2 text-primary">
              Bespoke Services Showcase
            </h3>
            <p className="text-sm sm:text-base text-text-muted mt-3 font-light leading-relaxed">
              Explore some of our signature luxurious treatments, designed by
              our master stylists. Tap "Explore Services" for current rates.
            </p>
          </div>

          {/* Slider Controllers - Centered on Mobile */}
          <div className="flex gap-4 justify-center md:justify-end w-full md:w-auto mt-2 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="p-3 border border-accent/20 rounded-full hover:bg-accent hover:text-primary text-accent bg-surface transition-colors cursor-pointer select-none shadow-xs"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 border border-accent/20 rounded-full hover:bg-accent hover:text-primary text-accent bg-surface transition-colors cursor-pointer select-none shadow-xs"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Flow Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-none no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {FEATURED_HIGHLIGHTS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-center sm:snap-start rounded-[16px] overflow-hidden bg-surface group hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 border border-border-custom"
              >
                {/* Image Wrap */}
                <div className="h-[200px] relative overflow-hidden">
                  <img
                    src={item.bgImage}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-black/10 to-transparent" />

                  {/* Category icon indicator */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center text-accent">
                    <IconComponent className="w-4.5 h-4.5" />
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 flex flex-col h-[200px] justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h4 className="font-serif text-lg font-medium text-primary tracking-tight leading-snug">
                        {item.name}
                      </h4>
                      <span className="shrink-0 text-xs font-semibold text-accent font-mono">
                        From {formatCAD(item.price)}
                      </span>
                    </div>
                    <p className="text-[13px] sm:text-[14px] text-text-muted leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => onInteract("reservation")}
                    className="mt-4 w-full py-2.5 border border-accent/20 rounded-[8px] hover:bg-accent hover:text-primary text-accent text-[11px] font-mono tracking-widest uppercase transition-colors font-medium cursor-pointer clickable"
                  >
                    SELECT & BOOK
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic CTA */}
        <div className="text-center mt-4">
          <button
            onClick={() => onInteract("services")}
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-accent uppercase font-bold hover:text-primary transition-colors cursor-pointer clickable border-b border-accent pb-1"
          >
            SIGHT OUT FULL SERVICES CATALOGUE ({FEATURED_HIGHLIGHTS.length}+
            CATEGORIES)
          </button>
        </div>
      </div>
    </section>
  );
}
