import {
  Sparkles,
  Heart,
  Award,
  Shield,
  Smile,
  Globe,
  Scissors,
  Smartphone,
  Compass,
} from "lucide-react";
import { SALONS_TEAM } from "../../lib/constants";
import AnimatedSection from "../shared/AnimatedSection";

export default function AboutView() {
  const values = [
    {
      icon: Award,
      title: "Deep Expertise",
      desc: "Our stylists carry certification licenses and continuous training in global and Canadian styling designs.",
    },
    {
      icon: Shield,
      title: "Medical-Grade Hygiene",
      desc: "Every comb guide, scissor set, bowl sink, and chair undergoes comprehensive sterilization after each guest.",
    },
    {
      icon: Globe,
      title: "Absolute Inclusivity",
      desc: "Tailored services for all hair textures, skin spectrums, and styles, with full English/French bilingual care.",
    },
    {
      icon: Sparkles,
      title: "Beauty Innovation",
      desc: "Organic, cruelty-free, clean products sourced closely from premium Canadian boutique labs.",
    },
    {
      icon: Heart,
      title: "Refined Comfort",
      desc: "Warm dark-roasted espresso on the house, cozy seats, and custom ambient musical score.",
    },
    {
      icon: Smile,
      title: "Guests' Trust",
      desc: "Protected cancellation policies, exact cost breakdowns, and transparent Pre-tax billing flows.",
    },
  ];

  return (
    <div id="about_page" className="bg-surface text-primary select-none pb-12">
      {/* Cinematic Hero */}
      <section className="relative py-20 bg-primary overflow-hidden text-secondary px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600948836101-f9ffdbb242e5?auto=format&fit=crop&q=80&w=1200"
            alt="Inside Aura"
            className="w-full h-full object-cover filter grayscale blur-[1px]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase font-bold">
            FOUNDATION & INCLUSIVITY
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mt-2 text-secondary">
            Our Brand Story
          </h2>
          <div className="w-12 h-[1px] bg-accent/40 mx-auto mt-4" />
          <p className="text-base text-secondary/75 font-light mt-6 max-w-2xl mx-auto leading-relaxed">
            Founded in Toronto, Canada in 2016, Aura Unisex Salon was built upon
            a humble vision: to construct an inclusive, ultra-hygienic oasis
            where luxury hospitality and clean beauty meet.
          </p>
        </div>
      </section>

      {/* Brand Values Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase font-bold">
            DEFINING PRINCIPLES
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-tight mt-2 text-primary">
            The Pillars of Aura Experience
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, index) => {
            const Icon = v.icon;
            return (
              <AnimatedSection
                key={v.title}
                direction="up"
                delay={index * 0.05}
                className="bg-secondary/20 border border-border-custom hover:border-accent/40 p-8 rounded-[16px] transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-semibold tracking-wide text-primary mb-2">
                  {v.title}
                </h4>
                <p className="text-sm text-text-muted leading-relaxed font-light">
                  {v.desc}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Stylist Team Section */}
      <section className="py-24 bg-[#FAF7F2] border-y border-border-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase font-bold">
              MEET OUR DESIGNERS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-tight mt-2 text-primary">
              Certified Master Artisans
            </h3>
            <p className="text-sm sm:text-base text-text-muted mt-3 font-light max-w-xl mx-auto leading-relaxed">
              Our diverse, multicultural styling team is highly experienced and
              bilingual. We are fully licensed to design beauty tailored exactly
              for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SALONS_TEAM.map((stylist) => (
              <AnimatedSection
                key={stylist.id}
                direction="up"
                className="bg-surface rounded-[16px] overflow-hidden border border-border-custom hover:shadow-2xl transition-all duration-300"
              >
                {/* Photo wrapping */}
                <div className="h-[320px] relative overflow-hidden group">
                  <img
                    src={stylist.avatar}
                    alt={stylist.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark overlay with textual specialty detail on slide */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/10 to-transparent flex flex-col justify-end p-6">
                    <span className="text-accent text-[11px] font-mono tracking-widest uppercase mb-1">
                      SPECIALTY:
                    </span>
                    <p className="text-secondary/90 text-xs font-light">
                      {stylist.specialty}
                    </p>
                  </div>

                  {/* Bilingual badge */}
                  {stylist.bilingual && (
                    <span className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md border border-accent/20 text-accent text-[9px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-[4px]">
                      EN / FR BILINGUAL
                    </span>
                  )}
                </div>

                {/* Text attributes */}
                <div className="p-6">
                  <h4 className="font-serif text-lg font-medium text-primary tracking-tight leading-none mb-1.5">
                    {stylist.name}
                  </h4>
                  <p className="text-[11px] font-mono tracking-wider text-accent uppercase font-medium mb-3">
                    {stylist.role}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-text-muted pt-3 border-t border-border-custom font-mono">
                    <span>Exp: {stylist.experience}</span>
                    <span className="text-accent-light bg-accent/5 px-2 py-0.5 rounded-[4px] border border-accent/10">
                      Active Designer
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Vertical Timeline of Milestones */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase font-bold">
            JOURNEY TO PRESTIGE
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-tight mt-2 text-primary">
            Salon Milestones
          </h3>
        </div>

        <div className="relative border-l border-accent/20 ml-4 sm:mx-auto sm:max-w-2xl">
          {/* Milestone 2016 */}
          <div className="mb-12 ml-6 relative">
            <div className="absolute -left-10 mt-1.5 w-7 h-7 rounded-full bg-primary border-2 border-accent flex items-center justify-center text-accent text-xs">
              •
            </div>
            <span className="text-xs font-mono text-accent font-bold">
              NOV 2016
            </span>
            <h4 className="font-serif text-lg font-medium text-primary mt-1">
              Founding in downtown Toronto
            </h4>
            <p className="text-sm text-text-muted font-light leading-relaxed mt-2">
              Opened our tiny 4-chair studio on Queen Street West, launching
              with the core value of clean beauty and direct transparent CAD
              pricing.
            </p>
          </div>

          {/* Milestone 2019 */}
          <div className="mb-12 ml-6 relative">
            <div className="absolute -left-10 mt-1.5 w-7 h-7 rounded-full bg-primary border-2 border-accent flex items-center justify-center text-accent text-xs">
              •
            </div>
            <span className="text-xs font-mono text-accent font-bold">
              AUG 2019
            </span>
            <h4 className="font-serif text-lg font-medium text-primary mt-1">
              Expanding to 12 design chairs
            </h4>
            <p className="text-sm text-text-muted font-light leading-relaxed mt-2">
              Relocated to Main Street with luxury glass-enclosed aesthetic
              rooms, adding our premier Massage and straight-razor Barbering
              lounges.
            </p>
          </div>

          {/* Milestone 2022 */}
          <div className="mb-12 ml-6 relative">
            <div className="absolute -left-10 mt-1.5 w-7 h-7 rounded-full bg-primary border-2 border-accent flex items-center justify-center text-accent text-xs">
              •
            </div>
            <span className="text-xs font-mono text-accent font-bold">
              OCT 2022
            </span>
            <h4 className="font-serif text-lg font-medium text-primary mt-1">
              CBF Salon of the Year Finalist
            </h4>
            <p className="text-sm text-text-muted font-light leading-relaxed mt-2">
              Nominated by the Canadian Beauty Federation (CBF) for our
              pioneering clean hydration organic treatments.
            </p>
          </div>

          {/* Milestone 2024 */}
          <div className="ml-6 relative">
            <div className="absolute -left-10 mt-1.5 w-7 h-7 rounded-full bg-accent text-primary flex items-center justify-center text-xs">
              ✓
            </div>
            <span className="text-xs font-mono text-accent font-bold">
              MAR 2024
            </span>
            <h4 className="font-serif text-lg font-semibold text-accent mt-1">
              Province Board Certification
            </h4>
            <p className="text-sm text-text-muted font-light leading-relaxed mt-2">
              Acknowledged by the Provincial Cosmetology Board for maintaining
              perfect scores in overall guest sanitization tests.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications and Trust Affiliations Strip */}
      <section className="bg-[#FAF7F2] py-16 border-t border-border-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around gap-12 opacity-60">
          <div className="flex flex-col items-center">
            <Award className="w-10 h-10 text-accent mb-2" />
            <span className="text-[10px] font-mono tracking-widest text-primary font-bold">
              CANADIAN BEAUTY FEDERATION
            </span>
            <span className="text-[9px] text-text-muted">
              AURA CHARTER MEMBER
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-10 h-10 text-accent mb-2" />
            <span className="text-[10px] font-mono tracking-widest text-primary font-bold">
              PROVINCIAL COSMETOLOGY BOARD
            </span>
            <span className="text-[9px] text-text-muted">
              CERTIFIED A+ SANITIZED
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Sparkles className="w-10 h-10 text-accent mb-2" />
            <span className="text-[10px] font-mono tracking-widest text-primary font-bold">
              BEST OF CITY 2023 WINNER
            </span>
            <span className="text-[9px] text-text-muted">
              CATEGORY: LUXURY HOSPITALITY
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
