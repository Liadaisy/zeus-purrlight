"use client";

import { useEffect, useState } from "react";

export interface Pawprint {
  id: number;
  xPercent: number;
  yPercent: number;
  angle: number;
}

interface PawprintTrailProps {
  pawprints: Pawprint[];
}

export default function PawprintTrail({ pawprints }: PawprintTrailProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {pawprints.map((paw) => (
        <div
          key={paw.id}
          style={{
            left: `${paw.xPercent}%`,
            top: `${paw.yPercent}%`,
            transform: `translate(-50%, -50%) rotate(${paw.angle}deg)`,
          }}
          className="absolute animate-paw opacity-90 transition-opacity duration-1000"
        >
          {/* Feline Pawprint SVG with glowing warm gold */}
          <svg width="22" height="20" viewBox="0 0 24 22" fill="none" className="text-[#F0C968]">
            {/* Main Pad */}
            <path
              d="M12 11C9.5 11 8 13.5 8 16.5C8 19.5 10 21 12 21C14 21 16 19.5 16 16.5C16 13.5 14.5 11 12 11Z"
              fill="#F0C968"
              fillOpacity="0.85"
            />
            {/* Four Toe Pads */}
            <ellipse cx="6" cy="9.5" rx="2" ry="2.6" transform="rotate(-15 6 9.5)" fill="#F0C968" fillOpacity="0.9" />
            <ellipse cx="10" cy="5.5" rx="2.1" ry="2.8" transform="rotate(-5 10 5.5)" fill="#F0C968" fillOpacity="0.95" />
            <ellipse cx="14" cy="5.5" rx="2.1" ry="2.8" transform="rotate(5 14 5.5)" fill="#F0C968" fillOpacity="0.95" />
            <ellipse cx="18" cy="9.5" rx="2" ry="2.6" transform="rotate(15 18 9.5)" fill="#F0C968" fillOpacity="0.9" />
          </svg>
        </div>
      ))}
    </div>
  );
}
