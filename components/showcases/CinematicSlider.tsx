'use client';

import React, { useState, useEffect } from 'react';

interface SlideItem {
  title: string;
  category: string;
  image: string;
  subtitle: string;
  spec: string;
}

export default function CinematicSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides: SlideItem[] = [
    {
      title: 'Infrastructure Sewerage Network',
      category: 'HDPE Pipelines',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
      subtitle: 'Trenchless directional drilling under municipal road crossings.',
      spec: 'Abu Dhabi Sewerage Services (ADSSC) Standards'
    },
    {
      title: 'Luxury Residential Handovers',
      category: 'Villa Construction',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      subtitle: 'Complete design-build casting, custom marble, and glass fit-outs.',
      spec: 'Abu Dhabi Municipality Approved (TAMM Portal)'
    },
    {
      title: 'Waterfront Marine Slipways',
      category: 'Marine Works',
      image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=1200&q=80',
      subtitle: 'High-strength structural concrete casting under severe marine exposure.',
      spec: 'Environment Agency Abu Dhabi Aligned'
    }
  ];

  // Auto transition
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full bg-app-bg text-app-fg py-12 max-w-6xl mx-auto">
      <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden border border-app-border bg-primary-dark shadow-2xl flex flex-col justify-end p-8 sm:p-12">
        {/* Background Visual Image Stack with smooth crossfade */}
        {slides.map((slide, idx) => {
          const isActive = idx === activeSlide;
          return (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover transform scale-102 hover:scale-105 transition-transform duration-[12s] ease-out" 
              />
            </div>
          );
        })}

        {/* Soft shadow cover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

        {/* Active Content details */}
        <div className="relative z-10 text-white space-y-4 max-w-2xl">
          <span className="bg-brand-teal text-primary-dark text-[8px] font-mono font-bold tracking-widest px-2.5 py-1 rounded w-fit inline-block">
            {slides[activeSlide].category}
          </span>
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold tracking-tight leading-tight">
              {slides[activeSlide].title}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
              {slides[activeSlide].subtitle}
            </p>
          </div>
          <span className="block text-[8px] font-mono text-brand-gold uppercase tracking-widest pt-1">
            {slides[activeSlide].spec}
          </span>
        </div>

        {/* Cinematic Progress indicators at bottom */}
        <div className="absolute bottom-6 left-12 right-12 flex gap-4 z-10">
          {slides.map((_, idx) => {
            const isActive = idx === activeSlide;
            return (
              <button 
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className="flex-1 h-0.5 relative bg-white/20 overflow-hidden cursor-pointer"
              >
                {isActive && (
                  <div className="absolute inset-y-0 left-0 bg-brand-teal w-full origin-left animate-[progress_6s_linear_infinite]"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Progress keyframes definition injected locally */}
      <style jsx>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
