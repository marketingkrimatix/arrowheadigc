'use client';

import React, { useState, useRef, MouseEvent } from 'react';

interface SpotlightCard {
  title: string;
  category: string;
  photoImage: string;
  blueprintImage: string; // The blueprint/wireframe vector equivalent
  specTitle: string;
  specs: string[];
}

function SpotlightCardItem({ card }: { card: SpotlightCard }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-app-border bg-slate-950 shadow-lg cursor-crosshair select-none"
    >
      {/* 1. Base Layer: Finished color photo */}
      <img
        src={card.photoImage}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover select-none"
      />
      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors"></div>

      {/* 2. Mask Layer: Structural blueprint layout. Revealed inside the clipping circle */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundImage: `url('${card.blueprintImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isHovered ? 1 : 0,
          clipPath: isHovered 
            ? `circle(90px at ${mousePos.x}px ${mousePos.y}px)` 
            : 'circle(0px at 0px 0px)',
          transition: 'opacity 0.2s ease, clip-path 0.05s ease-out'
        }}
      >
        {/* Underlay vector blueprints overlay sketch lines */}
        <div className="absolute inset-0 bg-brand-teal/10 mix-blend-overlay border-2 border-brand-teal pointer-events-none"></div>
      </div>

      {/* Decorative pointer ring circle */}
      {isHovered && (
        <div
          className="absolute w-[180px] h-[180px] rounded-full border border-brand-teal/80 pointer-events-none z-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-brand-teal/5"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transition: 'left 0.05s ease-out, top 0.05s ease-out'
          }}
        >
          <span className="text-[7px] font-mono text-brand-teal uppercase tracking-widest font-bold">
            Reveal CAD
          </span>
        </div>
      )}

      {/* 3. Details overlay (Static at bottom) */}
      <div className="absolute bottom-5 inset-x-5 bg-primary-dark/90 border border-app-border/40 backdrop-blur-md rounded-lg p-4 text-white z-30">
        <span className="text-[8px] font-mono text-brand-gold uppercase tracking-widest font-bold">
          {card.category}
        </span>
        <h4 className="text-sm font-heading font-extrabold tracking-tight mt-0.5 leading-tight">
          {card.title}
        </h4>
        <div className="mt-2.5 pt-2 border-t border-white/10 flex justify-between items-center text-[8px] font-mono text-gray-300">
          <span>{card.specTitle}</span>
          <span className="text-brand-teal">Interactive Spotlight</span>
        </div>
      </div>
    </div>
  );
}

export default function SpotlightRevealGrid() {
  const cards: SpotlightCard[] = [
    {
      title: 'Saadiyat Majesty Concrete raft',
      category: 'Villa Civil Engineering',
      photoImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80',
      blueprintImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
      specTitle: 'C50/60 Microsilica Raft Pour',
      specs: ['IS 2911 layout', 'Compressive strength checked', 'Estidama rating compliance']
    },
    {
      title: 'Yas Island Main trunk welding',
      category: 'HDPE Pipelines network',
      photoImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
      blueprintImage: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
      specTitle: 'DN 1200mm PE100 fusion logs',
      specs: ['Joint reports recorded', 'Hydrostatic PN16 pass', 'ADSSC approval code']
    },
    {
      title: 'Capital Tower building ducts',
      category: 'Specialized MEP Routing',
      photoImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      blueprintImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
      specTitle: 'Double-skin HVAC GI loop',
      specs: ['Balanced air registers', 'Civil Defense certified fire systems', 'ADDC panels verified']
    }
  ];

  return (
    <div className="w-full bg-app-bg text-app-fg py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <SpotlightCardItem key={idx} card={card} />
        ))}
      </div>
    </div>
  );
}
