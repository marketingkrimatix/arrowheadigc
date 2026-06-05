'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import AnimatedLogoSVG from './AnimatedLogoSVG';

export default function LogoIntro() {
  // const [showIntro, setShowIntro] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // useEffect(() => {
  //   // Run only in client browser environment
  //   if (typeof window !== 'undefined') {
  //     const hasPlayed = sessionStorage.getItem('ahigc-logo-intro-played');
  //     if (!hasPlayed) {
  //       setShowIntro(true);
  //       sessionStorage.setItem('ahigc-logo-intro-played', 'true');
  //     }
  //   }
  // }, []);

  useEffect(() => {
    if (!showIntro) return;

    // Lock scrolling on mounting
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Start fade out at 3.3 seconds (just after the animated logo finishes drawing and text slides up)
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 3300);

    // Unmount and unlock scroll at 3.8 seconds
    const dismissTimer = setTimeout(() => {
      setShowIntro(false);
      document.body.style.overflow = originalOverflow || '';
    }, 3800);

    return () => {
      document.body.style.overflow = originalOverflow || '';
      clearTimeout(fadeTimer);
      clearTimeout(dismissTimer);
    };
  }, [showIntro]);

  const handleSkip = () => {
    setIsFading(true);
    // Instant dismiss with small delay to let fade opacity transition start
    setTimeout(() => {
      setShowIntro(false);
      document.body.style.overflow = '';
    }, 200);
  };

  if (!showIntro) return null;

  const activeTheme = mounted ? resolvedTheme : 'dark';

  return (
    <div
      id="site-loader-intro"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-app-bg transition-opacity duration-500 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background architectural fine grid lines */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_0.5px,transparent_0.5px),linear-gradient(to_bottom,var(--card-border)_0.5px,transparent_0.5px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none"></div>
      
      {/* Premium background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 px-4 py-2 border border-brand-gold/30 hover:border-brand-teal text-brand-gold hover:text-brand-teal rounded text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-300 z-50 cursor-pointer bg-app-card/40 backdrop-blur"
      >
        Skip Intro
      </button>

      {/* Centered Animated Logo */}
      <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] relative z-10 flex items-center justify-center">
        <AnimatedLogoSVG
          animated={true}
          showText={true}
          forceTheme={activeTheme as 'light' | 'dark'}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
