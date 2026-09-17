"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Moon, CloudLightning, Flame, ArrowRight, ArrowLeft } from "lucide-react";
import { ORIGIN_STORY } from "@/data/zeus";
import { soundFx } from "@/lib/audio";

export default function OriginStory() {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const currentScene = ORIGIN_STORY[activeSceneIndex];

  const handleNext = () => {
    setActiveSceneIndex((prev) => (prev + 1) % ORIGIN_STORY.length);
    soundFx.playChime(600 + activeSceneIndex * 60);
  };

  const handlePrev = () => {
    setActiveSceneIndex((prev) => (prev - 1 + ORIGIN_STORY.length) % ORIGIN_STORY.length);
    soundFx.playChime(550);
  };

  const getSceneIcon = (illustration: string) => {
    switch (illustration) {
      case "lantern":
        return <Flame className="w-8 h-8 text-[#B8860B]" />;
      case "storm":
        return <CloudLightning className="w-8 h-8 text-[#B95D47]" />;
      case "resonance":
        return <Sparkles className="w-8 h-8 text-[#B8860B] animate-pulse" />;
      case "moon":
        return <Moon className="w-8 h-8 text-[#D5A642]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#B8860B]" />;
    }
  };

  return (
    <section
      id="story"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8EB] via-[#FFF3DD] to-[#FFF8EB] border-t border-[#D5A642]/30 overflow-hidden"
    >
      {/* Background Decorative Warm Golden Light */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#F0C968]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#E9A878]/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF7] border-2 border-[#D5A642] text-xs uppercase tracking-[0.25em] text-[#451522] font-bold mb-4 shadow-sm">
            CHAPTER II
          </div>
          <h2 className="font-storybook text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#35151D] mb-4">
            The Night Zeus Awoke
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D5A642] to-transparent mx-auto mb-4" />
          <p className="text-base sm:text-lg text-[#7D3042] font-normal leading-relaxed">
            Every superhero has an origin. Zeus&apos;s power was born not from lightning strikes or alien stars, but from a quiet, tender choice to stay.
          </p>
        </div>

        {/* Storybook Illustrated Stage */}
        <div className="relative parchment-card rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#D5A642] shadow-[0_15px_45px_rgba(69,21,34,0.12)]">
          {/* Ornamental Storybook Corner Accents */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#D5A642]" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#D5A642]" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#D5A642]" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#D5A642]" />

          {/* Scene Progression Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-6 mb-8 border-b border-[#D5A642]/30">
            <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-1 max-w-full">
              {ORIGIN_STORY.map((scene, idx) => (
                <button
                  key={scene.id}
                  onClick={() => {
                    setActiveSceneIndex(idx);
                    soundFx.playChime(600 + idx * 50);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-serif font-bold tracking-wider transition-all whitespace-nowrap ${
                    activeSceneIndex === idx
                      ? "bg-[#451522] text-[#FFF4DC] shadow-md border-2 border-[#D5A642]"
                      : "bg-[#FFF8EB] hover:bg-[#FFF2D6] text-[#35151D] border border-[#D5A642]/40"
                  }`}
                >
                  {scene.chapter}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous scene"
                className="w-8 h-8 rounded-full bg-[#FFFDF7] text-[#35151D] flex items-center justify-center hover:bg-[#FFF2D6] transition-colors border-2 border-[#D5A642] shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-[#35151D]/70 px-1">
                {activeSceneIndex + 1} / {ORIGIN_STORY.length}
              </span>
              <button
                onClick={handleNext}
                aria-label="Next scene"
                className="w-8 h-8 rounded-full bg-[#FFFDF7] text-[#35151D] flex items-center justify-center hover:bg-[#FFF2D6] transition-colors border-2 border-[#D5A642] shadow-sm"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Scene Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left: Illustrated Vignette Frame */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-[340px] aspect-square rounded-2xl bg-gradient-to-b from-[#FFF2D6] to-[#FDE8C7] p-6 border-2 border-[#D5A642] flex flex-col items-center justify-center text-center shadow-inner overflow-hidden group">
                  {/* Subtle Background Rings */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D5A642]/20 via-transparent to-transparent" />

                  {/* Scene Icon Badge */}
                  <div className="w-16 h-16 rounded-full bg-[#FFFDF7] border-2 border-[#D5A642] flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
                    {getSceneIcon(currentScene.illustration)}
                  </div>

                  {/* Zeus Master Portrait in Vignette */}
                  <div className="relative w-36 h-28 my-2">
                    <img
                      src="/images/cat/zeus-walk.png"
                      alt="Zeus, Guardian of the Purrlight"
                      className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(69,21,34,0.3)] select-none"
                    />
                  </div>

                  <p className="font-serif italic text-xs text-[#7D3042] font-semibold mt-2 max-w-[240px]">
                    {currentScene.subtitle}
                  </p>
                </div>
              </div>

              {/* Right: Story Text & Quote */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B95D47] mb-2">
                  {currentScene.chapter} &bull; {currentScene.subtitle}
                </span>

                <h3 className="font-storybook text-2xl sm:text-3xl md:text-4xl font-bold text-[#35151D] mb-4">
                  {currentScene.title}
                </h3>

                <p className="text-base sm:text-lg text-[#35151D]/90 leading-relaxed font-sans mb-6">
                  {currentScene.text}
                </p>

                {currentScene.quote && (
                  <blockquote className="border-l-4 border-[#D5A642] pl-4 py-2 bg-[#FFF3DD] rounded-r-lg shadow-sm">
                    <p className="font-serif italic text-sm sm:text-base text-[#451522] font-bold">
                      &ldquo;{currentScene.quote}&rdquo;
                    </p>
                  </blockquote>
                )}

                <div className="mt-8 flex items-center justify-between pt-4 border-t border-[#D5A642]/20">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#7D3042]">
                    <Sparkles className="w-4 h-4 text-[#B95D47]" />
                    <span>The Chronicles of Zeus</span>
                  </div>

                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#451522] hover:text-[#B95D47] transition-colors"
                  >
                    <span>Continue Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
