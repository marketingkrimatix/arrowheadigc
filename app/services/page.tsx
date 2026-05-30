import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contracting & Maintenance Services Abu Dhabi | ArrowHead',
  description: 'Explore the full engineering and general contracting capabilities of ArrowHead LLC in Abu Dhabi: HDPE pipe welding, villa building, renovations, MEP, and hard/soft FM.',
  keywords: ['contracting services Abu Dhabi', 'pipeline installation services', 'villa building services', 'facility AMC services', 'MEP engineering works'],
  alternates: {
    canonical: 'https://arrowheadigc.com/services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/services',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Contracting & Maintenance Services Abu Dhabi | ArrowHead',
    description: 'Explore the full engineering and general contracting capabilities of ArrowHead LLC in Abu Dhabi: HDPE pipe welding, villa building, renovations, MEP, and hard/soft FM.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'ArrowHead Contracting Services Abu Dhabi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contracting & Maintenance Services Abu Dhabi | ArrowHead',
    description: 'Explore the full engineering and general contracting capabilities of ArrowHead LLC in Abu Dhabi: HDPE pipe welding, villa building, renovations, MEP, and hard/soft FM.',
    images: ['https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function ServicesPage() {
  const serviceList = [
    {
      id: 'hdpe-pipelines',
      title: 'HDPE Pipelines (Supply & Installation)',
      desc: 'Expert services for HDPE pipeline welding (butt-fusion and electrofusion), trenchless horizontal directional drilling (HDD), and hydrostatic pressure testing. Complying with ADSSC and ADDC guidelines.',
      features: ['PE100 Pipeline Networks', 'Butt-Fusion & Electrofusion Welding', 'Trenchless Installation (HDD)', 'Hydrostatic Pressure Testing'],
      href: '/services/hdpe-pipelines',
    },
    {
      id: 'villa-construction',
      title: 'Villa Construction & Contractors',
      desc: 'Elite design-build villa contractors in Abu Dhabi. Turnkey residential engineering, custom architecture, structural casting, shell & core, and Estidama certifications.',
      features: ['Turnkey Custom Villas', 'Estidama Pearl Ratings', 'Structural & Foundation Civils', 'TAMM Municipality Approvals'],
      href: '/services/villa-construction',
    },
    {
      id: 'villa-renovation',
      title: 'Villa Renovation & Extensions',
      desc: 'Premium structural extensions, kitchen and bathroom upgrades, layout redesigns, boundary walls construction, and refurbishment works for private residences.',
      features: ['Structural Extensions', 'Majlis & Boundary Upgrades', 'Fit-out & Tiling Works', 'Municipal Building Permits'],
      href: '/services/villa-renovation',
    },
    {
      id: 'facility-management',
      title: 'Facility Management (Hard & Soft Services)',
      desc: 'Complete integrated building care. Hard FM covering preventative MEP, HVAC servicing, and drainage flushing. Soft FM covering deep cleaning, landscaping, and pest control.',
      features: ['MEP Preventative Maintenance', 'HVAC Chiller Overhauls', 'Deep Cleaning & Landscaping', 'Abu Dhabi Municipality Pest Control'],
      href: '/services/facility-management',
    },
    {
      id: 'mep-specialized',
      title: 'MEP & Specialized Works',
      desc: 'Technical mechanical, electrical, and plumbing engineering. HVAC ventilation retrofits, DB sizing, drainage networks, and firefighting suppression installations.',
      features: ['HVAC Ducting & Ventilation', 'Electrical DB Installations', 'Fire Suppression Infrastructure', 'Energy Consumption Audits'],
      href: '/services/mep-specialized',
    },
    {
      id: 'marine-industrial',
      title: 'Marine & Industrial Works',
      desc: 'Specialized facility contracting in Mussafah, ICAD, and Ports. Dock slipway renovations, manufacturing warehouse upgrades, and industrial piping installations.',
      features: ['Slipway Structural Repairs', 'Warehouse Metal Fabrications', 'ICAD Site HSE Compliances', 'Plant Room Piping Systems'],
      href: '/services/marine-industrial',
    },
    {
      id: 'wet-utilities-infrastructure',
      title: 'Wet Utilities & Drainage Infrastructure',
      desc: 'Certified wet utilities contracting. Supply, welding, pressure testing, and connection of sewage grids, water transmission networks, and storm outfalls conforming to ADSSC and ADDC standard details.',
      features: ['ADSSC Sewerage Lines', 'ADDC Water Mains', 'Storm Water Outfalls', 'Precast Valve Chambers'],
      href: '/services/wet-utilities-infrastructure',
    },
    {
      id: 'infrastructure-civil-works',
      title: 'Infrastructure & Civil Works',
      desc: 'Approved civil engineering contracting in Abu Dhabi. Bulk earthworks, site grading, compaction testing, boundary walls construction, interlocking paving, and heavy concrete foundations.',
      features: ['Site Grading & Earthworks', 'Boundary & Retaining Walls', 'Heavy Compaction Testing', 'Interlock & Kerbstone Paving'],
      href: '/services/infrastructure-civil-works',
    },
  ];

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'ArrowHead General Contracting Services',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'ArrowHead General Contracting LLC',
      'telephone': '+97125545230',
      'email': 'info@arrowheadigc.com',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Abu Dhabi',
        'addressCountry': 'AE'
      }
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Contracting Capabilities',
      'itemListElement': serviceList.map((service, idx) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': service.title,
          'description': service.desc
        }
      }))
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://arrowheadigc.com/services' }
    ]
  };

  return (
    <div id="services-directory-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[servicesSchema, breadcrumbSchema]} />

      {/* 1. HERO HEADER */}
      <section className="bg-app-bg py-16 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Services' }]} />
          <h1 className="text-4xl font-heading font-extrabold text-app-fg mt-3 tracking-tight">
            Our Contracting &amp; Our Capabilities
          </h1>
          <p className="mt-4 text-sm text-app-muted max-w-2xl mx-auto font-light leading-relaxed">
            ArrowHead delivers expert civil engineering, pipeline works, building construction, and facilities maintenance throughout the Abu Dhabi region.
          </p>
        </div>
      </section>

      {/* 2. SERVICES LISTING */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceList.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 border-b border-app-border last:border-b-0 last:pb-0 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Details */}
                <div className={`lg:col-span-7 space-y-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <span className="text-brand-teal text-xs font-bold uppercase tracking-wider font-mono">
                    0{index + 1}. Service Class
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-app-muted text-sm leading-relaxed font-light">
                    {service.desc}
                  </p>
                  
                  {/* Quick features grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-app-fg/80">
                        <span className="text-brand-teal text-sm">✓</span>
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={service.href}
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover transition-colors"
                    >
                      <span>Detailed Specifications</span>
                    </Link>
                  </div>
                </div>

                {/* Banner / Visual Placeholder */}
                <div className={`lg:col-span-5 bg-app-secondary border border-app-border rounded-2xl p-8 flex flex-col justify-center min-h-[220px] shadow-2xl relative overflow-hidden ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-navy/95 to-primary-navy/40 mix-blend-multiply pointer-events-none"></div>
                  <div className="relative z-10 text-white space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-teal block font-mono">
                      Scope Compliance
                    </span>
                    <p className="text-xs font-light text-app-fg/80 leading-relaxed">
                      All technical materials, dimensions, testing protocols, and welding operations are certified to meet municipal and utility codes.
                    </p>
                    <div className="text-[10px] font-mono text-app-muted/60">
                      Standard: ISO, ADSSC, ADDC Approvals
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
