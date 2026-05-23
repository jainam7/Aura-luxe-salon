# Aura Unisex Salon (Luxury Salon Client SPA)

Representative multi-page unisex salon website designed and optimized for the Canadian luxury hospitality market. Featuring robust date-formatting, pre-tax HST disclaimers, custom calendar controls, and automated multi-step booking structures.

## 🛠️ Tech Stack & Architecture

- **Framework**: React + Vite (Single Page App Layout)
- **Styling**: Tailwind CSS v4 (Custom Neutral & Warm Champagne design palette)
- **Animations**: Framer Motion / Motion for smooth page transition Reveals and scroll effects
- **Icons**: Lucide React
- **Typography pairing**: *Cormorant Garamond* (Elegant Serif Headings), *DM Sans* (Body Text) paired with *Italiana* (Luxury Accent)
- **Canadian Focus**: Direct pre-tax HST (13%) warnings, full Interac/AMEX/Visa payment cards, statutory holidays check warning, en-CA date and CA$ CAD price utility structures.

## ✨ Core Features & Pages

1. **🏠 Home / Landing**: Full-viewport cinematic image background, interactive featured services carousel with navigation, animated metrics counters, guest testimonials sliders, scrolling promotional ticker tape, and immersive social galleries.
2. **💇 Curated Services Menu**: Category-filtered service lists (Hair Care, Barbering, Facials, Nails, Massage, Bridal, and Packages), search query bar, and instant booking triggers that pass values seamlessly to the reservation engine.
3. **👥 About Story**: Legacy timeline milestones (2016 - 2024), expert stylist bios with EN/FR bilingual accessibility badges and specialties, and core hygienic value indicators.
4. **📅 Multi-Step Wizard Booking**: 4-step wizard:
   - *Step 1*: Service Search/Filters
   - *Step 2*: Stylist Selector with experience records
   - *Step 3*: Custom Localized Calendar (Sunday closed warning + Monday closed check) classified into Morning, Afternoon, and Evening slots.
   - *Step 4*: Details Validation (Canadian phone formatting rules of `(XXX) XXX-XXXX` & mail checks).
   - *Modal*: Gorgeous confirmation card detailing generated reference IDs, pricing logs with HST warnings, and next steps guidance.
5. **📞 Contacts & FAQs**: Split dual-form panel with direct messaging state, embedded Toronto CN Tower area leaflet locator, business hours tables, and accordion FAQ logs answering payment support and cancellations policies.

## ⚙️ Local Development Setup

To run the application locally on your device, execute:

```bash
# 1. Install dependencies
npm install

# 2. Boot up development server
npm run dev
```

Open the local preview server at `http://localhost:3000` to interact with custom animations and layout grids.
