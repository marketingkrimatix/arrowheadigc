'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Slide {
  category: string;
  title: string;
  description: string;
  video: string;
  image: string;
  link: string;
  navLabel: string;
}

export default function CinematicHeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const slides: Slide[] = [
    {
      category: 'CLIMATE RESILIENCE',
      title: 'Strengthening Communities Through Infrastructure',
      description: 'Deploying high-pressure DN 1200mm HDPE trunk sewer and water loops built to ADSSC & ADDC specifications in Abu Dhabi.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-water-flowing-through-pipes-40019-large.mp4',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
      link: '/services/hdpe-pipelines',
      navLabel: 'Water Infrastructure'
    },
    {
      category: 'CIVIL STRUCTURAL',
      title: 'A Decade of Precision Villa Construction',
      description: 'From concrete foundations to high-end marble fit-outs, building custom luxury estates under Estidama green codes.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-working-on-a-construction-site-41648-large.mp4',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      link: '/services/villa-construction',
      navLabel: 'Villa Construction'
    },
    {
      category: 'FACILITIES MANAGEMENT',
      title: 'Protecting Asset Lifecycles 24/7',
      description: 'Structured preventative maintenance and hard mechanical services ensuring peak system performance for commercial blocks.',
      video: '/arrowheadigc-media/villa-2.mp4',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=1200&q=80',
      link: '/services/facility-management',
      navLabel: 'Asset Management'
    }
  ];

  // Auto transition slides
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 20000);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  // Handle play/pause sync on video tags
  useEffect(() => {
    slides.forEach((_, idx) => {
      const video = videoRefs.current[idx];
      if (video) {
        if (idx === activeSlide && isPlaying) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [activeSlide, isPlaying, slides]);

  return (
    <div className="w-full h-[92vh] relative overflow-hidden bg-primary-dark select-none flex flex-col justify-between p-8 sm:p-16 text-white border-b border-app-border">
      
      {/* 1. Viewport Slides Backgrounds */}
      {slides.map((slide, idx) => {
        const isActive = idx === activeSlide;
        return (
          <div 
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
          >
            {/* Loop Video background with image fallback */}
            <video
              ref={(el) => { videoRefs.current[idx] = el; }}
              src={slide.video}
              poster={slide.image}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Cinematic dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>
          </div>
        );
      })}

      {/* 2. Geometric Accent Shape Overlay (Right Edge) */}
      <div className="absolute right-0 top-0 bottom-0 w-[150px] sm:w-[250px] pointer-events-none z-10 opacity-70 sm:opacity-90">
        <svg width="100%" height="100%" viewBox="0 0 250 800" preserveAspectRatio="none" className="h-full w-full">
          {/* Angled geometric structures in Gold and Teal */}
          <polygon points="120,0 250,0 250,800 50,800" fill="var(--color-primary-dark)" opacity="0.3" />
          <polygon points="170,0 250,0 250,400 130,400" fill="#00A8C6" opacity="0.15" />
          <polygon points="130,400 250,400 250,800 210,800" fill="#C5A880" opacity="0.2" />
          <path d="M 120 0 L 250 400 L 90 800" fill="none" stroke="#C5A880" strokeWidth="2" opacity="0.3" />
          <path d="M 150 0 L 250 300 L 120 800" fill="none" stroke="#00A8C6" strokeWidth="1.5" opacity="0.4" />
        </svg>
      </div>

      {/* Spacer to push content down */}
      <div></div>

      {/* 3. Central Overlay Content */}
      <div className="relative z-10 max-w-3xl space-y-6 animate-fadeIn">
        {/* Category Prefix with Line */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-brand-gold"></div>
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-brand-gold">
            {slides[activeSlide].category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.1] text-white">
          {slides[activeSlide].title}
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-xl">
          {slides[activeSlide].description}
        </p>

        {/* Link Button */}
        <div className="pt-2">
          <Link 
            href={slides[activeSlide].link}
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-brand-teal transition-colors"
          >
            <span>Read The Story</span>
            <div className="w-10 h-[1px] bg-white group-hover:bg-brand-teal group-hover:w-16 transition-all duration-300"></div>
          </Link>
        </div>
      </div>

      {/* 4. Bottom Row Navigation & Play/Pause */}
      <div className="relative z-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Tab Selection */}
        <div className="flex flex-wrap gap-8 justify-center sm:justify-start w-full sm:w-auto">
          {slides.map((slide, idx) => {
            const isActive = idx === activeSlide;
            return (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className="group flex flex-col text-left focus:outline-none cursor-pointer"
              >
                {/* Progress bar container */}
                <div className="w-[120px] sm:w-[160px] h-[2px] bg-white/20 mb-2 relative overflow-hidden">
                  {isActive && isPlaying && (
                    <div className="absolute inset-y-0 left-0 bg-brand-gold w-full origin-left animate-[bar_20s_linear_infinite]"></div>
                  )}
                  {isActive && !isPlaying && (
                    <div className="absolute inset-y-0 left-0 bg-brand-gold w-1/2"></div>
                  )}
                </div>
                {/* Labels */}
                <span className={`text-[8px] font-mono tracking-widest uppercase ${isActive ? 'text-brand-gold font-bold' : 'text-white/60'}`}>
                  0{idx + 1} / {slide.navLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 rounded-full border border-white/20 hover:border-brand-teal hover:text-brand-teal transition-colors flex items-center justify-center focus:outline-none cursor-pointer"
          title={isPlaying ? 'Pause Autoplay' : 'Play Autoplay'}
        >
          {isPlaying ? (
            /* Pause Icon */
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            /* Play Icon */
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

      </div>

      {/* Progress Animation Inject */}
      <style jsx>{`
        @keyframes bar {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>

    </div>
  );
}
