import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, Scissors, Sparkle } from "lucide-react";
import AnimatedSection from "../shared/AnimatedSection";
import manTransformation from "../../assets/images/man_transformation_1779552943470.png";
import womanTransformation from "../../assets/images/woman_transformation_1779552923773.png";

interface Transformation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  combinedImgUrl: string; // Using our generated high-quality side-by-sides
  stylist: string;
  serviceCompleted: string;
  steps: string[];
}

export default function TransformationShowcase() {
  const [activeTab, setActiveTab] = useState<"women" | "men">("women");

  const data: Record<"women" | "men", Transformation> = {
    women: {
      id: "women-transform",
      title: "Hand-Painted Balayage & Blowout",
      subtitle: "Dull & Frizzy to Radiantly Dimensional",
      description:
        "Our signature correction service for dry, flat tones. Includes a deep botanical protein bond-builder, expert freehand color painting, and a bouncy multi-layer blowout styling.",
      beforeImg: "Dull, brassy, dehydrated strands",
      afterImg: "Seamless, golden-honey dimensional balayage",
      combinedImgUrl: womanTransformation,
      stylist: "Olivia Tremblay-Martin (Master Stylist)",
      serviceCompleted: "Balayage & Ombre + Luxury Hair Botox",
      steps: [
        "Scalp detoxifying clay rinse",
        "Freehand honey-comb painting",
        "Bond-restoring protein mask infusion",
        "Dynamic multi-barrel round-brush blowout",
      ],
    },
    men: {
      id: "men-transform",
      title: "The Ultimate Dapper Re-Sculpt",
      subtitle: "Unruly Overgrowth to Sharp Crisp Lines",
      description:
        "A complete aesthetic rework designed to structure the natural jawline. Features a seamless warm skin fade, dapper pompadour styling, and a straight-razor steam-towel beard line up.",
      beforeImg: "Untamed beard, low-fade structure loss",
      afterImg: "Crisp taper, sharp beard symmetry",
      combinedImgUrl: manTransformation,
      stylist: "Marcus Dubois (Senior Barber)",
      serviceCompleted: "Haircut + Beard Combo with Shave",
      steps: [
        "Premium organic charcoal scalp sweep",
        "Seamless low skin transition fade",
        "Eucalyptus steam-towel beard prep",
        "Traditional straight-razor cheek alignment",
      ],
    },
  };

  const active = data[activeTab];

  return (
    <section
      id="transformation_journey"
      className="py-16 sm:py-24 bg-secondary/30 border-y border-border-custom relative overflow-hidden"
    >
      {/* Decorative blurry nodes */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-20 w-80 h-80 bg-accent-light/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase font-bold flex items-center justify-center gap-1.5 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" /> THE AURA SIGNATURE CRAFT
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mt-2 text-primary">
            Before & After Transformations
          </h3>
          <p className="text-xs sm:text-sm text-text-muted mt-3 font-light max-w-xl mx-auto leading-relaxed">
            Witness the real, high-contrast, premium transformations crafted
            daily in our salons. Beauty is a precise alignment of identity and
            artistry.
          </p>

          {/* Elegant Gold-Accent Tabs Selector */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8 sm:mt-10 max-w-[280px] sm:max-w-none mx-auto">
            <button
              onClick={() => setActiveTab("women")}
              className={`w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold transition-all duration-300 border cursor-pointer select-none text-center ${
                activeTab === "women"
                  ? "bg-accent border-accent text-primary shadow-lg shadow-accent/10"
                  : "bg-surface border-border-custom text-text-muted hover:border-accent/40"
              }`}
            >
              Women's Hair Artistry
            </button>
            <button
              onClick={() => setActiveTab("men")}
              className={`w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold transition-all duration-300 border cursor-pointer select-none text-center ${
                activeTab === "men"
                  ? "bg-accent border-accent text-primary shadow-lg shadow-accent/10"
                  : "bg-surface border-border-custom text-text-muted hover:border-accent/40"
              }`}
            >
              Men's Barber Sculpting
            </button>
          </div>
        </div>

        {/* Dynamic Card Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Split Image display (Interactive 16:9 comparison side-by-side) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative rounded-[20px] overflow-hidden border border-border-custom shadow-xl group aspect-video bg-zinc-950">
                <img
                  src={active.combinedImgUrl}
                  alt={active.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />

                {/* Visual Label Overlays */}
                <span className="absolute bottom-4 left-4 bg-zinc-950/85 backdrop-blur-md text-secondary border border-white/5 py-1.5 px-3 rounded-[6px] text-[10px] font-mono tracking-widest uppercase font-semibold">
                  ← BEFORE
                </span>
                <span className="absolute bottom-4 right-4 bg-accent/90 backdrop-blur-md text-primary py-1.5 px-3 rounded-[6px] text-[10px] font-mono tracking-widest uppercase font-bold shadow-md">
                  AFTER →
                </span>

                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-primary/90 backdrop-blur-md p-2 rounded-full border border-accent/30 shadow-md z-10">
                  <Scissors className="w-4 h-4 text-accent" />
                </div>
              </div>

              {/* Image subtext captions with fully responsive cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-1 pt-1 text-[11px] sm:text-[10px] font-mono tracking-wider text-text-muted">
                <div className="bg-surface/50 border border-border-custom/60 px-3.5 py-2 rounded-xl flex items-center gap-2">
                  <span className="text-text-primary font-bold shrink-0">
                    [BEFORE]
                  </span>
                  <span className="truncate">{active.beforeImg}</span>
                </div>
                <div className="bg-surface/50 border border-border-custom/60 px-3.5 py-2 rounded-xl flex items-center gap-2">
                  <span className="text-accent font-bold shrink-0">
                    [AFTER]
                  </span>
                  <span className="truncate">{active.afterImg}</span>
                </div>
              </div>
            </div>

            {/* Service & Process Description Panel */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-surface rounded-[24px] p-8 border border-border-custom shadow-sm relative">
                <div className="absolute -top-3 left-8 bg-accent/10 border border-accent/30 rounded-full px-3 py-1 flex items-center gap-1">
                  <Sparkle className="w-3 h-3 text-accent animate-spin" />
                  <span className="text-[9px] font-mono tracking-[0.1em] text-accent font-bold uppercase">
                    Tested Premium Work
                  </span>
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl text-primary font-normal tracking-tight mt-2">
                  {active.title}
                </h4>
                <p className="text-accent text-xs font-mono tracking-widest uppercase font-bold mt-1.5">
                  {active.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-text-muted mt-5 font-light leading-relaxed">
                  {active.description}
                </p>

                <div className="w-full h-[1px] bg-border-custom/80 my-6" />

                {/* Craft Specs Block */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#a8a199] block uppercase">
                      COMPLETED BY:
                    </span>
                    <span className="text-xs font-medium text-primary mt-1 block">
                      {active.stylist}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#a8a199] block uppercase">
                      SERVICES RENDERED:
                    </span>
                    <span className="text-xs font-medium text-accent mt-1 block">
                      {active.serviceCompleted}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#a8a199] block uppercase">
                      CRAFT STEPS PERFORMED:
                    </span>
                    <ul className="grid grid-cols-1 gap-2 mt-2">
                      {active.steps.map((step, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs font-light text-text-primary"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
