import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/layout/CustomCursor";
import LoadingScreen from "./components/layout/LoadingScreen";

// Core views
import HeroSection from "./components/home/HeroSection";
import TransformationShowcase from "./components/home/TransformationShowcase";
import ServicesCarousel from "./components/home/ServicesCarousel";
import StatsCounter from "./components/home/StatsCounter";
import Testimonials from "./components/home/Testimonials";
import CTABanner from "./components/home/CTABanner";

import ServicesInteractiveGrid from "./components/services/ServicesGrid";
import AboutView from "./components/about/AboutView";
import BookingWizard from "./components/reservation/BookingWizard";
import ContactView from "./components/contact/ContactView";

import AnimatedSection from "./components/shared/AnimatedSection";
import { Scissors, Sparkles, Star, Calendar, RefreshCw, Heart, MessageSquare, MapPin, X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  commentsCount: number;
  location: string;
  date: string;
  service: string;
  comments: { user: string; text: string }[];
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "post-1",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
    caption: "Dimensional custom hand-painted vanilla honey balayage by Master Stylist Olivia. Absolute perfection! ✨ #AuraTransformed #BalayageArtists #YorkvilleHair",
    likes: 428,
    commentsCount: 18,
    location: "Aura Yorkville, Toronto",
    date: "2 hours ago",
    service: "Balayage & Ombre Paint",
    comments: [
      { user: "serene_beauty", text: "Oh my gosh, this blending is absolute magic! 😍" },
      { user: "clara_t", text: "Olivia does it again, best salon in Toronto hands down!" }
    ]
  },
  {
    id: "post-2",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600",
    caption: "Aesthetic pastel organic shellac and gold-leaf details. Pure elegance in every single stroke. 💅🏼✨ #AuraNails #MinimalistMani #NailArtistry",
    likes: 312,
    commentsCount: 11,
    location: "Aura Nail Sanctuary",
    date: "5 hours ago",
    service: "Gel Polish Hand Artisan",
    comments: [
      { user: "nailedit_xo", text: "The gold-leaf detail is so subtle and beautiful." },
      { user: "justine_v", text: "Need to book this combination before my trip next weekend!" }
    ]
  },
  {
    id: "post-3",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    caption: "Seamless drop skin fade and straight-razor cheek alignment by Marcus Dubois. Crisp, tailored lines. 💈🔥 #DapperStyle #BarberSculpt #MensHaircut",
    likes: 589,
    commentsCount: 24,
    location: "Aura Barber Lounge",
    date: "1 day ago",
    service: "Men's Styling & Combo",
    comments: [
      { user: "dan_gilbert", text: "Sharpest fade in the city. Marcus is a legend." },
      { user: "modern_gent", text: "That line up is absolutely clinical." }
    ]
  },
  {
    id: "post-4",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=600",
    caption: "Infusing raw bioactive peptides and deep calming botanicals during our Hydrating Facial Cure treatment. Nourishment for active glow. 💆🏼‍♀️🌿 #AuraSkin #OrganicBeauty #FacialCure",
    likes: 247,
    commentsCount: 9,
    location: "Aura Spa Suite",
    date: "2 days ago",
    service: "Hydrating Facial Cure",
    comments: [
      { user: "helena_clarke", text: "My skin felt completely brand new after this treatment!" },
      { user: "glow_with_me", text: "The organic cucumber mist is of another world." }
    ]
  },
  {
    id: "post-5",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600",
    caption: "Bouncy multi-layered blowout with customized essential protein serums. High volume, incredible strength and shine. ✨👄 #AuraBlowout #ShinyHair #HealthyVolume",
    likes: 351,
    commentsCount: 14,
    location: "Aura Yorkville, Toronto",
    date: "3 days ago",
    service: "Women's Haircut & Blow-dry",
    comments: [
      { user: "fiona.mink", text: "How long does this blowout lasted? Looks stunning!" },
      { user: "aurasalon", text: "Up to 4-5 days with our signature styling memory spray! @fiona.mink" }
    ]
  },
  {
    id: "post-6",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600",
    caption: "Our botanically formulated nourishing line. Sustainable, clean, and clinical. Preserving your scalp's flora. 🌿🏷️ #AuraApothecary #ScalpHacks",
    likes: 194,
    commentsCount: 7,
    location: "Aura Apothecary Zone",
    date: "4 days ago",
    service: "Swedish Relax Massage",
    comments: [
      { user: "lucy_m", text: "The absolute best way to wind down a hectic week." },
      { user: "organic_living", text: "Love that you use wild-harvested massage oils!" }
    ]
  }
];

interface AuraSpace {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
  highlight: string;
  associatedService: string;
}

const AURA_SPACES: AuraSpace[] = [
  {
    id: 1,
    name: "The Wash Sanctuary",
    tagline: "Scented steam & targeted scalp therapy",
    description: "Our quiet, low-lit chamber of complete relaxation. Features ergo-molded wash beds, bespoke warm thermal head vapor, scalp rebalancing botanicals, and a deep massage designed to quiet the mind before your cut begins.",
    image: "/src/assets/images/luxury_salon_wash_1779553381429.png",
    badge: "Refined Wash Zone",
    highlight: "Essential Oils & Scalp Care",
    associatedService: "Scalp Massage & Therapy"
  },
  {
    id: 2,
    name: "The Style Laboratory",
    tagline: "Backlit halo day-index mirroring",
    description: "Designed for ultimate optical precision. Custom neutral-color backlit day-lighting mirrors ensures that every razor fade, texturized perimeter, and weight-removal layering appears exactly as it will in true daylight.",
    image: "/src/assets/images/luxury_styling_chair_1779553424756.png",
    badge: "Chairs Grid",
    highlight: "Symmetric Shear Cuts",
    associatedService: "Precision Scissor Cut"
  },
  {
    id: 3,
    name: "The Botanical Apothecary Suite",
    tagline: "Fresh botanical serums and peptide masks",
    description: "A clinical skin rejuvenation room showcasing local ingredients. We infuse fresh micro-milled cucumber hydrosols, organic honey masks, and high-purity peptides to restore and balance your natural dermal barrier.",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=600",
    badge: "Skin Restore Lab",
    highlight: "Bioactive Organic Cures",
    associatedService: "Hydrating Facial Cure"
  },
  {
    id: 4,
    name: "The Custom Dimension Atelier",
    tagline: "Multi-layered painting and custom foil weaves",
    description: "Our master painters design dimensional light. Here, custom hair paints, platinum transformations, and multi-tonal chocolate overlays are meticulously woven with organic styling bond protectors to guard your fiber's health.",
    image: "/src/assets/images/styling_balayage_foils_1779553403460.png",
    badge: "Dimensional Art",
    highlight: "Honey Balayage Painting",
    associatedService: "Balayage & Ombre Paint"
  }
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState("home");
  const [preselectedService, setPreselectedService] = useState("");
  const [selectedInstagramPost, setSelectedInstagramPost] = useState<InstagramPost | null>(null);
  const [hoveredSpaceId, setHoveredSpaceId] = useState<number | null>(null);
  const [lockedSpaceId, setLockedSpaceId] = useState<number | null>(null);

  const handleNavigateTab = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectServiceFromGrid = (serviceName: string) => {
    setPreselectedService(serviceName);
    setCurrentTab("reservation");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col justify-between selection:bg-accent selection:text-primary">
      {/* Absolute floating systems */}
      <CustomCursor />

      {/* Main Brand Navbar */}
      <Navbar currentTab={currentTab} onChangeTab={handleNavigateTab} />

      {/* Main screen area based on state routing */}
      <main className="flex-grow">
        {currentTab === "home" && (
          <div className="flex flex-col">
            {/* Cinematic Hero */}
            <HeroSection onInteract={handleNavigateTab} />

            {/* Luxurious Marquee scrolling ticker */}
            <div className="bg-primary py-4.5 border-y border-accent/20 overflow-hidden select-none whitespace-nowrap flex relative z-10">
              <div className="flex gap-16 text-[10px] font-mono tracking-[0.3em] text-accent uppercase font-bold animate-marquee shrink-0">
                <span>✦ BESPOKE SCISSOR CUTS</span>
                <span>✦ HAND-PAINTED BALAYAGE</span>
                <span>✦ 13% PRE-TAX HST TRANSPARENT BILLING</span>
                <span>✦ ORGANIC CANADIAN BOUTIQUE LABS</span>
                <span>✦ ENGLISH & FRENCH BILINGUAL STYLISTS</span>
                <span>✦ CLASSIC RAZOR TAPER BLENDS</span>
              </div>
              <div className="flex gap-16 text-[10px] font-mono tracking-[0.3em] text-accent uppercase font-bold animate-marquee shrink-0" aria-hidden="true">
                <span>✦ BESPOKE SCISSOR CUTS</span>
                <span>✦ HAND-PAINTED BALAYAGE</span>
                <span>✦ 13% PRE-TAX HST TRANSPARENT BILLING</span>
                <span>✦ ORGANIC CANADIAN BOUTIQUE LABS</span>
                <span>✦ ENGLISH & FRENCH BILINGUAL STYLISTS</span>
                <span>✦ CLASSIC RAZOR TAPER BLENDS</span>
              </div>
            </div>

            {/* About Teaser Split section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Column: Dynamic Detail Panel */}
                <AnimatedSection direction="left" className="lg:col-span-5 flex flex-col justify-center min-h-[460px]">
                  <AnimatePresence mode="wait">
                    {(() => {
                      const activeSpaceId = hoveredSpaceId !== null ? hoveredSpaceId : (lockedSpaceId !== null ? lockedSpaceId : 1);
                      const activeSpace = AURA_SPACES.find(s => s.id === activeSpaceId) || AURA_SPACES[0];

                      return (
                        <motion.div
                          key={`space-${activeSpace.id}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25 }}
                          className="flex flex-col gap-5 bg-surface p-8 rounded-[24px] border border-accent/15 shadow-xs relative overflow-hidden"
                        >
                          {/* Ambient background decoration */}
                          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl pointer-events-none" />

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono tracking-[0.25em] text-accent uppercase font-bold">
                              {activeSpace.badge}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                            <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider font-semibold">
                              Lounge Sector {activeSpace.id} of 4
                            </span>
                          </div>
                          
                          <div className="space-y-1">
                            <span className="text-xs font-mono uppercase tracking-widest text-text-muted">UNISEX HARMONY</span>
                            <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-primary leading-tight">
                              {activeSpace.name}
                            </h3>
                          </div>
                          
                          <p className="text-xs font-mono font-medium text-accent tracking-wide italic leading-relaxed">
                            "{activeSpace.tagline}"
                          </p>
                          
                          <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                            {activeSpace.description}
                          </p>

                          <div className="bg-[#FAF7F2] border border-accent/20 p-5 rounded-[18px] space-y-4 mt-2">
                            <div className="flex items-center justify-between text-[10px] font-mono">
                              <span className="text-text-muted tracking-wider uppercase">Signature Standard:</span>
                              <span className="text-primary font-bold tracking-widest uppercase">{activeSpace.highlight}</span>
                            </div>
                            <div className="h-[1px] bg-accent/10" />
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                              <div className="flex flex-col">
                                <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider">BOOK THIS SPECIFIC ATMOSPHERE</span>
                                <span className="text-xs font-mono font-bold text-primary tracking-wide uppercase mt-0.5 max-w-[200px] truncate">
                                  {activeSpace.associatedService}
                                </span>
                              </div>
                              
                              <button
                                onClick={() => handleSelectServiceFromGrid(activeSpace.associatedService)}
                                className="py-2.5 px-4 bg-primary text-[#FAF7F2] hover:bg-accent hover:text-primary transition-all duration-300 font-mono text-[10px] font-bold uppercase rounded-lg tracking-widest cursor-pointer shadow-xs shrink-0"
                              >
                                Book Now
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-accent/10">
                            <span className="text-[10px] font-mono text-text-muted">Tap any lounge grid quadrant to tour</span>
                            <button
                              onClick={() => handleNavigateTab("about")}
                              className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold hover:text-accent transition-colors cursor-pointer border-b border-primary pb-0.5"
                            >
                              OUR STORY →
                            </button>
                          </div>
                        </motion.div>
                      );
                    })()}
                  </AnimatePresence>
                </AnimatedSection>

                {/* Right Column: Symmetrical Sized Grid, No blackout, Gorgeous high-end alignment */}
                <AnimatedSection direction="right" className="lg:col-span-7 col-span-1">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {AURA_SPACES.map((space) => {
                      const isActive = (hoveredSpaceId !== null ? hoveredSpaceId === space.id : (lockedSpaceId !== null ? lockedSpaceId === space.id : space.id === 1));
                      return (
                        <div
                          key={space.id}
                          onMouseEnter={() => setHoveredSpaceId(space.id)}
                          onMouseLeave={() => setHoveredSpaceId(null)}
                          onClick={() => setLockedSpaceId(space.id)}
                          className={`aspect-[4/3] rounded-[20px] overflow-hidden border transition-all duration-300 cursor-pointer relative group flex flex-col justify-end
                            ${isActive 
                              ? "border-accent ring-2 ring-accent/30 shadow-md scale-[1.02]" 
                              : "border-border-custom hover:border-accent/50 shadow-xs"
                            }`}
                        >
                          <img
                            src={space.image}
                            alt={space.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          {/* Elegant soft gradient so label is highly legible at all times */}
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" />
                          
                          <div className="p-3 sm:p-4 z-10 w-full flex items-center justify-between">
                            <span className="text-[9px] font-mono uppercase tracking-wider text-secondary bg-zinc-950/90 py-1.5 px-2.5 rounded-full border border-white/5 backdrop-blur-sm">
                              0{space.id} / {space.badge.split(" ")[0]}
                            </span>
                            {isActive && (
                              <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-sm shadow-accent" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </AnimatedSection>

              </div>
            </section>

            {/* Premium Before/After Transformations Gallery */}
            <TransformationShowcase />

            {/* Featured Services Carousel */}
            <ServicesCarousel onInteract={handleNavigateTab} />

            {/* Core counters indicators */}
            <StatsCounter />

            {/* Core testimonials slider */}
            <Testimonials />

            {/* Interactive Slogan Social Feed Mockup */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border-custom">
              <div className="text-center mb-12">
                <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase font-bold">
                  SIGHT OUR REAL CLIENTS
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-tight mt-1 text-primary">
                  Instagram Social Grid
                </h3>
                <div className="w-12 h-[1px] bg-accent/40 mx-auto mt-4" />
                <p className="text-xs text-text-muted mt-3 font-light">
                  Follow us <a href="https://instagram.com" className="text-accent underline font-semibold">@AuraSalonCanada</a> to explore real transformations, hair hacks, and special weekly offers.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {INSTAGRAM_POSTS.map((post, id) => (
                  <AnimatedSection
                    key={post.id}
                    direction="none"
                    delay={id * 0.05}
                    className="aspect-square relative rounded-[20px] overflow-hidden border border-border-custom group cursor-pointer shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
                  >
                    <div onClick={() => setSelectedInstagramPost(post)} className="w-full h-full">
                      <img
                        src={post.image}
                        alt={post.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Interactive overlay resembling an active Instagram hover state */}
                      <div className="absolute inset-0 bg-primary/85 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-secondary p-4 gap-3">
                        <div className="flex items-center gap-6">
                          <span className="flex items-center gap-1.5 font-mono text-sm text-[#FAF7F2] font-medium">
                            <Heart className="w-4 h-4 text-accent fill-accent" /> {post.likes}
                          </span>
                          <span className="flex items-center gap-1.5 font-mono text-sm text-[#FAF7F2] font-medium">
                            <MessageSquare className="w-4 h-4 text-[#FAF7F2] fill-transparent" /> {post.commentsCount}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono tracking-[0.2em] text-[#FAF7F2]/80 uppercase font-bold">@AURASALONCANADA</span>
                        <span className="text-[10px] font-mono tracking-wider bg-accent text-primary px-3 py-1 rounded-full uppercase font-bold transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xs">
                          Tap to inspect
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </section>

            {/* Instagram Post Detail Modal */}
            <AnimatePresence>
              {selectedInstagramPost && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/90 backdrop-blur-xs">
                  {/* Backdrop closer */}
                  <div className="absolute inset-0" onClick={() => setSelectedInstagramPost(null)} />
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    transition={{ type: "spring", duration: 0.4 }}
                    className="bg-[#FAF7F2] text-primary w-full max-w-4xl rounded-[24px] overflow-hidden shadow-2xl grid md:grid-cols-12 relative max-h-[90vh] md:max-h-[80vh] border border-accent/20 z-10"
                  >
                    {/* Floating Mobile/Global Close Button */}
                    <button
                      onClick={() => setSelectedInstagramPost(null)}
                      className="absolute top-4 right-4 z-20 p-2 bg-zinc-950/80 hover:bg-zinc-900 border border-white/10 rounded-full text-secondary hover:text-accent transition-colors cursor-pointer"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    {/* Image Panel (Left 7 Columns) */}
                    <div className="md:col-span-7 bg-zinc-950 flex items-center justify-center max-h-[40vh] md:max-h-full overflow-hidden relative">
                      <img
                        src={selectedInstagramPost.image}
                        alt={selectedInstagramPost.caption}
                        className="w-full h-full object-cover max-h-[40vh] md:max-h-full"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-4 left-4 bg-zinc-950/70 border border-white/5 py-1.5 px-3 rounded-full flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#FAF7F2] font-semibold">
                          {selectedInstagramPost.location}
                        </span>
                      </div>
                    </div>

                    {/* Meta Info Pane (Right 5 Columns) */}
                    <div className="md:col-span-5 flex flex-col justify-between p-6 md:p-8 bg-surface">
                      {/* Top Header */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center bg-primary text-accent text-xs font-mono font-bold">
                            AR
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-mono font-bold tracking-widest uppercase text-primary">aura.salon</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                              <span className="text-[10px] font-mono text-accent font-semibold uppercase">Follow</span>
                            </div>
                            <span className="text-[10px] text-text-muted block font-light">Toronto Yorkville Elite Lounge</span>
                          </div>
                        </div>

                        <div className="h-[1px] bg-accent/20" />

                        {/* Caption with hashtags */}
                        <div className="max-h-[120px] overflow-y-auto no-scrollbar py-1">
                          <p className="text-xs text-primary font-normal leading-relaxed">
                            {selectedInstagramPost.caption}
                          </p>
                        </div>

                        {/* Comments section */}
                        <div className="space-y-3 pt-2">
                          <span className="text-[9px] font-mono uppercase tracking-widest text-accent font-bold">Community Feedback</span>
                          <div className="space-y-2 max-h-[140px] overflow-y-auto no-scrollbar">
                            {selectedInstagramPost.comments.map((comment, cid) => (
                              <div key={cid} className="text-xs leading-normal bg-[#FAF7F2] p-2 rounded-lg border border-accent/10">
                                <span className="font-mono font-bold mr-1.5 text-[10px] tracking-wider text-primary">@{comment.user}</span>
                                <span className="text-text-muted font-light text-[11px]">{comment.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer actions */}
                      <div className="pt-4 space-y-4 border-t border-accent/20 mt-4">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4 text-accent fill-accent" />
                            <span className="font-mono font-bold">{selectedInstagramPost.likes} <span className="font-sans font-light text-text-muted">likes</span></span>
                          </div>
                          <span className="text-[10px] text-text-muted font-mono tracking-wider">{selectedInstagramPost.date}</span>
                        </div>

                        {/* Booking shortcut */}
                        <div className="bg-primary/5 p-3 rounded-xl border border-accent/15 space-y-2">
                          <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="text-text-muted">ASSOCIATED SERVICE:</span>
                            <span className="text-accent font-bold uppercase">{selectedInstagramPost.service}</span>
                          </div>
                          <button
                            onClick={() => {
                              handleSelectServiceFromGrid(selectedInstagramPost.service);
                              setSelectedInstagramPost(null);
                            }}
                            className="w-full py-2.5 bg-primary text-[#FAF7F2] text-xs font-mono font-bold tracking-widest uppercase hover:bg-accent hover:text-primary transition-colors rounded-lg flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            BOOK THIS LOOK
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {/* Closing CTA */}
            <CTABanner onInteract={handleNavigateTab} />
          </div>
        )}

        {/* Categories Menu section */}
        {currentTab === "services" && (
          <ServicesInteractiveGrid onSelectService={handleSelectServiceFromGrid} />
        )}

        {/* Bio Story page */}
        {currentTab === "about" && <AboutView />}

        {/* Wizard step reservation desk */}
        {currentTab === "reservation" && (
          <BookingWizard
            initialServiceName={preselectedService}
            onBookingReset={() => setPreselectedService("")}
          />
        )}

        {/* FAQs and contact forms */}
        {currentTab === "contact" && <ContactView />}
      </main>

      {/* Global Footer component */}
      <Footer onChangeTab={handleNavigateTab} />
    </div>
  );
}
