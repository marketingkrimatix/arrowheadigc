import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Sectors & Industries Served Abu Dhabi | ArrowHead',
  description: 'Learn how ArrowHead customizes contracting, pipeline engineering, and facility management for Residential, Industrial, Marine, and Commercial sectors.',
  keywords: ['industries served Abu Dhabi', 'residential contracting sector', 'industrial plant maintenance', 'marine waterfront contracting', 'office fit-out contracting'],
  alternates: {
    canonical: 'https://arrowheadigc.com/sectors',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/sectors',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Sectors & Industries Served Abu Dhabi | ArrowHead',
    description: 'Learn how ArrowHead customizes contracting, pipeline engineering, and facility management for Residential, Industrial, Marine, and Commercial sectors.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Sectors Served by ArrowHead Contracting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sectors & Industries Served Abu Dhabi | ArrowHead',
    description: 'Learn how ArrowHead customizes contracting, pipeline engineering, and facility management for Residential, Industrial, Marine, and Commercial sectors.',
    images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function SectorsPage() {
  const sectors = [
    {
      id: 'residential-villas',
      title: 'Residential & Luxury Villas',
      desc: 'High-end design-build villas, structural extensions, complete home remodeling, and premium MEP installations for private clients in Abu Dhabi.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      href: '/sectors/residential-villas',
    },
    {
      id: 'industrial-manufacturing',
      title: 'Industrial & Manufacturing',
      desc: 'Pipeline supply loops, steel workshop fabrications, heavy concrete foundation bases, and hard maintenance services in Mussafah and ICAD zones.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
      href: '/sectors/industrial-manufacturing',
    },
    {
      id: 'marine-ports',
      title: 'Marine, Ports & Waterfront',
      desc: 'Slipways renovation, seawall inspections and crack injection repairs, shoreline piling services, and port utility maintenance contracts.',
      image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=600&q=80',
      href: '/sectors/marine-ports',
    },
    {
      id: 'commercial-retail',
      title: 'Commercial Offices & Retail Malls',
      desc: 'Tenant fit-out MEP, chilled water line adjustments, fire sprinkler retrofits, and integrated facilities management contracts.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      href: '/sectors/commercial-retail',
    },
    {
      id: 'infrastructure-utilities',
      title: 'Infrastructure & Utility Networks',
      desc: 'Municipal utility pipelines, gravity sewerage grids, storm drainage outfalls, and potable water distribution networks complying with ADSSC and ADDC standard details.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
      href: '/sectors/infrastructure-utilities',
    },
    {
      id: 'hospitality-leisure',
      title: 'Hospitality, Resorts & Leisure',
      desc: 'High-end fit-out interior construction, specialized HVAC chilled water configurations, and comprehensive preventive building facility management AMCs for hotels and theme parks.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      href: '/sectors/hospitality-leisure',
    },
  ];

  const sectorsSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'ArrowHead Industry Sector Specialties',
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
      'name': 'Sectors Served',
      'itemListElement': sectors.map((sec, idx) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': sec.title,
          'description': sec.desc
        }
      }))
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Sectors', 'item': 'https://arrowheadigc.com/sectors' }
    ]
  };

  return (
    <div id="sectors-directory-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[sectorsSchema, breadcrumbSchema]} />

      {/* 1. HERO HEADER */}
      <section className="bg-app-bg py-16 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Sectors' }]} />
          <h1 className="text-4xl font-heading font-extrabold text-app-fg mt-3 tracking-tight">
            Sectors We Serve in the UAE
          </h1>
          <p className="mt-4 text-sm text-app-muted max-w-2xl mx-auto font-light leading-relaxed">
            We deliver tailored civil, piping, and mechanical solutions, meeting the distinct challenges of each sector we operate in.
          </p>
        </div>
      </section>

      {/* 2. SECTORS LISTING */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sec) => (
              <div
                key={sec.id}
                className="bg-app-card border border-app-border offset-border-frame shadow-sm rounded-2xl overflow-hidden border border-app-border hover:border-brand-teal/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 relative bg-gray-955 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${sec.image}')` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 to-transparent"></div>
                    <h3 className="absolute bottom-6 left-6 text-xl sm:text-2xl font-heading font-bold text-white">
                      {sec.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-app-muted text-xs sm:text-sm leading-relaxed font-light">
                      {sec.desc}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={sec.href}
                    className="inline-flex items-center text-xs font-bold text-brand-teal uppercase tracking-widest hover:text-brand-teal transition-colors"
                  >
                    <span>View Projects &amp; Capabilities</span>
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
