"use client";

import { Sparkles, Moon, Flame, Heart } from "lucide-react";
import { soundFx } from "@/lib/audio";

interface FinalCallToActionProps {
  onOpenChat?: () => void;
}

export default function FinalCallToAction({ onOpenChat }: FinalCallToActionProps) {
  const handleClick = () => {
    soundFx.playChime(720);
    if (onOpenChat) onOpenChat();
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8EB] via-[#FDE5BE] to-[#FFF8EB] border-t border-[#D5A642]/30 text-center overflow-hidden">
      {/* Warm Golden Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#F0C968]/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Zeus with Lanterns and Golden Crescent Glow */}
        <div className="relative inline-block mb-8">
          {/* Moon Behind */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gradient-to-tr from-[#D5A642]/30 to-[#FFFDF7]/40 blur-xl pointer-events-none" />

          {/* Cat in Center */}
          <div className="relative w-64 sm:w-72 mx-auto">
            <img
              src="/images/cat/zeus-walk.png"
              alt="Zeus sitting beneath the moon"
              className="w-full drop-shadow-[0_12px_32px_rgba(69,21,34,0.3)] select-none"
              draggable={false}
            />

            {/* Glowing Lantern on Left */}
            <div className="absolute -bottom-2 -left-6 flex flex-col items-center">
              <div className="w-6 h-8 rounded-b bg-[#F0C968] border-2 border-[#D5A642] shadow-[0_0_20px_#F0C968] flex items-center justify-center">
                <Flame className="w-3 h-3 text-[#FFF4DC] animate-pulse" />
              </div>
              <div className="w-1.5 h-6 bg-[#7D3042]" />
            </div>

            {/* Glowing Lantern on Right */}
            <div className="absolute -bottom-2 -right-6 flex flex-col items-center">
              <div className="w-6 h-8 rounded-b bg-[#F0C968] border-2 border-[#D5A642] shadow-[0_0_20px_#F0C968] flex items-center justify-center">
                <Flame className="w-3 h-3 text-[#FFF4DC] animate-pulse" />
              </div>
              <div className="w-1.5 h-6 bg-[#7D3042]" />
            </div>
          </div>
        </div>

        {/* Text */}
        <h2 className="font-storybook text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#35151D] mb-4">
          &ldquo;Someone out there is waiting to be heard.&rdquo;
        </h2>

        <p className="font-serif italic text-base sm:text-lg text-[#7D3042] font-semibold max-w-lg mx-auto mb-8 leading-relaxed">
          &ldquo;No one should face their darkest moment alone.&rdquo;
        </p>

        {/* Action Button */}
        <div>
          <a
            href="#ask-zeus"
            onClick={handleClick}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#D5A642] via-[#F0C968] to-[#D5A642] text-[#241017] font-bold text-base sm:text-lg tracking-wider uppercase shadow-[0_4px_30px_rgba(213,166,66,0.6)] hover:shadow-[0_6px_40px_rgba(213,166,66,0.8)] hover:scale-105 active:scale-95 transition-all"
          >
            <Sparkles className="w-5 h-5 text-[#241017] transition-transform group-hover:rotate-12" />
            <span>ASK ZEUS FOR HELP</span>
          </a>
        </div>
      </div>
    </section>
  );
}
