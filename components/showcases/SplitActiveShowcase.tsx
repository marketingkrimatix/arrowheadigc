'use client';

import React, { useState } from 'react';

interface TabItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  spec1: string;
  spec2: string;
  image: string;
}

export default function SplitActiveShowcase() {
  const [activeTab, setActiveTab] = useState('pipelines');

  const tabs: TabItem[] = [
    {
      id: 'pipelines',
      category: '01 / PRESSURE UTILITIES',
      title: 'HDPE Water & Sewer Pipelines',
      desc: 'Trenchless directional drilling and butt-fusion welding for municipal water pressure networks.',
      spec1: 'ADSSC & ADDC Standard Compliance',
      spec2: 'Pipeline Scopes: DN 110mm to DN 1200mm',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'villas',
      category: '02 / CIVIL STRUCTURAL',
      title: 'Luxury Turnkey Villa Contracting',
      desc: 'High-end design-build contracting, structural castings, and Estidama certifications.',
      spec1: 'ADM Municipality Building Permits',
      spec2: 'Estidama Green Building Rating Compliant',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'fm',
      category: '03 / BUILDING LIFECYCLE',
      title: 'Facility Maintenance AMCs',
      desc: 'Structured preventative care programs for HVAC, main DB boards, plumbing, and safety lines.',
      spec1: 'SLA Dispatched Under 4 Hours',
      spec2: 'DB Board Thermography & Chemical Coil Wash',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'marine',
      category: '04 / HEAVY INDUSTRIAL',
      title: 'Marine Waterfront Restorations',
      desc: 'Drydock slipway repairs, concrete seawall restorations, and industrial port setups.',
      spec1: 'Microsilica C50/60 Corrosion Protection',
      spec2: 'EAD Environmental Approvals Coordination',
      image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const current = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <div className="w-full bg-app-bg text-app-fg py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Categories List */}
        <div className="lg:col-span-5 space-y-4">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onMouseEnter={() => setActiveTab(tab.id)}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-5 rounded-lg border transition-all duration-300 flex flex-col gap-1.5 focus:outline-none cursor-pointer ${
                  isActive 
                    ? 'bg-app-card border-brand-teal shadow-md shadow-brand-teal/5' 
                    : 'bg-transparent border-app-border hover:border-brand-teal/30 hover:bg-app-secondary/30'
                }`}
              >
                <span className={`text-[8px] font-mono tracking-widest uppercase font-bold ${isActive ? 'text-brand-teal' : 'text-app-muted'}`}>
                  {tab.category}
                </span>
                <h4 className={`text-sm font-heading font-extrabold tracking-tight ${isActive ? 'text-app-fg' : 'text-app-fg/80'}`}>
                  {tab.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Right Column: Dynamic Large Image Visualizer */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-app-border bg-app-secondary shadow-2xl group">
            {/* Visual Image */}
            <img 
              src={current.image} 
              alt={current.title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out" 
            />
            
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            
            {/* Overlay Specs & Text */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
              <span className="inline-block bg-brand-teal text-primary-dark text-[8px] font-mono font-bold tracking-widest px-2.5 py-1 rounded">
                ACTIVE FOCUS
              </span>
              <h3 className="text-xl font-heading font-extrabold tracking-tight">
                {current.title}
              </h3>
              <p className="text-xs text-white/80 font-light leading-relaxed max-w-lg">
                {current.desc}
              </p>
              
              {/* Spec points */}
              <div className="flex flex-wrap gap-4 pt-2 border-t border-white/10 text-[9px] font-mono text-brand-gold uppercase tracking-wider">
                <span>• {current.spec1}</span>
                <span>• {current.spec2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
