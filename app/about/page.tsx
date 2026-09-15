import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';
import ClientLogoGrid from '@/components/ClientLogoGrid';

export const metadata: Metadata = {
  title: 'About Us | General Contracting & Engineering Abu Dhabi',
  description: 'Learn about ArrowHead International General Contracting LLC. Registered in Abu Dhabi, delivering elite pipelines, villa construction, and facilities maintenance.',
  keywords: ['ArrowHead General Contracting', 'about contracting Abu Dhabi', 'construction company Prestige Towers', 'Mussafah general contractor', 'utility approved company profile'],
  alternates: {
    canonical: 'https://arrowheadigc.com/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      title: 'Safety First (HSE)',
      desc: 'We enforce zero-compromise health, safety, and environmental protection guidelines across all industrial pipeline trenches and high-altitude villa builds.',
      icon: (
        <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Engineering Rigor',
      desc: 'Our team consists of qualified structural, civil, and MEP engineers who ensure execution precisely meets ISO, municipal, and utility details.',
      icon: (
        <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Local Agility',
      desc: 'Based in Mussafah, we navigate municipal permitting, NOC acquisitions, and government portal clearances (TAMM) with local knowledge.',
      icon: (
        <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Client-Centricity',
      desc: 'We support our clients through complete project lifecycles, maintaining regular communications, transparent pricing, and robust handovers.',
      icon: (
        <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];


  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'ArrowHead International General Contracting LLC',
    'image': '/images/Matrix_project1.jpeg',
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
    'url': 'https://arrowheadigc.com/about',
    'priceRange': '$$$$',
    'knowsAbout': ['Local permit TAMM NOC submittals', 'Municipal utility guidelines compliance', 'General Contracting licensing']
  };

  const locationLinks = [
    { name: 'Yas Island Infrastructure Operations', href: '/locations/yas-island' },
    { name: 'Saadiyat Island Custom Villa builds', href: '/locations/saadiyat-island' },
    { name: 'Khalifa City Villa extensions & Majlis', href: '/locations/khalifa-city' },
    { name: 'Mussafah Industrial & Commercial civils', href: '/locations/mussafah' },
    { name: 'Al Raha Beach High-End Contracting', href: '/locations/al-raha' },
  ];

  return (
    <div id="about-page-container" className="bg-app-bg text-app-fg min-h-screen transition-colors duration-200">
      <JsonLd schema={businessSchema} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-secondary py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Corporate Profile</span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg mt-4 tracking-tight leading-tight">
            A Legacy of Contracting <br />Excellence in Abu Dhabi
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl mx-auto font-light leading-relaxed">
            Registered and headquartered in the Capital of the UAE, ArrowHead International General Contracting LLC delivers state-of-the-art commercial civil, utility piping, and residential building projects.
          </p>
        </div>
      </section>

      {/* 2. CORPORATE OVERVIEW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Our Operations</span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold leading-snug">
                Engineering Infrastructure &amp; Preserving Investments
              </h3>
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  ArrowHead International General Contracting LLC (AHIGC) is licensed by the Abu Dhabi Department of Economic Development. Over the past decade, we have established our reputation as a trusted general contractor and facility management provider, executing projects out of our head office located in 5th Floor, Prestige Towers, Mussafah, Abu Dhabi. Our company is built on the core values of safety, quality, and local agility, allowing us to serve as a key partner for government agencies, private developers, and home owners across the UAE.
                </p>
                <p>
                  Our capabilities cover dual-discipline operations. On the <strong className="font-semibold text-app-fg">infrastructure and contracting front</strong>, we specialize in the engineering, supply, and installation of complex HDPE pipeline networks, MEP works, and luxury villa builds. On the <strong className="font-semibold text-app-fg">facility management side</strong>, we offer integrated hard and soft FM services to corporate, industrial, and luxury residential clients, protecting building life cycle value. We maintain our own fleet of heavy excavation, shoring, dewatering, and welding machinery, guaranteeing direct control over execution schedules and quality controls.
                </p>
                <p>
                  We believe that successful execution is rooted in strict compliance with UAE regulatory standards. Therefore, we manage all structural, mechanical, and safety designs to meet the precise regulations of local municipal and utility authorities. We maintain strict ISO 9001, 14001, and 45001 compliance standards, assuring that every trench dug, rebar tied, and AC chiller maintained satisfies international best practices.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
                >
                  Work with Us
                </Link>
              </div>
            </div>

            {/* Right Card / Credentials */}
            <div className="lg:col-span-5 bg-app-card border border-app-border rounded-xl p-8 shadow-lg offset-border-frame">
              <h3 className="text-base font-bold border-b border-app-border pb-4 uppercase tracking-wider font-heading">
                Corporate Credentials
              </h3>
              <ul className="mt-6 space-y-4 text-xs sm:text-sm">
                <li className="flex justify-between py-2 border-b border-app-border/60">
                  <span className="text-app-muted">Official Name</span>
                  <span className="font-semibold text-right">ArrowHead Intl. Gen. Contracting LLC</span>
                </li>
                <li className="flex justify-between py-2 border-b border-app-border/60">
                  <span className="text-app-muted">Commercial Status</span>
                  <span className="font-mono font-semibold text-brand-teal">Registered &amp; Active</span>
                </li>
                <li className="flex justify-between py-2 border-b border-app-border/60">
                  <span className="text-app-muted">Main Office</span>
                  <span className="font-semibold text-right">Prestige Towers, Mussaffah</span>
                </li>
                <li className="flex justify-between py-2 border-b border-app-border/60">
                  <span className="text-app-muted">Service Area</span>
                  <span className="font-semibold text-right">Abu Dhabi, Dubai, UAE Wide</span>
                </li>
                <li className="flex justify-between py-2">
                  <span className="text-app-muted">Compliance Accords</span>
                  <span className="font-semibold text-right">Abu Dhabi Municipality, Utility Authorities, Civil Defense</span>
                </li>
              </ul>
              <div className="mt-8 bg-app-secondary border border-app-border rounded-lg p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-teal font-mono">HSE Policy</p>
                <p className="text-[11px] sm:text-xs mt-2 text-app-muted leading-relaxed font-light">
                  &quot;AHIGC enforces strict ISO-aligned health, safety, and site controls, guaranteeing a zero-accident project record across all civil sites.&quot;
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 4. ACTIVE REGIONAL LINK MATRIX SILO */}
      <section className="py-16 bg-app-bg border-b border-app-border text-center">
        <h3 className="text-xs font-bold uppercase tracking-widest text-app-fg mb-6">
          Our Regional Operating Footprint
        </h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-4">
          {locationLinks.map((link, idx) => (
            <Link key={idx} href={link.href} className="px-5 py-2.5 bg-app-secondary border border-app-border hover:border-brand-teal text-xs font-bold text-brand-teal rounded transition-colors uppercase tracking-wider">
              {link.name}
            </Link>
          ))}
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Our Culture</span>
            <h2 className="mt-3 text-3xl font-heading font-extrabold tracking-tight">
              Built on Trust, Safety, and Quality
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {values.map((val, idx) => (
              <div key={idx} className="bg-app-card p-8 rounded-xl border border-app-border shadow-sm flex items-start space-x-4 offset-border-frame">
                <div className="w-10 h-10 bg-brand-teal/5 rounded-lg flex items-center justify-center shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold">{val.title}</h3>
                  <p className="mt-2 text-app-muted text-xs sm:text-sm leading-relaxed font-light">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MISSION & VISION SPLIT */}
      <section className="py-24 bg-app-secondary border-t border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Mission */}
            <div className="bg-app-card border border-app-border rounded-2xl p-10 relative overflow-hidden group shadow-sm offset-border-frame">
              <h3 className="text-xl font-heading font-extrabold text-brand-teal mb-4 uppercase tracking-widest">Our Mission</h3>
              <p className="text-app-muted leading-relaxed font-light text-xs sm:text-sm">
                To construct superior civil and pipeline infrastructure while providing flawless, long-term facilities maintenance across the UAE. We strive to merge state-of-the-art technology with skilled local craftsmen, ensuring every pipeline, MEP network, and custom luxury villa we build exceeds municipal specifications and client expectations.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-app-card border border-app-border rounded-2xl p-10 relative overflow-hidden group shadow-sm offset-border-frame">
              <h3 className="text-xl font-heading font-extrabold text-brand-teal mb-4 uppercase tracking-widest">Our Vision</h3>
              <p className="text-app-muted leading-relaxed font-light text-xs sm:text-sm">
                To stand as the leading integrated contracting and facility management firm in Abu Dhabi. We aim to support the capital&apos;s expansion through specialized engineering, eco-friendly villa builds that achieve high Estidama ratings, and responsive maintenance. We envision a future where our company is synonymous with construction safety, local capability, and engineering excellence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. OUR CLIENTS & PARTNERS */}
      <section className="py-24 border-t border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClientLogoGrid
            title="Our Clients &amp; Engineering Partners"
            subtitle="Collaborating with the UAE's premier main contractors, fit-out specialists, and municipal engineering consultancies."
          />
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-20 border-t border-app-border bg-app-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-app-fg">
            Ready to partner with a licensed Abu Dhabi General Contractor?
          </h2>
          <p className="mt-3 text-app-muted text-xs sm:text-sm font-light">
            Contact our engineering team at Prestige Towers, Mussafah to discuss your tenders, RFQs, or custom villa plans.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-md transition-all duration-300"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-app-card border border-app-border text-app-fg font-bold text-xs uppercase tracking-wider hover:bg-app-secondary transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
