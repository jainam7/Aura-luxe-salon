import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);

  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Completely disable on mobile and touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x - 9}px, ${y - 9}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 2}px, ${y - 2}px, 0)`;
      }

      if (!visible) {
        setVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Update position centered around the cursor instantly
      const x = e.clientX;
      const y = e.clientY;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x - 9}px, ${y - 9}px, 0)`;
      }
    };

    document.body.classList.add("custom-cursor-enabled");

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
        className="hidden lg:block w-[18px] h-[18px] rounded-full border border-accent bg-accent/10 backdrop-blur-[1px] mix-blend-difference transition-[width,height,background-color,border-color,opacity] duration-200 ease-out"
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
        className="hidden lg:block w-1 h-1 rounded-full bg-accent mix-blend-difference"
      />
    </>
  );
}
