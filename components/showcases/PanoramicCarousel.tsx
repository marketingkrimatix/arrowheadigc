'use client';

import React, { useState } from 'react';

interface ProjectSlide {
  title: string;
  category: string;
  image: string;
  location: string;
  specs: string;
  code: string;
}

export default function PanoramicCarousel() {
  const [activeIndex, setActiveIndex] = useState(2); // Center on 3rd slide (0-indexed: 2)

  const slides: ProjectSlide[] = [
    {
      title: 'Saadiyat Island Luxury Beach Villa',
      category: 'Villa Construction',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80',
      location: 'Saadiyat North, Abu Dhabi',
      specs: '14,000 sqft | 2-Pearl Estidama',
      code: 'AH-CIVIL-SAADIYAT-01'
    },
    {
      title: 'Yas Island Sewerage Trunk Network',
      category: 'HDPE Pipelines network',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
      location: 'Yas South Loop, Abu Dhabi',
      specs: 'DN 1200mm | PE100 SDR11',
      code: 'AH-INFRA-YAS-02'
    },
    {
      title: 'Mussafah Port slipway Restoration',
      category: 'Marine & Industrial',
      image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=600&q=80',
      location: 'Mussafah Marine Channel',
      specs: 'Saline Epoxy | Cathodic Protections',
      code: 'AH-MARINE-PORT-03'
    },
    {
      title: 'Commercial Office Tower HVAC',
      category: 'MEP Specialized Works',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
      location: 'Capital Tower, Abu Dhabi',
      specs: 'Double-Skin GI | Air Sizing',
      code: 'AH-MEP-HVAC-04'
    },
    {
      title: 'Al Raha Gardens Majlis Extension',
      category: 'Villa Renovation',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      location: 'Al Raha Gardens, Abu Dhabi',
      specs: '2,800 sqft | Structural Casting',
      code: 'AH-RENOV-RAHA-05'
    }
  ];

  const slideCount = slides.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slideCount);
  };

  return (
    <div className="w-full bg-app-bg text-app-fg py-16 flex flex-col items-center max-w-6xl mx-auto overflow-hidden">
      
      {/* 3D Curved Perspective Stage */}
      <div 
        className="relative w-full flex justify-center items-center h-[360px] sm:h-[420px]"
        style={{ perspective: '1200px' }}
      >
        {/* Carousel Curved Container */}
        <div className="relative w-[280px] sm:w-[320px] h-[320px] sm:h-[360px] flex justify-center items-center">
          {slides.map((slide, idx) => {
            const diff = idx - activeIndex;
            const isActive = idx === activeIndex;
            
            // Calculate 3D transformation values to position cards on a curved stage
            const rotateYVal = diff * 18; // Rotate cards on sides
            const translateZVal = Math.abs(diff) * -70; // Push side cards back
            const translateXVal = diff * 120; // Offset card spacing
            const scaleVal = 1 - Math.abs(diff) * 0.1; // Scale down side cards
            const zIndexVal = 10 - Math.abs(diff); // Center card has highest priority

            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="absolute inset-0 bg-app-card border border-app-border rounded-xl p-4 flex flex-col justify-between shadow-xl cursor-pointer select-none transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(${translateXVal}px) rotateY(${rotateYVal}deg) translateZ(${translateZVal}px) scale(${scaleVal})`,
                  opacity: Math.abs(diff) > 2 ? 0 : (isActive ? 1 : 0.6),
                  zIndex: zIndexVal,
                  pointerEvents: Math.abs(diff) > 1 ? 'none' : 'auto',
                  borderColor: isActive ? 'var(--color-brand-teal)' : 'var(--card-border)',
                  backfaceVisibility: 'hidden'
                }}
              >
                {/* Visual Image container */}
                <div className="aspect-[16/10] w-full rounded-lg overflow-hidden relative bg-app-secondary">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute top-2.5 left-2.5 bg-primary-dark/85 text-brand-gold text-[7px] font-mono font-bold tracking-widest px-2 py-0.5 rounded">
                    {slide.code}
                  </span>
                </div>

                {/* Content details */}
                <div className="space-y-1.5 mt-3 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="block text-[8px] font-mono text-brand-teal uppercase tracking-widest font-bold">
                      {slide.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-heading font-extrabold tracking-tight mt-0.5 leading-tight">
                      {slide.title}
                    </h4>
                    <p className="text-[10px] text-app-muted font-light leading-normal mt-1">
                      📍 {slide.location}
                    </p>
                  </div>
                  
                  <span className="block text-[8.5px] font-mono text-brand-gold uppercase tracking-wider border-t border-app-border/40 pt-1.5 mt-2 font-bold">
                    {slide.specs}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Control chevron actions */}
      <div className="flex gap-4 mt-6 z-10">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-app-border bg-app-card hover:border-brand-teal hover:text-brand-teal transition-all duration-300 flex items-center justify-center font-bold shadow-md cursor-pointer select-none text-sm"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-app-border bg-app-card hover:border-brand-teal hover:text-brand-teal transition-all duration-300 flex items-center justify-center font-bold shadow-md cursor-pointer select-none text-sm"
        >
          →
        </button>
      </div>

    </div>
  );
}
