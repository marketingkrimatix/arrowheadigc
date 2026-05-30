import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { insightArticles } from '@/data/insights';
import JsonLd from '@/components/SEO/JsonLd';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);
  if (!article) {
    return {
      title: 'Article Not Found | ArrowHead',
      description: 'The requested engineering article could not be found.',
    };
  }

  return {
    title: `${article.title} | ArrowHead IGC`,
    description: article.metaDesc,
    keywords: article.keywords,
    alternates: {
      canonical: `https://arrowheadigc.com/insights/${slug}`
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://arrowheadigc.com/insights/${slug}`,
      siteName: 'ArrowHead General Contracting LLC',
      title: `${article.title} | ArrowHead IGC`,
      description: article.metaDesc,
      images: [
        {
          url: article.image,
          width: 800,
          height: 600,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | ArrowHead IGC`,
      description: article.metaDesc,
      images: [article.image],
    },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  // Generate FAQ page schema dynamically
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': article.faqs.map((f) => ({
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
      { '@type': 'ListItem', 'position': 2, 'name': 'Insights', 'item': 'https://arrowheadigc.com/insights' },
      { '@type': 'ListItem', 'position': 3, 'name': article.title, 'item': `https://arrowheadigc.com/insights/${slug}` }
    ]
  };

  const relatedArticles = insightArticles.filter((a) => a.slug !== slug);

  return (
    <div id={`insight-detail-${slug}`} className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[faqSchema, breadcrumbSchema]} />

      {/* 1. Article Header */}
      <section className="bg-app-bg py-16 border-b border-app-border relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Insights', href: '/insights' }, { name: article.title }]} />
          <div className="flex items-center gap-3 text-xs text-app-muted font-mono">
            <span className="text-brand-gold font-bold uppercase">{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-app-fg tracking-tight leading-tight mt-3">
            {article.title}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-app-muted font-light leading-relaxed">
            {article.summary}
          </p>
        </div>
      </section>

      {/* 2. Article Body & Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Article content */}
            <article className="lg:col-span-8 space-y-10">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-app-border bg-app-secondary mb-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {article.content.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-app-fg tracking-tight">
                    {sec.sectionTitle}
                  </h2>
                  <div className="text-app-muted space-y-4 text-xs sm:text-sm leading-relaxed font-light">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* FAQs Accordion Block */}
              <div className="border-t border-app-border/60 pt-10 space-y-6">
                <h3 className="text-lg font-heading font-extrabold text-app-fg uppercase tracking-wide">
                  Common Questions
                </h3>
                <div className="space-y-4">
                  {article.faqs.map((f, fIdx) => (
                    <div key={fIdx} className="bg-app-card border border-app-border p-6 rounded-xl shadow-md space-y-2">
                      <h4 className="font-bold text-white text-xs sm:text-sm">{f.q}</h4>
                      <p className="text-app-muted text-xs sm:text-sm leading-relaxed font-light bg-app-bg/10 rounded p-4 border border-app-border/40">
                        {f.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Proposal Call-to-action */}
              <div className="bg-app-card border border-app-border offset-border-frame shadow-sm rounded-xl p-6 sm:p-8 shadow-2xl space-y-4">
                <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-widest">
                  Need Technical Engineering Services?
                </h4>
                <p className="text-app-muted text-xs leading-relaxed font-light">
                  ArrowHead General Contracting LLC handles DVS 2207 pipe fusion, Estidama Pearl filings, and municipal approvals. Secure a detailed bid.
                </p>
                <Link
                  href={`/contact?rfq=true&ref=insight-${slug}`}
                  className="w-full text-center inline-flex items-center justify-center px-4 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-md transition-all duration-300"
                >
                  Request Technical Proposal
                </Link>
              </div>

              {/* Related Guides */}
              <div className="bg-app-card border border-app-border rounded-xl p-6 sm:p-8 shadow-xl space-y-4">
                <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-widest">
                  Related Engineering Guides
                </h4>
                <div className="space-y-4">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/insights/${rel.slug}`}
                      className="block p-3 bg-app-secondary/40 hover:bg-app-secondary/80 rounded border border-app-border transition-colors group"
                    >
                      <span className="block text-[8px] font-mono text-brand-gold uppercase font-bold">{rel.category}</span>
                      <span className="block text-xs font-bold text-white group-hover:text-brand-teal transition-colors mt-1 leading-tight">
                        {rel.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}
