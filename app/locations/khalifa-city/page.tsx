import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Villa Extensions & Majlis Construction Khalifa City | ArrowHead',
  description: 'Specialized structural villa extensions, concrete majlis block contracting, and municipal building permit processing in Khalifa City, Abu Dhabi.',
  keywords: ['villa extensions Khalifa City', 'majlis construction Khalifa City', 'home renovations Khalifa City', 'TAMM building permit Abu Dhabi', 'structural contracting'],
  alternates: {
    canonical: 'https://arrowheadigc.com/locations/khalifa-city'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/locations/khalifa-city',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Villa Extensions & Majlis Construction Khalifa City | ArrowHead',
    description: 'Specialized structural villa extensions, concrete majlis block contracting, and municipal building permit processing in Khalifa City, Abu Dhabi.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Khalifa City Villa Extensions and Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Villa Extensions & Majlis Construction Khalifa City | ArrowHead',
    description: 'Specialized structural villa extensions, concrete majlis block contracting, and municipal building permit processing in Khalifa City, Abu Dhabi.',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function KhalifaCityGeoPage() {
  const localProjects = [
    {
      title: 'Khalifa City Villa Majlis Extension',
      scope: 'Structural design and casting of a secondary double-story majlis block, load-bearing validations, and boundary expansions.',
      spec: '2,800 sq ft Extension • TAMM Approved'
    },
    {
      title: 'Khalifa Sector 14 Sewer Reticulation',
      scope: 'Installation of DN 800mm gravity sewer mains, dewatering setups, and manhole connections.',
      spec: 'ADSSC Certified Materials'
    }
  ];

  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'ArrowHead General Contracting LLC - Khalifa City Operations',
    'image': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    'telephone': '+971-2-XXXXXXX',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Khalifa City Sector A',
      'addressLocality': 'Abu Dhabi',
      'addressRegion': 'Abu Dhabi',
      'postalCode': '00000',
      'addressCountry': 'AE'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '24.4124',
      'longitude': '54.5492'
    },
    'url': 'https://arrowheadigc.com/locations/khalifa-city',
    'priceRange': '$$$',
    'areaServed': 'Khalifa City, Abu Dhabi',
    'knowsAbout': ['Villa Extensions', 'Majlis Construction', 'TAMM approvals', 'Damp waterproofing']
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Khalifa City Villa Extensions', 'item': 'https://arrowheadigc.com/locations/khalifa-city' }
    ]
  };

  return (
    <div id="khalifa-city-location-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[locationSchema, breadcrumbSchema]} />

      {/* 1. HERO HEADER */}
      <section className="bg-app-bg py-20 border-b border-app-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Khalifa City' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Villa Extensions &amp; Majlis Construction in Khalifa City
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Delivering reinforced concrete structural extensions, detached guest Majlis blocks, boundary wall modifications, and full cosmetic refurbishments in Khalifa City. We manage all TAMM portal municipal inspections and structural NOCs.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true&location=khalifa"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
            >
              Discuss Khalifa City Proposal
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
                Home Upgrade &amp; Permits
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight">
                Secure Structural Additions &amp; Foundation Underpinning
              </h2>
              
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  Villa renovations, expansions, and structural additions in Khalifa City require professional engineering audits and proper municipality permissions. As a fully licensed Abu Dhabi general contracting firm, we specialize in high-end structural modifications, including detached Majlis construction, double-story bedroom extensions, boundary wall reconstructions, swimming pool installations, and complete cosmetic layout remodeling. We ensure every modification preserves structural safety and enhances property value.
                </p>
                <p>
                  Before starting any structural extensions, our structural engineers conduct deep load path analysis on the existing concrete slab and columns. If additional load bearing is required, we execute carbon fiber wrapping (CFRP), concrete jacketing, or incorporate structural steel I-beams to distribute weights safely. We also manage damp-proofing and sub-slab waterproofing systems to protect the existing foundations from water ingress.
                </p>
                <p>
                  We handle the entire municipal permitting process through the TAMM digital portal. Our in-house engineers prepare architectural layouts, structural designs, and MEP drafts, coordinating directly with Abu Dhabi Municipality (ADM) inspectors. We secure all necessary No Objection Certificates (NOCs), coordinate DED licensing renewals, and integrate Civil Defense (ADCD) compliant fire safety systems, securing the final legal Occupancy Certificate.
                </p>
                <p>
                  Our masonry and finishing teams execute premium exterior works, applying weather-resistant textured paints, luxury stone cladding, and customized wrought-iron gates. This modernizes the villa's exterior profile and ensures that the finished extension blends seamlessly with the original building architecture.
                </p>
  </div>
            </div>

            {/* Right Column: Local Projects List */}
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl self-start space-y-6">
              <h3 className="font-heading font-extrabold text-sm text-white border-b border-app-border pb-4 uppercase tracking-widest">
                Khalifa City Project Logs
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
                  TAMM Portal Submissions &amp; Approvals
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
          <Link href="/services/villa-renovation" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Villa Extensions &amp; Majlis
          </Link>
          <Link href="/services/villa-construction" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Turnkey Construction
          </Link>
          <Link href="/services/facility-management" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Villa Maintenance (Hard FM)
          </Link>
        </div>
      </section>
    </div>
  );
}
