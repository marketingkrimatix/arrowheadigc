'use client';

import React, { useState, useEffect } from 'react';

interface DeckItem {
  title: string;
  category: string;
  image: string;
  spec: string;
  desc: string;
}

export default function StackedDeckShowcase() {
  const [deck, setDeck] = useState<number[]>([0, 1, 2, 3]);
  const [isThrowing, setIsThrowing] = useState(false);

  const items: DeckItem[] = [
    {
      title: 'Saadiyat Island Luxury Beach Villa',
      category: 'Villa Construction',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80',
      spec: 'Area: 14,000 sqft | 2-Pearl Estidama',
      desc: 'Complete turnkey architectural design and civil casting under Abu Dhabi municipality approvals.'
    },
    {
      title: 'Mussafah Port slipway Restoration',
      category: 'Marine Works',
      image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=600&q=80',
      spec: 'Concrete Grade: C50/60 Microsilica',
      desc: 'Corrosion-resistant slipway castings and seawall crack injections using specialized marine epoxies.'
    },
    {
      title: 'DN 800 Trunk Water Alignment Loop',
      category: 'HDPE Pipelines',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
      spec: 'Scope: 3.2km Trunk | ADSSC Certified',
      desc: 'Supply, computer butt-fusion welding, and trenchless HDD directional alignment under main road loops.'
    },
    {
      title: 'Commercial Office Tower MEP AMC',
      category: 'Facility Management',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
      spec: 'Preventative AMC | Response < 2hrs',
      desc: 'HVAC chilled water balancing, DB board infrared thermography, and safety compliance checks.'
    }
  ];

  const handleNext = () => {
    if (isThrowing) return;
    setIsThrowing(true);

    // After throwing animation ends (400ms), push top card to back of deck
    setTimeout(() => {
      setDeck((prev) => [...prev.slice(1), prev[0]]);
      setIsThrowing(false);
    }, 450);
  };

  return (
    <div className="w-full bg-app-bg text-app-fg py-12 flex flex-col items-center max-w-xl mx-auto select-none">
      
      {/* Tactile Deck Container */}
      <div className="relative w-[320px] sm:w-[360px] h-[460px] flex items-center justify-center">
        {deck.map((itemIdx, stackPos) => {
          const item = items[itemIdx];
          const isTopCard = stackPos === 0;
          
          // Card Stack Style Settings
          let transformStyles = '';
          let opacity = 1;
          let zIndex = 10 - stackPos;

          if (isTopCard) {
            transformStyles = isThrowing 
              ? 'translateX(130%) rotate(18deg) scale(0.95)' 
              : 'translateX(0) rotate(0deg) scale(1)';
            opacity = 1;
            zIndex = 40;
          } else if (stackPos === 1) {
            // Second card peek
            transformStyles = 'translateY(18px) rotate(-2deg) scale(0.95)';
            opacity = 0.85;
            zIndex = 30;
          } else if (stackPos === 2) {
            // Third card peek
            transformStyles = 'translateY(36px) rotate(2deg) scale(0.90)';
            opacity = 0.65;
            zIndex = 20;
          } else {
            // Hidden card at bottom
            transformStyles = 'translateY(54px) scale(0.85)';
            opacity = 0;
            zIndex = 10;
          }

          return (
            <div
              key={itemIdx}
              onClick={isTopCard ? handleNext : undefined}
              className={`absolute inset-0 bg-app-card border border-app-border rounded-xl p-5 flex flex-col justify-between shadow-lg select-none cursor-pointer ${
                isTopCard ? 'shadow-2xl hover:border-brand-teal/40' : 'pointer-events-none'
              }`}
              style={{
                transform: transformStyles,
                opacity: opacity,
                zIndex: zIndex,
                transition: isThrowing && isTopCard 
                  ? 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease' 
                  : 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.45s ease, border-color 0.3s ease'
              }}
            >
              {/* Image Frame */}
              <div className="aspect-[16/10] w-full rounded overflow-hidden relative bg-app-secondary">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute top-3 left-3 bg-brand-teal text-primary-dark text-[8px] font-mono font-bold tracking-widest px-2.5 py-1 rounded">
                  {item.category}
                </span>
              </div>

              {/* Card Details */}
              <div className="space-y-2 mt-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="block text-[8px] font-mono text-brand-gold uppercase tracking-widest">{item.spec}</span>
                  <h4 className="text-sm font-heading font-extrabold tracking-tight text-app-fg leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-app-muted font-light leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
                
                {isTopCard && (
                  <span className="block text-right text-[8px] font-mono text-brand-teal uppercase tracking-widest font-bold pt-4">
                    Click Card to Throw →
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
