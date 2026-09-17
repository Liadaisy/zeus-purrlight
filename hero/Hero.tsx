"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Compass, Heart, Volume2 } from "lucide-react";
import NightWorld from "./NightWorld";
import Moon from "./Moon";
import MagicalCat from "./MagicalCat";
import PawprintTrail, { Pawprint } from "./PawprintTrail";

interface HeroProps {
  onOpenChat?: () => void;
}

export default function Hero({ onOpenChat }: HeroProps) {
  const [lanternLit, setLanternLit] = useState(false);
  const [moonBright, setMoonBright] = useState(false);
  const [catRestingOnMoon, setCatRestingOnMoon] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [pawprints, setPawprints] = useState<Pawprint[]>([
    { id: 101, xPercent: 10, yPercent: 86, angle: 10 },
    { id: 102, xPercent: 17, yPercent: 84, angle: -8 },
    { id: 103, xPercent: 24, yPercent: 85, angle: 12 },
    { id: 104, xPercent: 31, yPercent: 83, angle: -6 },
    { id: 105, xPercent: 38, yPercent: 85, angle: 14 },
    { id: 106, xPercent: 45, yPercent: 83, angle: -10 },
    { id: 107, xPercent: 52, yPercent: 84, angle: 8 },
  ]);

  const handleStepChange = (step: number) => {
    if (step >= 2) setLanternLit(true);
    if (step >= 4) setMoonBright(true);
    if (step >= 6) {
      setCatRestingOnMoon(true);
      setRevealed(true);
    }
  };

  const handleSkipAnimation = () => {
    setLanternLit(true);
    setMoonBright(true);
    setCatRestingOnMoon(true);
    setRevealed(true);
  };

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between"
      aria-label="Sanctuary of Zeus, Guardian of the Purrlight"
    >
      {/* Illustrated Storybook Village Environment with Bright Golden Sky */}
      <NightWorld
        lanternLit={lanternLit}
        onLanternClick={() => setLanternLit(!lanternLit)}
      />

      {/* Moon Cradle in Upper Sky */}
      <div className="absolute right-[8%] sm:right-[10%] md:right-[12%] top-[12%] sm:top-[10%] z-10">
        <Moon
          isBright={moonBright}
          hasCatSitting={catRestingOnMoon}
          onClick={() => setMoonBright(!moonBright)}
        />
      </div>

      {/* Glowing Pawprints on Path */}
      <PawprintTrail pawprints={pawprints} />

      {/* ZEUS Walking & Leap Sequence */}
      <MagicalCat
        onStepChange={handleStepChange}
        onLanternTouch={() => setLanternLit(true)}
        onMoonApproach={() => setMoonBright(true)}
        onSequenceComplete={() => {
          setCatRestingOnMoon(true);
          setRevealed(true);
        }}
      />

      {/* Skip button for quick evaluation if desired */}
      {!revealed && (
        <button
          onClick={handleSkipAnimation}
          className="absolute top-20 right-6 z-30 text-xs tracking-wider uppercase text-[#35151D]/70 hover:text-[#451522] bg-[#FFFDF7]/80 backdrop-blur-sm border border-[#D5A642] px-3 py-1 rounded-full transition-all focus:outline-none shadow-sm"
        >
          Skip Entrance &rarr;
        </button>
      )}

      {/* Chapter Indicator Header */}
      <div className="relative z-20 pt-28 sm:pt-32 px-6 max-w-7xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF7]/90 border border-[#D5A642] text-xs uppercase tracking-[0.25em] text-[#451522] font-semibold backdrop-blur-sm shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D5A642] animate-ping" />
          CHAPTER I &bull; The Arrival
        </div>
      </div>

      {/* Main Hero Reveal (Reveals after Zeus sits on Moon) */}
      <div className="relative z-20 px-6 max-w-7xl mx-auto w-full pb-28 md:pb-36 mt-auto">
        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="max-w-2xl"
            >
              {/* Overline Tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.3em] text-[#7D3042] font-bold mb-3"
              >
                <Sparkles className="w-4 h-4 text-[#D5A642]" />
                <span>An Interactive Superhero Help Portal</span>
              </motion.div>

              {/* Master Title: ZEUS with Crisp Contrast */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.9 }}
                className="font-storybook text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#35151D] via-[#641E31] to-[#B8860B] drop-shadow-[0_2px_10px_rgba(213,166,66,0.3)]"
              >
                ZEUS
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl font-serif text-[#451522] font-bold tracking-wide mt-2"
              >
                Guardian of the Purrlight
              </motion.p>

              {/* Tender Call to Action description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-base sm:text-lg text-[#35151D]/90 max-w-xl mt-4 leading-relaxed font-normal"
              >
                &ldquo;Somewhere out there, someone needs help.&rdquo;
                <br className="hidden sm:inline" />
                Step inside a living storybook where a gentle purr warms the coldest darkness.
              </motion.p>

              {/* Primary & Secondary CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                {/* Primary CTA: ASK ZEUS */}
                <a
                  href="#ask-zeus"
                  onClick={onOpenChat}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D5A642] via-[#F0C968] to-[#D5A642] text-[#241017] font-bold text-base tracking-wider uppercase shadow-[0_4px_20px_rgba(213,166,66,0.4)] hover:shadow-[0_6px_30px_rgba(213,166,66,0.6)] hover:scale-105 active:scale-95 transition-all text-center"
                >
                  <Sparkles className="w-5 h-5 text-[#241017] transition-transform group-hover:rotate-12" />
                  <span>ASK ZEUS</span>
                </a>

                {/* Secondary CTA: MEET THE GUARDIAN */}
                <a
                  href="#story"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FFFDF7] hover:bg-[#FFF2D6] border-2 border-[#D5A642] text-[#35151D] hover:text-[#451522] font-semibold text-base tracking-wide transition-all hover:scale-102 active:scale-98 shadow-md text-center"
                >
                  <Compass className="w-5 h-5 text-[#B95D47]" />
                  <span>MEET THE GUARDIAN</span>
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-20 pb-4 text-center">
        <a
          href="#story"
          aria-label="Scroll to origin story"
          className="inline-flex flex-col items-center text-[#FFF4DC] hover:text-[#F0C968] transition-colors group"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold mb-1 drop-shadow-sm">Turn the Page</span>
          <div className="w-4 h-7 border-2 border-[#D5A642] rounded-full flex items-start justify-center p-1 bg-[#FFF4DC]/20">
            <span className="w-1 h-1.5 bg-[#F0C968] rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}