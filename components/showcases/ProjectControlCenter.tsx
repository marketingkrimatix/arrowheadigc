'use client';

import React, { useState } from 'react';

interface SwatchItem {
  id: string;
  name: string;
  category: string;
  colorHex: string;
  image: string;
  label: string;
  specs: { label: string; value: string }[];
  description: string;
  compliance: string;
}

export default function ProjectControlCenter() {
  const [activeSwatch, setActiveSwatch] = useState<string>('marble');

  const swatches: SwatchItem[] = [
    {
      id: 'marble',
      name: 'Calacatta Lincoln Premium Stone',
      category: 'Villa Interiors & Masonry Cladding',
      colorHex: '#F2EFE8',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      label: 'Luxury Finishing Spec',
      description: 'Bookmatched Calacatta Lincoln natural marble sheets selected for main majlis floor areas and staircase spans. Precision dry-lay layout with stainless steel expansion brackets ensures long-term fit under thermal changes.',
      compliance: 'Abu Dhabi Municipality Decorative Finishing Standards',
      specs: [
        { label: 'Slab Thickness', value: '20mm Nominal Calibrated' },
        { label: 'Origin Source', value: 'Carrara Region, Italy' },
        { label: 'Absorption Rate', value: '0.12% Maximum Load' },
        { label: 'Surface Finish', value: 'High Polished & Honeycomb Sealed' }
      ]
    },
    {
      id: 'concrete',
      name: 'Sulfate-Resistant C50/60 Concrete',
      category: 'Villa Foundations & Civil Works',
      colorHex: '#9CA1A6',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      label: 'Structural Civil Spec',
      description: 'High-strength C50/60 concrete containing microsilica to prevent groundwater salt ingress. Used for deep-well foundations, raft reinforcement, and load-bearing column casts in Khalifa City sectors.',
      compliance: 'Abu Dhabi Municipal Code for Structural Casting',
      specs: [
        { label: 'Compressive strength', value: '60 MPa verified at 28 days' },
        { label: 'Cement Classification', value: 'Type V Sulfate Resistant' },
        { label: 'Slump Retention', value: '120mm at point of discharge' },
        { label: 'Water-Cement Ratio', value: '0.34 Maximum' }
      ]
    },
    {
      id: 'hdpe',
      name: 'PE100-RC High Density Polyethylene',
      category: 'Utility Pipeline Supply & Weld Jointing',
      colorHex: '#1C1D1E',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
      label: 'Infrastructure Pipeline Spec',
      description: 'Dense black HDPE PE100-RC pipe sections designed for municipal water trunk supply and gravity sewers. Extremely resistant to crack propagation, joint-welded using computerized butt-fusion rigs.',
      compliance: 'ADSSC Standard Drawings and Specifications',
      specs: [
        { label: 'Pressure Rating', value: 'PN16 (16 Bar working load)' },
        { label: 'Material Composition', value: 'Virgin PE100 Polyethylene' },
        { label: 'SDR Ratio Class', value: 'SDR 11 Wall Density' },
        { label: 'Jointing Technology', value: 'Hydraulic Butt-Fusion Fusion' }
      ]
    },
    {
      id: 'hvac',
      name: 'Galvanized GI Steel Ducting',
      category: 'Mechanical Services & HVAC Installations',
      colorHex: '#B2B7BA',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=1200&q=80',
      label: 'MEP Specialized Systems',
      description: 'Double-skin galvanized steel air ducting insulated with fiberglass cores. Designed for commercial office blocks and chillers to ensure steady airflow while minimizing condensation leaks.',
      compliance: 'SMACNA Standards & Abu Dhabi Civil Defense Codes',
      specs: [
        { label: 'Sheet Thickness', value: 'GI Gauge 18 to 24' },
        { label: 'Thermal Resistance', value: 'R-Value 6.0 Insulation' },
        { label: 'Zinc Coating Density', value: 'G90 Galvanized Layer' },
        { label: 'SLA Response AMC', value: 'Preventive HVAC Quarterly check' }
      ]
    }
  ];

  const current = swatches.find(s => s.id === activeSwatch) || swatches[0];

  return (
    <div className="w-full bg-app-bg text-app-fg py-8 max-w-6xl mx-auto">
      <div className="bg-app-card border border-app-border rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: Magazine Spec Brochure Typography */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between self-stretch bg-app-secondary/20">
            <div className="space-y-6">
              
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 rounded-full font-bold uppercase tracking-widest inline-block">
                  {current.label}
                </span>
                <h4 className="text-xl sm:text-2xl font-heading font-extrabold text-app-fg uppercase tracking-tight leading-none mt-2">
                  {current.name}
                </h4>
                <span className="block text-[10.5px] font-mono text-app-muted">
                  Category: {current.category}
                </span>
              </div>

              <p className="text-xs text-app-muted leading-relaxed font-light">
                {current.description}
              </p>

              {/* Swatch Selector Row */}
              <div className="space-y-3 pt-4 border-t border-app-border/60">
                <span className="block text-[8px] font-mono text-app-muted uppercase tracking-widest font-bold">
                  SELECT PHYSICAL MATERIAL SAMPLE:
                </span>
                <div className="flex gap-4">
                  {swatches.map((sw) => (
                    <button
                      key={sw.id}
                      onClick={() => setActiveSwatch(sw.id)}
                      className={`relative w-10 h-10 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                        activeSwatch === sw.id
                          ? 'border-brand-teal scale-110 shadow-lg shadow-brand-teal/20 ring-2 ring-brand-teal/10'
                          : 'border-app-border opacity-70 hover:opacity-100 hover:scale-105'
                      }`}
                      style={{ backgroundColor: sw.colorHex }}
                      title={sw.name}
                    >
                      {activeSwatch === sw.id && (
                        <span className="absolute w-2 h-2 bg-brand-teal rounded-full"></span>
                      )}
                    </button>
                  ))}
                </div>
                <span className="block text-[9px] font-mono text-brand-teal uppercase font-bold tracking-tight">
                  Active Swatch: {current.name.split(' ')[0]}
                </span>
              </div>

            </div>

            {/* Compliance footnote */}
            <div className="border-t border-app-border/60 pt-6 mt-8">
              <span className="block text-[7.5px] font-mono text-app-muted uppercase tracking-wider">
                REGULATORY &amp; UTILITY ALIGNMENT
              </span>
              <span className="block text-[10.5px] font-bold text-app-fg mt-1">
                ✓ {current.compliance}
              </span>
            </div>

          </div>

          {/* Right Column: Editorial Large Photo & Spec Sheets */}
          <div className="lg:col-span-7 flex flex-col justify-between self-stretch">
            
            {/* Image viewport with crossfade transition */}
            <div className="relative aspect-[16/10] w-full bg-app-secondary border-b lg:border-b-0 border-app-border overflow-hidden">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover transition-all duration-700 ease-out scale-101"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4 bg-black/60 border border-white/10 px-3 py-1 rounded text-white text-[9px] font-mono tracking-widest font-bold uppercase">
                {activeSwatch === 'marble' ? 'Finishes' : activeSwatch === 'concrete' ? 'Civil Raft' : activeSwatch === 'hdpe' ? 'Piping Loop' : 'MEP Installation'}
              </div>
            </div>

            {/* Spec grid sheets */}
            <div className="p-8 bg-app-card grid grid-cols-2 gap-6 flex-1 items-center">
              {current.specs.map((sp, idx) => (
                <div key={idx} className="border-l-2 border-brand-teal/30 pl-4 space-y-1">
                  <span className="block text-[8px] font-mono text-app-muted uppercase tracking-wider">
                    {sp.label}
                  </span>
                  <span className="block text-xs font-bold text-app-fg leading-tight">
                    {sp.value}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
