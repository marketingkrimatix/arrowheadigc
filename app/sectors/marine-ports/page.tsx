import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Marine & Port Infrastructure Contracting Abu Dhabi | ArrowHead',
  description: 'Specialized marine civils, concrete slipway repairs, shore protection block placing, and facility management for coastal and port administrations in Abu Dhabi.',
  keywords: ['marine contracting Abu Dhabi', 'port infrastructure UAE', 'slipway repairs Abu Dhabi', 'sea wall grouting', 'Mussafah port works'],
  alternates: {
    canonical: 'https://arrowheadigc.com/sectors/marine-ports',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/sectors/marine-ports',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Marine & Port Infrastructure Contracting Abu Dhabi | ArrowHead',
    description: 'Specialized marine civils, concrete slipway repairs, shore protection block placing, and facility management for coastal and port administrations in Abu Dhabi.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Marine and Port Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marine & Port Infrastructure Contracting Abu Dhabi | ArrowHead',
    description: 'Specialized marine civils, concrete slipway repairs, shore protection block placing, and facility management for coastal and port administrations in Abu Dhabi.',
    images: ['https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function MarinePortsSectorPage() {
  const capabilities = [
    { title: 'Slipway Renovation', desc: 'Repairing concrete erosion, replacing rusted rebar, and casting structural slipways for boats and marine assets under tidal conditions.' },
    { title: 'Sea Wall Reinforcement', desc: 'Grouting, crack injections, and placing marine rock/concrete blocks to reinforce seawalls and stabilize shorelines.' },
    { title: 'Coastal Piping Systems', desc: 'Welding and installing HDPE pipeline systems for ports, desalination plants, and chemical intake lines.' },
    { title: 'Port Facility Maintenance', desc: 'Providing integrated hard and soft facility management contracts for harbor offices, control towers, and warehouses.' },
  ];

  const marineSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'ArrowHead General Contracting LLC - Marine & Ports Sector',
    'image': 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80',
    'telephone': '+971-2-XXXXXXX',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Mussafah Industrial Port Area',
      'addressRegion': 'Abu Dhabi',
      'addressCountry': 'AE'
    },
    'url': 'https://arrowheadigc.com/sectors/marine-ports',
    'priceRange': '$$$$',
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Mussafah' },
      { '@type': 'AdministrativeArea', 'name': 'Saadiyat Island' },
      { '@type': 'AdministrativeArea', 'name': 'Yas Island' },
      { '@type': 'AdministrativeArea', 'name': 'Al Raha' },
      { '@type': 'AdministrativeArea', 'name': 'Khalifa City' }
    ],
    'knowsAbout': ['Concrete slipway repairs', 'Seawall grouting', 'Marine block placing', 'Port FM']
  };

  const locationLinks = [
    { name: 'Mussafah (Port & Marine Repairs)', href: '/locations/mussafah' },
    { name: 'Saadiyat Island (Coastal Protected Zones)', href: '/locations/saadiyat-island' },
    { name: 'Yas Island (Desalination & Outfalls)', href: '/locations/yas-island' },
    { name: 'Al Raha Beach (Waterfront Promenades)', href: '/locations/al-raha' },
    { name: 'Khalifa City (District Drainage Systems)', href: '/locations/khalifa-city' },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Sectors', 'item': 'https://arrowheadigc.com/sectors' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Marine & Ports', 'item': 'https://arrowheadigc.com/sectors/marine-ports' }
    ]
  };

  return (
    <div id="marine-ports-sector-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[marineSchema, breadcrumbSchema]} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-bg py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Sectors', href: '/sectors' }, { name: 'Marine & Ports' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Marine, Ports &amp; <br />Waterfront Contracting
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Delivering high-durability waterfront concrete works, slipway renovations, coastal block placements, and integrated facilities management inside Abu Dhabi port zones.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
            >
              Request a Marine Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 2. DETAILED SECTOR COPY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Waterfront Civil Works</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight leading-snug">
                High-Durability Engineering in Corrosive Marine Climates
              </h2>
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
          <p>
            Marine ports, shipyard docks, and harbor structures operate in aggressive saline environments, requiring specialized materials and coatings to prevent electrochemical corrosion and concrete degradation. ArrowHead delivers marine and port contracting services, focusing on dock slipway restorations, concrete sea wall reinforcements, sheet piling installations, and cathodic protection upgrades.
          </p>
          <p>
            Our marine engineering teams work under tidal constraints to execute waterfront structural repairs. We perform abrasive grit sandblasting of structural steel piles and sheet piling to SA 2.5 standards, applying high-build marine epoxy coatings and installing sacrificial zinc anodes. For structural concrete docks and slipways, we utilize fiber-reinforced sulfate-resistant C50/60 concrete containing microsilica to ensure low permeability and high resistance to chloride penetration.
          </p>
          <p>
            We manage the regulatory permitting process, preparing environmental monitoring programs to secure permissions from Abu Dhabi Ports, ZonesCorp, and the Environment Agency Abu Dhabi (EAD). We install HDPE utility pipeline loops and wastewater drainage networks inside port industrial sectors, validating all lines with hydrostatic testing.
          </p>
  </div>
            </div>
            
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl space-y-6">
              <h4 className="font-heading font-extrabold text-sm text-white border-b border-app-border pb-4 uppercase tracking-widest">
                Marine capabilities
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
                Active Marine Operations
              </h3>
              <p className="text-xs text-app-muted mb-6 font-light">
                We repair coastal concrete slipways and reinforce seawalls across critical waterfront sectors:
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
                Explore our engineering guidebooks on pipeline installations and building inspections:
              </p>
              <div className="flex flex-col space-y-4">
                <Link href="/insights/hdpe-butt-fusion-welding-parameters" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">HDPE Butt-Fusion Technical Parameters</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Standards for piping, welding pressures, and joint logs in coastal utility lines.</span>
                </Link>
                <Link href="/insights/guide-to-tamm-villa-approvals" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">Abu Dhabi TAMM Building Permit Guide</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Helpful when coordinating structural alterations or extensions for harbor spaces.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RELATED SERVICES */}
      <section className="py-16 bg-app-secondary border-t border-app-border text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">Related Services for Marine Clients</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/services/marine-industrial" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Marine Works
          </Link>
          <Link href="/services/hdpe-pipelines" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Water Pipeline Welding
          </Link>
          <Link href="/services/facility-management" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Port Office Maintenance
          </Link>
        </div>
      </section>
    </div>
  );
}
