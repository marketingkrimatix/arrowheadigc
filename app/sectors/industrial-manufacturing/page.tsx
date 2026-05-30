import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Industrial & Warehouse Contracting Abu Dhabi | ArrowHead',
  description: 'Specialized contracting and facility maintenance for industrial plants, workshops, and warehouses in Mussafah, ICAD, and Ports.',
  keywords: ['industrial contracting Abu Dhabi', 'warehouse construction Mussafah', 'ICAD contracting', 'industrial pipeline Abu Dhabi', 'plant maintenance Mussafah'],
  alternates: {
    canonical: 'https://arrowheadigc.com/sectors/industrial-manufacturing',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/sectors/industrial-manufacturing',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Industrial & Warehouse Contracting Abu Dhabi | ArrowHead',
    description: 'Specialized contracting and facility maintenance for industrial plants, workshops, and warehouses in Mussafah, ICAD, and Ports.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Industrial and Warehouse Contracting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial & Warehouse Contracting Abu Dhabi | ArrowHead',
    description: 'Specialized contracting and facility maintenance for industrial plants, workshops, and warehouses in Mussafah, ICAD, and Ports.',
    images: ['https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function IndustrialManufacturingSectorPage() {
  const capabilities = [
    { title: 'Warehouse Construction', desc: 'Fabricating and erecting clear-span steel frame structures, cladding works, industrial flooring, and heavy-duty slab casting.' },
    { title: 'Utility Pipeline Connections', desc: 'Supply, butt-fusion welding, and pressure testing of industrial HDPE water, sewerage, and chilled water pipeline loops.' },
    { title: 'Plant Room MEP Setup', desc: 'Installing pump loops, specialized valves, air compressors, firefighting water sprinklers, and main DB boards.' },
    { title: 'Hard Facility Maintenance', desc: 'Providing responsive annual maintenance contracts (AMC) for mechanical equipment, chiller coils, and structural concrete assets.' },
  ];

  const industrialSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'ArrowHead General Contracting LLC - Industrial Sector',
    'image': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    'telephone': '+971-2-XXXXXXX',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Mussafah Industrial Area',
      'addressRegion': 'Abu Dhabi',
      'addressCountry': 'AE'
    },
    'url': 'https://arrowheadigc.com/sectors/industrial-manufacturing',
    'priceRange': '$$$$',
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Mussafah' },
      { '@type': 'AdministrativeArea', 'name': 'Yas Island' },
      { '@type': 'AdministrativeArea', 'name': 'Saadiyat Island' },
      { '@type': 'AdministrativeArea', 'name': 'Al Raha' },
      { '@type': 'AdministrativeArea', 'name': 'Khalifa City' }
    ],
    'knowsAbout': ['Warehouse fabrication', 'Butt-fusion welding', 'Plant room piping', 'Hard FM AMCs']
  };

  const locationLinks = [
    { name: 'Mussafah (Industrial Hub & Workshops)', href: '/locations/mussafah' },
    { name: 'Yas Island (Infrastructure & Pipelines)', href: '/locations/yas-island' },
    { name: 'Saadiyat Island (Environmental Infrastructure)', href: '/locations/saadiyat-island' },
    { name: 'Al Raha Beach (Waterfront Civils)', href: '/locations/al-raha' },
    { name: 'Khalifa City (Sewerage & Sub-stations)', href: '/locations/khalifa-city' },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Sectors', 'item': 'https://arrowheadigc.com/sectors' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Industrial & Manufacturing', 'item': 'https://arrowheadigc.com/sectors/industrial-manufacturing' }
    ]
  };

  return (
    <div id="industrial-manufacturing-sector-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[industrialSchema, breadcrumbSchema]} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-bg py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Sectors', href: '/sectors' }, { name: 'Industrial & Manufacturing' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Industrial &amp; Manufacturing Contracting
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Delivering heavy-duty civil foundations, structural steel warehouses, specialized utility piping, and comprehensive facility maintenance in Mussafah, ICAD, and Ports.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
            >
              Request an Industrial Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 2. DETAILED SECTOR COPY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Heavy Infrastructure</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight leading-snug">
                Engineered for High Loading &amp; Strict Safety
              </h2>
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
          <p>
            Industrial plants, logistics centers, and manufacturing facilities require robust engineering designs capable of resisting chemical exposure, high mechanical vibration, extreme temperatures, and heavy structural loading. ArrowHead delivers high-performance industrial general contracting and utility pipeline installations across primary Abu Dhabi industrial zones (including Mussafah and ICAD), focusing on structural steel portals, heavy machine foundations, and specialized piping networks.
          </p>
          <p>
            Our structural steel division designs, fabricates, and erects industrial warehouses, crane gantry structures, and heavy machinery platforms in compliance with BS EN 1090-2 specifications. Our civil engineering teams design and pour high-flatness concrete floor slabs using TR34 guidelines, incorporating fiber reinforcement and surface hardeners to withstand heavy forklift traffic and high rack loads. We cast reinforced concrete equipment plinths and drainage sumps to handle manufacturing machinery.
          </p>
          <p>
            We manage all regulatory coordination, preparing environmental impact assessments (EIA) and waste management programs to secure permissions from ZonesCorp, local port authorities, and the Environment Agency Abu Dhabi (EAD). We install computerized butt-fusion welded HDPE process water lines, chemical gravity sewers, and district cooling piping networks, verifying all joints with hydrostatic pressure logs.
          </p>
  </div>
            </div>
            
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl space-y-6">
              <h4 className="font-heading font-extrabold text-sm text-white border-b border-app-border pb-4 uppercase tracking-widest">
                Industrial capabilities
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

      {/* 3. REGIONAL SILO & KNOWLEDGE MATRIX */}
      <section className="py-16 bg-app-secondary border-t border-app-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                Active Industrial Operations
              </h3>
              <p className="text-xs text-app-muted mb-6 font-light">
                We execute heavy steel structures and pipeline networks across major Abu Dhabi industrial zones:
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
                Review our technical parameter details and guidelines for industrial pipelines and building works:
              </p>
              <div className="flex flex-col space-y-4">
                <Link href="/insights/hdpe-butt-fusion-welding-parameters" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">HDPE Butt-Fusion Technical Parameters</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">DVS 2207 standard parameters for PE100 heating, pressures, and cooling logs.</span>
                </Link>
                <Link href="/insights/guide-to-tamm-villa-approvals" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">Abu Dhabi TAMM Building Permit Guide</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Overview of structural submittals, NOCs, and municipal approval portals.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RELATED SERVICES */}
      <section className="py-16 bg-app-secondary border-t border-app-border text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">Related Services for Industrial Clients</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/services/hdpe-pipelines" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            HDPE Pipelines
          </Link>
          <Link href="/services/marine-industrial" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Industrial Works
          </Link>
          <Link href="/services/facility-management" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Hard FM (AMCs)
          </Link>
        </div>
      </section>
    </div>
  );
}
