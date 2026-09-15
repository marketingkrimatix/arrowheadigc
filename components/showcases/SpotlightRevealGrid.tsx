'use client';

import React, { useState, useRef, useEffect, MouseEvent } from 'react';

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
  const containerRect = useRef<DOMRect | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (containerRef.current) {
      // Cache container dimensions once when cursor enters to completely avoid layout thrashing during mouse movements
      containerRect.current = containerRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRect.current) {
      if (containerRef.current) {
        containerRect.current = containerRef.current.getBoundingClientRect();
      }
      return;
    }
    const x = e.clientX - containerRect.current.left;
    const y = e.clientY - containerRect.current.top;
    setMousePos({ x, y });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateTouchPos = (clientX: number, clientY: number) => {
      if (!containerRect.current) {
        containerRect.current = container.getBoundingClientRect();
      }
      const x = clientX - containerRect.current.left;
      const y = clientY - containerRect.current.top;
      setMousePos({ x, y });
    };

    const handleTouchStart = (e: TouchEvent) => {
      setIsHovered(true);
      containerRect.current = container.getBoundingClientRect();
      if (e.touches.length > 0) {
        updateTouchPos(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.cancelable) {
        e.preventDefault();
      }
      if (e.touches.length > 0) {
        updateTouchPos(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => {
      setIsHovered(false);
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    container.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-app-border bg-slate-950 shadow-lg cursor-crosshair select-none touch-none"
      style={{
        // Share coordinate positions with child layers using CSS variables
        ['--x' as any]: `${mousePos.x}px`,
        ['--y' as any]: `${mousePos.y}px`,
      }}
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
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('${card.blueprintImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isHovered ? 1 : 0,
          clipPath: isHovered
            ? `circle(90px at var(--x) var(--y))`
            : 'circle(0px at 0px 0px)',
          transition: 'opacity 0.2s ease'
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
            left: 'var(--x)',
            top: 'var(--y)',
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
      title: 'Sanjay Jain Custom Villa Raft',
      category: 'Villa Civil Engineering',
      photoImage: '/images/ArrowheadVilla.png',
      blueprintImage: '/images/Matrix_project.jpeg',
      specTitle: 'C50/60 Microsilica Raft Pour',
      specs: ['IS 2911 layout', 'Compressive strength checked', 'Estidama rating compliance']
    },
    {
      title: 'Yas Island Main trunk welding',
      category: 'HDPE Pipelines network',
      photoImage: '/images/123.jpeg',
      blueprintImage: '/images/456.jpeg',
      specTitle: 'DN 1200mm PE100 fusion logs',
      specs: ['Joint reports recorded', 'Hydrostatic PN16 pass', 'Municipal approval code']
    },
    {
      title: 'Katheri Family Villa MEP Loops',
      category: 'Specialized MEP Routing',
      photoImage: '/images/Matrix_project3.jpeg',
      blueprintImage: '/images/Matrix_project.jpeg',
      specTitle: 'Double-skin HVAC GI loop',
      specs: ['Balanced air registers', 'Civil Defense certified fire systems', 'DoE panels verified']
    }
  ];

  return (
    <div className="w-full bg-app-bg text-app-fg py-12 px-6 md:px-0 max-w-6xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <SpotlightCardItem key={idx} card={card} />
        ))}
      </div>
    </div>
  );
}

