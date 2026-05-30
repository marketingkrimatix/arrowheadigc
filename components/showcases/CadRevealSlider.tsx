'use client';

import React, { useState, useEffect, useRef, MouseEvent, TouchEvent } from 'react';

export default function CadRevealSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (hasInteracted) return;

    let startTime = Date.now();
    let animationFrameId: number;

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      // Smooth sine oscillation between 25% and 75%
      const val = 50 + Math.sin(elapsed * 1.5) * 25;
      setSliderPosition(val);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasInteracted]);

  const handleMove = (clientX: number) => {
    setHasInteracted(true);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: any) => {
    if (!isDragging.current) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const startDrag = () => {
    setHasInteracted(true);
    isDragging.current = true;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  return (
    <div 
      className="w-full bg-app-bg text-app-fg py-12 max-w-5xl mx-auto select-none"
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchEnd={stopDrag}
    >
      <div 
        ref={containerRef}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
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

        {/* OVERLAY: Style 2 - Finished Handover Photograph (Right Side, clipped based on slider) */}
        <div 
          className="absolute inset-y-0 left-0 overflow-hidden transition-all duration-75"
          style={{ width: `${sliderPosition}%` }}
        >
          {/* Main Visual Image. Width matches outer container width to prevent stretching */}
          <div className="absolute inset-y-0 left-0 w-[1000px] h-full" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
              alt="Villa Finished Reality" 
              className="w-full h-full object-cover" 
            />
            {/* Soft dark gradient shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Vertical Divider line & Drag Handle */}
        <div 
          className="absolute inset-y-0 w-1 bg-brand-gold cursor-ew-resize flex items-center justify-center transition-all duration-75"
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
