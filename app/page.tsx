import React from 'react';
import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';
import JsonLd from '@/components/SEO/JsonLd';

export const metadata: Metadata = {
  title: 'ArrowHead International General Contracting LLC Abu Dhabi',
  description: 'ArrowHead is a leading general contracting and facilities management company based in Mussafah, Abu Dhabi. Specializing in HDPE pipelines, villa construction, renovations, and MEP works.',
  keywords: [
    'general contracting company in Abu Dhabi',
    'HDPE pipeline contractors Abu Dhabi',
    'HDPE pipes supply and installation Abu Dhabi',
    'villa contractors in Abu Dhabi',
    'villa construction Abu Dhabi',
    'villa renovation Abu Dhabi',
    'facility management company in Abu Dhabi',
    'facility management services UAE',
    'MEP contractors Abu Dhabi',
    'marine and industrial facility maintenance Abu Dhabi'
  ],
  alternates: {
    canonical: 'https://arrowheadigc.com',
  },
};

export default function HomePage() {
  const homepageSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'ArrowHead International General Contracting LLC',
    'image': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    'telephone': '+97125545230',
    'email': 'info@arrowheadigc.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '5th Floor, Prestige Towers, Mussaffah',
      'addressLocality': 'Abu Dhabi',
      'addressRegion': 'Abu Dhabi',
      'postalCode': '00000',
      'addressCountry': 'AE'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '24.3512',
      'longitude': '54.5126'
    },
    'url': 'https://arrowheadigc.com',
    'priceRange': '$$$$',
    'sameAs': [
      'https://www.linkedin.com/company/arrowheadigc',
      'https://wa.me/97125545230'
    ],
    'knowsAbout': [
      'HDPE Pipeline supply and installation',
      'Luxury villa design-build',
      'Hard and Soft Facilities Management',
      'MEP and Specialized Fit-out',
      'Marine slipway repairs and Sea Walls'
    ]
  };

  const homeFaqs = [
    {
      q: 'Is ArrowHead registered with Abu Dhabi utility authorities?',
      a: 'Yes. ArrowHead is registered under Abu Dhabi Department of Economic Development (DED License: CN-4998977) and is fully aligned with the design, testing, and materials specifications of the Abu Dhabi Sewerage Services Company (ADSSC) and the Abu Dhabi Distribution Company (ADDC).',
    },
    {
      q: 'What regions of the UAE does ArrowHead operate in?',
      a: 'While our main head office is located in Mussafah, Abu Dhabi (Prestige Towers), we execute large-scale contracting projects, MEP works, and facility management across all primary zones in Abu Dhabi (including Yas Island, Khalifa City, Saadiyat, Al Raha) as well as selected industrial and luxury residential sites in Dubai.',
    },
    {
      q: 'Can you handle the permit and approval process for villa construction or extensions?',
      a: 'Absolutely. We offer complete turnkey services. This includes preparing structural drafts, architectural elevations, Estidama submissions, and securing approvals from the Abu Dhabi Municipality, Civil Defense, and local utility providers via the TAMM portal.',
    },
    {
      q: 'Do you work as a subcontractor or direct contractor for pipeline welding?',
      a: 'We work as both. ArrowHead functions as a primary general contractor for utility networks, and as a specialized subcontractor for complex butt-fusion and electrofusion welding of HDPE water/sewer pipelines from DN 110mm to DN 1200mm.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': homeFaqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  };

  return (
    <>
      <JsonLd schema={[homepageSchema, faqSchema]} />
      <HomeClient />
    </>
  );
}