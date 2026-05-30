'use client';

import React, { useState } from 'react';

interface SlideItem {
  id: string;
  num: string;
  title: string;
  category: string;
  location: string;
  desc: string;
  specs: string;
  image: string;
}

export default function WidescreenEditorialSlider() {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const slides: SlideItem[] = [
    {
      id: 'slide-1',
      num: '01',
      title: 'Saadiyat District Luxury Custom Home',
      category: 'Villa Construction',
      location: 'Saadiyat Island, Abu Dhabi',
      desc: 'Bespoke design-build contract focusing on high thermal efficiency insulation wraps, structural piles foundations, and Carrara bookmatched marble dry-laid interiors.',
      specs: '14,000 sq ft • C50/60 foundations • 2-Pearl Estidama',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'slide-2',
      num: '02',
      title: 'Yas North Sewer Trunk Network',
      category: 'HDPE Pipelines',
      location: 'Yas Island, Abu Dhabi',
      desc: 'Computerized butt-fusion welding of 4.8km high-density PE100 utility pressure pipelines. Managed continuous deep-well shoring and dewatering operations.',
      specs: '4.8km Length • DN 1200mm Outer Diameter • PN16 Rating',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'slide-3',
      num: '03',
      title: 'Mussafah Industrial Facility AMC',
      category: 'Facility Management',
      location: 'Mussafah Port Industrial Zone, Abu Dhabi',
      desc: 'Annual maintenance contract (AMC) managing HVAC chilled water loops, phase-load distribution boards, Civil Defense wet risers, and scheduled preventative filter checks.',
      specs: '15,000 sqm • 24/7 Response SLA • Hard FM contract',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const current = slides[activeSlide];

  return (
    <div className="w-full bg-app-bg py-4 max-w-6xl mx-auto">
      <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-app-border bg-app-secondary shadow-2xl">
        
        {/* Main Photo Slide with smooth opacity fade */}
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover"
          />
          {/* Subtle elegant visual gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
        </div>

        {/* Floating Offset Typography Panel */}
        <div className="absolute bottom-6 left-6 max-w-md bg-app-card/95 backdrop-blur-xs border border-app-border p-6 rounded-xl shadow-2xl space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest bg-brand-gold/10 px-2 py-0.5 rounded border border-brand-gold/20">
                {current.category}
              </span>
              <span className="text-[9px] font-mono text-app-muted">{current.location}</span>
            </div>
            <h4 className="text-sm sm:text-base font-heading font-extrabold text-app-fg uppercase tracking-tight leading-tight mt-1">
              {current.title}
            </h4>
          </div>

          <p className="text-[11px] text-app-muted font-light leading-relaxed">
            {current.desc}
          </p>

          <div className="border-t border-app-border/60 pt-3 flex justify-between items-center text-[8.5px] font-mono font-bold text-brand-teal uppercase tracking-widest">
            <span>SPEC: {current.specs}</span>
          </div>
        </div>

        {/* Slide Numbers Select Controls (Bottom-Right overlay) */}
        <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-black/60 border border-white/10 p-2.5 rounded-lg">
          {slides.map((sl, idx) => (
            <button
              key={sl.id}
              onClick={() => setActiveSlide(idx)}
              className={`px-3 py-1.5 rounded font-mono text-xs font-bold transition-all cursor-pointer ${
                activeSlide === idx
                  ? 'bg-brand-teal text-primary-dark shadow-md'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {sl.num}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
