import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import SplitActiveShowcase from '@/components/showcases/SplitActiveShowcase';
import BuildTimelineShowcase from '@/components/showcases/BuildTimelineShowcase';
import FactsheetGrid from '@/components/showcases/FactsheetGrid';
import CinematicSpecGrid from '@/components/showcases/CinematicSpecGrid';

export const metadata: Metadata = {
  title: 'Hospitality, Leisure & Resort Contracting Abu Dhabi | ArrowHead',
  description: 'Specialized fit-out construction, resort MEP installations, chilled water networks, and Annual Maintenance Contracts (AMCs) for hotels, resorts, and theme parks in Abu Dhabi.',
  keywords: ['hotel contracting Abu Dhabi', 'resort refurbishment UAE', 'theme park FM services', 'hospitality fit-out Abu Dhabi', 'restaurant MEP works', 'hotel AMC services'],
  alternates: {
    canonical: 'https://arrowheadigc.com/sectors/hospitality-leisure',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/sectors/hospitality-leisure',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Hospitality, Leisure & Resort Contracting Abu Dhabi | ArrowHead',
    description: 'Specialized fit-out construction, resort MEP installations, chilled water networks, and Annual Maintenance Contracts (AMCs) for hotels, resorts, and theme parks in Abu Dhabi.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Hospitality & Leisure Sector',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospitality, Leisure & Resort Contracting Abu Dhabi | ArrowHead',
    description: 'Specialized fit-out construction, resort MEP installations, chilled water networks, and Annual Maintenance Contracts (AMCs) for hotels, resorts, and theme parks in Abu Dhabi.',
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function HospitalityLeisureSectorPage() {
  const capabilities = [
    { 
      title: 'Interior Fit-Outs & Millwork', 
      desc: 'High-end structural partitions, premium gypsum ceiling integrations, ceramic tiling, and custom wooden joinery installations for luxury hotels, lobby lounges, and restaurant spaces.' 
    },
    { 
      title: 'Chilled Water & HVAC Services', 
      desc: 'Relocating, flushing, and adjusting chilled water fan coil units (FCU), air handling units (AHU), actuator valves, secondary pumps, and thermal insulation wrapping to maintain optimal climate control.' 
    },
    { 
      title: 'Integrated Facility Management AMCs', 
      desc: 'Tailored B2B preventive maintenance contracts covering electrical distribution boards, thermographic scanning, drainage line flushing, water tank disinfection, and pest control.' 
    },
    { 
      title: 'Theme Park & Leisure Maintenance', 
      desc: 'Hard facilities management, mechanical component inspections, concrete pathway slab restorations, protective anti-corrosive coatings, and structural upgrades for entertainment venues.' 
    },
  ];

  const hospitalitySchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'ArrowHead General Contracting LLC - Hospitality & Leisure Sector',
    'image': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    'telephone': '+971-2-XXXXXXX',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Abu Dhabi',
      'addressCountry': 'AE'
    },
    'url': 'https://arrowheadigc.com/sectors/hospitality-leisure',
    'priceRange': '$$$$',
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Yas Island' },
      { '@type': 'AdministrativeArea', 'name': 'Saadiyat Island' },
      { '@type': 'AdministrativeArea', 'name': 'Al Raha' },
      { '@type': 'AdministrativeArea', 'name': 'Khalifa City' },
      { '@type': 'AdministrativeArea', 'name': 'Mussafah' }
    ],
    'knowsAbout': ['Hotel fit-out construction', 'Chilled water HVAC', 'Preventive FM AMCs', 'Water tank disinfection', 'ADCD fire compliance']
  };

  const locationLinks = [
    { name: 'Yas Island (Resort FM & Theme Park Maintenance)', href: '/locations/yas-island' },
    { name: 'Saadiyat Island (Luxury Hotel Fit-Outs & Plastering)', href: '/locations/saadiyat-island' },
    { name: 'Al Raha Beach (Waterfront Leisure & Restaurant MEP)', href: '/locations/al-raha' },
    { name: 'Khalifa City (Boutique Hospitality & Clubhouses)', href: '/locations/khalifa-city' },
    { name: 'Mussafah (Resort Logistical Warehousing)', href: '/locations/mussafah' },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Sectors', 'item': 'https://arrowheadigc.com/sectors' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Hospitality & Leisure', 'item': 'https://arrowheadigc.com/sectors/hospitality-leisure' }
    ]
  };

  return (
    <div id="hospitality-leisure-sector-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[hospitalitySchema, breadcrumbSchema]} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-bg py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Sectors', href: '/sectors' }, { name: 'Hospitality & Leisure' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Hospitality, Leisure <br />&amp; Resort Contracting
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Premium general contracting, tenant fit-out, MEP renovations, and 24/7 Hard FM support for luxury hotels, leisure clubs, and entertainment theme parks across Abu Dhabi.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
            >
              Request a Hospitality Quote
            </Link>
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
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Hotel &amp; Resort Scopes</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight leading-snug">
                Ensuring Five-Star Environments with Certified Preventive Engineering
              </h2>
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
          <p>
            The hospitality and leisure industry in Abu Dhabi requires perfect building performance, high aesthetic standards, and quiet, non-disruptive maintenance systems to protect the guest experience. ArrowHead provides specialized MEP contracting, interior remodeling, pool filtration installations, and preventative facility management contracts for luxury hotels, beach resorts, entertainment complexes, and theme parks.
          </p>
          <p>
            Our mechanical engineering team manages chilled water pipeline integrations and variable refrigerant flow (VRF) HVAC systems, ensuring quiet and balanced climate control across hotel suites and public lobbies. We perform air balancing, duct cleaning, and install mechanical ventilation setups for commercial hotel kitchens. Our electrical crews manage decorative lighting controls, dress distribution boards, and perform preventative testing of emergency backup generator systems.
          </p>
          <p>
            To ensure zero operational disruption, we structure specialized Facilities Management Annual Maintenance Contracts (AMCs) that operate under discrete night shifts and strict SLAs. Our certified technicians maintain water filtration plants for swimming pools, monitor booster pumps, and manage pest control services approved by the Abu Dhabi Municipality, ensuring hotel operations remain fully compliant with all local health regulations.
          </p>
  </div>
            </div>
            
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl space-y-6">
              <h4 className="font-heading font-extrabold text-sm text-white border-b border-app-border pb-4 uppercase tracking-widest">
                Hospitality Scopes
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
                    <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded">STYLE C</span>
                    <h3 className="text-lg font-heading font-extrabold tracking-tight">Split Screen Category Hover Active Tabs</h3>
                  </div>
                  <SplitActiveShowcase />
                </div>
              </div>
            </section>

      {/* 3. REGIONAL SILO & KNOWLEDGE MATRIX */}
      <section className="py-16 bg-app-secondary border-t border-app-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                Active Resort Operations
              </h3>
              <p className="text-xs text-app-muted mb-6 font-light">
                We handle high-end fit-out, MEP, and facility care across key tourism and entertainment zones in Abu Dhabi:
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
                Review our technical guides and energy rating compliance details:
              </p>
              <div className="flex flex-col space-y-4">
                <Link href="/insights/understanding-estidama-pearl-ratings" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">Estidama Pearl Ratings Guide</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Learn about sustainable building insulation, HVAC efficiency, and Pearl ratings.</span>
                </Link>
                <Link href="/insights/guide-to-tamm-villa-approvals" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">Abu Dhabi TAMM Building Permit Guide</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Step-by-step instructions for municipal approvals.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RELATED SERVICES */}
      <section className="py-16 bg-app-secondary border-t border-app-border text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">Related Services for Hospitality Clients</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/services/facility-management" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Hard &amp; Soft Facilities Care
          </Link>
          <Link href="/services/mep-specialized" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Specialized MEP Works
          </Link>
          <Link href="/services/villa-renovation" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Remodeling &amp; Fit-Out
          </Link>
        </div>
      </section>
    </div>
  );
}
