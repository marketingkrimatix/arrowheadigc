
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import PipelineWeldingShowcase from '@/components/PipelineWeldingShowcase';

export const metadata: Metadata = {
  title: 'HDPE Pipeline Supply & Installation Abu Dhabi | ArrowHead',
  description: 'Certified HDPE pipeline installation and general contracting. Specialized in butt-fusion and electrofusion welding, trenchless HDD, and municipal utility inspections.',
  keywords: ['HDPE pipeline Abu Dhabi', 'butt-fusion welding Abu Dhabi', 'electrofusion jointing UAE', 'pipeline contractors Abu Dhabi', 'hydrostatic pressure testing'],
  alternates: {
    canonical: 'https://arrowheadigc.com/services/hdpe-pipelines',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/services/hdpe-pipelines',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'HDPE Pipeline Supply & Installation Abu Dhabi | ArrowHead',
    description: 'Certified HDPE pipeline installation and general contracting. Specialized in butt-fusion and electrofusion welding, trenchless HDD, and municipal utility inspections.',
    images: [
      {
        url: '/images/123.jpeg',
        width: 800,
        height: 600,
        alt: 'HDPE Pipeline Supply and Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HDPE Pipeline Supply & Installation Abu Dhabi | ArrowHead',
    description: 'Certified HDPE pipeline installation and general contracting. Specialized in butt-fusion and electrofusion welding, trenchless HDD, and municipal utility inspections.',
    images: ['/images/123.jpeg'],
  },
};

export default function HdpePipelinesPage() {
  const pipelineExpertise = [
    {
      id: '01',
      title: 'Construction of Pipeline Networks',
      subtitle: 'EPC Utility Networks',
      badge: 'Potable & Wastewater EPC',
      desc: 'EPC pipeline services covering engineering, procurement, construction, testing and commissioning of utility networks. Specialized in HDPE and Ductile Iron (DI) pipeline networks for potable water, irrigation, wastewater, drainage, firefighting, district cooling and utility ducting systems.',
      image: '/images/Construction of Pipeline.png',
      highlights: ['Potable Water & Irrigation Networks', 'Wastewater, Drainage & Firefighting', 'District Cooling & Utility Ducts', 'Full EPC Testing & Commissioning'],
    },
    {
      id: '02',
      title: 'Pipeline Relocations / Modifications',
      subtitle: 'TAQA & Municipal Certified Authority Scope',
      badge: 'TAQA & Municipal Authorized',
      desc: 'AHIGC has the HSEQ competency certifications for engineers in-charge as an authorization to carryout shutdown, relocation & modification works from TAQA & Municipal authorities on DI & HDPE pipelines up to DN 1000 pipe sizes, for potable & recycled water networks.',
      image: '/images/Pipeline Relocations  Modifications.png',
      highlights: ['Pipelines up to DN 1000', 'Live Network Shutdowns & Tie-Ins', 'Potable & Recycled Water Lines', 'HSEQ Certified In-Charge Engineers'],
    },
    {
      id: '03',
      title: 'Duct / Pipeline Crossing by HDD Methods',
      subtitle: 'Trenchless Urban Technology',
      badge: 'Trenchless Directional Drilling',
      desc: 'We specialize in trenchless pipeline and duct crossings using Horizontal Directional Drilling (HDD) technology for safe, precise and efficient pipeline installation across roads, waterways and congested urban corridors with minimal surface disruption.',
      image: '/images/Duct  Pipeline Crossing by HDD Methods.png',
      highlights: ['Highway & Waterway Trenchless Crossing', 'Zero Road & Traffic Disruption', 'High-Accuracy Guidance Profiling', 'Deep Underground Ducting Bundles'],
    },
    {
      id: '04',
      title: 'Pipeline Maintenance & Emergency Response',
      subtitle: '24/7 Rapid Mobilization SLA',
      badge: '24/7 Rapid Response',
      desc: '24/7 emergency response services ensuring rapid mobilization, isolation, repair and service restoration for pipeline bursts, leakages and network failures, in full compliance with authority safety and emergency protocols.',
      image: '/images/hdpe.jpg',
      highlights: ['Burst Isolation & Dewatering', 'Electrofusion Emergency Sleeves', '24/7 Dedicated Rapid Dispatch', 'Authority Protocol Compliance'],
    },
    {
      id: '05',
      title: 'Fabrication of Spools / Headers',
      subtitle: 'In-House Precision Welding',
      badge: 'In-House Fabrication',
      desc: 'We offer in-house fabrication of piping spools and headers with precise welding and quality control. This ensures faster site installation, improved accuracy, and reduced project timelines.',
      image: '/images/Fabrication of Spools  Headers.png',
      highlights: ['Custom Manifolds & Pipe Headers', 'Rigorous Shop QA/QC Inspection', 'DVS 2207 Certified Butt-Welding', 'Accelerated Site Installation Handover'],
    },
    {
      id: '06',
      title: 'Water Pressure Surveys',
      subtitle: 'Hydraulic Verification & Telemetry',
      badge: 'Hydraulic Testing & Surveys',
      desc: 'ArrowHead conducts pressure surveys across water transmission and distribution networks to verify hydraulic performance, identify anomalies, and support leakage control, ensuring compliance with utility standards and reliable network operation.',
      image: '/images/Water Pressure Surveys.png',
      highlights: ['Digital Calibrated Data Loggers', 'Hydraulic Surge & Leak Detection', 'Transmission Performance Audits', 'Full Utility Authority Compliance'],
    },
  ];

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
      desc: 'We facilitate trenchless pipeline installations using Horizontal Directional Drilling (HDD) and pipe-jacking methods, minimizing disruption to Abu Dhabi highways, industrial zones, and high-traffic transit corridors.',
    },
    {
      title: 'Hydrostatic Pressure Testing & Disinfection',
      desc: 'Validation of pipeline integrity is critical. We perform systematic hydrostatic pressure tests (up to PN25) using calibrated data loggers, followed by pipeline swabbing, flushing, and chemical disinfection to meet municipal water network standards.',
    },
  ];

  const standards = [
    { title: 'Material Grade', value: 'PE100 / PE100-RC (Resistant to Crack)' },
    { title: 'Pressure Ratings', value: 'PN6, PN10, PN16, PN20, PN25' },
    { title: 'Authority Alignment', value: 'Municipal & Utility Standard Drawings' },
    { title: 'Welding Standards', value: 'DVS 2207 Part 1, ISO 12176-1' },
    { title: 'Applicable Utilities', value: 'Chilled Water, Fire Mains, Sewerage, Industrial Slurry' },
  ];

  const faqs = [
    {
      q: 'What parameters do you record during butt-fusion welding?',
      a: 'For every butt-fusion joint, our technicians record the heater plate temperature, bead-up pressure, soak time, changeover time, joining pressure, and cooling duration. We provide comprehensive joint log sheets as part of our QA/QC handover package.',
    },
    {
      q: 'Do you secure municipal utility approvals for pipeline testing?',
      a: 'Yes. We prepare the complete method statements, inspection and test plans (ITP), and calibration certificates. We coordinate with the client representative and utility inspector to witness the hydrostatic pressure testing and issue the official clearance certificate.',
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
      'image': '/images/123.jpeg',
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
    { name: 'Yas Island (Infrastructure & Sewerage)', href: '/locations/yas-island' },
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
            Professional pipeline contracting services for municipal, residential, and industrial networks. Certified butt-fusion welding, electrofusion fittings, trenchless support, and pressure testing complying with municipal and international utility guidelines.
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
                  Quality assurance is central to our welding procedures. We operate a modern fleet of hydraulic butt-fusion and computerized electrofusion welding machines, calibrated annually by authorized labs. Our operators hold certifications complying with DVS 2207 specifications. For every weld, we record temperature, bead-up height, pressure, and cooling logs. All welding is performed inside localized tents to prevent dust and wind contamination, and every completed network is hydrostatically pressure tested to PN16/PN25 standards, witnessed by municipal utility inspectors.
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

      {/* 3. OUR EXPERTISE: PIPELINE SERVICES */}
      <section className="py-24 bg-app-secondary border-y border-app-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-app-card border border-app-border text-brand-teal text-xs font-bold uppercase tracking-widest font-mono shadow-sm">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-app-fg tracking-tight">
              Pipeline Services
            </h2>
            <p className="text-app-muted text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto">
              EPC utility network construction, trenchless HDD highway crossings, certified authority pipeline modifications, and 24/7 emergency response across Abu Dhabi.
            </p>
            <div className="w-12 h-0.5 bg-brand-teal mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pipelineExpertise.map((item, idx) => (
              <div
                key={idx}
                className="bg-app-card border border-app-border rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-brand-teal/50 transition-all duration-300 flex flex-col justify-between group offset-border-frame"
              >
                <div>
                  {/* Contextual Pipeline Image Container */}
                  <div className="h-52 bg-slate-900 relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>

                    {/* Index and Badge Overlays */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md border border-white/10 text-brand-teal text-[10px] font-mono font-bold uppercase tracking-wider">
                        {item.id}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono font-semibold uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[11px] font-mono text-brand-gold uppercase tracking-wider block font-semibold">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-app-fg font-heading group-hover:text-brand-teal transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-app-muted text-xs leading-relaxed font-light">
                      {item.desc}
                    </p>

                    {/* Key Highlights Checklist */}
                    <div className="pt-3 border-t border-app-border/60 mt-3">
                      <ul className="space-y-1.5 text-[11px] text-app-fg/90">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2">
                            <span className="text-brand-teal font-bold text-xs">✓</span>
                            <span className="font-light">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="p-6 pt-0 mt-3">
                  <Link
                    href="/contact?rfq=true"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-app-secondary border border-app-border hover:border-brand-teal hover:bg-brand-teal hover:text-primary-dark text-app-fg text-xs font-bold uppercase tracking-wider transition-all duration-300"
                  >
                    <span>Inquire Service</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
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
                <h3 className="text-base sm:text-lg font-bold text-app-fg">{sub.title}</h3>
                <p className="text-app-muted text-xs sm:text-sm leading-relaxed font-light">{sub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPLIANCE BANNER */}
      <section className="bg-app-secondary text-app-fg py-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg">
            Municipal &amp; International Standards Compliance
          </h2>
          <p className="text-xs sm:text-sm text-app-muted max-w-3xl mx-auto leading-relaxed font-light">
            We procure pipes from approved local manufacturers and conduct pressure tests under direct supervisor monitoring. All excavations, bedding sands, marker tape installations, and backfilling details strictly align with the Standard Detail Drawings of Abu Dhabi municipal and utility authorities.
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
                <summary className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-app-fg hover:text-brand-teal focus:outline-none transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
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
              <h3 className="text-sm font-bold uppercase tracking-widest text-app-fg mb-4">
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
              <h3 className="text-sm font-bold uppercase tracking-widest text-app-fg mb-4">
                Technical Knowledge Base
              </h3>
              <p className="text-xs text-app-muted mb-6 font-light">
                Read our technical guides on high-performance HDPE jointing and fusion regulations:
              </p>
              <div className="flex flex-col space-y-4">
                <Link href="/insights/hdpe-butt-fusion-welding-parameters" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-app-fg block">HDPE Butt-Fusion Welding Technical Parameters</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Heating temperatures, bead-up pressures, and cooling logs per DVS 2207.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-16 bg-app-secondary border-t border-app-border text-center text-app-fg">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-app-fg">
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
