import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [dots, setDots] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Elegant text progress
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(dotsInterval);
          setTimeout(() => {
            onComplete();
          }, 600); // Small buffer after 100%
          return 100;
        }
        // Smooth logarithmic progress step
        const step = Math.max(1, Math.floor((100 - prev) * 0.15));
        return prev + step;
      });
    }, 90);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary text-secondary px-6">
      <div className="relative w-full max-w-sm text-center">
        {/* Subtle decorative gold circle background */}
        <div className="absolute -inset-16 mx-auto w-48 h-48 rounded-full bg-accent/5 blur-xl pointer-events-none" />

        {/* Brand visual monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-accent/40 mb-3 bg-primary">
            <span className="font-serif text-3xl font-light text-accent tracking-widest">A</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-accent tracking-[0.25em] font-light uppercase">
            Aura
          </h1>
          <p className="text-[10px] tracking-[0.4em] text-accent/60 uppercase mt-1">
            Hair & Beauty
          </p>
        </motion.div>

        {/* Beautiful progress line */}
        <div className="relative h-[1px] w-full bg-accent/10 rounded-full overflow-hidden mb-3">
          <motion.div
            className="absolute top-0 left-0 h-full bg-accent"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Loading detail */}
        <div className="flex justify-between items-center text-[11px] font-mono tracking-wider text-accent-light/40">
          <span>L'EXPÉRIENCE PREMIUM</span>
          <span className="tabular-nums">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
