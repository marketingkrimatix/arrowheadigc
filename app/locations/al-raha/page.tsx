import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Turnkey Luxury Villa Construction Al Raha | ArrowHead Contracting',
  description: 'Turnkey luxury villa contracting and home renovations in Al Raha Gardens & Al Raha Beach, Abu Dhabi. High-end finishing and MEP installations.',
  keywords: ['villa construction Al Raha', 'turnkey villa builder Al Raha', 'home renovations Al Raha Gardens', 'HVAC installation Al Raha', 'residential general contractor'],
  alternates: {
    canonical: 'https://arrowheadigc.com/locations/al-raha'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/locations/al-raha',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Turnkey Luxury Villa Construction Al Raha | ArrowHead Contracting',
    description: 'Turnkey luxury villa contracting and home renovations in Al Raha Gardens & Al Raha Beach, Abu Dhabi. High-end finishing and MEP installations.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Al Raha Turnkey Luxury Villa Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turnkey Luxury Villa Construction Al Raha | ArrowHead Contracting',
    description: 'Turnkey luxury villa contracting and home renovations in Al Raha Gardens & Al Raha Beach, Abu Dhabi. High-end finishing and MEP installations.',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function AlRahaGeoPage() {
  const localProjects = [
    {
      title: 'Al Raha Gardens Turnkey Villa',
      scope: 'Complete design-build of a contemporary luxury 6-bedroom villa. Integrating smart lighting, VRF multi-zone HVAC ducting, and premium marble finishes.',
      spec: '12,500 sq ft • 2-Pearl Estidama Certified'
    },
    {
      title: 'Al Raha Beach Commercial Fit-Out',
      scope: 'Renovation and MEP remodeling for a retail commercial block, executing Civil Defense wet sprinkler configurations.',
      spec: 'Mechanical & Plumbing Remodeling'
    }
  ];

  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'ArrowHead General Contracting LLC - Al Raha Operations',
    'image': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    'telephone': '+971-2-XXXXXXX',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Al Raha Beach Corridor',
      'addressLocality': 'Al Raha Gardens',
      'addressRegion': 'Abu Dhabi',
      'postalCode': '00000',
      'addressCountry': 'AE'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '24.4398',
      'longitude': '54.5710'
    },
    'url': 'https://arrowheadigc.com/locations/al-raha',
    'priceRange': '$$$$',
    'areaServed': 'Al Raha, Abu Dhabi',
    'knowsAbout': ['Villa Design Build', 'Turnkey Finishes', 'VRF Ducting', 'Estidama compliance']
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Al Raha Luxury Villas & Construction', 'item': 'https://arrowheadigc.com/locations/al-raha' }
    ]
  };

  return (
    <div id="al-raha-location-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[locationSchema, breadcrumbSchema]} />

      {/* 1. HERO HEADER */}
      <section className="bg-app-bg py-20 border-b border-app-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Al Raha' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Turnkey Villa Construction &amp; Fit-Out in Al Raha
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Delivering premium turnkey custom villas, structural renovations, and specialized commercial MEP installations in Al Raha Gardens and Al Raha Beach. Registered under Abu Dhabi DED license CN-4998977.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true&location=alraha"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
            >
              Discuss Al Raha Proposal
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
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono font-bold">
                Luxury Living Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight">
                Turnkey Project Delivery &amp; High-Efficiency MEP Systems
              </h2>
              
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  Al Raha Beach is one of Abu Dhabi's premier waterfront residential zones, demanding the highest level of craftsmanship, structural safety, and mechanical sophistication. ArrowHead provides turnkey villa construction, high-end residential extensions, and premium MEP remodeling services in Al Raha Gardens, Al Bandar, Al Muneera, and adjacent luxury communities, ensuring compliance with strict community guidelines and municipal standards.
                </p>
                <p>
                  To address the unique, saturated soil profiles found near the canal waterfront, we perform comprehensive pile foundation engineering. We cast bored concrete piles to deep load-bearing strata, execute structural integrity testing (PIT), and apply multi-layer self-adhesive waterproofing membranes. This prevents groundwater moisture from rising into the villa foundations, protecting structural masonry from efflorescence and salt damage.
                </p>
                <p>
                  Our specialized MEP division coordinates mechanical and electrical layout engineering. We perform electrical load calculations, design and dress main Distribution Boards (DB) to ADDC regulations, size and route double-skin HVAC duct networks, and connect chilled water pipelines to district cooling systems. We install automated variable air volume (VAV) boxes to maintain optimal indoor climate control.
                </p>
                <p>
                  We manage the entire utility application process. Our engineers submit load schedules and single-line diagrams to the Abu Dhabi Distribution Company (ADDC). We coordinate all testing, inspect grounding and continuity systems, and obtain the necessary clearances to secure permanent electrical power connections and municipal water meters.
                </p>
  </div>
            </div>

            {/* Right Column: Local Projects List */}
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl self-start space-y-6">
              <h3 className="font-heading font-extrabold text-sm text-white border-b border-app-border pb-4 uppercase tracking-widest">
                Al Raha Beach Handovers
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
                  Estidama &amp; ADM Permit Compliant
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
            Home Renovations
          </Link>
          <Link href="/services/facility-management" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Residential FM AMC Support
          </Link>
        </div>
      </section>
    </div>
  );
}
