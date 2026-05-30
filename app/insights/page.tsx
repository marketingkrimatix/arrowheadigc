import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { insightArticles } from '@/data/insights';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Engineering Insights & Abu Dhabi Municipal Building Guides | ArrowHead',
  description: 'Technical contracting resources for Abu Dhabi developers. Read guides on securing TAMM building permits, HDPE DVS 2207 welding, and Estidama Pearl ratings.',
  keywords: ['Abu Dhabi building guides', 'TAMM permit guide', 'HDPE butt-fusion standards', 'Estidama Pearl ratings', 'general contracting resources Abu Dhabi'],
  alternates: {
    canonical: 'https://arrowheadigc.com/insights'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/insights',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Engineering Insights & Abu Dhabi Municipal Building Guides | ArrowHead',
    description: 'Technical contracting resources for Abu Dhabi developers. Read guides on securing TAMM building permits, HDPE DVS 2207 welding, and Estidama Pearl ratings.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Engineering Insights and Building Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Insights & Abu Dhabi Municipal Building Guides | ArrowHead',
    description: 'Technical contracting resources for Abu Dhabi developers. Read guides on securing TAMM building permits, HDPE DVS 2207 welding, and Estidama Pearl ratings.',
    images: ['https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function InsightsPage() {
  const globalFaqs = [
    {
      q: 'What is DED License CN-4998977?',
      a: 'This is the official commercial license number issued to ArrowHead International General Contracting LLC by the Abu Dhabi Department of Economic Development, authorizing us to execute general civil contracting, pipeline networks, and building maintenance works.',
    },
    {
      q: 'Do you charge for initial site surveys or villa design estimates?',
      a: 'We provide complimentary initial site surveys and conceptual cost estimates for pipeline installations, custom villa constructions, and commercial renovations in Abu Dhabi. For complex structural extensions, minor fees may apply if detailed engineering calculations are requested prior to contract signing.',
    },
    {
      q: 'What materials do you recommend for high-pressure underground water lines?',
      a: 'For high-pressure water mains, we supply and weld PE100 High-Density Polyethylene (HDPE) pipelines with minimum PN16 pressure ratings. HDPE pipes offer superior flexibility, eliminate salinity corrosion from water tables, and boast a 50-year service life.',
    },
    {
      q: 'How does ArrowHead support the Estidama Pearl Rating system?',
      a: 'Our architectural team designs residential structures prioritizing shading structures, high-insulation wall blocks, double-glazed windows, and low-flow water mixers. This ensures all custom builds easily secure the mandatory 1-Pearl Estidama rating, and up to 3-Pearl ratings on premium custom estates.',
    },
  ];

  // Dynamic FAQ structured schema for the insights index page
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': globalFaqs.map((f) => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.a,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Insights', 'item': 'https://arrowheadigc.com/insights' }
    ]
  };

  return (
    <div id="insights-resources-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[faqSchema, breadcrumbSchema]} />

      {/* 1. HERO HEADER */}
      <section className="bg-app-bg py-16 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Insights' }]} />
          <h1 className="text-4xl font-heading font-extrabold text-app-fg mt-3 tracking-tight">
            Insights, Guides &amp; Regulatory Codes
          </h1>
          <p className="mt-4 text-sm text-app-muted max-w-2xl mx-auto font-light leading-relaxed">
            Stay informed about Abu Dhabi construction permits, pipeline welding specifications, and preventative building maintenance checklists.
          </p>
        </div>
      </section>

      {/* 2. ARTICLES INDEX CARDS */}
      <section className="py-20 bg-app-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Technical Guides</span>
            <h2 className="mt-3 text-3xl font-heading font-extrabold text-app-fg tracking-tight">
              Professional Construction &amp; Engineering Portals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-app-card border border-app-border offset-border-frame shadow-sm rounded-xl overflow-hidden flex flex-col justify-between shadow-2xl group"
              >
                <div>
                  <div className="h-48 bg-gray-900 relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <span className="absolute top-4 left-4 bg-app-card/90 border border-app-border px-2.5 py-1 rounded text-[8px] font-mono font-bold uppercase tracking-widest text-brand-teal">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[10px] text-app-muted font-mono mb-2">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-white leading-tight uppercase group-hover:text-brand-teal transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-app-muted text-xs font-light mt-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-app-border/40 mt-4 pt-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-slate-500 font-mono">GUIDE #{article.slug.slice(-2).toUpperCase()}</span>
                  <Link 
                    href={`/insights/${article.slug}`} 
                    className="text-brand-teal hover:text-brand-teal-hover transition-colors cursor-pointer"
                  >
                    Read Technical Guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GLOBAL FAQ SECTION - NATIVE HTML5 ACCORDIONS */}
      <section className="py-20 bg-app-secondary border-t border-app-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">FAQ Centre</span>
            <h2 className="text-3xl font-heading font-extrabold text-app-fg tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {globalFaqs.map((faq, idx) => (
              <details 
                key={idx} 
                className="group bg-app-secondary border border-app-border rounded-lg overflow-hidden focus:outline-none"
              >
                <summary className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-white hover:text-brand-teal cursor-pointer select-none">
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  {/* Native SVG rotating Chevron using group-open state */}
                  <svg
                    className="w-4 h-4 text-app-muted/60 transition-transform duration-300 shrink-0 group-open:rotate-180 group-open:text-brand-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-6 text-app-muted text-xs sm:text-sm leading-relaxed font-light bg-app-bg border-t border-app-border">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-app-bg text-center border-t border-app-border">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
          Do You Need Specialized Technical Advice?
        </h2>
        <p className="mt-3 text-app-muted text-xs sm:text-sm max-w-xl mx-auto font-light">
          Connect with our estimation engineers in Mussafah to discuss structural codes, utility line connections, or building maintenance scopes.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
          >
            Connect with an Engineer
          </Link>
        </div>
      </section>
    </div>
  );
}
