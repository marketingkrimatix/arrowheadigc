'use client';

import React, { useState } from 'react';

interface ExplodeLayer {
  id: string;
  name: string;
  badge: string;
  color: string;
  bgClass: string;
  isCustomContent: boolean;
  image?: string;
  description: string;
}

interface Hotspot {
  id: string;
  top: string; // percentage
  left: string; // percentage
  layerId: string;
  title: string;
  desc: string;
}

export default function ExplodedViewInspector() {
  const [explodeSpacing, setExplodeSpacing] = useState(80); // translateZ spacing in pixels
  const [rotationAngle, setRotationAngle] = useState(-25); // rotateY angle in degrees
  const [activeLayers, setActiveLayers] = useState<string[]>(['blueprint', 'structure', 'mep', 'finish']);
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>('hs-1');

  const layers: ExplodeLayer[] = [
    {
      id: 'blueprint',
      name: 'Layer 1: CAD Blueprint Wireframe',
      badge: 'CAD DESIGN',
      color: 'text-brand-teal border-brand-teal/30',
      bgClass: 'bg-slate-950/90',
      isCustomContent: true,
      description: 'TAMM approved grid boundaries and elevation reference lines.'
    },
    {
      id: 'structure',
      name: 'Layer 2: Concrete & Column Frame',
      badge: 'CIVIL STRUCTURAL',
      color: 'text-brand-gold border-brand-gold/30',
      bgClass: 'bg-brand-gold/5 border-dashed',
      isCustomContent: true,
      description: 'C50/60 concrete rafts casting with high-tensile steel reinforcements.'
    },
    {
      id: 'mep',
      name: 'Layer 3: MEP & Pipeline Routing',
      badge: 'HVAC & MEP UTILITIES',
      color: 'text-purple-400 border-purple-500/30',
      bgClass: 'bg-purple-950/5',
      isCustomContent: true,
      description: 'Double-skin GI HVAC ducting balanced with DN1200 HDPE pressure loops.'
    },
    {
      id: 'finish',
      name: 'Layer 4: Finished Handover Photo',
      badge: 'COMPLETED BUILD',
      color: 'text-white border-white/20',
      bgClass: '',
      isCustomContent: false,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80',
      description: '2-Pearl Estidama rating certified luxury residential facade handover.'
    }
  ];

  const hotspots: Hotspot[] = [
    {
      id: 'hs-1',
      layerId: 'blueprint',
      top: '35%',
      left: '45%',
      title: 'Architectural Datum Pin',
      desc: 'Abu Dhabi Municipality layout datum point verified within ±2mm tolerance.'
    },
    {
      id: 'hs-2',
      layerId: 'structure',
      top: '60%',
      left: '30%',
      title: 'C50 Concrete Raft Slab',
      desc: '600mm thick concrete foundation with microsilica anti-corrosion compounds.'
    },
    {
      id: 'hs-3',
      layerId: 'mep',
      top: '45%',
      left: '65%',
      title: 'HVAC Chilled Water Loop',
      desc: 'Certified double-skin GI duct alignment balanced per ADDC utilities codes.'
    },
    {
      id: 'hs-4',
      layerId: 'finish',
      top: '25%',
      left: '50%',
      title: 'Estidama Envelope Rating',
      desc: 'High-performance insulation glazing reducing building HVAC load parameters.'
    }
  ];

  const toggleLayer = (id: string) => {
    setActiveLayers(prev => 
      prev.includes(id) 
        ? prev.filter(layerId => layerId !== id) 
        : [...prev, id]
    );
  };

  const activeHotspot = hotspots.find(hs => hs.id === selectedHotspot);

  return (
    <div className="w-full bg-app-bg text-app-fg py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-app-secondary/35 rounded-xl border border-app-border p-8">
        
        {/* Left: 3D Exploded-View Canvas Frame */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
          <div className="space-y-1">
            <span className="text-[9px] font-mono text-brand-gold uppercase tracking-widest font-bold">
              3D ISOMETRIC BIM INSPECTOR
            </span>
            <h3 className="text-xl font-heading font-extrabold uppercase tracking-tight text-app-fg">
              Villa Exploded-View Stack
            </h3>
            <p className="text-xs text-app-muted font-light">
              Toggle operational layers, adjust explode spacing (Z-depth), and orbit-rotate the assembly.
            </p>
          </div>

          {/* Isometric Perspective Stack Area */}
          <div 
            className="relative w-full aspect-[4/3] rounded-lg border border-app-border bg-slate-950 overflow-hidden flex items-center justify-center p-8 select-none"
            style={{ perspective: '1200px' }}
          >
            {/* Blueprint Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,168,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,168,198,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            {/* The 3D Rotational Assembly */}
            <div
              className="relative w-[280px] sm:w-[320px] aspect-[16/10] transition-transform duration-500 ease-out"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(55deg) rotateZ(${rotationAngle}deg)`
              }}
            >
              {layers.map((layer, idx) => {
                const isActive = activeLayers.includes(layer.id);
                // Active layers translate upward along Z axis based on spacing
                const translateZVal = isActive 
                  ? idx * explodeSpacing - (activeLayers.length * 15)
                  : 0;

                return (
                  <div
                    key={layer.id}
                    className={`absolute inset-0 border rounded-lg shadow-2xl transition-all duration-700 ease-out flex flex-col justify-between p-4 ${
                      layer.color
                    } ${layer.bgClass}`}
                    style={{
                      transform: `translateZ(${translateZVal}px)`,
                      opacity: isActive ? 1 : 0,
                      pointerEvents: isActive ? 'auto' : 'none',
                      transformStyle: 'preserve-3d',
                      zIndex: idx * 10
                    }}
                  >
                    {/* Render content based on layer type */}
                    {layer.isCustomContent ? (
                      <div className="w-full h-full flex flex-col justify-between font-mono text-[8px] relative">
                        {/* Grid lines */}
                        <div className="absolute inset-0 border border-white/5 bg-[radial-gradient(ellipse_at_center,rgba(0,168,198,0.05)_0%,transparent_80%)] rounded"></div>
                        
                        <div className="flex justify-between items-start relative z-10">
                          <span>{layer.badge}</span>
                          <span>BIM LEVEL 0{idx + 1}</span>
                        </div>

                        {/* Custom visual sketches for blueprint, structure, mep */}
                        {layer.id === 'blueprint' && (
                          <svg className="w-full h-[60%] text-brand-teal/40 stroke-current opacity-70 pointer-events-none mt-2">
                            <rect x="10%" y="10%" width="80%" height="80%" fill="none" strokeWidth="1" />
                            <line x1="50%" y1="10%" x2="50%" y2="90%" strokeWidth="0.8" strokeDasharray="3 3" />
                            <circle cx="50%" cy="50%" r="20" fill="none" strokeWidth="1" />
                          </svg>
                        )}
                        {layer.id === 'structure' && (
                          <svg className="w-full h-[60%] text-brand-gold/40 stroke-current opacity-70 pointer-events-none mt-2">
                            <rect x="15%" y="15%" width="70%" height="70%" fill="none" strokeWidth="1.5" />
                            <circle cx="30%" cy="30%" r="4" className="fill-brand-gold/30" />
                            <circle cx="70%" cy="30%" r="4" className="fill-brand-gold/30" />
                            <circle cx="30%" cy="70%" r="4" className="fill-brand-gold/30" />
                            <circle cx="70%" cy="70%" r="4" className="fill-brand-gold/30" />
                          </svg>
                        )}
                        {layer.id === 'mep' && (
                          <svg className="w-full h-[60%] text-purple-500/40 stroke-current opacity-70 pointer-events-none mt-2">
                            <path d="M 20,40 Q 80,20 120,65 T 240,40" fill="none" strokeWidth="2" />
                            <path d="M 40,80 Q 120,60 180,85" fill="none" strokeWidth="1" strokeDasharray="2 2" />
                          </svg>
                        )}

                        <div className="relative z-10 flex justify-between items-end text-white/50">
                          <span>SCALE: 1:100</span>
                          <span>COORD: AD-YAS-44</span>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 rounded-lg overflow-hidden border border-white/10 select-none">
                        <img 
                          src={layer.image} 
                          alt={layer.name} 
                          className="w-full h-full object-cover select-none" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                    )}

                    {/* Hotspot triggers overlay on layers */}
                    {hotspots.filter(hs => hs.layerId === layer.id).map(hs => (
                      <button
                        key={hs.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedHotspot(hs.id);
                        }}
                        className={`absolute w-5 h-5 rounded-full border flex items-center justify-center font-mono text-[8px] font-bold z-50 cursor-pointer shadow-lg transition-transform duration-300 hover:scale-110 -translate-x-1/2 -translate-y-1/2 ${
                          selectedHotspot === hs.id
                            ? 'bg-brand-teal border-brand-teal text-primary-dark scale-110 shadow-brand-teal/20'
                            : 'bg-primary-dark/95 border-brand-gold text-brand-gold hover:border-brand-teal hover:text-brand-teal'
                        }`}
                        style={{
                          top: hs.top,
                          left: hs.left,
                          // Neutralize isometric tilt visually for hotspot circular badge
                          transform: 'rotateZ(0deg) translateZ(5px)'
                        }}
                      >
                        !
                      </button>
                    ))}

                  </div>
                );
              })}
            </div>

          </div>

          {/* Real-time slider controls */}
          <div className="grid grid-cols-2 gap-4 bg-app-card/60 border border-app-border/40 p-4 rounded-lg">
            <div className="space-y-2">
              <label className="flex justify-between text-[9px] font-mono text-app-muted uppercase font-bold">
                <span>Z-Axis Explode Spacing</span>
                <span className="text-brand-teal">{explodeSpacing}px</span>
              </label>
              <input
                type="range"
                min="35"
                max="130"
                value={explodeSpacing}
                onChange={(e) => setExplodeSpacing(Number(e.target.value))}
                className="w-full h-1 bg-app-border rounded-lg appearance-none cursor-pointer accent-brand-teal"
              />
            </div>
            <div className="space-y-2">
              <label className="flex justify-between text-[9px] font-mono text-app-muted uppercase font-bold">
                <span>Orbit rotation angle</span>
                <span className="text-brand-gold">{rotationAngle}°</span>
              </label>
              <input
                type="range"
                min="-65"
                max="15"
                value={rotationAngle}
                onChange={(e) => setRotationAngle(Number(e.target.value))}
                className="w-full h-1 bg-app-border rounded-lg appearance-none cursor-pointer accent-brand-gold"
              />
            </div>
          </div>

        </div>

        {/* Right: Layer Checklist & Hotspot Inspector factsheet */}
        <div className="lg:col-span-5 bg-app-card border border-app-border rounded-xl p-6 shadow-xl space-y-6 self-stretch flex flex-col justify-between">
          <div className="space-y-6">
            
            {/* Layer Checklist Controller */}
            <div className="space-y-3">
              <span className="block text-[8px] font-mono text-brand-gold uppercase tracking-widest font-bold">
                LAYER TOGGLE DASHBOARD
              </span>
              <div className="space-y-2">
                {layers.map(layer => {
                  const isActive = activeLayers.includes(layer.id);
                  return (
                    <button
                      key={layer.id}
                      onClick={() => toggleLayer(layer.id)}
                      className={`w-full flex justify-between items-center p-3 rounded-lg border text-left text-xs transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-app-secondary border-brand-teal text-app-fg'
                          : 'bg-app-card border-app-border text-app-muted hover:border-brand-teal/20'
                      }`}
                    >
                      <span className="font-semibold">{layer.name}</span>
                      <span className={`text-[8px] font-mono uppercase px-2 py-0.5 rounded border ${
                        isActive
                          ? 'bg-brand-teal/10 border-brand-teal/20 text-brand-teal font-bold'
                          : 'bg-app-secondary border-app-border text-app-muted'
                      }`}>
                        {isActive ? 'ACTIVE' : 'HIDDEN'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hotspot inspector block */}
            {activeHotspot && (
              <div className="border-t border-app-border/60 pt-6 space-y-3">
                <span className="block text-[8px] font-mono text-brand-teal uppercase tracking-widest font-bold">
                  BIM DETAIL FACTSHEET
                </span>
                
                <div className="bg-app-secondary/35 border border-app-border p-4 rounded-xl space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs font-mono font-bold uppercase text-app-fg">
                      {activeHotspot.title}
                    </h4>
                    <span className="text-[7.5px] font-mono bg-brand-gold/10 text-brand-gold px-2 py-0.5 rounded border border-brand-gold/20 font-bold uppercase">
                      LAYER: {activeHotspot.layerId}
                    </span>
                  </div>
                  <p className="text-xs text-app-muted leading-relaxed font-light">
                    {activeHotspot.desc}
                  </p>
                </div>
              </div>
            )}

          </div>

          <div className="pt-4 border-t border-app-border/40">
            <a 
              href="/contact?rfq=true&ref=bim-exploded"
              className="w-full text-center inline-flex items-center justify-center px-6 py-3.5 rounded bg-brand-teal hover:bg-brand-teal-hover text-primary-dark font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-brand-teal/15 transition-all duration-300"
            >
              Request BIM Project Proposal →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
