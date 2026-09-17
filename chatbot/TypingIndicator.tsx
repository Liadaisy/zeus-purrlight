export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-[#451522] border border-[#D5A642]/40 text-[#F0C968] w-fit shadow-md">
      <span className="text-[11px] font-serif uppercase tracking-wider text-[#E9A878] mr-1">
        Zeus is listening
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-[#F0C968] animate-bounce" style={{ animationDelay: "0ms" }} />
      <span className="w-1.5 h-1.5 rounded-full bg-[#F0C968] animate-bounce" style={{ animationDelay: "150ms" }} />
      <span className="w-1.5 h-1.5 rounded-full bg-[#F0C968] animate-bounce" style={{ animationDelay: "300ms" }} />
    </div>
  );
}
