
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
│   │   └── page.tsx               # Long-form guides (Municipal Regulations, TAMM, FM) and FAQs
│   ├── projects/
│   │   └── page.tsx               # Filterable projects grid (pipelines, villas, MEP, civils)
│   ├── sectors/
│   │   ├── page.tsx               # Sectors index directory
│   │   ├── commercial-retail/     # Commercial office fit-outs and retail space pages
│   │   ├── industrial-manufacturing/  # Industrial zones (Mussafah, ICAD) page
│   │   ├── infrastructure-utilities/  # Utilities & civil infrastructure solutions page
│   │   ├── hospitality-leisure/   # Hotels and recreation facilities page
│   │   └── residential-villas/    # Luxury home construction details page
│   └── services/
│       ├── page.tsx               # Services directory index
│       ├── facility-management/   # Hard vs Soft FM service scopes and AMCs
│       ├── hdpe-pipelines/        # HDPE welding, horizontal drilling (HDD), pressure tests
│       ├── infrastructure-civil-works/ # Heavy foundations, earthworks, substations
│       ├── wet-utilities-drainage/ # Stormwater, sewer, and gravity utility networks
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

### B. Authentic Media & Assets Integration
- **Zero Placeholder/Unsplash Images:** Replaced 100% of dummy Unsplash links with authentic photos and videos from `public/ahigc` and `public/arrowheadigc-media`.
- **Accurate Project & Domain Mapping:**
  - **Retail & Commercial Interiors:** Jack Wills store fitouts, mall retail interiors (`/images/jack-wills.jpeg`, `/images/wills-store.jpeg`, `/images/store.jpeg`, `/images/mall_shop.jpeg`).
  - **Matrix Projects & Commercial Civils:** Real construction site elevations and structural execution (`/images/Matrix_project.jpeg`, `/images/Matrix_project1.jpeg`, `/images/Matrix_project2.jpeg`, `/images/Matrix_project3.jpeg`).
  - **HDPE Pipelines & Utility Trenching:** Authentic PE100 piping, butt-fusion welding, and pipeline installation on Abu Dhabi sites (`/images/123.jpeg`, `/images/456.jpeg`, `/images/789.jpeg`).
  - **Onsite Civil Infrastructure & Concrete Works:** Ground-level site photos (`/images/WhatsApp Image 2026-09-09 at 16.24.30.jpeg` through `16.24.34.jpeg`).
  - **Luxury Villas & Residential Architecture:** Architectural 3D renders and luxury villa construction models (`/images/ArrowheadVilla.png`, `/images/villa_modern.png`, `villa_contemporary.png`, `villa_mediterranean.png`).
  - **Landscape & Outdoor Works:** Authentic landscape and hardscape finishes (`/images/landscape.jpeg`, `/images/landscape1.jpeg` - `3.jpeg`).

### C. Shared Shell Components
- [Header.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/components/Header.tsx): Implements a scroll-aware transparent-to-solid backdrop-blur header. Integrates interactive Services/Sectors hover dropdowns and a slide-out mobile navigation drawer.
- [Footer.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/components/Footer.tsx): Displays credentials (Abu Dhabi DED Licensed Contractor), office location (Prestige Towers, Mussafah), and alignment tags (Municipal Authority Approved, Utility Compliant).
- [WhatsAppWidget.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/components/WhatsAppWidget.tsx): Floating widget offering quick phone dialing (`tel:+97125545230`) and a WhatsApp API shortcut.

### C. Pages & SEO Content Strategy
- **Homepage ([page.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/app/page.tsx)):** Highlights value pillars (safety, certifications), key metrics (15+ Years UAE Operations, 120+ Completed Projects), a preview grid of services, and interactive global FAQs.
- **About Page ([about/page.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/app/about/page.tsx)):** Detailed profile highlighting their head office in Mussafah, and alignment with municipal and utility authorities.
- **Contact & RFQ Page ([contact/page.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/app/contact/page.tsx)):** Features a client-side validated form with field requirements (name, email, phone, location selector, budget selector, file upload slot, and detail scope box) with a mock successful submit state.
- **Filterable Case Studies ([projects/page.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/app/projects/page.tsx)):** Implements an instant, client-side category filter button group to let prospective buyers sort through past HDPE pipeline installations, luxury villa constructions, MEP retrofits, or industrial civil works.
- **Service Detail Landing Pages:** Standalone landing pages with deep technical descriptions targeting specific keyword clusters (DVS 2207 welding codes, PE100 piping, Estidama Pearl ratings, TAMM approvals).
- **Sector Detail Pages:** Tailored pages for Residential, Industrial, Infrastructure & Utilities, Commercial, and Hospitality clients.

---

## 3. SEO Optimization Summary

1. **Unique Titles & Meta Descriptions:** Every page defines custom `Metadata` configurations with descriptive, keyword-rich metadata blocks.
2. **Clean In-Page Heading Hierarchy:** Single `<h1>` per page, followed by logical `<h2>` and `<h3>` tags targeting primary local search queries (e.g. `HDPE pipeline supply and installation Abu Dhabi`, `villa contractors in Abu Dhabi`).
3. **Internal Linking:** Keyword-rich anchor links connect sectors to relevant services.
4. **Local Business Credentials:** Verified general contracting standing in Mussafah, Abu Dhabi.

---

## 4. Compilation & Verification Results

Running the Next.js production build (`npm run build`):
- Compiled successfully: **17 distinct routes static prerendered**.
- Verified all client-side triggers (interactive FAQ accordions, project filtering, form validation).
- Standardized layout spacing across all viewport dimensions (mobile responsive grids).

---

## 5. Hero Carousel Enhancements (June 2026)

We implemented several timing, spacing, and accessibility refinements to the homepage hero slider component [CinematicHeroCarousel.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/components/CinematicHeroCarousel.tsx):
1. **Autoplay Timing State Sync**:
   - Refactored autoplay timing logic from pure CSS animation classes (`animate-[bar_10s_linear_infinite]`) to a React state-based interval timer.
   - Now, when a user pauses the autoplay, the progress indicator pauses at the exact current position.
   - When play is toggled back on, it resumes cleanly from the exact same paused percentage, rather than restarting from zero.
   - Clicking on slide tab navigation buttons manually resets the progress state to 0% and begins timing for the selected slide from the start.
2. **Play/Pause Button Clearance**:
   - Moved the Play/Pause circular button leftward on desktop/tablet views (`sm:mr-20`) to eliminate overlapping issues with the floating WhatsApp and Call widget (`fixed bottom-6 right-6`).
3. **Bouncing Scroll-Down Indicator**:
   - Added a centered scroll down chevron indicator at the bottom edge of the hero viewport (`hidden sm:flex`).
   - The indicator animates with a gentle bounce to signal scrollability.
   - Clicking the indicator triggers a smooth transition using standard `scrollIntoView` targeting the section immediately following the hero carousel.

---

## 6. Layout Overlap Fix (June 2026)

We resolved a visual overlapping issue between the three business vertical cards (Option E) and the Stats & Client Ticker section:
1. **Removed Fixed Viewport Height**: Changed the container on the "Three Business Verticals" hero section from `lg:h-screen` (which restricts height to `100vh` and causes content overflow on smaller laptops) to a flexible `min-h-screen` flow.
2. **Added Spacing Clearance**: Increased the top padding on the Stats section to `lg:pt-44` (176px). This ensures that even when the cards are translated down to overlay the section boundary, they never cover or obscure the stats text below them.

---

## 7. Slide Transition Order Fix (July 2026)

We resolved a slide-skipping issue in [CinematicHeroCarousel.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/components/CinematicHeroCarousel.tsx) where the autoplay cycled backward (in a `1 -> 3 -> 2 -> 1` order) instead of forward (`1 -> 2 -> 3 -> 1`):
1. **Purity in Timing Hook**: Decoupled state updates by removing the `setActiveSlide` call from inside the `setProgress` state updater. This side-effect was executing twice in React Strict Mode (development environment), causing index-skipping increments.
2. **Separate Transition Hook**: Added a separate `useEffect` hook that handles the slide transitions safely when `progress >= 100`.
3. **Observation**: Verified via automated browser inspection that the carousel correctly transitions in the forward chronological order:
   - `01 / Villa Construction` (index 0)
   - `02 / Water Infrastructure` (index 1)
   - `03 / Asset Management` (index 2)
   - Loops cleanly back to `01 / Villa Construction`.

---

## 8. Services & Sectors Consolidation (September 2026)

We consolidated the standalone "Services" and "Sectors" navigation, directory hubs, and mobile menus into a unified "Services" structure:
1. **Desktop Mega Menu**: Replaced the separate top-level "Sectors" nav item with an expanded, organized 4-column **Services** mega dropdown containing:
   - Quick Operational Overview & CTA
   - Infrastructure & Civils (HDPE Pipelines, Wet Utilities & Drainage, Civil Works)
   - Building Services & FM (Villa Construction, Villa Extensions, MEP Specialized, Facility Management)
   - Industry Sector Solutions (Residential, Industrial, Commercial, Infrastructure Utilities, Hospitality)
2. **Mobile Navigation Drawer**: Combined previous separate "Capabilities" and "Sectors" blocks into a single structured "Services & Sectors" menu group.
3. **Services Directory Page (`/services`)**: Enhanced the services hub to showcase both Core Engineering Divisions and Industry Sector specializations with direct sub-page routes.
4. **Breadcrumbs & Internal Linking**: Updated breadcrumb navigation on all sector detail landing pages to root hierarchically to `Services` (`Home > Services > [Sector Name]`).

---

## 9. Client Partners, Office Interiors, Warehouses & Real Projects (September 2026)

Based on client discussions and project materials:
1. **Our Clients & Partners Section & Dedicated Route ([app/clients/page.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/app/clients/page.tsx))**:
   - Integrated client and partner roster with actual logos:
     - **Main Contractors & Fit-Out**: ALEC Engineering, Bond Interiors, BW Interiors, Ghuzlan Emirates Furn & Decor
     - **Engineering & Architectural Consultancies**: Matrix Engineering Consultants, Manisa Studio Engineering Consultancy, Al Masakn Engineering Consultants, Arcal Engineering Consultants
   - Created [components/ClientLogoGrid.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/components/ClientLogoGrid.tsx) embedded on the Homepage, About page, and dedicated `/clients` page.
2. **Commercial Office Interiors & Fit-Out Service ([app/services/office-interiors/page.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/app/services/office-interiors/page.tsx))**:
   - Turnkey commercial office fit-outs, retail shops & boutiques (e.g. Jack Wills), custom joinery, acoustic drywall partitions, glass systems, and Civil Defense approvals.
3. **Industrial Warehouses Construction & Maintenance Service ([app/services/industrial-warehouses/page.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/app/services/industrial-warehouses/page.tsx))**:
   - Pre-engineered steel buildings (PEB), structural steel portal frames, TR34 high-flatness concrete floor slabs, crane gantries, insulated sandwich panels, and warehouse maintenance AMCs.
4. **Real Project Case Studies & Onsite Media ([data/projects.ts](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/data/projects.ts))**:
   - Featured Jack Wills Retail Store Fit-Out, Ali Makhboot Villa, Ali Hammadi Villa, Al Nahyan Villa, Katheri Family Villas, Khulagi Villa, Matrix Commercial Project, and Mussafah Industrial Logistics Warehouse with real site photography.
5. **Navigation & Sitemaps**:
   - Added "Clients" to header navigation and mobile drawer.
   - Added new services to mega menu dropdown, services directory page, footer, and XML sitemap (`/sitemap.xml`). All 47 routes compile cleanly with zero errors.
