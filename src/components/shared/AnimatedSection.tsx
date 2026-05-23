import { ReactNode } from "react";
import { motion } from "motion/react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  id?: string;
  key?: any;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  id,
}: AnimatedSectionProps) {
  const getVariants = () => {
    const offset = 40;
    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: offset }, visible: { opacity: 1, y: 0 } };
      case "down":
        return { hidden: { opacity: 0, y: -offset }, visible: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: offset }, visible: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: -offset }, visible: { opacity: 1, x: 0 } };
      case "none":
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
}
