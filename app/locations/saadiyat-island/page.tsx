import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Luxury Villa Construction Saadiyat Island | ArrowHead General Contracting',
  description: 'Turnkey luxury villa builders on Saadiyat Island, Abu Dhabi. High-end architectural design-build contracting meeting Estidama 2-Pearl rating guidelines.',
  keywords: ['luxury villa construction Saadiyat Island', 'villa builders Saadiyat', 'Estidama contracting Saadiyat', 'interior fit out contractor Saadiyat', 'custom residential contracting'],
  alternates: {
    canonical: 'https://arrowheadigc.com/locations/saadiyat-island'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/locations/saadiyat-island',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Luxury Villa Construction Saadiyat Island | ArrowHead General Contracting',
    description: 'Turnkey luxury villa builders on Saadiyat Island, Abu Dhabi. High-end architectural design-build contracting meeting Estidama 2-Pearl rating guidelines.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Saadiyat Island Luxury Villa Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Villa Construction Saadiyat Island | ArrowHead General Contracting',
    description: 'Turnkey luxury villa builders on Saadiyat Island, Abu Dhabi. High-end architectural design-build contracting meeting Estidama 2-Pearl rating guidelines.',
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function SaadiyatIslandGeoPage() {
  const localProjects = [
    {
      title: 'Saadiyat Cultural District Luxury Villa',
      scope: 'Turnkey construction of a contemporary 6-bedroom villa. Features double-height glazing, custom marble dry-cladding, and custom structural concrete casting.',
      spec: '14,000 sq ft • 2-Pearl Estidama Certified'
    },
    {
      title: 'Saadiyat Marina Estate Remodeling',
      scope: 'Structural modifications and majlis block extension, updating layout plans and waterproofing membranes.',
      spec: 'High-Strength Concrete • TAMM Approved'
    }
  ];

  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'ArrowHead General Contracting LLC - Saadiyat Island Operations',
    'image': 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    'telephone': '+971-2-XXXXXXX',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Saadiyat Island Development Zone',
      'addressLocality': 'Abu Dhabi',
      'addressRegion': 'Abu Dhabi',
      'postalCode': '00000',
      'addressCountry': 'AE'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '24.5362',
      'longitude': '54.4332'
    },
    'url': 'https://arrowheadigc.com/locations/saadiyat-island',
    'priceRange': '$$$$',
    'areaServed': 'Saadiyat Island, Abu Dhabi',
    'knowsAbout': ['Luxury Villa Construction', 'Estidama consulting', 'Structural pile casting', 'Marble dry-cladding']
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Saadiyat Island Luxury Villas', 'item': 'https://arrowheadigc.com/locations/saadiyat-island' }
    ]
  };

  return (
    <div id="saadiyat-island-location-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[locationSchema, breadcrumbSchema]} />

      {/* 1. HERO HEADER */}
      <section className="bg-app-bg py-20 border-b border-app-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Saadiyat Island' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Luxury Custom Villa Builders in Saadiyat Island
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Delivering bespoke turnkey custom estates, structural concrete additions, and fine stone interior fittings on Saadiyat Island. Registered under DED License CN-4998977, we align with the building permit guidelines of the Abu Dhabi Municipality.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true&location=saadiyat"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-brand-gold text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-gold-hover shadow-lg transition-all duration-300"
            >
              Discuss Saadiyat Proposal
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
                Elite Residential Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight">
                Rigid Foundations &amp; Pearl Rating Consultations
              </h2>
              
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  Villa contracting and residential development on Saadiyat Island requires adhering to strict architectural guidelines, luxury aesthetic directives from master developers (such as Aldar), and the environmental preservation rules of the Saadiyat Beach district. Our design-build engineering teams utilize advanced Revit BIM tools to build high-precision digital models. This allows us to pre-coordinate structural columns, mechanical ductwork, electrical trays, and plumbing slopes, eliminating design conflicts before ground is broken.
                </p>
                <p>
                  To counter the highly corrosive coastal humidity and saline groundwater conditions of Saadiyat's beach corridors, our civil teams execute deep foundation engineering. We cast sulfate-resistant concrete piles, apply thick multi-layer elastomeric waterproofing membranes, and utilize specialized non-corrosive epoxy-coated rebars. All structural casting, foundations, and retaining walls utilize high-performance C50/60 concrete mixes enriched with microsilica, ensuring long-term resistance to chloride and sulfate attack.
                </p>
                <p>
                  Sustainability is a core focus of our Saadiyat operations. We manage the entire Estidama building rating process, achieving 1-Pearl to 3-Pearl ratings. We implement energy-saving technologies such as high-efficiency variable refrigerant flow (VRF) HVAC systems, low-E double-glazed structural windows, solar water heaters, and water-conserving sanitary fixtures. This reduces energy consumption by up to 35% while complying with Abu Dhabi Municipality's green building codes.
                </p>
                <p>
                  Our interior finishing teams are trained to execute custom, high-end designs. We install structural dry-cladding using premium Italian Carrara and Calacatta marble, apply decorative Venetian plastering, install specialized sound-dampening gypsum ceilings, and integrate automated smart-home lighting and climate controls, yielding an exceptional bespoke luxury home.
                </p>
              </div>
            </div>

            {/* Right Column: Local Projects List */}
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl self-start space-y-6">
              <h3 className="font-heading font-extrabold text-sm text-white border-b border-app-border pb-4 uppercase tracking-widest">
                Saadiyat Island Handovers
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
                  TAMM Portal Municipal Occupancy Certificates
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
          <Link href="/services/villa-construction" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Villa Construction
          </Link>
          <Link href="/services/villa-renovation" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Extensions &amp; Renovations
          </Link>
          <Link href="/services/facility-management" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Hard FM Maintenance AMC
          </Link>
        </div>
      </section>
    </div>
  );
}
