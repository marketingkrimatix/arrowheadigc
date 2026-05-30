'use client';

import React, { useState, useEffect } from 'react';

export default function MepFlowShowcase() {
  const [pumpMode, setPumpMode] = useState<'eco' | 'boost' | 'standby'>('eco');
  const [valveOpen, setValveOpen] = useState<number>(80); // 0 to 100
  const [isDiagnosticRunning, setIsDiagnosticRunning] = useState<boolean>(false);
  const [diagnosticProgress, setDiagnosticProgress] = useState<number>(0);
  const [diagnosticResult, setDiagnosticResult] = useState<string>('');

  // Calculate live values based on pumpMode and valveOpen
  const getFlowRate = () => {
    if (pumpMode === 'standby') return 0;
    const baseFlow = pumpMode === 'boost' ? 8.5 : 4.2;
    return Number((baseFlow * (valveOpen / 100)).toFixed(2));
  };

  const getPowerConsumption = () => {
    if (pumpMode === 'standby') return 0.2; // standby idle power
    const basePower = pumpMode === 'boost' ? 24.8 : 11.2;
    const flowModifier = valveOpen / 100;
    return Number((basePower * (0.6 + 0.4 * flowModifier)).toFixed(2));
  };

  const getTemperatures = () => {
    if (pumpMode === 'standby') {
      return { supply: 22.0, returnTemp: 22.0, deltaT: 0.0 };
    }
    const flow = getFlowRate();
    if (flow === 0) {
      return { supply: 6.0, returnTemp: 6.0, deltaT: 0.0 };
    }
    // Faster flow means water stays colder (lower delta T)
    const supply = 6.2;
    const deltaT = Number((15 / flow).toFixed(1));
    const returnTemp = Number((supply + deltaT).toFixed(1));
    return { supply, returnTemp, deltaT };
  };

  const temps = getTemperatures();
  const flowRate = getFlowRate();
  const power = getPowerConsumption();

  // Run diagnostics effect
  useEffect(() => {
    if (!isDiagnosticRunning) return;
    setDiagnosticProgress(0);
    setDiagnosticResult('');

    const interval = setInterval(() => {
      setDiagnosticProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDiagnosticRunning(false);
          setDiagnosticResult('ALL SYSTEMS OPERATIONAL (PASS) - ADDC SAFETY SIGNOFF VALID');
          return 100;
        }
        return prev + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isDiagnosticRunning]);

  return (
    <div className="w-full bg-app-card border border-app-border rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between font-sans text-left">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-app-border pb-4 mb-6">
        <div>
          <h3 className="text-sm font-heading font-extrabold text-white uppercase tracking-wider">
            MEP Cooling Loop &amp; VAV Control Simulator
          </h3>
          <p className="text-[10px] text-app-muted mt-0.5">
            Variable refrigerant and chilled water circulation balancing panel
          </p>
        </div>
        <span className="bg-brand-teal/10 border border-brand-teal/30 px-2 py-0.5 rounded text-[8px] font-mono font-bold text-brand-teal tracking-widest uppercase">
          SYS-STATUS: OK
        </span>
      </div>

      {/* Simulator Visual Block (Cooling loop drawing) */}
      <div className="h-56 sm:h-64 bg-app-secondary border border-app-border rounded-xl p-5 relative flex flex-col justify-between overflow-hidden">
        {/* Sensor diagnostics overlay */}
        <div className="absolute top-3 left-4 text-[7px] font-mono text-app-muted space-y-0.5">
          <span>CHILLER UNIT: AH-CH-400A</span>
          <span>COMPRESSOR: INVERTER SCROLL</span>
          <span>REFRIGERANT: R410A (ESTIDAMA COMPLIANT)</span>
        </div>

        {/* Dynamic Graphic */}
        <div className="w-full flex-1 flex items-center justify-center relative mt-6">
          <svg width="100%" height="100%" className="max-w-sm overflow-visible">
            {/* Chiller Unit Box (Left) */}
            <rect x="10" y="30" width="80" height="90" rx="6" fill="#131B2E" stroke="#334155" strokeWidth="1.5" />
            <text x="50" y="55" textAnchor="middle" className="fill-brand-gold font-mono text-[8px] font-extrabold">CHILLER</text>
            <text x="50" y="68" textAnchor="middle" className="fill-app-fg font-sans text-[7px] font-light">6.2°C Supply</text>
            
            {/* Compressor active light */}
            <circle cx="50" cy="95" r="5" className={pumpMode === 'standby' ? 'fill-gray-600' : pumpMode === 'boost' ? 'fill-red-500 animate-pulse' : 'fill-brand-teal animate-pulse'} />
            <text x="50" y="112" textAnchor="middle" className="fill-app-muted font-mono text-[6px]">COMPRESSOR</text>

            {/* VAV Cooling Coil / Fan (Right) */}
            <rect x="220" y="30" width="80" height="90" rx="6" fill="#131B2E" stroke="#334155" strokeWidth="1.5" />
            <text x="260" y="50" textAnchor="middle" className="fill-brand-teal font-mono text-[8px] font-extrabold">COOLING COIL</text>
            
            {/* Spinning Fan Graphic */}
            <g transform="translate(260, 85)">
              <circle cx="0" cy="0" r="18" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
              <g className={pumpMode === 'standby' ? '' : pumpMode === 'boost' ? 'animate-[spin_0.8s_linear_infinite]' : 'animate-[spin_2s_linear_infinite]'}>
                <path d="M 0 0 L -4 -16 A 5 5 0 0 1 4 -16 Z" fill="#C5A880" />
                <path d="M 0 0 L 16 -4 A 5 5 0 0 1 16 4 Z" fill="#C5A880" />
                <path d="M 0 0 L 4 16 A 5 5 0 0 1 -4 16 Z" fill="#C5A880" />
                <path d="M 0 0 L -16 4 A 5 5 0 0 1 -16 -4 Z" fill="#C5A880" />
              </g>
              <circle cx="0" cy="0" r="4" fill="#131B2E" stroke="#C5A880" strokeWidth="1" />
            </g>

            {/* Chilled Water Supply Line (Bottom - Blue) */}
            {/* From Chiller to Cooling Coil */}
            <path 
              d="M 90 100 L 220 100" 
              fill="none" 
              stroke={pumpMode === 'standby' ? '#475569' : '#00A8C6'} 
              strokeWidth="2.5" 
            />
            {pumpMode !== 'standby' && (
              <path 
                d="M 90 100 L 220 100" 
                fill="none" 
                stroke="#E0F2FE" 
                strokeWidth="2.5" 
                strokeDasharray="10 20"
                className={pumpMode === 'boost' ? 'animate-[dash_0.8s_linear_infinite]' : 'animate-[dash_2s_linear_infinite]'}
              />
            )}
            <text x="155" y="112" textAnchor="middle" className="fill-brand-teal font-mono text-[7px] font-bold">SUPPLY ({temps.supply}°C)</text>

            {/* Warm Water Return Line (Top - Red/Orange) */}
            {/* From Cooling Coil back to Chiller */}
            <path 
              d="M 220 45 L 90 45" 
              fill="none" 
              stroke={pumpMode === 'standby' ? '#475569' : '#EF4444'} 
              strokeWidth="2.5" 
            />
            {pumpMode !== 'standby' && (
              <path 
                d="M 220 45 L 90 45" 
                fill="none" 
                stroke="#FEE2E2" 
                strokeWidth="2.5" 
                strokeDasharray="10 20"
                className={pumpMode === 'boost' ? 'animate-[dash_0.8s_linear_infinite]' : 'animate-[dash_2s_linear_infinite]'}
              />
            )}
            <text x="155" y="40" textAnchor="middle" className="fill-red-400 font-mono text-[7px] font-bold">RETURN ({temps.returnTemp}°C)</text>

            {/* Valve Symbol on Supply Line */}
            <g transform="translate(155, 100)">
              <polygon points="-8,-6 -8,6 8,-6 8,6" fill={pumpMode === 'standby' ? '#475569' : '#C5A880'} stroke="#131B2E" strokeWidth="1" />
              <circle cx="0" cy="0" r="3" fill="#131B2E" stroke="#C5A880" strokeWidth="1" />
              {/* Valve text indicating open rate */}
              <text x="0" y="-12" textAnchor="middle" className="fill-brand-gold font-mono text-[6px] font-bold">{valveOpen}% OPEN</text>
            </g>
          </svg>
        </div>

        {/* Phase details metrics bar */}
        <div className="border-t border-app-border/80 pt-3 grid grid-cols-3 gap-2 text-center text-[8px] font-mono">
          <div>
            <span className="text-app-muted block uppercase">Fluid Velocity</span>
            <span className="text-brand-teal font-bold block mt-0.5">
              {pumpMode === 'standby' ? '0.00' : pumpMode === 'boost' ? '2.14' : '1.05'} m/s
            </span>
          </div>
          <div>
            <span className="text-app-muted block uppercase">Chiller COP</span>
            <span className="text-brand-teal font-bold block mt-0.5">
              {pumpMode === 'standby' ? '0.0' : pumpMode === 'boost' ? '5.4' : '6.2'} (A+ Grade)
            </span>
          </div>
          <div>
            <span className="text-app-muted block uppercase">Heat Exferred</span>
            <span className="text-brand-teal font-bold block mt-0.5">
              {pumpMode === 'standby' ? '0.0' : (flowRate * 4.186 * temps.deltaT).toFixed(1)} kW
            </span>
          </div>
        </div>
      </div>

      {/* Control Panel Section */}
      <div className="my-5 space-y-4">
        {/* Slider control */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-[9px] font-mono">
            <span className="text-app-muted uppercase">Balancing Valve Angle (V1):</span>
            <span className="text-brand-gold font-bold">{valveOpen}% Angle (Opening)</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={valveOpen} 
            onChange={(e) => {
              setValveOpen(Number(e.target.value));
              if (pumpMode === 'standby') setPumpMode('eco'); // activate automatically on adjustment
            }}
            className="w-full accent-brand-gold bg-app-secondary border border-app-border rounded-lg h-2" 
          />
        </div>

        {/* Buttons for mode selector */}
        <div className="grid grid-cols-3 gap-2">
          {(['eco', 'boost', 'standby'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setPumpMode(mode)}
              className={`py-2 px-1 rounded text-center text-[8px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                pumpMode === mode 
                  ? 'bg-brand-teal text-primary-dark border-brand-teal shadow-md' 
                  : 'bg-app-secondary border-app-border text-app-fg hover:border-brand-teal/40'
              }`}
            >
              {mode === 'eco' ? 'Eco Mode' : mode === 'boost' ? 'Boost Cool' : 'Stop Pump'}
            </button>
          ))}
        </div>
      </div>

      {/* Live Data Summary Inspector */}
      <div className="bg-app-secondary/50 border border-app-border p-4 rounded-xl space-y-3">
        <div className="grid grid-cols-3 gap-4 text-[10px] font-mono border-b border-app-border/40 pb-2">
          <div>
            <span className="text-app-muted block">Flow Vol:</span>
            <span className="text-white font-bold block mt-0.5">{flowRate} L/sec</span>
          </div>
          <div>
            <span className="text-app-muted block">Delta-T:</span>
            <span className="text-brand-gold font-bold block mt-0.5">{temps.deltaT}°C</span>
          </div>
          <div>
            <span className="text-app-muted block">Pump Load:</span>
            <span className="text-brand-teal font-bold block mt-0.5">{power} kW</span>
          </div>
        </div>

        {/* Diagnostics Button */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <button
            onClick={() => setIsDiagnosticRunning(true)}
            disabled={isDiagnosticRunning}
            className="px-3 py-1.5 rounded bg-brand-gold text-primary-dark text-[9px] font-bold uppercase tracking-wide hover:bg-brand-gold/90 transition-all duration-300 disabled:opacity-50"
          >
            {isDiagnosticRunning ? 'RUNNING SCAN...' : 'SCAN HYDRAULIC PRESSURE'}
          </button>
          
          {isDiagnosticRunning && (
            <div className="flex-1 max-w-[150px] bg-app-card border border-app-border h-2 rounded-full overflow-hidden">
              <div 
                className="bg-brand-teal h-full transition-all duration-150" 
                style={{ width: `${diagnosticProgress}%` }}
              ></div>
            </div>
          )}

          {diagnosticResult && (
            <span className="text-[8px] font-mono text-brand-teal font-bold">
              ✓ {diagnosticResult}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
