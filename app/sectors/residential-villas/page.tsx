import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import CinematicSlider from '@/components/showcases/CinematicSlider';
import CadRevealSlider from '@/components/showcases/CadRevealSlider';
import BuildTimelineShowcase from '@/components/showcases/BuildTimelineShowcase';
import CinematicSpecGrid from '@/components/showcases/CinematicSpecGrid';
import CollageBoxShowcase from '@/components/showcases/CollageBoxShowcase';
import SpotlightRevealGrid from '@/components/showcases/SpotlightRevealGrid';
import ProjectControlCenter from '@/components/showcases/ProjectControlCenter';


export const metadata: Metadata = {
  title: 'Residential & Villa Construction Abu Dhabi | ArrowHead',
  description: 'Specialized residential general contracting services in Abu Dhabi. Design-build luxury villas, expansions, cosmetic renovations, and Estidama 1/2-Pearl approvals.',
  keywords: ['residential contracting Abu Dhabi', 'luxury villa builders', 'villa extension Khalifa City', 'Estidama villa compliance', 'custom homes Abu Dhabi'],
  alternates: {
    canonical: 'https://arrowheadigc.com/sectors/residential-villas',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/sectors/residential-villas',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Residential & Villa Construction Abu Dhabi | ArrowHead',
    description: 'Specialized residential general contracting services in Abu Dhabi. Design-build luxury villas, expansions, cosmetic renovations, and Estidama 1/2-Pearl approvals.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Residential and Luxury Villa Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential & Villa Construction Abu Dhabi | ArrowHead',
    description: 'Specialized residential general contracting services in Abu Dhabi. Design-build luxury villas, expansions, cosmetic renovations, and Estidama 1/2-Pearl approvals.',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function ResidentialVillasSectorPage() {
  const capabilities = [
    { title: 'Turnkey Luxury Villas', desc: 'Complete residential design, structural engineering, concrete casing, wall building, high-end MEP integration, and fine cosmetic plastering.' },
    { title: 'Custom Majlis Pavilions', desc: 'Detached Arabian majlis blocks, boundary fences, driveway paving, customized steel entrance gates, and landscape masonry.' },
    { title: 'Home Extensions', desc: 'Reinforced concrete additions, adding second-floor levels, structural partitions, kitchen and guest room extensions with load validations.' },
    { title: 'Cosmetic Renovations', desc: 'Bathroom tiling replacements, kitchen remodeling, thermal window installations, and complete structural damp remediation works.' },
  ];

  const residentialSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'ArrowHead General Contracting LLC - Residential Sector',
    'image': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    'telephone': '+971-2-XXXXXXX',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Abu Dhabi',
      'addressCountry': 'AE'
    },
    'url': 'https://arrowheadigc.com/sectors/residential-villas',
    'priceRange': '$$$$',
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Saadiyat Island' },
      { '@type': 'AdministrativeArea', 'name': 'Khalifa City' },
      { '@type': 'AdministrativeArea', 'name': 'Al Raha' },
      { '@type': 'AdministrativeArea', 'name': 'Yas Island' },
      { '@type': 'AdministrativeArea', 'name': 'Mussafah' }
    ],
    'knowsAbout': ['Design-build villas', 'Estidama Pearl ratings', 'TAMM building permits', 'Villa extensions']
  };

  const locationLinks = [
    { name: 'Saadiyat Island (Executive Estates)', href: '/locations/saadiyat-island' },
    { name: 'Khalifa City (Villas & Majlis Blocks)', href: '/locations/khalifa-city' },
    { name: 'Al Raha Beach (Custom Turnkey builds)', href: '/locations/al-raha' },
    { name: 'Yas Island (High-End Residential)', href: '/locations/yas-island' },
    { name: 'Mussafah (Technical FM Support)', href: '/locations/mussafah' },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Sectors', 'item': 'https://arrowheadigc.com/sectors' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Residential & Villas', 'item': 'https://arrowheadigc.com/sectors/residential-villas' }
    ]
  };

  return (
    <div id="residential-villas-sector-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[residentialSchema, breadcrumbSchema]} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-bg py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Sectors', href: '/sectors' }, { name: 'Residential & Villas' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Residential &amp; Luxury Villa Contracting
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Delivering executive custom homes, custom structural extensions, and complete villa refurbishments. We manage all municipal approvals on the TAMM portal, satisfying Estidama Pearl classifications.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
            >
              Discuss Your Villa Project
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

      {/* 2. DETAILED SECTOR COPY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono font-bold">Executive Living</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight leading-snug">
                Sleek Architecture &amp; Rigid Foundations
              </h2>
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
          <p>
            The residential villa sector in Abu Dhabi is highly regulated to ensure compliance with architectural codes, safety regulations, and environmental sustainability standards. Developing a custom private residence requires coordination between structural engineering, interior layouts, and government utility permits. ArrowHead provides comprehensive general contracting services, managing residential projects from architectural BIM design to turnkey handover.
          </p>
          <p>
            Our structural engineering team designs and executes robust foundation systems. We assess local soil conditions to design bored piles or pour heavy reinforced concrete raft slabs. We apply advanced waterproofing membranes and install durable concrete masonry structures using sulfate-resistant cement to protect the villa structure from moisture and chemical attack.
          </p>
          <p>
            We manage the entire regulatory clearance flow through the TAMM digital portal. We coordinate approvals with Abu Dhabi Municipality for building permits, obtain electrical and water connections from the Abu Dhabi Distribution Company (ADDC), align all designs with Estidama Pearl requirements, and integrate Civil Defense (ADCD) compliant fire safety systems, securing the legal Occupancy Certificate.
          </p>
  </div>
            </div>
            
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl space-y-6">
              <h4 className="font-heading font-extrabold text-sm text-white border-b border-app-border pb-4 uppercase tracking-widest">
                Villa capabilities
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
                                    <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE L</span>
                                    <h3 className="text-lg font-heading font-extrabold tracking-tight">Asymmetric Random-Sized Collage Grid</h3>
                                  </div>
                                  <CollageBoxShowcase />
                                </div>
                                </div>
                                </section>
                

      <section className="py-24 border-b border-app-border relative bg-app-bg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-app-border pb-4">
                    <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE E</span>
                    <h3 className="text-lg font-heading font-extrabold tracking-tight">Cinematic Widescreen Progress Bar Slideshow</h3>
                  </div>
                  <CinematicSlider />
                </div>
                </div>
                </section>

                <section className="py-24 border-b border-app-border relative bg-app-bg">
                              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                           <div className="space-y-6 mb-24">
                            <div className="flex items-center gap-4 border-b border-app-border pb-4">
                              <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE N</span>
                              <h3 className="text-lg font-heading font-extrabold tracking-tight">Material Spec Spotlight Reveal Grid</h3>
                            </div>
                            <SpotlightRevealGrid />
                          </div>
                          </div>
                          </section>

                          <section className="py-24 border-b border-app-border relative bg-app-bg">
                                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="space-y-6 mb-24">
                                      <div className="flex items-center gap-4 border-b border-app-border pb-4">
                                        <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE R</span>
                                        <h3 className="text-lg font-heading font-extrabold tracking-tight">Widescreen Editorial Showcase &amp; Material Swatch Selector</h3>
                                      </div>
                                      <ProjectControlCenter />
                                    </div>
                                    </div>
                                    </section>
                                    
                          

      {/* 3. REGIONAL SILO & KNOWLEDGE MATRIX */}
      <section className="py-16 bg-app-secondary border-t border-app-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                Active Residential Operations
              </h3>
              <p className="text-xs text-app-muted mb-6 font-light">
                ArrowHead builds custom homes and extensions across major residential areas in Abu Dhabi:
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
                Consult our engineering guidelines for residential permits and green building designs:
              </p>
              <div className="flex flex-col space-y-4">
                <Link href="/insights/guide-to-tamm-villa-approvals" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">Abu Dhabi TAMM Building Permit Guide</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Learn about architectural guidelines, drawings, NOCs, and final approvals.</span>
                </Link>
                <Link href="/insights/understanding-estidama-pearl-ratings" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">Estidama Pearl Ratings Guide</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Compliance checklist for private villas to satisfy DMT sustainability ratings.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="py-24 border-b border-app-border relative bg-app-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-6 mb-24">
            <div className="flex items-center gap-4 border-b border-app-border pb-4">
              <span className="text-xs font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded">STYLE F</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Interactive Drag-to-Reveal CAD Blueprint vs. Finished Build</h3>
            </div>
            <CadRevealSlider />
          </div>
          </div>
          </section>

      {/* 4. RELATED SERVICES */}
      <section className="py-16 bg-app-secondary border-t border-app-border text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">Related Services for Private Clients</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/services/villa-construction" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Villa Construction
          </Link>
          <Link href="/services/villa-renovation" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Villa Renovation
          </Link>
          <Link href="/services/facility-management" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Home Maintenance (AMC)
          </Link>
        </div>
      </section>
    </div>
  );
}
