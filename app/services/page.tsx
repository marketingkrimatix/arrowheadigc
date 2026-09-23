import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';

import Breadcrumbs from '@/components/SEO/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Services & Industry Sectors | ArrowHead Abu Dhabi',
  description: 'Explore the full engineering, general contracting, and industry sector capabilities of ArrowHead LLC in Abu Dhabi: HDPE pipe welding, villa building, renovations, MEP, facilities management, and specialized commercial solutions.',
  keywords: ['contracting services Abu Dhabi', 'pipeline installation services', 'villa building services', 'facility AMC services', 'MEP engineering works', 'industry sectors Abu Dhabi'],
  alternates: {
    canonical: 'https://arrowheadigc.com/services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arrowheadigc.com/services',
    siteName: 'ArrowHead General Contracting LLC',
    title: 'Services & Industry Sectors | ArrowHead Abu Dhabi',
    description: 'Explore the full engineering, general contracting, and industry sector capabilities of ArrowHead LLC in Abu Dhabi: HDPE pipe welding, villa building, renovations, MEP, facilities management, and specialized commercial solutions.',
    images: [
      {
        url: '/images/Matrix_project1.jpeg',
        width: 800,
        height: 600,
        alt: 'ArrowHead Contracting Services and Sectors Abu Dhabi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services & Industry Sectors | ArrowHead Abu Dhabi',
    description: 'Explore the full engineering, general contracting, and industry sector capabilities of ArrowHead LLC in Abu Dhabi: HDPE pipe welding, villa building, renovations, MEP, facilities management, and specialized commercial solutions.',
    images: ['/images/Matrix_project1.jpeg'],
  },
};

export default function ServicesPage() {
  const serviceList = [
    {
      id: 'office-interiors',
      title: 'Commercial Office Interiors & Fit-Out',
      category: 'Interiors & Commercial',
      desc: 'Turnkey commercial office fit-out, retail flagship boutiques (Jack Wills, RAK Ceramics, Ghuzlan), and corporate workspace renovations in Abu Dhabi. Complete architectural joinery, acoustic partitions, MEP distribution, and Civil Defense approvals.',
      features: ['Turnkey Office & Boutique Fit-Out', 'Custom Architectural Joinery & Wall Panels', 'MEP Power, Lighting & HVAC Air Balancing', 'Civil Defense Clearances & Municipal NOCs'],
      href: '/services/office-interiors',
      image: '/images/store2.jpeg',
      standard: 'Abu Dhabi Civil Defense & Mall Management Fit-Out Standards',
      complianceDesc: 'Comprehensive interior fit-out, bespoke decorative joinery, acoustic ceiling systems, and fast-track authority inspections.',
    },
    {
      id: 'villa-construction',
      title: 'Villa Construction & Contractors',
      category: 'Building',
      desc: 'Elite design-build villa contractors in Abu Dhabi. Turnkey residential engineering, custom luxury architecture, reinforced concrete casting, shell & core, and Estidama 2-Pearl certifications.',
      features: ['Turnkey Custom Luxury Villas', 'Estidama 2-Pearl Thermal Compliance', 'Structural & Substructure Raft Civils', 'TAMM Municipality Permits & Clearances'],
      href: '/services/villa-construction',
      image: '/images/ArrowheadVilla.png',
      standard: 'TAMM Permit Compliant / Estidama 2-Pearl Certified',
      complianceDesc: 'Turnkey design-build engineering, high-strength C50/60 concrete casting, thermal envelope insulation, and luxury architectural finishes.',
    },
    {
      id: 'villa-renovation',
      title: 'Villa Renovation & Extensions',
      category: 'Building',
      desc: 'Premium structural extensions, majlis additions, kitchen and bathroom luxury upgrades, layout redesigns, boundary walls construction, and refurbishment works for private residences.',
      features: ['Structural Majlis Extensions', 'Boundary & Exterior Facade Upgrades', 'Interior Fit-Out & Luxury Marble Tiling', 'TAMM Municipal Building NOCs'],
      href: '/services/villa-renovation',
      image: '/images/landscape1.jpeg',
      standard: 'Abu Dhabi Municipality Renovation & Extension Permits',
      complianceDesc: 'Structural load-bearing modifications, exterior perimeter walls, high-efficiency MEP retrofitting, and authority completion certificates.',
    },
    {
      id: 'mep-specialized',
      title: 'MEP & Specialized Works',
      category: 'Engineering',
      desc: 'Technical mechanical, electrical, and plumbing engineering. HVAC ventilation retrofits, main distribution boards (MDB/SMDB), drainage networks, and firefighting suppression installations.',
      features: ['HVAC Ducting & Chilled Water Balancing', 'Electrical Distribution Boards & Sizing', 'Fire Suppression & Sprinkler Riser Systems', 'Energy Consumption & Thermography Audits'],
      href: '/services/mep-specialized',
      image: '/images/mep-work.png',
      standard: 'ADDC Electricity Regulations & Civil Defense NFPA Codes',
      complianceDesc: 'Secondary electrical distribution, multi-zone VRF climate networks, fire pump testing, and municipal utility certifications.',
    },
    {
      id: 'facility-management',
      title: 'Facility Management (Hard & Soft Services)',
      category: 'Facility Care',
      desc: 'Complete integrated building care. Hard FM covering preventative MEP, HVAC chiller servicing, and drainage flushing. Soft FM covering deep cleaning, landscaping, and pest control under structured AMCs.',
      features: ['MEP Preventative Maintenance (AMC)', 'HVAC Chiller & Coil Overhauls', 'Commercial Cleaning & Landscaping', '24/7 Reactive Emergency Dispatch SLA'],
      href: '/services/facility-management',
      image: '/images/facility.png',
      standard: 'ISO 41001 FM Standards / 24/7 SLA Compliance',
      complianceDesc: 'Preventative multi-tier maintenance routines, electrical thermal scans, and rapid 2-hour technician dispatch SLAs.',
    },
    {
      id: 'hdpe-pipelines',
      title: 'HDPE Pipelines (Supply & Installation)',
      category: 'Infrastructure',
      desc: 'Expert services for HDPE pipeline supply, electrofusion and butt-fusion welding to DVS 2207, trenchless horizontal directional drilling (HDD), and hydrostatic pressure testing. Fully compliant with ADDC and municipal utility regulations.',
      features: ['PE100 Pipeline Networks (DN 50 - DN 1200)', 'DVS 2207 Butt-Fusion & Electrofusion', 'Trenchless Installation (HDD)', 'Hydrostatic Pressure & Leak Testing'],
      href: '/services/hdpe-pipelines',
      image: '/images/hdpe.jpg',
      standard: 'DVS 2207 / ISO 4427 / ADDC & Municipality Certified',
      complianceDesc: 'Certified butt-fusion & electrofusion welding with computerized datalogger records and hydrostatic pressure testing to 10+ Bar.',
    },
    {
      id: 'wet-utilities-infrastructure',
      title: 'Wet Utilities & Drainage Infrastructure',
      category: 'Infrastructure',
      desc: 'Certified wet utilities contracting across Abu Dhabi. Supply, trenching, welding, pressure testing, and connection of sewage gravity grids, storm water outfalls, and potable water networks.',
      features: ['Sewerage Gravity & Pressure Lines', 'Potable Water Distribution Mains', 'Storm Water Outfalls & Attenuation', 'Precast Valve Chambers & Manholes'],
      href: '/services/wet-utilities-infrastructure',
      image: '/images/wet utilities.png',
      standard: 'Abu Dhabi Municipality & ADDC Approved Standards',
      complianceDesc: 'Gravity sewer networks, storm water lines, potable water transmission loops, and reinforced precast valve chambers.',
    },
    {
      id: 'infrastructure-civil-works',
      title: 'Infrastructure & Civil Works',
      category: 'Infrastructure',
      desc: 'Approved civil engineering contracting in Abu Dhabi. Bulk earthworks, site grading, compaction testing, reinforced boundary walls, interlocking paving, and heavy concrete foundations.',
      features: ['Site Grading & Bulk Earthworks', 'Boundary & Structural Retaining Walls', 'Heavy Compaction Testing & Subgrades', 'Interlock & Kerbstone Paving'],
      href: '/services/infrastructure-civil-works',
      image: '/images/civil-infrastructure.webp',
      standard: 'DoT & Abu Dhabi Municipality Civil Specifications',
      complianceDesc: 'Substructure excavations, engineered backfilling, asphalt paving, boundary enclosures, and municipal right-of-way compliance.',
    },
    {
      id: 'industrial-warehouses',
      title: 'Industrial Warehouses Construction & AMC',
      category: 'Industrial & Civil',
      desc: 'Turnkey industrial warehouse construction, pre-engineered steel buildings (PEB), TR34 high-flatness concrete flooring, crane gantry structures, and warehouse maintenance AMCs in Mussafah, ICAD, and KIZAD.',
      features: ['PEB Steel Portal Frames', 'TR34 High-Flatness Concrete Flooring', 'Overhead Crane Gantries & Rail Alignment', 'Industrial Warehouse Maintenance AMC'],
      href: '/services/industrial-warehouses',
      image: '/images/ghuzlan-site1.jpeg',
      standard: 'Civil Defense 924 / TR34 Floor Flatness Compliant',
      complianceDesc: 'Heavy-duty steel portal frame erection, superflat laser-screed concrete slabs, and wet sprinkler fire protection networks.',
    },
  ];

  const sectorList = [
    {
      id: 'residential-villas',
      title: 'Residential & Luxury Villas',
      desc: 'High-end design-build villas, structural majlis extensions, complete home remodeling, and premium MEP installations for private estates across Abu Dhabi.',
      image: '/images/ArrowheadVilla.png',
      href: '/sectors/residential-villas',
    },
    {
      id: 'commercial-retail',
      title: 'Commercial Offices & Retail',
      desc: 'Tenant fit-out MEP, chilled water line adjustments, fire sprinkler retrofits, and integrated facilities management contracts.',
      image: '/images/mall_shop.jpeg',
      href: '/sectors/commercial-retail',
    },
    {
      id: 'infrastructure-utilities',
      title: 'Infrastructure & Utility Networks',
      desc: 'Municipal utility pipelines, gravity sewerage grids, storm drainage outfalls, and potable water distribution networks complying with municipal standards.',
      image: '/images/Pipeline Relocations  Modifications.png',
      href: '/sectors/infrastructure-utilities',
    },
  ];

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'ArrowHead General Contracting Services & Sectors',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'ArrowHead General Contracting LLC',
      'telephone': '+97125545230',
      'email': 'info@arrowheadigc.com',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Abu Dhabi',
        'addressCountry': 'AE'
      }
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Contracting Capabilities and Industry Sectors',
      'itemListElement': [
        ...serviceList.map((service) => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': service.title,
            'description': service.desc
          }
        })),
        ...sectorList.map((sector) => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': sector.title,
            'description': sector.desc
          }
        }))
      ]
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arrowheadigc.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://arrowheadigc.com/services' }
    ]
  };

  return (
    <div id="services-directory-page" className="bg-app-bg text-app-fg min-h-screen">
      <JsonLd schema={[servicesSchema, breadcrumbSchema]} />

      {/* 1. HERO HEADER */}
      <section className="bg-app-secondary py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Services' }]} />
          <h1 className="text-4xl font-heading font-extrabold text-app-fg mt-3 tracking-tight">
            Our Services &amp; Industry Capabilities
          </h1>
          <p className="mt-4 text-sm text-app-muted max-w-2xl font-light leading-relaxed">
            ArrowHead delivers expert civil engineering, pipeline works, building construction, and facilities maintenance across diverse industry sectors in the Abu Dhabi region.
          </p>
        </div>
      </section>

      {/* 2. CORE SERVICES LISTING */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-app-border pb-4">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">
              Division Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg mt-1">
              Core Engineering &amp; Contracting Services
            </h2>
          </div>

          <div className="space-y-16">
            {serviceList.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 border-b border-app-border last:border-b-0 last:pb-0 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Details */}
                <div className={`lg:col-span-7 space-y-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <span className="text-brand-teal text-xs font-bold uppercase tracking-wider font-mono">
                    0{index + 1}. {service.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-app-muted text-sm leading-relaxed font-light">
                    {service.desc}
                  </p>

                  {/* Quick features grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-app-fg/80">
                        <span className="text-brand-teal text-sm">✓</span>
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={service.href}
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover transition-colors"
                    >
                      <span>Detailed Specifications</span>
                    </Link>
                  </div>
                </div>

                {/* Visual Showcase Card with Real Image and Compliance Overlay */}
                <div
                  className={`lg:col-span-5 rounded-2xl overflow-hidden border border-app-border shadow-xl hover:shadow-2xl transition-all duration-300 relative min-h-[260px] sm:min-h-[300px] flex flex-col justify-between group ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  {/* Background Image with zoom on hover */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* High-Contrast Multi-Layer Overlay for Perfect Contrast in Light & Dark Mode */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-slate-950/30 pointer-events-none"></div>

                  {/* Top Badge */}
                  <div className="relative z-10 p-5 sm:p-6 pb-0 flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-teal text-primary-dark font-mono font-bold text-[10px] uppercase tracking-wider shadow-md">
                      Scope &amp; Compliance
                    </span>
                    <span className="text-[10px] font-mono text-slate-300 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content Details */}
                  <div className="relative z-10 p-5 sm:p-6 space-y-2.5 text-white">
                    <p className="text-xs font-light text-slate-200 leading-relaxed drop-shadow-sm">
                      {service.complianceDesc}
                    </p>
                    <div className="pt-2 border-t border-white/15 flex items-center gap-1.5">
                      <span className="text-brand-teal text-[11px] font-mono">Standard:</span>
                      <span className="text-[10px] font-mono text-slate-300 truncate">
                        {service.standard}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY SECTORS SOLUTIONS */}
      <section className="py-20 bg-app-secondary border-t border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">
              Target Markets
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-app-fg mt-1">
              Industry Sector Solutions
            </h2>
            <p className="text-app-muted text-sm font-light mt-2 max-w-2xl">
              Specialized domain engineering customized for private residences, industrial complexes, commercial towers, and municipal utility networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectorList.map((sector) => (
              <div
                key={sector.id}
                className="bg-app-card rounded-xl overflow-hidden border border-app-border hover:border-brand-teal/30 shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 relative overflow-hidden bg-app-secondary">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-base font-bold text-app-fg group-hover:text-brand-teal transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-app-muted text-xs leading-relaxed font-light">
                      {sector.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={sector.href}
                    className="inline-flex items-center text-xs font-bold text-brand-teal hover:text-brand-teal-hover transition-colors uppercase tracking-widest font-mono"
                  >
                    <span>Explore Sector &rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

