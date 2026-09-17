'use client';

import React from 'react';
import Link from 'next/link';

export interface ClientItem {
  name: string;
  category: string;
  projectTitle: string;
  projectSlug: string;
  logoText: string;
  iconSvg: React.ReactNode;
}

export const clientsData: ClientItem[] = [
  {
    name: 'Aldar Properties',
    category: 'Master Developer & Infrastructure',
    projectTitle: 'Yas Island Trunk Sewerage',
    projectSlug: 'yas-island-sewerage',
    logoText: 'ALDAR',
    iconSvg: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 36L24 12L36 36H30L24 24L18 36H12Z" fill="currentColor" />
        <circle cx="24" cy="18" r="2.5" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: 'Abu Dhabi Municipality',
    category: 'Government & Utility Authority',
    projectTitle: 'Yas Island Trunk Sewerage Network',
    projectSlug: 'yas-island-sewerage',
    logoText: 'MUNICIPALITY',
    iconSvg: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 10L36 18V36H12V18L24 10Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M20 36V24H28V36" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="24" cy="17" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Al Jaber Steel Group',
    category: 'Heavy Industrial & Manufacturing',
    projectTitle: 'Mussafah Factory Hard FM',
    projectSlug: 'mussafah-fm',
    logoText: 'AL JABER',
    iconSvg: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14H36M16 14V34M32 14V34M12 34H36M24 14V34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Ghuzlan Emirates',
    category: 'Commercial Fit-Out & Joinery',
    projectTitle: 'Damac Lagoons Venice Cluster Fit-Out',
    projectSlug: 'ghuzlan-commercial-fitout',
    logoText: 'GHUZLAN',
    iconSvg: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 36V14L24 22L36 14V36H12Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M24 22V36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'RAK Ceramics',
    category: 'Flagship Retail & Display Architecture',
    projectTitle: 'RAK Ceramics Flagship Retail Showroom',
    projectSlug: 'rak-ceramics-showroom',
    logoText: 'RAK CERAMICS',
    iconSvg: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="12" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 24H36M24 12V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Capital Corporation',
    category: 'Commercial Real Estate & Fit-Out',
    projectTitle: 'Corporate Office Fit-Out & MEP',
    projectSlug: 'corporate-mep',
    logoText: 'CAPITAL',
    iconSvg: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 36V16L24 10L34 16V36" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M20 20H28M20 26H28M20 32H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Al Raha Residential Community',
    category: 'Luxury Villa Development',
    projectTitle: 'Al Raha Gardens Premium Turnkey Villa',
    projectSlug: 'al-raha-villa',
    logoText: 'AL RAHA',
    iconSvg: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 24L24 14L36 24V36H12V24Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M24 24V36M18 36V28H30V36" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'TAQA / ADDC Utility Networks',
    category: 'Power, Water & Infrastructure',
    projectTitle: 'Yas Island Trunk Sewerage',
    projectSlug: 'yas-island-sewerage',
    logoText: 'TAQA / ADDC',
    iconSvg: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 10L14 26H24L22 38L34 22H24L26 10Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Mussafah Logistics Hub',
    category: 'Heavy Civils & Logistics Infrastructure',
    projectTitle: 'Mussafah Industrial Facility Civils & Paving',
    projectSlug: 'mussafah-infrastructure',
    logoText: 'MUSSAFAH HUB',
    iconSvg: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18L24 12L36 18L24 24L12 18Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M12 24L24 30L36 24" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M12 30L24 36L36 30" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Khalifa City Private Estates',
    category: 'High-End Residential Architecture',
    projectTitle: 'Khalifa City Villa Structural Extension',
    projectSlug: 'khalifa-extension',
    logoText: 'KHALIFA ESTATES',
    iconSvg: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 36V20L24 12L34 20V36H14Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M20 24H28V36H20V24Z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Abu Dhabi Civil Defense',
    category: 'Life Safety & Compliance Standards',
    projectTitle: 'Corporate Office Fit-Out & MEP',
    projectSlug: 'corporate-mep',
    logoText: 'CIVIL DEFENSE',
    iconSvg: (
      <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 10L36 15V26C36 33 24 38 24 38C24 38 12 33 12 26V15L24 10Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M24 18V28M20 22L24 18L28 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

interface ClientsMarqueeProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  showHeading?: boolean;
  showButton?: boolean;
  className?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function ClientsMarquee({
  badge = 'Trusted by 35+ Clients',
  title = 'Our Clients',
  subtitle = 'We have successfully delivered construction projects for businesses, organizations, and individual clients across different sectors.',
  showHeading = true,
  showButton = true,
  className = '',
  buttonText = 'View All Projects',
  buttonHref = '/projects',
}: ClientsMarqueeProps) {
  const renderCards = (keyPrefix: string) =>
    clientsData.map((client, idx) => (
      <Link
        key={`${keyPrefix}-${idx}`}
        href={`/projects/${client.projectSlug}`}
        title={`Explore project case study for ${client.name}`}
        className="flex-shrink-0 group/card bg-app-card hover:bg-app-secondary border border-app-border hover:border-brand-teal/60 rounded-xl p-6 sm:p-7 w-[330px] sm:w-[380px] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
      >
        {/* Top Header Row: Clean Monochrome Emblem & Client Name */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            {/* High-Contrast Architectural Emblem */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-app-secondary border border-app-border text-app-fg group-hover/card:text-brand-teal group-hover/card:border-brand-teal/40 flex items-center justify-center p-2.5 transition-colors shrink-0">
              {client.iconSvg}
            </div>

            {/* Typography */}
            <div className="min-w-0">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-teal block mb-1">
                {client.logoText}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-app-fg font-heading group-hover/card:text-brand-teal transition-colors truncate">
                {client.name}
              </h4>
              <p className="text-[11px] text-app-muted truncate font-light mt-0.5">
                {client.category}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Delivered Project Info & Subdued Link */}
        <div className="pt-4 border-t border-app-border flex items-center justify-between gap-3 mt-3">
          <div className="min-w-0">
            <span className="text-[10px] text-app-muted font-mono uppercase tracking-wider block">Delivered Project</span>
            <span className="text-xs sm:text-sm font-semibold text-app-fg group-hover/card:text-brand-teal transition-colors truncate block max-w-[200px] sm:max-w-[230px]">
              {client.projectTitle}
            </span>
          </div>

          <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded bg-app-secondary border border-app-border text-app-muted group-hover/card:text-brand-teal group-hover/card:border-brand-teal/40 transition-colors text-xs font-bold font-mono">
            <span>View</span>
            <span className="group-hover/card:translate-x-0.5 transition-transform" aria-hidden="true">&rarr;</span>
          </div>
        </div>
      </Link>
    ));

  return (
    <section className={`py-20 sm:py-24 bg-app-secondary border-y border-app-border overflow-hidden relative ${className}`}>
      {/* Scoped CSS for butter-smooth infinite scrolling motion */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes clientMarqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
        .clients-marquee-track {
          display: flex;
          width: max-content;
          animation: clientMarqueeScroll 32s linear infinite;
          will-change: transform;
        }
        .clients-marquee-container:hover .clients-marquee-track {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="inline-block px-3.5 py-1 rounded-full bg-app-card border border-app-border text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">
              {badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-app-fg tracking-tight">
              {title}
            </h2>
            <p className="text-app-muted text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto pt-1">
              {subtitle}
            </p>
            <div className="w-12 h-0.5 bg-brand-teal mx-auto mt-3"></div>
          </div>
        )}
      </div>

      {/* Marquee Scroller with Clean Edge Fades */}
      <div className="clients-marquee-container relative w-full overflow-hidden flex group">
        {/* Left Edge Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-app-secondary via-app-secondary/80 to-transparent z-20 pointer-events-none"></div>

        {/* Right Edge Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-app-secondary via-app-secondary/80 to-transparent z-20 pointer-events-none"></div>

        {/* Primary Track */}
        <div className="clients-marquee-track flex items-center gap-6 py-4 pr-6">
          {renderCards('track-1')}
        </div>

        {/* Duplicate Track for Seamless Infinite Loop */}
        <div className="clients-marquee-track flex items-center gap-6 py-4 pr-6" aria-hidden="true">
          {renderCards('track-2')}
        </div>
      </div>

      {/* View All Button */}
      {showButton && (
        <div className="mt-12 text-center relative z-10">
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-app-card border border-app-border hover:border-brand-teal text-app-fg hover:text-brand-teal font-bold text-xs uppercase tracking-wider transition-colors shadow-sm hover:shadow group"
          >
            <span>{buttonText}</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}
