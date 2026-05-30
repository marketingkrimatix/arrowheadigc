'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type Division = 'villa' | 'hdpe' | 'fm' | 'civil';

export default function HomepageRfqCalculator() {
  const [division, setDivision] = useState<Division>('villa');
  const [step, setStep] = useState<number>(1); // 1 = division, 2 = inputs, 3 = results

  // Villa Inputs
  const [villaArea, setVillaArea] = useState<number>(6000);
  const [estidamaPearls, setEstidamaPearls] = useState<number>(2);
  const [finishQuality, setFinishQuality] = useState<'luxury' | 'ultra'>('luxury');

  // HDPE Inputs
  const [pipeDiameter, setPipeDiameter] = useState<number>(400); // mm
  const [pipelineLength, setPipelineLength] = useState<number>(800); // meters
  const [pressureRating, setPressureRating] = useState<number>(16); // PN

  // FM Inputs
  const [fmType, setFmType] = useState<'hard' | 'both'>('both');
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('commercial');
  const [propertyArea, setPropertyArea] = useState<number>(12000); // sq ft

  // Civil Inputs
  const [concreteVolume, setConcreteVolume] = useState<number>(500); // m3
  const [concreteGrade, setConcreteGrade] = useState<'C40' | 'C50-SRC'>('C50-SRC');

  // Estimation Calculation Logic
  const getEstimation = () => {
    let base = 0;
    let materials = 0;
    let labor = 0;
    let testing = 0;
    let approvals = 0;

    if (division === 'villa') {
      const rate = finishQuality === 'ultra' ? 420 : 320; // AED per sq ft base
      base = villaArea * rate;
      // Estidama compliance premiums
      const pearlPremium = estidamaPearls === 3 ? 1.12 : estidamaPearls === 2 ? 1.05 : 1.0;
      base = base * pearlPremium;
      
      materials = base * 0.52;
      labor = base * 0.28;
      approvals = base * 0.12;
      testing = base * 0.08;
    } else if (division === 'hdpe') {
      // Pipe size rate + length
      const diameterCost = pipeDiameter * 0.95; // bigger diameter = more expensive
      const pressureMult = pressureRating === 25 ? 1.25 : pressureRating === 16 ? 1.1 : 1.0;
      const costPerMeter = diameterCost * pressureMult;
      base = pipelineLength * costPerMeter;

      materials = base * 0.60;
      labor = base * 0.22;
      testing = base * 0.12;
      approvals = base * 0.06;
    } else if (division === 'fm') {
      // FM annual rates
      const rate = fmType === 'both' ? 4.5 : 2.5; // AED per sq ft
      base = propertyArea * rate;
      if (propertyType === 'commercial') base *= 1.15; // commercial premium

      materials = base * 0.35;
      labor = base * 0.45;
      testing = base * 0.15;
      approvals = base * 0.05;
    } else {
      // Civil Works
      const gradeRate = concreteGrade === 'C50-SRC' ? 450 : 380; // AED per m3
      base = concreteVolume * gradeRate;

      materials = base * 0.55;
      labor = base * 0.25;
      testing = base * 0.12;
      approvals = base * 0.08;
    }

    const total = base;
    return {
      total: Math.round(total),
      materials: Math.round(materials),
      labor: Math.round(labor),
      testing: Math.round(testing),
      approvals: Math.round(approvals)
    };
  };

  const est = getEstimation();

  // Helper formatting
  const formatAED = (val: number) => {
    return new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="w-full bg-app-card border border-app-border rounded-2xl p-6 sm:p-8 shadow-xl text-left max-w-3xl mx-auto font-sans relative overflow-hidden">
      {/* Dynamic top bar progress indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-app-secondary">
        <div 
          className="bg-brand-teal h-full transition-all duration-500" 
          style={{ width: `${(step / 3) * 100}%` }}
        ></div>
      </div>

      <div className="flex justify-between items-center border-b border-app-border pb-4 mb-6">
        <div>
          <span className="text-[8px] font-mono text-brand-gold font-bold uppercase tracking-widest block">
            ESTIDAMA &amp; ADM COMPLIANT ESTIMATOR
          </span>
          <h3 className="text-base font-heading font-extrabold text-white uppercase tracking-wider mt-0.5">
            Technical Budget Calculator
          </h3>
        </div>
        <div className="text-[10px] font-mono text-app-muted">
          STEP {step} OF 3
        </div>
      </div>

      {/* STEP 1: Select Division */}
      {step === 1 && (
        <div className="space-y-6">
          <p className="text-xs text-app-muted font-light leading-relaxed">
            Select an operational division to configure structural inputs, regulatory codes, and material scopes for a preliminary estimate.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => { setDivision('villa'); setStep(2); }}
              className={`p-5 rounded-xl border text-left transition-all duration-300 ${
                division === 'villa' ? 'bg-app-secondary border-brand-teal' : 'bg-app-card border-app-border hover:border-brand-teal/40'
              }`}
            >
              <span className="text-xl">🏡</span>
              <h4 className="text-sm font-bold text-white uppercase tracking-wide mt-3">Villa Construction</h4>
              <p className="text-[10px] text-app-muted mt-1 leading-relaxed">Luxury Design-Build private residences under ADM building permit regulations.</p>
            </button>

            <button
              onClick={() => { setDivision('hdpe'); setStep(2); }}
              className={`p-5 rounded-xl border text-left transition-all duration-300 ${
                division === 'hdpe' ? 'bg-app-secondary border-brand-teal' : 'bg-app-card border-app-border hover:border-brand-teal/40'
              }`}
            >
              <span className="text-xl">⚙️</span>
              <h4 className="text-sm font-bold text-white uppercase tracking-wide mt-3">HDPE Pipelines</h4>
              <p className="text-[10px] text-app-muted mt-1 leading-relaxed">Hydraulic networks, butt-fusion welding logs, and ADSSC/ADDC inspections.</p>
            </button>

            <button
              onClick={() => { setDivision('fm'); setStep(2); }}
              className={`p-5 rounded-xl border text-left transition-all duration-300 ${
                division === 'fm' ? 'bg-app-secondary border-brand-teal' : 'bg-app-card border-app-border hover:border-brand-teal/40'
              }`}
            >
              <span className="text-xl">🔩</span>
              <h4 className="text-sm font-bold text-white uppercase tracking-wide mt-3">Facilities Management</h4>
              <p className="text-[10px] text-app-muted mt-1 leading-relaxed">Hard MEP preventative maintenance contracts (AMCs) and building safety audits.</p>
            </button>

            <button
              onClick={() => { setDivision('civil'); setStep(2); }}
              className={`p-5 rounded-xl border text-left transition-all duration-300 ${
                division === 'civil' ? 'bg-app-secondary border-brand-teal' : 'bg-app-card border-app-border hover:border-brand-teal/40'
              }`}
            >
              <span className="text-xl">🧱</span>
              <h4 className="text-sm font-bold text-white uppercase tracking-wide mt-3">Infrastructure Civil</h4>
              <p className="text-[10px] text-app-muted mt-1 leading-relaxed">Concrete rafts, sulfate-resistant castings, site grading, and dewatering.</p>
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Configure Inputs */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="flex items-center space-x-3 bg-app-secondary/30 p-3 rounded-lg border border-app-border">
            <span className="text-lg">
              {division === 'villa' ? '🏡' : division === 'hdpe' ? '⚙️' : division === 'fm' ? '🔩' : '🧱'}
            </span>
            <span className="text-xs font-mono font-bold text-brand-teal uppercase">
              Configuring: {division === 'villa' ? 'Villa Design-Build' : division === 'hdpe' ? 'HDPE Pressure Piping' : division === 'fm' ? 'Annual Maintenance' : 'Civil Concrete Rafts'}
            </span>
          </div>

          {/* VILLA INPUTS */}
          {division === 'villa' && (
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-app-muted uppercase">Expected Built-Up Area (BUA):</span>
                  <span className="text-brand-gold font-bold">{villaArea.toLocaleString()} SQ FT</span>
                </div>
                <input 
                  type="range" min="3000" max="15000" step="500" value={villaArea}
                  onChange={(e) => setVillaArea(Number(e.target.value))}
                  className="w-full accent-brand-gold bg-app-secondary border border-app-border h-2 rounded" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-app-muted uppercase block">Estidama Pearl Target:</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((val) => (
                      <button
                        key={val} onClick={() => setEstidamaPearls(val)}
                        className={`py-2 px-1 rounded text-center text-[9px] font-mono font-bold transition-all border ${
                          estidamaPearls === val ? 'bg-brand-teal text-primary-dark border-brand-teal' : 'bg-app-card border-app-border text-app-fg'
                        }`}
                      >
                        {val} Pearl
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-app-muted uppercase block">Finishing Standard:</span>
                  <div className="grid grid-cols-2 gap-2">
                    {(['luxury', 'ultra'] as const).map((lvl) => (
                      <button
                        key={lvl} onClick={() => setFinishQuality(lvl)}
                        className={`py-2 px-1 rounded text-center text-[9px] font-mono font-bold uppercase transition-all border ${
                          finishQuality === lvl ? 'bg-brand-teal text-primary-dark border-brand-teal' : 'bg-app-card border-app-border text-app-fg'
                        }`}
                      >
                        {lvl === 'luxury' ? 'Luxury' : 'Ultra-Lux'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* HDPE INPUTS */}
          {division === 'hdpe' && (
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-app-muted uppercase">Pipeline Linear Length:</span>
                  <span className="text-brand-gold font-bold">{pipelineLength.toLocaleString()} METERS</span>
                </div>
                <input 
                  type="range" min="100" max="5000" step="50" value={pipelineLength}
                  onChange={(e) => setPipelineLength(Number(e.target.value))}
                  className="w-full accent-brand-gold bg-app-secondary border border-app-border h-2 rounded" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-app-muted uppercase block">Nominal Diameter (OD):</span>
                  <select 
                    value={pipeDiameter} 
                    onChange={(e) => setPipeDiameter(Number(e.target.value))}
                    className="w-full bg-app-card border border-app-border text-xs text-white p-2.5 rounded focus:outline-none"
                  >
                    <option value="110">DN 110mm</option>
                    <option value="250">DN 250mm</option>
                    <option value="400">DN 400mm (Main Distribution)</option>
                    <option value="630">DN 630mm</option>
                    <option value="900">DN 900mm (Trunk Sewer)</option>
                    <option value="1200">DN 1200mm (Transmission)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-app-muted uppercase block">Pressure Rating:</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[10, 16, 25].map((val) => (
                      <button
                        key={val} onClick={() => setPressureRating(val)}
                        className={`py-2 px-1 rounded text-center text-[9px] font-mono font-bold transition-all border ${
                          pressureRating === val ? 'bg-brand-teal text-primary-dark border-brand-teal' : 'bg-app-card border-app-border text-app-fg'
                        }`}
                      >
                        PN{val}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FM INPUTS */}
          {division === 'fm' && (
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-app-muted uppercase">Gross Floor Area (GFA):</span>
                  <span className="text-brand-gold font-bold">{propertyArea.toLocaleString()} SQ FT</span>
                </div>
                <input 
                  type="range" min="2000" max="100000" step="1000" value={propertyArea}
                  onChange={(e) => setPropertyArea(Number(e.target.value))}
                  className="w-full accent-brand-gold bg-app-secondary border border-app-border h-2 rounded" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-app-muted uppercase block">SLA Services Scope:</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setFmType('hard')}
                      className={`py-2 px-1 rounded text-center text-[9px] font-mono font-bold uppercase transition-all border ${
                        fmType === 'hard' ? 'bg-brand-teal text-primary-dark border-brand-teal' : 'bg-app-card border-app-border text-app-fg'
                      }`}
                    >
                      Hard FM (MEP)
                    </button>
                    <button
                      onClick={() => setFmType('both')}
                      className={`py-2 px-1 rounded text-center text-[9px] font-mono font-bold uppercase transition-all border ${
                        fmType === 'both' ? 'bg-brand-teal text-primary-dark border-brand-teal' : 'bg-app-card border-app-border text-app-fg'
                      }`}
                    >
                      Hard + Soft (All)
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-app-muted uppercase block">Property Type:</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setPropertyType('residential')}
                      className={`py-2 px-1 rounded text-center text-[9px] font-mono font-bold uppercase transition-all border ${
                        propertyType === 'residential' ? 'bg-brand-teal text-primary-dark border-brand-teal' : 'bg-app-card border-app-border text-app-fg'
                      }`}
                    >
                      Residential
                    </button>
                    <button
                      onClick={() => setPropertyType('commercial')}
                      className={`py-2 px-1 rounded text-center text-[9px] font-mono font-bold uppercase transition-all border ${
                        propertyType === 'commercial' ? 'bg-brand-teal text-primary-dark border-brand-teal' : 'bg-app-card border-app-border text-app-fg'
                      }`}
                    >
                      Commercial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CIVIL INPUTS */}
          {division === 'civil' && (
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-app-muted uppercase">Reinforced Concrete Volume:</span>
                  <span className="text-brand-gold font-bold">{concreteVolume.toLocaleString()} CUBIC METERS</span>
                </div>
                <input 
                  type="range" min="50" max="2500" step="50" value={concreteVolume}
                  onChange={(e) => setConcreteVolume(Number(e.target.value))}
                  className="w-full accent-brand-gold bg-app-secondary border border-app-border h-2 rounded" 
                />
              </div>

              <div className="space-y-2">
                <span className="text-[9px] font-mono text-app-muted uppercase block font-bold">Concrete Mix Specification:</span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setConcreteGrade('C40')}
                    className={`py-3 px-2 rounded text-left transition-all border ${
                      concreteGrade === 'C40' ? 'bg-app-secondary border-brand-teal' : 'bg-app-card border-app-border'
                    }`}
                  >
                    <span className="text-xs font-bold text-white block">C40 Grade (Standard)</span>
                    <span className="text-[8px] text-app-muted mt-0.5 block">Standard foundation work with OPC cement</span>
                  </button>
                  <button
                    onClick={() => setConcreteGrade('C50-SRC')}
                    className={`py-3 px-2 rounded text-left transition-all border ${
                      concreteGrade === 'C50-SRC' ? 'bg-app-secondary border-brand-teal' : 'bg-app-card border-app-border'
                    }`}
                  >
                    <span className="text-xs font-bold text-white block">C50 SRC (Sulfate Resistant)</span>
                    <span className="text-[8px] text-brand-gold mt-0.5 block font-mono">Recommended: high saline water table defense</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="flex justify-between items-center border-t border-app-border pt-5">
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 border border-app-border hover:bg-app-secondary rounded text-xs font-bold text-white uppercase tracking-wider transition-colors"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="px-6 py-2.5 bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all"
            >
              Calculate Estimate →
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: View Results */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="bg-app-secondary/50 border border-app-border rounded-xl p-5 sm:p-6 text-center space-y-2">
            <span className="text-[9px] font-mono text-brand-gold uppercase tracking-widest block font-bold">
              ESTIMATED PROJECT BUDGET RANGE
            </span>
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              {formatAED(est.total * 0.92)} - {formatAED(est.total * 1.08)}
            </div>
            <p className="text-[10px] text-app-muted leading-relaxed max-w-md mx-auto font-light">
              This is a preliminary estimation including standard materials, civil labor overheads, QA/QC tests, and local municipal NOC permit submittals in Abu Dhabi.
            </p>
          </div>

          {/* Visual Bar Allocation Chart */}
          <div className="space-y-4">
            <span className="text-[9px] font-mono text-app-muted uppercase tracking-widest block font-bold">Cost Breakdown Allocation</span>
            <div className="space-y-3 font-mono text-[9px] uppercase">
              {/* Materials */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-app-muted">Materials Procurement</span>
                  <span className="text-white font-bold">{formatAED(est.materials)} ({(est.materials / est.total * 100).toFixed(0)}%)</span>
                </div>
                <div className="h-2 bg-app-secondary rounded-full overflow-hidden">
                  <div className="bg-brand-teal h-full rounded-full" style={{ width: `${(est.materials / est.total) * 100}%` }}></div>
                </div>
              </div>

              {/* Labor & Installation */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-app-muted">Civil Labor &amp; Welding Rig Operators</span>
                  <span className="text-white font-bold">{formatAED(est.labor)} ({(est.labor / est.total * 100).toFixed(0)}%)</span>
                </div>
                <div className="h-2 bg-app-secondary rounded-full overflow-hidden">
                  <div className="bg-brand-gold h-full rounded-full" style={{ width: `${(est.labor / est.total) * 100}%` }}></div>
                </div>
              </div>

              {/* Testing & QAQC */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-app-muted">QC Testing (Hydro / Compaction / PIT)</span>
                  <span className="text-white font-bold">{formatAED(est.testing)} ({(est.testing / est.total * 100).toFixed(0)}%)</span>
                </div>
                <div className="h-2 bg-app-secondary rounded-full overflow-hidden">
                  <div className="bg-brand-teal/60 h-full rounded-full" style={{ width: `${(est.testing / est.total) * 100}%` }}></div>
                </div>
              </div>

              {/* Permits & Government Fees */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-app-muted">TAMM Permits &amp; Utility Tie-in Approvals</span>
                  <span className="text-white font-bold">{formatAED(est.approvals)} ({(est.approvals / est.total * 100).toFixed(0)}%)</span>
                </div>
                <div className="h-2 bg-app-secondary rounded-full overflow-hidden">
                  <div className="bg-brand-gold/60 h-full rounded-full" style={{ width: `${(est.approvals / est.total) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 border-t border-app-border pt-5">
            <button
              onClick={() => setStep(2)}
              className="px-4 py-2 border border-app-border hover:bg-app-secondary rounded text-xs font-bold text-white uppercase tracking-wider text-center transition-colors"
            >
              ← Edit Specs
            </button>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 bg-app-card hover:bg-app-secondary border border-app-border rounded text-xs font-bold text-brand-gold text-center uppercase tracking-wider transition-colors"
              >
                Reset Calculator
              </button>
              <Link
                href={`/contact?rfq=true&division=${division}&budget=${est.total}`}
                className="px-6 py-2.5 bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider text-center hover:bg-brand-teal-hover shadow-lg transition-all"
              >
                Submit Budget RFQ →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
