"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Feather,
  HeartHandshake,
  Flame,
  Sparkles,
  Ear,
  Shield,
  Moon,
  Compass,
  SunMedium,
  CheckCircle2,
  X,
  Info,
} from "lucide-react";
import { NINE_GIFTS } from "@/data/zeus";
import { Gift } from "@/types/help";
import { soundFx } from "@/lib/audio";

export default function NineGifts() {
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [hoveredTrait, setHoveredTrait] = useState<string | null>(null);

  const getGiftIcon = (iconName: string) => {
    switch (iconName) {
      case "Feather":
        return <Feather className="w-6 h-6 text-[#B8860B]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-[#B8860B]" />;
      case "Flame":
        return <Flame className="w-6 h-6 text-[#B8860B]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#B8860B]" />;
      case "Ear":
        return <Ear className="w-6 h-6 text-[#B8860B]" />;
      case "Shield":
        return <Shield className="w-6 h-6 text-[#B8860B]" />;
      case "MoonStar":
        return <Moon className="w-6 h-6 text-[#B8860B]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-[#B8860B]" />;
      case "SunMedium":
        return <SunMedium className="w-6 h-6 text-[#B8860B]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#B8860B]" />;
    }
  };

  const handleCardClick = (gift: Gift) => {
    setSelectedGift(gift);
    soundFx.playChime(680);
  };

  const handleCardHover = (trait: string) => {
    setHoveredTrait(trait);
  };

  return (
    <section
      id="nine-gifts"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8EB] via-[#FFF3DD] to-[#FFF8EB] border-t border-[#D5A642]/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF7] border-2 border-[#D5A642] text-xs uppercase tracking-[0.25em] text-[#451522] font-bold mb-4 shadow-sm">
            CHAPTER IV
          </div>
          <h2 className="font-storybook text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#35151D] mb-3">
            The Nine Gifts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D5A642] to-transparent mx-auto mb-4" />
          <p className="text-base sm:text-lg text-[#7D3042] font-normal leading-relaxed">
            Nine distinct graces Zeus bestows upon those who wander into his sanctuary. Each gift counters a different shadow of the human experience.
          </p>

          {/* Interactive Character Status Prompt */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF7] border-2 border-[#D5A642]/60 text-xs font-semibold text-[#35151D] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse" />
            <span>
              {hoveredTrait
                ? `Zeus attunes his senses toward: ${hoveredTrait.toUpperCase()}`
                : "Hover over any gift to commune with Zeus"}
            </span>
          </div>
        </div>

        {/* 3x3 Grid of Magical Gifts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {NINE_GIFTS.map((gift) => (
            <motion.div
              key={gift.id}
              whileHover={{ y: -6, scale: 1.02 }}
              onHoverStart={() => handleCardHover(gift.trait)}
              onHoverEnd={() => setHoveredTrait(null)}
              onClick={() => handleCardClick(gift)}
              className="group relative cursor-pointer rounded-3xl bg-[#FFFDF7] hover:bg-[#FFF9EE] border-2 border-[#D5A642]/50 hover:border-[#D5A642] p-7 transition-all duration-300 shadow-[0_8px_25px_rgba(69,21,34,0.06)] hover:shadow-[0_15px_35px_rgba(213,166,66,0.2)] flex flex-col justify-between overflow-hidden"
            >
              {/* Inner ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F0C968]/20 rounded-full blur-2xl group-hover:bg-[#F0C968]/30 transition-all pointer-events-none" />

              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-storybook text-sm tracking-widest text-[#B95D47] font-bold">
                    {gift.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF3DD] border-2 border-[#D5A642] group-hover:border-[#B8860B] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {getGiftIcon(gift.iconName)}
                  </div>
                </div>

                {/* Gift Name */}
                <h3 className="font-storybook text-2xl font-bold tracking-wide text-[#35151D] group-hover:text-[#641E31] transition-colors mb-2">
                  {gift.name}
                </h3>

                {/* Tagline */}
                <p className="font-serif italic text-xs text-[#7D3042] font-semibold mb-3">
                  {gift.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-[#35151D]/80 font-normal leading-relaxed mb-4">
                  {gift.description}
                </p>
              </div>

              {/* Bottom interactive cue */}
              <div className="pt-4 border-t border-[#D5A642]/30 flex items-center justify-between text-xs text-[#7D3042] group-hover:text-[#35151D]">
                <span className="tracking-wider uppercase text-[11px] font-bold">Read Lore</span>
                <span className="text-[#B8860B] font-bold group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Lore Expander */}
        <AnimatePresence>
          {selectedGift && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#35151D]/60 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative parchment-card rounded-3xl max-w-lg w-full p-8 sm:p-10 border-2 border-[#D5A642] shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedGift(null)}
                  className="absolute top-4 right-4 p-2 text-[#352019] hover:text-[#451522] rounded-full hover:bg-[#D5A642]/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#451522] border-2 border-[#D5A642] flex items-center justify-center shadow-md">
                    {getGiftIcon(selectedGift.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B95D47]">
                      GIFT {selectedGift.number}
                    </span>
                    <h3 className="font-storybook text-3xl font-bold text-[#35151D]">
                      {selectedGift.name}
                    </h3>
                  </div>
                </div>

                <p className="font-serif italic text-base text-[#451522] font-bold mb-4 pb-2 border-b border-[#352019]/20">
                  &ldquo;{selectedGift.tagline}&rdquo;
                </p>

                <p className="text-sm sm:text-base text-[#352019]/90 leading-relaxed mb-6">
                  {selectedGift.lore}
                </p>

                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedGift(null)}
                    className="px-6 py-2.5 rounded-full bg-[#451522] text-[#FFF4DC] font-serif font-bold text-xs uppercase tracking-wider hover:bg-[#641E31] transition-colors shadow-md"
                  >
                    Close Blessing
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
