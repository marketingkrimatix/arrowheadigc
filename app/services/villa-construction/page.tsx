import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import VillaStructureShowcase from '@/components/VillaStructureShowcase';

export const metadata: Metadata = {
  title: 'Luxury Villa Construction Contractors Abu Dhabi | ArrowHead',
  description: 'Elite design-build villa contractors in Abu Dhabi. Turnkey residential engineering, custom architecture, structural casting, shell & core, and Estidama certifications.',
  keywords: ['villa construction Abu Dhabi', 'luxury villa builders Abu Dhabi', 'custom villa contractors Abu Dhabi', 'residential construction Abu Dhabi', 'TAMM building permit villa'],
  alternates: {
    canonical: 'https://arrowheadigc.com/services/villa-construction',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/services/villa-construction',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Luxury Villa Construction Contractors Abu Dhabi | ArrowHead',
    description: 'Elite design-build villa contractors in Abu Dhabi. Turnkey residential engineering, custom architecture, structural casting, shell & core, and Estidama certifications.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Luxury Villa Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Villa Construction Contractors Abu Dhabi | ArrowHead',
    description: 'Elite design-build villa contractors in Abu Dhabi. Turnkey residential engineering, custom architecture, structural casting, shell & core, and Estidama certifications.',
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function VillaConstructionPage() {
  const subServices = [
    {
      title: 'Architectural & Spatial Planning',
      desc: 'Our design associates shape your vision into high-end floor plans, elevations, and 3D renders. We specialize in contemporary minimalist, classic Mediterranean, and traditional Arabian designs, maximizing spatial efficiency and natural light.',
    },
    {
      title: 'Structural Engineering & Groundworks',
      desc: 'Executing safe foundations in UAE soils is crucial. We handle the complete groundwork scope: excavation, dewatering, anti-termite treatment, waterproofing, and high-strength reinforced concrete casting for rafts, columns, and slabs.',
    },
    {
      title: 'MEP Systems Integration',
      desc: 'We install premium, energy-efficient MEP services. This includes multi-zone VRF HVAC systems, intelligent electrical distribution boards, high-grade water filtration plumbing, and structured networking cabling for smart home devices.',
    },
    {
      title: 'Luxury Finishings & Fine Fit-out',
      desc: 'Our finishing division applies high-end materials: imported marble tiles, custom gypsum ceiling designs, customized solid wood doors, and sanitaryware fittings, delivering an elite luxury finish.',
    },
  ];

  const standards = [
    { title: 'Estidama Rating', value: '1-Pearl, 2-Pearl, or 3-Pearl Compliance' },
    { title: 'Contract Models', value: 'Turnkey Design-Build, Lump Sum Contracting' },
    { title: 'Municipal Approvals', value: 'Abu Dhabi Municipality (ADM) Permits via TAMM' },
    { title: 'Civil Defense', value: 'ADCD Safety & Fire Integrity Clearances' },
    { title: 'Structures Built', value: 'Modern Villas, Classic Mansions, Majlis Pavilions' },
  ];

  const faqs = [
    {
      q: 'How long does the Abu Dhabi villa permitting process take?',
      a: 'Typically, securing the initial design review, structural NOCs, Civil Defense clearance, and final building permit from the Abu Dhabi Municipality takes between 4 to 8 weeks, depending on the complexity of the architectural plans. We handle the entire submittal process on the TAMM portal.',
    },
    {
      q: 'What is Estidama, and is it mandatory for my villa?',
      a: 'Yes. Estidama (Arabic for sustainability) is a building classification system managed by the Abu Dhabi Department of Municipalities and Transport. All new private villas in Abu Dhabi must achieve a minimum rating of 1-Pearl to secure a building permit. We design with sustainable shading, insulation, and water fixtures to ensure Estidama compliance.',
    },
    {
      q: 'Do you offer custom interior design and landscaping alongside the shell build?',
      a: 'Yes, we provide fully integrated turnkey contracting. Our services cover structural construction, MEP, interior fit-outs (joinery, marble, paints), and external landscape works (swimming pools, pergolas, boundary walls, and paving).',
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
    'name': 'Luxury Villa Construction',
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
      { '@type': 'AdministrativeArea', 'name': 'Saadiyat Island' },
      { '@type': 'AdministrativeArea', 'name': 'Yas Island' },
      { '@type': 'AdministrativeArea', 'name': 'Khalifa City' },
      { '@type': 'AdministrativeArea', 'name': 'Al Raha' },
      { '@type': 'AdministrativeArea', 'name': 'Mussafah' }
    ],
    'description': 'Elite custom residential builders in Abu Dhabi. We manage the entire lifecycle of your dream villa—from initial architectural drawings and structural casting to MEP installation, luxury finishes, and municipal approvals.'
  };

  const locationLinks = [
    { name: 'Saadiyat Island (Luxury Villas)', href: '/locations/saadiyat-island' },
    { name: 'Khalifa City (Residential & Majlis)', href: '/locations/khalifa-city' },
    { name: 'Al Raha Beach (Custom Builds)', href: '/locations/al-raha' },
    { name: 'Yas Island (Villas & Infrastructure)', href: '/locations/yas-island' },
    { name: 'Mussafah (Industrial & FM)', href: '/locations/mussafah' },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://arrowheadigc.com/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Villa Construction', 'item': 'https://arrowheadigc.com/services/villa-construction' }
    ]
  };

  return (
    <div id="villa-construction-service-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[faqSchema, serviceSchema, breadcrumbSchema]} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-bg py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: 'Villa Construction' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Luxury Villa Construction <br />Contractors Abu Dhabi
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Elite custom residential builders in Abu Dhabi. We manage the entire lifecycle of your dream villa—from initial architectural drawings and structural casting to MEP installation, luxury finishes, and municipal approvals.
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

      {/* 2. SPECIFICATION OVERVIEW */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Turnkey Residential</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight">
                Crafting Executive Living Spaces
              </h2>
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  Constructing a custom luxury villa in Abu Dhabi is a multi-phase engineering process that demands close coordination between architectural aesthetics, structural integrity, and local municipal approvals. At ArrowHead, we offer a comprehensive turnkey Design-Build villa contracting service. We translate our clients' visions into precise Revit BIM models, coordinating structural columns, mechanical ductwork, electrical schedules, and premium finishes before starting excavation on site.
                </p>
                <p>
                  Our structural engineering division handles all foundation design and civil works. To address the varying soil conditions across Abu Dhabi (such as Yas Island's high water table or Saadiyat's sandy beach corridors), we design and execute deep bored piles, cast heavy reinforced concrete raft foundations, and apply thick, self-adhesive bituminous waterproofing membranes. We utilize high-strength C40/C50 concrete containing sulfate-resistant cement (SRC) and microsilica to ensure the villa's structure remains impervious to moisture and salt damage.
                </p>
                <p>
                  We coordinate the entire municipal permit and approval workflow through the Abu Dhabi government's TAMM portal. Our in-house engineers submit structural calculations and MEP layouts to Abu Dhabi Municipality (ADM), secure approvals from the Abu Dhabi Distribution Company (ADDC) for water and electricity loads, and integrate Estidama Pearl rating requirements. We coordinate all stage inspections with municipal engineers and secure the final Occupancy Certificate, ensuring a seamless, compliant handover.
                </p>
  </div>
            </div>

  {/* Right Details Table */}
            {/* <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl">
              <h3 className="text-base font-bold text-white border-b border-app-border pb-4 uppercase tracking-wider font-heading">
                Villa Project Metrics
              </h3>
              <ul className="mt-6 space-y-4 text-xs sm:text-sm">
                {standards.map((std, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row justify-between py-2 border-b border-app-border last:border-b-0">
                    <span className="text-app-muted font-medium">{std.title}</span>
                    <span className="font-semibold text-brand-gold mt-1 sm:mt-0 text-left sm:text-right">{std.value}</span>
                  </li>
                ))}
              </ul> */}
            {/* Right Details: Interactive 3D Villa Structure Layer Showcase */}
            <div className="lg:col-span-5 w-full">
              <VillaStructureShowcase />
            </div>

          </div>
        </div>
      </section>

      {/* 3. SUB-SERVICES GRID */}
      <section className="py-20 bg-app-secondary border-y border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Scope of Services</span>
            <h2 className="mt-3 text-3xl font-heading font-extrabold text-app-fg tracking-tight">
              Integrated Residential Building Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((sub, idx) => (
              <div key={idx} className="bg-app-card border border-app-border offset-border-frame shadow-sm p-8 rounded-xl border border-app-border shadow-2xl space-y-3">
                <span className="text-brand-teal font-mono font-bold text-xs block">0{idx + 1}. Capability</span>
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
            TAMM &amp; Municipal Permitting Services
          </h2>
          <p className="text-xs sm:text-sm text-app-muted max-w-3xl mx-auto leading-relaxed font-light">
            We handle all regulatory steps required to start your build: securing soil test approvals, structural drawing NOCs, boundary approvals, Civil Defense firefighting approvals, and the final municipality inspection required for water/power connection and occupancy certificates.
          </p>
          <div className="flex justify-center space-x-6 text-[10px] sm:text-xs text-brand-teal font-bold uppercase tracking-wider">
            <span>✓ TAMM Permit Submittals</span>
            <span>✓ Soil &amp; Foundation Reports</span>
            <span>✓ Civil Defense Compliance</span>
            <span>✓ Estidama Certification</span>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION (Native HTML5 details/summary for max SEO crawlability) */}
      <section className="py-20 bg-app-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Inquiry Support</span>
            <h2 className="mt-3 text-3xl font-heading font-extrabold text-app-fg tracking-tight">
              Villa Construction FAQs
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

      {/* 6. REGIONAL OPERATION LINKS SILO & ENGINEERING INSIGHTS MATRIX */}
      <section className="py-16 bg-app-secondary border-t border-app-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                Active Regional Operations
              </h3>
              <p className="text-xs text-app-muted mb-6 font-light">
                ArrowHead executes structural residential works across primary Abu Dhabi zones:
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
                Review our engineering guides and municipal approval checklists for Abu Dhabi:
              </p>
              <div className="flex flex-col space-y-4">
                <Link href="/insights/guide-to-tamm-villa-approvals" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">Abu Dhabi TAMM Building Permit Guide</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">A step-by-step engineering walkthrough of municipal NOCs and approvals.</span>
                </Link>
                <Link href="/insights/understanding-estidama-pearl-ratings" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">Estidama Pearl Ratings Guide</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Understanding energy parameters and Pearl building insulation checks.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-16 bg-app-secondary border-t border-app-border text-center">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
          Discuss Your Custom Villa Plans Today
        </h2>
        <p className="mt-3 text-app-muted text-xs sm:text-sm max-w-xl mx-auto font-light">
          Share your land plot coordinates and desired room configurations for a conceptual estimate.
        </p>
        <div className="mt-8">
          <Link
            href="/contact?rfq=true"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
          >
            Submit Custom Build Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
