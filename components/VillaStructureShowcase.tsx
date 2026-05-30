'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function VillaStructureShowcase() {
  const [focusedLayer, setFocusedLayer] = useState<number>(2); // 0 = Foundation, 1 = Frame & Blockwork, 2 = Cladding & Finishes
  const [time, setTime] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Slow automated drift animation
  useEffect(() => {
    let animationFrameId: number;
    const tick = () => {
      setTime((prev) => (prev + 0.012) % (Math.PI * 2));
      animationFrameId = requestAnimationFrame(tick);
    };
    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const rotateX = 22 + Math.sin(time * 0.5) * 4;
  const rotateY = -30 + Math.cos(time * 0.4) * 6;
  const breathingOffset = 15 + Math.sin(time * 1.0) * 10;

  const getTranslationZ = (layerIndex: number) => {
    if (focusedLayer === layerIndex) return '80px';
    if (layerIndex === 0) return `${-60 - breathingOffset}px`;
    if (layerIndex === 1) return `${-10 - breathingOffset / 2}px`;
    return `${-10 + breathingOffset / 2}px`;
  };

  const layers = [
    {
      id: 0,
      title: '01 / Foundation & Sub-Structure',
      badge: 'SULFATE-RESISTANT',
      details: 'Bored concrete piles, thick reinforced raft slab, double-layer waterproofing, and PIT integrity testing.',
      spec: 'C45 SRC Concrete • 1200 Gauge HDPE Membrane'
    },
    {
      id: 1,
      title: '02 / Structural Columns & Masonry',
      badge: 'ESTIDAMA INSULATED',
      details: 'Reinforced concrete columns, post-tensioned slabs, insulated thermal blockwork, and MEP conduit integration.',
      spec: 'C50 Concrete • 200mm Autoclaved Aerated Blocks'
    },
    {
      id: 2,
      title: '03 / Dry Cladding & Finishes',
      badge: 'LUXURY BROCHURE',
      details: 'Premium Italian marble dry-cladding, low-E double-glazed windows, and Estidama compliant envelope seals.',
      spec: 'Calacatta Vein Cut • Double Glazed U-Value < 1.4'
    }
  ];

  return (
    <div className="w-full flex flex-col items-center select-none font-sans">
      {/* 3D Container */}
      <div 
        className="w-full h-[450px] sm:h-[480px] flex items-center justify-center cursor-pointer relative"
        ref={containerRef}
        style={{ perspective: 1200 }}
      >
        <div 
          className="relative w-[280px] sm:w-[320px] h-[340px] sm:h-[380px] transition-transform duration-1000 ease-out"
          style={{ 
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(6deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Layer 1: Bottom Layer - Foundation Raft */}
          <div 
            onClick={() => setFocusedLayer(0)}
            className={`absolute inset-0 rounded-xl border p-5 bg-app-card/35 backdrop-blur-xs flex flex-col justify-between transition-all duration-700 ease-out shadow-lg hover:border-brand-teal/70 ${
              focusedLayer === 0 ? 'border-brand-teal/80 z-30 shadow-brand-teal/20 scale-[1.02]' : 'border-brand-teal/15 opacity-70 z-10'
            }`}
            style={{ transform: `translateZ(${getTranslationZ(0)})` }}
          >
            <div className="flex justify-between items-start font-mono">
              <div className="space-y-1">
                <span className="text-[8px] font-bold text-brand-teal uppercase tracking-widest block">FOUNDATION ARCHITECTURE</span>
                <span className="text-[6px] text-app-muted block">GRID LEVEL: B1 SUB-GRADE</span>
              </div>
              <span className="text-[7px] text-brand-teal font-bold bg-brand-teal/10 px-1.5 py-0.5 rounded">SRC LEVEL</span>
            </div>

            {/* CAD Grid and Foundation Rebar wireframe */}
            <div className="flex-1 my-3 relative flex items-center justify-center opacity-60">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,168,198,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,168,198,0.05)_1px,transparent_1px)] bg-[size:12px_12px]"></div>
              <svg width="100%" height="100%" className="text-brand-teal overflow-visible">
                {/* Pile anchors */}
                <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="150" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="250" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="100" cy="130" r="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="200" cy="130" r="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                
                {/* Rebar cross grid lines */}
                <line x1="10" y1="90" x2="270" y2="90" stroke="currentColor" strokeWidth="0.8" />
                <line x1="10" y1="100" x2="270" y2="100" stroke="currentColor" strokeWidth="0.8" />
                <line x1="10" y1="110" x2="270" y2="110" stroke="currentColor" strokeWidth="0.8" />
                
                <text x="15" y="165" className="fill-brand-teal font-mono text-[7px] font-bold">RAFT STEEL MESH SPEC: T20@150B2</text>
              </svg>
            </div>

            <div className="flex justify-between items-end font-mono text-[7px] text-app-muted border-t border-brand-teal/10 pt-2">
              <span>NOC OBTAINED</span>
              <span className="text-brand-teal font-bold">● ANCHORS VERIFIED</span>
            </div>
          </div>

          {/* Layer 2: Middle Layer - Structural Concrete & Columns */}
          <div 
            onClick={() => setFocusedLayer(1)}
            className={`absolute inset-0 rounded-xl border p-5 bg-app-card/45 backdrop-blur-xs flex flex-col justify-between transition-all duration-700 ease-out shadow-lg hover:border-brand-gold/70 ${
              focusedLayer === 1 ? 'border-brand-gold/80 z-30 shadow-brand-gold/20 scale-[1.02]' : 'border-brand-gold/15 opacity-70 z-20'
            }`}
            style={{ transform: `translateZ(${getTranslationZ(1)})` }}
          >
            <div className="flex justify-between items-start font-mono">
              <div className="space-y-1">
                <span className="text-[8px] font-bold text-brand-gold uppercase tracking-widest block">COLUMN FRAME & CORE WALLS</span>
                <span className="text-[6px] text-app-muted block">SHEET NO: AH-V-STR-04</span>
              </div>
              <span className="text-[7px] text-brand-gold font-bold bg-brand-gold/10 px-1.5 py-0.5 rounded">C50 CORE</span>
            </div>

            {/* Column layout and thermal block grid */}
            <div className="flex-1 my-3 relative flex items-center justify-center opacity-65">
              <svg width="100%" height="100%" className="text-brand-gold overflow-visible">
                {/* 3D columns wireframe */}
                <line x1="50" y1="40" x2="50" y2="150" stroke="currentColor" strokeWidth="1.5" />
                <line x1="130" y1="20" x2="130" y2="130" stroke="currentColor" strokeWidth="1.5" />
                <line x1="210" y1="40" x2="210" y2="150" stroke="currentColor" strokeWidth="1.5" />
                
                {/* Horizontal beams */}
                <line x1="50" y1="40" x2="130" y2="20" stroke="currentColor" strokeWidth="1.2" />
                <line x1="130" y1="20" x2="210" y2="40" stroke="currentColor" strokeWidth="1.2" />
                <line x1="50" y1="80" x2="130" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                
                <text x="60" y="70" className="fill-brand-gold font-mono text-[6px]">PT BEAM INTRUSION</text>
                <text x="60" y="110" className="fill-app-fg/80 font-mono text-[7px] font-bold">THERMAL BLOCKWORK FILL</text>
              </svg>
            </div>

            <div className="flex justify-between items-end font-mono text-[7px] text-app-muted border-t border-brand-gold/10 pt-2">
              <span>ESTIDAMA PEARL COMPLIANT</span>
              <span>SLAB DE-SHUTTERED</span>
            </div>
          </div>

          {/* Layer 3: Top Layer - Finished Cladding & Marble Finishes */}
          <div 
            onClick={() => setFocusedLayer(2)}
            className={`absolute inset-0 rounded-xl overflow-hidden border bg-app-secondary transition-all duration-700 ease-out shadow-2xl flex flex-col justify-between hover:border-brand-teal/70 ${
              focusedLayer === 2 ? 'border-brand-teal/80 z-30 shadow-black/45 scale-[1.02]' : 'border-app-border opacity-70 z-10'
            }`}
            style={{ transform: `translateZ(${getTranslationZ(2)})` }}
          >
            {/* Visual representation of finished villa facade */}
            <div className="relative w-full h-[250px] sm:h-[290px] overflow-hidden bg-primary-dark">
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=700&q=80" 
                alt="Bespoke Luxury Villa Finishes" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-brand-gold text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                  ESTIDAMA 3-PEARL
                </span>
                <span className="bg-brand-teal text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                  CALACATTA CLAD
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[8px] font-mono text-brand-gold uppercase tracking-widest block font-bold">03 / COMPLETED ARCHITECTURE</span>
                <h4 className="text-sm font-heading font-extrabold tracking-tight mt-0.5">SAADIYAT LUXURY BEACH RESIDENCE</h4>
                <p className="text-[9px] text-white/70 font-light mt-0.5">Handed over custom villa estate with dry-clad marble facade.</p>
              </div>
            </div>

            {/* Bottom details */}
            <div className="p-3 bg-app-card border-t border-app-border flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
                <span className="text-[8px] font-mono text-app-fg font-bold tracking-wider uppercase">STRUCTURAL SIGN-OFF</span>
              </div>
              <span className="text-[8px] font-mono text-brand-gold font-bold">BUILD CODE: AH-VILLA-SAAD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Layer selector badging */}
      <div className="flex justify-center items-center gap-3 bg-app-card/75 border border-app-border/80 px-4 py-2.5 rounded-full backdrop-blur-md shadow-lg -mt-4 relative z-40 max-w-[95%] font-sans">
        {layers.map((layer) => (
          <button
            key={layer.id}
            onClick={() => setFocusedLayer(layer.id)}
            className={`px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${
              focusedLayer === layer.id
                ? 'bg-brand-teal text-primary-dark shadow-md'
                : 'text-app-fg hover:bg-app-secondary'
            }`}
          >
            {layer.id === 0 ? 'Foundation' : layer.id === 1 ? 'Frame' : 'Facade'}
          </button>
        ))}
      </div>

      {/* Selected Layer Info display */}
      <div className="mt-6 bg-app-card border border-app-border rounded-xl p-5 w-full max-w-lg shadow-sm text-left animate-fadeIn">
        <span className="bg-brand-gold/10 border border-brand-gold/30 px-2 py-0.5 rounded text-[8px] font-mono font-bold text-brand-gold uppercase tracking-widest inline-block">
          {layers[focusedLayer].badge}
        </span>
        <h4 className="text-xs font-heading font-extrabold text-white uppercase tracking-wider mt-2.5">
          {layers[focusedLayer].title}
        </h4>
        <p className="text-app-muted text-xs leading-relaxed font-light mt-1.5">
          {layers[focusedLayer].details}
        </p>
        <div className="border-t border-app-border/60 pt-3 mt-3 flex justify-between items-center text-[9px] font-mono">
          <span className="text-app-muted">Engineering Spec:</span>
          <span className="text-brand-teal font-bold">{layers[focusedLayer].spec}</span>
        </div>
      </div>
    </div>
  );
}
