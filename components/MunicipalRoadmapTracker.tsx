'use client';

import React, { useState } from 'react';

interface ApprovalNode {
  id: number;
  title: string;
  authority: string;
  authShort: 'ADM' | 'ADDC' | 'ADSSC' | 'ADCD';
  timeframe: string;
  desc: string;
  docs: string[];
  tips: string;
}

export default function MunicipalRoadmapTracker() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ApprovalNode[] = [
    {
      id: 0,
      title: 'Geotechnical & Soil Testing NOC',
      authority: 'Abu Dhabi Municipality (ADM)',
      authShort: 'ADM',
      timeframe: '5 - 7 Working Days',
      desc: 'Required before any foundation design can begin. Geotechnical engineers core-drill soil samples up to 15 meters deep to evaluate soil bearing capacity, moisture contents, and underground water chemical parameters.',
      docs: [
        'Boundary plot plan from TAMM',
        'Authorized soil investigation core-drill layout',
        'ADM Surveyor plot verification'
      ],
      tips: 'Critical for Saadiyat Island structures (sandy corridor) and Yas Island (high salt water table) to optimize SRC cement thickness.'
    },
    {
      id: 1,
      title: 'Structural & Architectural Permit NOC',
      authority: 'Abu Dhabi Municipality & Estidama Department',
      authShort: 'ADM',
      timeframe: '10 - 15 Working Days',
      desc: 'Municipal structural engineers review architectural plans and concrete calculations to verify safety coefficients. Simultaneously, the design is audited for compliance with Estidama Pearl Rating energy saving thresholds.',
      docs: [
        'Revit BIM Models & CAD architectural elevations',
        'Structural core shear wall load calculations',
        'Estidama Pearl rating checklist sheet (1-Pearl min)'
      ],
      tips: 'Ensure all columns and post-tensioned beam dimensions match calculations to prevent revision delays on TAMM.'
    },
    {
      id: 2,
      title: 'Electrical Load Schedule NOC',
      authority: 'Abu Dhabi Distribution Company (ADDC)',
      authShort: 'ADDC',
      timeframe: '7 - 10 Working Days',
      desc: 'ADDC engineers review the building’s projected power demands (connected vs. maximum demand load). They verify sizing of main cables, distribution boards, load balancing schedules, and location parameters for the sub-station/chiller unit.',
      docs: [
        'Connected load schedules & phase calculations',
        'Electrical Single Line Diagrams (SLD)',
        'MGB (Main Ground Board) layout details'
      ],
      tips: 'Ensure VRF multi-zone HVAC cooling load calculations are optimized to prevent excessive power load demands.'
    },
    {
      id: 3,
      title: 'Water & Sewerage Network Tie-In NOC',
      authority: 'Abu Dhabi Sewerage Services Company (ADSSC)',
      authShort: 'ADSSC',
      timeframe: '7 - 10 Working Days',
      desc: 'ADSSC reviews layout routing for sewer gravity lines and potable water lines. They verify locations of inspection manholes, slope angles (1:100 or 1:150), grease traps (for kitchens), and connection coordinates to the municipal main network.',
      docs: [
        'Site utility piping plans and layout slope data',
        'Manhole schedules & GRP protective liner certificates',
        'Grease trap volume capacity sizing reports'
      ],
      tips: 'Gravity lines must comply with ADSSC minimum cover depths. Use shoring boxes for any excavation exceeding 1.5 meters.'
    },
    {
      id: 4,
      title: 'Fire Safety & Firefighting NOC',
      authority: 'Abu Dhabi Civil Defense (ADCD)',
      authShort: 'ADCD',
      timeframe: '5 - 7 Working Days',
      desc: 'Civil Defense officers audit the fire suppression layouts. They inspect partition classifications for smoke defense, routes of fire exits, layouts of wet sprinkler heads, fire pumps parameters, and early smoke detector alarm linkages.',
      docs: [
        'Fire fighting piping layouts (sprinklers/hose reel)',
        'Smoke detection & fire alarm wiring schematics',
        'Material safety certificates for interior wall linings'
      ],
      tips: 'Only materials sourced from ADCD approved manufacturing lists can be integrated into the mechanical safety installations.'
    },
    {
      id: 5,
      title: 'Municipal Inspection & Occupancy Certificate',
      authority: 'Abu Dhabi Municipality (ADM Inspectors)',
      authShort: 'ADM',
      timeframe: '3 - 5 Working Days',
      desc: 'Upon construction completion, municipal inspectors visit the site to verify structural compliance against the approved building permit. Once signed off, the final Occupancy Certificate is issued, enabling ADDC utility line activation.',
      docs: [
        'Completed structural concrete strength reports (cube tests)',
        'Certified hydrostatic pressure test logs from ADDC/ADSSC',
        'Civil Defense final audit clearance report'
      ],
      tips: 'Ensure all structural extensions exactly match approved TAMM permit drawings; any deviation triggers penalties or revision scopes.'
    }
  ];

  return (
    <div className="w-full bg-app-card border border-app-border rounded-2xl p-6 sm:p-8 shadow-xl text-left max-w-3xl mx-auto font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-app-border pb-4 mb-6">
        <div>
          <span className="text-[8px] font-mono text-brand-gold font-bold uppercase tracking-widest block">
            MUNICIPAL APPROVAL WORKFLOW
          </span>
          <h3 className="text-base font-heading font-extrabold text-white uppercase tracking-wider mt-0.5">
            Abu Dhabi NOC Permitting Sequence
          </h3>
        </div>
        <div className="mt-2 md:mt-0 flex gap-1.5">
          <span className="px-2 py-0.5 rounded text-[8px] font-mono font-bold bg-brand-teal/10 text-brand-teal border border-brand-teal/20">TAMM INTEGRATED</span>
          <span className="px-2 py-0.5 rounded text-[8px] font-mono font-bold bg-brand-gold/10 text-brand-gold border border-brand-gold/20">100% REGULATORY ASSURED</span>
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-xs text-app-muted font-light leading-relaxed">
          Laying utility networks or casting concrete structures in Abu Dhabi demands strict alignment with government inspectors. Click through the timeline nodes below to inspect each NOC stage.
        </p>

        {/* Step Progression Timeline (Mobile Scroll / Desktop Flex) */}
        <div className="flex overflow-x-auto pb-4 scrollbar-thin gap-3 snap-x">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`flex-none snap-start w-32 p-3 rounded-lg border text-center transition-all duration-300 ${
                activeStep === idx 
                  ? 'bg-app-secondary border-brand-teal shadow-md shadow-brand-teal/5' 
                  : 'bg-app-card border-app-border/80 hover:border-brand-teal/30'
              }`}
            >
              <span className={`w-6 h-6 rounded-full mx-auto flex items-center justify-center text-[10px] font-bold font-mono ${
                activeStep === idx ? 'bg-brand-teal text-primary-dark' : 'bg-app-secondary text-app-muted'
              }`}>
                0{idx + 1}
              </span>
              <h4 className="text-[10px] font-bold text-white uppercase tracking-wider mt-2.5 line-clamp-1">
                {step.authShort} NOC
              </h4>
              <span className="text-[8px] font-mono text-app-muted block mt-0.5">
                {step.timeframe.split(' ')[0]} {step.timeframe.split(' ')[1]}
              </span>
            </button>
          ))}
        </div>

        {/* Active Node Detail Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-app-secondary/30 border border-app-border rounded-xl p-5 sm:p-6 items-stretch">
          {/* Left info column */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex justify-between items-center flex-wrap gap-2">
                <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-bold ${
                  steps[activeStep].authShort === 'ADM'
                    ? 'bg-brand-teal/15 text-brand-teal border border-brand-teal/20'
                    : steps[activeStep].authShort === 'ADDC'
                    ? 'bg-brand-gold/15 text-brand-gold border border-brand-gold/20'
                    : steps[activeStep].authShort === 'ADSSC'
                    ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                    : 'bg-red-500/15 text-red-400 border border-red-500/20'
                }`}>
                  AUTHORITY: {steps[activeStep].authority}
                </span>
                <span className="text-[8px] font-mono text-app-muted">TIME: {steps[activeStep].timeframe}</span>
              </div>
              
              <h4 className="text-xs font-heading font-extrabold text-white uppercase tracking-wider mt-3">
                {steps[activeStep].title}
              </h4>
              
              <p className="text-app-muted text-xs leading-relaxed font-light mt-2">
                {steps[activeStep].desc}
              </p>
            </div>

            {/* Regulatory Tip Warning Box */}
            <div className="bg-app-card border border-app-border rounded-lg p-3 text-[9px] leading-relaxed italic text-brand-gold">
              <span className="font-bold block uppercase text-[7px] text-app-muted font-mono not-italic mb-1">PRO-TIP:</span>
              "{steps[activeStep].tips}"
            </div>
          </div>

          {/* Right checklist column */}
          <div className="md:col-span-5 bg-app-card border border-app-border rounded-lg p-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[9px] font-mono text-app-fg font-bold uppercase tracking-wider block border-b border-app-border pb-2">
                Required Submittals
              </span>
              <ul className="space-y-2 text-[10px] text-app-muted font-light">
                {steps[activeStep].docs.map((doc, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold font-mono">✓</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Checkmark animation badge */}
            <div className="border-t border-app-border/60 pt-3 mt-4 flex items-center justify-between text-[8px] font-mono">
              <span className="text-app-muted">STAGE READY</span>
              <span className="text-brand-teal font-bold animate-pulse">● CALIBRATED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
