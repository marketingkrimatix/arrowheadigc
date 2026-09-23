'use client';

import React from 'react';

export interface SpecCard {
  title: string;
  category: string;
  image: string;
  client: string;
  authorityApproval: string;
  certCode: string;
  summary: string;
  specs: string[];
}

interface CinematicSpecGridProps {
  cards?: SpecCard[];
}

export default function CinematicSpecGrid({ cards: propCards }: CinematicSpecGridProps = {}) {
  const [activeCard, setActiveCard] = React.useState<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveCard(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const defaultCards: SpecCard[] = [
    {
      title: 'Jack Wills Retail Fit-Out',
      category: 'Commercial Retail Interior',
      image: '/images/jack-wills.jpeg',
      client: 'Jack Wills / Alshaya Group',
      authorityApproval: 'Civil Defense & Mall Management Approved',
      certCode: 'RET-FITOUT-JW-01',
      summary: 'High-end retail boutique fit-out featuring bespoke architectural joinery, custom display casework, and specialized LED track lighting.',
      specs: [
        'Hardwood display joinery & glass showcases',
        'Civil Defense compliant sprinkler & fire alarms',
        'Chilled water FCU air balancing & MEP tie-ins'
      ]
    },
    {
      title: 'Foot Locker Flagship Store',
      category: 'Turnkey Retail Fit-Out',
      image: '/images/foot_locker.jpeg',
      client: 'Foot Locker Middle East',
      authorityApproval: 'Abu Dhabi Mall Standards Compliant',
      certCode: 'RET-FITOUT-FL-02',
      summary: 'Full turnkey retail store execution including high-traffic porcelain tiling, acoustic ceiling systems, and power distribution boards.',
      specs: [
        'Heavy-duty commercial floor finishes',
        'Dedicated low-voltage POS & data cabling',
        'Architectural drywall partitions & metal fixtures'
      ]
    },
    {
      title: 'RAK Ceramics Showroom',
      category: 'Commercial Showroom Fit-Out',
      image: '/images/rak-ceramics-store.jpeg',
      client: 'RAK Ceramics LLC',
      authorityApproval: 'Municipal Commercial Space Approved',
      certCode: 'RET-SHOWROOM-RC-03',
      summary: 'Expansive luxury commercial showroom fit-out with bespoke tile display mockups, ambient track lighting, and executive sales lounges.',
      specs: [
        'Custom modular display panel engineering',
        'High-CRI showroom illumination systems',
        'Emergency exit & smoke evacuation integration'
      ]
    }
  ];

  const cards = propCards || defaultCards;

  return (
    <div ref={containerRef} className="w-full bg-app-bg text-app-fg py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="group relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-app-border bg-app-secondary shadow-lg cursor-pointer"
            onClick={() => {
              setActiveCard(activeCard === idx ? null : idx);
            }}
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${activeCard === idx ? 'scale-105' : ''
                }`}
            />

            {/* Ambient Overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300"></div>

            {/* Static Initial Label */}
            <div
              className={`absolute bottom-6 left-6 right-6 transition-all duration-500 ease-out group-hover:translate-y-[-160px] group-hover:opacity-0 ${activeCard === idx ? 'translate-y-[-160px] opacity-0' : ''
                }`}
            >
              <span className="text-[9px] font-mono text-brand-gold uppercase tracking-widest font-bold">
                {card.category}
              </span>
              <h3 className="text-xl font-heading font-extrabold text-white mt-1 leading-tight">
                {card.title}
              </h3>
              <p className="text-[10px] text-gray-300 font-mono mt-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                <span className="hidden md:inline">Hover to view Technical Specs</span>
                <span className="inline md:hidden">Tap to view Technical Specs</span>
              </p>
            </div>

            {/* Slide-Up Technical Sheet */}
            <div
              className={`absolute inset-x-0 bottom-0 bg-primary-dark/95 border-t border-brand-teal/40 p-6 flex flex-col justify-between h-[230px] transition-transform duration-500 ease-out group-hover:translate-y-0 ${activeCard === idx ? 'translate-y-0' : 'translate-y-[230px]'
                }`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-[8px] font-mono text-brand-teal uppercase tracking-widest font-bold">
                    {card.category}
                  </span>
                  <span className="text-[8px] font-mono text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded border border-brand-gold/20 font-bold">
                    {card.certCode}
                  </span>
                </div>
                <h4 className="text-base font-heading font-extrabold text-white leading-tight">
                  {card.title}
                </h4>
                <p className="text-[10px] text-gray-300 leading-normal font-light">
                  {card.summary}
                </p>
              </div>

              {/* Specs & Compliance Section */}
              <div className="space-y-3 pt-3 border-t border-app-border/40">
                <div className="flex justify-between items-center text-[8px] font-mono text-gray-400">
                  <span>CLIENT: {card.client.split(' (')[0]}</span>
                  <span className="text-brand-teal">{card.authorityApproval.split(' ')[0]} Approved</span>
                </div>

                <ul className="space-y-1">
                  {card.specs.slice(0, 2).map((spec, specIdx) => (
                    <li key={specIdx} className="flex items-center text-[10px] text-gray-300 font-light">
                      <span className="text-brand-teal mr-1.5 font-bold">✓</span>
                      <span className="truncate">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
