import React, { useState } from "react";
import { Mail, MapPin, Phone, Check, ChevronDown, Send } from "lucide-react";
import { SALONS_FAQS } from "../../lib/constants";
import AnimatedSection from "../shared/AnimatedSection";

export default function ContactView() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Form states
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("Information Query");
  const [contactMessage, setContactMessage] = useState("");

  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName && contactEmail && contactMessage) {
      setShowSuccessMsg(true);
      setTimeout(() => {
        setContactName("");
        setContactEmail("");
        setContactMessage("");
        setShowSuccessMsg(false);
      }, 5000);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      id="contact_and_faqs"
      className="bg-surface text-primary select-none pb-12"
    >
      {/* Visual map grid banner */}
      <section className="relative h-[250px] w-full bg-[#1A1A1A] overflow-hidden border-b border-accent/20">
        <div className="absolute inset-0 grayscale filter opacity-45">
          {/* Aesthetic Luxury Map placeholder or elegant vector pattern */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2638848141386!2d-79.39045768450262!3d43.64256617912169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2a13cc75b%3A0xbd0714bfa491bd7b!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1684948011234!5m2!1sen!2sca"
            className="w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aura Toronto Map Locator"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-black/20 pointer-events-none" />

        <div className="absolute bottom-6 left-6 right-6 max-w-7xl mx-auto flex items-end justify-between">
          <div>
            <span className="text-[10px] font-mono tracking-wider text-accent uppercase font-bold">
              TORONTO STUDIO LOCATION OFFICE
            </span>
            <h2 className="font-serif text-2xl text-secondary font-light mt-0.5 uppercase tracking-wider">
              AURA HQ & ATELIER
            </h2>
          </div>
          <span className="hidden sm:inline-block text-[10px] font-mono text-accent/60">
            © 2016 Toronto Canada
          </span>
        </div>
      </section>

      {/* Main Dual column layout Contact vs Details */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-border-custom">
        {/* Contact Form left column */}
        <div className="lg:col-span-7 bg-secondary/30 border border-border-custom rounded-[20px] p-6 sm:p-8">
          <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">
            CORE COMMUNICATIONS
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-primary font-light mt-1.5 mb-1">
            Send an Online Inquest
          </h3>
          <p className="text-text-muted text-[13px] sm:text-sm font-light mb-6">
            Our concierge responses are finalized bilingual within 4 business
            hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-text-muted mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Alexander Mackenzie"
                  className="w-full bg-surface border border-border-custom text-xs font-mono p-3 rounded-[8px] input-gold-focus text-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-text-muted mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="alexander@domain.ca"
                  className="w-full bg-surface border border-border-custom text-xs font-mono p-3 rounded-[8px] input-gold-focus text-primary"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-text-muted mb-1">
                Subject Option
              </label>
              <select
                value={contactSubject}
                onChange={(e) => setContactSubject(e.target.value)}
                className="w-full bg-surface border border-border-custom text-xs font-mono p-3 rounded-[8px] input-gold-focus text-primary"
              >
                <option value="Information Query">Information Inquest</option>
                <option value="Bridal Packages Quote">
                  Bridal Packages Quote
                </option>
                <option value="Product Sourcing Care">
                  Product Sourcing Care
                </option>
                <option value="Career Opportunities">
                  Career Opportunities
                </option>
                <option value="Franchise Operations">
                  Franchise & Partner Options
                </option>
              </select>
            </div>

            {/* Message Area */}
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-text-muted mb-1">
                Your Message Brief *
              </label>
              <textarea
                rows={5}
                required
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="Share your coordinates, thoughts or group booking details..."
                className="w-full bg-surface border border-border-custom text-xs font-mono p-3 rounded-[8px] input-gold-focus resize-none text-primary"
              />
            </div>

            {/* Success message popup */}
            {showSuccessMsg && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-600 text-xs font-mono flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  Message submitted! Toronto Coordinates concierge desk will
                  resolve to you shortly.
                </span>
              </div>
            )}

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-zinc-900 text-accent font-mono text-xs font-bold leading-none tracking-widest uppercase p-4.5 rounded-[8px] border border-accent/20 cursor-pointer clickable w-full"
            >
              <Send className="w-3.5 h-3.5" /> SUBMIT MESSAGERY LOGS
            </button>
          </form>
        </div>

        {/* Directory details right column */}
        <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">
              CONTACT DIRECTORY
            </span>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="font-serif text-[15px] font-semibold text-primary leading-tight">
                  Toronto Concierge HQ
                </h4>
                <p className="text-text-muted text-sm font-light leading-relaxed mt-1">
                  123 Main Street, Suite 101
                  <br />
                  Toronto, ON M5V 2T6, Canada
                </p>
                <span className="text-[10px] font-mono text-accent/60 tracking-wider">
                  Suite is wheel-chair accessible.
                </span>
              </div>
            </div>

            {/* Phone dial info */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                <Phone className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="font-serif text-[15px] font-semibold text-primary leading-tight">
                  Telephone Desk
                </h4>
                <p className="text-text-muted text-sm font-light leading-relaxed mt-1">
                  +1 (416) 555-0198
                </p>
                <span className="text-[10px] font-mono text-accent/60 tracking-wider">
                  Direct support in English & French.
                </span>
              </div>
            </div>

            {/* General Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="font-serif text-[15px] font-semibold text-primary leading-tight">
                  Email Delivery
                </h4>
                <p className="text-text-muted text-sm font-light leading-relaxed mt-1">
                  hello@aurasalon.ca
                </p>
              </div>
            </div>
          </div>

          {/* Operating hours list */}
          <div className="bg-primary/95 text-secondary p-6 rounded-[20px] border border-accent/20 shadow-xl">
            <h4 className="font-serif text-[15px] text-accent tracking-[0.15em] uppercase border-b border-accent/25 pb-2 mb-4">
              Business Hours Table
            </h4>

            <ul className="text-xs font-mono space-y-2.5 text-secondary/70 tracking-wider leading-relaxed">
              <li className="flex justify-between">
                <span className="font-light">Monday:</span>
                <span className="text-red-400 font-bold">Closed</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="font-light">Tuesday – Friday:</span>
                <span>10:00 AM – 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="font-light">Saturday:</span>
                <span>9:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-light">Sunday:</span>
                <span>10:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Styled FAQs accordion list */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase font-bold">
            COMMONLY ASKED QUESTIONS
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-tight mt-1 text-primary">
            Aura General FAQs Directory
          </h3>
          <div className="w-12 h-[1px] bg-accent/40 mx-auto mt-4" />
        </div>

        <div className="space-y-4">
          {SALONS_FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FAF7F2] border border-border-custom rounded-[12px] overflow-hidden transition-all duration-300"
              >
                {/* FAQ handle */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 cursor-pointer select-none"
                >
                  <span className="font-serif text-sm sm:text-base font-semibold text-primary tracking-wide">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-white/5 text-sm text-text-muted leading-relaxed font-light font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
