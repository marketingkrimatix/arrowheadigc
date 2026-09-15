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
      title: 'Ali Makhboot Luxury Villa',
      category: 'Turnkey Luxury Villa Construction',
      location: 'Prestige Residential Sector, Abu Dhabi',
      image: '/images/landscape.jpeg',
      desc: 'Bespoke contemporary private residence featuring reinforced concrete substructure, high-efficiency thermal masonry, double-height curtain wall glazing, and luxury interior stone finishes.',
      specs: [
        { label: 'Foundation raft', value: 'C50/60 concrete' },
        { label: 'Green compliance', value: '2-Pearl Estidama' },
        { label: 'Total area size', value: '14,000 sq ft' }
      ]
    },
    {
      id: 'proj-2',
      title: 'Katheri Family Luxury Villa',
      category: 'Luxury Villa Design-Build & Fit-Out',
      location: 'Prime Residential Enclave, Abu Dhabi',
      image: '/images/Matrix_project1.jpeg',
      desc: 'Master private residential development featuring post-tensioned reinforced concrete slabs, bespoke luxury interior joinery, integrated VRF multi-zone HVAC cooling loops, and custom outdoor landscaped courtyards.',
      specs: [
        { label: 'Structural frame', value: 'Post-Tensioned Slabs' },
        { label: 'Finishing scope', value: 'Bespoke Marble & Joinery' },
        { label: 'Total area size', value: '15,000 sq ft' }
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
            <div className={`lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-app-border bg-app-secondary shadow-lg ${isEven ? 'lg:order-1' : 'lg:order-2'
              }`}>
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Typography Card - Right-aligned on even index, left-aligned on odd index */}
            <div className={`lg:col-span-5 bg-app-card border border-app-border rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'
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
