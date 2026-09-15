# User & Developer Manual: Arrowhead IGC Website

Welcome to the **ArrowHead International General Contracting LLC (AHIGC)** website documentation and user manual. This guide outlines the project structure, details of the interactive frontend components, layout standards, and instructions for local development and production deployment.

---

## Table of Contents
1. [Project Directory & File Structure](#1-project-directory--file-structure)
2. [Component Guide & Interactive Systems](#2-component-guide--interactive-systems)
   - [Cinematic Hero Carousel (Option D)](#cinematic-hero-carousel-option-d)
   - [Three Business Verticals Hero (Option E)](#three-business-verticals-hero-option-e)
   - [Sticky Navigation Header & Mobile Drawer](#sticky-navigation-header--mobile-drawer)
   - [Interactive RFQ Calculator](#interactive-rfq-calculator)
   - [Client-Side Portfolio Filter](#client-side-portfolio-filter)
3. [Responsive Layout & Styling Standards](#3-responsive-layout--styling-standards)
4. [Local Development & Commands](#4-local-development--commands)
   - [Installing Dependencies](#installing-dependencies)
   - [Running the Dev Server](#running-the-dev-server)
   - [Resolving Port Conflicts](#resolving-port-conflicts)
   - [Building for Production](#building-for-production)

---

## 1. Project Directory & File Structure

The project is built on **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4** styling.

```bash
arrowheadigc/
├── app/
│   ├── globals.css                # Global styles, fonts, HSL color tokens (Tailwind CSS v4)
│   ├── layout.tsx                 # Base layout, fonts, header, footer, & WhatsApp FAB
│   ├── page.tsx                   # Homepage router container
│   ├── about/
│   │   └── page.tsx               # About AHIGC page (credentials, values, Estidama info)
│   ├── contact/
│   │   └── page.tsx               # Contact page & detailed RFQ estimation form
│   ├── insights/
│   │   └── page.tsx               # Editorial guides and utility compliance index
│   ├── projects/
│   │   └── page.tsx               # Case studies filterable index
│   ├── sectors/
│   │   └── page.tsx               # Operational sectors index page
│   └── services/
│       ├── page.tsx               # Technical service capabilities index page
├── components/
│   ├── Header.tsx                 # Scroll-contrast header and Backdrop/Drawer system
│   ├── Footer.tsx                 # Accreditations, licenses, office location footer
│   ├── CinematicHeroCarousel.tsx  # Widescreen autoplay progress-synchronized hero slider
│   ├── HomepageRfqCalculator.tsx  # Multi-step B2B utility estimator widget
│   └── WhatsAppWidget.tsx         # Fixed float dialing and chat widget
└── public/
    └── arrowheadigc-media/        # Local video and image assets for sliders
```

---

## 2. Component Guide & Interactive Systems

### Cinematic Hero Carousel (Option D)
- **Path**: [components/CinematicHeroCarousel.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/components/CinematicHeroCarousel.tsx)
- **State-Based Timing Progress**: Decoupled from pure CSS animations, timing is driven by a React state `progress` (0 to 100) running on a `100ms` interval tick for a total loop duration of 10 seconds.
- **Play/Pause Sync**: Pausing stops the active progress bar at its exact current visual state. Resuming restarts it from that exact paused percentage. Manual click of the tab navigation resets the state to 0%.
- **Scroll Down Arrow**: A centered, bouncing chevron indicator sits at the bottom-center of the viewport (`bottom-5 left-1/2`). Clicking this arrow triggers a smooth scroll past the hero height to the next section block.
- **Layout Margins**: The play/pause button has a right margin of `sm:mr-20` on desktop screens to clear space for the floating WhatsApp/Call widget.

### Three Business Verticals Hero (Option E)
- **Path**: [components/HomeClient.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/components/HomeClient.tsx)
- **Layout Flow**: Configured with `min-h-screen` instead of a fixed `h-screen`. This guarantees that if content expands or if the browser window height is small (laptop viewports), the hero container grows naturally to prevent cards from overflowing the bottom boundary and overlapping adjacent sections.

### Sticky Navigation Header & Mobile Drawer
- **Path**: [components/Header.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/components/Header.tsx)
- **Opaque Backdrop Styles**: Transition is driven by `isScrolled` scroll event listeners. The CSS class `.bg-scrolled-header` is fully opaque (`rgba(..., 1.0)`) to prevent underlying text from showing through the header.
- **Mobile Drawer Backdrop Dismissal**: The Backdrop element sits outside the `<header>` element block as a direct sibling inside a React fragment, layered at `z-50` with the Drawer itself at `z-[55]`. Clicking anywhere on the backdrop dismisses the mobile drawer.

### Interactive RFQ Calculator
- **Path**: [components/HomepageRfqCalculator.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/components/HomepageRfqCalculator.tsx)
- Multi-step client-side validation built using React states.
- Supports select drops for pipeline diameters, Estidama target pearl ratings, dewatering depths, and uploads.
- Evaluates estimated pricing parameters instantly and triggers mock email submissions.

### Client-Side Portfolio Filter
- **Path**: [app/projects/page.tsx](file:///c:/krimatix/code/arrowheadigc/arrowheadigc/app/projects/page.tsx)
- Client-side state filtering based on categorical click tab buttons (All, HDPE Pipelines, Luxury Villa Construction, FM hard mechanical, and Infrastructure/Civil works).

---

## 3. Responsive Layout & Styling Standards

AHIGC uses a high-end corporate color palette and spacing system. Follow these rules when editing styles:

1. **Overlay Cards Clearance**:
   - Any layout using absolute shifted cards (e.g., `translate-y-16`) must declare equivalent top padding on the subsequent sibling section (e.g., `lg:pt-44`) to provide sufficient clearance and prevent text overlap.
2. **HSL Tailwind v4 Custom Palette**:
   - `--color-primary-dark` (`#0B132B` / `#1C2541` Navy)
   - `--color-brand-gold` (`#C5A880` Metallic Accent Gold)
   - `--color-brand-teal` (`#00A8C6` Active Teal)
   - `--color-app-bg` / `--color-app-fg` (Light/Dark mode standard colors)

---

## 4. Local Development & Commands

Ensure you are inside the active workspace directory `c:\krimatix\code\arrowheadigc\arrowheadigc`.

### Installing Dependencies
Install project node modules:
```bash
npm install
```

### Running the Dev Server
Launch local developer instance:
```bash
npm run dev
```
By default, the server will output log lines identifying the local URL. It will start on **`http://localhost:3000`** (or fall back to **`http://localhost:3001`** if port 3000 is occupied).

### Resolving Port Conflicts
If you make changes to files but do not see them updated on `http://localhost:3000`, check if another background process is running on that port:
1. Identify listening ports (PowerShell):
   ```powershell
   Get-NetTCPConnection -LocalPort 3000, 3001 | Select-Object LocalPort, OwningProcess, State
   ```
2. Identify the folder of the running node server:
   ```powershell
   Get-CimInstance Win32_Process -Filter "ProcessId = <PID>" | Select-Object CommandLine
   ```
3. If necessary, close the conflicting process to free up port 3000.

### Building for Production
To build and optimize the site for static hosting:
```bash
npm run build
```
This compile script runs TypeScript check validation, collects layout assets, and prerenders the static HTML paths in the `.next` output directory.
