'use client';

import React, { useState } from 'react';

export default function SplineShowcase() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-[500px] relative rounded-xl overflow-hidden border border-app-border bg-app-secondary/20 shadow-xl">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-app-secondary/60 backdrop-blur-xs z-10">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-2 border-brand-teal border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-xs text-app-muted font-mono uppercase tracking-widest animate-pulse">Loading Spline WebGL Engine...</p>
          </div>
        </div>
      )}
      
      <iframe
        src="/spline-embed.html"
        className="w-full h-full border-0 bg-transparent"
        title="Spline 3D Showcase"
        allow="webgl"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
