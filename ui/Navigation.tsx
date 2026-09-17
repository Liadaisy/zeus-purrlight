"use client";

import { useState, useEffect } from "react";
import { Volume2, VolumeX, Menu, X, Sparkles, Moon } from "lucide-react";
import { soundFx } from "@/lib/audio";

interface NavigationProps {
  onOpenChat?: () => void;
}

export default function Navigation({ onOpenChat }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "Story", href: "#story" },
    { name: "Purrlight", href: "#purrlight" },
    { name: "Nine Gifts", href: "#nine-gifts" },
    { name: "Ask Zeus", href: "#ask-zeus" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FFF9EE]/95 backdrop-blur-md border-b border-[#D5A642]/40 py-3 shadow-md shadow-[#35151D]/5 text-[#35151D]"
          : "bg-gradient-to-b from-[#FFF9EE]/90 to-transparent py-5 text-[#35151D]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D5A642] rounded-lg p-1"
        >
          <div className="relative w-9 h-9 rounded-full bg-[#451522] border-2 border-[#D5A642] flex items-center justify-center overflow-hidden shadow-sm group-hover:border-[#B8860B] transition-colors">
            <span className="text-[#F0C968] text-lg font-bold">⚡</span>
          </div>
          <div className="flex flex-col">
            <span className="font-storybook text-lg sm:text-xl font-bold tracking-wider text-[#35151D] group-hover:text-[#641E31] transition-colors">
              ZEUS
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#7D3042] font-semibold uppercase -mt-1 hidden sm:block">
              Guardian of the Purrlight
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wider text-[#35151D]/80 hover:text-[#B95D47] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D5A642] hover:after:w-full after:transition-all focus:outline-none focus:text-[#B95D47]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Sound Toggle & Ask Zeus CTA) */}
        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            aria-label={isMuted ? "Enable soothing sound effects" : "Mute sound effects"}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-[#D5A642] bg-[#FFFDF7] hover:bg-[#FFF3DD] text-[#35151D] text-xs font-bold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D5A642]"
            title={isMuted ? "Unmute Purr & Ambient Sounds" : "Mute Sound"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-[#7D3042]" /> : <Volume2 className="w-4 h-4 text-[#B8860B] animate-pulse" />}
            <span className="hidden sm:inline">{isMuted ? "Sound Off" : "Sound On"}</span>
          </button>

          {/* Quick Ask Zeus Button */}
          <a
            href="#ask-zeus"
            onClick={onOpenChat}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D5A642] to-[#F0C968] text-[#241017] font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_15px_rgba(213,166,66,0.5)] hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#451522]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ask Zeus</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg border-2 border-[#D5A642] bg-[#FFFDF7] text-[#35151D] focus:outline-none focus:ring-2 focus:ring-[#D5A642]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#B95D47]" /> : <Menu className="w-5 h-5 text-[#35151D]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF9EE] border-b border-[#D5A642]/40 px-6 py-5 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-storybook tracking-wide text-[#35151D] hover:text-[#B95D47] py-1 border-b border-[#D5A642]/20"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#ask-zeus"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenChat) onOpenChat();
            }}
            className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-full bg-gradient-to-r from-[#D5A642] to-[#F0C968] text-[#241017] font-bold text-sm tracking-wider uppercase text-center shadow-md"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ask Zeus for Help</span>
          </a>
        </div>
      )}
    </header>
  );
}
