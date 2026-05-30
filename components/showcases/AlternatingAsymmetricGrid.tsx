'use client';

import React from 'react';

interface AsymmetricProject {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  desc: string;
  specs: { label: string; value: string }[];
}

export default function AlternatingAsymmetricGrid() {
  const projects: AsymmetricProject[] = [
    {
      id: 'proj-1',
      title: 'Saadiyat District Luxury Estate',
      category: 'Villa Construction & Finish',
      location: 'Saadiyat Cultural District, Abu Dhabi',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      desc: 'Bespoke residential custom home focusing on premium interior finishes and structural stability. The envelope features high-performance thermal insulation ratings combined with massive natural Italian Carrara marble cladding slabs.',
      specs: [
        { label: 'Foundation raft', value: 'C50/60 concrete' },
        { label: 'Green compliance', value: '2-Pearl Estidama' },
        { label: 'Total area size', value: '14,000 sq ft' }
      ]
    },
    {
      id: 'proj-2',
      title: 'Yas Island Sewerage Loop Network',
      category: 'HDPE Pipelines & Dewatering',
      location: 'Yas Island North Sector, Abu Dhabi',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      desc: 'Heavy infrastructure sewer trunk loop network. Completed butt-fusion computerized welding of PE100 polyethylene pipe units, executing alignments under tide-influenced shoring and deep-well dewatering set lines.',
      specs: [
        { label: 'Pipe dimension', value: 'DN 1200mm Outer' },
        { label: 'Pressure rating', value: 'PN16 (16 Bar load)' },
        { label: 'Jointing specs', value: 'Computer Parameter log' }
      ]
    }
  ];

  return (
    <div className="w-full bg-app-bg py-4 max-w-6xl mx-auto space-y-12">
      {projects.map((proj, idx) => {
        const isEven = idx % 2 === 0;
        
        return (
          <div 
            key={proj.id} 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            
            {/* Image Box - Left-aligned on even index, right-aligned on odd index */}
            <div className={`lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-app-border bg-app-secondary shadow-lg ${
              isEven ? 'lg:order-1' : 'lg:order-2'
            }`}>
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Typography Card - Right-aligned on even index, left-aligned on odd index */}
            <div className={`lg:col-span-5 bg-app-card border border-app-border rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 ${
              isEven ? 'lg:order-2' : 'lg:order-1'
            }`}>
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-brand-teal uppercase tracking-widest font-bold block">
                  {proj.category}
                </span>
                <h4 className="text-lg font-heading font-extrabold text-app-fg uppercase tracking-tight mt-1">
                  {proj.title}
                </h4>
                <span className="block text-[10px] text-app-muted font-mono">📍 {proj.location}</span>
              </div>

              <p className="text-xs text-app-muted leading-relaxed font-light">
                {proj.desc}
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-3 gap-4 border-t border-app-border/60 pt-4 mt-6">
                {proj.specs.map((sp, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <span className="block text-[8px] font-mono text-app-muted uppercase font-bold tracking-wider">
                      {sp.label}
                    </span>
                    <span className="block text-[11px] font-bold text-app-fg leading-tight">
                      {sp.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}
