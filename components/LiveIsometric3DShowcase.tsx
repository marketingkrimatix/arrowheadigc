'use client';

import React, { useState, useEffect, useRef } from 'react';

interface LiveIsometric3DShowcaseProps {
  facing?: 'left' | 'right';
}

export default function LiveIsometric3DShowcase({ facing = 'left' }: LiveIsometric3DShowcaseProps) {
  const [focusedLayer, setFocusedLayer] = useState<number>(2); // 0 = Bottom (CAD), 1 = Middle (MEP), 2 = Top (Handover)
  const [time, setTime] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Slow automated breathing and rotation drift
  useEffect(() => {
    let animationFrameId: number;
    const tick = () => {
      setTime((prev) => (prev + 0.015) % (Math.PI * 2));
      animationFrameId = requestAnimationFrame(tick);
    };
    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Calculate slow automated tilt coordinates
  // Base state is rotateX = 22, rotateY = -32 for left-facing, and rotateY = 32 for right-facing
  const isLeft = facing === 'left';
  const rotateX = 22 + Math.sin(time * 0.7) * 5; // slow tilt oscillation
  const rotateY = (isLeft ? -32 : 32) + (isLeft ? Math.cos(time * 0.5) * 8 : -Math.cos(time * 0.5) * 8); // slow turn oscillation
  const rotateZ = isLeft ? 8 : -8;

  // Breathing separation effect (translates layers apart and back together)
  const breathingOffset = 18 + Math.sin(time * 1.2) * 12; // oscillates between 6px and 30px

  // Function to determine translateZ based on focused state and breathing
  const getTranslationZ = (layerIndex: number) => {
    if (focusedLayer === layerIndex) {
      return '70px'; // bring focused card to the very top
    }
    // Distribute layers below focus
    if (layerIndex === 0) {
      return `${-50 - breathingOffset}px`; // bottom card shifts down based on breathing
    }
    if (layerIndex === 1) {
      return `${-10 - breathingOffset / 2}px`; // middle card floats in between
    }
    // layerIndex === 2
    return `${-10 + breathingOffset / 2}px`;
  };

  const layersInfo = [
    { id: 0, title: 'CAD Blueprint (Bottom)' },
    { id: 1, title: 'MEP & Structure (Middle)' },
    { id: 2, title: 'Finished Handover (Top)' },
  ];

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* 3D Render Box Container */}
      <div 
        className="w-full h-[470px] sm:h-[500px] flex items-center justify-center cursor-pointer relative"
        ref={containerRef}
        style={{ perspective: 1200 }}
      >
        <div 
          className="relative w-[280px] sm:w-[320px] h-[360px] sm:h-[400px] transition-transform duration-1000 ease-out"
          style={{ 
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Layer 1: Bottom Layer - Technical CAD Blueprint Grid (Teal/Cyan) */}
          <div 
            onClick={() => setFocusedLayer(0)}
            className={`absolute inset-0 rounded-xl border p-5 bg-app-card/35 backdrop-blur-xs flex flex-col justify-between transition-all duration-700 ease-out shadow-lg hover:border-brand-teal/70 ${
              focusedLayer === 0 ? 'border-brand-teal/80 z-30 shadow-brand-teal/20 scale-[1.02]' : 'border-brand-teal/15 opacity-75 z-10'
            }`}
            style={{ 
              transform: `translateZ(${getTranslationZ(0)})`,
              boxShadow: focusedLayer === 0 ? '0 20px 45px rgba(0, 168, 198, 0.25)' : 'none',
            }}
          >
            {/* Header info */}
            <div className="flex justify-between items-start font-mono">
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-brand-teal uppercase tracking-widest block">01 / PIPELINE & UTILITIES</span>
                <span className="text-[7px] text-app-muted block">SHEET NO: AH-PL-2026-A1</span>
              </div>
              <div className="text-[7px] text-right text-brand-teal opacity-80">
                <span className="block font-bold">DN 1200MM HDPE</span>
                <span className="block">ADSSC STDS ALIGNED</span>
              </div>
            </div>

            {/* Center Graphic: Stylized CAD Pipeline Layout and Grid */}
            <div className="flex-1 my-4 relative flex items-center justify-center opacity-65 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,168,198,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,168,198,0.07)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
              
              <svg width="100%" height="100%" className="text-brand-teal overflow-visible">
                <path 
                  d="M 20 40 L 160 40 L 160 180 L 260 180" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeDasharray="6 3"
                  className="animate-[dash_20s_linear_infinite]"
                />
                <path 
                  d="M 160 100 L 220 100" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                />
                <circle cx="160" cy="40" r="4" className="fill-brand-teal animate-pulse" />
                <circle cx="160" cy="100" r="3" className="fill-brand-teal/80" />
                <circle cx="160" cy="180" r="4" className="fill-brand-teal animate-pulse" />
                <circle cx="220" cy="100" r="3.5" className="fill-brand-teal/70" />
                
                <text x="30" y="32" className="fill-brand-teal font-mono text-[7px] tracking-wider font-light">PRESSURE LOOP A-2</text>
                <text x="170" y="96" className="fill-app-muted font-mono text-[6px]">DN 400 ISO VALVE</text>
                <text x="170" y="174" className="fill-brand-teal font-mono text-[7px] font-bold">BUTT-FUSION WELD</text>
              </svg>
            </div>

            {/* Footer info */}
            <div className="flex justify-between items-end font-mono text-[7px] text-app-muted border-t border-brand-teal/10 pt-2">
              <span>MUNICIPAL APPROVED</span>
              <span className="text-brand-teal font-bold animate-pulse">● CAD REGISTERED</span>
            </div>
          </div>

          {/* Layer 2: Middle Layer - MEP & Structural Framing Layer (Gold) */}
          <div 
            onClick={() => setFocusedLayer(1)}
            className={`absolute inset-0 rounded-xl border p-5 bg-app-card/45 backdrop-blur-xs flex flex-col justify-between transition-all duration-700 ease-out shadow-lg hover:border-brand-gold/70 ${
              focusedLayer === 1 ? 'border-brand-gold/80 z-30 shadow-brand-gold/20 scale-[1.02]' : 'border-brand-gold/15 opacity-75 z-20'
            }`}
            style={{ 
              transform: `translateZ(${getTranslationZ(1)})`,
              boxShadow: focusedLayer === 1 ? '0 20px 45px rgba(197, 168, 128, 0.25)' : 'none',
            }}
          >
            {/* Header info */}
            <div className="flex justify-between items-start font-mono">
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-brand-gold uppercase tracking-widest block">02 / STRUCTURAL FIT-OUT & FM</span>
                <span className="text-[7px] text-app-muted block">REF: AH-MEP-STRUCT-99</span>
              </div>
              <div className="text-[7px] text-right text-brand-gold opacity-80">
                <span className="block font-bold">MEP DUCTING & HARD FM</span>
                <span className="block">CIVIL DEFENSE CERT</span>
              </div>
            </div>

            {/* Center Graphic: Wireframe structural columns / mechanical elements */}
            <div className="flex-1 my-4 relative flex items-center justify-center opacity-65">
              <svg width="100%" height="100%" className="text-brand-gold overflow-visible">
                <path d="M 130 50 L 190 20 L 250 50 L 190 80 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <path d="M 130 50 L 130 110 L 190 140 L 190 80 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <path d="M 190 80 L 190 140 L 250 110 L 250 50 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
                
                <path d="M 50 120 L 130 80 L 190 110 L 190 170" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                
                <circle cx="190" cy="80" r="3" className="fill-brand-gold" />
                <line x1="130" y1="110" x2="160" y2="125" stroke="currentColor" strokeWidth="1" />
                
                <text x="60" y="105" className="fill-brand-gold font-mono text-[6px] tracking-wider">CHILLED WATER FEED</text>
                <text x="145" y="45" className="fill-app-fg/80 font-mono text-[7px] font-bold">CHILLER ASSEMBLY</text>
              </svg>
            </div>

            {/* Footer info */}
            <div className="flex justify-between items-end font-mono text-[7px] text-app-muted border-t border-brand-gold/10 pt-2">
              <span>ESTIDAMA ALIGNED</span>
              <span>STRUCTURAL CONNECTIONS</span>
            </div>
          </div>

          {/* Layer 3: Top Layer - Finished Handover Render (Full Color Image) */}
          <div 
            onClick={() => setFocusedLayer(2)}
            className={`absolute inset-0 rounded-xl overflow-hidden border bg-app-secondary transition-all duration-700 ease-out shadow-2xl flex flex-col justify-between hover:border-brand-teal/70 ${
              focusedLayer === 2 ? 'border-brand-teal/80 z-30 shadow-black/40 scale-[1.02]' : 'border-app-border opacity-75 z-10'
            }`}
            style={{ 
              transform: `translateZ(${getTranslationZ(2)})`,
              boxShadow: focusedLayer === 2 ? '0 25px 55px rgba(0, 0, 0, 0.45)' : 'none',
            }}
          >
            {/* Main Visual Image representing premium finished building */}
            <div className="relative w-full h-[270px] sm:h-[310px] overflow-hidden bg-primary-dark">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80" 
                alt="ArrowHead Finished Handover" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-brand-gold text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                  TAMM APPROVED
                </span>
                <span className="bg-brand-teal text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                  2-PEARL ESTIDAMA
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[8px] font-mono text-brand-gold uppercase tracking-widest block font-bold">03 / HANDOVER STATE</span>
                <h4 className="text-sm font-heading font-extrabold tracking-tight mt-0.5">AL RAHA RESIDENTIAL SECTOR</h4>
                <p className="text-[9px] text-white/70 font-light mt-0.5">High-end structural casting and mechanical fit-outs.</p>
              </div>
            </div>

            {/* Bottom Banner Area */}
            <div className="p-3 bg-app-card border-t border-app-border flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
                <span className="text-[8px] font-mono text-app-fg font-bold tracking-wider uppercase">COMPLETED VILLA CONSTRUCT</span>
              </div>
              <span className="text-[8px] font-mono text-brand-gold font-bold">AH-V-2401</span>
            </div>
          </div>
        </div>
      </div>

      {/* Layer Focus Switcher Indicator Badges (Interactive for desktop/mobile) */}
      <div className="flex justify-center items-center gap-3 bg-app-card/75 border border-app-border/80 px-4 py-2.5 rounded-full backdrop-blur-md shadow-lg -mt-4 relative z-40 max-w-[90%] font-sans">
        <span className="text-[9px] font-bold uppercase tracking-wider text-app-muted mr-1">
          Select View:
        </span>
        {layersInfo.map((layer) => (
          <button
            key={layer.id}
            onClick={() => setFocusedLayer(layer.id)}
            className={`px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${
              focusedLayer === layer.id
                ? 'bg-brand-teal text-primary-dark shadow-md'
                : 'text-app-fg hover:bg-app-secondary'
            }`}
          >
            {layer.id === 0 ? 'Blueprint' : layer.id === 1 ? 'MEP System' : 'Final Build'}
          </button>
        ))}
      </div>
      <p className="text-[9px] text-app-muted font-light mt-3 italic font-sans text-center">
        Tapping any card in the 3D stack shifts it to the front, simulating layer explosion.
      </p>
    </div>
  );
}
