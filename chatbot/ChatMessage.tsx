import { ChatMessage as ChatMessageType } from "@/types/help";
import { Sparkles, User } from "lucide-react";

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isZeus = message.sender === "zeus";

  return (
    <div
      className={`flex items-end gap-3 my-3 ${
        isZeus ? "justify-start" : "justify-end"
      }`}
    >
      {/* Zeus Avatar */}
      {isZeus && (
        <div className="relative w-10 h-10 rounded-full bg-[#451522] border-2 border-[#D5A642] flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
          <img
            src="/images/cat/zeus-avatar.png"
            alt="Zeus Avatar"
            className="w-full h-full object-cover scale-125 translate-y-1"
          />
        </div>
      )}

      {/* Bubble */}
      <div
        className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-5 py-3.5 shadow-sm ${
          isZeus
            ? "bg-[#FFFFFF] text-[#35151D] rounded-bl-none border-2 border-[#D5A642]/60 shadow-[0_2px_8px_rgba(69,21,34,0.06)]"
            : "bg-gradient-to-r from-[#451522] to-[#641E31] text-[#FFF4DC] rounded-br-none border border-[#D5A642]/60 shadow-sm"
        }`}
      >
        <div className="flex items-center gap-1.5 mb-1">
          <span
            className={`text-[10px] font-bold uppercase tracking-wider ${
              isZeus ? "text-[#B95D47]" : "text-[#F0C968]"
            }`}
          >
            {isZeus ? "Zeus &bull; Guardian" : "You"}
          </span>
        </div>

        <p className="text-sm sm:text-base leading-relaxed font-sans whitespace-pre-wrap font-medium">
          {message.text}
        </p>

        <span
          className={`block text-[9px] mt-1 text-right ${
            isZeus ? "text-[#35151D]/50" : "text-[#FFF4DC]/60"
          }`}
        >
          {message.timestamp}
        </span>
      </div>

      {/* User Avatar Placeholder */}
      {!isZeus && (
        <div className="w-8 h-8 rounded-full bg-[#641E31] border-2 border-[#D5A642] flex items-center justify-center shrink-0 text-[#FFF4DC]">
          <User className="w-4 h-4 text-[#F0C968]" />
        </div>
      )}
    </div>
  );
}
