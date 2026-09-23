'use client';

import React from 'react';

interface CollageItem {
  title: string;
  category: string;
  image: string;
  stats: string;
  gridClass: string; // Tailwind grid config classes
  badgeColor: string;
}

export default function CollageBoxShowcase() {
  const items: CollageItem[] = [
    {
      title: 'Yas Island Trunk Sewerage Pipeline',
      category: 'HDPE Pipelines',
      image: '/images/123.jpeg',
      stats: '4.8km | DN 1200mm',
      gridClass: 'md:col-span-2 md:row-span-2 h-[320px] md:h-[420px]',
      badgeColor: 'bg-brand-teal/20 text-brand-teal border-brand-teal/30'
    },
    {
      title: 'Sanjay Jain Luxury Villa',
      category: 'Villa Construction',
      image: '/images/ArrowheadVilla.png',
      stats: '14,500 sqft | Turnkey',
      gridClass: 'md:col-span-1 md:row-span-2 h-[320px] md:h-[420px]',
      badgeColor: 'bg-brand-gold/20 text-brand-gold border-brand-gold/30'
    },
    {
      title: 'Katheri Family Villa MEP Systems',
      category: 'MEP Specialized',
      image: '/images/Matrix_project3.jpeg',
      stats: 'HVAC Balancing | Specialized',
      gridClass: 'md:col-span-2 md:row-span-1 h-[200px]',
      badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    },
    {
      title: 'Mussafah Industrial Logistics Warehouse',
      category: 'Civil Works',
      image: '/images/Matrix_project.jpeg',
      stats: 'Portal Frame | TR34 Slab',
      gridClass: 'md:col-span-1 md:row-span-1 h-[200px]',
      badgeColor: 'bg-brand-teal/20 text-brand-teal border-brand-teal/30'
    },
    {
      title: 'Saadiyat Cultural District Substation',
      category: 'Civil Works',
      image: '/images/civil-infrastructure.webp',
      stats: 'C50 Concrete | raft pours',
      gridClass: 'md:col-span-1 md:row-span-1 h-[200px]',
      badgeColor: 'bg-brand-gold/20 text-brand-gold border-brand-gold/30'
    },
    {
      title: 'Khalifa City Villa Structural Extension',
      category: 'Villa Renovation',
      image: '/images/villa_modern.png',
      stats: '2,800 sqft | Majlis Block',
      gridClass: 'md:col-span-2 md:row-span-1 h-[200px]',
      badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    }
  ];

  return (
    <div className="w-full bg-app-bg text-app-fg py-12 max-w-6xl mx-auto">
      {/* Mosaic Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`group relative rounded-xl overflow-hidden border border-app-border bg-app-secondary shadow-lg flex flex-col justify-end p-6 ${item.gridClass}`}
          >
            {/* Background Image with Zoom on Hover */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark Linear Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300"></div>

            {/* Content box */}
            <div className="relative z-10 space-y-2">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-widest border ${item.badgeColor}`}>
                {item.category}
              </span>

              <h3 className="text-base sm:text-lg font-heading font-extrabold text-white leading-tight uppercase">
                {item.title}
              </h3>

              <div className="border-t border-white/10 pt-2 text-[9px] font-mono text-gray-300 uppercase tracking-wider">
                <span>Scope: {item.stats}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
