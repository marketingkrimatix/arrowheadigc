import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import ClientLogoGrid from '@/components/ClientLogoGrid';

export const metadata: Metadata = {
  title: 'Our Clients & Engineering Partners | ArrowHead General Contracting',
  description: 'Explore the tier-1 main contractors, interior fit-out leaders, and architectural engineering consultancies partnering with ArrowHead in Abu Dhabi, including ALEC, Bond Interiors, BW Interiors, Matrix Engineering, and Manisa Studio.',
  keywords: [
    'ArrowHead clients',
    'ALEC engineering contracting Abu Dhabi',
    'Bond Interiors fit out UAE',
    'BW Interiors commercial contracting',
    'Matrix engineering consultants Abu Dhabi',
    'Manisa studio engineering consultancy',
    'Al Masakn engineering consultants',
  ],
  alternates: {
    canonical: 'https://arrowheadigc.com/clients',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/clients',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Our Clients & Engineering Partners | ArrowHead General Contracting',
    description: 'Explore the tier-1 main contractors, interior fit-out leaders, and architectural engineering consultancies partnering with ArrowHead in Abu Dhabi.',
    images: [
      {
        url: '/images/Matrix_project1.jpeg',
        width: 800,
        height: 600,
        alt: 'ArrowHead Clients and Engineering Partners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Clients & Engineering Partners | ArrowHead General Contracting',
    description: 'Explore the tier-1 main contractors, interior fit-out leaders, and architectural engineering consultancies partnering with ArrowHead in Abu Dhabi.',
    images: ['/images/Matrix_project1.jpeg'],
  },
};

export default function ClientsPage() {
  const stats = [
    { value: '15+', label: 'Years UAE Operations' },
    { value: '120+', label: 'Delivered Projects' },
    { value: '100%', label: 'Authority NOC Approvals' },
    { value: '0', label: 'LTI Safety Record' },
  ];

  const clientSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'ArrowHead Clients and Partners',
    'description': 'Trusted partners, main contractors, and engineering consultancies collaborating with ArrowHead International General Contracting LLC.',
    'url': 'https://arrowheadigc.com/clients',
  };

  return (
    <div className="bg-app-bg text-app-fg min-h-screen transition-colors duration-200">
      <JsonLd schema={clientSchema} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-secondary py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Our Clients & Partners' },
            ]}
          />
          <div className="mt-6 text-center max-w-3xl mx-auto">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">
              Collaborations &amp; Trust
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg mt-4 tracking-tight leading-tight">
              Our Esteemed Clients &amp; Partners
            </h1>
            <p className="mt-6 text-sm sm:text-base text-app-muted font-light leading-relaxed">
              We take pride in our ongoing partnerships with the UAE's foremost main contractors, interior fit-out specialists, and municipal engineering consultancies. Together, we deliver structural excellence, precision commercial interiors, and certified utility infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-12 bg-app-card border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-gold">
                  {stat.value}
                </span>
                <p className="text-xs sm:text-sm text-app-muted font-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLIENT LOGO GRID & DETAILS */}
      <section className="py-20 border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClientLogoGrid
            title="Industry Leaders &amp; Engineering Consultancies"
            subtitle="Explore our working relationships with leading tier-1 builders, interior fit-out firms, and architectural studios across the UAE."
          />
        </div>
      </section>

      {/* 4. PARTNERSHIP PILLARS */}
      <section className="py-20 bg-app-secondary border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">
              Why Leaders Choose Us
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-app-fg mt-2">
              The ArrowHead Partnership Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-app-card p-8 rounded-xl border border-app-border shadow-md space-y-4">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal font-bold font-mono">
                01
              </div>
              <h3 className="text-lg font-heading font-bold text-app-fg">
                Full Municipal &amp; TAMM Compliance
              </h3>
              <p className="text-app-muted text-xs sm:text-sm font-light leading-relaxed">
                We manage all engineering drawings, structural calculations, and NOC submissions directly through TAMM, Abu Dhabi Municipality, and Civil Defense.
              </p>
            </div>

            <div className="bg-app-card p-8 rounded-xl border border-app-border shadow-md space-y-4">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal font-bold font-mono">
                02
              </div>
              <h3 className="text-lg font-heading font-bold text-app-fg">
                Own Plant &amp; Heavy Machinery Fleet
              </h3>
              <p className="text-app-muted text-xs sm:text-sm font-light leading-relaxed">
                Direct ownership of hydraulic butt-fusion welding rigs, dewatering pumps, laser screed machines, and excavation plant guarantees on-time delivery without third-party bottlenecks.
              </p>
            </div>

            <div className="bg-app-card p-8 rounded-xl border border-app-border shadow-md space-y-4">
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal font-bold font-mono">
                03
              </div>
              <h3 className="text-lg font-heading font-bold text-app-fg">
                Proven Subcontracting Track Record
              </h3>
              <p className="text-app-muted text-xs sm:text-sm font-light leading-relaxed">
                Seamless integration with main contractor site protocols, HSE induction standards, QA/QC testing logs, and fast-track commercial milestone handovers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Partner with ArrowHead for Your Next Project
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you are a main contractor seeking specialized civil/MEP support, an interior designer requiring turnkey joinery fit-out, or a consultant reviewing tender bids, our engineering directors are ready to collaborate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-xl transition-all duration-300"
            >
              Initiate Partnership Discussion
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 rounded bg-white/10 text-white border border-white/20 font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all duration-300"
            >
              View Project Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
