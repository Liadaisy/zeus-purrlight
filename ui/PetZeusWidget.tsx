"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Sparkles, Fish, MessageCircle, X, ChevronUp, ChevronDown } from "lucide-react";
import { soundFx } from "@/lib/audio";

export default function PetZeusWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [petCount, setPetCount] = useState(0);
  const [reactionText, setReactionText] = useState<string>("Click to pet Zeus! 🐾");
  const [floatingIcons, setFloatingIcons] = useState<{ id: number; icon: string; x: number }[]>([]);
  const [isWiggling, setIsWiggling] = useState(false);

  const cuteReactions = [
    "*mrrp!* (happy chirp)",
    "*kneads warm biscuit paws*",
    "*slowly winks amber eyes*",
    "*purrr-purrr-purrr*",
    "*nudges head into your palm*",
    "*tail swishes with delight*",
    "*curls tail into a little heart*",
    "*cozy guardian nap activated*",
  ];

  const handlePet = () => {
    setPetCount((prev) => prev + 1);
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 800);

    const randomReaction = cuteReactions[Math.floor(Math.random() * cuteReactions.length)];
    setReactionText(randomReaction);

    soundFx.playChime(650 + (petCount % 5) * 80);
    soundFx.startPurr(2.5);

    // Spawn floating cute icon
    const icons = ["💖", "🐟", "✨", "🐾", "⭐"];
    const chosenIcon = icons[Math.floor(Math.random() * icons.length)];
    const newIcon = {
      id: Date.now() + Math.random(),
      icon: chosenIcon,
      x: (Math.random() - 0.5) * 60,
    };
    setFloatingIcons((prev) => [...prev.slice(-6), newIcon]);

    setTimeout(() => {
      setFloatingIcons((prev) => prev.filter((item) => item.id !== newIcon.id));
    }, 1800);
  };

  const handleFeedFish = () => {
    setPetCount((prev) => prev + 3);
    setReactionText("*crunch crunch* Tasty celestial snack! 🐟✨");
    soundFx.playChime(880);
    soundFx.startPurr(3.5);
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            className="mb-3 w-72 rounded-3xl bg-[#FFFDF7] border-2 border-[#D5A642] shadow-[0_15px_40px_rgba(69,21,34,0.18)] p-5 relative overflow-hidden"
          >
            {/* Top Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1 rounded-full text-[#7D3042] hover:bg-[#F3E2BD] transition-colors"
              aria-label="Close pet corner"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Cute Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🐱</span>
              <div>
                <h4 className="font-storybook text-sm font-bold text-[#35151D]">
                  Pet Sanctuary &bull; Zeus
                </h4>
                <p className="text-[10px] uppercase tracking-wider text-[#B95D47] font-bold">
                  Chief Purr Officer
                </p>
              </div>
            </div>

            {/* Interactive Zeus Character Portrait */}
            <div className="relative text-center my-3">
              {/* Floating Emojis */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {floatingIcons.map((item) => (
                  <motion.span
                    key={item.id}
                    initial={{ opacity: 1, y: 0, x: item.x, scale: 0.8 }}
                    animate={{ opacity: 0, y: -65, scale: 1.4 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                    className="absolute text-xl"
                  >
                    {item.icon}
                  </motion.span>
                ))}
              </div>

              {/* Cat with cute interactive bounce */}
              <motion.div
                animate={
                  isWiggling
                    ? {
                        rotate: [-6, 6, -4, 4, 0],
                        scale: [1, 1.1, 1],
                      }
                    : { y: [0, -3, 0] }
                }
                transition={{
                  duration: isWiggling ? 0.6 : 3,
                  repeat: isWiggling ? 0 : Infinity,
                  ease: "easeInOut",
                }}
                onClick={handlePet}
                className="cursor-pointer relative inline-block group"
                title="Click to give scritches!"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#FFF2D6] to-[#FDE8C7] border-2 border-[#D5A642] mx-auto p-1 shadow-inner overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src="/images/cat/zeus-avatar.png"
                    alt="Zeus cute face"
                    className="w-full h-full object-cover scale-125 translate-y-1"
                  />
                </div>

                {/* Cute blush cheeks */}
                <div className="absolute top-[52%] left-[22%] w-3 h-1.5 bg-[#FF8080]/60 rounded-full blur-[1px]" />
                <div className="absolute top-[52%] right-[22%] w-3 h-1.5 bg-[#FF8080]/60 rounded-full blur-[1px]" />
              </motion.div>

              {/* Cute speech bubble */}
              <div className="mt-3 px-3 py-1.5 rounded-full bg-[#FFF3DD] border border-[#D5A642] text-xs font-serif font-bold text-[#451522] shadow-sm">
                {reactionText}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#D5A642]/30">
              <button
                onClick={handlePet}
                className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full bg-gradient-to-r from-[#D5A642] to-[#F0C968] text-[#241017] text-xs font-bold uppercase shadow-sm hover:scale-105 active:scale-95 transition-all"
              >
                <Heart className="w-3.5 h-3.5 fill-[#241017]" />
                <span>Pet ({petCount})</span>
              </button>

              <button
                onClick={handleFeedFish}
                className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full bg-[#FFF3DD] hover:bg-[#FDE8C7] border border-[#D5A642] text-[#451522] text-xs font-bold uppercase shadow-sm hover:scale-105 active:scale-95 transition-all"
              >
                <Fish className="w-3.5 h-3.5 text-[#B95D47]" />
                <span>Give Fish 🐟</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FFFDF7] hover:bg-[#FFF5E2] border-2 border-[#D5A642] text-[#35151D] shadow-[0_4px_20px_rgba(69,21,34,0.18)] hover:scale-105 active:scale-95 transition-all focus:outline-none"
        title="Open Cute Zeus Pet Corner"
      >
        <span className="text-lg group-hover:rotate-12 transition-transform">🐾</span>
        <span className="font-storybook text-xs font-bold tracking-wider text-[#451522]">
          {isOpen ? "Close Pet Corner" : "Pet Zeus & Give Treats ✨"}
        </span>
        {petCount > 0 && (
          <span className="px-1.5 py-0.5 rounded-full bg-[#451522] text-[#FFF4DC] text-[10px] font-bold">
            {petCount}
          </span>
        )}
      </button>
    </div>
  );
}
