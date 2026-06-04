import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import SplitActiveShowcase from '@/components/showcases/SplitActiveShowcase';
import BuildTimelineShowcase from '@/components/showcases/BuildTimelineShowcase';
import FactsheetGrid from '@/components/showcases/FactsheetGrid';
import CinematicSpecGrid from '@/components/showcases/CinematicSpecGrid';

export const metadata: Metadata = {
  title: 'Infrastructure & Civil Contracting Services Abu Dhabi | ArrowHead',
  description: 'Licensed infrastructure civil works contractor in Abu Dhabi. We manage heavy site grading, boundary wall construction, concrete slab castings, parking paving, and road civils.',
  keywords: ['infrastructure civil works', 'boundary walls construction', 'site grading Abu Dhabi', 'concrete foundations contracting', 'paving contractors Abu Dhabi'],
  alternates: {
    canonical: 'https://arrowheadigc.com/services/infrastructure-civil-works',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/services/infrastructure-civil-works',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Infrastructure & Civil Contracting Services Abu Dhabi | ArrowHead',
    description: 'Licensed infrastructure civil works contractor in Abu Dhabi. We manage heavy site grading, boundary wall construction, concrete slab castings, parking paving, and road civils.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Infrastructure Civil Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infrastructure & Civil Contracting Services Abu Dhabi | ArrowHead',
    description: 'Licensed infrastructure civil works contractor in Abu Dhabi. We manage heavy site grading, boundary wall construction, concrete slab castings, parking paving, and road civils.',
    images: ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function InfrastructureCivilWorksPage() {
  const subServices = [
    {
      title: 'Site Grading & Earthworks',
      desc: 'Bulk earthmoving, leveling, and site compaction. We prepare raw desert plots for construction, establishing sub-grade parameters, executing soil replacement, and carrying out mechanical plate compaction testings.',
    },
    {
      title: 'Boundary Walls & Retaining Structures',
      desc: 'Construction of reinforced blockwork and precast concrete boundary walls. We manage soil test reviews, foundation strip footings, structural column castings, and high-end plaster finishing to municipality guidelines.',
    },
    {
      title: 'Concrete Slabs & Heavy Pavements',
      desc: 'Casting high-load concrete floor slabs, equipment foundation pads, and heavy vehicle parking areas. We integrate structural mesh reinforcements, expansion joints, and apply premium floor hardeners.',
    },
    {
      title: 'Road Works & Paving Civils',
      desc: 'Interlock paving block supply and laying, kerbstones alignments, sub-base preparations, road marking, and utility crossing duct assemblies matching municipal standards.',
    },
  ];

  const standards = [
    { title: 'Municipal Approvals', value: 'Abu Dhabi Municipality (ADM) Building Permits via TAMM' },
    { title: 'Concrete Strength', value: 'C30/37, C40/50 depending on load calculation details' },
    { title: 'Slab Specifications', value: 'Reinforced Steel Mesh, Anti-Cracking Joint Sealants' },
    { title: 'Compaction Quality', value: '95% to 98% Proctor Density testing witness' },
    { title: 'Boundary Wall Heights', value: 'Aligned with ADM zoning height guidelines' },
  ];

  const faqs = [
    {
      q: 'Do you design the boundary walls to secure municipality approvals?',
      a: 'Yes. We cooperate with licensed design associates to draft structural and architectural drawings. We submit these alongside boundary layout coordinates through the TAMM portal to secure building permit clearances.',
    },
    {
      q: 'What is Proctor compaction testing, and why is it required?',
      a: 'Proctor testing verifies the maximum dry density and moisture content of compacted soil. Performing this test guarantees that the compacted sub-base will support the weight of concrete slabs, heavy vehicles, or road structures without shifting or settling.',
    },
    {
      q: 'Can you construct heavy concrete foundations for industrial machinery?',
      a: 'Yes. We construct heavy-duty concrete foundation bases (including pump foundations, generator plinths, and chiller pads) in Mussafah and industrial zones, integrating vibration control padding and high-strength reinforced rebars.',
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
    'name': 'Infrastructure & Civil Contracting Services',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'ArrowHead General Contracting LLC',
      'telephone': '+971-2-XXXXXXX',
      'priceRange': '$$$$',
      'image': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Abu Dhabi',
        'addressCountry': 'AE'
      }
    },
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Khalifa City' },
      { '@type': 'AdministrativeArea', 'name': 'Saadiyat Island' },
      { '@type': 'AdministrativeArea', 'name': 'Yas Island' },
      { '@type': 'AdministrativeArea', 'name': 'Al Raha' },
      { '@type': 'AdministrativeArea', 'name': 'Mussafah' }
    ],
    'description': 'Licensed infrastructure civil works contracting services in Abu Dhabi. Site grading, boundary walls construction, interlock paving, and heavy concrete slabs.'
  };

  const locationLinks = [
    { name: 'Khalifa City (Boundary Walls & Majlis)', href: '/locations/khalifa-city' },
    { name: 'Al Raha Beach (Waterfront Promenades)', href: '/locations/al-raha' },
    { name: 'Saadiyat Island (Tactile Landscaping & Civils)', href: '/locations/saadiyat-island' },
    { name: 'Yas Island (Paved Infrastructure)', href: '/locations/yas-island' },
    { name: 'Mussafah (Heavy Concrete Foundations)', href: '/locations/mussafah' },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://arrowheadigc.com/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Infrastructure & Civil Works', 'item': 'https://arrowheadigc.com/services/infrastructure-civil-works' }
    ]
  };

  return (
    <div id="civil-works-service-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[faqSchema, serviceSchema, breadcrumbSchema]} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-bg py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: 'Infrastructure & Civil Works' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Infrastructure &amp; Civil <br />Contracting Services
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Approved civil engineering contractors in Abu Dhabi. We manage heavy earthworks, boundary wall footings, site compaction, interlock paving, and high-load concrete floor castings.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
            >
              Request a Civil Quote
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

                <section className="py-24 border-b border-app-border relative bg-app-bg">
                              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="space-y-6 mb-24">
                            <div className="flex items-center gap-4 border-b border-app-border pb-4">
                              <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">STYLE I</span>
                              <h3 className="text-lg font-heading font-extrabold tracking-tight">Tabular Factsheet Grid Row Hover</h3>
                            </div>
                            <FactsheetGrid />
                          </div>
                          </div>
                          </section>

      {/* 2. SPECIFICATION OVERVIEW */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Civil Masonry &amp; Earthworks</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight">
                Rigid Foundations &amp; Heavy Compaction
              </h2>
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  Infrastructure civil works represent the starting phase of any development project, converting raw land into engineered foundations suitable for heavy structures, utility networks, and municipal transportation systems. Executing these works requires precise site grading, mass earthmoving, geotechnical inspections, and structural concrete casting capable of resisting high soil loads and groundwater chemistry. ArrowHead delivers heavy civil infrastructure contracting services for both private developers and public agencies.
                </p>
                <p>
                  Our civil construction division manages mass site grading, structural excavation, and deep trenching. We deploy advanced soil compaction equipment, verifying sub-grade density using Plate Load Testing and Sand Replacement tests to guarantee structural stability. We cast reinforced concrete substructures including electrical substation chambers, main valve chambers, and heavy equipment foundations.
                </p>
                <p>
                  To survive the aggressive chloride and sulfate concentrations common in Abu Dhabi's subsoils, all concrete works utilize sulfate-resistant cement (SRC) blended with microsilica. We apply thick, double-layer bituminous coatings and self-adhesive waterproofing membranes to all underground concrete surfaces. We maintain strict wet-curing protocols for 7 to 10 days to maximize concrete compressive strength and durability, conforming to Abu Dhabi Municipality regulations.
                </p>
  </div>
            </div>

            {/* Right Details Table */}
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl">
              <h3 className="text-base font-bold text-white border-b border-app-border pb-4 uppercase tracking-wider font-heading">
                Civil Project Metrics
              </h3>
              <ul className="mt-6 space-y-4 text-xs sm:text-sm">
                {standards.map((std, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row justify-between py-2 border-b border-app-border last:border-b-0">
                    <span className="text-app-muted font-medium">{std.title}</span>
                    <span className="font-semibold text-brand-teal mt-1 sm:mt-0 text-left sm:text-right">{std.value}</span>
                  </li>
                ))}
              </ul>
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
              <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded">STYLE C</span>
              <h3 className="text-lg font-heading font-extrabold tracking-tight">Split Screen Category Hover Active Tabs</h3>
            </div>
            <SplitActiveShowcase />
          </div>
        </div>
      </section>

      {/* 3. SUB-SERVICES GRID */}
      <section className="py-20 bg-app-secondary border-y border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Scope of Works</span>
            <h2 className="mt-3 text-3xl font-heading font-extrabold text-app-fg tracking-tight">
              Site Civil Masonry &amp; Paving Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((sub, idx) => (
              <div key={idx} className="bg-app-card border border-app-border offset-border-frame shadow-sm p-8 rounded-xl border border-app-border shadow-2xl space-y-3">
                <span className="text-brand-teal font-mono font-bold text-xs block">0{idx + 1}. Capability Scope</span>
                <h3 className="text-base sm:text-lg font-bold text-white">{sub.title}</h3>
                <p className="text-app-muted text-xs sm:text-sm leading-relaxed font-light">{sub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPLIANCE BANNER */}
      <section className="bg-app-secondary text-white py-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            TAMM &amp; Municipal Permit Compliance
          </h2>
          <p className="text-xs sm:text-sm text-app-muted max-w-3xl mx-auto leading-relaxed font-light">
            We handle all regulatory steps required to start your civil build: securing soil test approvals, structural drawing NOCs, boundary approvals, and the final municipality inspection required for legal handovers and property registrations.
          </p>
          <div className="flex justify-center space-x-6 text-[10px] sm:text-xs text-brand-teal font-bold uppercase tracking-wider">
            <span>✓ TAMM Permit Submittals</span>
            <span>✓ Compaction Proctor Logs</span>
            <span>✓ Boundary Wall Approvals</span>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-app-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Inquiry Support</span>
            <h2 className="mt-3 text-3xl font-heading font-extrabold text-app-fg tracking-tight">
              Civil Works FAQs
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

      {/* 6. REGIONAL LINK MATRIX SILO */}
      <section className="py-16 bg-app-secondary border-t border-app-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                Active Regional Infrastructure Operations
              </h3>
              <p className="text-xs text-app-muted mb-6 font-light">
                ArrowHead delivers certified site compaction and structural blockworks across Abu Dhabi districts:
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
                Read our technical guides on structural permits and green building designs:
              </p>
              <div className="flex flex-col space-y-4">
                <Link href="/insights/guide-to-tamm-villa-approvals" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">Abu Dhabi TAMM Building Permit Guide</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">A step-by-step engineering walkthrough of municipal NOCs and approvals.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-16 bg-app-secondary border-t border-app-border text-center">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
          Discuss Your Civil Project Specifications
        </h2>
        <p className="mt-3 text-app-muted text-xs sm:text-sm max-w-xl mx-auto font-light">
          Request a physical site survey by our contracting engineers for structural estimations.
        </p>
        <div className="mt-8">
          <Link
            href="/contact?rfq=true"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
          >
            Submit Civil Request details
          </Link>
        </div>
      </section>
    </div>
  );
}
