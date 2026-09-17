import { Moon, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#F8E7C8] border-t-2 border-[#D5A642] text-[#35151D] py-16 px-4 overflow-hidden">
      {/* Subtle background golden glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#F0C968]/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFFDF7] border-2 border-[#D5A642] mb-4 shadow-sm">
          <Moon className="w-6 h-6 text-[#B8860B]" />
        </div>

        <h3 className="font-storybook text-2xl md:text-3xl font-bold tracking-widest text-[#35151D] mb-1">
          ZEUS
        </h3>
        <p className="text-xs uppercase tracking-[0.3em] text-[#7D3042] font-bold mb-6">
          Guardian of the Purrlight
        </p>

        <blockquote className="font-serif italic text-lg md:text-xl text-[#451522] font-semibold max-w-lg mx-auto mb-8">
          &ldquo;Small purrs. Brighter tomorrows.&rdquo;
        </blockquote>

        <p className="text-sm text-[#7D3042] font-medium max-w-md mx-auto mb-10 leading-relaxed">
          No one should face their darkest moment alone. Somewhere in the warm evening mist, a gentle guardian keeps watch.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#35151D]/80 font-semibold pt-6 border-t border-[#D5A642]/40">
          <a href="#top" className="hover:text-[#B95D47] transition-colors">Return to Top</a>
          <span>&bull;</span>
          <a href="#story" className="hover:text-[#B95D47] transition-colors">Origin Story</a>
          <span>&bull;</span>
          <a href="#purrlight" className="hover:text-[#B95D47] transition-colors">The Purrlight</a>
          <span>&bull;</span>
          <a href="#nine-gifts" className="hover:text-[#B95D47] transition-colors">The Nine Gifts</a>
          <span>&bull;</span>
          <a href="#ask-zeus" className="hover:text-[#B95D47] transition-colors">Ask Zeus</a>
        </div>

        <div className="mt-8 text-[11px] text-[#35151D]/60 font-medium">
          Crafted with care &bull; Storybook Sanctuary for ZEUS
        </div>
      </div>
    </footer>
  );
}
