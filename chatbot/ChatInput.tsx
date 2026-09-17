"use client";

import { useState, KeyboardEvent } from "react";
import { Send, Sparkles } from "lucide-react";

interface ChatInputProps {
  onSend: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  errorMessage?: string;
  inputType?: "text" | "number" | "email";
}

export default function ChatInput({
  onSend,
  disabled = false,
  placeholder = "Whisper your answer to Zeus...",
  errorMessage,
  inputType = "text",
}: ChatInputProps) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim() || disabled) return;
    onSend(value.trim());
    setValue("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full">
      {/* Friendly validation feedback if present */}
      {errorMessage && (
        <div className="mb-2 px-3 py-1.5 rounded-lg bg-[#FFF2D6] border-2 border-[#B95D47] text-[#451522] text-xs font-semibold flex items-center gap-2 animate-shake shadow-sm">
          <span className="text-[#B95D47]">🐾</span>
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="relative flex items-center bg-[#FFFDF7] border-2 border-[#D5A642] rounded-full shadow-sm focus-within:border-[#B8860B] focus-within:ring-2 focus-within:ring-[#D5A642]/30 transition-all p-1.5">
        <input
          type={inputType}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={disabled ? "Zeus is pondering..." : placeholder}
          className="w-full bg-transparent px-4 py-2.5 text-sm sm:text-base text-[#35151D] placeholder-[#8A5038]/60 focus:outline-none disabled:opacity-50 font-medium"
          autoComplete="off"
        />

        <button
          onClick={handleSend}
          disabled={disabled || !value.trim()}
          aria-label="Send message to Zeus"
          className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D5A642] to-[#F0C968] text-[#241017] flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 transition-all shadow-md"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
