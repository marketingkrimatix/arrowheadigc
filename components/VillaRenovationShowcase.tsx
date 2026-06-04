'use client';

import React, { useState, useEffect, useRef, TouchEvent } from 'react';

interface RenovationConcept {
  id: number;
  name: string;
  badge: string;
  focus: string;
  image: string;
  details: string[];
  specs: { label: string; value: string }[];
}

export default function VillaRenovationShowcase() {
  const [currentIndex, setCurrentIndex] = useState<number>(0); // 0 = Before, 1 = Modern Luxury, 2 = Contemporary Minimal, etc.
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [transitionState, setTransitionState] = useState<'idle' | 'starting' | 'active'>('idle');
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  const concepts: RenovationConcept[] = [
    {
      id: 0,
      name: 'Original Villa Structure',
      badge: 'BEFORE',
      focus: 'Traditional Arabic layout with flat plaster facades and standard openings.',
      image: '/arrowheadigc-media/renovation/villa_before.png',
      details: [
        'Plain cement stucco boundary wall and facades',
        'Standard square windows with simple metal frames',
        'Traditional flat gate and basic dry yard paving',
        'Absence of landscape accents, pools, or lighting schedules'
      ],
      specs: [
        { label: 'Condition', value: 'Needs Exterior & Thermal Upgrades' },
        { label: 'Built Year', value: 'circa 2008' },
        { label: 'Estidama Rating', value: 'Non-Compliant (0-Pearl)' }
      ]
    },
    {
      id: 1,
      name: 'Modern Luxury Upgrade',
      badge: 'CONCEPT 01 / 05',
      focus: 'High-end travertine cladding, floor-to-ceiling glass, and a sleek infinity pool.',
      image: '/arrowheadigc-media/renovation/villa_modern.png',
      details: [
        'Premium natural Italian Travertine limestone wall cladding',
        'Post-tensioned concrete structural extensions for double-height lounges',
        'Sleek linear overflow infinity pool with turquoise LED glow',
        'Architectural warm wash uplighting and premium landscape design'
      ],
      specs: [
        { label: 'Facade cladding', value: 'Natural Travertine & Teak Wood' },
        { label: 'Glazing', value: 'Double-glazed Low-E (U-Value < 1.3)' },
        { label: 'Estidama Score', value: 'Targeting 2-Pearl rating' }
      ]
    },
    {
      id: 2,
      name: 'Contemporary Minimalist',
      badge: 'CONCEPT 02 / 05',
      focus: 'Raw architectural concrete, dark basalt stone accents, and clean geometric lines.',
      image: '/arrowheadigc-media/renovation/villa_contemporary.png',
      details: [
        'Finished raw concrete facade panels with dark basalt stone pillars',
        'Minimalist frameless glass balconies and dark structural steel frames',
        'Architectural olive trees integrated into a minimalist white gravel courtyard',
        'Cool white LED wash strip-lights embedded into facade grooves'
      ],
      specs: [
        { label: 'Primary Material', value: 'Fair-faced Concrete & Basalt' },
        { label: 'Luminaires', value: 'Embedded Linear LED Channels' },
        { label: 'Openings', value: 'Architectural Slim-line Aluminium' }
      ]
    },
    {
      id: 3,
      name: 'Elegant Mediterranean',
      badge: 'CONCEPT 03 / 05',
      focus: 'Smooth white stucco arches, terracotta tile highlights, and lush gardens.',
      image: '/arrowheadigc-media/renovation/villa_mediterranean.png',
      details: [
        'Smooth off-white stucco wall plaster with graceful rounded structural arches',
        'Subtle terracotta clay tile highlights on roof edges and boundary tops',
        'Lush landscape features including climbing pink bougainvillea vines',
        'Hand-forged wrought iron entry gates and custom copper lanterns'
      ],
      specs: [
        { label: 'Exterior Finish', value: 'Smooth Mineral Stucco Plaster' },
        { label: 'Roof Accents', value: 'Clay Terracotta Roof Shingles' },
        { label: 'Metal Works', value: 'Artisanal Wrought Iron' }
      ]
    },
    {
      id: 4,
      name: 'Smart Sustainable Villa',
      badge: 'CONCEPT 04 / 05',
      focus: 'Integrated solar roofing, smart-tinting glass, and dynamic accent lighting.',
      image: '/arrowheadigc-media/renovation/villa_smart.png',
      details: [
        'Building-Integrated Photovoltaic (BIPV) solar roof panels',
        'Dynamic electrochromic smart glass that auto-tints with sunlight intensity',
        'Programmable RGBW LED trim lighting for custom facade presets',
        'Electric vehicle charging bay and automated smart security entrance'
      ],
      specs: [
        { label: 'Energy Tech', value: 'BIPV Solar Tiles (12 kWp capacity)' },
        { label: 'Facade Glazing', value: 'Liquid Crystal Dynamic Smart Glass' },
        { label: 'Control System', value: 'KNX Domotics System Integration' }
      ]
    },
    {
      id: 5,
      name: 'Ultra-Luxury Resort Estate',
      badge: 'CONCEPT 05 / 05',
      focus: 'Grand double-height lobby, floating teak walkway, and poolside cabanas.',
      image: '/arrowheadigc-media/renovation/villa_resort.png',
      details: [
        'Monumental double-height glass facade lobby with a grand pivot doorway',
        'Floating teak wood pathway over a large water feature and reflection pools',
        'Outdoor fireplace lounges and luxury resort-style poolside cabanas',
        'Exotic tropical landscaping with towering date palms and water cascades'
      ],
      specs: [
        { label: 'Entrance Door', value: 'Automated 4m High Hardwood Pivot' },
        { label: 'Water Features', value: 'Cascading Water Walls & Reflective Pools' },
        { label: 'Exterior Decking', value: 'Sustainably Sourced Teak Wood' }
      ]
    }
  ];

  // 1. Preload images on mount to ensure instant transition wipes
  useEffect(() => {
    concepts.forEach((concept) => {
      const img = new Image();
      img.src = concept.image;
    });
  }, []);

  // 2. Keyboard arrow key navigation when showcase is focused
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement && showcaseRef.current?.contains(document.activeElement)) {
        if (e.key === 'ArrowRight') {
          triggerCycle(1);
        } else if (e.key === 'ArrowLeft') {
          triggerCycle(-1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, transitionState]);

  // 3. Trigger transition wipe sequence
  const triggerCycle = (direction: number = 1) => {
    if (transitionState !== 'idle') return;

    let nextIdx = currentIndex + direction;
    if (nextIdx >= concepts.length) nextIdx = 0;
    if (nextIdx < 0) nextIdx = concepts.length - 1;

    setPrevIndex(currentIndex);
    setCurrentIndex(nextIdx);
    setTransitionState('starting');

    // Trigger animation next frame
    requestAnimationFrame(() => {
      setTransitionState('active');
    });

    // Cleanup transition state after duration (1000ms animation)
    setTimeout(() => {
      setTransitionState('idle');
      setPrevIndex(null);
    }, 1000);
  };

  // 4. Swipe handlers for mobile support
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum touch drag distance to trigger

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        // Swiped Left -> next slide
        triggerCycle(1);
      } else {
        // Swiped Right -> prev slide
        triggerCycle(-1);
      }
    }
    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentConcept = concepts[currentIndex];
  const prevConcept = prevIndex !== null ? concepts[prevIndex] : null;

  return (
    <div 
      ref={showcaseRef}
      tabIndex={0}
      className="w-full bg-slate-950/70 backdrop-blur-md border border-app-border rounded-2xl p-4 sm:p-5 flex flex-col gap-4 focus:outline-none focus:ring-1 focus:ring-brand-teal/40 shadow-2xl relative select-none group/showcase max-w-lg mx-auto"
    >
      
      {/* 1. Header indicators */}
      <div className="flex justify-between items-center text-[10px] font-mono tracking-wider font-bold">
        <span className={`${currentIndex === 0 ? 'text-brand-gold' : 'text-brand-teal'} uppercase bg-slate-900 px-2.5 py-1.5 rounded border border-white/5`}>
          {currentConcept.badge}
        </span>
        <div className="flex items-center gap-1 bg-slate-900/80 px-2.5 py-1.5 rounded border border-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse"></span>
          <span className="text-white/60">ACTIVE STATE:</span>
          <span className="text-white uppercase">{currentIndex === 0 ? 'Original' : 'Renovated'}</span>
        </div>
      </div>

      {/* 2. Interactive Image Port */}
      <div 
        onClick={() => triggerCycle(1)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 cursor-pointer shadow-inner bg-slate-900 group"
      >
        {/* Background Image: The newly selected concept (revealed during wipe) */}
        <img 
          src={currentConcept.image} 
          alt={currentConcept.name} 
          className="w-full h-full object-cover select-none pointer-events-none" 
        />

        {/* Overlay Image: The previous concept (wiping away) */}
        {prevConcept && transitionState !== 'idle' && (
          <img 
            src={prevConcept.image} 
            alt={prevConcept.name} 
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-10 wipe-element"
            style={{
              animation: 'wipeTransition 1000ms cubic-bezier(0.76, 0, 0.24, 1) forwards'
            }}
          />
        )}

        {/* Golden light streak divider line (moves synced with wipe) */}
        {prevConcept && transitionState !== 'idle' && (
          <div 
            className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-brand-gold via-white to-brand-gold z-20 shadow-[0_0_15px_rgba(197,168,128,0.8)] line-element pointer-events-none"
            style={{
              animation: 'lineMove 1000ms cubic-bezier(0.76, 0, 0.24, 1) forwards'
            }}
          />
        )}

        {/* Swipe instructions overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-30">
          <div className="bg-slate-950/90 border border-brand-gold/30 px-4 py-2.5 rounded text-[10px] uppercase font-mono tracking-widest text-brand-gold flex items-center gap-2 shadow-lg scale-95 group-hover:scale-100 transition-transform duration-300">
            <svg className="w-3.5 h-3.5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            <span>Click to Cycle Design</span>
          </div>
        </div>

        {/* Quick Nav arrows inside the image */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              triggerCycle(-1);
            }}
            className="w-8 h-8 rounded-full bg-slate-950/80 border border-white/20 hover:border-brand-teal hover:text-brand-teal text-white flex items-center justify-center focus:outline-none shadow-md backdrop-blur-xs transition-colors cursor-pointer"
            title="Previous Concept"
          >
            ←
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              triggerCycle(1);
            }}
            className="w-8 h-8 rounded-full bg-slate-950/80 border border-white/20 hover:border-brand-teal hover:text-brand-teal text-white flex items-center justify-center focus:outline-none shadow-md backdrop-blur-xs transition-colors cursor-pointer"
            title="Next Concept"
          >
            →
          </button>
        </div>

        {/* Small "Before / After" text badge bottom left */}
        <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-xs border border-white/10 rounded px-2 py-0.5 text-[8px] font-mono tracking-widest text-white/90 z-20 pointer-events-none uppercase">
          {currentIndex === 0 ? 'Before State' : `Renovation ${currentConcept.name}`}
        </div>
      </div>

      {/* 3. Progress bars indicators */}
      <div className="flex gap-1.5 w-full">
        {concepts.map((concept, idx) => {
          const isBefore = idx === 0;
          if (isBefore) return null; // do not show bar for "Before" state in the 5-concept bar count
          
          const isActive = idx === currentIndex;
          const isViewed = idx < currentIndex;

          return (
            <button
              key={idx}
              onClick={() => {
                if (transitionState === 'idle') {
                  setPrevIndex(currentIndex);
                  setCurrentIndex(idx);
                  setTransitionState('starting');
                  requestAnimationFrame(() => setTransitionState('active'));
                  setTimeout(() => {
                    setTransitionState('idle');
                    setPrevIndex(null);
                  }, 1000);
                }
              }}
              className="flex-1 h-[3px] rounded-full focus:outline-none relative overflow-hidden bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              title={`Jump to Concept ${idx}`}
            >
              <div 
                className={`absolute inset-y-0 left-0 bg-brand-teal transition-transform duration-500 origin-left ${
                  isActive ? 'scale-x-100' : isViewed ? 'scale-x-100 opacity-40' : 'scale-x-0'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* 4. Text Description Box */}
      <div className="bg-slate-900/60 border border-white/5 rounded-xl p-4 text-left animate-[fadeIn_0.5s_ease]">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-sm font-heading font-extrabold text-white uppercase tracking-wider">
            {currentConcept.name}
          </h3>
          <span className="text-[9px] font-mono text-brand-gold font-bold bg-brand-gold/10 border border-brand-gold/20 px-2 py-0.5 rounded">
            {currentIndex === 0 ? 'Original' : 'Upgrade Option'}
          </span>
        </div>
        
        <p className="text-[11px] text-white/70 font-light leading-relaxed mt-2">
          {currentConcept.focus}
        </p>

        {/* Upgrade scope bullet list */}
        <ul className="mt-3.5 space-y-1.5 border-t border-white/5 pt-3.5">
          {currentConcept.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-2 text-[10px] text-white/80 font-light">
              <span className={`shrink-0 text-xs ${currentIndex === 0 ? 'text-brand-gold' : 'text-brand-teal'}`}>✓</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        {/* Technical specs table */}
        <div className="grid grid-cols-2 gap-3 border-t border-white/5 pt-3 mt-3.5">
          {currentConcept.specs.map((spec, idx) => (
            <div key={idx} className="text-[9px] font-mono">
              <span className="text-white/40 block lowercase uppercase-first">{spec.label}:</span>
              <span className="text-brand-gold font-bold block mt-0.5">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Instruction tips */}
      <div className="text-[9px] text-white/40 font-mono flex items-center justify-between border-t border-white/5 pt-3 px-1">
        <span>Cycle: click image / swipe</span>
        <span>use left/right arrows on keyboard</span>
      </div>

      {/* Wipe Animation CSS styles injection */}
      <style jsx>{`
        @keyframes wipeTransition {
          0% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          100% {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          }
        }
        @keyframes lineMove {
          0% {
            left: 100%;
          }
          100% {
            left: 0%;
          }
        }
        .wipe-element {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        .line-element {
          left: 100%;
        }
        .uppercase-first::first-letter {
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
