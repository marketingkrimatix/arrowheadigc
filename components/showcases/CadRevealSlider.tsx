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
        <div className="absolute inset-0 bg-slate-950 flex flex-col justify-end p-8 font-mono">

          {/* Structural Construction Underlay Image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <img
              src="/images/villa.png"
              alt="Villa Structural Framework"
              className="w-full h-full object-cover"
            />
            {/* Architectural grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,168,198,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,168,198,0.12)_1px,transparent_1px)] bg-[size:24px_24px] opacity-25"></div>
          </div>

          {/* Title tag bottom left */}
          <div className="relative z-10 text-[8px] sm:text-[10px] text-white/50 border-t border-brand-teal/10 pt-2">
            <span>© ARROWHEAD GENERAL CONTRACTING LLC</span>
          </div>
        </div>

        {/* OVERLAY: Style 2 - Finished Handover Photograph (Clipped using GPU-accelerated CSS clipPath) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src="/images/Matrix_project2.jpeg"
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
        Drag the golden divider left and right to reveal Structural Stage vs. Finished Reality
      </p>
    </div>
  );
}
