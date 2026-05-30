import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Marine Repairs & Industrial Contracting Mussafah Port | ArrowHead',
  description: 'Specialized marine slipway restorations, structural steel warehouses, and commercial facility management AMCs in Mussafah, Abu Dhabi.',
  keywords: ['marine slipway repair Mussafah', 'industrial warehouse contractor Mussafah', 'facility management Mussafah', 'steel fabrication Mussafah', 'marine concrete Abu Dhabi'],
  alternates: {
    canonical: 'https://arrowheadigc.com/locations/mussafah'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/locations/mussafah',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Marine Repairs & Industrial Contracting Mussafah Port | ArrowHead',
    description: 'Specialized marine slipway restorations, structural steel warehouses, and commercial facility management AMCs in Mussafah, Abu Dhabi.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Mussafah Port Marine Repair and Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marine Repairs & Industrial Contracting Mussafah Port | ArrowHead',
    description: 'Specialized marine slipway restorations, structural steel warehouses, and commercial facility management AMCs in Mussafah, Abu Dhabi.',
    images: ['https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function MussafahGeoPage() {
  const localProjects = [
    {
      title: 'Mussafah Port Marine Slipway Restoring',
      scope: 'Sandblasting eroded structural rebars, casting marine concrete in short tidal windows, and polyurea sealant coats.',
      spec: 'Sulfate-Resistant C50/60 Concrete • Zinc Cathodic Shielding'
    },
    {
      title: 'Mussafah Logistics Factory Hard FM',
      scope: 'Preventative AC chiller maintenance, electrical panel thermography scans, and wet riser safety inspections under ADCD standards.',
      spec: '15,000 sqm • 24/7 SLA AMC'
    }
  ];

  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'ArrowHead General Contracting LLC - Mussafah Operations',
    'image': 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80',
    'telephone': '+971-2-XXXXXXX',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Mussafah Port Channel Zone',
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
    'knowsAbout': ['Marine Slipway Concrete', 'Microsilica Castings', 'Cathodic Protection', 'Industrial Hard FM']
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Mussafah Marine & Industrial', 'item': 'https://arrowheadigc.com/locations/mussafah' }
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
            Marine Works &amp; Industrial Contracting in Mussafah Port
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Delivering offshore slipway restorations, structural steel workshop fabrication, and commercial Hard FM AMC services in Mussafah and ICAD zones. Registered under DED License CN-4998977, we coordinate with port authorities and the EAD.
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
                Saline-Resistant Marine Concrete &amp; Commercial AMC Plans
              </h2>
              
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  Mussafah serves as the primary industrial and logistical hub of Abu Dhabi, requiring rugged, high-durability engineering capable of surviving harsh manufacturing environments, chemical exposures, and port operations. Out of our Mussafah head office, we deliver specialized general contracting services including marine slipway restorations, heavy structural steel fabrication, high-load warehouse slab casting, and industrial pipeline networks.
                </p>
                <p>
                  For marine structures, shipyards, and port facilities in Mussafah Port, our teams perform specialized repairs under tidal schedules. We execute high-pressure sandblasting of structural steel piles and sheet piling to SA 2.5 standards, removing all rust and mill scale before applying heavy-duty marine epoxy paints, and mount sacrificial zinc anodes to provide long-term cathodic protection. We utilize fiber-reinforced microsilica concrete mixes to resist constant wave action and saline erosion.
                </p>
                <p>
                  Our structural steel division fabricates and erects heavy steel warehouse frames, crane gantry structures, and mezzanine floors in compliance with BS EN 1090-2 standards. We design and pour high-flatness, fiber-reinforced concrete slabs (conforming to TR34 standards) to handle heavy machinery and forklift traffic. We coordinate all logistics, heavy lifting, mobile crane permits, and safety zoning.
                </p>
                <p>
                  We maintain close communication with Mussafah Port authorities, zonescorp, and the Environment Agency Abu Dhabi (EAD). We manage all regulatory compliance, obtain waste disposal permits, and prepare environmental impact assessments (EIA) to secure industrial operational NOCs for manufacturing and storage facilities.
                </p>
  </div>
            </div>

            {/* Right Column: Local Projects List */}
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl self-start space-y-6">
              <h3 className="font-heading font-extrabold text-sm text-white border-b border-app-border pb-4 uppercase tracking-widest">
                Mussafah Port Hand-offs
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
                  Environmental Agency Abu Dhabi (EAD) Coordinated
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
          <Link href="/services/marine-industrial" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Marine &amp; Industrial Works
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
