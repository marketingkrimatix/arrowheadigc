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
      title: '01 / Villa 1 - Khulagi Luxury Residence',
      badge: 'CUSTOM RESIDENCE',
      details: 'Comprehensive luxury private villa development featuring contemporary architectural finishes, expansive glazing, and bespoke landscape integration.',
      spec: 'Contemporary Estate • Estidama Compliant'
    },
    {
      id: 1,
      title: '02 / Villa 2 - Contemporary Executive Villa',
      badge: 'GLASS & MARBLE FACADE',
      details: 'Modern architectural villa construction featuring floor-to-ceiling glass facades, premium thermal insulation, and integrated MEP systems.',
      spec: 'Modern Architecture • High-Spec Finishes'
    },
    {
      id: 2,
      title: '03 / Villa 3 - Sanjay Jain Residence',
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
          {/* Layer 1: Villa 1 */}
          <div
            onClick={() => setFocusedLayer(0)}
            className={`absolute inset-0 rounded-xl overflow-hidden border bg-app-secondary transition-all duration-700 ease-out shadow-2xl flex flex-col justify-between hover:border-brand-teal/70 ${focusedLayer === 0 ? 'border-brand-teal/80 z-30 shadow-black/45 scale-[1.02]' : 'border-app-border opacity-70 z-10'
              }`}
            style={{ transform: `translateZ(${getTranslationZ(0)})` }}
          >
            <div className="relative w-full h-[250px] sm:h-[290px] overflow-hidden bg-primary-dark">
              <img
                src="/images/KhulagiVilla.png"
                alt="Villa 1 - Khulagi Luxury Residence"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-brand-gold text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                  ESTIDAMA 2-PEARL
                </span>
                <span className="bg-brand-teal text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                  CUSTOM BUILD
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[8px] font-mono text-brand-gold uppercase tracking-widest block font-bold">01 / VILLA 1</span>
                <h4 className="text-sm font-heading font-extrabold tracking-tight mt-0.5">KHULAGI LUXURY RESIDENCE</h4>
                <p className="text-[9px] text-white/70 font-light mt-0.5">Custom luxury private residence with contemporary architecture.</p>
              </div>
            </div>

            <div className="p-3 bg-app-card border-t border-app-border flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
                <span className="text-[8px] font-mono text-app-fg font-bold tracking-wider uppercase">COMPLETED VILLA</span>
              </div>
              <span className="text-[8px] font-mono text-brand-gold font-bold">BUILD CODE: AH-VILLA-01</span>
            </div>
          </div>

          {/* Layer 2: Villa 2 */}
          <div
            onClick={() => setFocusedLayer(1)}
            className={`absolute inset-0 rounded-xl overflow-hidden border bg-app-secondary transition-all duration-700 ease-out shadow-2xl flex flex-col justify-between hover:border-brand-gold/70 ${focusedLayer === 1 ? 'border-brand-gold/80 z-30 shadow-black/45 scale-[1.02]' : 'border-app-border opacity-70 z-20'
              }`}
            style={{ transform: `translateZ(${getTranslationZ(1)})` }}
          >
            <div className="relative w-full h-[250px] sm:h-[290px] overflow-hidden bg-primary-dark">
              <img
                src="/images/villa_contemporary.png"
                alt="Villa 2 - Contemporary Executive Villa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-brand-gold text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                  CONTEMPORARY
                </span>
                <span className="bg-brand-teal text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                  GLASS FACADE
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[8px] font-mono text-brand-gold uppercase tracking-widest block font-bold">02 / VILLA 2</span>
                <h4 className="text-sm font-heading font-extrabold tracking-tight mt-0.5">CONTEMPORARY EXECUTIVE VILLA</h4>
                <p className="text-[9px] text-white/70 font-light mt-0.5">Architectural villa design with floor-to-ceiling glass and private pool.</p>
              </div>
            </div>

            <div className="p-3 bg-app-card border-t border-app-border flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                <span className="text-[8px] font-mono text-app-fg font-bold tracking-wider uppercase">TURNKEY BUILD</span>
              </div>
              <span className="text-[8px] font-mono text-brand-gold font-bold">BUILD CODE: AH-VILLA-02</span>
            </div>
          </div>

          {/* Layer 3: Villa 3 */}
          <div
            onClick={() => setFocusedLayer(2)}
            className={`absolute inset-0 rounded-xl overflow-hidden border bg-app-secondary transition-all duration-700 ease-out shadow-2xl flex flex-col justify-between hover:border-brand-teal/70 ${focusedLayer === 2 ? 'border-brand-teal/80 z-30 shadow-black/45 scale-[1.02]' : 'border-app-border opacity-70 z-10'
              }`}
            style={{ transform: `translateZ(${getTranslationZ(2)})` }}
          >
            {/* Visual representation of finished villa facade */}
            <div className="relative w-full h-[250px] sm:h-[290px] overflow-hidden bg-primary-dark">
              <img
                src="/images/ArrowheadVilla.png"
                alt="Villa 3 - Sanjay Jain Residence"
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
                <span className="text-[8px] font-mono text-brand-gold uppercase tracking-widest block font-bold">03 / VILLA 3</span>
                <h4 className="text-sm font-heading font-extrabold tracking-tight mt-0.5">SANJAY JAIN LUXURY CUSTOM RESIDENCE</h4>
                <p className="text-[9px] text-white/70 font-light mt-0.5">Handed over custom villa estate with dry-clad marble facade.</p>
              </div>
            </div>

            {/* Bottom details */}
            <div className="p-3 bg-app-card border-t border-app-border flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
                <span className="text-[8px] font-mono text-app-fg font-bold tracking-wider uppercase">STRUCTURAL SIGN-OFF</span>
              </div>
              <span className="text-[8px] font-mono text-brand-gold font-bold">BUILD CODE: AH-VILLA-03</span>
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
            className={`px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${focusedLayer === layer.id
              ? 'bg-brand-teal text-primary-dark shadow-md'
              : 'text-app-fg hover:bg-app-secondary'
              }`}
          >
            {layer.id === 0 ? 'Villa 1' : layer.id === 1 ? 'Villa 2' : 'Villa 3'}
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
