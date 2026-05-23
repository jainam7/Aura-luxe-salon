import { Scissors, Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";

interface FooterProps {
  onChangeTab: (tab: string) => void;
}

export default function Footer({ onChangeTab }: FooterProps) {
  const handleNavClick = (tabValue: string) => {
    onChangeTab(tabValue);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="app_footer" className="bg-primary text-secondary/80 border-t border-accent/20 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => handleNavClick("home")}>
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-accent/40 bg-zinc-900 text-accent">
              <Scissors className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-light text-accent tracking-[0.2em] uppercase leading-none">
                Aura
              </span>
              <span className="text-[8px] tracking-[0.3em] text-accent/70 uppercase leading-none mt-1">
                Hair & Beauty
              </span>
            </div>
          </div>
          <p className="text-secondary/50 text-xs mt-3 leading-relaxed max-w-xs font-light">
            Luxury hospitality and clean beauty tailored for the diverse, multicultural clientele of Canada. Experience specialized hair care, aesthetic wellness, and professional skincare.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/5 rounded-full hover:border-accent text-accent transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/5 rounded-full hover:border-accent text-accent transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-accent text-xs font-mono tracking-[0.25em] uppercase mb-5 font-semibold">
            EXPLORE SITE
          </h4>
          <ul className="flex flex-col gap-3 text-xs tracking-wider">
            <li>
              <button onClick={() => handleNavClick("home")} className="hover:text-accent transition-colors font-light text-secondary/60">
                Home / Landing
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("services")} className="hover:text-accent transition-colors font-light text-secondary/60">
                Our Services Menu
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("about")} className="hover:text-accent transition-colors font-light text-secondary/60">
                About Our Stylists
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("reservation")} className="hover:text-accent transition-colors font-light text-secondary/60">
                Book Appointment
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("contact")} className="hover:text-accent transition-colors font-light text-secondary/60">
                Contact & Core Hours
              </button>
            </li>
          </ul>
        </div>

        {/* Professional Hours */}
        <div>
          <h4 className="text-accent text-xs font-mono tracking-[0.25em] uppercase mb-5 font-semibold">
            OPERATING HOURS
          </h4>
          <table className="w-full text-xs text-secondary/60 tracking-wider">
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-2 font-light">Monday</td>
                <td className="py-2 text-right text-accent-light/60">Closed</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 font-light">Tuesday–Friday</td>
                <td className="py-2 text-right">10:00 AM – 7:00 PM</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 font-light">Saturday</td>
                <td className="py-2 text-right">9:00 AM – 6:00 PM</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 font-light">Sunday</td>
                <td className="py-2 text-right">10:00 AM – 5:00 PM</td>
              </tr>
              <tr>
                <td className="py-2 font-light text-accent-light/40" colSpan={2}>
                  * Closed on statutory holidays
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Contact/HQ Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-accent text-xs font-mono tracking-[0.25em] uppercase mb-2 font-semibold">
            VISIT STUDIO
          </h4>
          <div className="flex items-start gap-3 text-xs leading-relaxed text-secondary/60">
            <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>
              123 Main Street, Suite 101<br />
              Toronto, ON M5V 2T6<br />
              Canada
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-secondary/60">
            <Phone className="w-4 h-4 text-accent shrink-0" />
            <span>+1 (416) 555-0198</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-secondary/60">
            <Mail className="w-4 h-4 text-accent shrink-0" />
            <span>hello@aurasalon.ca</span>
          </div>
        </div>
      </div>

      {/* Compliance / Certification Strip */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-1.5 text-[11px] text-secondary/40 tracking-wider">
          <p>© {currentYear} Aura Unisex Salon Ltd. All rights reserved.</p>
          <p>
            * All prices shown are in Canadian Dollars (CAD) and exclude applicable 13% HST or provincial sales taxes.
          </p>
        </div>

        {/* Payment and Trust Providers */}
        <div className="flex flex-wrap items-center gap-3 bg-zinc-950/40 px-4 py-2 border border-white/5 rounded-lg">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A96E]/50 mr-1.5">ACCEPTED PAYMENTS:</span>
          {/* Interac pill */}
          <span className="text-[10px] font-bold tracking-tight text-white px-1.5 py-0.5 bg-blue-700 rounded-sm">INTERAC</span>
          {/* Credit card styles using plain text logo blocks for safety */}
          <span className="text-[10px] font-medium tracking-wider text-white px-1.5 py-0.5 bg-orange-600 rounded-sm">VISA</span>
          <span className="text-[10px] font-medium tracking-wider text-black px-1.5 py-0.5 bg-yellow-500 rounded-sm">MC</span>
          <span className="text-[10px] font-medium tracking-wider text-white px-1.5 py-0.5 bg-blue-500 rounded-sm">AMEX</span>
          <span className="text-[10px] font-semibold text-white px-1.5 py-0.5 bg-zinc-800 rounded-sm">Apple Pay</span>
          <span className="text-[10px] font-semibold text-white px-1.5 py-0.5 bg-zinc-900 border border-white/10 rounded-sm">Google Pay</span>
        </div>
      </div>
    </footer>
  );
}
