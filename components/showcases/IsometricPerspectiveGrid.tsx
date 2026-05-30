'use client';

import React, { useState, useRef, MouseEvent } from 'react';

interface CardItem {
  title: string;
  category: string;
  image: string;
  label: string;
}

function TiltCard({ item }: { item: CardItem }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coordinates relative to card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Calculate rotation angles
    setRotateX(-mouseY * 20); // Tilt range: -10 to 10
    setRotateY(mouseX * 20);  // Tilt range: -10 to 10
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="w-full aspect-[4/5] rounded-xl border border-app-border bg-app-card p-4 transition-all duration-300 shadow-md flex flex-col justify-between select-none cursor-pointer overflow-hidden"
      style={{
        perspective: 800,
        transformStyle: 'preserve-3d',
        borderColor: isHovered ? 'var(--color-brand-teal)' : 'var(--card-border)'
      }}
    >
      <div 
        className="w-full h-full flex flex-col justify-between"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHovered ? '25px' : '0px'})`,
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'none' : 'transform 0.5s ease'
        }}
      >
        {/* Card Image */}
        <div className="aspect-[16/10] w-full rounded overflow-hidden relative bg-app-secondary">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <span className="absolute top-3 left-3 bg-primary-dark/80 backdrop-blur-xs text-brand-gold text-[7px] font-mono font-bold tracking-widest px-2 py-0.5 rounded">
            {item.category}
          </span>
        </div>

        {/* Card Details */}
        <div className="space-y-2 mt-4">
          <span className="block text-[8px] font-mono text-brand-teal uppercase tracking-widest">{item.label}</span>
          <h4 className="text-xs font-heading font-extrabold tracking-tight text-app-fg leading-tight">
            {item.title}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default function IsometricPerspectiveGrid() {
  const cards: CardItem[] = [
    {
      title: 'Water Transmission Pipe Network',
      category: 'HDPE PIPELINES',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
      label: 'ADSSC APPROVED CONTRACTOR'
    },
    {
      title: 'Yas Island Residential Estate',
      category: 'VILLA CONSTRUCTION',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80',
      label: 'ESTIDAMA PEARL ALIGNED'
    },
    {
      title: 'Commercial HQ Plant Retrofits',
      category: 'MEP WORKS',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
      label: 'CIVIL DEFENSE CERTIFIED'
    }
  ];

  return (
    <div className="w-full bg-app-bg text-app-fg py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <TiltCard key={idx} item={card} />
        ))}
      </div>
    </div>
  );
}
