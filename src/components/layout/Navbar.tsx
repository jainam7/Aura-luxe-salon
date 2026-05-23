import { useState, useEffect } from "react";
import { Scissors, Menu, X, Calendar, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  currentTab: string;
  onChangeTab: (tab: string) => void;
}

export default function Navbar({ currentTab, onChangeTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", value: "home" },
    { label: "Services", value: "services" },
    { label: "About", value: "about" },
    { label: "Reservation", value: "reservation" },
    { label: "Contact", value: "contact" },
  ];

  const handleNavClick = (tabValue: string) => {
    onChangeTab(tabValue);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        id="app_navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || currentTab !== "home"
            ? "bg-zinc-950/95 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl"
            : "bg-zinc-950/90 backdrop-blur-md py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer select-none group"
              onClick={() => handleNavClick("home")}
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-accent/40 bg-zinc-900 text-accent transition-transform duration-500 group-hover:rotate-180">
                <Scissors className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-light text-accent tracking-[0.2em] uppercase leading-none">
                  Aura
                </span>
                <span className="text-[9px] tracking-[0.3em] text-accent/70 uppercase leading-none mt-1">
                  Hair & Beauty
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <div className="flex gap-4 lg:gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => handleNavClick(item.value)}
                    className={`relative text-[11px] lg:text-xs uppercase tracking-[0.15em] lg:tracking-[0.2em] font-bold transition-colors py-2 cursor-pointer select-none whitespace-nowrap ${
                      currentTab === item.value
                        ? "text-accent"
                        : "text-secondary/70 hover:text-accent"
                    }`}
                  >
                    {item.label}
                    {currentTab === item.value && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
 
              {/* Book CTA */}
              <button
                onClick={() => handleNavClick("reservation")}
                className="flex items-center gap-1.5 lg:gap-2 bg-accent hover:bg-accent-light text-primary text-[11px] lg:text-xs uppercase font-bold tracking-[0.1em] lg:tracking-[0.15em] px-4 lg:px-5 py-2.5 lg:py-3 rounded-[8px] transition-all duration-300 shadow-md hover:shadow-accent/20 cursor-pointer select-none whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                Book Now
              </button>
            </div>

            {/* Mobile Toggle Button */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={() => handleNavClick("reservation")}
                className="bg-accent text-primary p-2.5 rounded-[8px] hover:bg-accent-light transition-all"
              >
                <Calendar className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-secondary hover:text-accent transition-colors focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu container (Absolute fallback/spring layout) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "smooth", duration: 0.3 }}
              className="md:hidden glass-nav border-t border-white/5 max-w-full overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => handleNavClick(item.value)}
                    className={`text-sm uppercase tracking-[0.25em] py-3 text-left w-full h-full border-b border-white/5 transition-colors ${
                      currentTab === item.value ? "text-accent font-semibold" : "text-secondary/70"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex gap-4 pt-2">
                  <span className="text-accent/60 text-xs font-mono tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" /> +1 (416) 555-0198
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Spacer */}
      {currentTab !== "home" && <div className="h-20" />}
    </>
  );
}
