'use client';

import React, { useState, useEffect } from 'react';

interface FmSystem {
  id: string;
  name: string;
  category: string;
  status: 'Operational' | 'Alert' | 'Standby';
  metricLabel: string;
  metricValue: string;
  amcCode: string;
  spec: string;
  desc: string;
  complianceBody: string;
}

export default function SmartFmDashboard() {
  const [activeSystemId, setActiveSystemId] = useState<string>('hvac');
  const [isInspecting, setIsInspecting] = useState<boolean>(false);
  const [inspectProgress, setInspectProgress] = useState<number>(0);
  const [inspectStatus, setInspectStatus] = useState<string>('');
  const [logs, setLogs] = useState<string[]>([
    'System initialized in Normal Mode.',
    'Daily Estidama thermal profile loaded.',
  ]);

  const systems: FmSystem[] = [
    {
      id: 'hvac',
      name: 'HVAC Chilled Water Loop',
      category: 'Mechanical',
      status: 'Operational',
      metricLabel: 'Supply Temp',
      metricValue: '6.8°C (Set: 6.5°C)',
      amcCode: 'AMC-HVAC-2026-08',
      spec: 'Carrier 30XW Water Chiller, 1400kW cooling load',
      desc: 'Monitors the primary chilled water piping networks supplying the HVAC air handling units. Features digital flow switches, pressure transmitters, and automated balancing controls to minimize chilled water losses.',
      complianceBody: 'ADDC Electrical & Load Guidelines'
    },
    {
      id: 'electrical',
      name: 'Electrical Distribution Boards',
      category: 'Power',
      status: 'Operational',
      metricLabel: 'Active Load',
      metricValue: '142.8 kW (Balance: 98%)',
      amcCode: 'AMC-ELEC-2026-11',
      spec: 'ABB 400V Distribution board, multi-tariff metering',
      desc: 'Controls building main panels, secondary boards, and automatic transfer switches (ATS) connected to the standby backup generator. Tracks phase balancing to optimize power factor and thermal safety.',
      complianceBody: 'ADDC & Abu Dhabi Municipality Code'
    },
    {
      id: 'plumbing',
      name: 'Domestic Water & Booster Pumps',
      category: 'Plumbing',
      status: 'Standby',
      metricLabel: 'Reservoir Level',
      metricValue: '82% Capacity',
      amcCode: 'AMC-PLUM-2026-04',
      spec: 'Grundfos Hydro MPC Multi-Pump Booster Rig',
      desc: 'Manages incoming potable water pressure and tank accumulation volumes. Automatically triggers variable speed booster motors to maintain constant header pressure of 4.5 bar across high floors.',
      complianceBody: 'ADSSC Sewerage & Potable Water Standards'
    },
    {
      id: 'fire',
      name: 'Fire Suppression & Sprinklers',
      category: 'Safety',
      status: 'Operational',
      metricLabel: 'Header Pressure',
      metricValue: '12.4 Bar (Stable)',
      amcCode: 'AMC-FIRE-2026-01',
      spec: 'Armstrong 1500 GPM Fire Pump (Diesel / Electric)',
      desc: 'Ensures immediate standby pressure is maintained inside wet sprinkler riser lines. Integrates flow switches directly with building fire alarm panel and local civil defense telemetry systems.',
      complianceBody: 'Abu Dhabi Civil Defense (ADCD) NFPA-13'
    }
  ];

  const activeSystem = systems.find((s) => s.id === activeSystemId) || systems[0];

  // Run preventative check loop
  useEffect(() => {
    if (!isInspecting) return;
    setInspectProgress(0);
    setInspectStatus('Establishing sensor hook...');

    const logsList = [
      `Initializing telemetry read on ${activeSystem.name}...`,
      'Validating pressure differentials and flow parameters...',
      'Checking ESTIDAMA energy balance compliance thresholds...',
      'Confirming local Abu Dhabi municipal NOC coordinates...',
      'Verification complete. System diagnostics generated.'
    ];

    let timer = 0;
    const interval = setInterval(() => {
      setInspectProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsInspecting(false);
          setInspectStatus('SUCCESS: Check finished. Status: PASS.');
          setLogs((old) => [
            `[${new Date().toLocaleTimeString()}] INSPECTION COMPLETED: ${activeSystem.name} is fully verified under ${activeSystem.complianceBody} specifications.`,
            ...old,
          ]);
          return 100;
        }
        const nextProgress = prev + 10;
        // Output logs sequentially
        const logIndex = Math.floor(nextProgress / 20) - 1;
        if (logIndex >= 0 && logIndex < logsList.length) {
          setInspectStatus(logsList[logIndex]);
        }
        return nextProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isInspecting, activeSystemId]);

  return (
    <div className="w-full bg-app-card border border-app-border rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between font-sans text-left">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-app-border pb-4 mb-6">
        <div>
          <h3 className="text-sm font-heading font-extrabold text-white uppercase tracking-wider">
            Hard FM Assets Control Dashboard
          </h3>
          <p className="text-[10px] text-app-muted mt-0.5">
            Real-time preventative maintenance cycles &amp; regulatory logs
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse"></span>
          <span className="text-[8px] font-mono text-white font-bold tracking-wider uppercase">COMM-LINK ACTIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left Side: Systems Selection */}
        <div className="md:col-span-5 flex flex-col gap-3">
          <span className="text-[8px] font-mono text-app-muted uppercase tracking-widest block font-bold">SELECT BUILDING VERTICAL</span>
          {systems.map((sys) => (
            <button
              key={sys.id}
              onClick={() => {
                setActiveSystemId(sys.id);
                setIsInspecting(false);
                setInspectStatus('');
              }}
              className={`p-4 rounded-xl border transition-all duration-300 flex justify-between items-center text-left ${
                activeSystemId === sys.id
                  ? 'bg-app-secondary border-brand-teal shadow-md shadow-brand-teal/5'
                  : 'bg-app-card border-app-border/80 hover:border-brand-teal/40'
              }`}
            >
              <div className="space-y-1">
                <span className="text-[7px] font-mono text-brand-gold uppercase tracking-wider font-bold">
                  {sys.category}
                </span>
                <h4 className="text-xs font-bold text-white tracking-wide">
                  {sys.name}
                </h4>
              </div>
              <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-bold ${
                sys.status === 'Operational'
                  ? 'bg-brand-teal/10 text-brand-teal border border-brand-teal/20'
                  : sys.status === 'Standby'
                  ? 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20'
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}>
                {sys.status}
              </span>
            </button>
          ))}
        </div>

        {/* Right Side: Active Asset Details */}
        <div className="md:col-span-7 bg-app-secondary/40 border border-app-border rounded-xl p-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex justify-between items-start flex-wrap gap-2">
              <span className="bg-brand-teal/10 border border-brand-teal/30 px-2 py-0.5 rounded text-[8px] font-mono font-bold text-brand-teal tracking-widest">
                CODE: {activeSystem.amcCode}
              </span>
              <span className="text-[8px] font-mono text-app-muted">COMPLIANCE: {activeSystem.complianceBody}</span>
            </div>
            <h4 className="text-xs font-heading font-extrabold text-white uppercase tracking-wider mt-3">
              {activeSystem.name}
            </h4>
            <p className="text-app-muted text-xs font-light leading-relaxed mt-2">
              {activeSystem.desc}
            </p>
          </div>

          {/* SVG live diagnostics curve */}
          <div className="h-28 bg-app-card border border-app-border rounded-lg relative overflow-hidden flex items-center justify-center p-3">
            <span className="absolute top-2 left-3 text-[6px] font-mono text-app-muted uppercase">Live Sensor Waveform (100Hz)</span>
            <svg width="100%" height="100%" viewBox="0 0 300 80" className="text-brand-teal opacity-75 overflow-visible">
              {/* Animated sine grid */}
              <line x1="0" y1="40" x2="300" y2="40" stroke="#334155" strokeWidth="0.8" strokeDasharray="3 3" />
              <path 
                d={
                  activeSystemId === 'hvac'
                    ? "M 0 40 Q 30 10, 60 40 T 120 40 T 180 40 T 240 40 T 300 40"
                    : activeSystemId === 'electrical'
                    ? "M 0 40 L 20 20 L 40 60 L 60 10 L 80 70 L 100 40 L 200 40 L 220 15 L 240 65 L 260 30 L 280 50 L 300 40"
                    : activeSystemId === 'plumbing'
                    ? "M 0 50 Q 50 30, 100 50 T 200 50 T 300 50"
                    : "M 0 40 C 20 40, 40 10, 60 10 C 80 10, 100 70, 120 70 C 140 70, 160 40, 180 40 M 180 40 L 300 40"
                } 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeDasharray={activeSystemId === 'plumbing' ? 'none' : 'none'}
              />
              {/* Pulsing indicator node */}
              <circle cx="280" cy="40" r="3" className="fill-brand-gold animate-ping" />
              <circle cx="280" cy="40" r="2.5" className="fill-brand-gold" />
            </svg>
          </div>

          {/* Details Row */}
          <div className="grid grid-cols-2 gap-4 text-[9px] font-mono border-t border-app-border/60 pt-3">
            <div>
              <span className="text-app-muted block">{activeSystem.metricLabel}:</span>
              <span className="text-brand-teal font-bold block mt-0.5">{activeSystem.metricValue}</span>
            </div>
            <div>
              <span className="text-app-muted block">Hardware Model:</span>
              <span className="text-brand-gold font-bold block mt-0.5 truncate">{activeSystem.spec}</span>
            </div>
          </div>

          {/* Action trigger area */}
          <div className="border-t border-app-border/40 pt-3 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => setIsInspecting(true)}
              disabled={isInspecting}
              className="px-4 py-2 rounded bg-brand-teal text-primary-dark text-[9px] font-bold uppercase tracking-wider hover:bg-brand-teal/95 transition-all duration-300 disabled:opacity-50"
            >
              {isInspecting ? 'CHECK IN PROGRESS...' : 'RUN HARDWARE CHECK'}
            </button>

            {isInspecting && (
              <span className="text-[8px] font-mono text-brand-gold animate-pulse">
                {inspectProgress}% Complete...
              </span>
            )}
            
            {!isInspecting && inspectStatus && (
              <span className="text-[8px] font-mono text-brand-teal font-bold uppercase tracking-wide">
                {inspectStatus}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Audit Log Box */}
      <div className="mt-6 bg-app-secondary/30 border border-app-border rounded-xl p-4 font-mono">
        <span className="text-[7px] text-app-muted uppercase tracking-widest block font-bold mb-2">LIVE AMC EVENT LOGGER</span>
        <div className="h-20 overflow-y-auto text-[8px] text-app-muted space-y-1 scrollbar-thin">
          {logs.map((log, idx) => (
            <div key={idx} className="flex space-x-2">
              <span className="text-brand-gold font-bold">{`>`}</span>
              <span className="flex-1 text-white/90">{log}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
