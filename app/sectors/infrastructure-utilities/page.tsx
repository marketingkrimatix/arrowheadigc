import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import HorizontalFilmstrip from '@/components/showcases/HorizontalFilmstrip';
import BuildTimelineShowcase from '@/components/showcases/BuildTimelineShowcase';
import FactsheetGrid from '@/components/showcases/FactsheetGrid';
import CinematicSpecGrid from '@/components/showcases/CinematicSpecGrid';

export const metadata: Metadata = {
  title: 'Infrastructure & Utility Networks Contracting Abu Dhabi | ArrowHead',
  description: 'Specialized general contracting for utility infrastructure in Abu Dhabi. Laying ADSSC-approved sewerage lines, ADDC-approved potable water grids, storm drainage systems, and multi-utility duct banks.',
  keywords: ['utility infrastructure Abu Dhabi', 'ADSSC approved contractor', 'sewerage line contracting', 'storm water networks UAE', 'potable water systems', 'wet utilities contracting'],
  alternates: {
    canonical: 'https://arrowheadigc.com/sectors/infrastructure-utilities',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/sectors/infrastructure-utilities',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Infrastructure & Utility Networks Contracting Abu Dhabi | ArrowHead',
    description: 'Specialized general contracting for utility infrastructure in Abu Dhabi. Laying ADSSC-approved sewerage lines, ADDC-approved potable water grids, storm drainage systems, and multi-utility duct banks.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Infrastructure & Utilities Sector',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infrastructure & Utility Networks Contracting Abu Dhabi | ArrowHead',
    description: 'Specialized general contracting for utility infrastructure in Abu Dhabi. Laying ADSSC-approved sewerage lines, ADDC-approved potable water grids, storm drainage systems, and multi-utility duct banks.',
    images: ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function InfrastructureUtilitiesSectorPage() {
  const capabilities = [
    { 
      title: 'Wastewater & Sewerage Grids', 
      desc: 'Excavating, shoring, installing and testing major gravity sewer pipes and force mains. We build precast concrete manholes with high-performance anti-corrosive epoxy coat layers complying with ADSSC requirements.' 
    },
    { 
      title: 'Potable Water Distribution Loops', 
      desc: 'Supply and installation of PE100 HDPE and DI mainlines. We execute DVS 2207 butt-fusion welding, electrofusion jointing, hydrostatic pressure testings, and sanitize loops for ADDC compliance clearances.' 
    },
    { 
      title: 'Storm Drainage & Outfall Basins', 
      desc: 'Civil works for rainwater drainage grids, including catchment pits, retention basins, sub-surface discharge pipeline installations, and coastal outfall structures.' 
    },
    { 
      title: 'District Duct Banks & Chambers', 
      desc: 'Construction of multi-utility telecom, electrical, and gas duct crossings under heavy traffic corridors, incorporating reinforced concrete valve chambers and access draw pits.' 
    },
  ];

  const utilitySchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'ArrowHead General Contracting LLC - Infrastructure & Utilities Sector',
    'image': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    'telephone': '+971-2-XXXXXXX',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Abu Dhabi',
      'addressCountry': 'AE'
    },
    'url': 'https://arrowheadigc.com/sectors/infrastructure-utilities',
    'priceRange': '$$$$',
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Yas Island' },
      { '@type': 'AdministrativeArea', 'name': 'Khalifa City' },
      { '@type': 'AdministrativeArea', 'name': 'Mussafah' },
      { '@type': 'AdministrativeArea', 'name': 'Saadiyat Island' },
      { '@type': 'AdministrativeArea', 'name': 'Al Raha' }
    ],
    'knowsAbout': ['ADSSC sewer networks', 'ADDC water transmission', 'HDPE butt-fusion welding', 'Utility duct crossings', 'Dewatering permits']
  };

  const locationLinks = [
    { name: 'Yas Island (High-Volume Sewerage Grids)', href: '/locations/yas-island' },
    { name: 'Khalifa City (Sub-surface Drainage & Duct Crossing)', href: '/locations/khalifa-city' },
    { name: 'Mussafah (Industrial Water Loops & Fire Mains)', href: '/locations/mussafah' },
    { name: 'Saadiyat Island (Custom Development Utility Links)', href: '/locations/saadiyat-island' },
    { name: 'Al Raha Beach (Waterfront Utility Containment)', href: '/locations/al-raha' },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Sectors', 'item': 'https://arrowheadigc.com/sectors' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Infrastructure & Utilities', 'item': 'https://arrowheadigc.com/sectors/infrastructure-utilities' }
    ]
  };

  return (
    <div id="infrastructure-utilities-sector-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[utilitySchema, breadcrumbSchema]} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-bg py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Sectors', href: '/sectors' }, { name: 'Infrastructure & Utilities' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Infrastructure &amp; Utility <br />Networks Contracting
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Grade-A civil utility pipeline installations and excavation networks. We build ADSSC-certified gravity sewers, ADDC potable water transmission loops, and robust multi-utility containment duct banks in Abu Dhabi.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
            >
              Request an Infrastructure RFQ
            </Link>
          </div>
        </div>
      </section>

<section className="py-24 border-b border-app-border relative bg-app-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE B</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Smooth Horizontal Filmstrip Carousel</h3>
            </div>
            <HorizontalFilmstrip />
          </div>
          </div>
          </section>

          <section className="py-24 border-b border-app-border relative bg-app-bg">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-6 mb-24">
                      <div className="flex items-center gap-4 border-b border-app-border pb-4">
                        <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE I</span>
                        <h3 className="text-lg font-heading font-extrabold tracking-tight">Tabular Factsheet Grid Row Hover</h3>
                      </div>
                      <FactsheetGrid />
                    </div>
                    </div>
                    </section>


      {/* 2. DETAILED SECTOR COPY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Municipal &amp; Civil Grids</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight leading-snug">
                Approved Pipeline &amp; Trenching Operations for Municipal Handovers
              </h2>
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
          <p>
            Infrastructure and utility networks represent the foundational systems of modern urban centers, requiring precise hydraulic sizing, high-spec pipeline materials, and complete compliance with public utility regulations. ArrowHead delivers utility engineering and construction (EPC) services, installing main potable water trunk lines, gravity sewerage trunk networks, storm drainage outfalls, and district duct banks across Abu Dhabi's developing residential and commercial zones.
          </p>
          <p>
            Our utility pipeline division is experienced in laying pipelines under high water table conditions and sandy soils. We deploy heavy trench shoring boxes, utilize multi-stage dewatering systems, and install PE100 HDPE lines ranging from DN 110mm to DN 1200mm. We fabricate reinforced concrete manholes lined with protective GRP layers to prevent hydrogen sulfide corrosion. For crossings under active highways and channels, we coordinate trenchless Horizontal Directional Drilling (HDD).
          </p>
          <p>
            We align all pipeline designs and excavations with the Standard Drawings of the Abu Dhabi Sewerage Services Company (ADSSC) and Abu Dhabi Distribution Company (ADDC). We manage all compaction checks, weld recording parameters, and hydrostatic pressure testing, coordinating directly with ADSSC and ADDC inspectors to obtain the necessary NOCs for public network integration.
          </p>
  </div>
            </div>
            
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl space-y-6">
              <h4 className="font-heading font-extrabold text-sm text-white border-b border-app-border pb-4 uppercase tracking-widest">
                Utility Capabilities
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.map((cap, idx) => (
                  <div key={idx} className="p-4 bg-app-secondary rounded border border-app-border shadow-sm">
                    <h5 className="font-bold text-brand-teal text-xs uppercase tracking-wide">{cap.title}</h5>
                    <p className="text-app-muted text-xs mt-1.5 leading-relaxed font-light">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-app-border relative bg-app-bg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 mb-24">
                  <div className="flex items-center gap-4 border-b border-app-border pb-4">
                    <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded">STYLE J</span>
                    <h3 className="text-lg font-heading font-extrabold tracking-tight">Cinematic Spec Card Grid</h3>
                  </div>
                  <CinematicSpecGrid />
                </div>
                </div>
                </section>

      <section className="py-24 border-b border-app-border relative bg-app-bg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="space-y-6 mb-24">
                  <div className="flex items-center gap-4 border-b border-app-border pb-4">
                    <span className="text-xs font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded">STYLE H</span>
                    <h3 className="text-lg font-heading font-extrabold tracking-tight">Progressive Build Timeline Phase Switcher</h3>
                  </div>
                  <BuildTimelineShowcase />
                </div>
                </div>
                </section>

      {/* 3. REGIONAL SILO & KNOWLEDGE MATRIX */}
      <section className="py-16 bg-app-secondary border-t border-app-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                Active Utility Operations
              </h3>
              <p className="text-xs text-app-muted mb-6 font-light">
                We construct main sewer lines, potable distribution networks, and ducts across primary Abu Dhabi development zones:
              </p>
              <div className="flex flex-col space-y-2">
                {locationLinks.map((link, idx) => (
                  <Link key={idx} href={link.href} className="text-xs font-semibold text-brand-teal hover:underline flex items-center">
                    <span className="mr-2">📍</span> {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                Technical Knowledge Base
              </h3>
              <p className="text-xs text-app-muted mb-6 font-light">
                Review our engineering guidelines and pipeline parameter standards for infrastructure grids:
              </p>
              <div className="flex flex-col space-y-4">
                <Link href="/insights/hdpe-butt-fusion-welding-parameters" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">HDPE Butt-Fusion Welding Parameters</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">A technical guide to heating temperature, pressure logs, and cooling times per DVS 2207.</span>
                </Link>
                <Link href="/insights/guide-to-tamm-villa-approvals" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">Abu Dhabi TAMM Building Permit Guide</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Step-by-step instructions for municipal clearances and utility drawings submittals.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RELATED SERVICES */}
      <section className="py-16 bg-app-secondary border-t border-app-border text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">Related Services for Infrastructure Clients</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/services/wet-utilities-infrastructure" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Wet Utilities &amp; Drainage
          </Link>
          <Link href="/services/hdpe-pipelines" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            HDPE Pipe Supply &amp; Jointing
          </Link>
          <Link href="/services/infrastructure-civil-works" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Infrastructure Civil Works
          </Link>
        </div>
      </section>
    </div>
  );
}
