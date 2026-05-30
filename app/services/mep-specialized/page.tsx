import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import MepFlowShowcase from '@/components/MepFlowShowcase';

export const metadata: Metadata = {
  title: 'MEP & Specialized Works Contractors Abu Dhabi | ArrowHead',
  description: 'Professional Mechanical, Electrical, Plumbing, and Firefighting engineering in Abu Dhabi. We install high-efficiency HVAC ducting, switchboards, booster pumps, and Civil Defense firefighting systems.',
  keywords: ['MEP contractors Abu Dhabi', 'mechanical engineering Abu Dhabi', 'electrical contracting Abu Dhabi', 'Civil Defense approved MEP', 'HVAC ducting Abu Dhabi'],
  alternates: {
    canonical: 'https://arrowheadigc.com/services/mep-specialized',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/services/mep-specialized',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'MEP & Specialized Works Contractors Abu Dhabi | ArrowHead',
    description: 'Professional Mechanical, Electrical, Plumbing, and Firefighting engineering in Abu Dhabi. We install high-efficiency HVAC ducting, switchboards, booster pumps, and Civil Defense firefighting systems.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
        width: 800,
        height: 600,
        alt: 'MEP and Specialized Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEP & Specialized Works Contractors Abu Dhabi | ArrowHead',
    description: 'Professional Mechanical, Electrical, Plumbing, and Firefighting engineering in Abu Dhabi. We install high-efficiency HVAC ducting, switchboards, booster pumps, and Civil Defense firefighting systems.',
    images: ['https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'],
  },
};

export default function MepSpecializedPage() {
  const subServices = [
    {
      title: 'Mechanical & HVAC Ductwork',
      desc: 'Sizing and routing of supply and return air ducts, manufacturing double-skin GI ducts, installing VAV (Variable Air Volume) boxes, sound attenuators, and balancing airflow to maintain thermal comfort.',
    },
    {
      title: 'Electrical Distribution & Panels',
      desc: 'Designing and dressing Distribution Boards (DB), main switchboards (MSB), and sub-main boards. We conduct thermal imaging scans to spot loose wire connections, test insulation resistance, and execute load balancing.',
    },
    {
      title: 'Plumbing & Drainage Networks',
      desc: 'Installation of high-grade copper and PPR pipes for water distribution, sound-proof drainage stacks, sump pump controls, booster pump installations, and structural water storage tank assemblies.',
    },
    {
      title: 'Firefighting & Suppression Systems',
      desc: 'Complete fire protection scopes: wet and dry fire sprinkler systems, fire hose cabinets, fire hydrant connections, fire pump room integrations, and FM200 clean agent gas suppression for server rooms.',
    },
  ];

  const standards = [
    { title: 'Electrical Codes', value: 'ADDC Regulations for Electrical Installations' },
    { title: 'AC Standards', value: 'ASHRAE Compliant Ducting & Ventilation Scopes' },
    { title: 'Fire Safety Compliance', value: 'Abu Dhabi Civil Defense (ADCD) Approved Details' },
    { title: 'Plumbing Codes', value: 'IPC / ADDC Water Supply Guidelines' },
    { title: 'Energy Auditing', value: 'Estidama Rating Support, Power Factor Correction' },
  ];

  const faqs = [
    {
      q: 'Do you design and install MEP systems for commercial office fit-outs?',
      a: 'Yes. We cooperate with office designers and project managers, providing complete fit-out MEP services. We modify existing sprinkler lines, relocate AC diffusers, install secondary electrical DBs, size power cables for servers, and secure the necessary Civil Defense and building approvals.',
    },
    {
      q: 'What is thermal imaging, and how does it prevent electrical failures?',
      a: 'Thermal imaging uses infrared cameras to capture heat profiles of electrical panels. High heat signatures indicate loose joints, overloaded breakers, or corroded wire terminations. By performing regular scans, we identify and repair hot spots before they cause electrical short circuits or fire hazards.',
    },
    {
      q: 'Do you install energy-efficient retrofits for older chiller plants?',
      a: 'Yes. We specialize in retrofitting older MEP plants: installing Variable Frequency Drives (VFD) on condenser pumps, replacing inefficient compressors, installing smart building energy management systems (BMS), and correcting Power Factors to reduce utility bills.',
    },
  ];

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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'MEP & Specialized Works',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'ArrowHead General Contracting LLC',
      'telephone': '+971-2-XXXXXXX',
      'priceRange': '$$$$',
      'image': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Abu Dhabi',
        'addressCountry': 'AE'
      }
    },
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Al Raha' },
      { '@type': 'AdministrativeArea', 'name': 'Saadiyat Island' },
      { '@type': 'AdministrativeArea', 'name': 'Yas Island' },
      { '@type': 'AdministrativeArea', 'name': 'Mussafah' },
      { '@type': 'AdministrativeArea', 'name': 'Khalifa City' }
    ],
    'description': 'Professional Mechanical, Electrical, Plumbing, and Firefighting engineering services in Abu Dhabi. We install energy-efficient HVAC, switchboards, water pumps, and ADCD approved sprinkler lines.'
  };

  const locationLinks = [
    { name: 'Al Raha Beach (Luxury Turnkey MEP)', href: '/locations/al-raha' },
    { name: 'Saadiyat Island (Executive Villa MEP)', href: '/locations/saadiyat-island' },
    { name: 'Yas Island (Heavy Utility Connections)', href: '/locations/yas-island' },
    { name: 'Mussafah (Industrial Electrical & HVAC)', href: '/locations/mussafah' },
    { name: 'Khalifa City (Home Utility & Extensions)', href: '/locations/khalifa-city' },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://arrowheadigc.com/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'MEP & Specialized Works', 'item': 'https://arrowheadigc.com/services/mep-specialized' }
    ]
  };

  return (
    <div id="mep-specialized-service-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[faqSchema, serviceSchema, breadcrumbSchema]} />

      {/* 1. HERO SECTION */}
      <section className="bg-app-bg py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: 'MEP Works' }]} />
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg tracking-tight leading-tight">
            MEP &amp; Specialized Works <br />Contractors Abu Dhabi
          </h1>
          <p className="mt-6 text-sm sm:text-base text-app-muted max-w-3xl font-light leading-relaxed">
            Professional Mechanical, Electrical, Plumbing, and Firefighting engineering. We install high-efficiency HVAC ducting, switchboards, booster pumps, sprinkler systems, and chilled water lines complying with ADDC and Civil Defense codes.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?rfq=true"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
            >
              Request an MEP Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION OVERVIEW */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">MEP Engineering</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg tracking-tight">
                Specialized Building Services Execution
              </h2>
              <div className="text-app-muted space-y-5 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  Mechanical, Electrical, and Plumbing (MEP) systems are the core operational systems of any modern building, determining its energy efficiency, indoor air quality, fire safety, and tenant comfort. Designing and installing these specialized systems requires rigorous engineering calculations, detailed coordinate drawings, and strict adherence to utility company guidelines. ArrowHead delivers specialized MEP engineering and installation services for commercial fit-outs, industrial plants, and luxury residential estates.
                </p>
                <p>
                  Our electrical engineering division manages power distribution systems from main Distribution Boards (DB) down to individual circuits. We perform electrical load calculations, design balanced single-line diagrams, dress DB panels to ADDC standards, install cable trays, and pull armored sub-main cables. We execute grounding, insulation resistance testing, and earth leakage tests to guarantee electrical safety and pass ADDC utility inspections.
                </p>
                <p>
                  Our mechanical and HVAC division designs and fabricates double-skin galvanized iron (GI) ductwork, balances air distribution networks, and installs chilled water piping loops. We size and install variable refrigerant flow (VRF) units, fan coil units (FCU), and air handling units (AHU). Our plumbing team installs high-pressure booster pump sets, gravity drainage pipelines, and coordinates with our fire division to layout Civil Defense (ADCD) approved wet sprinkler lines, smoke detection networks, and clean gas FM200 suppression systems.
                </p>
  </div>
            </div>

                 {/* Right Details Table */}
            {/* <div className="lg:col-span-5 bg-app-card border border-app-border offset-border-frame shadow-sm border border-app-border rounded-xl p-8 shadow-2xl">
              <h3 className="text-base font-bold text-white border-b border-app-border pb-4 uppercase tracking-wider font-heading">
                MEP Code Standards
              </h3>
              <ul className="mt-6 space-y-4 text-xs sm:text-sm">
                {standards.map((std, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row justify-between py-2 border-b border-app-border last:border-b-0">
                    <span className="text-app-muted font-medium">{std.title}</span>
                    <span className="font-semibold text-brand-gold mt-1 sm:mt-0 text-left sm:text-right">{std.value}</span>
                  </li>
                ))}
              </ul> */}

            {/* Right Details: Interactive MEP Cooling Loop Simulator */}
            <div className="lg:col-span-5 w-full">
              <MepFlowShowcase />
            </div>

          </div>
        </div>
      </section>

      {/* 3. SUB-SERVICES GRID */}
      <section className="py-20 bg-app-secondary border-y border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Scope of Works</span>
            <h2 className="mt-3 text-3xl font-heading font-extrabold text-app-fg tracking-tight">
              Core MEP Design &amp; Installation Scopes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((sub, idx) => (
              <div key={idx} className="bg-app-card border border-app-border offset-border-frame shadow-sm p-8 rounded-xl border border-app-border shadow-2xl space-y-3">
                <span className="text-brand-teal font-mono font-bold text-xs block">0{idx + 1}. Specialty</span>
                <h3 className="text-base sm:text-lg font-bold text-white">{sub.title}</h3>
                <p className="text-app-muted text-xs sm:text-sm leading-relaxed font-light">{sub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPLIANCE BANNER */}
      <section className="bg-app-secondary text-white py-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            ADDC &amp; Civil Defense Approved Details
          </h2>
          <p className="text-xs sm:text-sm text-app-muted max-w-3xl mx-auto leading-relaxed font-light">
            We source our switchboards, sprinklers, dampers, and piping materials from approved local lists. All cable layouts, cable gland jointings, sprinkler system hydraulic models, and pump room dimensions strictly comply with the electrical, plumbing, and firefighting codes of the Abu Dhabi Distribution Company and Civil Defense.
          </p>
          <div className="flex justify-center space-x-6 text-[10px] sm:text-xs text-brand-teal font-bold uppercase tracking-wider">
            <span>✓ ADDC Load Clearances</span>
            <span>✓ Civil Defense Approvals</span>
            <span>✓ Calibrated DB Scanners</span>
            <span>✓ ASHRAE Air Balancing</span>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-app-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Inquiry Support</span>
            <h2 className="mt-3 text-3xl font-heading font-extrabold text-app-fg tracking-tight">
              MEP Engineering FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-app-secondary border border-app-border rounded-lg overflow-hidden">
                <summary className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-white hover:text-brand-teal focus:outline-none transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <svg
                    className="w-4 h-4 text-app-muted/60 transition-transform duration-300 shrink-0 group-open:rotate-180 group-open:text-brand-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="border-t border-app-border">
                  <p className="p-6 text-app-muted text-xs sm:text-sm leading-relaxed font-light bg-app-bg">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REGIONAL SILO & KNOWLEDGE MATRIX */}
      <section className="py-16 bg-app-secondary border-t border-app-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                Active Regional MEP Operations
              </h3>
              <p className="text-xs text-app-muted mb-6 font-light">
                ArrowHead delivers specialized MEP fit-outs and utility engineering across major districts:
              </p>
              <div className="flex flex-col space-y-2">
                {locationLinks.map((link, idx) => (
                  <Link key={idx} href={link.href} className="text-xs font-semibold text-brand-teal hover:underline flex items-center">
                    <span className="mr-2">📍</span> {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                Technical Knowledge Base
              </h3>
              <p className="text-xs text-app-muted mb-6 font-light">
                Consult our engineering guidelines for sustainable energy usage and municipal authorizations:
              </p>
              <div className="flex flex-col space-y-4">
                <Link href="/insights/understanding-estidama-pearl-ratings" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">Estidama Pearl Ratings Guide</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Learn about sustainable building insulation, HVAC efficiency, and Pearl ratings.</span>
                </Link>
                <Link href="/insights/guide-to-tamm-villa-approvals" className="p-4 bg-app-card rounded border border-app-border hover:border-brand-teal transition-colors">
                  <span className="text-xs font-bold text-white block">Abu Dhabi TAMM Building Permit Guide</span>
                  <span className="text-[10px] text-app-muted font-light mt-1 block">Learn about mechanical layout compliance and municipal approvals.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-16 bg-app-secondary border-t border-app-border text-center">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
          Discuss Your MEP Project Requirements
        </h2>
        <p className="mt-3 text-app-muted text-xs sm:text-sm max-w-xl mx-auto font-light">
          Request an energy evaluation or request an estimation for your commercial fit-out.
        </p>
        <div className="mt-8">
          <Link
            href="/contact?rfq=true"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
          >
            Request a Technical MEP Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
