import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import CinematicSpecGrid from '@/components/showcases/CinematicSpecGrid';
import SpotlightRevealGrid from '@/components/showcases/SpotlightRevealGrid';
import ProjectControlCenter from '@/components/showcases/ProjectControlCenter';

export const metadata: Metadata = {
  title: 'Commercial Office Interiors & Fit-Out Contractors Abu Dhabi | ArrowHead',
  description: 'Turnkey commercial office fit-out, retail boutique interiors, and corporate workspace renovations in Abu Dhabi. Complete architectural joinery, acoustic partitions, MEP distribution, and Civil Defense approvals.',
  keywords: [
    'office fit out Abu Dhabi',
    'commercial interior contractors Abu Dhabi',
    'retail shop fit out UAE',
    'corporate office interiors Abu Dhabi',
    'commercial joinery Abu Dhabi',
    'Civil Defense fit out approvals TAMM',
  ],
  alternates: {
    canonical: 'https://arrowheadigc.com/services/office-interiors',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/services/office-interiors',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Commercial Office Interiors & Fit-Out Contractors Abu Dhabi | ArrowHead',
    description: 'Turnkey commercial office fit-out, retail boutique interiors, and corporate workspace renovations in Abu Dhabi.',
    images: [
      {
        url: '/images/store.jpeg',
        width: 800,
        height: 600,
        alt: 'Commercial Office Interiors & Fit-Out',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Office Interiors & Fit-Out Contractors Abu Dhabi | ArrowHead',
    description: 'Turnkey commercial office fit-out, retail boutique interiors, and corporate workspace renovations in Abu Dhabi.',
    images: ['/images/store.jpeg'],
  },
};

export default function OfficeInteriorsPage() {
  const subServices = [
    {
      title: 'Corporate Office Spaces & Workstations',
      desc: 'Complete turnkey architectural fit-outs for executive headquarters, open-plan workspaces, meeting rooms, and conference facilities. We deliver ergonomic layouts, acoustic drywall partition walls, glass partitions, and specialized ceiling systems.',
    },
    {
      title: 'Retail Store & Commercial Boutique Fit-Outs',
      desc: 'Bespoke fit-out solutions for shopping mall boutiques, flagship retail outlets (such as Jack Wills), and hospitality venues. We execute fast-track night works, custom merchandising fixtures, cash counters, and mall management compliance.',
    },
    {
      title: 'Architectural Joinery & Custom Woodwork',
      desc: 'In-house precision carpentry and joinery fabrication. We design and install bespoke reception desks, executive wall paneling, acoustic baffle ceilings, kitchenettes, pantry cabinets, and custom luxury storage cabinetry.',
    },
    {
      title: 'MEP Systems & Civil Defense Integration',
      desc: 'Seamless reconfiguration of electrical secondary distribution, data cabling, HVAC ducting, secondary linear diffusers, and Civil Defense fire sprinkler networks to match new architectural partition layouts with full TAMM and Civil Defense certificates.',
    },
  ];

  const standards = [
    { title: 'Project Scope', value: 'Turnkey Design-Build, Cat A & Cat B Fit-Out' },
    { title: 'Authority Clearances', value: 'Abu Dhabi Municipality (TAMM) & Civil Defense' },
    { title: 'Building Approvals', value: 'Building Management (BMS) & Mall Technical Compliance' },
    { title: 'Acoustic Ratings', value: 'STC 45 to STC 55 Soundproof Partitions' },
    { title: 'Spaces Transformed', value: 'Corporate Offices, Retail Stores, Showrooms, Clinics' },
  ];

  const faqs = [
    {
      q: 'What is the difference between Cat A and Cat B commercial fit-outs?',
      a: 'A Category A (Cat A) fit-out delivers the basic operational shell: mechanical/electrical services, raised access floors, suspended ceilings, and core lighting. A Category B (Cat B) fit-out transforms that shell into a fully functioning, branded workplace with internal partitions, meeting rooms, executive offices, custom joinery, IT cabling, kitchenettes, and furniture.',
    },
    {
      q: 'Do you manage building management approvals and Civil Defense NOCs?',
      a: 'Yes. ArrowHead manages all authority coordination end-to-end. We submit MEP schematics and architectural layout drawings to the building management (e.g. Aldar, Capital Tower, ADGM) and obtain fire protection approvals and completion certificates from Abu Dhabi Civil Defense via the TAMM portal.',
    },
    {
      q: 'Can you execute out-of-hours or night work for active retail shopping malls?',
      a: 'Yes. For shopping malls and operational office towers with daytime noise restrictions, our crews execute fast-track night shifts with dedicated site supervision, dust containment partitions, and zero disruption to neighboring tenants.',
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Commercial Office Interiors & Retail Fit-Out',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'ArrowHead International General Contracting LLC',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '5th Floor, Prestige Towers, Mussaffah',
        'addressLocality': 'Abu Dhabi',
        'addressRegion': 'Abu Dhabi',
        'addressCountry': 'AE'
      },
      'telephone': '+97125545230',
      'url': 'https://arrowheadigc.com'
    },
    'description': 'Comprehensive corporate office fit-out, retail shop interiors, bespoke joinery, acoustic partitions, and Civil Defense approvals in Abu Dhabi.',
    'areaServed': 'Abu Dhabi, UAE',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Office Interiors Services',
      'itemListElement': subServices.map((s, idx) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': s.title,
          'description': s.desc
        }
      }))
    }
  };

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

  const projectReferences = [
    {
      name: 'Jack Wills Retail Store Fit-Out',
      location: 'Abu Dhabi Mall',
      desc: 'Complete boutique interior fit-out featuring bespoke hardwood joinery, decorative lighting, and Civil Defense fire system certifications.',
      image: '/images/jack-wills.jpeg',
      link: '/projects/jack-wills-fitout'
    },
    {
      name: 'Corporate Office Fit-Out & MEP',
      location: 'Capital Tower, Abu Dhabi',
      desc: 'Multi-floor executive headquarters fit-out with glass acoustic partitions, executive boardrooms, and chilled water balancing.',
      image: '/images/wills-store.jpeg',
      link: '/projects'
    },
    {
      name: 'Matrix Commercial Facility Interior',
      location: 'Mussafah / ICAD',
      desc: 'Turnkey administrative and technical office interior fit-out executed with Matrix Engineering Consultants.',
      image: '/images/Matrix_project.jpeg',
      link: '/projects/matrix-commercial-civils'
    }
  ];

  return (
    <div className="bg-app-bg text-app-fg min-h-screen transition-colors duration-200">
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={faqSchema} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-secondary py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Services', href: '/services' },
              { name: 'Office Interiors & Fit-Out' },
            ]}
          />
          <div className="mt-6 text-center max-w-3xl mx-auto">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">
              Commercial Interiors &amp; Fit-Out
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg mt-4 tracking-tight leading-tight">
              Turnkey Office Interiors &amp; Commercial Fit-Out
            </h1>
            <p className="mt-6 text-sm sm:text-base text-app-muted font-light leading-relaxed">
              Transforming corporate headquarters, commercial retail spaces, and executive office suites in Abu Dhabi. From spatial design and custom architectural joinery to MEP re-engineering and Civil Defense NOC sign-offs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
              >
                Request Fit-Out Consultation
              </Link>
              <Link
                href="/clients"
                className="px-6 py-3 rounded bg-app-card border border-app-border text-app-fg font-bold text-xs uppercase tracking-wider hover:border-brand-teal transition-all duration-300"
              >
                View Fit-Out Partners
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES */}
      <section className="py-20 border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">
              Full-Scope Capabilities
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-app-fg mt-2">
              Comprehensive Interior Contracting
            </h2>
            <p className="text-app-muted text-sm font-light mt-4">
              We provide end-to-end commercial interior execution, aligning client branding with technical excellence and local building regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((sub, idx) => (
              <div
                key={idx}
                className="bg-app-card p-8 rounded-xl border border-app-border hover:border-brand-teal/40 transition-all duration-300 shadow-md hover:shadow-xl group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal font-bold font-mono text-sm mb-5 group-hover:bg-brand-teal group-hover:text-primary-dark transition-colors duration-300">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-heading font-bold text-app-fg mb-3 group-hover:text-brand-teal transition-colors duration-300">
                  {sub.title}
                </h3>
                <p className="text-app-muted text-xs sm:text-sm font-light leading-relaxed">
                  {sub.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS & STANDARDS */}
      <section className="py-20 bg-app-secondary border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">
                Engineering &amp; Compliance
              </span>
              <h2 className="text-3xl font-heading font-extrabold text-app-fg">
                Precision Fit-Outs Built to UAE Building Codes
              </h2>
              <div className="text-app-muted space-y-4 text-xs sm:text-sm font-light leading-relaxed">
                <p>
                  Every commercial fit-out demands strict adherence to landlord building guidelines, acoustic isolation standards, and municipal safety regulations. ArrowHead coordinates all submittals with facility managers, shopping mall operations, and municipal authorities.
                </p>
                <p>
                  We collaborate with premier fit-out contractors and engineering consultancies including <strong className="text-app-fg font-semibold">Bond Interiors, BW Interiors, ALEC Engineering, and Matrix Engineering</strong> to deliver world-class interior finishes on time and within budget.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold uppercase tracking-wider hover:underline"
                >
                  Schedule a Site Survey <span>&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-app-card rounded-xl border border-app-border p-6 shadow-xl space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold font-mono pb-2 border-b border-app-border">
                  Fit-Out Parameters &amp; Specifications
                </h4>
                <div className="divide-y divide-app-border/60">
                  {standards.map((std, idx) => (
                    <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <span className="text-xs font-medium text-app-muted">{std.title}</span>
                      <span className="text-xs font-bold text-app-fg">{std.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED INTERIOR PROJECTS */}
      <section className="py-20 border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">
                Project Track Record
              </span>
              <h2 className="text-3xl font-heading font-extrabold text-app-fg mt-2">
                Featured Commercial Fit-Outs
              </h2>
            </div>
            <Link
              href="/projects"
              className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-brand-teal hover:underline inline-flex items-center gap-1"
            >
              Explore All Projects <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectReferences.map((p, idx) => (
              <div
                key={idx}
                className="bg-app-card rounded-xl overflow-hidden border border-app-border hover:border-brand-teal/40 transition-all duration-300 shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 overflow-hidden relative bg-app-secondary">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-primary-dark/80 backdrop-blur-xs text-brand-teal text-[10px] font-mono px-2.5 py-1 rounded">
                      {p.location}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-heading font-bold text-app-fg group-hover:text-brand-teal transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-app-muted text-xs font-light mt-2.5 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={p.link}
                    className="text-xs font-bold text-brand-teal hover:underline inline-flex items-center gap-1"
                  >
                    View Project Case Study <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQS */}
      <section className="py-20 border-b border-app-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">
              Got Questions?
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-app-fg mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-app-card p-6 rounded-xl border border-app-border shadow-sm space-y-2"
              >
                <h3 className="text-sm sm:text-base font-heading font-bold text-app-fg">
                  {faq.q}
                </h3>
                <p className="text-app-muted text-xs sm:text-sm font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Planning an Office or Retail Fit-Out in Abu Dhabi?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Get in touch with our commercial interior engineers today for comprehensive feasibility estimates, spatial layouts, and municipal authority submittals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-xl transition-all duration-300"
            >
              Book an Onsite Fit-Out Survey
            </Link>
            <a
              href="tel:+97125545230"
              className="px-8 py-4 rounded bg-white/10 text-white border border-white/20 font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all duration-300"
            >
              Call +971 2 554 5230
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
