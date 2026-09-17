"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Heart, SunMedium, Flame, Waves, Volume2, VolumeX } from "lucide-react";
import { soundFx } from "@/lib/audio";

export default function Purrlight() {
  const [isPurring, setIsPurring] = useState(false);
  const [purrCount, setPurrCount] = useState(0);

  const handleHearPurr = () => {
    if (isPurring) return;

    setIsPurring(true);
    setPurrCount((prev) => prev + 1);

    // Synthesize physical feline purr via Web Audio API
    soundFx.startPurr(4.5);

    // Reset state after purr cycle
    setTimeout(() => {
      setIsPurring(false);
    }, 4500);
  };

  return (
    <section
      id="purrlight"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8EB] via-[#FFF3DD] to-[#FFF8EB] border-t border-[#D5A642]/30 overflow-hidden"
    >
      {/* Dynamic Warm Golden Aura that blooms during purr */}
      <div
        className={`absolute inset-0 bg-gradient-radial from-[#F0C968]/30 via-[#F3E2BD]/40 to-transparent transition-opacity duration-1000 pointer-events-none ${
          isPurring ? "opacity-100 scale-125" : "opacity-30 scale-100"
        }`}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF7] border-2 border-[#D5A642] text-xs uppercase tracking-[0.25em] text-[#451522] font-bold mb-4 shadow-sm">
            CHAPTER III
          </div>
          <h2 className="font-storybook text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#35151D] mb-3">
            The Purrlight
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D5A642] to-transparent mx-auto mb-4" />
          <p className="text-base sm:text-lg text-[#7D3042] font-normal leading-relaxed">
            Zeus carries no armor, no sword. His miraculous superpower is an ancient harmonic vibration—a celestial frequency of 25 to 50 Hertz that calms restless hearts.
          </p>
        </div>

        {/* Interactive Purr Sanctum */}
        <div className="relative rounded-3xl bg-[#FFFDF7] border-2 border-[#D5A642] p-8 sm:p-12 md:p-16 backdrop-blur-sm shadow-[0_20px_50px_rgba(69,21,34,0.1)] text-center overflow-hidden">
          {/* Concentric Purr Waves */}
          <AnimatePresence>
            {isPurring && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="purr-wave w-64 h-64 border-[#D5A642]" />
                <span
                  className="purr-wave w-96 h-96 border-[#F0C968]"
                  style={{ animationDelay: "0.8s" }}
                />
                <span
                  className="purr-wave w-[520px] h-[520px] border-[#E9A878]"
                  style={{ animationDelay: "1.6s" }}
                />
                <span
                  className="purr-wave w-[700px] h-[700px] border-[#D5A642]/60"
                  style={{ animationDelay: "2.4s" }}
                />
              </div>
            )}
          </AnimatePresence>

          {/* Environmental Reaction Elements (Lanterns) */}
          <div className="flex justify-between items-center max-w-3xl mx-auto mb-6 px-4">
            {/* Left Reactive Lantern */}
            <div
              className={`flex flex-col items-center transition-all duration-700 ${
                isPurring ? "scale-125 filter drop-shadow-[0_0_20px_#F0C968]" : "opacity-75"
              }`}
            >
              <div className="w-7 h-9 rounded-b bg-[#F0C968] border-2 border-[#D5A642] shadow-[0_0_15px_#F0C968] flex items-center justify-center">
                <Flame className="w-4 h-4 text-[#FFF4DC] animate-pulse" />
              </div>
              <div className="w-1.5 h-8 bg-[#7D3042]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#7D3042] mt-1">Lantern Resonates</span>
            </div>

            {/* Right Reactive Lantern */}
            <div
              className={`flex flex-col items-center transition-all duration-700 ${
                isPurring ? "scale-125 filter drop-shadow-[0_0_20px_#F0C968]" : "opacity-75"
              }`}
            >
              <div className="w-7 h-9 rounded-b bg-[#F0C968] border-2 border-[#D5A642] shadow-[0_0_15px_#F0C968] flex items-center justify-center">
                <Flame className="w-4 h-4 text-[#FFF4DC] animate-pulse" />
              </div>
              <div className="w-1.5 h-8 bg-[#7D3042]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#7D3042] mt-1">Light Expands</span>
            </div>
          </div>

          {/* Central ZEUS Portrait in Purr Mode */}
          <div className="relative inline-block my-4">
            {/* Soft Breathing Ambient Shadow */}
            <div
              className={`absolute -inset-8 rounded-full blur-2xl transition-all duration-1000 ${
                isPurring
                  ? "bg-[#F0C968]/60 scale-125 animate-pulse"
                  : "bg-[#D5A642]/20 scale-100"
              }`}
            />

            <motion.div
              animate={
                isPurring
                  ? {
                      scale: [1, 1.04, 1.02, 1.05, 1],
                      y: [0, -3, 0, -2, 0],
                    }
                  : { y: [0, -4, 0] }
              }
              transition={{
                duration: isPurring ? 1.5 : 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-56 sm:w-64 md:w-72 mx-auto"
            >
              <img
                src="/images/cat/zeus-walk.png"
                alt="Zeus Purring"
                className={`w-full drop-shadow-[0_12px_28px_rgba(69,21,34,0.3)] select-none transition-all duration-700 ${
                  isPurring ? "brightness-105 filter drop-shadow-[0_0_25px_#D5A642]" : ""
                }`}
                draggable={false}
              />

              {/* Eyes Closed indicator during purr */}
              {isPurring && (
                <div className="absolute top-[28%] right-[22%] px-2.5 py-1 rounded-full bg-[#451522] border border-[#D5A642] text-[10px] text-[#FFF4DC] font-serif font-bold tracking-wider shadow-md animate-fade-in">
                  Eyes closed &bull; purring...
                </div>
              )}
            </motion.div>
          </div>

          {/* Emotional Resonance Message */}
          <div className="max-w-xl mx-auto mt-6">
            <h3 className="font-storybook text-2xl sm:text-3xl font-bold text-[#35151D] mb-2">
              {isPurring
                ? "The Purrlight is Washing Over You"
                : "Experience the Healing Resonance"}
            </h3>
            <p className="text-sm sm:text-base text-[#7D3042] font-normal leading-relaxed">
              {isPurring
                ? "Close your eyes. Breathe in slowly. The heavy weight in your chest is gently dispersing into warm amber light."
                : "Press the button below to awaken Zeus's purr. Concentric rings of warmth will emanate outward, calming your mind."}
            </p>
          </div>

          {/* Interactive Button: HEAR ZEUS PURR */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <button
              onClick={handleHearPurr}
              disabled={isPurring}
              className={`group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full font-serif font-bold text-base tracking-wider uppercase transition-all duration-500 shadow-xl ${
                isPurring
                  ? "bg-[#641E31] text-[#FFF4DC] border-2 border-[#D5A642] cursor-wait"
                  : "bg-gradient-to-r from-[#D5A642] via-[#F0C968] to-[#D5A642] text-[#241017] hover:scale-105 hover:shadow-[0_4px_30px_rgba(213,166,66,0.6)] active:scale-95"
              }`}
            >
              <Waves className={`w-5 h-5 ${isPurring ? "animate-spin text-[#FFF4DC]" : "group-hover:rotate-12"}`} />
              <span>{isPurring ? "Purring in Harmonic Frequency..." : "HEAR ZEUS PURR"}</span>
              <Sparkles className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#7D3042] mt-2">
              <SunMedium className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>
                {purrCount > 0
                  ? `You have rested in the Purrlight ${purrCount} time${purrCount === 1 ? "" : "s"}.`
                  : "Audio synthesizes through your browser speaker. Toggle sound in header if desired."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
