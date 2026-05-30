import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import JsonLd from '@/components/SEO/JsonLd';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: 'Project Not Found | ArrowHead',
      description: 'The requested project case study could not be found.',
    };
  }

  return {
    title: `${project.title} Case Study | ArrowHead Abu Dhabi`,
    description: project.desc,
    keywords: [project.category, `${project.category} Abu Dhabi`, `${project.title} UAE`, project.location],
    alternates: {
      canonical: `https://arrowheadigc.com/projects/${slug}`
    }
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Company updates/news feed mock
  const recentNews = [
    { title: 'ArrowHead Wins Municipal Utility Tender', date: '5 days ago' },
    { title: 'Estidama Safety Audit Handover Complete', date: '2 weeks ago' },
    { title: 'New Butt-Fusion Welding Rig Delivered', date: '3 weeks ago' },
    { title: 'Annual HSE Review: Zero LTI Incidents', date: '1 month ago' },
  ];

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    'name': project.title,
    'description': project.desc,
    'image': project.image,
    'locationCreated': {
      '@type': 'Place',
      'name': project.location,
    },
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'ArrowHead General Contracting LLC',
      'telephone': '+97125545230',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Abu Dhabi',
        'addressCountry': 'AE'
      }
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Projects', 'item': 'https://arrowheadigc.com/projects' },
      { '@type': 'ListItem', 'position': 3, 'name': project.title, 'item': `https://arrowheadigc.com/projects/${slug}` }
    ]
  };

  return (
    <div className="bg-app-bg text-app-fg min-h-screen pb-20">
      <JsonLd schema={[projectSchema, breadcrumbSchema]} />

      {/* 1. ARCHITECTURAL HEADER & BACK LINK */}
      <section className="py-8 border-b border-app-border bg-app-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Projects', href: '/projects' }, { name: project.title }]} />
          <span className="block text-[10px] font-mono text-brand-gold uppercase tracking-widest font-bold">
            Featured Project Case Study
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight mt-1">
            {project.title}
          </h1>
        </div>
      </section>

      {/* 2. MAIN WIDESCREEN HERO GRAPH */}
      <section className="py-4 bg-app-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full aspect-[21/9] rounded-xl overflow-hidden border border-app-border bg-app-secondary relative group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-between items-end gap-4 text-white">
              <div>
                <span className="block text-[8px] font-mono text-brand-gold uppercase tracking-widest font-bold">
                  PROJECT SPECIFICATIONS
                </span>
                <span className="text-sm font-mono font-bold tracking-tight">
                  {project.stats}
                </span>
              </div>
              <span className="text-[10px] font-mono bg-brand-teal text-primary-dark px-3 py-1 rounded font-bold uppercase">
                {project.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DUAL-COLUMN INSPECTOR DETAILS */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Media Gallery, Key Services & Testimonials */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Vertical Project Media gallery */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-bold text-brand-gold uppercase tracking-widest border-b border-app-border pb-2">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {project.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="aspect-square w-full rounded-lg overflow-hidden border border-app-border bg-app-secondary group cursor-zoom-in"
                    >
                      <img
                        src={img}
                        alt={`${project.title} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Services checklist */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-bold text-brand-gold uppercase tracking-widest border-b border-app-border pb-2">
                  Key Services Executed
                </h3>
                <ul className="space-y-2.5">
                  {project.keyServices.map((service, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-xs font-semibold text-app-fg bg-app-secondary p-3 rounded-lg border border-app-border"
                    >
                      <span className="w-2 h-2 rounded-full bg-brand-teal mr-3"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Testimonial quote card */}
              <div className="bg-app-card border border-app-border rounded-xl p-6 shadow-md relative offset-border-frame">
                <span className="text-3xl text-brand-teal font-serif absolute top-3 left-4 select-none opacity-40">“</span>
                <p className="text-xs text-app-muted font-light leading-relaxed italic pl-6">
                  {project.clientTestimonial.quote}
                </p>
                <div className="mt-4 pt-4 border-t border-app-border/60 pl-6 flex justify-between items-center">
                  <div>
                    <span className="block text-[10px] font-mono text-app-fg font-bold uppercase">
                      {project.clientTestimonial.author}
                    </span>
                    <span className="block text-[8px] font-mono text-brand-gold uppercase tracking-wider">
                      {project.clientTestimonial.company}
                    </span>
                  </div>
                  <div className="flex gap-0.5 text-brand-gold text-xs">★★★★★</div>
                </div>
              </div>

            </div>

            {/* Right Column: Engineering Challenges, Solutions, News Feed, & Actions */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Project Summary */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold text-brand-teal uppercase tracking-widest">
                  Executive Project Summary
                </h3>
                <p className="text-sm font-light text-app-fg/90 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Engineering challenge card */}
              <div className="bg-app-secondary/40 border border-app-border rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded border border-brand-gold/20 font-bold">
                    CHALLENGE
                  </span>
                  <h4 className="text-xs font-mono font-bold uppercase text-app-fg">
                    Critical Engineering Challenge
                  </h4>
                </div>
                <p className="text-xs text-app-muted leading-relaxed font-light">
                  {project.challenges}
                </p>
              </div>

              {/* Applied solution card */}
              <div className="bg-app-secondary/40 border border-app-border rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-brand-teal bg-brand-teal/10 px-2 py-0.5 rounded border border-brand-teal/20 font-bold">
                    SOLUTION
                  </span>
                  <h4 className="text-xs font-mono font-bold uppercase text-app-fg">
                    Applied Technical Solution
                  </h4>
                </div>
                <p className="text-xs text-app-muted leading-relaxed font-light">
                  {project.solutions}
                </p>
              </div>

              {/* Detailed project scope list */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-bold text-brand-gold uppercase tracking-widest border-b border-app-border pb-2">
                  Detailed Project Scope
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs text-app-fg font-light">
                      <span className="text-brand-teal mr-2.5 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Company news list feed */}
              <div className="space-y-4 pt-6 border-t border-app-border">
                <h3 className="text-xs font-mono font-bold text-brand-gold uppercase tracking-widest">
                  Recent Construction Updates
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recentNews.map((news, idx) => (
                    <div
                      key={idx}
                      className="bg-app-card border border-app-border p-3.5 rounded-lg flex justify-between items-center text-xs group hover:border-brand-teal/40 transition-colors"
                    >
                      <span className="font-semibold text-app-fg truncate group-hover:text-brand-teal transition-colors pr-2">
                        {news.title}
                      </span>
                      <span className="text-[9px] font-mono text-app-muted shrink-0 uppercase">
                        {news.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Discuss proposal call to action */}
              <div className="pt-8 border-t border-app-border/60 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <span className="block text-[8px] font-mono text-app-muted uppercase tracking-widest">
                    Ready to collaborate?
                  </span>
                  <span className="text-xs font-light text-app-muted">
                    Submit your project parameters and utility specifications.
                  </span>
                </div>
                
                <Link
                  href={`/contact?rfq=true&project=${project.slug}`}
                  className="inline-flex items-center justify-center px-8 py-4 rounded bg-brand-teal hover:bg-brand-teal-hover text-primary-dark font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-brand-teal/20 transition-all duration-300 w-full sm:w-auto"
                >
                  Discuss Your Project
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
