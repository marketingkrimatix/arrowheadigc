import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import BuildTimelineShowcase from '@/components/showcases/BuildTimelineShowcase';
import CinematicSpecGrid from '@/components/showcases/CinematicSpecGrid';
import AlternatingAsymmetricGrid from '@/components/showcases/AlternatingAsymmetricGrid';

export const metadata: Metadata = {
  title: 'Commercial & Retail General Contracting Abu Dhabi | ArrowHead',
  description: 'Tenant fit-out, MEP engineering, chilled water line adjustments, fire sprinkler retrofits, and integrated facilities management for malls and offices in Abu Dhabi.',
  keywords: ['commercial contracting Abu Dhabi', 'office fit-out Abu Dhabi', 'mall maintenance Abu Dhabi', 'chilled water retrofits UAE', 'Civil Defense approved contractors'],
  alternates: {
    canonical: 'https://arrowheadigc.com/sectors/commercial-retail',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/sectors/commercial-retail',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Commercial & Retail General Contracting Abu Dhabi | ArrowHead',
    description: 'Tenant fit-out, MEP engineering, chilled water line adjustments, fire sprinkler retrofits, and integrated facilities management for malls and offices in Abu Dhabi.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Commercial and Retail Sector Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial & Retail General Contracting Abu Dhabi | ArrowHead',
    description: 'Tenant fit-out, MEP engineering, chilled water line adjustments, fire sprinkler retrofits, and integrated facilities management for malls and offices in Abu Dhabi.',
    images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function CommercialRetailSectorPage() {
  const capabilities = [
    { title: 'Tenant Fit-out MEP', desc: 'Sizing power cables, relocating sprinkler lines, dressing Distribution Boards (DB), and modifying duct diffusers for office layouts.' },
    { title: 'Chilled Water Retrofits', desc: 'Installing and balancing chilled water fan coil units (FCU), valves, actuator motors, and thermal insulation wrap pipelines.' },
    { title: 'Fire Safety Compliance', desc: 'Upgrading and servicing wet sprinkler lines, smoke detectors, manual call points, and securing Civil Defense clearance certificates.' },
    { title: 'Integrated Facility Management', desc: 'Comprehensive Annual Maintenance Contracts (AMCs) for office blocks, covering HVAC, MEP preventive checks, deep cleaning, and pest control.' },
  ];

  const commercialSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'ArrowHead General Contracting LLC - Commercial Sector',
    'image': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    'telephone': '+971-2-XXXXXXX',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Abu Dhabi',
      'addressCountry': 'AE'
    },
    'url': 'https://arrowheadigc.com/sectors/commercial-retail',
    'priceRange': '$$$$',
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Al Raha' },
      { '@type': 'AdministrativeArea', 'name': 'Saadiyat Island' },
      { '@type': 'AdministrativeArea', 'name': 'Yas Island' },
      { '@type': 'AdministrativeArea', 'name': 'Mussafah' },
      { '@type': 'AdministrativeArea', 'name': 'Khalifa City' }
    ],
    'knowsAbout': ['Tenant fit-out MEP', 'Chilled water systems', 'ADCD clearances', 'Building AMCs']
  };

  const locationLinks = [
    { name: 'Al Raha Beach (Commercial & Retail)', href: '/locations/al-raha' },
    { name: 'Saadiyat Island (High-End Corporate)', href: '/locations/saadiyat-island' },
    { name: 'Yas Island (Retail & Entertainment Zones)', href: '/locations/yas-island' },
    { name: 'Mussafah (Commercial Warehouses)', href: '/locations/mussafah' },
    { name: 'Khalifa City (Community Commercial Centers)', href: '/locations/khalifa-city' },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Sectors', 'item': 'https://arrowheadigc.com/sectors' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Commercial & Retail', 'item': 'https://arrowheadigc.com/sectors/commercial-retail' }
    ]
  };

  return (
    <div id="commercial-retail-sector-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[commercialSchema, breadcrumbSchema]} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-bg py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Sectors', href: '/sectors' }, { name: 'Commercial & Retail' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Commercial &amp; Retail <br />General Contracting
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Delivering high-end interior tenant fit-outs, commercial MEP installations, fire sprinkler retrofits, and comprehensive facilities management contracts for offices and shopping malls.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
            >
              Request a Commercial Quote
            </Link>
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

      {/* 2. DETAILED SECTOR COPY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Office &amp; Mall Scopes</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight leading-snug">
                Minimizing Business Disruption with Certified Engineering
              </h2>
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  The commercial and retail sector in Abu Dhabi demand high-efficiency building operations, modern architectural aesthetics, and strict safety compliance to protect property assets, minimize tenant disruptions, and ensure customer satisfaction. ArrowHead provides comprehensive general contracting and mechanical, electrical, and plumbing (MEP) installations for shopping malls, retail outlets, corporate office blocks, and commercial business centers.
                </p>
                <p>
                  Our specialized MEP fit-out division is experienced in managing landlord and tenant work subdivisions. We execute complete design modifications, resize AC air duct distribution networks, balance airflows, and install chilled water fan coil units (FCUs). Our electrical engineers calculate power load distributions, design and dress main Distribution Boards (DB) to ADDC regulations, install wire ways, and pull sub-main cabling. We install Civil Defense (ADCD) compliant fire sprinklers, smoke detectors, and manual call points, securing municipal building approvals.
                </p>
                <p>
                  To preserve commercial building value, our B2B facility management division structures comprehensive Annual Maintenance Contracts (AMCs). We perform scheduled preventative care, including AC condenser cleaning, mechanical pump checks, DB board thermal imaging scans, and water tank disinfections. These AMCs feature detailed Service Level Agreements (SLAs) with emergency technician dispatch times under 2 to 4 hours, ensuring continuous operation for commercial tenants.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl space-y-6">
              <h4 className="font-heading font-extrabold text-sm text-white border-b border-app-border pb-4 uppercase tracking-widest">
                Commercial capabilities
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
              <span className="text-xs font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded">STYLE H</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Progressive Build Timeline Phase Switcher</h3>
            </div>
            <BuildTimelineShowcase />
          </div>
          </div>
          </section>

          <section className="py-24 border-b border-app-border relative bg-app-bg">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-6">
                      <div className="flex items-center gap-4 border-b border-app-border pb-4">
                        <span className="text-xs font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded">STYLE U</span>
                        <h3 className="text-lg font-heading font-extrabold tracking-tight">Alternating Asymmetric Grid (Brochure Layout)</h3>
                      </div>
                      <AlternatingAsymmetricGrid />
                    </div>
                  </div>
                </section>
          

      {/* 3. REGIONAL SILO & KNOWLEDGE MATRIX */}
      <section className="py-16 bg-app-secondary border-t border-app-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                Active Commercial Operations
              </h3>
              <p className="text-xs text-app-muted mb-6 font-light">
                We handle turnkey MEP and building maintenance across primary Abu Dhabi commercial areas:
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
                Review our technical logs and energy compliance requirements for commercial builds:
              </p>
              <div className="flex flex-col space-y-4">
                <Link href="/insights/understanding-estidama-pearl-ratings" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">Estidama Pearl Ratings Guide</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Learn about sustainable building insulation, HVAC efficiency, and Pearl ratings.</span>
                </Link>
                <Link href="/insights/guide-to-tamm-villa-approvals" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">Abu Dhabi TAMM Building Permit Guide</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Municipal permit guidelines useful when planning building modifications.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RELATED SERVICES */}
      <section className="py-16 bg-app-secondary border-t border-app-border text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white">Related Services for Commercial Clients</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/services/mep-specialized" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            MEP &amp; Fit-out Works
          </Link>
          <Link href="/services/facility-management" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Integrated Hard &amp; Soft FM
          </Link>
          <Link href="/contact" className="px-5 py-2.5 bg-app-bg border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
            Request an AMC Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
