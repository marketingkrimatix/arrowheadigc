import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import CinematicSlider from '@/components/showcases/CinematicSlider';
import BuildTimelineShowcase from '@/components/showcases/BuildTimelineShowcase';
import CinematicSpecGrid from '@/components/showcases/CinematicSpecGrid';
import CollageBoxShowcase from '@/components/showcases/CollageBoxShowcase';

export const metadata: Metadata = {
  title: 'Marine Contracting & Industrial Maintenance Abu Dhabi | ArrowHead',
  description: 'Specialized marine engineering and industrial site renovations in Mussafah, ICAD, and Ports. We repair slipways, reinforce seawalls, fabricate warehouse steel frames, and install plant piping.',
  keywords: ['marine contracting Abu Dhabi', 'industrial maintenance Mussafah', 'slipway repair Abu Dhabi', 'seawall repair Abu Dhabi', 'warehouse fabrication Mussafah'],
  alternates: {
    canonical: 'https://arrowheadigc.com/services/marine-industrial',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/services/marine-industrial',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Marine Contracting & Industrial Maintenance Abu Dhabi | ArrowHead',
    description: 'Specialized marine engineering and industrial site renovations in Mussafah, ICAD, and Ports. We repair slipways, reinforce seawalls, fabricate warehouse steel frames, and install plant piping.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Marine and Industrial Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marine Contracting & Industrial Maintenance Abu Dhabi | ArrowHead',
    description: 'Specialized marine engineering and industrial site renovations in Mussafah, ICAD, and Ports. We repair slipways, reinforce seawalls, fabricate warehouse steel frames, and install plant piping.',
    images: ['https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function MarineIndustrialPage() {
  const subServices = [
    {
      title: 'Slipway & Jetty Structural Renovation',
      desc: 'Repairing concrete erosion, restoring steel reinforcements, and casting structural slipways for boats and marine assets under tidal conditions. We apply high-durability marine-grade concrete and epoxy coatings.',
    },
    {
      title: 'Coastal Civils & Sea Wall Repairs',
      desc: 'Inspecting, grouting, and reinforcing sea walls, marine block placements, and shore protection structures to prevent soil erosion and maintain waterfront asset stability.',
    },
    {
      title: 'Warehouse & Workshop Steel Fabrication',
      desc: 'Manufacturing and erecting structural steel frames for industrial workshops and storage warehouses in Mussafah and ICAD. We handle everything from anchor bolt installations to roof cladding.',
    },
    {
      title: 'Industrial Plant Room Pipe Installations',
      desc: 'Supply and installation of specialized heavy-duty steel and HDPE industrial pipes for pump rooms, cooling towers, industrial chemical conveyance, and air compression networks.',
    },
  ];

  const standards = [
    { title: 'Zones Complied', value: 'Mussafah Industrial Area, ICAD, Ports' },
    { title: 'Concrete Specification', value: 'Microsilica / Marine-Grade Concrete (C50/60)' },
    { title: 'Fabrication Standards', value: 'BS EN 1090-2 (Execution of Steel Structures)' },
    { title: 'Marine Coatings', value: 'High-Thickness Epoxy Anti-Corrosive Painting' },
    { title: 'Authority Approvals', value: 'Abu Dhabi Ports, Environment Agency Abu Dhabi (EAD)' },
  ];

  const faqs = [
    {
      q: 'Do you work inside Abu Dhabi ports and custom-controlled marine zones?',
      a: 'Yes. We are registered to secure security passes and work permits for Mussafah Port, Zayed Port, and other critical infrastructure zones in Abu Dhabi. Our crew conforms to port-specific safety rules and coordinates with harbor masters.',
    },
    {
      q: 'How do you prevent corrosion on marine structures?',
      a: 'We use high-thickness anti-corrosive epoxy painting systems, cathodic protection (sacrificial anodes), and microsilica cement mixtures. This reduces permeability and protects steel rebar from chloride attack in Arabian Gulf waters.',
    },
    {
      q: 'Can you manufacture custom steel mezzanines for Mussafah warehouses?',
      a: 'Yes. Our structural engineers calculate load weights, fabricate steel support columns, and install mezzanine floors to expand storage space in industrial warehouses, providing complete municipality structural approvals.',
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
    'name': 'Marine & Industrial Works',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'ArrowHead General Contracting LLC',
      'telephone': '+971-2-XXXXXXX',
      'priceRange': '$$$$',
      'image': 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Abu Dhabi',
        'addressCountry': 'AE'
      }
    },
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Mussafah' },
      { '@type': 'AdministrativeArea', 'name': 'Saadiyat Island' },
      { '@type': 'AdministrativeArea', 'name': 'Yas Island' },
      { '@type': 'AdministrativeArea', 'name': 'Al Raha' },
      { '@type': 'AdministrativeArea', 'name': 'Khalifa City' }
    ],
    'description': 'Specialized marine engineering and industrial site renovations. We repair slipways, reinforce seawalls, fabricate warehouse steel frames, and install plant room pipes in Mussafah, ICAD, and Ports.'
  };

  const locationLinks = [
    { name: 'Mussafah (Industrial Hub & Sea Walls)', href: '/locations/mussafah' },
    { name: 'Saadiyat Island (Marine Environment Compliance)', href: '/locations/saadiyat-island' },
    { name: 'Yas Island (Infrastructure & Outfalls)', href: '/locations/yas-island' },
    { name: 'Al Raha Beach (Waterfront & Civil Civils)', href: '/locations/al-raha' },
    { name: 'Khalifa City (Residential Civils)', href: '/locations/khalifa-city' },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://arrowheadigc.com/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Marine & Industrial', 'item': 'https://arrowheadigc.com/services/marine-industrial' }
    ]
  };

  return (
    <div id="marine-industrial-service-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[faqSchema, serviceSchema, breadcrumbSchema]} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-bg py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: 'Marine & Industrial' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            Marine Contracting &amp; <br />Industrial Maintenance
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Specialized marine engineering and industrial site renovations. We repair slipways, reinforce seawalls, fabricate warehouse steel frames, and install plant room pipes in Mussafah, ICAD, and Ports.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
            >
              Request an Industrial RFQ
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

      {/* 2. SPECIFICATION OVERVIEW */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Heavy Engineering</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight">
                Industrial &amp; Port Infrastructure Services
              </h2>
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  Marine and industrial structures operate under extreme environmental stress, including high salinity, coastal humidity, chemical exposure, and heavy mechanical loading. Constructing and maintaining these facilities requires specialized knowledge of corrosion chemistry, metallurgy, and marine geotechnical engineering. ArrowHead delivers high-specification marine and industrial contracting services, focusing on dock slipway restorations, concrete sea wall reinforcements, sheet piling installations, and cathodic protection upgrades.
                </p>
                <p>
                  Our marine engineering division executes waterfront repairs under challenging tidal conditions. We perform abrasive grit sandblasting of structural steel piles and sheet piling to SA 2.5 standards, removing all rust and mill scale before applying high-build glass-flake reinforced marine epoxy coatings. We mount sacrificial zinc anodes to provide long-term cathodic protection. For concrete structures, slipways, and jetties, we pour sulfate-resistant C50/60 concrete mixes containing microsilica and plasticizers to ensure low permeability and high resistance to chloride penetration.
                </p>
                <p>
                  For industrial operations, manufacturing facilities, and logistics centers, we construct heavy structural steel frames complying with BS EN 1090-2 standards. We design and pour high-durability concrete floor slabs designed using TR34 guidelines to handle heavy wheel loads and warehouse racking systems. We coordinate closely with ZonesCorp, Abu Dhabi Port authorities, and the Environment Agency Abu Dhabi (EAD) to secure necessary operational permissions and waste management NOCs.
                </p>
  </div>
            </div>

            {/* Right Details Table */}
            <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl">
              <h3 className="text-base font-bold text-white border-b border-app-border pb-4 uppercase tracking-wider font-heading">
                Industrial Specifications
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
              Marine &amp; Industrial Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((sub, idx) => (
              <div key={idx} className="bg-app-card border border-app-border offset-border-frame shadow-sm p-8 rounded-xl border border-app-border shadow-2xl space-y-3">
                <span className="text-brand-teal font-mono font-bold text-xs block">0{idx + 1}. Specialty Scope</span>
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
            ICAD &amp; Industrial Zones HSE Compliance
          </h2>
          <p className="text-xs sm:text-sm text-app-muted max-w-3xl mx-auto leading-relaxed font-light">
            Working inside industrial manufacturing zones and port locations requires strict adherence to environmental controls, fire safety codes, and hazardous waste management. ArrowHead coordinates all permits with the Environment Agency Abu Dhabi and Abu Dhabi Ports, guaranteeing high HSE audit marks.
          </p>
          <div className="flex justify-center space-x-6 text-[10px] sm:text-xs text-brand-teal font-bold uppercase tracking-wider">
            <span>✓ EAD Compliant</span>
            <span>✓ Marine Work Permits</span>
            <span>✓ Port Authority Coordinates</span>
            <span>✓ High HSE Ratings</span>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-app-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Inquiry Support</span>
            <h2 className="mt-3 text-3xl font-heading font-extrabold text-app-fg tracking-tight">
              Marine &amp; Industrial FAQs
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
                Active Regional Marine Operations
              </h3>
              <p className="text-xs text-app-muted mb-6 font-light">
                ArrowHead delivers marine renovations and steel fabrications across industrial coastal areas:
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
                Review our engineering files detailing jointing logs, structural calculations, and permit regulations:
              </p>
              <div className="flex flex-col space-y-4">
                <Link href="/insights/hdpe-butt-fusion-welding-parameters" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">HDPE Butt-Fusion Welding Technical Parameters</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Learn about butt-fusion heating parameters, pressures, and welding standards.</span>
                </Link>
                <Link href="/insights/guide-to-tamm-villa-approvals" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">Abu Dhabi TAMM Building Permit Guide</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Helpful when planning structural steel or building extensions inside warehouses.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-16 bg-app-secondary border-t border-app-border text-center">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
          Discuss Your Marine or Industrial Contracting Tenders
        </h2>
        <p className="mt-3 text-app-muted text-xs sm:text-sm max-w-xl mx-auto font-light">
          Request a technical bidding estimate or structural inspection for port/manufacturing assets.
        </p>
        <div className="mt-8">
          <Link
            href="/contact?rfq=true"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
          >
            Submit Industrial/Marine RFQ
          </Link>
        </div>
      </section>
    </div>
  );
}
