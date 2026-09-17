"use client";

import { useState, useEffect } from "react";
import { soundFx } from "@/lib/audio";

interface NightWorldProps {
  lanternLit?: boolean;
  onLanternClick?: () => void;
}

export default function NightWorld({ lanternLit = false, onLanternClick }: NightWorldProps) {
  const [localLanternBright, setLocalLanternBright] = useState(false);

  // Sync with prop
  useEffect(() => {
    if (lanternLit) {
      setLocalLanternBright(true);
    }
  }, [lanternLit]);

  const handleLanternInteraction = () => {
    setLocalLanternBright((prev) => !prev);
    soundFx.playChime(640);
    if (onLanternClick) onLanternClick();
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Bright Golden Storybook Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9EE] via-[#FDE7C4] to-[#FAD29B]" />

      {/* Atmospheric Luminous Gold & Soft Peach Haze */}
      <div className="absolute top-[8%] left-1/4 w-[700px] h-[450px] bg-[#F4A261]/20 rounded-full blur-[100px]" />
      <div className="absolute top-[20%] right-1/4 w-[550px] h-[380px] bg-[#F0C968]/25 rounded-full blur-[90px]" />
      <div className="absolute bottom-[22%] left-1/3 w-[850px] h-[320px] bg-[#E9A878]/30 rounded-full blur-[80px]" />

      {/* Gentle Floating Golden Cloud Drifts */}
      <div className="absolute top-8 left-0 right-0 h-44 opacity-60">
        <div className="absolute top-4 -left-20 w-[480px] h-28 bg-[#FFFFFF]/70 rounded-full blur-2xl animate-[float-drift_16s_ease-in-out_infinite]" />
        <div className="absolute top-14 right-10 w-[580px] h-32 bg-[#FFF4DC]/80 rounded-full blur-3xl animate-[float-drift_22s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-2 left-1/2 w-[380px] h-24 bg-[#FDE8C7]/80 rounded-full blur-2xl animate-[float-drift_19s_ease-in-out_infinite]" />
      </div>

      {/* Sparkling Golden Dust / Sunlight Motes */}
      <div className="absolute inset-0">
        {[
          { top: "22%", left: "15%", delay: "0s", duration: "4.5s" },
          { top: "32%", left: "45%", delay: "1.2s", duration: "5.5s" },
          { top: "18%", left: "75%", delay: "2.5s", duration: "4s" },
          { top: "52%", left: "25%", delay: "0.8s", duration: "6s" },
          { top: "62%", left: "80%", delay: "1.7s", duration: "4.8s" },
          { top: "70%", left: "50%", delay: "3.1s", duration: "5.2s" },
          { top: "38%", left: "88%", delay: "2s", duration: "6.5s" },
          { top: "16%", left: "32%", delay: "1.5s", duration: "4.2s" },
        ].map((bug, i) => (
          <div
            key={i}
            style={{
              top: bug.top,
              left: bug.left,
              animationDelay: bug.delay,
              animationDuration: bug.duration,
            }}
            className="absolute w-2 h-2 rounded-full bg-[#D5A642] shadow-[0_0_8px_#F0C968] opacity-80 animate-[float-drift_linear_infinite]"
          />
        ))}
      </div>

      {/* Distant Layer 1: Warm Rolling Storybook Hills */}
      <div className="absolute bottom-[22%] left-0 right-0 h-48 opacity-45">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full text-[#B95D47]">
          <path
            fill="currentColor"
            d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,229.3C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>

      {/* Layer 2: Midground Hills with Charming Storybook Cottages */}
      <div className="absolute bottom-[14%] left-0 right-0 h-56">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full text-[#7D3042]">
          <path
            fill="currentColor"
            d="M0,224L60,218.7C120,213,240,203,360,208C480,213,600,235,720,229.3C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>

        {/* Storybook Village with Glowing Amber Windows */}
        <div className="absolute bottom-16 left-[20%] flex items-end gap-2 scale-75 opacity-95">
          {/* House 1 */}
          <div className="relative w-8 h-10 bg-[#451522] border-t-2 border-l-2 border-[#D5A642]">
            <div className="absolute -top-4 -left-1 w-10 h-4 border-b-8 border-b-[#352019] border-x-8 border-x-transparent" />
            <div className="w-2.5 h-3 bg-[#F0C968] rounded-sm mx-auto mt-3 shadow-[0_0_8px_#F0C968] animate-pulse" />
          </div>
          {/* House 2 */}
          <div className="relative w-10 h-14 bg-[#451522] border-t-2 border-[#D5A642]">
            <div className="absolute -top-5 -left-1 w-12 h-5 border-b-10 border-b-[#352019] border-x-8 border-x-transparent" />
            <div className="flex justify-center gap-1.5 mt-4">
              <div className="w-2.5 h-3 bg-[#F0C968] rounded-sm shadow-[0_0_6px_#F0C968]" />
              <div className="w-2.5 h-3 bg-[#F0C968] rounded-sm shadow-[0_0_6px_#F0C968]" />
            </div>
          </div>
          {/* Little Spire */}
          <div className="relative w-6 h-16 bg-[#451522]">
            <div className="absolute -top-7 -left-1 w-8 h-7 border-b-14 border-b-[#641E31] border-x-6 border-x-transparent" />
            <div className="w-2 h-2 bg-[#F0C968] rounded-full mx-auto mt-2 shadow-[0_0_10px_#F0C968]" />
          </div>
        </div>

        {/* Second cluster of cottages across the valley */}
        <div className="absolute bottom-20 right-[25%] flex items-end gap-2 scale-65 opacity-90">
          <div className="relative w-9 h-11 bg-[#451522]">
            <div className="absolute -top-4 -left-1 w-11 h-4 border-b-8 border-b-[#352019] border-x-8 border-x-transparent" />
            <div className="w-3 h-3 bg-[#F0C968] rounded-sm mx-auto mt-3 shadow-[0_0_8px_#F0C968]" />
          </div>
          <div className="relative w-7 h-9 bg-[#451522]">
            <div className="absolute -top-3 -left-1 w-9 h-3 border-b-6 border-b-[#352019] border-x-6 border-x-transparent" />
            <div className="w-2 h-2.5 bg-[#F0C968] rounded-sm mx-auto mt-2 shadow-[0_0_6px_#F0C968] animate-pulse" />
          </div>
        </div>
      </div>

      {/* Layer 3: Foreground Knoll & Winding Golden Cobblestone Path */}
      <div className="absolute bottom-0 left-0 right-0 h-[22%] bg-[#451522] border-t border-[#D5A642]/60">
        {/* Soft rounded hill curve */}
        <div className="absolute -top-12 left-0 right-0 h-24 rounded-t-[100%] bg-[#451522] shadow-inner" />

        {/* Winding Cobblestone Path where Zeus walks */}
        <div className="absolute top-2 left-0 right-0 h-16 opacity-40">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full text-[#F3E2BD]">
            <path
              d="M0,50 Q300,30 600,45 T1200,40 L1200,80 L0,80 Z"
              fill="currentColor"
              stroke="#D5A642"
              strokeWidth="1.2"
              strokeDasharray="5 7"
            />
          </svg>
        </div>

        {/* Storybook flowers and grass */}
        <div className="absolute -top-3 left-[8%] flex gap-1 text-[#D5A642]">
          <span className="block w-1 h-4 bg-current rotate-[-12deg] rounded-full" />
          <span className="block w-1 h-6 bg-[#F0C968] rotate-[4deg] rounded-full" />
          <span className="block w-1.5 h-1.5 bg-[#FFF4DC] rounded-full shadow-[0_0_6px_#FFF4DC] -mt-1" />
        </div>
        <div className="absolute -top-4 left-[35%] flex gap-1 text-[#E9A878]">
          <span className="block w-1 h-5 bg-current rotate-[-8deg] rounded-full" />
          <span className="block w-1 h-7 bg-[#F0C968] rotate-[6deg] rounded-full" />
          <span className="block w-1.5 h-1.5 bg-[#FFF4DC] rounded-full shadow-[0_0_6px_#FFF4DC] -mt-1" />
        </div>
        <div className="absolute -top-3 right-[15%] flex gap-1 text-[#D5A642]">
          <span className="block w-1 h-5 bg-[#F0C968] rotate-[-5deg] rounded-full" />
          <span className="block w-1.5 h-1.5 bg-[#FFF4DC] rounded-full shadow-[0_0_6px_#FFF4DC] -mt-1" />
          <span className="block w-1 h-6 bg-current rotate-[10deg] rounded-full" />
        </div>
      </div>

      {/* Wayside Golden Lantern (Interactive, Touched by Zeus at Step 5) */}
      <div
        onClick={handleLanternInteraction}
        className="pointer-events-auto absolute bottom-[18%] left-[28%] md:left-[32%] cursor-pointer group transition-transform duration-300 hover:scale-110 z-20"
        title="Wayside Lantern — Click or touch to illuminate"
      >
        {/* Lantern Post */}
        <div className="w-1.5 h-24 bg-gradient-to-b from-[#D5A642] via-[#7D3042] to-[#451522] mx-auto rounded-t" />

        {/* Lantern Crossbar & Cap */}
        <div className="relative -top-24 flex flex-col items-center">
          <div className="w-8 h-2 bg-[#D5A642] rounded-t-sm shadow-sm" />
          <div
            className={`w-6 h-8 rounded-b-sm border-2 border-[#D5A642] transition-all duration-700 flex items-center justify-center ${
              localLanternBright
                ? "bg-[#F0C968] shadow-[0_0_35px_#F0C968,0_0_70px_#D5A642]"
                : "bg-[#D5A642]/60 shadow-[0_0_15px_#D5A642]"
            }`}
          >
            {/* Candle Flame inside */}
            <div
              className={`rounded-full bg-[#FFF4DC] transition-all duration-500 ${
                localLanternBright
                  ? "w-3 h-4 shadow-[0_0_12px_#FFF4DC] animate-pulse"
                  : "w-2 h-2.5 opacity-90 shadow-[0_0_8px_#FFF4DC]"
              }`}
            />
          </div>
          {/* Lantern Base finial */}
          <div className="w-3 h-1.5 bg-[#352019] rounded-b" />
        </div>

        {/* Ambient Ground Light Pool */}
        <div
          className={`absolute -bottom-2 -left-8 w-24 h-8 rounded-full blur-md transition-all duration-700 pointer-events-none ${
            localLanternBright
              ? "bg-[#F0C968]/50 scale-125"
              : "bg-[#D5A642]/30 scale-100"
          }`}
        />
      </div>
    </div>
  );
}
