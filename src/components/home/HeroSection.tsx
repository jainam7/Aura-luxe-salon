import { motion } from "motion/react";
import { Sparkles, Calendar, ChevronRight } from "lucide-react";
import type { Variants } from "motion/react";

interface HeroSectionProps {
  onInteract: (targetTab: string) => void;
}

export default function HeroSection({ onInteract }: HeroSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="hero_section"
      className="relative h-[85vh] min-h-[600px] lg:h-[95vh] w-full flex items-center justify-center overflow-hidden bg-primary px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-0"
    >
      {/* Cinematic Cover Background (Unsplash Premium Luxury Beauty Fallback) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=90&w=1920"
          alt="Aura Luxury Salon"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50"
          referrerPolicy="no-referrer"
        />
        {/* Rich linear and radial gradients to blend elements gracefully */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-black/60 z-1" />
        <div className="absolute inset-0 radial-blur-accent z-1 opacity-60" />
      </div>

      {/* Floating Sparkle Micro-indicators for mood */}
      <div className="absolute top-[20%] left-[10%] opacity-20 hidden sm:block animate-pulse">
        <Sparkles className="text-accent w-6 h-6" />
      </div>
      <div className="absolute bottom-[30%] right-[15%] opacity-25 hidden sm:block animate-pulse delay-700">
        <Sparkles className="text-accent-light w-8 h-8" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl text-center flex flex-col items-center mt-12 sm:mt-8 md:mt-4"
      >
        {/* Badge Indicator */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 px-3 sm:px-4.5 py-1.5 sm:py-2 border border-accent/30 bg-primary/80 backdrop-blur-md rounded-full mb-6 max-w-[95vw] sm:max-w-full overflow-hidden"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping shrink-0" />
          <span className="text-[7.5px] sm:text-[10px] tracking-[0.04em] sm:tracking-[0.25em] text-accent font-mono uppercase font-bold whitespace-nowrap shrink-0">
            L'EXPÉRIENCE CANADIENNE D'EXCEPTION
          </span>
        </motion.div>

        {/* Cinematic Stagger Headline */}
        <motion.h2
          variants={itemVariants}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-secondary font-light tracking-tight leading-[1.05]"
        >
          Unveil Your <br className="sm:hidden" />
          <span className="font-accent text-accent italic">Inner Radiance</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-secondary/85 text-sm sm:text-base md:text-[17px] font-light tracking-wider max-w-2xl mt-6 leading-relaxed"
        >
          Discover cutting-edge scissor work, bespoke hand-painted balayage, and
          restorative spa treatments designed for Canada's multicultural
          tapestry. Elevate your alignment in an atmosphere of refined luxury.
        </motion.p>

        {/* Actions Button Group */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4.5 mt-10 w-full sm:w-auto px-6 sm:px-0"
        >
          {/* Main Booking Trigger */}
          <button
            onClick={() => onInteract("reservation")}
            className="flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-light text-primary text-xs uppercase font-medium tracking-[0.2em] px-8 py-4 rounded-[8px] transition-all duration-300 shadow-xl shadow-accent/10 active:scale-98 cursor-pointer clickable"
          >
            <Calendar className="w-4 h-4 text-primary" />
            Book Appointment
          </button>

          {/* Sub menu explorer */}
          <button
            onClick={() => onInteract("services")}
            className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-secondary border border-secondary/20 hover:border-secondary/40 text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-[8px] transition-all duration-300 cursor-pointer clickable"
          >
            Explore Services
            <ChevronRight className="w-4 h-4 text-secondary/60" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
