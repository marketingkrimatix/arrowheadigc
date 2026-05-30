'use client';

import React, { useState } from 'react';

interface Phase {
  num: string;
  name: string;
  milestone: string;
  date: string;
  image: string;
  specs: string[];
  refCode: string;
}

export default function BuildTimelineShowcase() {
  const [activePhase, setActivePhase] = useState(0);

  const phases: Phase[] = [
    {
      num: '01',
      name: 'Excavation & Shoring',
      milestone: 'Site clearing, sheet pile driving, and foundation shoring.',
      date: 'Months 1 - 2',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      specs: ['Soil compaction test compliant', 'IS 2911 piling layouts approved', '2.4m shoring safety barriers active'],
      refCode: 'ADM-SEC-SHORE-24'
    },
    {
      num: '02',
      name: 'Structural Concrete Casting',
      milestone: 'Reinforced concrete pouring for rafts, columns, and slabs.',
      date: 'Months 3 - 6',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      specs: ['Concrete Grade: C50/60 Microsilica', 'Raft slab reinforcement verified', 'Core cylinder compression checks done'],
      refCode: 'ADM-SEC-CONC-88'
    },
    {
      num: '03',
      name: 'HDPE Pipeline Installation',
      milestone: 'Laying pressure networks with certified butt-fusion joints.',
      date: 'Months 7 - 8',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      specs: ['Butt-fusion log output logged', 'Hydrostatic testing at PN16 rating', 'ADSSC standards compliant'],
      refCode: 'ADSSC-PIPE-DN1200'
    },
    {
      num: '04',
      name: 'Specialized MEP Routing',
      milestone: 'HVAC double-skin GI ducting and primary distribution boards dressing.',
      date: 'Months 9 - 10',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80',
      specs: ['ADCD Civil Defense approved loops', 'ADDC electrical installation certs', 'HVAC chiller balancing done'],
      refCode: 'ADCD-MEP-HVAC-99'
    },
    {
      num: '05',
      name: 'Finished Handover',
      milestone: 'Luxury marble masons, custom joinery, and Estidama sign-offs.',
      date: 'Months 11 - 12',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      specs: ['Estidama 2-Pearl rating clearance', 'Municipal occupancy certificate updates', 'Technical B2B files handover'],
      refCode: 'ADM-HAND-ESTIDAMA'
    }
  ];

  const current = phases[activePhase];

  return (
    <div className="w-full bg-app-bg text-app-fg py-12 max-w-6xl mx-auto">
      {/* 1. Timeline Header node indicators */}
      <div className="relative flex justify-between items-center mb-16 px-4">
        {/* Horizontal Line background */}
        <div className="absolute left-8 right-8 top-[14px] h-[2px] bg-app-border z-0"></div>
        
        {/* Progress Fill Line */}
        <div 
          className="absolute left-8 top-[14px] h-[2px] bg-brand-teal z-0 transition-all duration-500 ease-out"
          style={{ width: `${(activePhase / (phases.length - 1)) * 90}%` }}
        ></div>

        {phases.map((phase, idx) => {
          const isActive = idx === activePhase;
          const isCompleted = idx < activePhase;
          return (
            <button
              key={idx}
              onMouseEnter={() => setActivePhase(idx)}
              onClick={() => setActivePhase(idx)}
              className="relative z-10 flex flex-col items-center group focus:outline-none cursor-pointer"
            >
              {/* Circular Node */}
              <div 
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono text-[10px] font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-brand-teal border-brand-teal text-primary-dark scale-110 shadow-lg shadow-brand-teal/20' 
                    : isCompleted 
                      ? 'bg-app-card border-brand-teal text-brand-teal' 
                      : 'bg-app-card border-app-border text-app-muted hover:border-brand-teal/40'
                }`}
              >
                {phase.num}
              </div>
              {/* Short Label underneath */}
              <span className={`hidden md:block absolute top-10 whitespace-nowrap text-[9px] font-mono uppercase tracking-wider font-bold transition-colors ${
                isActive ? 'text-brand-teal' : 'text-app-muted'
              }`}>
                {phase.name.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* 2. Visual Split content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-app-secondary/35 rounded-xl border border-app-border p-8 mt-12">
        
        {/* Left: Dynamic Image Frame */}
        <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-app-border bg-app-secondary shadow-lg">
          <img 
            src={current.image} 
            alt={current.name} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
            <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest font-bold">
              PHASE {current.num}
            </span>
            <span className="text-[10px] font-mono bg-brand-teal/25 backdrop-blur-xs px-2.5 py-0.5 rounded border border-brand-teal/20 text-brand-teal uppercase font-bold">
              {current.date}
            </span>
          </div>
        </div>

        {/* Right: Technical Log Details */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="block text-[8px] font-mono text-brand-teal uppercase tracking-widest font-bold">
              STAGE REFERENCE CODE: {current.refCode}
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold tracking-tight">
              {current.name}
            </h3>
            <p className="text-xs text-app-muted font-light leading-relaxed">
              {current.milestone}
            </p>
          </div>

          <div className="space-y-3 border-t border-app-border/60 pt-4">
            <span className="block text-[9px] font-mono text-brand-gold uppercase tracking-widest font-bold">
              Stage Quality Checks
            </span>
            <ul className="space-y-2">
              {current.specs.map((spec, idx) => (
                <li key={idx} className="flex items-start text-xs text-app-fg/80 font-light">
                  <span className="text-brand-teal mr-2 font-bold">✓</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
