import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SALON_TESTIMONIALS } from "../../lib/constants";
import { motion, AnimatePresence } from "motion/react";
import AnimatedSection from "../shared/AnimatedSection";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SALON_TESTIMONIALS.length);
    }, 6000); // 6s rotation
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SALON_TESTIMONIALS.length) % SALON_TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SALON_TESTIMONIALS.length);
  };

  const client = SALON_TESTIMONIALS[activeIndex];

  return (
    <section className="py-24 bg-surface text-primary px-4 sm:px-6 lg:px-8 border-b border-border-custom relative overflow-hidden">
      {/* Decorative floral watermark-feel glow block */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute -left-32 top-10 w-80 h-80 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase font-bold">
            CLIENT SATISFACTION
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mt-2 text-primary">
            Aura Guest Testimonials
          </h3>
          <div className="w-12 h-[1px] bg-accent/40 mx-auto mt-4" />
        </div>

        {/* Dynamic Card Container */}
        <div className="w-full relative min-h-[300px] flex flex-col items-center justify-center bg-secondary/30 border border-border-custom px-6 sm:px-16 py-10 sm:py-12 rounded-[16px] overflow-hidden">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-center flex flex-col items-center"
            >
              {/* Stars Row */}
              <div className="flex gap-1 mb-4 text-accent">
                {Array.from({ length: client.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Text Quote */}
              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed text-primary max-w-2xl mb-8 px-2 md:px-0">
                “{client.text}”
              </blockquote>

              {/* Profile details */}
              <div className="flex items-center gap-4">
                <img
                  src={client.avatar}
                  alt={client.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h5 className="font-serif text-sm font-semibold tracking-wide text-primary">
                    {client.name}
                  </h5>
                  <p className="text-[10px] tracking-wider text-accent font-mono uppercase">
                    {client.service} · {client.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Desktop Overlay Controls */}
          <div className="hidden md:flex justify-between items-center w-full absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-2 ml-1 cursor-pointer select-none border border-accent/20 rounded-full hover:bg-accent hover:text-primary transition-all text-accent pointer-events-auto shadow-md bg-surface"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 mr-1 cursor-pointer select-none border border-accent/20 rounded-full hover:bg-accent hover:text-primary transition-all text-accent pointer-events-auto shadow-md bg-surface"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Mobile controls & Dots pager indicators below container */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <button
            onClick={handlePrev}
            className="md:hidden p-2 border border-accent/20 rounded-full hover:bg-accent hover:text-primary text-accent bg-surface transition-all cursor-pointer select-none shadow-xs"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Pager Dots */}
          <div className="flex gap-2">
            {SALON_TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeIndex === index ? "bg-accent w-6" : "bg-accent/20 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="md:hidden p-2 border border-accent/20 rounded-full hover:bg-accent hover:text-primary text-accent bg-surface transition-all cursor-pointer select-none shadow-xs"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
