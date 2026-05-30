import React from 'react';
import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import JsonLd from '@/components/SEO/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Our Engineering Estimators | ArrowHead Abu Dhabi',
  description: 'Get in touch with ArrowHead general contracting estimators in Mussafah, Abu Dhabi. Submit your drawings and specifications for pipeline, villa, or facility maintenance RFQs.',
  keywords: ['contact ArrowHead', 'contractor office Mussafah', 'submit RFQ Abu Dhabi', 'construction estimates Abu Dhabi', 'general contracting phone'],
  alternates: {
    canonical: 'https://arrowheadigc.com/contact',
  },
};

export default function ContactPage() {
  const contactSchema = {
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
    'url': 'https://arrowheadigc.com/contact',
    'priceRange': '$$$$',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      'opens': '08:00',
      'closes': '17:30'
    }
  };

  return (
    <>
      <JsonLd schema={contactSchema} />
      <ContactClient />
    </>
  );
}
