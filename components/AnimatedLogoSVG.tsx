'use client';

import React from 'react';

interface AnimatedLogoSVGProps {
  className?: string;
  style?: React.CSSProperties;
  animated?: boolean;
  showText?: boolean;
  forceTheme?: 'light' | 'dark';
}

export default function AnimatedLogoSVG({
  className = '',
  style = {},
  animated = true,
  showText = true,
  forceTheme,
}: AnimatedLogoSVGProps) {
  // Define geometric parameters
  const baselineY = 365;
  const outerApexX = 250;
  const outerApexY = 85;
  const outerLeftX = 115;
  const outerRightX = 385;

  const innerApexX = 250;
  const innerApexY = 185;
  const innerLeftX = 185;
  const innerRightX = 315;

  // 5 Cubes for "A H I G C" along the crossbar (Y from 270 to 306)
  // X range of front faces:
  // Cube 1 (A): X = 152 to 188
  // Cube 2 (H): X = 192 to 228
  // Cube 3 (I): X = 232 to 268
  // Cube 4 (G): X = 272 to 308
  // Cube 5 (C): X = 312 to 348
  const cubes = [
    { label: 'A', x1: 152, x2: 188, index: 1 },
    { label: 'H', x1: 192, x2: 228, index: 2 },
    { label: 'I', x1: 232, x2: 268, index: 3 },
    { label: 'G', x1: 272, x2: 308, index: 4 },
    { label: 'C', x1: 312, x2: 348, index: 5 },
  ];

  // Colors based on theme override or CSS variables
  const colors = {
    outerLeg: 'var(--color-brand-teal)',
    // innerLeg: 'var(--color-brand-gold)',
    innerLeg: 'var(--color-brand-teal)',
    // cubeStroke: 'var(--color-brand-gold)',
    cubeStroke: 'var(--color-brand-teal)',
    cubeFront: forceTheme === 'dark' ? '#121A2A' : forceTheme === 'light' ? '#FFFFFF' : 'var(--color-app-card)',
    cubeTop: forceTheme === 'dark' ? '#1C2541' : forceTheme === 'light' ? '#F5F5ED' : 'var(--color-app-secondary)',
    cubeRight: forceTheme === 'dark' ? '#050B14' : forceTheme === 'light' ? '#E8E8E2' : 'var(--color-app-border)',
    text: forceTheme === 'dark' ? '#FFFFFF' : forceTheme === 'light' ? '#1E293B' : 'var(--color-app-fg)',
    tagline: forceTheme === 'dark' ? '#94A3B8' : forceTheme === 'light' ? '#576F84' : 'var(--color-app-muted)',
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className={className}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        ...style,
      }}
    >
      <defs>
        {/* Gradients for extra visual premium feel */}
        <linearGradient id="outerLegGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00A8C6" />
          <stop offset="100%" stopColor="#0090AA" />
        </linearGradient>
        <linearGradient id="innerLegGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C5A880" />
          <stop offset="100%" stopColor="#B3956D" />
        </linearGradient>
        
        {/* Dynamic drop shadow for 3D elements */}
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Embedded Stylesheet for Animations */}
      <style>
        {`
          @keyframes drawOuterLegs {
            from {
              stroke-dashoffset: 350;
            }
            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes drawInnerLegs {
            from {
              stroke-dashoffset: 250;
            }
            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes unfoldCube {
            0% {
              transform: rotateY(-90deg) scale(0.6);
              opacity: 0;
            }
            70% {
              transform: rotateY(15deg) scale(1.03);
              opacity: 1;
            }
            100% {
              transform: rotateY(0deg) scale(1);
              opacity: 1;
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Default Static States */
          .ahigc-leg {
            fill: none;
            stroke-width: 12;
            stroke-linecap: round;
            transition: stroke 0.3s ease;
          }
          
          .cube-g {
            transform-style: preserve-3d;
            perspective: 800px;
          }

          .cube-face-front {
            stroke-width: 1.5;
            transition: fill 0.3s, stroke 0.3s;
          }
          
          .cube-face-top, .cube-face-right {
            stroke-width: 1;
            transition: fill 0.3s, stroke 0.3s;
          }

          .letter-text {
            font-family: var(--font-heading), 'Outfit', sans-serif;
            font-weight: 800;
            font-size: 20px;
            text-anchor: middle;
            dominant-baseline: middle;
            transition: fill 0.3s;
          }

          .tagline-text {
            font-family: var(--font-heading), 'Outfit', sans-serif;
            font-weight: 800;
            font-size: 13.5px;
            letter-spacing: 0.38em;
            text-anchor: middle;
            transition: fill 0.3s;
          }

          /* Animation States when animated prop is true */
          ${
            animated
              ? `
            .outer-leg-l {
              stroke-dasharray: 350;
              stroke-dashoffset: 350;
              animation: drawOuterLegs 1.2s cubic-bezier(0.25, 1, 0.5, 1) 0.1s both;
            }
            .outer-leg-r {
              stroke-dasharray: 350;
              stroke-dashoffset: 350;
              animation: drawOuterLegs 1.2s cubic-bezier(0.25, 1, 0.5, 1) 0.15s both;
            }
            .inner-leg-l {
              stroke-dasharray: 250;
              stroke-dashoffset: 250;
              animation: drawInnerLegs 1.2s cubic-bezier(0.25, 1, 0.5, 1) 0.35s both;
            }
            .inner-leg-r {
              stroke-dasharray: 250;
              stroke-dashoffset: 250;
              animation: drawInnerLegs 1.2s cubic-bezier(0.25, 1, 0.5, 1) 0.4s both;
            }
            
            .cube-g-1 { transform-origin: 152px 288px; animation: unfoldCube 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.18) 1.1s forwards; }
            .cube-g-2 { transform-origin: 192px 288px; animation: unfoldCube 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.18) 1.25s forwards; }
            .cube-g-3 { transform-origin: 232px 288px; animation: unfoldCube 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.18) 1.4s forwards; }
            .cube-g-4 { transform-origin: 272px 288px; animation: unfoldCube 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.18) 1.55s forwards; }
            .cube-g-5 { transform-origin: 312px 288px; animation: unfoldCube 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.18) 1.7s forwards; }

            .tagline-g {
              opacity: 0;
              animation: fadeInUp 0.9s cubic-bezier(0.25, 1, 0.5, 1) 2.1s forwards;
            }
          `
              : `
            .cube-g {
              opacity: 1 !important;
              transform: none !important;
            }
            .tagline-g {
              opacity: 1 !important;
              transform: none !important;
            }
          `
          }
        `}
      </style>

      {/* 1. OUTER A LEGS */}
      <g filter="url(#shadow)">
        {/* Left Leg */}
        <path
          d={`M ${outerApexX} ${outerApexY} L ${outerLeftX} ${baselineY}`}
          stroke={colors.outerLeg}
          className="ahigc-leg outer-leg-l"
          style={{
            strokeDasharray: animated ? '350' : 'none',
            strokeDashoffset: animated ? '350' : '0',
          }}
        />
        {/* Right Leg */}
        <path
          d={`M ${outerApexX} ${outerApexY} L ${outerRightX} ${baselineY}`}
          stroke={colors.outerLeg}
          className="ahigc-leg outer-leg-r"
          style={{
            strokeDasharray: animated ? '350' : 'none',
            strokeDashoffset: animated ? '350' : '0',
          }}
        />
      </g>

      {/* 2. INNER A LEGS */}
      <g filter="url(#shadow)">
        {/* Left Leg */}
        <path
          d={`M ${innerApexX} ${innerApexY} L ${innerLeftX} ${baselineY}`}
          stroke={colors.innerLeg}
          className="ahigc-leg inner-leg-l"
          style={{
            strokeDasharray: animated ? '250' : 'none',
            strokeDashoffset: animated ? '250' : '0',
          }}
        />
        {/* Right Leg */}
        <path
          d={`M ${innerApexX} ${innerApexY} L ${innerRightX} ${baselineY}`}
          stroke={colors.innerLeg}
          className="ahigc-leg inner-leg-r"
          style={{
            strokeDasharray: animated ? '250' : 'none',
            strokeDashoffset: animated ? '250' : '0',
          }}
        />
      </g>

      {/* 3. 3D CROSSBAR CUBES ("A H I G C") */}
      <g>
        {cubes.map((cube) => {
          const { label, x1, x2, index } = cube;
          const xMid = (x1 + x2) / 2;

          return (
            <g
              key={label}
              className={`cube-g cube-g-${index}`}
              style={{
                opacity: animated ? 0 : 1,
              }}
            >
              {/* TOP FACE (Oblique Slant Up/Right) */}
              <path
                d={`M ${x1} 270 L ${x1 + 12} 258 L ${x2 + 12} 258 L ${x2} 270 Z`}
                fill={colors.cubeTop}
                stroke={colors.cubeStroke}
                className="cube-face-top"
              />

              {/* RIGHT SIDE FACE */}
              <path
                d={`M ${x2} 270 L ${x2 + 12} 258 L ${x2 + 12} 294 L ${x2} 306 Z`}
                fill={colors.cubeRight}
                stroke={colors.cubeStroke}
                className="cube-face-right"
              />

              {/* FRONT FACE */}
              <path
                d={`M ${x1} 270 L ${x2} 270 L ${x2} 306 L ${x1} 306 Z`}
                fill={colors.cubeFront}
                stroke={colors.cubeStroke}
                className="cube-face-front"
              />

              {/* LETTER TEXT */}
              <text
                x={xMid}
                y={290}
                fill={colors.text}
                className="letter-text"
              >
                {label}
              </text>
            </g>
          );
        })}
      </g>

      {/* 4. TAGLINE & MAIN TEXT (Optional) */}
      {showText && (
        <g className="tagline-g" style={{ opacity: animated ? 0 : 1 }}>
          {/* Tagline */}
          <text
            x="250"
            y="410"
            fill={colors.tagline}
            className="tagline-text"
          >
            CONSTRUCTION COMPANY
          </text>
          
          {/* Minimal dividing accent line */}
          <line
            x1="200"
            y1="432"
            x2="300"
            y2="432"
            stroke="var(--color-brand-gold)"
            strokeWidth="1.5"
            opacity="0.6"
          />
        </g>
      )}
    </svg>
  );
}
