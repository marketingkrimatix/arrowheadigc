'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Hotspot {
  id: string;
  name: string;
  cx: number;
  cy: number;
  category: string;
  projectName: string;
  coordinates: string;
  scope: string;
  spec: string;
  licensing: string;
  href: string;
  image: string;
}

export default function MapExplorerWidget() {
  const [activeLocationId, setActiveLocationId] = useState<string>('yas');

  const hotspots: Hotspot[] = [
    {
      id: 'saadiyat',
      name: 'Saadiyat Island',
      cx: 120,
      cy: 40,
      category: 'Residential Luxury',
      projectName: 'Saadiyat Beach Residence Estate',
      coordinates: '24.532° N, 54.437° E',
      scope: 'Design-Build custom estate villa, structural rafts, low-permeability SRC concrete casting, double-layer bituminous tanking, and premium Calacatta dry cladding Facades.',
      spec: 'BUA: 12,500 SQ FT • C50 concrete, low-E glass (U-Value < 1.4)',
      licensing: 'Estidama 3-Pearl compliance & TAMM approvals certified',
      href: '/locations/saadiyat-island',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'yas',
      name: 'Yas Island',
      cx: 260,
      cy: 60,
      category: 'Infrastructure & Utilities',
      projectName: 'Yas Trunk Sewerage Connection',
      coordinates: '24.498° N, 54.605° E',
      scope: 'Deep utility trenching under high saline water tables. Excavation shoring, laying DN 1200mm PE100 gravity sewers, certified butt-welding (DVS 2207), and ADSSC inspector signoff.',
      spec: 'DN 1200mm HDPE • Hydrostatic Pressure check PN16',
      licensing: 'ADSSC Utility standards compliant & ADM NOC cleared',
      href: '/locations/yas-island',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'alraha',
      name: 'Al Raha Beach',
      cx: 190,
      cy: 110,
      category: 'Waterfront Civil Works',
      projectName: 'Al Raha Cove Handovers',
      coordinates: '24.441° N, 54.572° E',
      scope: 'Turnkey residential engineering for waterfront luxury villas. Specialized pile foundation anchor verification, waterproof envelope seals, and integrated VRF HVAC layouts.',
      spec: 'BUA: 8,400 SQ FT • Bored Piles verification, VRF heat transfer loops',
      licensing: 'ADDC Connected Load cleared & ADM Occupancy certified',
      href: '/locations/al-raha',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'khalifa',
      name: 'Khalifa City',
      cx: 220,
      cy: 180,
      category: 'Renovations & Structural',
      projectName: 'Khalifa City Villa Extensions',
      coordinates: '24.415° N, 54.588° E',
      scope: 'Structural additions to existing residential villa layouts. Excavating foundation extensions, structural columns tie-ins, Majlis builds, and boundary walls.',
      spec: 'Post-Tensioned concrete slabs, SRC cement, hollow thermal blocks',
      licensing: 'ADM Building permit NOC & DED commercial registration',
      href: '/locations/khalifa-city',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'mussafah',
      name: 'Mussafah Industrial',
      cx: 90,
      cy: 220,
      category: 'Industrial & Hard FM',
      projectName: 'Mussafah Logistics Hub Maintenance',
      coordinates: '24.364° N, 54.491° E',
      scope: 'Hard Facilities Management (FM) and mechanical retrofits. Replacing primary air handling units (AHU), balancing chiller water feeds, and performing thermal imaging DB load scans.',
      spec: 'Chiller loop AMC balancing, ABB switchboard load checks',
      licensing: 'Civil Defense (ADCD) NFPA-13 certified & ADDC approved',
      href: '/locations/mussafah',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const activeLoc = hotspots.find((h) => h.id === activeLocationId) || hotspots[0];

  return (
    <div className="w-full bg-app-card border border-app-border rounded-2xl p-6 sm:p-8 shadow-xl text-left max-w-3xl mx-auto font-sans">
      <div className="flex justify-between items-start border-b border-app-border pb-4 mb-6">
        <div>
          <span className="text-[8px] font-mono text-brand-gold font-bold uppercase tracking-widest block">
            GEOGRAPHIC GEOTARGETED FOOTPRINT
          </span>
          <h3 className="text-base font-heading font-extrabold text-white uppercase tracking-wider mt-0.5">
            Abu Dhabi Project Hotspot Explorer
          </h3>
        </div>
        <span className="bg-brand-teal/10 border border-brand-teal/30 px-2 py-0.5 rounded text-[8px] font-mono font-bold text-brand-teal tracking-widest uppercase">
          5 ACTIVE ZONES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Styled Interactive SVG Map */}
        <div className="lg:col-span-5 bg-app-secondary border border-app-border rounded-xl p-4 flex flex-col justify-between items-center relative overflow-hidden select-none min-h-[260px]">
          <span className="absolute top-2 left-3 text-[6px] font-mono text-app-muted uppercase">Stylized Coastline &amp; Channels</span>
          
          <svg width="100%" height="100%" viewBox="0 0 350 260" className="text-app-muted/20 overflow-visible relative z-10 w-full max-w-[280px]">
            {/* Outline of Abu Dhabi landmass islands (highly stylized curves) */}
            <path 
              d="M 10 200 C 60 210, 80 190, 100 200 C 130 215, 140 180, 160 170 C 180 160, 200 190, 230 170 C 260 150, 270 120, 290 100 C 310 80, 330 90, 340 70" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeDasharray="4 4"
            />
            {/* Saadiyat land block */}
            <path d="M 60 30 Q 110 20, 140 50 Q 100 70, 60 30 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            
            {/* Yas land block */}
            <path d="M 230 40 Q 280 30, 280 80 Q 240 90, 230 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />

            {/* Grid grid lines backdrop */}
            <line x1="50" y1="0" x2="50" y2="260" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
            <line x1="150" y1="0" x2="150" y2="260" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
            <line x1="250" y1="0" x2="250" y2="260" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
            <line x1="0" y1="80" x2="350" y2="80" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
            <line x1="0" y1="170" x2="350" y2="170" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />

            {/* Pulsating Hotspot nodes */}
            {hotspots.map((spot) => (
              <g 
                key={spot.id} 
                className="cursor-pointer"
                onClick={() => setActiveLocationId(spot.id)}
              >
                {/* Ping ring */}
                {activeLocationId === spot.id && (
                  <circle cx={spot.cx} cy={spot.cy} r="12" className="fill-brand-teal/20 stroke-brand-teal/40 animate-ping" />
                )}
                {/* Outer ring */}
                <circle 
                  cx={spot.cx} 
                  cy={spot.cy} 
                  r="6" 
                  fill="none" 
                  stroke={activeLocationId === spot.id ? '#00A8C6' : '#C5A880'} 
                  strokeWidth="1.5" 
                />
                {/* Center dot */}
                <circle 
                  cx={spot.cx} 
                  cy={spot.cy} 
                  r="3.5" 
                  fill={activeLocationId === spot.id ? '#00A8C6' : '#C5A880'} 
                />
                {/* Labels */}
                <text 
                  x={spot.cx} 
                  y={spot.cy - 10} 
                  textAnchor="middle" 
                  className={`font-mono text-[7px] tracking-wider uppercase font-bold ${
                    activeLocationId === spot.id ? 'fill-brand-teal' : 'fill-app-muted'
                  }`}
                >
                  {spot.name.split(' ')[0]}
                </text>
              </g>
            ))}
          </svg>

          <span className="text-[7px] text-app-muted font-mono italic text-center select-none">
            Tapping nodes on the grid reloads case details.
          </span>
        </div>

        {/* Right Column: Dynamic Project Info Card */}
        <div className="lg:col-span-7 bg-app-secondary/30 border border-app-border rounded-xl p-5 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <span className="bg-brand-gold/15 border border-brand-gold/30 px-2 py-0.5 rounded text-[8px] font-mono font-bold text-brand-gold tracking-widest">
                {activeLoc.category}
              </span>
              <span className="text-[8px] font-mono text-app-muted">{activeLoc.coordinates}</span>
            </div>

            <div className="space-y-0.5">
              <span className="text-[7px] font-mono text-app-muted uppercase tracking-widest block font-bold">REPRESENTATIVE PROJECT</span>
              <h4 className="text-xs sm:text-sm font-heading font-extrabold text-white uppercase tracking-wider">
                {activeLoc.projectName}
              </h4>
            </div>

            <p className="text-app-muted text-xs leading-relaxed font-light">
              {activeLoc.scope}
            </p>
          </div>

          <div className="space-y-2 border-t border-app-border/60 pt-3 text-[9px] font-mono">
            <div className="flex justify-between">
              <span className="text-app-muted">Technical Spec:</span>
              <span className="text-white font-bold text-right">{activeLoc.spec}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-app-muted">Municipal NOC Status:</span>
              <span className="text-brand-teal font-bold text-right">✓ {activeLoc.licensing}</span>
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-app-border/40 pt-3">
            <span className="text-[8px] font-mono text-app-muted">ACTIVE FOOTPRINT: {activeLoc.name}</span>
            <Link
              href={activeLoc.href}
              className="inline-flex items-center text-[10px] font-bold text-brand-teal hover:text-brand-teal-hover transition-colors uppercase tracking-wider font-heading"
            >
              <span>Explore Neighborhood Hub</span>
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
