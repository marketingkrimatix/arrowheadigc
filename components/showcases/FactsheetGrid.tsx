'use client';

import React, { useState } from 'react';

interface FactsheetItem {
  id: string;
  name: string;
  location: string;
  value: string;
  material: string;
  authority: string;
  safetyHours: string;
  completion: string;
  image: string;
  logs: string[];
}

export default function FactsheetGrid() {
  const [activeIdx, setActiveIdx] = useState(0);

  const projects: FactsheetItem[] = [
    {
      id: '01',
      name: 'Yas Island Main Water Loop Extension',
      location: 'Yas Island North, Abu Dhabi',
      value: 'AED 14.8M',
      material: 'PE100 HDPE (SDR11, DN 1200mm)',
      authority: 'ADSSC / ADDC Certified',
      safetyHours: '45,000 LTI-Free Hours',
      completion: '100% Handover Complete',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      logs: [
        'Thermoplastic welding butt-fusion data logs submitted',
        'Hydrostatic pressure testing certified at 16 Bar',
        'ADM road crossing micro-tunneling approved'
      ]
    },
    {
      id: '02',
      name: 'Saadiyat Cultural District Substation',
      location: 'Saadiyat Island, Abu Dhabi',
      value: 'AED 22.1M',
      material: 'C50/60 Concrete & GI Ducting',
      authority: 'Civil Defense (ADCD) Approved',
      safetyHours: '82,000 LTI-Free Hours',
      completion: 'Under Civil Construction (85%)',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      logs: [
        'Compressive strength tests verified: 62.5 MPa at 28 days',
        'Double-skin GI duct route installations finalized',
        'ADDC transformer room layout clearances obtained'
      ]
    },
    {
      id: '03',
      name: 'Mussafah Port Marine Slipway Repair',
      location: 'Industrial Port Area, Abu Dhabi',
      value: 'AED 9.2M',
      material: 'Corrosion-Resistant Polyurea & Cathodic Protection',
      authority: 'Environment Agency (EAD) Coordinated',
      safetyHours: '31,000 LTI-Free Hours',
      completion: '100% Handover Complete',
      image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80',
      logs: [
        'Saline splash-zone epoxy pressure spray inspection passed',
        'Underwater concrete cracking epoxy injection seal verification',
        'Sacrificial zinc anode installation log registered'
      ]
    },
    {
      id: '04',
      name: 'Al Raha Gardens Luxury Residential Villa',
      location: 'Al Raha, Abu Dhabi',
      value: 'AED 11.5M',
      material: 'Estidama 2-Pearl Casts & Marble Finishes',
      authority: 'Abu Dhabi Municipality (ADM) Occupancy',
      safetyHours: '56,000 LTI-Free Hours',
      completion: '100% Handover Complete',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      logs: [
        'Estidama green building heat insulation rating cleared',
        'Abu Dhabi Civil Defense firefighting system compliance cert',
        'Custom marble book-matching layout signoff'
      ]
    },
    {
      id: '05',
      name: 'Khalifa City Sector 14 Sewer Reticulation',
      location: 'Khalifa City, Abu Dhabi',
      value: 'AED 18.2M',
      material: 'HDPE Gravity Mains & Concrete Manholes',
      authority: 'ADSSC Approval Loop',
      safetyHours: '95,000 LTI-Free Hours',
      completion: 'In-Progress (60%)',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80',
      logs: [
        'Gravity sewer deflection test passed (DN 800)',
        'Shoring and deep well dewatering controls checked daily',
        'Concrete manhole internal epoxy lining inspection completed'
      ]
    }
  ];

  const current = projects[activeIdx];

  return (
    <div className="w-full bg-app-bg text-app-fg py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Interactive Row List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="hidden sm:grid grid-cols-12 px-4 pb-2 border-b border-app-border text-[10px] font-mono text-app-muted uppercase tracking-widest font-bold">
            <div className="col-span-1">ID</div>
            <div className="col-span-6">Project Specification</div>
            <div className="col-span-3">Location</div>
            <div className="col-span-2 text-right">Contract</div>
          </div>

          <div className="space-y-2">
            {projects.map((proj, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={proj.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className={`grid grid-cols-1 sm:grid-cols-12 items-center p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-app-secondary border-brand-teal shadow-md shadow-brand-teal/5'
                      : 'bg-app-card border-app-border hover:border-brand-teal/40 hover:bg-app-secondary/30'
                  }`}
                >
                  <div className="col-span-1 font-mono text-xs font-bold text-brand-teal">
                    {proj.id}
                  </div>
                  
                  <div className="col-span-6 pr-4 mt-1 sm:mt-0">
                    <span className="block text-xs font-mono text-brand-gold uppercase tracking-wider font-bold">
                      {proj.material.split(' (')[0]}
                    </span>
                    <h4 className="text-sm font-heading font-extrabold tracking-tight mt-0.5">
                      {proj.name}
                    </h4>
                  </div>

                  <div className="col-span-3 mt-2 sm:mt-0">
                    <span className="inline-flex sm:hidden text-[9px] font-mono text-app-muted mr-1.5 uppercase font-bold">
                      Loc:
                    </span>
                    <span className="text-xs text-app-muted font-light">{proj.location.split(',')[0]}</span>
                  </div>

                  <div className="col-span-2 text-left sm:text-right mt-1 sm:mt-0">
                    <span className="inline-flex sm:hidden text-[9px] font-mono text-app-muted mr-1.5 uppercase font-bold">
                      Val:
                    </span>
                    <span className="text-xs font-mono font-bold text-brand-teal">
                      {proj.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Visual Blueprint & Factsheet Inspector */}
        <div className="lg:col-span-5 bg-app-card border border-app-border rounded-xl p-6 shadow-xl sticky top-6">
          <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-app-secondary border border-app-border mb-6 group">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div>
                <span className="block text-[8px] font-mono text-brand-gold uppercase tracking-widest font-bold">
                  PROJECT INSPECTOR
                </span>
                <span className="text-xs font-mono text-white font-bold">
                  {current.authority}
                </span>
              </div>
              <span className="text-[10px] font-mono bg-brand-teal text-primary-dark px-2.5 py-0.5 rounded font-bold uppercase">
                {current.completion}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-start border-b border-app-border pb-3">
              <div>
                <span className="block text-[9px] font-mono text-app-muted uppercase tracking-wider font-bold">
                  Scope Materialization
                </span>
                <span className="text-sm font-heading font-extrabold text-app-fg">
                  {current.material}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[9px] font-mono text-app-muted uppercase tracking-wider font-bold">
                  Safety Record
                </span>
                <span className="text-xs font-mono text-brand-teal font-bold whitespace-nowrap">
                  {current.safetyHours}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="block text-[9px] font-mono text-brand-gold uppercase tracking-widest font-bold">
                Quality & Verification Logs
              </span>
              <ul className="space-y-2">
                {current.logs.map((log, idx) => (
                  <li key={idx} className="flex items-start text-xs text-app-muted leading-relaxed font-light">
                    <span className="text-brand-teal mr-2 font-bold select-none">•</span>
                    <span>{log}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
