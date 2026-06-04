import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import BuildTimelineShowcase from '@/components/showcases/BuildTimelineShowcase';
import FactsheetGrid from '@/components/showcases/FactsheetGrid';
import CinematicSpecGrid from '@/components/showcases/CinematicSpecGrid';

export const metadata: Metadata = {
  title: 'Wet Utilities & Drainage Infrastructure Abu Dhabi | ArrowHead',
  description: 'Certified wet utilities contractors in Abu Dhabi. Supply, installation, and testing of sewerage networks, storm water drainage, and potable water systems complying with ADSSC and ADDC guidelines.',
  keywords: ['wet utilities Abu Dhabi', 'potable water networks', 'ADSSC sewerage lines', 'storm water drainage systems', 'utility pump stations'],
  alternates: {
    canonical: 'https://arrowheadigc.com/services/wet-utilities-infrastructure',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/services/wet-utilities-infrastructure',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Wet Utilities & Drainage Infrastructure Abu Dhabi | ArrowHead',
    description: 'Certified wet utilities contractors in Abu Dhabi. Supply, installation, and testing of sewerage networks, storm water drainage, and potable water systems complying with ADSSC and ADDC guidelines.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Wet Utilities Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wet Utilities & Drainage Infrastructure Abu Dhabi | ArrowHead',
    description: 'Certified wet utilities contractors in Abu Dhabi. Supply, installation, and testing of sewerage networks, storm water drainage, and potable water systems complying with ADSSC and ADDC guidelines.',
    images: ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function WetUtilitiesInfrastructurePage() {
  const subServices = [
    {
      title: 'Sewerage Networks & Gravity Sewers',
      desc: 'Excavation, shoring, laying, and testing of gravity sewerage systems. We install PE100 HDPE pipelines and precast concrete manholes with internal epoxy coatings, satisfying the strict inspection checklists of the Abu Dhabi Sewerage Services Company (ADSSC).',
    },
    {
      title: 'Potable Water Distribution Networks',
      desc: 'Installation of high-pressure main potable water waterlines, distribution loops, and building connections. We perform butt-fusion joints, weld validation recording, pipe swabbing, chlorination, and disinfection to ADDC standards.',
    },
    {
      title: 'Storm Water Drainage & Outfalls',
      desc: 'Engineering storm water networks to handle seasonal rains. We construct storm catchment basins, lay sub-surface runoff pipes, build micro-tunneling links, and construct coastal outfall structures.',
    },
    {
      title: 'Pumping Stations & Valve Chambers',
      desc: 'Turnkey construction of utility pumping stations. We integrate dry/wet wells, install heavy-duty submersible pumps, construct valve chambers, lay control instrumentation, and size electrical control panels.',
    },
  ];

  const standards = [
    { title: 'Sewerage Guidelines', value: 'ADSSC Standard Detail Drawings & Materials List' },
    { title: 'Potable Water Codes', value: 'ADDC Water Transmission & Distribution Regulations' },
    { title: 'Pipe Jointing Methods', value: 'DVS 2207 Butt-Fusion, Electrofusion Jointing' },
    { title: 'Excavation Details', value: 'ADM Dewatering Permits, Shoring Sheet Piles' },
    { title: 'Manhole Specifications', value: 'Precast Concrete with GRP Lining / Epoxy Paint' },
  ];

  const faqs = [
    {
      q: 'Does ArrowHead secure the ADSSC NOCs required for sewer connection works?',
      a: 'Yes. We prepare the complete utility drawings, design shop layouts, obtain municipal dewatering permits, and submit them via the TAMM portal to secure the necessary ADSSC No Objection Certificate (NOC) and final connection approval.',
    },
    {
      q: 'What testing is required to hand over a potable water waterline to ADDC?',
      a: 'All potable lines must pass hydrostatic pressure testing (PN10/PN16 depending on layout parameters) witnessed by ADDC inspectors. After testing, we sanitize, flush, and perform laboratory water sampling checks to ensure compliance with potability codes.',
    },
    {
      q: 'Do you construct precast and cast-in-situ valve chambers?',
      a: 'Yes, we construct both. We specialize in reinforced concrete chambers matching ADSSC/ADDC drawings, applying premium quality waterproofing membranes and anti-corrosive epoxy layers to protect steel reinforcement from high ground salinity.',
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
    'name': 'Wet Utilities & Drainage Infrastructure',
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
      { '@type': 'AdministrativeArea', 'name': 'Yas Island' },
      { '@type': 'AdministrativeArea', 'name': 'Saadiyat Island' },
      { '@type': 'AdministrativeArea', 'name': 'Khalifa City' },
      { '@type': 'AdministrativeArea', 'name': 'Al Raha' },
      { '@type': 'AdministrativeArea', 'name': 'Mussafah' }
    ],
    'description': 'Certified wet utilities general contracting. Supply, welding, pressure testing, and connection of sewage grids, water transmission networks, and storm outfalls.'
  };

  const locationLinks = [
    { name: 'Yas Island (Heavy Sewerage & Outfalls)', href: '/locations/yas-island' },
    { name: 'Saadiyat Island (Custom Residential Sewers)', href: '/locations/saadiyat-island' },
    { name: 'Mussafah (Industrial Potable & Drainage)', href: '/locations/mussafah' },
    { name: 'Al Raha Beach (Water Distribution Loops)', href: '/locations/al-raha' },
    { name: 'Khalifa City (District Utility Extensions)', href: '/locations/khalifa-city' },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://arrowheadigc.com/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Wet Utilities & Drainage Infrastructure', 'item': 'https://arrowheadigc.com/services/wet-utilities-infrastructure' }
    ]
  };

  return (
    <div id="wet-utilities-service-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[faqSchema, serviceSchema, breadcrumbSchema]} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-bg py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: 'Wet Utilities & Drainage' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Wet Utilities &amp; Drainage <br />Infrastructure Contracting
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Grade-A civil utility pipeline engineering. We supply, weld, lay, pressure test, and commission gravity sewage grids, potable water mains, storm drainage outfalls, and pumping stations.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
            >
              Request a Utilities RFQ
            </Link>
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

      {/* 2. SPECIFICATION OVERVIEW */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Infrastructure Engineering</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight">
                Complete Utility Networks Execution
              </h2>
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  Wet utility infrastructure forms the baseline of urban development, managing potable water distribution, gravity sewerage trunk networks, storm water drainage channels, and district irrigation lines. Engineering these underground networks requires managing complex hydraulics, varying soil loads, and crossing utility lines. ArrowHead delivers complete Engineering, Procurement, and Construction (EPC) services for municipal and private developers, executing wet utility projects from initial routing approvals to final network connection.
                </p>
                <p>
                  Our pipeline construction division operates heavy trenching machinery and shoring box systems. We excel in laying deep sewer trunk mains, casting reinforced concrete manholes with protective internal GRP liners, and installing potable water lines. We apply dense aggregate pipe bedding, lay warning tapes, and execute backfilling in strict compliance with the Standard Detail Drawings of the Abu Dhabi Sewerage Services Company (ADSSC) and Abu Dhabi Distribution Company (ADDC).
                </p>
                <p>
                  For utility pipelines crossing active roadways or existing infrastructure, we coordinate trenchless Horizontal Directional Drilling (HDD) alignments to minimize surface disruption. Every pipeline section is subjected to rigorous quality checks. We conduct hydrostatic pressure testing (up to PN25), gravity sewer deflection checks, and pipeline disinfection. These tests are witnessed and certified by ADSSC and ADDC inspectors, facilitating rapid municipal network integration.
                </p>
  </div>
            </div>

            {/* Right Specification Table */}
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl">
              <h3 className="text-base font-bold text-white border-b border-app-border pb-4 uppercase tracking-wider font-heading">
                Wet Utilities Standards
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
                    <span className="text-xs font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded">STYLE H</span>
                    <h3 className="text-lg font-heading font-extrabold tracking-tight">Progressive Build Timeline Phase Switcher</h3>
                  </div>
                  <BuildTimelineShowcase />
                </div>
                </div>
                </section>

      {/* 3. SUB-SERVICES GRID */}
      <section className="py-20 bg-app-secondary border-y border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Scope of Works</span>
            <h2 className="mt-3 text-3xl font-heading font-extrabold text-app-fg tracking-tight">
              Wet Utilities Civil &amp; Mechanical Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((sub, idx) => (
              <div key={idx} className="bg-app-card border border-app-border offset-border-frame shadow-sm p-8 rounded-xl border border-app-border shadow-2xl space-y-3">
                <span className="text-brand-teal font-mono font-bold text-xs block">0{idx + 1}. Sub-Service Scope</span>
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
            ADM, ADSSC, and ADDC Standards Aligned
          </h2>
          <p className="text-xs sm:text-sm text-app-muted max-w-3xl mx-auto leading-relaxed font-light">
            We work as an approved wet utilities contractor, executing trenchings, bedding layers, pipeline alignments, pressure tests, and valve chambers. All operations strictly satisfy the Standard Detail Drawings of the Department of Municipalities and Transport, Abu Dhabi Sewerage Services Company, and Abu Dhabi Distribution Company.
          </p>
          <div className="flex justify-center space-x-6 text-[10px] sm:text-xs text-brand-teal font-bold uppercase tracking-wider">
            <span>✓ TAMM Permit Submittals</span>
            <span>✓ ADSSC Materials Compliance</span>
            <span>✓ Potable Disinfection Clearances</span>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-app-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Inquiry Support</span>
            <h2 className="mt-3 text-3xl font-heading font-extrabold text-app-fg tracking-tight">
              Wet Utilities FAQs
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

      {/* 6. REGIONAL SILO & TECHNICAL INSIGHT MATRIX */}
      <section className="py-16 bg-app-secondary border-t border-app-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                Active Regional Infrastructure Operations
              </h3>
              <p className="text-xs text-app-muted mb-6 font-light">
                ArrowHead delivers certified utility pipelines and trenching setups across key developments:
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
                Read our technical guides on high-performance HDPE jointing and fusion regulations:
              </p>
              <div className="flex flex-col space-y-4">
                <Link href="/insights/hdpe-butt-fusion-welding-parameters" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">HDPE Butt-Fusion Welding Technical Parameters</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Heating temperatures, bead-up pressures, and cooling logs per DVS 2207.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-16 bg-app-secondary border-t border-app-border text-center">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
          Discuss Your Wet Utilities Specifications
        </h2>
        <p className="mt-3 text-app-muted text-xs sm:text-sm max-w-xl mx-auto font-light">
          Submit your line drawings, pipe parameters, and testing criteria for an estimated proposal.
        </p>
        <div className="mt-8">
          <Link
            href="/contact?rfq=true"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
          >
            Submit RFQ Drawing &amp; Details
          </Link>
        </div>
      </section>
    </div>
  );
}
