'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const LiveIsometric3DShowcase = dynamic(() => import('@/components/LiveIsometric3DShowcase'), { ssr: false });


const EditorialMasonry = dynamic(() => import('@/components/showcases/EditorialMasonry'), { ssr: false });
const HorizontalFilmstrip = dynamic(() => import('@/components/showcases/HorizontalFilmstrip'), { ssr: false });
const SplitActiveShowcase = dynamic(() => import('@/components/showcases/SplitActiveShowcase'), { ssr: false });
const IsometricPerspectiveGrid = dynamic(() => import('@/components/showcases/IsometricPerspectiveGrid'), { ssr: false });
const CinematicSlider = dynamic(() => import('@/components/showcases/CinematicSlider'), { ssr: false });

const CinematicHeroCarousel = dynamic(() => import('@/components/CinematicHeroCarousel'), { ssr: false });
const CadRevealSlider = dynamic(() => import('@/components/showcases/CadRevealSlider'), { ssr: false });
const StackedDeckShowcase = dynamic(() => import('@/components/showcases/StackedDeckShowcase'), { ssr: false });
const BuildTimelineShowcase = dynamic(() => import('@/components/showcases/BuildTimelineShowcase'), { ssr: false });
const FactsheetGrid = dynamic(() => import('@/components/showcases/FactsheetGrid'), { ssr: false });
const CinematicSpecGrid = dynamic(() => import('@/components/showcases/CinematicSpecGrid'), { ssr: false });
const Rotating3DCarousel = dynamic(() => import('@/components/showcases/Rotating3DCarousel'), { ssr: false });
const CollageBoxShowcase = dynamic(() => import('@/components/showcases/CollageBoxShowcase'), { ssr: false });
const ArchitecturalPortfolio = dynamic(() => import('@/components/showcases/ArchitecturalPortfolio'), { ssr: false });
const SpotlightRevealGrid = dynamic(() => import('@/components/showcases/SpotlightRevealGrid'), { ssr: false });
const PanoramicCarousel = dynamic(() => import('@/components/showcases/PanoramicCarousel'), { ssr: false });
const GeographicMapExplorer = dynamic(() => import('@/components/showcases/GeographicMapExplorer'), { ssr: false });
const ExplodedViewInspector = dynamic(() => import('@/components/showcases/ExplodedViewInspector'), { ssr: false });
const ProjectControlCenter = dynamic(() => import('@/components/showcases/ProjectControlCenter'), { ssr: false });
const MinimalCardGrid = dynamic(() => import('@/components/showcases/MinimalCardGrid'), { ssr: false });
const WidescreenEditorialSlider = dynamic(() => import('@/components/showcases/WidescreenEditorialSlider'), { ssr: false });
const AlternatingAsymmetricGrid = dynamic(() => import('@/components/showcases/AlternatingAsymmetricGrid'), { ssr: false });

import HomepageRfqCalculator from '@/components/HomepageRfqCalculator';
import MunicipalRoadmapTracker from '@/components/MunicipalRoadmapTracker';
import MapExplorerWidget from '@/components/MapExplorerWidget';

interface ServiceDetail {
  title: string;
  tagline: string;
  desc: string;
  checklist: string[];
  specs: { label: string; value: string }[];
  authority: string;
  href: string;
  image: string;
}

export default function HomeClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const testimonials = [
    {
      quote: "Managing the construction of a bespoke luxury residence on Saadiyat Island required extreme care, especially regarding Estidama Pearl-3 envelope calculations and dry-clad facade coordination. ArrowHead acted as a Class-I contractor of the highest caliber, managing inspections and delivery with absolute professionalism.",
      author: "Faisal Al Mansoori",
      role: "Private Villa Owner",
      project: "Saadiyat Island Custom Estate",
      rating: 5,
      avatar: "FA"
    },
    {
      quote: "ArrowHead executed the DN 1200mm PE100 gravity trunk sewer tie-in for our infrastructure package on Yas Island. Under extreme groundwater saline pressures, their certified fusion operators welded and tested over 800 linear meters of pipeline. The hydraulic tests passed first time with zero leakage logs.",
      author: "Eng. Tariq Al Hammadi",
      role: "Senior Infrastructure Consultant",
      project: "Yas Island Sewerage Trunk Line",
      rating: 5,
      avatar: "TH"
    },
    {
      quote: "We chose ArrowHead for our logistics hub preventive MEP maintenance AMC and Civil Defense approvals checklist. Their remote technicians are equipped with calibrated thermal DB board scanners and act fast on chiller load adjustments, ensuring zero downtime for our refrigeration yards.",
      author: "Dieter Werner",
      role: "Director of Asset Operations",
      project: "Mussafah Logistics & Cold Chain Hub",
      rating: 5,
      avatar: "DW"
    }
  ];

  const stats = [
    { value: '15+', label: 'Years UAE Operations' },
    { value: '120+', label: 'Projects Handed Over' },
    { value: '100%', label: 'HSE Safety Record' },
    { value: 'Class I', label: 'Abu Dhabi Classifications' },
  ];

  const serviceCapabilities: Record<string, ServiceDetail> = {
    pipelines: {
      title: 'HDPE Pipelines (Supply & Installation)',
      tagline: 'Precision welding and trenchless installation for pressure networks.',
      desc: 'We deliver complete HDPE pipeline scopes from DN 110mm to DN 1200mm. Operating state-of-the-art hydraulic butt-fusion and electrofusion welding units, our certified crews execute water mains, fire protection lines, and gravity sewers under severe site constraints.',
      checklist: [
        'Butt-fusion welding certified to DVS 2207 specifications',
        'Electrofusion sleeve jointing & computerized log outputs',
        'Trenchless Horizontal Directional Drilling (HDD) alignment',
        'Hydrostatic testing (up to PN25) & chemical disinfection',
      ],
      specs: [
        { label: 'Material Grade', value: 'PE100 / PE100-RC' },
        { label: 'Compliance Code', value: 'ADSSC & ADDC Standard Drawings' },
        { label: 'Weld Recording', value: 'Parameters Logged per Joint' },
      ],
      authority: 'ADSSC & ADDC Approved Materials',
      href: '/services/hdpe-pipelines',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    },
    villas: {
      title: 'Luxury Villa Construction',
      tagline: 'Turnkey residential design-build contracting in Abu Dhabi.',
      desc: 'From initial spatial rendering to final structural casting and fine fit-out, we manage the complete custom villa lifecycle. We coordinate engineering approvals, dewatering setups, and structural reinforcements to deliver premium custom homes.',
      checklist: [
        'Architectural spatial modeling & 3D visualizations',
        'Reinforced concrete foundations, rafts, and columns casting',
        'Estidama Pearl compliance rating consultations',
        'Custom high-end marble fit-outs & luxury plastering',
      ],
      specs: [
        { label: 'Approvals', value: 'Abu Dhabi Municipality Permits' },
        { label: 'Green Codes', value: 'Estidama 1 to 3 Pearl Ratings' },
        { label: 'Finishing Scopes', value: 'In-house Joinery & Masonry' },
      ],
      authority: 'ADM Building Regulations Aligned',
      href: '/services/villa-construction',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80',
    },
    renovations: {
      title: 'Villa Renovation & Extensions',
      tagline: 'Structural additions, Majlis builds, and cosmetic remodeling.',
      desc: 'Upgrade your home layout safely. We construct reinforced concrete extensions, guest bedrooms, detached Majlis blocks, boundary walls, and pools, managing all structural calculations and DED municipal permit renewals.',
      checklist: [
        'Structural load calculations & column additions',
        'Modern majlis constructions & customized steel gate fits',
        'Damp remediation & comprehensive waterproofing',
        'TAMM permit processing & structural inspection clearances',
      ],
      specs: [
        { label: 'Locations', value: 'Khalifa City, Yas Island, Al Raha' },
        { label: 'Structure', value: 'Structural steel I-beams integration' },
        { label: 'Clearance', value: 'Legal Occupancy Certificate updates' },
      ],
      authority: 'Complete TAMM Permit Handling',
      href: '/services/villa-renovation',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    },
    fm: {
      title: 'Facility Management (Hard & Soft)',
      tagline: 'Structured Annual Maintenance Contracts protecting building lifecycle.',
      desc: 'Keep your building assets performing at peak efficiency. We provide complete Hard FM covering mechanical preventive care, AC/chiller troubleshooting, DB board thermal imaging, and plumbing checks, alongside Soft FM services.',
      checklist: [
        'MEP preventative maintenance checkups & logs',
        'HVAC condenser coil chemical washes & balancing',
        'Pest control approved by Abu Dhabi Municipality',
        '24/7 helpline access & emergency technician dispatches',
      ],
      specs: [
        { label: 'AMC Models', value: 'Custom SLAs for Commercial' },
        { label: 'Emergency SLAs', value: 'Under 2-4 Hours Dispatch' },
        { label: 'Equipment Checks', value: 'Infrared Thermography DB scanning' },
      ],
      authority: 'Licensed by Abu Dhabi Municipality',
      href: '/services/facility-management',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
    },
    mep: {
      title: 'MEP & Specialized Works',
      tagline: 'Technical engineering for mechanical, electrical, and fire safety systems.',
      desc: 'We execute specialized building service installations for commercial fit-outs and plant retrofits. Sizing distribution boards, manufacturing air ducts, installing booster pumps, and placing wet fire sprinklers to meet safety codes.',
      checklist: [
        'HVAC double-skin GI duct routing & balancing',
        'Electrical main board sizing, dressing & dressing inspections',
        'Sprinklers & FM200 clean gas suppression installs',
        'Chilled water pipelines & pump room installations',
      ],
      specs: [
        { label: 'Electrical Codes', value: 'ADDC Electrical Installations' },
        { label: 'Safety Code', value: 'Civil Defense (ADCD) Approvals' },
        { label: 'Plumbing standard', value: 'IPC / ADDC Water Specifications' },
      ],
      authority: 'Abu Dhabi Civil Defense Certified',
      href: '/services/mep-specialized',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    },
    marine: {
      title: 'Marine & Industrial Works',
      tagline: 'Heavy engineering inside Port and Industrial city zones.',
      desc: 'Delivering durable construction to survive corrosive saline climates. We sandblast and repair marine slipways, reinforce sea walls, fabricate steel warehouse frames, and layout piping loops in Mussafah, ICAD, and Ports.',
      checklist: [
        'Waterfront concrete slipway restoration under tidal rules',
        'Anti-corrosive marine epoxy painting & cathodic anodes',
        'Industrial steel warehouse fabrication & roof cladding',
        'Environment Agency Abu Dhabi (EAD) permit processing',
      ],
      specs: [
        { label: 'Materials', value: 'Microsilica C50/60 Concrete' },
        { label: 'Steel Code', value: 'BS EN 1090-2 Fabrications' },
        { label: 'Zones Served', value: 'Mussafah Port, ICAD, Industrial' },
      ],
      authority: 'EAD & Port Authority Coordinated',
      href: '/services/marine-industrial',
      image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=600&q=80',
    },
  };

  const featuredProjects = [
    {
      title: 'Yas Island HDPE Trunk Sewerage Connection',
      category: 'HDPE Pipelines',
      desc: 'Supply and installation of 4.8km of PE100 HDPE trunk sewerage lines (1200mm diameter), including hydrostatic testing and ADSSC certifications.',
      stats: '4.8km Length | DN 1200mm | ADSSC Approved',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Al Raha Gardens Premium Turnkey Villa',
      category: 'Villa Construction',
      desc: 'Complete design-build of a contemporary luxury 6-bedroom villa. Featuring double-height glazing, custom joinery, smart lighting, and an Estidama 2-Pearl rating.',
      stats: '12,500 sq ft | Design-Build | 2-Pearl Estidama',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Mussafah Industrial Factory Hard FM',
      category: 'Facility Management',
      desc: 'Annual maintenance contract (AMC) for integrated hard services. Maintaining HVAC chiller plants, electrical switchgear distributions, pumps, and fire protection systems.',
      stats: '15,000 sqm Managed | 24/7 Support | Hard FM',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const homeFaqs = [
    {
      q: 'Is ArrowHead registered with Abu Dhabi utility authorities?',
      a: 'Yes. ArrowHead is registered under Abu Dhabi Department of Economic Development (DED License: CN-4998977) and is fully aligned with the design, testing, and materials specifications of the Abu Dhabi Sewerage Services Company (ADSSC) and the Abu Dhabi Distribution Company (ADDC).',
    },
    {
      q: 'What regions of the UAE does ArrowHead operate in?',
      a: 'While our main head office is located in Mussafah, Abu Dhabi (Prestige Towers), we execute large-scale contracting projects, MEP works, and facility management across all primary zones in Abu Dhabi (including Yas Island, Khalifa City, Saadiyat, Al Raha) as well as selected industrial and luxury residential sites in Dubai.',
    },
    {
      q: 'Can you handle the permit and approval process for villa construction or extensions?',
      a: 'Absolutely. We offer complete turnkey services. This includes preparing structural drafts, architectural elevations, Estidama submissions, and securing approvals from the Abu Dhabi Municipality, Civil Defense, and local utility providers via the TAMM portal.',
    },
    {
      q: 'Do you work as a subcontractor or direct contractor for pipeline welding?',
      a: 'We work as both. ArrowHead functions as a primary general contractor for utility networks, and as a specialized subcontractor for complex butt-fusion and electrofusion welding of HDPE water/sewer pipelines from DN 110mm to DN 1200mm.',
    },
  ];

  return (
    <div id="home-page-container" className="bg-app-bg text-app-fg transition-colors duration-200">

      {/* 1C-D. HERO SECTION - OPTION D: Cinematic Video/Image Hero Carousel */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden border-b border-app-border bg-primary-dark -mt-20">
        <CinematicHeroCarousel />
      </section>

      {/* 1A. HERO SECTION - OPTION A: CSS 3D Isometric Parallax */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-24 pb-20 sm:pb-28 border-b border-app-border bg-app-bg">
        {/* Version Badge */}
        {/* <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 bg-brand-teal/10 border border-brand-teal/30 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-brand-teal flex items-center gap-1.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-ping"></span>
          Hero Option A: CSS 3D Isometric Parallax Stack (Lightweight)
        </div> */}

        {/* Soft Depth Gradients */}
        <div className="absolute top-1/4 right-0 w-[45%] h-[55%] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-[30%] h-[30%] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

            {/* Hero Left: Text & Action */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 border border-brand-gold/20 rounded">
                  DED License: CN-4998977 • Abu Dhabi
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.15]">
                  Engineering Value &<br />
                  <span className="text-brand-teal">Prestige Structures</span><br />
                  <span className="font-light italic text-brand-gold">in Abu Dhabi</span>
                </h1>
              </div>

              <p className="text-app-muted text-sm sm:text-base leading-relaxed font-sans font-light max-w-xl">
                ArrowHead International General Contracting LLC delivers technical pipeline infrastructure, custom luxury villas, complex MEP configurations, and integrated facilities management built to ADSSC &amp; ADDC standards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact?rfq=true"
                  className="inline-flex items-center justify-center px-8 py-4 rounded bg-brand-teal hover:bg-brand-teal-hover text-primary-dark font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-teal/20 transition-all duration-300 cursor-pointer"
                >
                  Request a Proposal
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 rounded bg-app-card border border-app-border text-app-fg font-bold text-xs uppercase tracking-wider hover:border-brand-teal/50 hover:bg-app-secondary transition-all duration-300 cursor-pointer"
                >
                  Explore Case Studies
                </Link>
              </div>

              {/* Structural engineering bullet highlights */}
              <div className="pt-6 grid grid-cols-2 gap-4 border-t border-app-border max-w-lg">
                <div className="flex items-center space-x-2.5">
                  <span className="text-brand-teal text-base font-bold">✓</span>
                  <span className="text-xs font-semibold text-app-fg/90">ADSSC / ADDC Compliant</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="text-brand-teal text-base font-bold">✓</span>
                  <span className="text-xs font-semibold text-app-fg/90">Estidama Aligned Builds</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="text-brand-teal text-base font-bold">✓</span>
                  <span className="text-xs font-semibold text-app-fg/90">In-house Welding Crews</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="text-brand-teal text-base font-bold">✓</span>
                  <span className="text-xs font-semibold text-app-fg/90">Civil Defense Approved</span>
                </div>
              </div>
            </div>

            {/* Hero Right: 3D Interactive Isometric Showcase */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
              {/* <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[3/4]"> */}
              {/* Underlay Offset Border */}
              {/* <div className="absolute inset-0 border-2 border-brand-gold/30 translate-x-6 translate-y-6 rounded-lg pointer-events-none"></div> */}

              {/* Main Large Image */}
              {/* <div className="absolute inset-0 rounded-lg overflow-hidden border border-app-border shadow-2xl bg-app-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                    alt="AHIGC Civil Project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div> */}

              {/* Overlapping Small Architectural Frame */}
              {/* <div className="absolute -bottom-8 -left-8 w-[180px] sm:w-[220px] aspect-square rounded-lg overflow-hidden border-4 border-app-card shadow-2xl offset-border-frame">
                  <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80"
                    alt="Luxury Residential Build"
                    className="w-full h-full object-cover"
                  />
                </div> */}

              {/* Bottom Label Badge */}
              {/* <div className="absolute bottom-4 right-4 bg-app-card/95 backdrop-blur-xs border border-app-border rounded p-3 text-[10px] uppercase font-mono tracking-wider shadow-md">
                  <span className="text-brand-gold font-bold">Authorized Contractor</span>
                  <span className="block text-app-fg font-light mt-0.5">Mussafah, Abu Dhabi</span>
                </div>
              </div> */}
              <LiveIsometric3DShowcase />
            </div>

          </div>
        </div>
      </section>

      {/* 1A (Reversed). HERO SECTION - OPTION A: CSS 3D Isometric Parallax (Reversed Layout) */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-24 pb-20 sm:pb-28 border-b border-app-border bg-app-bg">
        {/* Soft Depth Gradients (Reversed) */}
        <div className="absolute top-1/4 left-0 w-[45%] h-[55%] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[30%] h-[30%] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

            {/* Hero Left: 3D Interactive Isometric Showcase (Reversed Position) */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative mt-6 lg:mt-0 flex justify-center lg:justify-start">
              <LiveIsometric3DShowcase facing="right" />
            </div>

            {/* Hero Right: Text & Action (Reversed Position) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 lg:pl-8 lg:flex lg:flex-col lg:items-end text-right">
              <div className="space-y-4 lg:flex lg:flex-col lg:items-end">
                <span className="inline-flex items-center px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 border border-brand-gold/20 rounded">
                  DED License: CN-4998977 • Abu Dhabi
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.15]">
                  Engineering Value &<br />
                  <span className="text-brand-teal">Prestige Structures</span><br />
                  <span className="font-light italic text-brand-gold">in Abu Dhabi</span>
                </h2>
              </div>

              <p className="text-app-muted text-sm sm:text-base leading-relaxed font-sans font-light max-w-xl">
                ArrowHead International General Contracting LLC delivers technical pipeline infrastructure, custom luxury villas, complex MEP configurations, and integrated facilities management built to ADSSC &amp; ADDC standards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact?rfq=true"
                  className="inline-flex items-center justify-center px-8 py-4 rounded bg-brand-teal hover:bg-brand-teal-hover text-primary-dark font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-teal/20 transition-all duration-300 cursor-pointer"
                >
                  Request a Proposal
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 rounded bg-app-card border border-app-border text-app-fg font-bold text-xs uppercase tracking-wider hover:border-brand-teal/50 hover:bg-app-secondary transition-all duration-300 cursor-pointer"
                >
                  Explore Case Studies
                </Link>
              </div>

              {/* Structural engineering bullet highlights */}
              <div className="pt-6 grid grid-cols-2 gap-4 border-t border-app-border max-w-lg w-full">
                <div className="flex items-center space-x-2.5 lg:justify-end">
                  <span className="text-brand-teal text-base font-bold">✓</span>
                  <span className="text-xs font-semibold text-app-fg/90">ADSSC / ADDC Compliant</span>
                </div>
                <div className="flex items-center space-x-2.5 lg:justify-end">
                  <span className="text-brand-teal text-base font-bold">✓</span>
                  <span className="text-xs font-semibold text-app-fg/90">Estidama Aligned Builds</span>
                </div>
                <div className="flex items-center space-x-2.5 lg:justify-end">
                  <span className="text-brand-teal text-base font-bold">✓</span>
                  <span className="text-xs font-semibold text-app-fg/90">In-house Welding Crews</span>
                </div>
                <div className="flex items-center space-x-2.5 lg:justify-end">
                  <span className="text-brand-teal text-base font-bold">✓</span>
                  <span className="text-xs font-semibold text-app-fg/90">Civil Defense Approved</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

{/* 1A. HERO SECTION - OPTION A: CSS 3D Isometric Parallax */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-24 pb-20 sm:pb-28 border-b border-app-border bg-app-bg">
        {/* Version Badge */}
        {/* <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 bg-brand-teal/10 border border-brand-teal/30 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-brand-teal flex items-center gap-1.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-ping"></span>
          Hero Option A: CSS 3D Isometric Parallax Stack (Lightweight)
        </div> */}

        {/* Soft Depth Gradients */}
        <div className="absolute top-1/4 right-0 w-[45%] h-[55%] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-[30%] h-[30%] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

            {/* Hero Left: Text & Action */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 border border-brand-gold/20 rounded">
                  DED License: CN-4998977 • Abu Dhabi
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.15]">
                  Engineering Value &<br />
                  <span className="text-brand-teal">Prestige Structures</span><br />
                  <span className="font-light italic text-brand-gold">in Abu Dhabi</span>
                </h1>
              </div>

              <p className="text-app-muted text-sm sm:text-base leading-relaxed font-sans font-light max-w-xl">
                ArrowHead International General Contracting LLC delivers technical pipeline infrastructure, custom luxury villas, complex MEP configurations, and integrated facilities management built to ADSSC &amp; ADDC standards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact?rfq=true"
                  className="inline-flex items-center justify-center px-8 py-4 rounded bg-brand-teal hover:bg-brand-teal-hover text-primary-dark font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-teal/20 transition-all duration-300 cursor-pointer"
                >
                  Request a Proposal
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 rounded bg-app-card border border-app-border text-app-fg font-bold text-xs uppercase tracking-wider hover:border-brand-teal/50 hover:bg-app-secondary transition-all duration-300 cursor-pointer"
                >
                  Explore Case Studies
                </Link>
              </div>

              {/* Structural engineering bullet highlights */}
              <div className="pt-6 grid grid-cols-2 gap-4 border-t border-app-border max-w-lg">
                <div className="flex items-center space-x-2.5">
                  <span className="text-brand-teal text-base font-bold">✓</span>
                  <span className="text-xs font-semibold text-app-fg/90">ADSSC / ADDC Compliant</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="text-brand-teal text-base font-bold">✓</span>
                  <span className="text-xs font-semibold text-app-fg/90">Estidama Aligned Builds</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="text-brand-teal text-base font-bold">✓</span>
                  <span className="text-xs font-semibold text-app-fg/90">In-house Welding Crews</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="text-brand-teal text-base font-bold">✓</span>
                  <span className="text-xs font-semibold text-app-fg/90">Civil Defense Approved</span>
                </div>
              </div>
            </div>

            {/* Hero Right: 3D Interactive Isometric Showcase */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
              {/* <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[3/4]"> */}
              {/* Underlay Offset Border */}
              {/* <div className="absolute inset-0 border-2 border-brand-gold/30 translate-x-6 translate-y-6 rounded-lg pointer-events-none"></div> */}

              {/* Main Large Image */}
              {/* <div className="absolute inset-0 rounded-lg overflow-hidden border border-app-border shadow-2xl bg-app-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                    alt="AHIGC Civil Project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div> */}

              {/* Overlapping Small Architectural Frame */}
              {/* <div className="absolute -bottom-8 -left-8 w-[180px] sm:w-[220px] aspect-square rounded-lg overflow-hidden border-4 border-app-card shadow-2xl offset-border-frame">
                  <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80"
                    alt="Luxury Residential Build"
                    className="w-full h-full object-cover"
                  />
                </div> */}

              {/* Bottom Label Badge */}
              {/* <div className="absolute bottom-4 right-4 bg-app-card/95 backdrop-blur-xs border border-app-border rounded p-3 text-[10px] uppercase font-mono tracking-wider shadow-md">
                  <span className="text-brand-gold font-bold">Authorized Contractor</span>
                  <span className="block text-app-fg font-light mt-0.5">Mussafah, Abu Dhabi</span>
                </div>
              </div> */}
              <LiveIsometric3DShowcase />
            </div>

          </div>
        </div>
      </section>
      
      {/* 1C-E. HERO SECTION - OPTION E: Three Business Verticals Overlay Hero */}
      <section className="relative min-h-screen lg:h-screen flex flex-col justify-between overflow-visible bg-primary-dark pb-16 border-b border-app-border">
        {/* Background Image Container */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80')` }}>
          {/* Dark Architectural Brochure Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35"></div>
        </div>

        {/* Hero Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center w-full pt-32 pb-24">
          <div className="max-w-3xl space-y-6 text-left">
            <span className="inline-flex items-center px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 border border-brand-teal/20 rounded">
              DED License: CN-4998977 • Abu Dhabi General Contracting
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1] uppercase">
              Building<br />
              Abu Dhabi&apos;s Future.
            </h2>

            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-sans font-light max-w-2xl">
              Expertise in Luxury Villas, Infrastructure, and Specialized Engineering. Delivering premium turnkey contracting and certified utility pipeline installations.
            </p>

            <div className="pt-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded bg-brand-teal hover:bg-brand-teal-hover text-primary-dark font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-brand-teal/20 transition-all duration-300 cursor-pointer"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Overlapping Three Business Verticals Cards Row */}
        <div className="w-full relative z-25 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 translate-y-12 sm:translate-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1: Villa Construction */}
            <div className="bg-app-card border border-app-border rounded-xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between hover:border-brand-teal hover:-translate-y-3 hover:shadow-lg hover:shadow-brand-teal/10 transition-all duration-300 group cursor-pointer">
              <div className="space-y-4">
                {/* SVG Home Icon */}
                <div className="w-12 h-12 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-heading font-extrabold text-app-fg uppercase tracking-tight">
                    Villa Construction
                  </h3>
                  <p className="text-xs text-app-muted font-light leading-relaxed mt-2">
                    Villa construction offers complete turnkey expertise in luxury villas, structural castings, and specialized civil engineering works under municipality guidelines.
                  </p>
                </div>
              </div>
              <span className="block text-[9px] font-mono text-brand-gold uppercase tracking-widest font-bold border-t border-app-border/60 pt-4 mt-6">
                Abu Dhabi Municipality Approved
              </span>
            </div>

            {/* Card 2: HDPE Pipe Systems */}
            <div className="bg-app-card border border-app-border rounded-xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between hover:border-brand-teal hover:-translate-y-3 hover:shadow-lg hover:shadow-brand-teal/10 transition-all duration-300 group cursor-pointer">
              <div className="space-y-4">
                {/* SVG Pipeline/Welding Icon */}
                <div className="w-12 h-12 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-heading font-extrabold text-app-fg uppercase tracking-tight">
                    HDPE Pipe Systems
                  </h3>
                  <p className="text-xs text-app-muted font-light leading-relaxed mt-2">
                    Expertise in water network supply, computerized butt-fusion welding, and high-pressure infrastructure pipeline connections certified to ADSSC standard drawings.
                  </p>
                </div>
              </div>
              <span className="block text-[9px] font-mono text-brand-teal uppercase tracking-widest font-bold border-t border-app-border/60 pt-4 mt-6">
                ADSSC &amp; ADDC Materials Aligned
              </span>
            </div>

            {/* Card 3: Facility Management */}
            <div className="bg-app-card border border-app-border rounded-xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between hover:border-brand-teal hover:-translate-y-3 hover:shadow-lg hover:shadow-brand-teal/10 transition-all duration-300 group cursor-pointer">
              <div className="space-y-4">
                {/* SVG Gear/Wrench Icon */}
                <div className="w-12 h-12 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-heading font-extrabold text-app-fg uppercase tracking-tight">
                    Facility Management
                  </h3>
                  <p className="text-xs text-app-muted font-light leading-relaxed mt-2">
                    Structured hard and soft facility management AMC contracts. Protecting mechanical, electrical, and HVAC building systems with rapid 24/7 dispatch dispatches.
                  </p>
                </div>
              </div>
              <span className="block text-[9px] font-mono text-brand-gold uppercase tracking-widest font-bold border-t border-app-border/60 pt-4 mt-6">
                24/7 Response SLA Guarantee
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS & CLIENT TICKER ROW */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-12 bg-app-secondary border-y border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center lg:text-left border-r last:border-r-0 border-app-border/60 px-4">
                <span className="block text-4xl sm:text-5xl font-heading font-light text-brand-teal">
                  {stat.value}
                </span>
                <span className="block text-[10px] sm:text-xs text-app-muted font-bold tracking-widest uppercase mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Client Compliance Ticker */}
          <div className="pt-8 border-t border-app-border/60 text-center">
            <span className="text-[10px] font-bold text-app-muted uppercase tracking-widest block mb-4">
              Direct Utility &amp; Licensing Compliance
            </span>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs font-semibold text-app-fg/70">
              <span className="px-3.5 py-1.5 rounded bg-app-bg border border-app-border">ADSSC Approved</span>
              <span className="px-3.5 py-1.5 rounded bg-app-bg border border-app-border">ADDC Compliant</span>
              <span className="px-3.5 py-1.5 rounded bg-app-bg border border-app-border">ADM Registered</span>
              <span className="px-3.5 py-1.5 rounded bg-app-bg border border-app-border">Civil Defense (ADCD)</span>
              <span className="px-3.5 py-1.5 rounded bg-app-bg border border-app-border">Estidama Aligned</span>
            </div>
          </div>
        </div>
      </section>

      {/* 1D. PROJECT IMAGERY SHOWCASE: 21 UI/UX DESIGN STYLES */}
      <section className="pt-24 border-b border-app-border relative bg-app-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section title */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">
              Design Galleries
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-app-fg tracking-tight">
              Project Imagery
              {/* Project Imagery: 21 UI/UX Styles */}
            </h2>
            <div className="w-16 h-0.5 bg-brand-teal mx-auto mt-2"></div>
            <p className="text-app-muted text-sm leading-relaxed font-light pt-2">
              {/* ArrowHead presents 21 premium UI/UX layouts for displaying project imagery. Scroll down to compare the look and choose the best layout structure. */}
            </p>
          </div>

          {/* Style A: Editorial Masonry */}
          <div className="space-y-6 mb-24">
            {/* <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded">STYLE A</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Asymmetrical Magazine Editorial Masonry</h3>
            </div> */}
            <EditorialMasonry />
          </div>
          </div>
          </section>

{/* 3. CAPABILITIES PORTFOLIO (High-End Grid Layout) */}
      <section className="pt-24 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-3">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">
              Operational Divisions
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-app-fg tracking-tight">
              Capabilities &amp; Technical Divisions
            </h2>
            <div className="w-16 h-0.5 bg-brand-teal mx-auto mt-2"></div>
            <p className="text-app-muted text-sm leading-relaxed font-light pt-2">
              ArrowHead coordinates specialized engineering groups managing distinct utility, residential, and industrial scopes across Abu Dhabi and the wider UAE market.
            </p>
          </div>

          {/* 6-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Object.entries(serviceCapabilities).map(([key, service]) => (
              <div
                key={key}
                className="group relative flex flex-col justify-between bg-app-card border border-app-border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 offset-border-frame"
              >
                <div className="space-y-5">
                  {/* Division Image with asymmetric aspect */}
                  <div className="aspect-[16/10] w-full rounded overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-brand-teal text-primary-dark text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                      {service.authority}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-app-fg group-hover:text-brand-teal transition-colors">
                      {service.title}
                    </h3>
                    <span className="block text-[10px] font-semibold text-brand-gold uppercase tracking-wider font-mono">
                      {service.tagline}
                    </span>
                    <p className="text-app-muted text-xs leading-relaxed font-light pt-1">
                      {service.desc}
                    </p>
                  </div>

                  {/* Scope Checklist */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-app-fg/80 block">
                      Core Operations
                    </span>
                    <ul className="space-y-1.5 text-[11px] text-app-muted font-light">
                      {service.checklist.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-brand-teal mr-2 font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spec details row */}
                <div className="mt-6 pt-4 border-t border-app-border flex justify-between items-center">
                  <div className="text-[10px] text-app-muted">
                    <span className="block font-bold uppercase tracking-wider text-[8px] text-app-muted/60">Specification</span>
                    <span className="text-app-fg font-medium mt-0.5 block">{service.specs[0].value}</span>
                  </div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-xs font-bold text-brand-teal hover:text-brand-teal-hover transition-colors uppercase tracking-wider font-heading"
                  >
                    <span>Details</span>
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
          
      <section className="py-24 border-b border-app-border relative bg-app-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Style B: Horizontal Filmstrip */}
          {/* <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE B</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Smooth Horizontal Filmstrip Carousel</h3>
            </div>
            <HorizontalFilmstrip />
          </div> */}

          {/* Style C: Split Category Tabs */}
          <div className="space-y-6 mb-24">
            {/* <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded">STYLE C</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Split Screen Category Hover Active Tabs</h3>
            </div> */}
            <SplitActiveShowcase />
          </div>

          {/* Style D: Isometric 3D Perspective Card Grid */}
          {/* <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded">STYLE D</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">3D Isometric Perspective Tilt Cards</h3>
            </div>
            <IsometricPerspectiveGrid />
          </div> */}

          {/* Style E: Cinematic Progress Slider */}
          <div className="space-y-6">
            {/* <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE E</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Cinematic Widescreen Progress Bar Slideshow</h3>
            </div> */}
            <CinematicSlider />
          </div>

          {/* Style F: Drag-to-Reveal CAD Slider */}
          {/* <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded">STYLE F</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Interactive Drag-to-Reveal CAD Blueprint vs. Finished Build</h3>
            </div>
            <CadRevealSlider />
          </div> */}

          {/* Style G: Tactile Stacked Card Deck */}
          {/* <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE G</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Tactile Stacked Project Card Deck</h3>
            </div>
            <StackedDeckShowcase />
          </div> */}

          {/* Style H: Progressive Build Timeline Phase Switcher */}
          {/* <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded">STYLE H</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Progressive Build Timeline Phase Switcher</h3>
            </div>
            <BuildTimelineShowcase />
          </div> */}

          {/* Style I: Tabular Factsheet Grid Row Hover */}
          {/* <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE I</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Tabular Factsheet Grid Row Hover</h3>
            </div>
            <FactsheetGrid />
          </div> */}

          {/* Style J: Cinematic Spec Card Grid */}
          <div className="space-y-6 mb-24">
            {/* <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded">STYLE J</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Cinematic Spec Card Grid</h3>
            </div> */}
            <CinematicSpecGrid />
          </div>

          {/* Style K: Rotating 3D Card Ring Carousel */}
          {/* <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded">STYLE K</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Rotating 3D Card Ring Carousel</h3>
            </div>
            <Rotating3DCarousel />
          </div> */}

          {/* Style L: Asymmetric Random-Sized Collage Grid */}
          {/* <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE L</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Asymmetric Random-Sized Collage Grid</h3>
            </div>
            <CollageBoxShowcase />
          </div> */}

          {/* Style M: Architectural Portfolio Grid */}
          {/* <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded">STYLE M</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Architectural Portfolio Grid</h3>
            </div>
            <ArchitecturalPortfolio />
          </div> */}

          {/* Style N: Material Spec Spotlight Reveal Grid */}
          <div className="space-y-6 mb-24">
            {/* <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE N</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Material Spec Spotlight Reveal Grid</h3>
            </div> */}
            <SpotlightRevealGrid />
          </div>

          {/* Style O: Curved 3D Panoramic Theater Carousel */}
          {/* <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded">STYLE O</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Curved 3D Panoramic Theater Carousel</h3>
            </div>
            <PanoramicCarousel />
          </div> */}

          {/* Style P: Architectural Material Spec & Mood Board */}
          {/* <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE P</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Architectural Material Spec &amp; Mood Board</h3>
            </div>
            <GeographicMapExplorer />
          </div> */}

          {/* Style Q: Architectural Exploded-View Inspector */}
          {/* <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded">STYLE Q</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Architectural Exploded-View Inspector</h3>
            </div>
            <ExplodedViewInspector />
          </div> */}

          {/* Style R: Widescreen Editorial Showcase & Material Swatch Selector */}
          <div className="space-y-6 mb-24">
            {/* <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE R</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Widescreen Editorial Showcase &amp; Material Swatch Selector</h3>
            </div> */}
            <ProjectControlCenter />
          </div>

          {/* Style S: Minimalist Project Card Grid */}
          {/* <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded">STYLE S</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Minimalist Project Card Grid (Clean Hover Zoom)</h3>
            </div>
            <MinimalCardGrid />
          </div> */}

          {/* Style T: Widescreen Editorial Banner Slider */}
          {/* <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE T</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Widescreen Editorial Banner Slider (Clean Crossfade)</h3>
            </div>
            <WidescreenEditorialSlider />
          </div> */}

          {/* Style U: Alternating Asymmetric Grid */}
          <div className="space-y-6">
            {/* <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded">STYLE U</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Alternating Asymmetric Grid (Brochure Layout)</h3>
            </div> */}
            <AlternatingAsymmetricGrid />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ARROWHEAD */}
      <section className="py-24 bg-app-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">Value Proposition</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-app-fg tracking-tight">Why B2B Clients Choose ArrowHead</h2>
            <div className="w-16 h-0.5 bg-brand-teal mx-auto mt-2"></div>
            <p className="text-app-muted text-sm font-light leading-relaxed pt-2">
              We combine DMT Class-I general contracting status with rigorous technical quality and verified local approvals compliance to deliver flawless utility and residential networks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1: Class-I Status */}
            <div className="bg-app-card border border-app-border rounded-xl p-6 hover:border-brand-teal/40 transition-all duration-300 offset-border-frame flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-3xl block">🏆</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">Class-I DMT Registration</h4>
                <p className="text-app-muted text-xs font-light leading-relaxed">
                  Licensed by the Abu Dhabi Department of Municipalities and Transport for high-value general contracting civil projects, water pipelines, and major infrastructure tenders.
                </p>
              </div>
              <span className="text-[9px] font-mono text-brand-gold font-bold tracking-widest uppercase block pt-2 border-t border-app-border/40">
                CLASS-I REGISTERED
              </span>
            </div>

            {/* Pillar 2: 100% NOC success */}
            <div className="bg-app-card border border-app-border rounded-xl p-6 hover:border-brand-teal/40 transition-all duration-300 offset-border-frame flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-3xl block">📋</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">100% NOC Clearance Log</h4>
                <p className="text-app-muted text-xs font-light leading-relaxed">
                  End-to-end municipal permit approvals. We coordinate directly with TAMM, ADSSC, ADDC, ADM, and Civil Defense to ensure water, electrical, and occupancy approvals.
                </p>
              </div>
              <span className="text-[9px] font-mono text-brand-teal font-bold tracking-widest uppercase block pt-2 border-t border-app-border/40">
                TAMM SYSTEM INTEGRATED
              </span>
            </div>

            {/* Pillar 3: Certified Crews & Rigs */}
            <div className="bg-app-card border border-app-border rounded-xl p-6 hover:border-brand-teal/40 transition-all duration-300 offset-border-frame flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-3xl block">⚙️</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">Certified Crews &amp; Rigs</h4>
                <p className="text-app-muted text-xs font-light leading-relaxed">
                  All butt-welding and electrofusion jointing are executed by DVS 2207 and ISO certified technicians using calibrated hydraulic welding rigs with log printouts.
                </p>
              </div>
              <span className="text-[9px] font-mono text-brand-gold font-bold tracking-widest uppercase block pt-2 border-t border-app-border/40">
                DVS 2207 STANDARD
              </span>
            </div>

            {/* Pillar 4: Zero Incident HSE */}
            <div className="bg-app-card border border-app-border rounded-xl p-6 hover:border-brand-teal/40 transition-all duration-300 offset-border-frame flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-3xl block">🛡️</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">Strict Quality &amp; HSE</h4>
                <p className="text-app-muted text-xs font-light leading-relaxed">
                  Flawless safety records across all high-risk excavations, marine repairs, and heavy concrete casts. Hydrostatic testing up to PN25 witnessed by utility inspectors.
                </p>
              </div>
              <span className="text-[9px] font-mono text-brand-teal font-bold tracking-widest uppercase block pt-2 border-t border-app-border/40">
                ZERO-INCIDENT LOG
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* REGULATORY NOC SEQUENCE SECTION */}
      <section className="py-24 relative border-t border-app-border bg-app-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Regulatory Process</span>
            <h2 className="text-3xl font-heading font-extrabold tracking-tight">Municipal Approval &amp; NOC Workflows</h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-2"></div>
            <p className="text-app-muted text-sm leading-relaxed font-light pt-2">
              ArrowHead coordinates the complete approvals timeline, managing core soil tests, structural audits, utility connections, and Civil Defense safety sign-offs via the TAMM digital portal.
            </p>
          </div>
          <MunicipalRoadmapTracker />
        </div>
      </section>

      {/* 4. SECTORS SERVED (Architectural Layout) */}
      <section className="py-24 bg-app-secondary border-y border-app-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-6 space-y-3">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Markets Served</span>
              <h2 className="text-3xl font-heading font-extrabold tracking-tight">
                Engineering for Diverse Industries
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-app-muted text-sm font-light leading-relaxed">
                Whether deploying certified pipeline crews under strict municipal oversight, constructing private high-end luxury villas, or maintaining commercial workspaces, ArrowHead adapts to stringent specifications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Sector 1 */}
            <div className="bg-app-card rounded-lg overflow-hidden border border-app-border shadow-sm hover:border-brand-teal/20 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="h-48 relative overflow-hidden bg-app-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80"
                    alt="Residential & Villas"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-base font-bold text-app-fg group-hover:text-brand-teal transition-colors">Residential &amp; Villas</h3>
                  <p className="text-app-muted text-xs leading-relaxed font-light">
                    Custom luxury villa builds, high-strength concrete foundation castings, majlis extensions, and Estidama green clearances.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link href="/sectors/residential-villas" className="inline-flex items-center text-xs font-bold text-brand-teal hover:text-brand-teal-hover transition-colors uppercase tracking-widest">
                  <span>Explore Sector →</span>
                </Link>
              </div>
            </div>

            {/* Sector 2 */}
            <div className="bg-app-card rounded-lg overflow-hidden border border-app-border shadow-sm hover:border-brand-teal/20 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="h-48 relative overflow-hidden bg-app-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80"
                    alt="Industrial & Manufacturing"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-base font-bold text-app-fg group-hover:text-brand-teal transition-colors">Industrial &amp; Manufacturing</h3>
                  <p className="text-app-muted text-xs leading-relaxed font-light">
                    PE100 pipeline loops, warehouse steel fabrication, machinery foundation castings, and hard FM support in Mussafah/ICAD.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link href="/sectors/industrial-manufacturing" className="inline-flex items-center text-xs font-bold text-brand-teal hover:text-brand-teal-hover transition-colors uppercase tracking-widest">
                  <span>Explore Sector →</span>
                </Link>
              </div>
            </div>

            {/* Sector 3 */}
            <div className="bg-app-card rounded-lg overflow-hidden border border-app-border shadow-sm hover:border-brand-teal/20 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="h-48 relative overflow-hidden bg-app-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=500&q=80"
                    alt="Marine & Ports"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-base font-bold text-app-fg group-hover:text-brand-teal transition-colors">Marine &amp; Ports</h3>
                  <p className="text-app-muted text-xs leading-relaxed font-light">
                    Waterfront slipway concrete restoration, seawall crack injections, harbor block placing, and administrative block FM.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link href="/sectors/marine-ports" className="inline-flex items-center text-xs font-bold text-brand-teal hover:text-brand-teal-hover transition-colors uppercase tracking-widest">
                  <span>Explore Sector →</span>
                </Link>
              </div>
            </div>

            {/* Sector 4 */}
            <div className="bg-app-card rounded-lg overflow-hidden border border-app-border shadow-sm hover:border-brand-teal/20 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="h-48 relative overflow-hidden bg-app-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80"
                    alt="Commercial & Retail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-base font-bold text-app-fg group-hover:text-brand-teal transition-colors">Commercial &amp; Retail</h3>
                  <p className="text-app-muted text-xs leading-relaxed font-light">
                    Tenant fit-out MEP, sprinkler line relocations, HVAC chilled water balancing, and Annual Maintenance Contracts (AMC).
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link href="/sectors/commercial-retail" className="inline-flex items-center text-xs font-bold text-brand-teal hover:text-brand-teal-hover transition-colors uppercase tracking-widest">
                  <span>Explore Sector →</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GEOGRAPHIC OPERATIONAL MAP SECTION */}
      {/* <section className="py-24 relative border-t border-app-border bg-app-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Geographic Footprint</span>
            <h2 className="text-3xl font-heading font-extrabold tracking-tight">Abu Dhabi Geographic Operations Hub</h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-2"></div>
            <p className="text-app-muted text-sm leading-relaxed font-light pt-2">
              Explore ArrowHead's projects across prime neighborhood zones. Click hotspots on the map to review details of residential builds, utility installations, and facilities contracts.
            </p>
          </div>
          <MapExplorerWidget />
        </div>
      </section> */}

      {/* 5. FEATURED PROJECTS (Case Studies) */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div className="space-y-2">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Case Studies</span>
              <h2 className="text-3xl font-heading font-extrabold tracking-tight">
                Engineering Achievements in Abu Dhabi
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="/projects"
                className="inline-flex items-center text-xs font-bold text-brand-teal hover:text-brand-teal-hover transition-colors uppercase tracking-widest group"
              >
                <span>View Full Portfolio</span>
                <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-app-card rounded-lg overflow-hidden border border-app-border shadow-sm hover:border-brand-teal/20 transition-all duration-300 flex flex-col justify-between offset-border-frame"
              >
                <div>
                  <div className="h-56 bg-app-secondary relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-app-card/90 backdrop-blur-xs text-brand-teal text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border border-app-border">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-bold font-mono text-brand-gold uppercase tracking-widest block">
                      {project.stats}
                    </span>
                    <h3 className="text-base sm:text-lg font-heading font-bold text-app-fg leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-app-muted text-xs leading-relaxed font-light">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* TESTIMONIALS SECTION */}
      <section className="py-24 relative border-t border-app-border bg-app-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">Testimonials</span>
            <h2 className="text-3xl font-heading font-extrabold tracking-tight text-white">What Our B2B Partners Say</h2>
            <div className="w-16 h-0.5 bg-brand-teal mx-auto mt-2"></div>
          </div>      

          {/* Testimonials responsive grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-app-card border border-app-border rounded-2xl p-8 sm:p-10 shadow-2xl relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-teal/50 h-full group"
              >
                <span className="absolute top-4 left-6 text-brand-gold text-5xl font-serif opacity-30 select-none">“</span>
                
                <div className="space-y-6 relative z-10 text-left flex flex-col h-full justify-between">
                  {/* Quote text */}
                  <p className="text-app-fg text-sm sm:text-base leading-relaxed font-light italic flex-grow">
                    {t.quote}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4 border-t border-app-border/60 pt-6 mt-auto">
                    {/* Initial Avatar */}
                    <div className="w-12 h-12 rounded-full bg-brand-teal/15 border border-brand-teal/30 flex items-center justify-center text-brand-teal font-mono font-bold text-sm shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-none">
                        {t.author}
                      </h4>
                      <span className="text-[10px] text-brand-gold block font-mono mt-1 font-semibold uppercase">
                        {t.role}
                      </span>
                      <span className="text-[9px] text-app-muted block font-sans mt-0.5">
                        Project Ref: {t.project}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION Accordion */}
      <section className="py-24 bg-app-secondary border-t border-app-border relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">FAQ Centre</span>
            <h2 className="text-3xl font-heading font-extrabold tracking-tight">
              Contracting Questions
            </h2>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-app-card border border-app-border rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-app-fg hover:text-brand-teal focus:outline-none transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold">{faq.q}</span>
                  <svg
                    className={`w-4 h-4 text-app-muted transition-transform duration-300 shrink-0 ${activeFaq === idx ? 'rotate-180 text-brand-teal' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-96 border-t border-app-border' : 'max-h-0 pointer-events-none'
                    } overflow-hidden`}
                >
                  <p className="p-6 text-app-muted text-xs sm:text-sm leading-relaxed font-light bg-app-secondary/35">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOMEPAGE ESTIMATOR BUDGET CALCULATOR SECTION */}
      <section className="py-24 relative border-t border-app-border bg-app-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">B2B Lead Generator</span>
            <h2 className="text-3xl font-heading font-extrabold tracking-tight">Configure Your Project Budget</h2>
            <div className="w-16 h-0.5 bg-brand-teal mx-auto mt-2"></div>
            <p className="text-app-muted text-sm leading-relaxed font-light pt-2">
              Select your contracting division below, specify project scope metrics, and review standard cost structures, labor ratios, and municipal permitting allocations.
            </p>
          </div>
          <HomepageRfqCalculator />
        </div>
      </section>

      {/* 7. BOTTOM LEAD GENERATOR */}
      <section className="py-24 border-t border-app-border relative overflow-hidden bg-app-card">
        {/* Soft Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-tight">
            Ready to Begin Your Next Project <br />
            in Abu Dhabi?
          </h2>
          <p className="text-app-muted text-sm sm:text-base max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Partner with a fully licensed general contracting firm that complies with ADSSC &amp; ADDC engineering standards. Submit your project requirements to our estimation team in Mussafah today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact?rfq=true"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded bg-brand-teal text-primary-dark hover:bg-brand-teal-hover font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-teal/20 transition-all duration-300 cursor-pointer"
            >
              Request a Technical Quote
            </Link>
            <Link
              href="tel:+97125545230"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded bg-app-card border border-app-border text-app-fg font-bold text-xs uppercase tracking-wider hover:bg-app-secondary transition-all duration-300 cursor-pointer"
            >
              Call Engineering Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}