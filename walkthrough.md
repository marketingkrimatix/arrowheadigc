# Walkthrough - Redesigned arrowheadigc.com

We have completed the redesign, copywriting, and technical development of the new website for **ArrowHead International General Contracting LLC (AHIGC)**. The codebase is implemented in Next.js (using App Router, TypeScript, and Tailwind CSS v4) and compiles into fully optimized static HTML pages.

---

## 1. Project Directory Structure

The new website structure maps to the following files:

```bash
arrowheadigc/
├── app/
│   ├── globals.css                # Custom theme variables (Tailwind CSS v4)
│   ├── layout.tsx                 # Root layout with fonts, shared header, footer, and widgets
│   ├── page.tsx                   # Interactive homepage with stats and accordions
│   ├── about/
│   │   └── page.tsx               # Company profile, values, credentials
│   ├── contact/
│   │   └── page.tsx               # Interactive B2B estimator form with validation
│   ├── insights/
│   │   └── page.tsx               # Long-form guides (ADSSC, TAMM, FM) and FAQs
│   ├── projects/
│   │   └── page.tsx               # Filterable projects grid (pipelines, villas, MEP, marine)
│   ├── sectors/
│   │   ├── page.tsx               # Sectors index directory
│   │   ├── commercial-retail/     # Commercial office fit-outs and retail space pages
│   │   ├── industrial-manufacturing/  # Industrial zones (Mussafah, ICAD) page
│   │   ├── marine-ports/          # Coastal waterfront engineering page
│   │   └── residential-villas/    # Luxury home construction details page
│   └── services/
│       ├── page.tsx               # Services directory index
│       ├── facility-management/   # Hard vs Soft FM service scopes and AMCs
│       ├── hdpe-pipelines/        # HDPE welding, horizontal drilling (HDD), pressure tests
│       ├── marine-industrial/     # Jetties, slipways, warehouse fab
│       ├── mep-specialized/       # Chilled water, switchgear DB, Civil Defense fire sprinklers
│       ├── villa-construction/    # Custom custom builds and Estidama certifications
│       └── villa-renovation/      # Structural extensions and home upgrades
└── components/
    ├── Header.tsx                 # Sticky navigation header with mobile drawer
    ├── Footer.tsx                 # Footer with office info, licenses, and accreditations
    └── WhatsAppWidget.tsx         # Quick call & chat widget
```

---

## 2. Key Deliverables & Design Elements

### A. Corporate Aesthetics & Theme
- **Harmonious HSL Palette:** Uses a deep primary navy (`#0B132B` / `#1C2541`) to represent structural stability and trusted engineering, combined with metallic Gold accents (`#C5A880` / `#B3956D`) representing luxury residential custom villa contracting.
- **Premium Typography:** Integrates Next.js Google font loaders for **Outfit** (headings, giving a structured, architectural aesthetic) and **Inter** (body, highly readable for technical specifications).
- **Subtle Micro-Animations:** Includes hover scaling on cards, translation transitions on buttons, and smooth collapsing animations for the accordions.

### B. Shared Shell Components
- [Header.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/components/Header.tsx): Implements a scroll-aware transparent-to-solid backdrop-blur header. Integrates interactive Services/Sectors hover dropdowns and a slide-out mobile navigation drawer.
- [Footer.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/components/Footer.tsx): Displays credentials (Abu Dhabi DED Trade License CN-4998977), office location (Prestige Towers, Mussafah), and alignment tags (ADSSC Approved, ADDC Compliant).
- [WhatsAppWidget.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/components/WhatsAppWidget.tsx): Floating widget offering quick phone dialing (`tel:+97125545230`) and a WhatsApp API shortcut.

### C. Pages & SEO Content Strategy
- **Homepage ([page.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/app/page.tsx)):** Highlights value pillars (safety, certifications), key metrics (15+ Years UAE Operations, 120+ Completed Projects), a preview grid of services, and interactive global FAQs.
- **About Page ([about/page.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/app/about/page.tsx)):** Detailed profile highlighting their head office in Mussafah, and alignment with ADSSC/ADDC.
- **Contact & RFQ Page ([contact/page.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/app/contact/page.tsx)):** Features a client-side validated form with field requirements (name, email, phone, location selector, budget selector, file upload slot, and detail scope box) with a mock successful submit state.
- **Filterable Case Studies ([projects/page.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/app/projects/page.tsx)):** Implements an instant, client-side category filter button group to let prospective buyers sort through past HDPE pipeline installations, luxury villa constructions, MEP retrofits, or port maintenance works.
- **Service Detail Landing Pages:** Standalone landing pages with deep technical descriptions targeting specific keyword clusters (DVS 2207 welding codes, PE100 piping, Estidama Pearl ratings, TAMM approvals).
- **Sector Detail Pages:** Tailored pages for Residential, Industrial, Marine, and Commercial clients.

---

## 3. SEO Optimization Summary

1. **Unique Titles & Meta Descriptions:** Every page defines custom `Metadata` configurations with descriptive, keyword-rich metadata blocks.
2. **Clean In-Page Heading Hierarchy:** Single `<h1>` per page, followed by logical `<h2>` and `<h3>` tags targeting primary local search queries (e.g. `HDPE pipeline supply and installation Abu Dhabi`, `villa contractors in Abu Dhabi`).
3. **Internal Linking:** Keyword-rich anchor links connect sectors to relevant services.
4. **Local Business Credentials:** Trade License CN-4998977 is visible in the footer across all routes, verifying their registered Mussafah standing.

---

## 4. Compilation & Verification Results

Running the Next.js production build (`npm run build`):
- Compiled successfully: **17 distinct routes static prerendered**.
- Verified all client-side triggers (interactive FAQ accordions, project filtering, form validation).
- Standardized layout spacing across all viewport dimensions (mobile responsive grids).
