'use client';

import React, { useState } from 'react';

interface MaterialPaletteItem {
  color: string;
  name: string;
  code: string;
}

interface MoodProject {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  photo: string;
  specs: { label: string; value: string }[];
  materialName: string;
  materialType: 'marble' | 'hdpe' | 'steel';
  palette: MaterialPaletteItem[];
  scopes: string[];
}

export default function GeographicMapExplorer() {
  const [activeProject, setActiveProject] = useState<string>('saadiyat');

  const projects: MoodProject[] = [
    {
      id: 'saadiyat',
      title: 'Saadiyat Island Cultural District Estate',
      category: 'Luxury Villa & Custom Interior',
      location: 'Saadiyat Island, Abu Dhabi',
      description: 'A bespoke contemporary villa focusing on structural durability and luxury stone finishes. The design centers around local Estidama Pearl parameters, integrating thermal insulation wraps with massive natural Italian marble surfaces.',
      photo: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      materialName: 'Calacatta Lincoln Extra Vein Marble',
      materialType: 'marble',
      specs: [
        { label: 'Foundation concrete', value: 'C50/60 Sulfate Resistant' },
        { label: 'Estidama Rating', value: '2-Pearl Envelope Rating' },
        { label: 'Interior Cladding', value: 'Carrara & Lincoln Bookmatch' }
      ],
      palette: [
        { color: '#F7F4EB', name: 'Alabaster Plaster', code: 'AH-AP-01' },
        { color: '#D4C5B9', name: 'Travertine Accent', code: 'AH-TR-05' },
        { color: '#4E5357', name: 'Basalt Structure', code: 'AH-BS-09' }
      ],
      scopes: [
        'Municipal certified structural pile casting',
        'Dry-cladding stainless steel anchor fittings',
        'VRF concealed HVAC integration for zero ceiling bulkhead lines',
        'Custom joinery utilizing marine-grade structural plywood'
      ]
    },
    {
      id: 'yas',
      title: 'Yas Island Main Infrastructure Trunk',
      category: 'HDPE Pipeline Supply & Installation',
      location: 'Yas North Sector, Abu Dhabi',
      description: 'A major infrastructure sewer network loop designed for high-stress municipal tie-ins. The project showcases high-density polyethylene pipe fusion under severe water table conditions, using computerized parameters for structural joints.',
      photo: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      materialName: 'HDPE PE100-RC High Density Polyethylene',
      materialType: 'hdpe',
      specs: [
        { label: 'Pipe Dimensions', value: 'DN 1200mm Outer Diameter' },
        { label: 'SDR Dimension Ratio', value: 'SDR 11 (PN16 Pressure Load)' },
        { label: 'Welding Protocol', value: 'DVS 2207 Computer Parameter Log' }
      ],
      palette: [
        { color: '#1B1E21', name: 'Polyethylene Black', code: 'PE100-RC' },
        { color: '#C86400', name: 'Utility Marking Orange', code: 'AH-UT-12' },
        { color: '#5C6063', name: 'Shoring Sheet Steel', code: 'AH-SH-44' }
      ],
      scopes: [
        'Computerized butt-fusion hydraulic welding logs',
        'Hydrostatic loop tests certified at 10 Bar pressure',
        'Trenchless Horizontal Directional Drilling road crossing alignments',
        'Acid-resistant epoxy lining inside concrete manholes'
      ]
    },
    {
      id: 'mussafah',
      title: 'Mussafah Commercial Logistics Plant',
      category: 'Industrial fit-Out & Hard FM AMC',
      location: 'Mussafah Port Channels, Abu Dhabi',
      description: 'A production logistics facility prioritizing structural metal framing and HVAC chiller longevity. Built to endure high salinity and ambient temperatures, featuring annual preventive maintenance checklists.',
      photo: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80',
      materialName: 'Galvanized Sheet Steel HVAC Ducting',
      materialType: 'steel',
      specs: [
        { label: 'HVAC Chiller Load', value: 'Chilled Water Loop System' },
        { label: 'DB Board Monitoring', value: 'Infrared Thermography Scan AMC' },
        { label: 'Duct Specifications', value: 'Double-Skin GI Ducting GI-180' }
      ],
      palette: [
        { color: '#A0A7AC', name: 'Brushed Aluminum', code: 'AH-AL-88' },
        { color: '#D4AF37', name: 'Electrical Copper Core', code: 'AH-CU-02' },
        { color: '#1E2D38', name: 'Anti-Rust Polyurea Slate', code: 'AH-AR-77' }
      ],
      scopes: [
        'AC Chiller plant condenser coil chemical washing logs',
        'Main distribution board phase load balancing surveys',
        'Sulfate-resistant slipway structural concrete casts',
        'ADCD (Civil Defense) wet riser check compliance sign-offs'
      ]
    }
  ];

  const current = projects.find(p => p.id === activeProject) || projects[0];

  return (
    <div className="w-full bg-app-bg text-app-fg py-8 max-w-6xl mx-auto">
      
      {/* 1. Category Switcher Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-app-border/60 pb-6 mb-8 justify-center">
        {projects.map((proj) => (
          <button
            key={proj.id}
            onClick={() => setActiveProject(proj.id)}
            className={`px-6 py-3.5 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
              activeProject === proj.id
                ? 'bg-brand-teal text-primary-dark border-brand-teal shadow-lg shadow-brand-teal/10'
                : 'bg-app-card border-app-border text-app-muted hover:text-app-fg hover:border-brand-teal/45'
            }`}
          >
            {proj.title.split(' ')[0]} - {proj.category.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* 2. Tactile Mood Board Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Visual Material & Color Palette (Tactile mood board) */}
        <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
          
          {/* Main Photo Frame */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-app-border bg-app-secondary shadow-2xl group">
            <img
              src={current.photo}
              alt={current.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            />
            {/* Visual gradient wash */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
              <div className="space-y-1">
                <span className="text-[8px] font-mono text-brand-gold uppercase tracking-widest font-bold block">
                  PHYSICAL HANDOVER STATE
                </span>
                <h4 className="text-sm font-heading font-extrabold tracking-tight uppercase">
                  {current.title}
                </h4>
              </div>
            </div>
          </div>

          {/* Tactile Material Sample Block */}
          <div className="bg-app-card border border-app-border rounded-2xl p-6 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-between min-h-[220px]">
            {/* Accent paper texture/grid watermark */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none"></div>
            
            <div className="space-y-2 relative z-10">
              <span className="block text-[8px] font-mono text-app-muted uppercase tracking-widest font-bold">
                MATERIAL SAMPLE VEIN
              </span>
              <h5 className="text-sm font-heading font-extrabold uppercase text-app-fg">
                {current.materialName}
              </h5>
            </div>

            {/* Material Texture Renders (CSS/SVG based) */}
            <div className="w-full h-24 rounded-lg border border-app-border/75 my-4 relative overflow-hidden flex items-center justify-center bg-app-secondary/35">
              
              {current.materialType === 'marble' && (
                <div className="absolute inset-0 bg-white dark:bg-slate-900 transition-colors">
                  {/* Calacatta Lincoln Marble Veins via SVG */}
                  <svg className="absolute inset-0 w-full h-full text-slate-300 dark:text-slate-800" fill="none">
                    <path d="M -10,30 Q 80,45 120,30 T 260,80 T 380,40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 50,-10 Q 120,40 180,60 T 320,110" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                    <path d="M 190,20 Q 240,15 280,30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                  </svg>
                  <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/5 pointer-events-none"></div>
                </div>
              )}

              {current.materialType === 'hdpe' && (
                <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                  {/* HDPE Dual-Wall pipe cross-section */}
                  <svg className="w-20 h-20 text-zinc-700 overflow-visible" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#C86400" strokeWidth="0.8" strokeDasharray="3 3" />
                    <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="1" />
                    <circle cx="50" cy="50" r="2" fill="#C86400" />
                    {/* Measurement tags */}
                    <text x="50" y="46" textAnchor="middle" fill="#888" className="text-[5.5px] font-mono">DN 1200</text>
                    <text x="50" y="58" textAnchor="middle" fill="#888" className="text-[5.5px] font-mono">SDR-11</text>
                  </svg>
                </div>
              )}

              {current.materialType === 'steel' && (
                <div className="absolute inset-0 bg-slate-200 dark:bg-zinc-800 flex items-center justify-center p-4">
                  {/* Galvanized HVAC vent layout */}
                  <div className="w-full h-full flex flex-col justify-around relative opacity-60">
                    <div className="h-2 w-full bg-slate-400 dark:bg-zinc-700 rounded-sm border border-slate-500/20"></div>
                    <div className="h-2 w-full bg-slate-400 dark:bg-zinc-700 rounded-sm border border-slate-500/20"></div>
                    <div className="h-2 w-full bg-slate-400 dark:bg-zinc-700 rounded-sm border border-slate-500/20"></div>
                    <div className="h-2 w-full bg-slate-400 dark:bg-zinc-700 rounded-sm border border-slate-500/20"></div>
                  </div>
                </div>
              )}

              <span className="absolute bottom-2 right-2 text-[8px] font-mono text-app-muted uppercase font-bold bg-app-card px-2 py-0.5 rounded border border-app-border">
                {current.materialType === 'marble' ? 'Stoneware' : current.materialType === 'hdpe' ? 'Pipeline' : 'Sheet Metal'}
              </span>
            </div>

            {/* Color Swatch palette block */}
            <div className="border-t border-app-border/60 pt-4 flex justify-around gap-4">
              {current.palette.map((swatch, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5">
                  <div 
                    className="w-8 h-8 rounded-full border border-app-border shadow-md"
                    style={{ backgroundColor: swatch.color }}
                  ></div>
                  <div className="text-center font-mono text-[7px]">
                    <span className="block text-app-fg font-bold tracking-tight">{swatch.name}</span>
                    <span className="block text-app-muted/70">{swatch.code}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Right Column: Technical Specs & Handover Checklists */}
        <div className="lg:col-span-6 bg-app-card border border-app-border rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between self-stretch">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[8px] font-mono text-brand-gold uppercase tracking-widest font-bold block">
                PROJECT CLASSIFICATION &amp; DETAILS
              </span>
              <h3 className="text-xl font-heading font-extrabold text-app-fg uppercase tracking-tight">
                {current.category}
              </h3>
              <p className="text-xs text-app-muted leading-relaxed font-light">
                {current.description}
              </p>
            </div>

            {/* Specifications fact blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-app-border/70 py-6">
              {current.specs.map((spec, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block text-[8px] font-mono text-app-muted uppercase font-bold tracking-wider">
                    {spec.label}
                  </span>
                  <span className="block text-xs font-bold text-app-fg leading-tight">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Scope of Work Bullet checklist */}
            <div className="space-y-3">
              <span className="block text-[9px] font-mono text-brand-teal uppercase tracking-widest font-bold">
                Contractual Scope of Work
              </span>
              <ul className="space-y-2.5">
                {current.scopes.map((scope, idx) => (
                  <li key={idx} className="flex items-start text-xs text-app-fg font-light leading-relaxed">
                    {/* Golden check icon */}
                    <span className="text-brand-teal mr-2 font-bold select-none">✓</span>
                    <span>{scope}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-app-border/60 mt-8">
            <a
              href={`/contact?rfq=true&ref=moodboard&project=${current.id}`}
              className="w-full text-center inline-flex items-center justify-center px-6 py-4 rounded bg-brand-teal hover:bg-brand-teal-hover text-primary-dark font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-brand-teal/15 transition-all duration-300 cursor-pointer"
            >
              Request Material Specifications Bid →
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
