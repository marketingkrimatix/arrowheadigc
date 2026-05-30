import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import PipelineWeldingShowcase from '@/components/PipelineWeldingShowcase';

export const metadata: Metadata = {
  title: 'HDPE Pipeline Supply & Installation Abu Dhabi | ArrowHead',
  description: 'Certified HDPE pipeline installation and general contracting. Specialized in butt-fusion and electrofusion welding, trenchless HDD, and ADSSC/ADDC inspections.',
  keywords: ['HDPE pipeline Abu Dhabi', 'butt-fusion welding Abu Dhabi', 'electrofusion jointing UAE', 'ADSSC approved pipeline contractors', 'hydrostatic pressure testing'],
  alternates: {
    canonical: 'https://arrowheadigc.com/services/hdpe-pipelines',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/services/hdpe-pipelines',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'HDPE Pipeline Supply & Installation Abu Dhabi | ArrowHead',
    description: 'Certified HDPE pipeline installation and general contracting. Specialized in butt-fusion and electrofusion welding, trenchless HDD, and ADSSC/ADDC inspections.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'HDPE Pipeline Supply and Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HDPE Pipeline Supply & Installation Abu Dhabi | ArrowHead',
    description: 'Certified HDPE pipeline installation and general contracting. Specialized in butt-fusion and electrofusion welding, trenchless HDD, and ADSSC/ADDC inspections.',
    images: ['https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function HdpePipelinesPage() {
  const subServices = [
    {
      title: 'Butt-Fusion Welding (DN 110mm - DN 1200mm)',
      desc: 'Our certified fusion technicians execute butt-welding for high-pressure PE100 water and sewerage lines using calibrated hydraulic welding rigs. We strictly adhere to DVS 2207 and ISO welding standards, documenting parameters for each joint.',
    },
    {
      title: 'Electrofusion Jointing & Fittings',
      desc: 'Ideal for tight spaces, repair sleeves, and branching. We supply and install premium electrofusion couplers, tees, and saddles, utilizing computerized barcoded welding units to ensure perfect heat distribution and zero leak rates.',
    },
    {
      title: 'Trenchless Installation & HDD Support',
      desc: 'We facilitate trenchless pipeline installations using Horizontal Directional Drilling (HDD) and pipe-jacking methods, minimizing disruption to Abu Dhabi highways, industrial zones, and marine waterfront channels.',
    },
    {
      title: 'Hydrostatic Pressure Testing & Disinfection',
      desc: 'Validation of pipeline integrity is critical. We perform systematic hydrostatic pressure tests (up to PN25) using calibrated data loggers, followed by pipeline swabbing, flushing, and chemical disinfection to meet ADDC water network standards.',
    },
  ];

  const standards = [
    { title: 'Material Grade', value: 'PE100 / PE100-RC (Resistant to Crack)' },
    { title: 'Pressure Ratings', value: 'PN6, PN10, PN16, PN20, PN25' },
    { title: 'Authority Alignment', value: 'ADSSC & ADDC Standard Drawings' },
    { title: 'Welding Standards', value: 'DVS 2207 Part 1, ISO 12176-1' },
    { title: 'Applicable Utilities', value: 'Chilled Water, Fire Mains, Sewerage, Industrial Slurry' },
  ];

  const faqs = [
    {
      q: 'What parameters do you record during butt-fusion welding?',
      a: 'For every butt-fusion joint, our technicians record the heater plate temperature, bead-up pressure, soak time, changeover time, joining pressure, and cooling duration. We provide comprehensive joint log sheets as part of our QA/QC handover package.',
    },
    {
      q: 'Do you secure the ADSSC / ADDC approvals for pipeline testing?',
      a: 'Yes. We prepare the complete method statements, inspection and test plans (ITP), and calibration certificates. We coordinate with the client representative and utility inspector (ADSSC/ADDC) to witness the hydrostatic pressure testing and issue the official clearance certificate.',
    },
    {
      q: 'Can you weld HDPE pipes in extreme UAE summer conditions?',
      a: 'Yes. However, welding HDPE in UAE summers requires protective welding tents to shield the pipe joints from direct sunlight, dust, and wind. We ensure temperature compensation measures are applied to prevent premature cooling of the welded joints.',
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
    'name': 'HDPE Pipeline Installation',
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
      { '@type': 'AdministrativeArea', 'name': 'Mussafah' },
      { '@type': 'AdministrativeArea', 'name': 'Al Raha' },
      { '@type': 'AdministrativeArea', 'name': 'Khalifa City' }
    ],
    'description': 'Certified pipeline contracting services for municipal, residential, and industrial networks in Abu Dhabi. Technical HDPE welding and hydrostatic pressure testing.'
  };

  const locationLinks = [
    { name: 'Yas Island (Infrastructure & ADSSC Sewerage)', href: '/locations/yas-island' },
    { name: 'Mussafah (Industrial Piping & FM)', href: '/locations/mussafah' },
    { name: 'Saadiyat Island (Custom Infrastructure)', href: '/locations/saadiyat-island' },
    { name: 'Al Raha Beach (Water Distribution Loops)', href: '/locations/al-raha' },
    { name: 'Khalifa City (Sewerage & Connections)', href: '/locations/khalifa-city' },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://arrowheadigc.com/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'HDPE Pipelines', 'item': 'https://arrowheadigc.com/services/hdpe-pipelines' }
    ]
  };

  return (
    <div id="hdpe-pipelines-service-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[faqSchema, serviceSchema, breadcrumbSchema]} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-bg py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: 'HDPE Pipelines' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            HDPE Pipeline Supply &amp; <br />Installation Abu Dhabi
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Professional pipeline contracting services for municipal, residential, and industrial networks. Certified butt-fusion welding, electrofusion fittings, trenchless support, and pressure testing complying with ADSSC and ADDC guidelines.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
            >
              Request a Pipeline RFQ
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
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Engineering Details</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight">
                High-Performance HDPE Welding &amp; Installation
              </h2>
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  High-Density Polyethylene (HDPE) pipelines represent the gold standard for modern water distribution, gravity sewerage, and chemical conveyance systems. Their exceptional flexibility, chemical inertness, and seamless jointing make them highly resistant to soil settlement and corrosive saline groundwater. ArrowHead supplies and installs premium HDPE pressure pipelines from DN 110mm up to DN 1200mm, utilizing PE100 and PE100-RC grade resins to deliver utility networks with a designed operational lifespan exceeding 50 years.
                </p>
                <p>
                  Laying utility pipelines in Abu Dhabi requires managing high temperatures, sandy soils, and high saline water tables. Our civil teams execute specialized trenching using heavy shoring boxes or sheet piling. We place graded aggregate bedding layers, apply protective geotextile fabric wraps, and cast reinforced concrete thrust blocks at all pipeline bends to counteract hydraulic thrust. For pipeline alignments running underneath active roads or channels, we coordinate trenchless Horizontal Directional Drilling (HDD) alignments.
                </p>
                <p>
                  Quality assurance is central to our welding procedures. We operate a modern fleet of hydraulic butt-fusion and computerized electrofusion welding machines, calibrated annually by authorized labs. Our operators hold certifications complying with DVS 2207 specifications. For every weld, we record temperature, bead-up height, pressure, and cooling logs. All welding is performed inside localized tents to prevent dust and wind contamination, and every completed network is hydrostatically pressure tested to PN16/PN25 standards, witnessed by ADSSC or ADDC inspectors.
                </p>
              </div>
            </div>

                     {/* Right Specification Table */}
            {/* <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl">
              <h3 className="text-base font-bold text-white border-b border-app-border pb-4 uppercase tracking-wider font-heading">
                Pipeline Specifications
              </h3>
              <ul className="mt-6 space-y-4 text-xs sm:text-sm">
                {standards.map((std, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row justify-between py-2 border-b border-app-border last:border-b-0">
                    <span className="text-app-muted font-medium">{std.title}</span>
                    <span className="font-semibold text-brand-teal mt-1 sm:mt-0 text-left sm:text-right">{std.value}</span>
                  </li>
                ))}
              </ul> */}

            {/* Right Details: Interactive Butt-Fusion Welding Simulator */}
            <div className="lg:col-span-5 w-full">
              <PipelineWeldingShowcase />
            </div>

          </div>
        </div>
      </section>

      {/* 3. SUB-SERVICES GRID */}
      <section className="py-20 bg-app-secondary border-y border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Scope of Works</span>
            <h2 className="mt-3 text-3xl font-heading font-extrabold text-app-fg tracking-tight">
              End-to-End Pipeline Engineering Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((sub, idx) => (
              <div key={idx} className="bg-app-card border border-app-border offset-border-frame shadow-sm p-8 rounded-xl border border-app-border shadow-2xl space-y-3">
                <span className="text-brand-teal font-mono font-bold text-xs block">0{idx + 1}. Sub-Service</span>
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
            ADSSC &amp; ADDC Standards Compliance
          </h2>
          <p className="text-xs sm:text-sm text-app-muted max-w-3xl mx-auto leading-relaxed font-light">
            We procure pipes from approved local manufacturers and conduct pressure tests under direct supervisor monitoring. All excavations, bedding sands, marker tape installations, and backfilling details strictly align with the Standard Detail Drawings of the Abu Dhabi Sewerage Services Company and Abu Dhabi Distribution Company.
          </p>
          <div className="flex justify-center space-x-6 text-[10px] sm:text-xs text-brand-teal font-bold uppercase tracking-wider">
            <span>✓ Approved Materials</span>
            <span>✓ Certified Welder Crews</span>
            <span>✓ Calibrated Testing Equipment</span>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-app-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Inquiry Support</span>
            <h2 className="mt-3 text-3xl font-heading font-extrabold text-app-fg tracking-tight">
              Pipeline Service FAQs
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
          Discuss Your Pipeline Specifications with Our Engineers
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
