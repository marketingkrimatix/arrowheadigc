import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Industrial Contracting & Facility Management Mussafah | ArrowHead',
  description: 'Specialized industrial civil foundations, structural steel warehouses, and commercial facility management AMCs in Mussafah, Abu Dhabi.',
  keywords: ['industrial contractor Mussafah', 'industrial warehouse contractor Mussafah', 'facility management Mussafah', 'steel fabrication Mussafah', 'civil contracting Abu Dhabi'],
  alternates: {
    canonical: 'https://arrowheadigc.com/locations/mussafah'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/locations/mussafah',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Industrial Contracting & Facility Management Mussafah | ArrowHead',
    description: 'Specialized industrial civil foundations, structural steel warehouses, and commercial facility management AMCs in Mussafah, Abu Dhabi.',
    images: [
      {
        url: '/images/Matrix_project.jpeg',
        width: 800,
        height: 600,
        alt: 'Mussafah Industrial Facility Contracting and Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Contracting & Facility Management Mussafah | ArrowHead',
    description: 'Specialized industrial civil foundations, structural steel warehouses, and commercial facility management AMCs in Mussafah, Abu Dhabi.',
    images: ['/images/Matrix_project.jpeg'],
  },
};

export default function MussafahGeoPage() {
  const localProjects = [
    {
      title: 'Mussafah Logistics Hub Heavy Civils',
      scope: 'Bulk earthworks, sub-base compaction testing, Grade 40 reinforced concrete slabs, and structural boundary walls.',
      spec: '50,000 sqm • 98% Proctor Compaction'
    },
    {
      title: 'Mussafah Industrial Factory Hard FM',
      scope: 'Preventative AC chiller maintenance, electrical panel thermography scans, and wet riser safety inspections under Civil Defense standards.',
      spec: '15,000 sqm • 24/7 SLA AMC'
    }
  ];

  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'ArrowHead General Contracting LLC - Mussafah Operations',
    'image': '/images/Matrix_project.jpeg',
    'telephone': '+97125545230',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '5th Floor, Prestige Towers 17, Capital Mall, Mussaffah',
      'addressLocality': 'Mussafah Industrial City',
      'addressRegion': 'Abu Dhabi',
      'postalCode': '00000',
      'addressCountry': 'AE'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '24.3411',
      'longitude': '54.4988'
    },
    'url': 'https://arrowheadigc.com/locations/mussafah',
    'priceRange': '$$$$',
    'areaServed': 'Mussafah, Abu Dhabi',
    'knowsAbout': ['Heavy Civil Foundations', 'Industrial Warehouse Steel', 'Civil Defense Fire Safety', 'Industrial Hard FM']
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Mussafah Industrial Contracting', 'item': 'https://arrowheadigc.com/locations/mussafah' }
    ]
  };

  return (
    <div id="mussafah-location-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[locationSchema, breadcrumbSchema]} />

      {/* 1. HERO HEADER */}
      <section className="bg-app-bg py-20 border-b border-app-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Mussafah' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Industrial Contracting &amp; Civil Engineering in Mussafah
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Delivering heavy concrete foundation casting, structural steel workshop fabrication, and commercial Hard FM AMC services across Mussafah and ICAD zones. Fully licensed Abu Dhabi general contractor.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true&location=mussafah"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-brand-gold text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-gold-hover shadow-lg transition-all duration-300"
            >
              Discuss Mussafah Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* 2. LOCALIZED SEMANTIC CONTENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Copy: Semantic HTML5 */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono font-bold">
                Heavy Industrial Scopes
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight">
                High-Load Civil Slabs &amp; Commercial Facility Maintenance
              </h2>

              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  Mussafah serves as the primary industrial and logistical hub of Abu Dhabi, requiring rugged, high-durability engineering capable of surviving harsh manufacturing environments and heavy transport traffic. Out of our Mussafah head office, we deliver specialized general contracting services including heavy structural steel fabrication, high-load warehouse slab casting, and industrial pipeline networks.
                </p>
                <p>
                  Our structural steel division fabricates and erects heavy steel warehouse frames, crane gantry structures, and mezzanine floors in compliance with BS EN 1090-2 standards. We design and pour high-flatness, fiber-reinforced concrete slabs (conforming to TR34 standards) to handle heavy machinery and forklift traffic. We coordinate all logistics, heavy lifting, mobile crane permits, and safety zoning.
                </p>
                <p>
                  We coordinate all municipal compliance, obtaining waste disposal permits and environmental NOCs to secure full industrial approvals for manufacturing and storage facilities.
                </p>
              </div>
            </div>

            {/* Right Column: Local Projects List */}
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl self-start space-y-6">
              <h3 className="font-heading font-extrabold text-sm text-white border-b border-app-border pb-4 uppercase tracking-widest">
                Mussafah Industrial Hand-offs
              </h3>

              <div className="space-y-6">
                {localProjects.map((proj, idx) => (
                  <div key={idx} className="bg-app-secondary/60 p-5 rounded border border-app-border space-y-2">
                    <h4 className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wide">
                      {proj.title}
                    </h4>
                    <p className="text-app-muted text-xs leading-relaxed font-light">
                      {proj.scope}
                    </p>
                    <span className="block text-[9px] font-mono text-brand-teal font-bold">
                      SPEC: {proj.spec}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-app-border/40 text-center">
                <span className="text-[10px] font-mono text-app-muted uppercase">
                  TAMM &amp; Municipal Codes Aligned
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. RELATED LINK SILO LOOP */}
      <section className="py-16 bg-app-secondary border-t border-app-border text-center">
        <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
          Core Services Alignment
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/services/infrastructure-civil-works" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Infrastructure &amp; Civil Works
          </Link>
          <Link href="/services/facility-management" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Commercial FM AMC Support
          </Link>
          <Link href="/services/mep-specialized" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            MEP Specialized Systems
          </Link>
        </div>
      </section>
    </div>
  );
}
