import React, { useState, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  Search,
  User,
  Clock,
  CheckCircle,
  FileText,
  ChevronRight,
  ChevronLeft,
  X,
  CreditCard,
} from "lucide-react";
import { SALONS_SERVICES, SALONS_TEAM, Service, TeamMember } from "../../lib/constants";
import { formatCAD, formatDateCA, phoneRegex } from "../../lib/formatters";
import AnimatedSection from "../shared/AnimatedSection";

interface BookingWizardProps {
  initialServiceName?: string;
  onBookingReset?: () => void;
}

export default function BookingWizard({ initialServiceName = "", onBookingReset }: BookingWizardProps) {
  const [step, setStep] = useState(1);
  
  // Selection States
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<TeamMember | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");

  // Guest Details States
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestRequests, setGuestRequests] = useState("");

  // Search & Filter (Step 1)
  const [serviceSearch, setServiceSearch] = useState("");
  const [serviceCategory, setServiceCategory] = useState("All");

  // Validations Errors
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Success summary modal
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  // Initial trigger
  useEffect(() => {
    if (initialServiceName) {
      const match = SALONS_SERVICES.find(
        (s) => s.name.toLowerCase() === initialServiceName.toLowerCase()
      );
      if (match) {
        setSelectedService(match);
        setStep(2); // Jump directly to choosing stylist!
        if (onBookingReset) onBookingReset();
      }
    }
  }, [initialServiceName, onBookingReset]);

  // Form phone formatted automatically like +1 (416) XXX-XXXX
  const handlePhoneChange = (val: string) => {
    // strip non digits
    const digits = val.replace(/\D/g, "");
    if (digits.length <= 10) {
      let formatted = digits;
      if (digits.length > 6) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
      } else if (digits.length > 3) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      } else if (digits.length > 0) {
        formatted = `(${digits}`;
      }
      setGuestPhone(formatted);
    }
  };

  // Step Navigations
  const handleNextStep = () => {
    if (step === 1 && !selectedService) {
      alert("Please select a service first.");
      return;
    }
    if (step === 2 && !selectedStylist) {
      alert("Please choose your preferred stylist.");
      return;
    }
    if (step === 3 && (!selectedDate || !selectedTimeSlot)) {
      alert("Please pick a calendar date and time slot.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  // Submit
  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!guestName.trim()) errors.name = "Full name is required.";
    if (guestPhone.length < 14) errors.phone = "Valid Canadian phone number is required.";
    if (!guestEmail.trim() || !guestEmail.includes("@")) errors.email = "Valid email is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    // Generate simple Reference Code (AURA-XXXXXX)
    const code = "AUR-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(code);
    setShowConfirmModal(true);
  };

  const resetAll = () => {
    setSelectedService(null);
    setSelectedStylist(null);
    setSelectedDate(null);
    setSelectedTimeSlot("");
    setGuestName("");
    setGuestPhone("");
    setGuestEmail("");
    setGuestRequests("");
    setStep(1);
    setShowConfirmModal(false);
  };

  // Multi-Categories of services
  const categories = ["All", "Hair", "Barbering", "Skin", "Nails", "Massage & Spa", "Bridal & Occasion", "Packages"];

  const filteredStepServices = SALONS_SERVICES.filter((s) => {
    const matchesCategory = serviceCategory === "All" || s.category === serviceCategory;
    const matchesQuery =
      s.name.toLowerCase().includes(serviceSearch.toLowerCase()) ||
      s.description.toLowerCase().includes(serviceSearch.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  // Time modules categorized
  const MORNING_SLOTS = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"];
  const AFTERNOON_SLOTS = ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"];
  const EVENING_SLOTS = ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"];

  // Custom calendar days builder
  const getDaysInMonth = () => {
    const dates: Date[] = [];
    const today = new Date();
    // Build days for next 14 calendar days
    for (let i = 0; i < 14; i++) {
      const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      dates.push(d);
    }
    return dates;
  };

  const datesToSelect = getDaysInMonth();

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Progress Line */}
      <div className="w-full max-w-3xl mx-auto mb-12">
        <div className="flex items-center justify-between relative mt-4">
          <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-[#E5E0D8] -translate-y-1/2 -z-1" />
          <div
            className="absolute top-1/2 left-0 h-[1.5px] bg-accent -translate-y-1/2 -z-1 transition-all duration-300"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          />

          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex flex-col items-center">
              <button
                disabled={step < num}
                onClick={() => setStep(num)}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono border-2 transition-all cursor-pointer ${
                  step === num
                    ? "bg-accent border-accent text-primary font-bold shadow-lg"
                    : step > num
                    ? "bg-primary border-primary text-accent"
                    : "bg-surface border-[#E5E0D8] text-text-muted cursor-not-allowed"
                }`}
              >
                {num}
              </button>
              <span className="hidden sm:block text-[9px] uppercase tracking-wider font-mono text-text-muted mt-2">
                {num === 1 && "Service"}
                {num === 2 && "Stylist"}
                {num === 3 && "Schedule"}
                {num === 4 && "Guest Info"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main interactive Wizard blocks */}
        <div className="lg:col-span-2 bg-surface border border-border-custom p-6 sm:p-8 rounded-[16px]">
          
          {/* STEP 1: SELECT SERVICE */}
          {step === 1 && (
            <div>
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-light text-primary tracking-tight">
                  Step 1: Select Specialized Treatment
                </h3>
                <p className="text-text-muted text-xs font-light mt-1">
                  Browse or search our comprehensive menu of unisex hair, skin, package and massage therapies.
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-text-muted/60" />
                  <input
                    type="text"
                    value={serviceSearch}
                    onChange={(e) => setServiceSearch(e.target.value)}
                    placeholder="Search standard styling services..."
                    className="w-full bg-secondary/30 border border-border-custom text-xs font-mono py-2.5 pl-10 rounded-[8px] input-gold-focus"
                  />
                </div>
                <select
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  className="bg-secondary/30 border border-border-custom text-xs font-mono py-2.5 px-3 rounded-[8px] input-gold-focus"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c === "All" ? "All Categories" : c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Services items track */}
              <div className="max-h-[380px] lg:max-h-[500px] overflow-y-auto divide-y divide-border-custom border border-border-custom rounded-[12px] bg-secondary/5 pr-2">
                {filteredStepServices.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => {
                      setSelectedService(s);
                      // Auto trigger to next stylist step
                      setStep(2);
                    }}
                    className={`p-4 flex items-center justify-between gap-4 cursor-pointer transition-colors ${
                      selectedService?.id === s.id
                        ? "bg-accent/10 border-l border-l-accent"
                        : "hover:bg-accent/5"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-sm font-semibold tracking-wide text-primary">
                          {s.name}
                        </h4>
                        <span className="text-[8px] tracking-wider font-mono uppercase bg-[#FAF7F2] text-accent border border-accent/20 px-1.5 py-0.5 rounded">
                          {s.category}
                        </span>
                      </div>
                      <p className="text-[11.5px] text-text-muted font-light leading-relaxed max-w-md mt-1">
                        {s.description}
                      </p>
                    </div>

                    <div className="flex flex-col items-end shrink-0 select-none">
                      <span className="text-xs font-bold text-accent font-mono">
                        {formatCAD(s.priceMin)}+
                      </span>
                      <span className="text-[10px] font-mono text-text-muted mt-1 leading-none">
                        ~{s.durationMin}m
                      </span>
                    </div>
                  </div>
                ))}

                {filteredStepServices.length === 0 && (
                  <div className="p-12 text-center text-text-muted">
                    No matching services found check spelling.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 2: CHOOSE STYLIST */}
          {step === 2 && (
            <div>
              <div className="mb-6">
                <button
                  onClick={handlePrevStep}
                  className="flex items-center text-xs text-accent font-semibold hover:text-primary transition-colors gap-1 mb-3 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Go back
                </button>
                <h3 className="font-serif text-2xl font-light text-primary tracking-tight">
                  Step 2: Choose Stylist / Artist
                </h3>
                <p className="text-text-muted text-xs font-light mt-1">
                  Enjoy the treatment under the care of certified bilinguality experts.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SALONS_TEAM.map((stylist) => (
                  <div
                    key={stylist.id}
                    onClick={() => {
                      setSelectedStylist(stylist);
                      setStep(3); // Auto to calendar scheduling
                    }}
                    className={`flex items-center gap-4 bg-surface rounded-[12px] p-4 cursor-pointer border transition-all ${
                      selectedStylist?.id === stylist.id
                        ? "border-accent bg-accent/5 ring-1 ring-accent"
                        : "border-border-custom hover:border-accent"
                    }`}
                  >
                    <img
                      src={stylist.avatar}
                      alt={stylist.name}
                      className="w-14 h-14 rounded-full object-cover border border-accent/20 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="overflow-hidden">
                      <h4 className="font-serif text-sm font-semibold text-primary truncate leading-snug">
                        {stylist.name}
                      </h4>
                      <p className="text-[10px] font-mono text-accent uppercase truncate mt-0.5 leading-none">
                        {stylist.role}
                      </p>
                      <p className="text-[11px] text-text-muted font-light truncate mt-1 leading-none">
                        Exp: {stylist.experience}
                      </p>
                      
                      {stylist.bilingual && (
                        <span className="inline-block bg-accent/10 text-accent text-[8px] font-mono font-medium rounded px-1.5 py-0.5 mt-2 leading-none">
                          EN / FR bilingual
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: PICK DATE & TIME */}
          {step === 3 && (
            <div>
              <div className="mb-6">
                <button
                  onClick={handlePrevStep}
                  className="flex items-center text-xs text-accent font-semibold hover:text-primary transition-colors gap-1 mb-3 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Go back
                </button>
                <h3 className="font-serif text-2xl font-light text-primary tracking-tight">
                  Step 3: Pick Date & Time Slot
                </h3>
                <p className="text-text-muted text-xs font-light mt-1">
                  Interactive calendar schedules for the next 14 operating days. Week starts on Monday.
                </p>
              </div>

              {/* Mini calendar scroll wrap */}
              <div className="mb-8">
                <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-accent font-bold mb-3.5">
                  AVAILABLE APPOINTMENT DATES (EN-CA LOCAL)
                </h4>
                
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 mb-2">
                  {datesToSelect.map((dt, i) => {
                    const isSunday = dt.getDay() === 0;
                    const isMonday = dt.getDay() === 1; // Note: Closed on Monday
                    const isClosed = isMonday;
                    const isSelected = selectedDate?.toDateString() === dt.toDateString();

                    const dayNum = dt.getDate();
                    const dayName = dt.toLocaleDateString("en-CA", { weekday: "short" });
                    const monthName = dt.toLocaleDateString("en-CA", { month: "short" });

                    return (
                      <button
                        key={i}
                        disabled={isClosed}
                        onClick={() => {
                          setSelectedDate(dt);
                          setSelectedTimeSlot(""); // Reset slot
                        }}
                        className={`flex flex-col items-center justify-center p-3.5 rounded-[12px] border text-center transition-all relative ${
                          isClosed
                            ? "bg-secondary/40 border-secondary/20 text-text-muted/30 cursor-not-allowed"
                            : isSelected
                            ? "bg-accent border-accent text-primary font-bold shadow-md"
                            : "bg-surface border-border-custom hover:border-accent text-primary"
                        }`}
                      >
                        <span className="text-[10px] font-mono tracking-wider font-semibold opacity-60">
                          {dayName}
                        </span>
                        <span className="font-serif text-lg font-light py-1 leading-none">
                          {dayNum}
                        </span>
                        <span className="text-[9px] font-mono uppercase tracking-wider opacity-60 leading-none">
                          {monthName}
                        </span>

                        {isClosed && (
                          <span className="absolute bottom-1 text-[8px] font-mono text-red-500 scale-75 leading-none font-bold">
                            CLOSED
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
                <p className="text-[10px] font-mono text-text-muted/70 mt-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" /> * Salon Closed on Mondays. Statutory holidays note applies.
                </p>
              </div>

              {/* Time Slots Area */}
              {selectedDate && (
                <div className="space-y-6">
                  <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-accent font-bold">
                    SELECT AN ACTIVE SLOT FOR {formatDateCA(selectedDate)}
                  </h4>

                  {/* Morning slots */}
                  <div>
                    <h5 className="text-[10px] font-mono uppercase tracking-widest text-[#B1935C]/60 mb-2 border-b border-border-custom pb-1.5">
                      Morning (09:00 AM – 12:00 PM)
                    </h5>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {MORNING_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-2 text-[11px] font-mono border rounded-lg transition-all ${
                            selectedTimeSlot === slot
                              ? "bg-primary border-primary text-accent font-bold"
                              : "border-border-custom bg-surface hover:border-accent text-primary"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Afternoon slots */}
                  <div>
                    <h5 className="text-[10px] font-mono uppercase tracking-widest text-[#B1935C]/60 mb-2 border-b border-border-custom pb-1.5">
                      Afternoon (12:00 PM – 04:00 PM)
                    </h5>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {AFTERNOON_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-2 text-[11px] font-mono border rounded-lg transition-all ${
                            selectedTimeSlot === slot
                              ? "bg-primary border-primary text-accent font-bold"
                              : "border-border-custom bg-surface hover:border-accent text-primary"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Evening slots */}
                  <div>
                    <h5 className="text-[10px] font-mono uppercase tracking-widest text-[#B1935C]/60 mb-2 border-b border-border-custom pb-1.5">
                      Evening (04:00 PM – 07:00 PM)
                    </h5>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {EVENING_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-2 text-[11px] font-mono border rounded-lg transition-all ${
                            selectedTimeSlot === slot
                              ? "bg-primary border-primary text-accent font-bold"
                              : "border-border-custom bg-surface hover:border-accent text-primary"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 4: GUEST DETAILS */}
          {step === 4 && (
            <form onSubmit={handleFinalSubmit}>
              <div className="mb-6">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="flex items-center text-xs text-accent font-semibold hover:text-primary transition-colors gap-1 mb-3 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Go back
                </button>
                <h3 className="font-serif text-2xl font-light text-primary tracking-tight">
                  Step 4: Contact & Details Validation
                </h3>
                <p className="text-text-muted text-xs font-light mt-1">
                  Complete these contact attributes. Your booking coordinates will be compiled securely.
                </p>
              </div>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-text-muted mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="E.g. Alexander Mackenzie"
                    className="w-full bg-secondary/30 border border-border-custom text-xs font-mono p-3 rounded-[8px] input-gold-focus text-primary"
                  />
                  {formErrors.name && (
                    <span className="text-red-500 text-[10px] font-mono tracking-wide mt-1 block">
                      {formErrors.name}
                    </span>
                  )}
                </div>

                {/* Grid wrap phone email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-mono tracking-wider uppercase text-text-muted mb-1">
                      Canadian Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      placeholder="(416) Xxx-Xxxx"
                      className="w-full bg-secondary/30 border border-border-custom text-xs font-mono p-3 rounded-[8px] input-gold-focus text-primary"
                    />
                    <span className="text-[9px] text-text-muted/60 tracking-wider font-mono mt-1 block">
                      Validates against CA dial rules.
                    </span>
                    {formErrors.phone && (
                      <span className="text-red-500 text-[10px] font-mono tracking-wide mt-1 block">
                        {formErrors.phone}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-mono tracking-wider uppercase text-text-muted mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      placeholder="alexander@domain.ca"
                      className="w-full bg-secondary/30 border border-border-custom text-xs font-mono p-3 rounded-[8px] input-gold-focus text-primary"
                    />
                    {formErrors.email && (
                      <span className="text-red-500 text-[10px] font-mono tracking-wide mt-1 block">
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Additional Special requests */}
                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-text-muted mb-1">
                    Special Styling Requests / Allergy Note
                  </label>
                  <textarea
                    rows={3}
                    value={guestRequests}
                    onChange={(e) => setGuestRequests(e.target.value)}
                    placeholder="Specify if you prefer a fully silent appointments, have skin allergies, or want a certain design element..."
                    className="w-full bg-secondary/30 border border-border-custom text-xs font-mono p-3 rounded-[8px] input-gold-focus resize-none text-primary"
                  />
                </div>

                {/* Statutory Holiday warning inside validation notes */}
                <div className="p-4 bg-secondary/50 rounded-lg text-text-muted text-[11px] leading-relaxed font-light border border-dashed border-accent/20">
                  ⚠️ <strong>Statutory Holiday Notice:</strong> In conformity with our Canadian operations standards, we are closed on all provincial holidays. If your date falls on a stat holiday, our guest representatives will contact you directly to reschedule.
                </div>

                {/* Submit trigger */}
                <button
                  type="submit"
                  className="w-full text-center py-3 sm:py-3.5 bg-accent hover:bg-accent-light text-primary border border-accent/10 rounded-[8px] transition-all text-xs sm:text-sm font-mono font-bold tracking-wider sm:tracking-widest uppercase cursor-pointer shadow-xl shadow-accent/10 mt-4"
                >
                  CONFIRM APPOINTMENT
                </button>
              </div>
            </form>
          )}

          {/* Steppers navigation buttons */}
          {step < 4 && (
            <div className="flex justify-between items-center mt-8 pt-4 border-t border-border-custom">
              <button
                disabled={step === 1}
                onClick={handlePrevStep}
                className={`flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest px-4 py-2 border border-border-custom rounded-lg transition-colors select-none ${
                  step === 1
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-accent hover:text-primary text-text-muted cursor-pointer"
                }`}
              >
                <ChevronLeft className="w-4 h-4" /> Prep Step
              </button>

              <button
                disabled={
                  (step === 1 && !selectedService) ||
                  (step === 2 && !selectedStylist) ||
                  (step === 3 && (!selectedDate || !selectedTimeSlot))
                }
                onClick={handleNextStep}
                className={`flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest px-6 py-2 border rounded-lg transition-all select-none ${
                  (step === 1 && !selectedService) ||
                  (step === 2 && !selectedStylist) ||
                  (step === 3 && (!selectedDate || !selectedTimeSlot))
                    ? "opacity-30 bg-secondary border-border-custom text-text-muted cursor-not-allowed"
                    : "bg-accent border-accent text-primary font-bold hover:bg-accent-light hover:border-accent-light cursor-pointer shadow-md"
                }`}
              >
                Next Step <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

        {/* Dynamic Details Sidebar panel */}
        <div className="lg:col-span-1 flex flex-col gap-6 lg:sticky lg:top-[100px] lg:self-start">
          <div className="bg-primary/95 text-secondary rounded-[16px] p-6 border border-accent/25 shadow-xl">
            <h4 className="font-serif text-[15px] text-accent tracking-[0.2em] uppercase mb-4 border-b border-accent/20 pb-2">
              Appointment Summary
            </h4>

            {/* Service brief */}
            {selectedService ? (
              <div className="mb-4 text-xs font-light block leading-relaxed">
                <span className="text-accent/60 font-mono text-[9px] uppercase tracking-wider block">SELECTED SERVICE & CATEGORY</span>
                <p className="font-serif text-[15px] font-semibold text-secondary mt-1 tracking-wide">{selectedService.name}</p>
                <div className="flex justify-between font-mono text-[10.5px] mt-1.5 text-secondary/60">
                  <span>Category: {selectedService.category}</span>
                  <span>~{selectedService.durationMin}m duration</span>
                </div>
              </div>
            ) : (
              <div className="py-4 border-b border-dashed border-white/5 text-secondary/40 text-xs italic">
                No Treatment selected. Go to Step 1.
              </div>
            )}

            {/* Stylist Brief */}
            {selectedStylist ? (
              <div className="mb-4 pt-4 border-t border-white/5 text-xs font-light leading-relaxed">
                <span className="text-accent/60 font-mono text-[9px] uppercase tracking-wider block">DESIGNER</span>
                <p className="font-serif text-sm font-semibold text-secondary mt-1">{selectedStylist.name}</p>
                <p className="text-[10px] font-mono text-[#E8D5B0]/70 mt-1">{selectedStylist.role}</p>
              </div>
            ) : (
              <div className="py-4 border-b border-dashed border-white/5 text-secondary/40 text-xs italic">
                Designer not selected. Complete Step 2.
              </div>
            )}

            {/* Timing brief */}
            {selectedDate && selectedTimeSlot ? (
              <div className="mb-4 pt-4 border-t border-white/5 text-xs font-light leading-relaxed">
                <span className="text-accent/60 font-mono text-[9px] uppercase tracking-wider block">SCHEDULE</span>
                <p className="text-sm font-semibold text-accent-light mt-1">🗓️ {formatDateCA(selectedDate)}</p>
                <p className="text-sm font-mono mt-1 text-[#E8D5B0]">🕒 {selectedTimeSlot}</p>
              </div>
            ) : (
              <div className="py-4 border-b border-dashed border-white/5 text-secondary/40 text-xs italic">
                No schedule selected. Go to Step 3.
              </div>
            )}

            {/* Final Price list block */}
            <div className="pt-4 border-t border-accent/20 mt-6 flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-[9px] font-mono tracking-wider text-accent/60 uppercase">CAD TOTAL BUDGET</span>
                <span className="text-[14px] text-secondary/50 font-mono mt-1">Starting price</span>
              </div>
              <span className="text-2xl font-serif text-accent font-semibold tabular-nums leading-none">
                {selectedService ? formatCAD(selectedService.priceMin) : "CA$0 CAD"}
              </span>
            </div>

            <p className="text-[10px] font-mono text-secondary/40 mt-3 text-right">
              * Selected service price excludes HST/GST taxes. Payable on-site.
            </p>
          </div>

          <div className="bg-secondary/40 border border-border-custom p-5 rounded-[16px] text-xs leading-relaxed text-text-muted flex flex-col gap-3">
            <span className="text-[10px] font-mono tracking-wider text-accent font-bold uppercase">RESERVATION POLICY:</span>
            <p className="font-light text-[11.5px]">
              We request cancellations or changes be structured at least <strong>24 hours</strong> in advance. Secure on-site payments are completed directly at custom checkout terminals after service. No deposit required!
            </p>
          </div>

          {/* Quick Help & Premium Trust badges to fill laptop vertical space beautifully */}
          <div className="bg-secondary/15 border border-border-custom p-5 rounded-[16px] text-xs leading-relaxed text-text-muted flex flex-col gap-3">
            <span className="text-[10px] font-mono tracking-wider text-accent font-bold uppercase">PREMIER LUXURY SALON TRUST:</span>
            <div className="flex flex-col gap-2.5 text-[11px] font-light">
              <div className="flex items-start gap-2">
                <span className="text-accent text-xs">✨</span>
                <p><strong>100% Expert Care:</strong> Hand-selected certified master cosmetologists.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent text-xs">🌿</span>
                <p><strong>Premium Formulas:</strong> Pure, organic botanical, and hypoallergenic products.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent text-xs">🗓️</span>
                <p><strong>Seamless Rescheduling:</strong> Simple self-serve adjustments over phone concierge.</p>
              </div>
              <div className="w-full h-[1px] bg-border-custom/40 my-1" />
              <div className="space-y-1 mt-0.5 text-text-muted/80">
                <p><strong>📞 Concierge:</strong> +1 (416) 555-0199</p>
                <p><strong>🕒 Guest Support:</strong> Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONFIRMATION SUCCESS MODAL */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/75 backdrop-blur-md overflow-hidden animate-none">
          <div className="relative w-full max-w-lg bg-surface border border-accent/20 p-8 rounded-[20px] shadow-2xl text-center flex flex-col items-center">
            
            {/* Animated Vector Circle */}
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-6 animate-bounce">
              <CheckCircle className="w-9 h-9" />
            </div>

            <span className="text-xs font-mono tracking-[0.2em] text-accent uppercase font-bold">
              PRE-RESERVATION SUBMITTED
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-primary font-light mt-2">
              Appointment Registered
            </h3>
            
            {/* Reference ID and critical notes */}
            <div className="bg-secondary/40 border border-border-custom rounded-[12px] p-4.5 my-6 text-center w-full">
              <p className="text-[10px] font-mono tracking-widest text-text-muted/60 uppercase leading-none mb-1.5">
                CANADIAN BOOKING REFERENCE
              </p>
              <p className="text-xl font-mono tracking-widest text-accent font-semibold leading-none tabular-nums">
                {bookingRef}
              </p>
              <div className="w-8 h-[1px] bg-accent/25 mx-auto my-3" />
              
              <div className="text-left space-y-2 text-xs text-text-muted tracking-wide font-light">
                <p>📍 <strong>Salon Address:</strong> 123 Main Street, Suite 101, Toronto, ON</p>
                <p>💆 <strong>Treatment:</strong> {selectedService?.name}</p>
                <p>👥 <strong>Stylist:</strong> {selectedStylist?.name}</p>
                <p>🕒 <strong>Timing:</strong> {selectedDate ? formatDateCA(selectedDate) : ""} @ {selectedTimeSlot}</p>
                <p className="text-[10px] font-mono text-accent mt-2 leading-tight">
                  * Confirmation details are logged for {guestEmail}. 13% pre-tax HST applies.
                </p>
              </div>
            </div>

            <p className="text-xs text-text-muted/80 leading-relaxed font-light mb-8 px-2 max-w-sm">
              We look forward to meeting you! Our concierge team will reach out to +1 {guestPhone} within 4 operating hours to complete the secure calendar pre-validation.
            </p>

            <button
              onClick={resetAll}
              className="w-full py-3 border border-primary bg-primary text-accent hover:bg-zinc-900 rounded-[10px] text-xs font-mono tracking-widest uppercase font-bold transition-colors cursor-pointer select-none"
            >
              CLOSE & RESTART WIZARD
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
