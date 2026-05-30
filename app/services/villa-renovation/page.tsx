import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Villa Renovation & Extensions Abu Dhabi | ArrowHead',
  description: 'Premium home renovations, structural extensions, layout remodeling, and boundary wall constructions in Abu Dhabi. We manage all TAMM municipal approvals.',
  keywords: ['villa renovation Abu Dhabi', 'home extensions Abu Dhabi', 'bathroom upgrade Abu Dhabi', 'boundary wall construction Abu Dhabi', 'TAMM renovation permit'],
  alternates: {
    canonical: 'https://arrowheadigc.com/services/villa-renovation',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/services/villa-renovation',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Villa Renovation & Extensions Abu Dhabi | ArrowHead',
    description: 'Premium home renovations, structural extensions, layout remodeling, and boundary wall constructions in Abu Dhabi. We manage all TAMM municipal approvals.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Villa Renovation and Extensions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Villa Renovation & Extensions Abu Dhabi | ArrowHead',
    description: 'Premium home renovations, structural extensions, layout remodeling, and boundary wall constructions in Abu Dhabi. We manage all TAMM municipal approvals.',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function VillaRenovationPage() {
  const subServices = [
    {
      title: 'Structural Extensions & Addition',
      desc: 'Expand your living space safely. We construct reinforced concrete extensions, add extra guest bedrooms, extend dining halls, and build external Majlis pavilions with full structural load calculations.',
    },
    {
      title: 'Complete Interior Remodeling',
      desc: 'Redefine your interior layout. We handle complete kitchen overhauls, modern bathroom renovations (including piping retrofits and leakage prevention), premium marble floor polishing, and smart-lighting ceiling upgrades.',
    },
    {
      title: 'Boundary Walls & Facade Redesign',
      desc: 'Enhance your property curb appeal. We build durable boundary walls matching municipal heights, apply premium exterior textured plastering, install customized iron gates, and apply modern thermal cladding to old facades.',
    },
    {
      title: 'Swimming Pools & Landscape civil works',
      desc: 'Convert your backyard into an oasis. We construct custom concrete swimming pools, pergolas, stone paving pathways, outdoor seating majlis, and install sub-surface drainage lines.',
    },
  ];

  const standards = [
    { title: 'Project Locations', value: 'Khalifa City, Al Raha, Yas Island, Saadiyat Island' },
    { title: 'Permitting Authority', value: 'Abu Dhabi Municipality (ADM) Building Permits' },
    { title: 'Approval Portals', value: 'TAMM Platform Submittals' },
    { title: 'Types of Upgrades', value: 'Majlis, Boundary Walls, Structural Extensions, Fit-out' },
    { title: 'Structural Safety', value: 'PE-stamped Load Calculations & Soil Integrity Checks' },
  ];

  const faqs = [
    {
      q: 'Do I need a municipality permit to build a majlis or boundary wall extension?',
      a: 'Yes. Any structural addition, external majlis build, or boundary wall height modification requires a building permit from the Abu Dhabi Municipality. We prepare the architectural drafts, boundary drawings, and submit them through the TAMM portal to secure the necessary construction permit.',
    },
    {
      q: 'Can you renovate a villa while the family is residing inside?',
      a: 'For minor cosmetic upgrades and landscaping, yes. However, for major structural extensions, complete layout remodeling, or major MEP retrofits, we strongly advise vacating the premises to ensure safety and speed of delivery. We partition workspaces to contain dust and noise when partial residency is required.',
    },
    {
      q: 'How do you handle water leakage issues in old bathrooms?',
      a: 'Our remediation protocol involves striping old tiles, applying three layers of premium polyurethane waterproofing membrane, performing a 48-hour flood test to verify integrity, replacing rusty pipelines with durable PPR pipes, and finishing with premium quality tiling.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Villa Renovation & Extensions',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'ArrowHead General Contracting LLC',
      'telephone': '+971-2-XXXXXXX',
      'priceRange': '$$$$',
      'image': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Abu Dhabi',
        'addressCountry': 'AE'
      }
    },
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Khalifa City' },
      { '@type': 'AdministrativeArea', 'name': 'Saadiyat Island' },
      { '@type': 'AdministrativeArea', 'name': 'Al Raha' },
      { '@type': 'AdministrativeArea', 'name': 'Yas Island' },
      { '@type': 'AdministrativeArea', 'name': 'Mussafah' }
    ],
    'description': 'Elite custom villa extensions, Majlis construction, layout remodeling, and structural upgrades in Abu Dhabi. We manage municipal approvals on the TAMM portal.'
  };

  const locationLinks = [
    { name: 'Khalifa City (Villa Extensions & Majlis)', href: '/locations/khalifa-city' },
    { name: 'Al Raha Beach (Luxury Remodeling)', href: '/locations/al-raha' },
    { name: 'Saadiyat Island (Custom Modernization)', href: '/locations/saadiyat-island' },
    { name: 'Yas Island (High-End Upgrades)', href: '/locations/yas-island' },
    { name: 'Mussafah (Structural Repairs & FM)', href: '/locations/mussafah' },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://arrowheadigc.com/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Villa Renovation & Extensions', 'item': 'https://arrowheadigc.com/services/villa-renovation' }
    ]
  };

  return (
    <div id="villa-renovation-service-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[faqSchema, serviceSchema, breadcrumbSchema]} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-bg py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: 'Villa Renovation' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Villa Renovation &amp; <br />Extensions Abu Dhabi
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Premium home renovations, structural extensions, layout remodeling, and boundary wall constructions. We manage all architectural drawings and municipality permits via TAMM to upgrade your home safely.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
            >
              Request a Renovation Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION OVERVIEW */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Renovations &amp; Extensions</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight">
                Transforming Existing Structures
              </h2>
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  Villa expansions, remodeling, and structural renovations in residential areas demand careful engineering assessments to verify that new loads do not compromise the existing structure. ArrowHead delivers high-end home renovation, extension, and remodeling services. We handle everything from constructing detached Majlis blocks and adding double-story extensions to installing swimming pools, reinforcing boundary walls, and updating interior MEP layouts.
                </p>
                <p>
                  Before starting any structural extension, our structural engineers conduct deep load path analysis on the existing concrete frame. If additional load bearing is required, we execute carbon fiber wrapping (CFRP), concrete jacketing, or incorporate structural steel I-beams to distribute weights safely. We also manage damp-proofing and sub-slab waterproofing systems to protect the existing foundations from water ingress.
                </p>
                <p>
                  We handle the entire municipal permitting process through the TAMM digital portal. Our in-house engineers prepare architectural layouts, structural designs, and MEP drafts, coordinating directly with Abu Dhabi Municipality (ADM) inspectors. We secure all necessary No Objection Certificates (NOCs), coordinate DED licensing renewals, and integrate Civil Defense (ADCD) compliant fire safety systems, securing the final legal Occupancy Certificate.
                </p>
                <p>
                  Our finishing and fit-out crews apply premium exterior plasters, natural stone wall tiles, high-end paint coatings, and custom joinery fits. We modernize mechanical, plumbing, and electrical boards, ensuring full compliance with current municipality codes.
                </p>
  </div>
            </div>

            {/* Right Details Table */}
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl">
              <h3 className="text-base font-bold text-white border-b border-app-border pb-4 uppercase tracking-wider font-heading">
                Renovation Metrics
              </h3>
              <ul className="mt-6 space-y-4 text-xs sm:text-sm">
                {standards.map((std, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row justify-between py-2 border-b border-app-border last:border-b-0">
                    <span className="text-app-muted font-medium">{std.title}</span>
                    <span className="font-semibold text-brand-gold mt-1 sm:mt-0 text-left sm:text-right">{std.value}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SUB-SERVICES GRID */}
      <section className="py-20 bg-app-secondary border-y border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Scope of Work</span>
            <h2 className="mt-3 text-3xl font-heading font-extrabold text-app-fg tracking-tight">
              Structural &amp; Cosmetic Remodeling Scopes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((sub, idx) => (
              <div key={idx} className="bg-app-card border border-app-border offset-border-frame shadow-sm p-8 rounded-xl border border-app-border shadow-2xl space-y-3">
                <span className="text-brand-teal font-mono font-bold text-xs block">0{idx + 1}. Upgrade Class</span>
                <h3 className="text-base sm:text-lg font-bold text-white">{sub.title}</h3>
                <p className="text-app-muted text-xs sm:text-sm leading-relaxed font-light">{sub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPROVALS COMPLIANCE BANNER */}
      <section className="bg-app-secondary text-white py-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            Worry-free Municipal Permits via TAMM
          </h2>
          <p className="text-xs sm:text-sm text-app-muted max-w-3xl mx-auto leading-relaxed font-light">
            Performing construction without permits is subject to municipal fines and complicates future property sales. ArrowHead manages the entire permit lifecycle: preparing architectural layouts, obtaining structural engineering NOCs, and handling municipality inspection clearances to guarantee fully legal handovers.
          </p>
          <div className="flex justify-center space-x-6 text-[10px] sm:text-xs text-brand-teal font-bold uppercase tracking-wider">
            <span>✓ Structural NOCs</span>
            <span>✓ Municipality Inspections</span>
            <span>✓ As-Built Clearances</span>
            <span>✓ Legal Occupancy Updates</span>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-app-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Inquiry Support</span>
            <h2 className="mt-3 text-3xl font-heading font-extrabold text-app-fg tracking-tight">
              Renovation FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-app-secondary border border-app-border rounded-lg overflow-hidden">
                <summary className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-white hover:text-brand-teal focus:outline-none transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <svg
                    className="w-4 h-4 text-app-muted/60 transition-transform duration-300 shrink-0 group-open:rotate-180 group-open:text-brand-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="border-t border-app-border">
                  <p className="p-6 text-app-muted text-xs sm:text-sm leading-relaxed font-light bg-app-bg">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REGIONAL SILO & KNOWLEDGE MATRIX */}
      <section className="py-16 bg-app-secondary border-t border-app-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                Active Regional Operations
              </h3>
              <p className="text-xs text-app-muted mb-6 font-light">
                We handle premium extensions and residential remodeling across Abu Dhabi districts:
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

      {/* 7. CALL TO ACTION */}
      <section className="py-16 bg-app-secondary border-t border-app-border text-center">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
          Discuss Your Villa Renovation Scope
        </h2>
        <p className="mt-3 text-app-muted text-xs sm:text-sm max-w-xl mx-auto font-light">
          Request a physical site survey by our contracting engineers for structural estimations.
        </p>
        <div className="mt-8">
          <Link
            href="/contact?rfq=true"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
          >
            Request a Renovation Survey
          </Link>
        </div>
      </section>
    </div>
  );
}
