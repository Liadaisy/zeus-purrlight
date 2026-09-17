"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Pawprint } from "./PawprintTrail";
import { soundFx } from "@/lib/audio";

interface MagicalCatProps {
  onStepChange?: (step: number) => void;
  onLanternTouch?: () => void;
  onMoonApproach?: () => void;
  onSequenceComplete?: () => void;
}

export default function MagicalCat({
  onStepChange,
  onLanternTouch,
  onMoonApproach,
  onSequenceComplete,
}: MagicalCatProps) {
  // Sequence steps:
  // 0: Initial waiting (1.5s)
  // 1: Walking in from left toward lantern
  // 2: Pausing at lantern & touching it with paw
  // 3: Walking from lantern toward moon launch position
  // 4: Looking up at moon
  // 5: Jumping in arc toward moon
  // 6: Landing and resting on crescent moon
  const [step, setStep] = useState<number>(0);
  const [catPawprints, setCatPawprints] = useState<Pawprint[]>([]);
  const [pawReactions, setPawReactions] = useState(false);

  useEffect(() => {
    // Sequence Timeline
    // Step 0 -> Step 1 (Entrance begins after 1.6s)
    const t1 = setTimeout(() => {
      setStep(1);
      if (onStepChange) onStepChange(1);
    }, 1600);

    // Pawprints spawn while walking to lantern
    const p1 = setTimeout(() => {
      setCatPawprints((prev) => [
        ...prev,
        { id: 1, xPercent: 6, yPercent: 84, angle: 12 },
        { id: 2, xPercent: 12, yPercent: 82, angle: -8 },
        { id: 3, xPercent: 18, yPercent: 84, angle: 15 },
        { id: 4, xPercent: 24, yPercent: 82, angle: -5 },
      ]);
    }, 2800);

    // Step 1 -> Step 2: Stop at lantern (~4.8s into timeline)
    const t2 = setTimeout(() => {
      setStep(2);
      if (onStepChange) onStepChange(2);
      if (onLanternTouch) onLanternTouch();
      soundFx.playChime(640);
    }, 4800);

    // Step 2 -> Step 3: Continues walking toward launch position (~6.4s)
    const t3 = setTimeout(() => {
      setStep(3);
      if (onStepChange) onStepChange(3);
      setCatPawprints((prev) => [
        ...prev,
        { id: 5, xPercent: 34, yPercent: 83, angle: 10 },
        { id: 6, xPercent: 41, yPercent: 82, angle: -12 },
        { id: 7, xPercent: 48, yPercent: 83, angle: 8 },
        { id: 8, xPercent: 54, yPercent: 81, angle: -6 },
      ]);
    }, 6600);

    // Step 3 -> Step 4: Stop, look up at moon (~9.2s)
    const t4 = setTimeout(() => {
      setStep(4);
      if (onStepChange) onStepChange(4);
      if (onMoonApproach) onMoonApproach();
      soundFx.playChime(740);
    }, 9400);

    // Step 4 -> Step 5: Jump toward moon (~10.8s)
    const t5 = setTimeout(() => {
      setStep(5);
      if (onStepChange) onStepChange(5);
    }, 10800);

    // Step 5 -> Step 6: Land on moon, settle, look at visitor (~12.6s)
    const t6 = setTimeout(() => {
      setStep(6);
      if (onStepChange) onStepChange(6);
      if (onSequenceComplete) onSequenceComplete();
      soundFx.playChime(880);
    }, 12600);

    return () => {
      clearTimeout(t1);
      clearTimeout(p1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  const handleZeusInteraction = () => {
    soundFx.startPurr(3.5);
    setPawReactions(true);
    setTimeout(() => setPawReactions(false), 3000);
  };

  return (
    <>
      {/* Ground Walking Zeus (Steps 0 - 4) */}
      {step < 5 && (
        <motion.div
          className="absolute bottom-[10%] md:bottom-[12%] z-20 pointer-events-auto cursor-pointer"
          initial={{ left: "-22vw" }}
          animate={
            step === 0
              ? { left: "-22vw" }
              : step === 1
              ? { left: "26vw" } // Walk up to lantern
              : step === 2
              ? { left: "26vw", y: [0, -4, 0] } // Stop at lantern, stretch paw
              : step === 3
              ? { left: "50vw" } // Walk to moon launch position
              : { left: "50vw", rotate: -8 } // Look up at moon
          }
          transition={{
            duration: step === 1 ? 3.2 : step === 3 ? 2.6 : 0.8,
            ease: step === 1 || step === 3 ? "easeInOut" : "easeOut",
          }}
          onClick={handleZeusInteraction}
        >
          {/* Walking Cat Body with dynamic walking bob & breathing */}
          <div className="relative group">
            {/* Soft walking ground shadow */}
            <div
              className={`absolute -bottom-2 left-6 right-6 h-5 bg-[#1c0b12]/90 rounded-[50%] blur-sm transition-all duration-300 ${
                step === 1 || step === 3 ? "animate-pulse scale-95" : "scale-100"
              }`}
            />

            {/* Glowing amber aura when touching lantern or looking up */}
            <div
              className={`absolute inset-0 bg-[#F0C968]/20 rounded-full blur-xl transition-opacity duration-700 pointer-events-none ${
                step === 2 || step === 4 ? "opacity-100 scale-110" : "opacity-0"
              }`}
            />

            {/* Master 2D Illustrated Cat */}
            <motion.div
              animate={
                step === 1 || step === 3
                  ? {
                      y: [0, -8, 0, -6, 0],
                      rotate: [0, 1.5, -1, 1, 0],
                    }
                  : step === 2
                  ? {
                      y: [0, -10, 0],
                      rotate: [0, -4, 0], // Reaching paw up to lantern
                    }
                  : step === 4
                  ? {
                      y: -4,
                      rotate: -10, // Looking skyward toward the moon
                    }
                  : {}
              }
              transition={{
                repeat: step === 1 || step === 3 ? Infinity : 0,
                duration: 0.75,
                ease: "easeInOut",
              }}
            >
              <img
                src="/images/cat/zeus-walk.png"
                alt="ZEUS walking along the storybook path"
                className="w-[240px] sm:w-[280px] md:w-[320px] select-none drop-shadow-[0_8px_20px_rgba(36,16,23,0.6)]"
                draggable={false}
              />
            </motion.div>

            {/* Subtle Speech Bubble on Step 2 & 4 */}
            <AnimatePresence>
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#FFF4DC] text-[#352019] text-xs font-serif font-bold rounded-full shadow-md border border-[#D5A642] whitespace-nowrap"
                >
                  *tap* The light is warm...
                </motion.div>
              )}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#FFF4DC] text-[#352019] text-xs font-serif font-bold rounded-full shadow-md border border-[#D5A642] whitespace-nowrap"
                >
                  The moon beckons...
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}

      {/* Jumping Cat (Step 5 - Parabolic Arc toward Moon) */}
      {step === 5 && (
        <motion.div
          className="absolute z-30 pointer-events-none"
          initial={{
            left: "50vw",
            bottom: "12%",
            scale: 1,
            rotate: -15,
          }}
          animate={{
            left: ["50vw", "64vw", "74vw"],
            bottom: ["12%", "58%", "46%"], // High arching jump landing on moon
            scale: [1, 1.08, 0.82],
            rotate: [-15, -28, 4],
          }}
          transition={{
            duration: 1.6,
            ease: "easeInOut",
            times: [0, 0.55, 1],
          }}
        >
          {/* Jump trajectory golden trail particles */}
          <div className="absolute -inset-4 bg-[#F0C968]/30 blur-lg rounded-full animate-ping" />
          <img
            src="/images/cat/zeus-walk.png"
            alt="ZEUS leaping toward the crescent moon"
            className="w-[260px] md:w-[290px] select-none drop-shadow-[0_12px_30px_rgba(240,201,104,0.4)]"
            draggable={false}
          />
        </motion.div>
      )}

      {/* Sits comfortably on the Crescent Moon Cradle (Step 6 - Rest & Watchful Guardian) */}
      {step >= 6 && (
        <motion.div
          className="absolute right-[8%] sm:right-[10%] md:right-[12%] top-[24%] sm:top-[22%] md:top-[20%] z-20 cursor-pointer pointer-events-auto"
          initial={{ opacity: 0, scale: 0.75, y: 15 }}
          animate={{
            opacity: 1,
            scale: 0.82,
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 },
            y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
          }}
          onClick={handleZeusInteraction}
          title="ZEUS resting on the Moon — Click to hear him purr"
        >
          {/* Concentric Purr light waves when clicked */}
          {pawReactions && (
            <>
              <span className="purr-wave w-48 h-48 -left-10 -top-8" />
              <span className="purr-wave w-64 h-64 -left-16 -top-14" style={{ animationDelay: "0.6s" }} />
            </>
          )}

          {/* Master ZEUS image curled / sitting peacefully in the moon cradle */}
          <div className="relative group">
            {/* Cozy golden glow under cat on moon */}
            <div className="absolute -bottom-2 left-6 right-6 h-6 bg-[#F0C968]/40 rounded-full blur-md" />

            {/* Cat with slight gentle tail swaying animation */}
            <motion.div
              animate={{
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
            >
              <img
                src="/images/cat/zeus-walk.png"
                alt="ZEUS resting peacefully on the crescent moon"
                className="w-[230px] sm:w-[260px] md:w-[280px] select-none drop-shadow-[0_8px_25px_rgba(36,16,23,0.7)] group-hover:drop-shadow-[0_8px_30px_rgba(240,201,104,0.6)] transition-all"
                draggable={false}
              />
            </motion.div>

            {/* Resting Badge / Tooltip */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#451522] border border-[#D5A642] text-[#F0C968] text-xs font-serif rounded-full whitespace-nowrap shadow-lg">
              ✨ Zeus is listening (Click to purr)
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}