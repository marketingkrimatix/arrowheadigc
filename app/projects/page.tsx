import React from 'react';
import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';
import JsonLd from '@/components/SEO/JsonLd';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Delivered Projects & Case Studies Abu Dhabi | ArrowHead',
  description: 'Explore our general contracting case studies in Abu Dhabi: HDPE pipe supply networks on Yas Island, luxury turnkey villas, factory Hard FM, and marine slipways.',
  keywords: ['contracting portfolio Abu Dhabi', 'construction case studies UAE', 'HDPE pipeline projects', 'villa construction portfolio', 'facilities management clients'],
  alternates: {
    canonical: 'https://arrowheadigc.com/projects',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/projects',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Delivered Projects & Case Studies Abu Dhabi | ArrowHead',
    description: 'Explore our general contracting case studies in Abu Dhabi: HDPE pipe supply networks on Yas Island, luxury turnkey villas, factory Hard FM, and marine slipways.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'ArrowHead General Contracting Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delivered Projects & Case Studies Abu Dhabi | ArrowHead',
    description: 'Explore our general contracting case studies in Abu Dhabi: HDPE pipe supply networks on Yas Island, luxury turnkey villas, factory Hard FM, and marine slipways.',
    images: ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function ProjectsPage() {
  // Generate ItemList schema mapping the project case studies
  const projectsListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'ArrowHead General Contracting Projects Portfolio',
    'itemListElement': projects.map((project, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'url': `https://arrowheadigc.com/projects/${project.slug}`,
      'name': project.title,
      'description': project.desc
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Projects', 'item': 'https://arrowheadigc.com/projects' }
    ]
  };

  return (
    <>
      <JsonLd schema={[projectsListSchema, breadcrumbSchema]} />
      <ProjectsClient />
    </>
  );
}
