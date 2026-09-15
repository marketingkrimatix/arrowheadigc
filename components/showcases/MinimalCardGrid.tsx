'use client';

import React from 'react';

interface SimpleProject {
  title: string;
  category: string;
  location: string;
  specs: string;
  image: string;
  desc: string;
}

export default function MinimalCardGrid() {
  const projects: SimpleProject[] = [
    {
      title: 'Sanjay Jain Luxury Villa',
      category: 'Villa Construction',
      location: 'Saadiyat & Prime Abu Dhabi, UAE',
      specs: '14,500 sq ft • 2-Pearl Estidama',
      image: '/images/ArrowheadVilla.png',
      desc: 'Bespoke high-end residential custom home featuring extensive Calacatta marble wall cladding, insulated masonry, and high-efficiency VRF HVAC units.'
    },
    {
      title: 'Yas Trunk Sewerage Network',
      category: 'HDPE Pipelines',
      location: 'Yas North Corridor, Abu Dhabi',
      specs: 'DN 1200mm PE100 • PN16 Rating',
      image: '/images/123.jpeg',
      desc: 'Supply and butt-fusion pipe welding of high-density trunk lines, executed with computerized logs under water table dewatering constraints.'
    },
    {
      title: 'Katheri Family Logistics Complex',
      category: 'Infrastructure & Civils',
      location: 'Mussafah Industrial Area, Abu Dhabi',
      specs: 'Microsilica Castings • Epoxy Flooring',
      image: '/images/Matrix_project.jpeg',
      desc: 'Structural construction and civil works for commercial logistics facility. Heavy machinery plinth foundation casting and high-durability floor coating.'
    }
  ];

  return (
    <div className="w-full bg-app-bg py-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-app-card border border-app-border rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:border-brand-teal/30 group"
          >
            {/* Visual Image container */}
            <div className="h-56 bg-app-secondary overflow-hidden relative">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-app-card/90 backdrop-blur-xs border border-app-border px-2.5 py-1 rounded text-[8px] font-mono font-bold uppercase tracking-widest text-brand-teal">
                {proj.category}
              </div>
            </div>

            {/* Content card details */}
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-1.5 text-[10px] text-app-muted font-mono">
                <span>📍</span>
                <span>{proj.location}</span>
              </div>

              <h4 className="text-base font-heading font-extrabold text-app-fg uppercase tracking-tight group-hover:text-brand-teal transition-colors duration-200">
                {proj.title}
              </h4>

              <p className="text-xs text-app-muted font-light leading-relaxed">
                {proj.desc}
              </p>

              <div className="border-t border-app-border/60 pt-3 mt-4 flex justify-between items-center text-[9px] font-mono font-bold text-brand-gold uppercase tracking-wider">
                <span>SPECIFICATIONS:</span>
                <span>{proj.specs}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
