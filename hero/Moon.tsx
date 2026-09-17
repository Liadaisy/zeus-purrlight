"use client";

import { motion } from "motion/react";
import { soundFx } from "@/lib/audio";

interface MoonProps {
  isBright?: boolean;
  hasCatSitting?: boolean;
  onClick?: () => void;
}

export default function Moon({ isBright = false, hasCatSitting = false, onClick }: MoonProps) {
  const handleClick = () => {
    soundFx.playChime(720);
    if (onClick) onClick();
  };

  return (
    <div
      onClick={handleClick}
      className="relative cursor-pointer select-none group"
      title="The Celestial Crescent — Sanctuary of the Purrlight"
    >
      {/* Outer Atmospheric Aura */}
      <div
        className={`absolute -inset-10 rounded-full blur-3xl transition-all duration-1000 pointer-events-none ${
          isBright
            ? "bg-[#F0C968]/30 scale-125"
            : "bg-[#D5A642]/15 scale-100 group-hover:scale-110 group-hover:bg-[#F0C968]/25"
        }`}
      />

      {/* SVG Crescent Moon with rich golden gradient and fine texture */}
      <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 transition-transform duration-700 group-hover:scale-105">
        <svg
          viewBox="0 0 100 100"
          className={`w-full h-full drop-shadow-[0_0_25px_rgba(240,201,104,0.45)] transition-all duration-700 ${
            isBright ? "drop-shadow-[0_0_45px_rgba(240,201,104,0.8)]" : ""
          }`}
        >
          <defs>
            <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF4DC" />
              <stop offset="60%" stopColor="#F0C968" />
              <stop offset="100%" stopColor="#D5A642" />
            </linearGradient>

            <filter id="moonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Crescent Moon Path */}
          <path
            d="M 50,10 
               A 40,40 0 1 0 90,60 
               A 32,32 0 1 1 50,10 Z"
            fill="url(#moonGrad)"
            filter="url(#moonGlow)"
            className="transition-all duration-500"
          />

          {/* Tiny celestial stars orbiting nearby */}
          <circle cx="85" cy="22" r="1" fill="#FFF4DC" className="animate-pulse" />
          <circle cx="20" cy="25" r="0.8" fill="#F0C968" opacity="0.8" />
          <circle cx="82" cy="78" r="1.2" fill="#FFF4DC" opacity="0.9" className="animate-ping" style={{ animationDuration: "3s" }} />
        </svg>

        {/* Subtle breathing ripple when resting */}
        {hasCatSitting && (
          <div className="absolute inset-0 rounded-full border border-[#F0C968]/30 animate-ping pointer-events-none" style={{ animationDuration: "4s" }} />
        )}
      </div>
    </div>
  );
}
