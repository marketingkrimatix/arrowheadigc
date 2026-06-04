import React from 'react';

interface RibbonItem {
  title: string;
  category: string;
  image: string;
  desc: string;
  spec: string;
}

export default function HorizontalFilmstrip() {
  const items: RibbonItem[] = [
    {
      title: 'DN 1200 Trunk Sewer Connection',
      category: 'HDPE Pipelines',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
      desc: 'Heavy utility alignment through Yas Island sectors.',
      spec: 'Diameter: DN 1200 | PN16 Rating'
    },
    {
      title: 'Yas Marina Custom 6-Bed Villa',
      category: 'Villa Construction',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80',
      desc: 'Premium design-build concrete cast and marble fit-outs.',
      spec: 'Slab Area: 12,500 sqft | Estidama 2-Pearl'
    },
    {
      title: 'ICAD Industrial Factory Hard FM',
      category: 'Facility Management',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
      desc: 'Annual maintenance covering HVAC chillers and main electrical distributions.',
      spec: 'SLA Response: Under 4 hrs | 24/7 AMC'
    },
    {
      title: 'Mussafah Drydock Slipway Repair',
      category: 'Marine Works',
      image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=600&q=80',
      desc: 'High-strength micro-silica concrete restorations.',
      spec: 'Concrete Grade: C50/60 | Marine Epoxy'
    },
    {
      title: 'Khalifa City Majlis Extensions',
      category: 'Renovations',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      desc: 'Traditional detached guest majlis structures with structural reinforcements.',
      spec: 'Steel Load Casting | Municipal Approved'
    }
  ];

  return (
    <div className="w-full bg-app-bg text-app-fg py-10 relative overflow-hidden">
      {/* Scrollable Container */}
      <div className="flex gap-8 overflow-x-auto pb-8 pt-4 px-8 scrollbar-thin scrollbar-thumb-brand-teal scrollbar-track-transparent snap-x snap-mandatory">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className="flex-none w-[320px] sm:w-[380px] bg-app-card border border-app-border rounded-lg overflow-hidden group hover:border-brand-teal/40 transition-all duration-300 shadow-md snap-start relative"
          >
            {/* Visual Frame */}
            <div className="aspect-[16/10] w-full overflow-hidden relative bg-app-secondary">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Category tag */}
              <span className="absolute top-4 left-4 bg-brand-gold text-primary-dark text-[8px] font-mono font-bold tracking-widest px-2.5 py-1 rounded">
                {item.category}
              </span>
            </div>

            {/* Content Details */}
            <div className="p-5 space-y-3">
              <span className="block text-[8px] font-mono text-brand-teal uppercase tracking-widest">{item.spec}</span>
              <h4 className="text-sm font-heading font-extrabold tracking-tight group-hover:text-brand-teal transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-app-muted font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
