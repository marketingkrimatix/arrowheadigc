'use client';

import React, { useState, useEffect } from 'react';

interface WeldStep {
  title: string;
  badge: string;
  temp: string;
  pressure: string;
  time: string;
  desc: string;
  spec: string;
}

export default function PipelineWeldingShowcase() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Auto-play the simulator loop
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const steps: WeldStep[] = [
    {
      title: '01. Alignment & Shaving (Face-Off)',
      badge: 'PRE-WELD SETUP',
      temp: 'Ambient (25°C - 35°C)',
      pressure: 'High Hydraulic (Shaving)',
      time: 'Adjustable (until clean cut)',
      desc: 'Pipe ends are clamped inside the hydraulic alignment rig. A motorized planer shaver tool is inserted between the faces to shave them flat, removing oxidation layer and ensuring exact parallel alignment.',
      spec: 'Max misalignment gap must be < 10% of wall thickness (under 1.2mm for DN1200).'
    },
    {
      title: '02. Heating Plate Insertion (Soak Phase)',
      badge: 'THERMAL ACTIVATION',
      temp: '210°C - 225°C',
      pressure: 'Low Soak Pressure (0.02 N/mm²)',
      time: 'Soak: 120 seconds - 380 seconds',
      desc: 'A teflon-coated electric heating plate is placed between the pipe ends. The pipes are brought into contact under initial pressure until an initial melt bead forms, then pressure is lowered to allow heat to soak deep into the pipe walls.',
      spec: 'Joint parameters strictly logged per DVS 2207 welding standard charts.'
    },
    {
      title: '03. Joint Fusion & Pressure Build',
      badge: 'COALESCENCE PHASE',
      temp: 'Cooling from 210°C',
      pressure: 'Fusion Pressure (0.15 N/mm²)',
      time: 'Joining time < 10 seconds',
      desc: 'The heating plate is removed rapidly (changeover step). The molten pipe ends are pressed together under controlled hydraulic pressure, forcing the polymer chains to merge and forming double melt beads on the joint boundary.',
      spec: 'Hydraulic pressure is locked and monitored to prevent premature relaxation.'
    },
    {
      title: '04. Hydrostatic Curing & Cooling',
      badge: 'MOLECULAR LOCK',
      temp: 'Cooling to Ambient (< 40°C)',
      pressure: 'Locked Pressure (0.15 N/mm²)',
      time: 'Cooling: 15 minutes - 45 minutes',
      desc: 'The joint is maintained under locked fusion pressure inside the clamps to cure. Forced air or water cooling is prohibited to prevent internal stress voids. Once ambient temperature is reached, clamps are released.',
      spec: 'Computerized log tagged and stored with joint coordinates for ADSSC inspection.'
    }
  ];

  return (
    <div className="w-full bg-app-card border border-app-border rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between font-sans text-left">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-app-border pb-4 mb-6">
        <div>
          <h3 className="text-sm font-heading font-extrabold text-white uppercase tracking-wider">
            HDPE Butt-Fusion Welding Cycle Simulator
          </h3>
          <p className="text-[10px] text-app-muted mt-0.5">
            DVS 2207 standard sequence for heavy-wall infrastructure pipelines
          </p>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`px-3 py-1 rounded text-[9px] font-mono font-bold uppercase transition-all duration-300 ${
            isPlaying 
              ? 'bg-brand-teal/10 text-brand-teal border border-brand-teal/30' 
              : 'bg-brand-gold/10 text-brand-gold border border-brand-gold/30'
          }`}
        >
          {isPlaying ? '● SIMULATING LIVE' : '|| PAUSED'}
        </button>
      </div>

      {/* Simulator Visual Block */}
      <div className="h-44 sm:h-52 bg-app-secondary border border-app-border rounded-xl p-5 relative flex items-center justify-center overflow-hidden">
        {/* Dynamic Welding Graph Overlay */}
        <div className="absolute top-3 left-4 text-[7px] font-mono text-app-muted space-y-0.5">
          <span>RIG ID: AH-BUTT-900</span>
          <span>CALIBRATED: 2026-Q1</span>
        </div>

        {/* Dynamic Graphic */}
        <div className="w-full max-w-sm flex items-center justify-between relative">
          
          {/* Left Pipe Section */}
          <div 
            className={`h-16 bg-gradient-to-r from-gray-900 to-gray-800 border-y-2 border-l border-app-border relative rounded-l-lg transition-all duration-1000 ease-out`}
            style={{ 
              width: activeStep === 0 ? '80px' : activeStep === 1 ? '100px' : '110px',
              borderRight: activeStep === 2 || activeStep === 3 ? 'none' : '3px solid #1a1a1a',
              boxShadow: activeStep === 1 ? 'inset -15px 0 20px rgba(220, 38, 38, 0.4)' : 'none'
            }}
          >
            {/* Shaver blade in Step 0 */}
            {activeStep === 0 && (
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-20 bg-brand-teal rounded animate-pulse z-10 flex items-center justify-center">
                <span className="text-[6px] text-primary-dark font-bold font-mono">✂</span>
              </div>
            )}
          </div>

          {/* Heating Plate in Step 1 */}
          {activeStep === 1 && (
            <div className="w-4 h-24 bg-gradient-to-b from-red-600 via-orange-500 to-red-600 border border-orange-400 rounded shadow-[0_0_20px_rgba(239,68,68,0.7)] animate-pulse z-10 flex items-center justify-center">
              <span className="text-[6px] text-white font-extrabold font-mono rotate-90">220°C</span>
            </div>
          )}

          {/* Central Seam Sealing/Bead growth in step 2 and 3 */}
          {(activeStep === 2 || activeStep === 3) && (
            <div 
              className={`w-3 h-20 rounded-full transition-all duration-1000 z-10 ${
                activeStep === 2 
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 shadow-[0_0_15px_rgba(239,68,68,0.6)] animate-pulseScale' 
                  : 'bg-brand-teal/80 border border-brand-teal/40'
              }`}
            ></div>
          )}

          {/* Right Pipe Section */}
          <div 
            className={`h-16 bg-gradient-to-l from-gray-900 to-gray-800 border-y-2 border-r border-app-border relative rounded-r-lg transition-all duration-1000 ease-out`}
            style={{ 
              width: activeStep === 0 ? '80px' : activeStep === 1 ? '100px' : '110px',
              borderLeft: activeStep === 2 || activeStep === 3 ? 'none' : '3px solid #1a1a1a',
              boxShadow: activeStep === 1 ? 'inset 15px 0 20px rgba(220, 38, 38, 0.4)' : 'none'
            }}
          ></div>
        </div>

        {/* Phase progress line */}
        <div className="absolute bottom-3 left-4 right-4 h-1.5 bg-app-card rounded-full overflow-hidden flex">
          {[0, 1, 2, 3].map((stepIndex) => (
            <div 
              key={stepIndex} 
              className={`flex-1 h-full border-r border-app-secondary last:border-0 transition-colors duration-500 ${
                activeStep >= stepIndex ? 'bg-brand-teal' : 'bg-transparent'
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Selector Tabs */}
      <div className="grid grid-cols-4 gap-1.5 my-5">
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveStep(idx);
              setIsPlaying(false); // Stop autoplay when clicked
            }}
            className={`py-2 px-1 rounded text-center text-[8px] font-bold uppercase tracking-wider transition-all duration-300 border ${
              activeStep === idx 
                ? 'bg-brand-teal text-primary-dark border-brand-teal shadow-md' 
                : 'bg-app-secondary border-app-border text-app-fg hover:border-brand-teal/40'
            }`}
          >
            {idx === 0 ? 'Alignment' : idx === 1 ? 'Heating' : idx === 2 ? 'Fusion' : 'Cooling'}
          </button>
        ))}
      </div>

      {/* Details Box */}
      <div className="bg-app-secondary/50 border border-app-border p-5 rounded-xl space-y-3 animate-fadeIn">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <span className="bg-brand-gold/15 border border-brand-gold/30 px-2 py-0.5 rounded text-[8px] font-mono font-bold text-brand-gold tracking-widest">
            {steps[activeStep].badge}
          </span>
          <span className="text-[9px] font-mono text-app-muted">DVS 2207 PROCEDURAL STEP</span>
        </div>

        <h4 className="text-xs font-heading font-extrabold text-white uppercase tracking-wider">
          {steps[activeStep].title}
        </h4>

        <p className="text-app-muted text-xs leading-relaxed font-light">
          {steps[activeStep].desc}
        </p>

        {/* Technical spec sheets */}
        <div className="border-t border-app-border/60 pt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 text-[9px] font-mono">
          <div>
            <span className="text-app-muted block">Joint Temperature:</span>
            <span className="text-brand-teal font-bold block mt-0.5">{steps[activeStep].temp}</span>
          </div>
          <div>
            <span className="text-app-muted block">Hydraulic Pressure:</span>
            <span className="text-brand-teal font-bold block mt-0.5">{steps[activeStep].pressure}</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="text-app-muted block">Target Cycle Duration:</span>
            <span className="text-brand-teal font-bold block mt-0.5">{steps[activeStep].time}</span>
          </div>
        </div>

        <div className="border-t border-app-border/40 pt-2 text-[8px] font-mono text-app-muted italic text-center">
          Quality Parameter: {steps[activeStep].spec}
        </div>
      </div>
    </div>
  );
}
