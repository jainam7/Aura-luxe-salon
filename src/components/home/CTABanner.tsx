import { Calendar, Ribbon } from "lucide-react";
import AnimatedSection from "../shared/AnimatedSection";

interface CTABannerProps {
  onInteract: (targetTab: string) => void;
}

export default function CTABanner({ onInteract }: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-24 bg-primary text-secondary px-4 sm:px-6 lg:px-8 border-t border-accent/20">
      {/* Absolute glow textures */}
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full radial-blur-accent opacity-50 pointer-events-none" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-zinc-950/80 pointer-events-none rounded-bl-full border-l border-b border-accent/15" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl text-center lg:text-left">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase font-bold flex items-center justify-center lg:justify-start gap-2">
            <Ribbon className="w-4 h-4 text-accent" />
            YOUR TRANSFORMATION AWAITS
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mt-3 text-secondary leading-tight">
            Your Transformation <br className="hidden sm:block" />
            Starts Here
          </h3>
          <p className="text-xs sm:text-sm text-secondary/60 mt-4 font-light leading-relaxed">
            Elevate your personal look under the care of certified designers. Receive premium alignments, fresh color tints, or body stress relief therapies today. All bookings are protected by our safe reschedule structures.
          </p>
          <p className="text-[11px] font-mono text-accent-light/40 mt-3">
            * Selected services price based in CAD. 13% HST applied separately.
          </p>
        </div>

        <div className="shrink-0">
          <button
            onClick={() => onInteract("reservation")}
            className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-light text-primary text-xs uppercase font-semibold tracking-[0.2em] px-10 py-5 rounded-[8px] transition-all duration-300 shadow-xl shadow-accent/15 hover:shadow-accent/25 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer clickable"
          >
            <Calendar className="w-4.5 h-4.5" />
            Book Your Seat Now
          </button>
        </div>
      </div>
    </section>
  );
}
