'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CarouselItem {
  title: string;
  category: string;
  image: string;
  client: string;
  details: string;
  badge: string;
}

export default function Rotating3DCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const items: CarouselItem[] = [
    {
      title: 'Yas Island Main Water Loop',
      category: 'HDPE Pipelines',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
      client: 'ADSSC / ADDC',
      details: 'Butt-fusion computerized welding of 4.8km trunk pipelines.',
      badge: 'ADSSC Approved'
    },
    {
      title: 'Saadiyat Cultural District Substation',
      category: 'Civil Works',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
      client: 'Aldar Properties',
      details: 'C50/60 concrete foundation pouring and substation structures.',
      badge: 'Municipal Approved'
    },
    {
      title: 'Mussafah Port Marine Repair',
      category: 'Marine Works',
      image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=600&q=80',
      client: 'Port Authority',
      details: 'Underwater epoxy crack injection and sacrificial anode placement.',
      badge: 'EAD Certified'
    },
    {
      title: 'Al Raha Gardens Premium Villa',
      category: 'Villa Construction',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80',
      client: 'Private Owner',
      details: 'Turnkey luxury structural casting with Estidama Pearl ratings.',
      badge: 'Estidama 2-Pearl'
    },
    {
      title: 'Khalifa City Sector 14 Piping',
      category: 'Trenchless Utility Network',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
      client: 'ADSSC Approval Loop',
      details: 'Horizontal Directional Drilling (HDD) alignment for sewerage gravity mains.',
      badge: 'Trenchless HDD'
    },
    {
      title: 'Commercial Office Tower HVAC',
      category: 'MEP Works',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      client: 'Facilities AMC',
      details: 'Chilled water balancing and air conditioning duct fabrication.',
      badge: 'Civil Defense Approved'
    }
  ];

  const itemCount = items.length;
  const angleStep = 360 / itemCount;

  // Handle Autoplay rotation
  useEffect(() => {
    if (autoplay) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % itemCount);
      }, 3500);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoplay, itemCount]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % itemCount);
  };

  return (
    <div className="w-full bg-app-bg text-app-fg py-16 flex flex-col items-center max-w-6xl mx-auto overflow-hidden">
      {/* Responsive perspective translation variable */}
      <style dangerouslySetInnerHTML={{ __html: `
        .scene-3d-wrapper {
          --carousel-translate-z: 200px;
        }
        @media (min-width: 640px) {
          .scene-3d-wrapper {
            --carousel-translate-z: 280px;
          }
        }
      `}} />
      
      {/* 3D Scene Wrapper */}
      <div 
        className="relative w-full flex justify-center items-center h-[340px] sm:h-[400px] scene-3d-wrapper"
        style={{ perspective: '1000px' }}
      >
        {/* Carousel Rotation Ring */}
        <div 
          className="relative w-[220px] sm:w-[280px] h-[280px] sm:h-[340px] transition-transform duration-1000 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${-activeIndex * angleStep}deg)`
          }}
        >
          {items.map((item, idx) => {
            const isCenter = idx === activeIndex;
            
            return (
              <div
                key={idx}
                className="absolute inset-0 bg-app-card border border-app-border rounded-xl p-4 flex flex-col justify-between shadow-xl cursor-pointer transition-all duration-500 backface-hidden"
                style={{
                  transform: `rotateY(${idx * angleStep}deg) translateZ(var(--carousel-translate-z))`,
                  opacity: isCenter ? 1 : 0.45,
                  transformStyle: 'preserve-3d',
                  pointerEvents: isCenter ? 'auto' : 'none',
                  borderColor: isCenter ? 'var(--color-brand-teal)' : 'var(--card-border)'
                }}
                onClick={() => {
                  setAutoplay(false);
                  setActiveIndex(idx);
                }}
              >
                {/* Card Top Image */}
                <div className="aspect-[16/10] w-full rounded-lg overflow-hidden relative bg-app-secondary">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute top-2.5 left-2.5 bg-brand-teal text-primary-dark text-[8px] font-mono font-bold tracking-widest px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>

                {/* Card Details */}
                <div className="space-y-1.5 mt-3 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="block text-[8px] font-mono text-brand-gold uppercase tracking-wider font-bold">
                      {item.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-heading font-extrabold tracking-tight mt-0.5 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-app-muted font-light leading-normal mt-1">
                      {item.details}
                    </p>
                  </div>

                  <span className="block text-[8px] font-mono text-app-muted uppercase tracking-widest border-t border-app-border/40 pt-1.5 mt-2">
                    Client: {item.client}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Interface Control Hub */}
      <div className="flex items-center gap-6 mt-8 z-10">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-app-border bg-app-card hover:border-brand-teal hover:text-brand-teal transition-all duration-300 flex items-center justify-center font-bold shadow-md cursor-pointer select-none text-sm"
        >
          ←
        </button>

        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={autoplay}
            onChange={(e) => setAutoplay(e.target.checked)}
            className="w-3.5 h-3.5 rounded border-app-border text-brand-teal focus:ring-brand-teal bg-app-card"
          />
          <span className="text-[10px] font-mono uppercase tracking-widest text-app-muted font-bold">
            Autoplay Active
          </span>
        </label>

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
