"use client";

import React from "react";

export function QualityLayerGrid() {
  return (
    <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-[0.22] mix-blend-color-burn" viewBox="0 0 400 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hexagons" width="40" height="69.282" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
          <path fill="none" stroke="#6086B8" strokeWidth="1.5" d="M40 17.321L40 51.962L20 63.509L0 51.962L0 17.321L20 5.774L40 17.321z M0 51.962L-20 63.509M20 63.509L20 86.603M40 51.962L60 63.509"/>
        </pattern>
        <linearGradient id="fadeoutLayer1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="20%" stopColor="#fff" stopOpacity="0"/>
          <stop offset="90%" stopColor="#fff" stopOpacity="1"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)"/>
      <circle cx="15%" cy="30%" r="5" fill="#4B77BE" opacity="0.6"/>
      <circle cx="65%" cy="15%" r="7" fill="#4B77BE" opacity="0.4"/>
      <path d="M 60 90 Q 150 15 260 45" stroke="#4B77BE" strokeWidth="2" strokeLinecap="round" opacity="0.5" fill="none" strokeDasharray="6,4" />
      <rect width="100%" height="100%" fill="url(#fadeoutLayer1)"/>
    </svg>
  );
}

export function SpeedArrowVector() {
  return (
    <svg className="absolute -bottom-8 -right-8 w-80 h-80 pointer-events-none opacity-[0.12] transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:-translate-y-3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="arrowFadeLayer2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="10%" stopColor="#0F9D58"/>
          <stop offset="85%" stopColor="#0F9D58" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <g fill="url(#arrowFadeLayer2)" stroke="url(#arrowFadeLayer2)" strokeWidth="0">
        <path d="M60 140 L 140 60 L 100 60 L 150 10 L 150 100 L 140 60 L 60 140 Z"/>
        <path d="M30 170 L 110 90 L 80 90 L 120 50 L 120 120 L 110 90 L 30 170 Z" opacity="0.5"/>
      </g>
    </svg>
  );
}

export function WaveRateCurves() {
  return (
    <svg className="absolute -right-6 top-10 w-96 h-96 pointer-events-none opacity-[0.45] transition-transform duration-[600ms] ease-out group-hover:translate-x-3 group-hover:scale-105 origin-top-right mix-blend-multiply" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
         <linearGradient id="waveFillFlow" x1="0%" y1="50%" x2="100%" y2="10%">
           <stop offset="15%" stopColor="#D9CDE8" stopOpacity="0" />
           <stop offset="50%" stopColor="#DBCDEC" stopOpacity="0.4" />
           <stop offset="85%" stopColor="#CAAFE2" stopOpacity="0" />
         </linearGradient>
         <filter id="blurCurve">
            <feGaussianBlur stdDeviation="3" />
         </filter>
      </defs>
      <path d="M 0,200 C 150,120 350,300 500,100 L 500,280 C 350,350 150,180 0,320 Z" fill="url(#waveFillFlow)" filter="url(#blurCurve)" />
      <path d="M 0,250 C 100,200 400,150 500,50 L 500,180 C 400,320 200,320 0,420 Z" fill="url(#waveFillFlow)" filter="url(#blurCurve)" opacity="0.6"/>
    </svg>
  );
}