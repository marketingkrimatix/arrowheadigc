'use client';

import React, { useState, useRef, MouseEvent } from 'react';

export default function Isometric3DShowcase() {
  const [rotateX, setRotateX] = useState(25);
  const [rotateY, setRotateY] = useState(-35);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coordinates relative to container center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Calculate rotation angles based on mouse position
    // Baseline is rotateX = 25, rotateY = -35
    const nextRotateX = 25 - mouseY * 30; // Tilt range: 10deg to 40deg
    const nextRotateY = -35 + mouseX * 30; // Tilt range: -50deg to -20deg

    setRotateX(nextRotateX);
    setRotateY(nextRotateY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset to baseline architectural view
    setRotateX(25);
    setRotateY(-35);
  };

  return (
    <div 
      className="w-full h-[520px] flex items-center justify-center cursor-pointer select-none"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
    >
      <div 
        className="relative w-[340px] h-[400px] transition-transform duration-300 ease-out"
        style={{ 
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(8deg)`,
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'none' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      >
        {/* Layer 1: Bottom Layer - Technical CAD Blueprint Grid (Teal/Cyan) */}
        <div 
          className="absolute inset-0 rounded-xl border border-brand-teal/20 p-5 bg-app-card/30 backdrop-blur-xs flex flex-col justify-between transition-all duration-500 ease-out shadow-lg"
          style={{ 
            transform: `translateZ(${isHovered ? '-75px' : '-40px'})`,
            opacity: isHovered ? 0.95 : 0.7,
            boxShadow: isHovered ? '0 15px 35px rgba(0, 168, 198, 0.15)' : 'none',
            border: isHovered ? '1px solid rgba(0, 168, 198, 0.35)' : '1px solid rgba(0, 168, 198, 0.15)'
          }}
        >
          {/* Header info */}
          <div className="flex justify-between items-start font-mono">
            <div className="space-y-1">
              <span className="text-[9px] font-bold text-brand-teal uppercase tracking-widest block">01 / PIPELINE & UTILITIES</span>
              <span className="text-[7px] text-app-muted block">SHEET NO: AH-PL-2026-A1</span>
            </div>
            <div className="text-[7px] text-right text-brand-teal opacity-80">
              <span className="block font-bold">DN 1200MM HDPE</span>
              <span className="block">ADSSC STDS ALIGNED</span>
            </div>
          </div>

          {/* Center Graphic: Stylized CAD Pipeline Layout and Grid */}
          <div className="flex-1 my-4 relative flex items-center justify-center opacity-65 overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,168,198,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,168,198,0.07)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
            
            {/* Pipeline Vector Graphic */}
            <svg width="100%" height="100%" className="text-brand-teal overflow-visible">
              {/* Path 1: Main pressure line */}
              <path 
                d="M 20 40 L 160 40 L 160 180 L 260 180" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeDasharray="6 3"
                className="animate-[dash_20s_linear_infinite]"
              />
              {/* Path 2: Sub-connection */}
              <path 
                d="M 160 100 L 220 100" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
              />
              {/* Joints/Valves */}
              <circle cx="160" cy="40" r="4" className="fill-brand-teal animate-pulse" />
              <circle cx="160" cy="100" r="3" className="fill-brand-teal/80" />
              <circle cx="160" cy="180" r="4" className="fill-brand-teal animate-pulse" />
              <circle cx="220" cy="100" r="3.5" className="fill-brand-teal/70" />
              
              {/* Annotation labels */}
              <text x="30" y="32" className="fill-brand-teal font-mono text-[7px] tracking-wider font-light">PRESSURE LOOP A-2</text>
              <text x="170" y="96" className="fill-app-muted font-mono text-[6px]">DN 400 ISO VALVE</text>
              <text x="170" y="174" className="fill-brand-teal font-mono text-[7px] font-bold">BUTT-FUSION WELD</text>
            </svg>
          </div>

          {/* Footer info */}
          <div className="flex justify-between items-end font-mono text-[7px] text-app-muted border-t border-brand-teal/10 pt-2">
            <span>MUNICIPAL APPROVED</span>
            <span className="text-brand-teal font-bold animate-pulse">● SYSTEMS ONLINE</span>
          </div>
        </div>

        {/* Layer 2: Middle Layer - MEP & Structural Framing Layer (Gold) */}
        <div 
          className="absolute inset-0 rounded-xl border border-brand-gold/25 p-5 bg-app-card/45 backdrop-blur-xs flex flex-col justify-between transition-all duration-500 ease-out shadow-lg"
          style={{ 
            transform: `translateZ(${isHovered ? '0px' : '-10px'})`,
            opacity: isHovered ? 0.98 : 0.8,
            boxShadow: isHovered ? '0 15px 35px rgba(197, 168, 128, 0.15)' : 'none',
            border: isHovered ? '1px solid rgba(197, 168, 128, 0.4)' : '1px solid rgba(197, 168, 128, 0.2)'
          }}
        >
          {/* Header info */}
          <div className="flex justify-between items-start font-mono">
            <div className="space-y-1">
              <span className="text-[9px] font-bold text-brand-gold uppercase tracking-widest block">02 / STRUCTURAL FIT-OUT & FM</span>
              <span className="text-[7px] text-app-muted block">REF: AH-MEP-STRUCT-99</span>
            </div>
            <div className="text-[7px] text-right text-brand-gold opacity-80">
              <span className="block font-bold">MEP DUCTING & HARD FM</span>
              <span className="block">CIVIL DEFENSE CERT</span>
            </div>
          </div>

          {/* Center Graphic: Wireframe structural columns / mechanical elements */}
          <div className="flex-1 my-4 relative flex items-center justify-center opacity-65">
            <svg width="100%" height="100%" className="text-brand-gold overflow-visible">
              {/* Isometric Cube 1 */}
              <path d="M 130 50 L 190 20 L 250 50 L 190 80 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path d="M 130 50 L 130 110 L 190 140 L 190 80 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path d="M 190 80 L 190 140 L 250 110 L 250 50 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
              
              {/* Air Duct loop line */}
              <path d="M 50 120 L 130 80 L 190 110 L 190 170" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* Dynamic technical symbols */}
              <circle cx="190" cy="80" r="3" className="fill-brand-gold" />
              <line x1="130" y1="110" x2="160" y2="125" stroke="currentColor" strokeWidth="1" />
              
              {/* Overlay Tags */}
              <text x="60" y="105" className="fill-brand-gold font-mono text-[6px] tracking-wider">CHILLED WATER FEED</text>
              <text x="145" y="45" className="fill-app-fg/80 font-mono text-[7px] font-bold">CHILLER ASSEMBLY</text>
            </svg>
          </div>

          {/* Footer info */}
          <div className="flex justify-between items-end font-mono text-[7px] text-app-muted border-t border-brand-gold/10 pt-2">
            <span>ESTIDAMA ALIGNED</span>
            <span>STRUCTURAL ANCHOR COMPLETE</span>
          </div>
        </div>

        {/* Layer 3: Top Layer - Finished Handover Render (Full Color Image) */}
        <div 
          className="absolute inset-0 rounded-xl overflow-hidden border border-app-border bg-app-secondary transition-all duration-500 ease-out shadow-2xl flex flex-col justify-between"
          style={{ 
            transform: `translateZ(${isHovered ? '75px' : '20px'})`,
            boxShadow: isHovered ? '0 25px 55px rgba(0, 0, 0, 0.35)' : '0 10px 30px rgba(0, 0, 0, 0.15)',
            border: isHovered ? '1px solid var(--color-brand-teal)' : '1px solid var(--card-border)'
          }}
        >
          {/* Main Visual Image representing premium finished building */}
          <div className="relative w-full h-[310px] overflow-hidden bg-primary-dark">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80" 
              alt="ArrowHead Finished Handover" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              style={{
                transform: isHovered ? 'scale(1.04)' : 'scale(1)'
              }}
            />
            {/* Dark elegant visual overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
            
            {/* Floating details overlay on the image itself */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-brand-gold text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                TAMM APPROVED
              </span>
              <span className="bg-brand-teal text-primary-dark text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                2-PEARL ESTIDAMA
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[8px] font-mono text-brand-gold uppercase tracking-widest block font-bold">03 / HANDOVER STATE</span>
              <h4 className="text-sm font-heading font-extrabold tracking-tight mt-0.5">AL RAHA RESIDENTIAL SECTOR</h4>
              <p className="text-[10px] text-white/70 font-light mt-1">High-end structural casting and integrated mechanical services.</p>
            </div>
          </div>

          {/* Bottom Banner Area with interactive visual checkmarks */}
          <div className="p-3 bg-app-card border-t border-app-border flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
              <span className="text-[8px] font-mono text-app-fg font-bold tracking-wider uppercase">COMPLETED VILLA CONSTRUCT</span>
            </div>
            <span className="text-[8px] font-mono text-brand-gold font-bold">ESTIMATE CODE: AH-V-2401</span>
          </div>
        </div>

        {/* 3D Depth Connections (Subtle glowing lines connecting the layers - visible on hover) */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
            {/* Bottom-left corner connector */}
            <svg className="absolute inset-0 w-full h-full text-brand-teal/40 overflow-visible" style={{ transformStyle: 'preserve-3d' }}>
              {/* Connecting lines drawn between Z coordinates (conceptualized in visual offsets) */}
              <line x1="0" y1="0" x2="0" y2="0" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
