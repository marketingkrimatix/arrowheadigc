import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import CinematicSpecGrid from '@/components/showcases/CinematicSpecGrid';
import ProjectControlCenter from '@/components/showcases/ProjectControlCenter';

export const metadata: Metadata = {
  title: 'Industrial Warehouses Construction & Maintenance Abu Dhabi | ArrowHead',
  description: 'Turnkey industrial warehouse construction, pre-engineered steel buildings (PEB), TR34 high-flatness concrete flooring, crane gantry structures, and warehouse maintenance AMCs in Abu Dhabi (Mussafah, ICAD, KIZAD).',
  keywords: [
    'warehouse construction Abu Dhabi',
    'industrial warehouse contractors UAE',
    'steel structure warehouse Mussafah',
    'PEB warehouse construction Abu Dhabi',
    'warehouse maintenance AMC Abu Dhabi',
    'TR34 concrete floor warehouse',
    'ZonesCorp warehouse approvals',
  ],
  alternates: {
    canonical: 'https://arrowheadigc.com/services/industrial-warehouses',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/services/industrial-warehouses',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Industrial Warehouses Construction & Maintenance Abu Dhabi | ArrowHead',
    description: 'Turnkey industrial warehouse construction, pre-engineered steel buildings, and warehouse maintenance in Abu Dhabi.',
    images: [
      {
        url: '/images/Matrix_project.jpeg',
        width: 800,
        height: 600,
        alt: 'Industrial Warehouse Construction & Maintenance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Warehouses Construction & Maintenance Abu Dhabi | ArrowHead',
    description: 'Turnkey industrial warehouse construction, pre-engineered steel buildings, and warehouse maintenance in Abu Dhabi.',
    images: ['/images/Matrix_project.jpeg'],
  },
};

export default function IndustrialWarehousesPage() {
  const subServices = [
    {
      title: 'Structural Steel Portal Frames & PEB Buildings',
      desc: 'Design, fabrication, and erection of high-span structural steel portal frames and pre-engineered buildings (PEB) complying with BS EN 1090-2. We integrate overhead crane gantry runway beams, mezzanine structural platforms, and high-strength hot-dip galvanized steel framing.',
    },
    {
      title: 'TR34 High-Flatness Industrial Concrete Slabs',
      desc: 'Precision laser-screed concrete floor pouring adhering to Concrete Society TR34 (Free-Movement and Defined-Movement) standards. We install heavy-duty steel fiber reinforcement, dry-shake quartz surface hardeners, and heavy machinery foundation plinths.',
    },
    {
      title: 'Cladding, Roof Insulation & Dock Levelers',
      desc: 'Installation of high-efficiency insulated polyurethane sandwich roof and wall panels, polycarbonate skylight daylighting strips, automatic industrial sectional overhead doors, heavy vehicle dock levelers, and perimeter security fencing.',
    },
    {
      title: 'Warehouse Preventative Maintenance & Civil AMCs',
      desc: 'Structured annual maintenance contracts (AMCs) covering roof leak waterproofing, high-pressure polyurea joint resealing, structural steel anti-corrosion touch-ups, Civil Defense fire sprinkler testing, and high-bay electrical maintenance.',
    },
  ];

  const standards = [
    { title: 'Structural Standard', value: 'BS EN 1090-2 Execution of Steel Structures' },
    { title: 'Concrete Flooring', value: 'TR34 High-Flatness (FM2 / FM3 Tolerance)' },
    { title: 'Authority Clearances', value: 'ZonesCorp, Abu Dhabi Municipality (TAMM) & Civil Defense' },
    { title: 'Crane Capacity', value: '5-Ton to 50-Ton Overhead Traveling Crane Gantries' },
    { title: 'Industrial Locations', value: 'Mussafah, ICAD I-III, KIZAD, Al Markaz, Tawazun' },
  ];

  const faqs = [
    {
      q: 'What approvals are required to construct a warehouse in Mussafah or ICAD?',
      a: 'Constructing an industrial warehouse in Abu Dhabi requires plot demarcation, environmental clearance (EAD), industrial development permissions from ZonesCorp, structural building permits from the Abu Dhabi Municipality via the TAMM portal, and fire safety compliance certification from Abu Dhabi Civil Defense. ArrowHead manages all authority submittals end-to-end.',
    },
    {
      q: 'Why is TR34 concrete floor flatness critical for logistics warehouses?',
      a: 'The Technical Report 34 (TR34) defines floor flatness tolerances for high-density logistics storage. High-reach forklifts and VNA (Very Narrow Aisle) trucks require ultra-flat surfaces to prevent mast swaying, reduce tire wear, and ensure safe high-speed pallet racking operations.',
    },
    {
      q: 'Do you offer ongoing repair and maintenance contracts for existing warehouses?',
      a: 'Yes. We offer comprehensive civil, structural, and MEP Annual Maintenance Contracts (AMCs) for existing warehouses. Our teams repair floor expansion joint spalls, re-waterproof corrugated metal roofs, perform structural load inspections, and maintain fire riser networks 24/7.',
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Industrial Warehouses Construction & Maintenance',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'ArrowHead International General Contracting LLC',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '5th Floor, Prestige Towers, Mussaffah',
        'addressLocality': 'Abu Dhabi',
        'addressRegion': 'Abu Dhabi',
        'addressCountry': 'AE'
      },
      'telephone': '+97125545230',
      'url': 'https://arrowheadigc.com'
    },
    'description': 'Turnkey industrial warehouse construction, pre-engineered steel buildings, TR34 concrete slabs, and warehouse maintenance in Abu Dhabi.',
    'areaServed': 'Abu Dhabi, UAE',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Industrial Warehouse Services',
      'itemListElement': subServices.map((s, idx) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': s.title,
          'description': s.desc
        }
      }))
    }
  };

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

  const projectReferences = [
    {
      name: 'Mussafah Logistics Warehouse Facility',
      location: 'Mussafah M9 Industrial Zone',
      desc: 'Turnkey pre-engineered steel warehouse featuring TR34 laser-screed floor slabs, 10-ton crane gantry beams, and Civil Defense wet risers.',
      image: '/images/Matrix_project2.jpeg',
      link: '/projects/mussafah-warehouse-civils'
    },
    {
      name: 'Katheri Family Logistics & Commercial Facility',
      location: 'Mussafah / ICAD',
      desc: 'Structural steel framing, foundation pile caps, and exterior utility tie-ins executed for commercial and logistics operations.',
      image: '/images/Matrix_project.jpeg',
      link: '/projects/katheri-family-villas'
    },
    {
      name: 'Mussafah Industrial Factory Hard FM AMC',
      location: 'Mussafah Industrial Area',
      desc: 'Integrated warehouse facility management, AC chiller maintenance, and electrical distribution board thermography.',
      image: '/images/facility.png',
      link: '/projects/mussafah-fm'
    }
  ];

  return (
    <div className="bg-app-bg text-app-fg min-h-screen transition-colors duration-200">
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={faqSchema} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-secondary py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Services', href: '/services' },
              { name: 'Industrial Warehouses' },
            ]}
          />
          <div className="mt-6 text-center max-w-3xl mx-auto">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">
              Industrial Civil &amp; Structural Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg mt-4 tracking-tight leading-tight">
              Industrial Warehouses Construction &amp; Maintenance
            </h1>
            <p className="mt-6 text-sm sm:text-base text-app-muted font-light leading-relaxed">
              Engineered for heavy logistics, manufacturing plants, and distribution centers across Abu Dhabi (Mussafah, ICAD, and KIZAD). From structural steel portal erection and TR34 superflat flooring to comprehensive warehouse maintenance AMCs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
              >
                Request Warehouse RFQ
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3 rounded bg-app-card border border-app-border text-app-fg font-bold text-xs uppercase tracking-wider hover:border-brand-teal transition-all duration-300"
              >
                View Warehouse Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE SCOPES */}
      <section className="py-20 border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">
              Turnkey Warehouse Delivery
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-app-fg mt-2">
              End-to-End Industrial Engineering
            </h2>
            <p className="text-app-muted text-sm font-light mt-4">
              We manage the entire lifecycle from geotechnical survey and municipal permitting to structural steel erection and annual maintenance care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((sub, idx) => (
              <div
                key={idx}
                className="bg-app-card p-8 rounded-xl border border-app-border hover:border-brand-teal/40 transition-all duration-300 shadow-md hover:shadow-xl group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal font-bold font-mono text-sm mb-5 group-hover:bg-brand-teal group-hover:text-primary-dark transition-colors duration-300">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-heading font-bold text-app-fg mb-3 group-hover:text-brand-teal transition-colors duration-300">
                  {sub.title}
                </h3>
                <p className="text-app-muted text-xs sm:text-sm font-light leading-relaxed">
                  {sub.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS & STANDARDS */}
      <section className="py-20 bg-app-secondary border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">
                Structural &amp; Material Compliance
              </span>
              <h2 className="text-3xl font-heading font-extrabold text-app-fg">
                Built for High Loads &amp; Harsh Gulf Climates
              </h2>
              <div className="text-app-muted space-y-4 text-xs sm:text-sm font-light leading-relaxed">
                <p>
                  Industrial facilities in Abu Dhabi face intense ambient thermal cycles, salt-laden soil, and heavy operational vibration. ArrowHead engineers heavy reinforced concrete pile caps, sulfate-resistant cement mixes, and epoxy-coated steel portals to guarantee decades of structural integrity.
                </p>
                <p>
                  We coordinate with leading engineering consultants and industrial authorities (ZonesCorp, Civil Defense, and Abu Dhabi Municipality) to secure fast-track building permits and occupancy certificates.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold uppercase tracking-wider hover:underline"
                >
                  Consult an Industrial Engineer <span>&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-app-card rounded-xl border border-app-border p-6 shadow-xl space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold font-mono pb-2 border-b border-app-border">
                  Engineering Benchmarks &amp; Specifications
                </h4>
                <div className="divide-y divide-app-border/60">
                  {standards.map((std, idx) => (
                    <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <span className="text-xs font-medium text-app-muted">{std.title}</span>
                      <span className="text-xs font-bold text-app-fg">{std.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED WAREHOUSE PROJECTS */}
      <section className="py-20 border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">
                Industrial Case Studies
              </span>
              <h2 className="text-3xl font-heading font-extrabold text-app-fg mt-2">
                Delivered Warehouse Facilities
              </h2>
            </div>
            <Link
              href="/projects"
              className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-brand-teal hover:underline inline-flex items-center gap-1"
            >
              Explore All Projects <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectReferences.map((p, idx) => (
              <div
                key={idx}
                className="bg-app-card rounded-xl overflow-hidden border border-app-border hover:border-brand-teal/40 transition-all duration-300 shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 overflow-hidden relative bg-app-secondary">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-primary-dark/80 backdrop-blur-xs text-brand-teal text-[10px] font-mono px-2.5 py-1 rounded">
                      {p.location}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-heading font-bold text-app-fg group-hover:text-brand-teal transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-app-muted text-xs font-light mt-2.5 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={p.link}
                    className="text-xs font-bold text-brand-teal hover:underline inline-flex items-center gap-1"
                  >
                    View Project Case Study <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="py-20 border-b border-app-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">
              Got Questions?
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-app-fg mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-app-card p-6 rounded-xl border border-app-border shadow-sm space-y-2"
              >
                <h3 className="text-sm sm:text-base font-heading font-bold text-app-fg">
                  {faq.q}
                </h3>
                <p className="text-app-muted text-xs sm:text-sm font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Planning a Warehouse Build or AMC in Abu Dhabi?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Contact ArrowHead for structural steel estimates, TR34 laser-screed floor planning, and ZonesCorp municipal permit processing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-xl transition-all duration-300"
            >
              Request Industrial Proposal
            </Link>
            <a
              href="tel:+97125545230"
              className="px-8 py-4 rounded bg-white/10 text-white border border-white/20 font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all duration-300"
            >
              Call +971 2 554 5230
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
