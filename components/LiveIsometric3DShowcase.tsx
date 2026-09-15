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
    { id: 0, title: 'Luxury Custom Villa', label: 'Luxury Villa' },
    { id: 1, title: 'Premium Mall Retail Fit-Out', label: 'Mall Shop' },
    { id: 2, title: 'Industrial Warehouse & Facility', label: 'Industrial' },
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
          {/* Layer 0: Project 1 - Luxury Villa */}
          <div
            onClick={() => setFocusedLayer(0)}
            className={`absolute inset-0 rounded-xl overflow-hidden border bg-app-secondary transition-all duration-700 ease-out shadow-2xl flex flex-col justify-between hover:border-brand-gold/70 ${focusedLayer === 0 ? 'border-brand-gold/80 z-30 shadow-black/40 scale-[1.02]' : 'border-app-border opacity-75 z-10'
              }`}
            style={{
              transform: `translateZ(${getTranslationZ(0)})`,
              boxShadow: focusedLayer === 0 ? '0 25px 55px rgba(0, 0, 0, 0.45)' : 'none',
            }}
          >
            {/* Visual Image */}
            <div className="relative w-full h-[270px] sm:h-[310px] overflow-hidden bg-primary-dark">
              <img
                src="/images/Matrix_project2.jpeg"
                alt="Luxury Custom Villa"
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-brand-gold text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                  TAMM APPROVED
                </span>
                <span className="bg-brand-teal text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                  2-PEARL ESTIDAMA
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[8px] font-mono text-brand-gold uppercase tracking-widest block font-bold">PROJECT 01 / LUXURY RESIDENTIAL</span>
                <h4 className="text-sm font-heading font-extrabold tracking-tight mt-0.5">LUXURY CUSTOM VILLA</h4>
                <p className="text-[9px] text-white/70 font-light mt-0.5">Turnkey residential design-build, bespoke marble fit-outs & green codes.</p>
              </div>
            </div>

            {/* Bottom Banner Area */}
            <div className="p-3 bg-app-card border-t border-app-border flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                <span className="text-[8px] font-mono text-app-fg font-bold tracking-wider uppercase">RESIDENTIAL CONTRACTING</span>
              </div>
              <span className="text-[8px] font-mono text-brand-gold font-bold">AH-RES-01</span>
            </div>
          </div>

          {/* Layer 1: Project 2 - Mall Shop */}
          <div
            onClick={() => setFocusedLayer(1)}
            className={`absolute inset-0 rounded-xl overflow-hidden border bg-app-secondary transition-all duration-700 ease-out shadow-2xl flex flex-col justify-between hover:border-brand-teal/70 ${focusedLayer === 1 ? 'border-brand-teal/80 z-30 shadow-black/40 scale-[1.02]' : 'border-app-border opacity-75 z-20'
              }`}
            style={{
              transform: `translateZ(${getTranslationZ(1)})`,
              boxShadow: focusedLayer === 1 ? '0 25px 55px rgba(0, 0, 0, 0.45)' : 'none',
            }}
          >
            {/* Visual Image */}
            <div className="relative w-full h-[270px] sm:h-[310px] overflow-hidden bg-primary-dark">
              <img
                src="/images/foot_locker.jpeg"
                alt="Premium Mall Retail Fit-Out"
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-brand-teal text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                  SAFETY COMPLIANT
                </span>
                <span className="bg-brand-gold text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                  RETAIL FIT-OUT
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[8px] font-mono text-brand-teal uppercase tracking-widest block font-bold">PROJECT 02 / COMMERCIAL & RETAIL</span>
                <h4 className="text-sm font-heading font-extrabold tracking-tight mt-0.5">PREMIUM MALL RETAIL FIT-OUT</h4>
                <p className="text-[9px] text-white/70 font-light mt-0.5">Turnkey commercial retail interior fit-out, joinery & lighting installation.</p>
              </div>
            </div>

            {/* Bottom Banner Area */}
            <div className="p-3 bg-app-card border-t border-app-border flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
                <span className="text-[8px] font-mono text-app-fg font-bold tracking-wider uppercase">COMMERCIAL FIT-OUT</span>
              </div>
              <span className="text-[8px] font-mono text-brand-teal font-bold">AH-RET-02</span>
            </div>
          </div>

          {/* Layer 2: Project 3 - Industrial */}
          <div
            onClick={() => setFocusedLayer(2)}
            className={`absolute inset-0 rounded-xl overflow-hidden border bg-app-secondary transition-all duration-700 ease-out shadow-2xl flex flex-col justify-between hover:border-brand-teal/70 ${focusedLayer === 2 ? 'border-brand-teal/80 z-30 shadow-black/40 scale-[1.02]' : 'border-app-border opacity-75 z-10'
              }`}
            style={{
              transform: `translateZ(${getTranslationZ(2)})`,
              boxShadow: focusedLayer === 2 ? '0 25px 55px rgba(0, 0, 0, 0.45)' : 'none',
            }}
          >
            {/* Visual Image */}
            <div className="relative w-full h-[270px] sm:h-[310px] overflow-hidden bg-primary-dark">
              <img
                src="/images/store1.jpeg"
                alt="Industrial Warehouse & Facility"
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-brand-gold text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                  ZONESCORP ALIGNED
                </span>
                <span className="bg-brand-teal text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                  HEAVY INDUSTRIAL
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[8px] font-mono text-brand-gold uppercase tracking-widest block font-bold">PROJECT 03 / INDUSTRIAL & LOGISTICS</span>
                <h4 className="text-sm font-heading font-extrabold tracking-tight mt-0.5">INDUSTRIAL WAREHOUSE & CIVILS</h4>
                <p className="text-[9px] text-white/70 font-light mt-0.5">Heavy reinforced flooring, structural framing & industrial infrastructure.</p>
              </div>
            </div>

            {/* Bottom Banner Area */}
            <div className="p-3 bg-app-card border-t border-app-border flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
                <span className="text-[8px] font-mono text-app-fg font-bold tracking-wider uppercase">INDUSTRIAL CONTRACTING</span>
              </div>
              <span className="text-[8px] font-mono text-brand-gold font-bold">AH-IND-03</span>
            </div>
          </div>
        </div>
      </div>

      {/* Layer Focus Switcher Indicator Badges (Interactive for desktop/mobile) */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 bg-app-card/75 border border-app-border/80 px-4 py-2.5 rounded-full backdrop-blur-md shadow-lg -mt-4 relative z-40 max-w-[95%] font-sans">
        <span className="text-[9px] font-bold uppercase tracking-wider text-app-muted mr-1">
          Select View:
        </span>
        {layersInfo.map((layer) => (
          <button
            key={layer.id}
            onClick={() => setFocusedLayer(layer.id)}
            className={`px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${focusedLayer === layer.id
                ? 'bg-brand-teal text-primary-dark shadow-md'
                : 'text-app-fg hover:bg-app-secondary'
              }`}
          >
            {layer.label}
          </button>
        ))}
      </div>
      <p className="text-[9px] text-app-muted font-light mt-3 italic font-sans text-center">
        Tapping any card in the 3D stack shifts it to the front, simulating layer explosion.
      </p>
    </div>
  );
}
