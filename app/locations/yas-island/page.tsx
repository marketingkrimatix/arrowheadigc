import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';

export const metadata: Metadata = {
  title: 'HDPE Pipeline & Infrastructure Contractors Yas Island | ArrowHead',
  description: 'Certified HDPE pipeline installation and general contracting on Yas Island, Abu Dhabi. Specialized in butt-fusion welding and ADSSC trunk sewers.',
  keywords: ['HDPE pipeline Yas Island', 'butt-fusion welding Yas Island', 'ADSSC approved contractors Abu Dhabi', 'Yas Island infrastructure contracting', 'dewatering contractors Yas'],
  alternates: {
    canonical: 'https://arrowheadigc.com/locations/yas-island'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/locations/yas-island',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'HDPE Pipeline & Infrastructure Contractors Yas Island | ArrowHead',
    description: 'Certified HDPE pipeline installation and general contracting on Yas Island, Abu Dhabi. Specialized in butt-fusion welding and ADSSC trunk sewers.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Yas Island Infrastructure Pipeline Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HDPE Pipeline & Infrastructure Contractors Yas Island | ArrowHead',
    description: 'Certified HDPE pipeline installation and general contracting on Yas Island, Abu Dhabi. Specialized in butt-fusion welding and ADSSC trunk sewers.',
    images: ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function YasIslandGeoPage() {
  const localProjects = [
    {
      title: 'Yas North Sewerage Trunk Network',
      scope: '4.8km DN 1200mm HDPE line supply, computerized butt-fusion joints, and hydrostatic tests witnessed by ADSSC inspectors.',
      spec: 'SDR 11 PE100-RC • PN16 Rating'
    },
    {
      title: 'Yas South Water Distribution Loops',
      scope: 'Butt-welding and electrofusion installation of high-pressure water mains to ADDC standards.',
      spec: 'DN 400mm Outer Diameter • PN10 Rating'
    }
  ];

  // LocalBusiness schema tailored specifically to Yas Island service scope
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'ArrowHead General Contracting LLC - Yas Island Operations',
    'image': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    'telephone': '+971-2-XXXXXXX',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Yas Island Development Zone',
      'addressLocality': 'Abu Dhabi',
      'addressRegion': 'Abu Dhabi',
      'postalCode': '00000',
      'addressCountry': 'AE'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '24.4980',
      'longitude': '54.6022'
    },
    'url': 'https://arrowheadigc.com/locations/yas-island',
    'priceRange': '$$$$',
    'knowsAbout': ['HDPE Pipe Fusion', 'Dewatering setups', 'Butt-fusion logs', 'ADSSC standards']
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Yas Island Infrastructure', 'item': 'https://arrowheadigc.com/locations/yas-island' }
    ]
  };

  return (
    <div id="yas-island-location-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[locationSchema, breadcrumbSchema]} />

      {/* 1. HERO HEADER */}
      <section className="bg-app-bg py-20 border-b border-app-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Yas Island' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Infrastructure &amp; HDPE Pipeline Contracting in Yas Island
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            ArrowHead General Contracting LLC delivers high-specification utility pipeline networks, heavy dewatering infrastructure, and specialized MEP connections on Yas Island. Operating under Abu Dhabi DED license CN-4998977, we align with ADSSC &amp; ADDC standard drawings.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true&location=yas"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
            >
              Discuss Yas Island Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* 2. LOCALIZED SEMANTIC CONTENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Copy: Semantic HTML5 detailing local regulations */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono font-bold">
                Operational Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight">
                Meeting Rigorous Saline Dewatering &amp; Trenching Codes
              </h2>
              
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  Yas Island represents one of the most prestigious and rapidly growing leisure and residential zones in Abu Dhabi. However, from an engineering perspective, it features a highly challenging tidal-influenced water table with severe saline concentrations and complex coastal sandy soils. Laying utility pipeline networks, gravity sewers, and storm drainage ducts in this environment requires specialized double-sheet piling shoring, trench safety cage assemblies, and continuous multi-stage deep-well dewatering configurations to keep excavations dry.
                </p>
                <p>
                  At ArrowHead, our engineering crews are deeply familiar with the geological specifications of Yas Island. We excavate trenches to exact ADSSC specifications, applying dense gravel bedding layers and geotextile wraps to protect the pipe subgrade from sand migration. We utilize specialized high-capacity dewatering pumps that operate 24/7, maintaining a dry trench environment while managing safe saline water discharge in accordance with Environment Agency Abu Dhabi (EAD) permits.
                </p>
                <p>
                  Our butt-fusion welding setups are fully computerized and calibrated for PE100 and PE100-RC materials. For every HDPE pipeline joint spanning DN 110mm to DN 1200mm, we deploy weather-resistant welding tents. This shields the joint from airborne dust, sand particles, and wind gusts that could cause thermal shrinkage or compromise the weld's integrity. We log bead-up heights, heating pressures, soak times, and cooling rates, exporting a digital validation tag for every joint.
                </p>
                <p>
                  To secure municipal clearances, we coordinate directly with Aldar inspectors, client representatives, and utility technicians from ADSSC, ADDC, and Abu Dhabi Municipality (ADM). We submit comprehensive QA/QC inspection dossiers containing computerized butt-fusion parameters, hydrostatic pressure test logs (up to PN25), and independent compaction test results, ensuring rapid clearance and utility connection handovers.
                </p>
              </div>
            </div>

            {/* Right Column: Local Projects List */}
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl self-start space-y-6">
              <h3 className="font-heading font-extrabold text-sm text-white border-b border-app-border pb-4 uppercase tracking-widest">
                Delivered Yas Island Projects
              </h3>
              
              <div className="space-y-6">
                {localProjects.map((proj, idx) => (
                  <div key={idx} className="bg-app-secondary/60 p-5 rounded border border-app-border space-y-2">
                    <h4 className="text-xs font-mono font-bold text-brand-teal uppercase tracking-wide">
                      {proj.title}
                    </h4>
                    <p className="text-app-muted text-xs leading-relaxed font-light">
                      {proj.scope}
                    </p>
                    <span className="block text-[9px] font-mono text-brand-gold font-bold">
                      SPEC: {proj.spec}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-app-border/40 text-center">
                <span className="text-[10px] font-mono text-app-muted uppercase">
                  ADSSC Approved Material Specifications
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
          <Link href="/services/hdpe-pipelines" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            HDPE Pipeline Installation
          </Link>
          <Link href="/services/mep-specialized" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            MEP Infrastructure Works
          </Link>
          <Link href="/services/facility-management" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Hard Facilities AMC Support
          </Link>
        </div>
      </section>
    </div>
  );
}
