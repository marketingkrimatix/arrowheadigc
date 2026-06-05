'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function CadRevealSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const containerRect = useRef<DOMRect | null>(null);

  // Bind drag movement to window events to ensure smooth movement even when cursor leaves boundaries
  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!isDragging.current || !containerRect.current) return;
      const x = e.clientX - containerRect.current.left;
      const percentage = Math.max(0, Math.min(100, (x / containerRect.current.width) * 100));
      setSliderPosition(percentage);
    };

    const handleTouchMove = (e: globalThis.TouchEvent) => {
      if (!isDragging.current || !containerRect.current) return;
      if (e.touches && e.touches[0]) {
        const x = e.touches[0].clientX - containerRect.current.left;
        const percentage = Math.max(0, Math.min(100, (x / containerRect.current.width) * 100));
        setSliderPosition(percentage);
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  // Intersection Observer to start the animation only when scrolled into view
  useEffect(() => {
    if (hasInteracted || hasEnteredViewport) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasEnteredViewport(true);
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasInteracted, hasEnteredViewport]);

  // Automatic onboarding demo sweep (plays once: sweeps left, sweeps right, then settles in center)
  useEffect(() => {
    if (hasInteracted || !hasEnteredViewport) return;

    const startTime = Date.now();
    const duration = 4000; // 4 seconds total duration
    let animationFrameId: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      
      if (elapsed >= duration) {
        setSliderPosition(50);
        return; // Stops requesting new frames, terminating the loop
      }

      const t = elapsed / duration; // normalized time from 0 to 1
      // Sine wave shaped by a half-sine envelope: sin(2*pi*t) * sin(pi*t)
      // Multiplied by 42.5 to achieve a max sweep range of exactly 20.3% and 79.7%
      const val = 50 - 42.5 * Math.sin(t * Math.PI * 2) * Math.sin(t * Math.PI);
      setSliderPosition(val);
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasInteracted, hasEnteredViewport]);

  const startDrag = () => {
    setHasInteracted(true);
    isDragging.current = true;
    if (containerRef.current) {
      // Cache container dimensions ONCE when dragging starts to completely avoid layout thrashing during moves
      containerRect.current = containerRef.current.getBoundingClientRect();
    }
  };

  return (
    <div className="w-full bg-app-bg text-app-fg py-12 max-w-5xl mx-auto select-none">
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-app-border bg-slate-950 shadow-2xl cursor-ew-resize"
      >
        {/* UNDERLAY: Style 1 - CAD Blueprint Drawing (Left Side, seen when slider moves right) */}
        <div className="absolute inset-0 bg-slate-950 flex flex-col justify-between p-8 font-mono">
          {/* Header Specs */}
          <div className="flex justify-between items-start text-brand-teal/80 text-[8px] sm:text-[10px]">
            <div>
              <span className="block font-bold">AH-VILLA-DESIGN-DWG</span>
              <span className="block text-[7px] text-white/40">ELEVATION ANCHORS SCALE: 1:50</span>
            </div>
            <span className="text-right">CAD SECTION 03-A</span>
          </div>

          {/* SVG Blueprint Vectors */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,168,198,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,168,198,0.15)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <svg width="85%" height="85%" viewBox="0 0 800 450" className="text-brand-teal overflow-visible">
              {/* Outer structural layout */}
              <rect x="100" y="50" width="600" height="350" fill="none" stroke="currentColor" strokeWidth="2" />
              {/* Column frames */}
              <line x1="250" y1="50" x2="250" y2="400" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
              <line x1="550" y1="50" x2="550" y2="400" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
              
              {/* Inner rooms / dividers */}
              <rect x="120" y="80" width="200" height="150" fill="none" stroke="currentColor" strokeWidth="1" />
              <rect x="480" y="80" width="200" height="150" fill="none" stroke="currentColor" strokeWidth="1" />
              
              {/* Piping loops */}
              <path d="M 120 320 L 680 320 L 680 360" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="120" cy="320" r="5" className="fill-brand-gold" />
              <circle cx="680" cy="320" r="5" className="fill-brand-gold" />
              
              {/* Dimension markers */}
              <line x1="100" y1="30" x2="700" y2="30" stroke="currentColor" strokeWidth="0.8" />
              <text x="400" y="24" className="text-[10px] fill-brand-teal text-center font-bold">60.00m EXTENSION LOOP</text>
            </svg>
          </div>

          {/* Title tag bottom left */}
          <div className="relative z-10 text-[8px] sm:text-[10px] text-white/50 border-t border-brand-teal/10 pt-2">
            <span>© ARROWHEAD GENERAL CONTRACTING LLC CN-4998977</span>
          </div>
        </div>

        {/* OVERLAY: Style 2 - Finished Handover Photograph (Clipped using GPU-accelerated CSS clipPath) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
            alt="Villa Finished Reality" 
            className="w-full h-full object-cover" 
          />
          {/* Soft dark gradient shadow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Vertical Divider line & Drag Handle */}
        <div 
          className="absolute inset-y-0 w-1 bg-brand-gold cursor-ew-resize flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          {/* Circular Drag Button */}
          <div className="w-8 h-8 rounded-full bg-brand-gold hover:bg-brand-gold-hover shadow-xl border-2 border-white flex items-center justify-center text-primary-dark font-extrabold text-xs shrink-0 select-none">
            ↔
          </div>
        </div>
      </div>
      
      {/* Visual Instruction label */}
      <p className="text-center text-[10px] sm:text-xs text-app-muted font-mono uppercase tracking-widest mt-4">
        Drag the golden divider left and right to reveal CAD Blueprint vs. Finished Build
      </p>
    </div>
  );
}
