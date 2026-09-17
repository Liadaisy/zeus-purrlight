"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Sparkles, Moon, Heart, RefreshCw, Mail, MailCheck, FileText, X } from "lucide-react";
import confetti from "canvas-confetti";
import { soundFx } from "@/lib/audio";

interface SubmissionPayoffProps {
  userName: string;
  userEmail?: string;
  requestId?: string;
  emailMode?: "resend" | "logged";
  letterPreview?: {
    subject: string;
    headline: string;
    body: string;
    timestamp: string;
  };
  onReset: () => void;
}

export default function SubmissionPayoff({
  userName,
  userEmail,
  requestId,
  emailMode = "logged",
  letterPreview,
  onReset,
}: SubmissionPayoffProps) {
  const [stage, setStage] = useState<number>(0);
  const [letterOpen, setLetterOpen] = useState(false);

  useEffect(() => {
    soundFx.startPurr(6.5);

    const t1 = setTimeout(() => {
      setStage(1);
      soundFx.playChime(640);
    }, 1500);

    const t2 = setTimeout(() => {
      setStage(2);
      soundFx.playChime(720);
    }, 3200);

    const t3 = setTimeout(() => {
      setStage(3);
      soundFx.playChime(800);
    }, 5000);

    const t4 = setTimeout(() => {
      setStage(4);
      soundFx.playChime(880);

      try {
        confetti({
          particleCount: 80,
          spread: 85,
          origin: { y: 0.6 },
          colors: ["#D5A642", "#F0C968", "#B95D47", "#641E31"],
        });
      } catch (e) {
        // ignore
      }
    }, 6800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div className="relative py-8 px-4 text-center overflow-hidden">
      {/* Golden Concentric Purr Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="purr-wave w-64 h-64 border-[#D5A642]" />
        <span
          className="purr-wave w-96 h-96 border-[#F0C968]"
          style={{ animationDelay: "1s" }}
        />
        <span
          className="purr-wave w-[500px] h-[500px] border-[#E9A878]/60"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Cat Portrait with Eyes Closed in Deep Reverie */}
      <div className="relative inline-block mb-6">
        <div className="absolute -inset-8 bg-[#F0C968]/50 rounded-full blur-2xl animate-pulse" />
        <div className="w-24 h-24 rounded-full bg-[#FFFDF7] border-2 border-[#D5A642] flex items-center justify-center mx-auto shadow-md overflow-hidden">
          <img
            src="/images/cat/zeus-avatar.png"
            alt="Zeus"
            className="w-full h-full object-cover scale-125 translate-y-2 brightness-105"
          />
        </div>
        <span className="inline-block mt-2 px-3 py-0.5 rounded-full bg-[#FFF3DD] text-[#35151D] text-[10px] uppercase font-serif font-bold tracking-widest border border-[#D5A642] shadow-sm">
          Purring &bull; Eyes Closed
        </span>
      </div>

      {/* Sequential Dialogue Messages */}
      <div className="min-h-[140px] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.p
              key="s0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="font-serif italic text-lg sm:text-xl text-[#7D3042] font-semibold"
            >
              *Zeus closes his eyes and breathes deeply...*
            </motion.p>
          )}

          {stage === 1 && (
            <motion.p
              key="s1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="font-storybook text-2xl sm:text-3xl text-[#35151D] font-bold"
            >
              &ldquo;I heard you, {userName}.&rdquo;
            </motion.p>
          )}

          {stage === 2 && (
            <motion.p
              key="s2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="font-serif text-xl sm:text-2xl text-[#7D3042] font-medium max-w-md mx-auto"
            >
              &ldquo;You don&apos;t have to carry everything alone.&rdquo;
            </motion.p>
          )}

          {stage >= 3 && stage < 4 && (
            <motion.p
              key="s3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="font-serif text-lg sm:text-xl text-[#B95D47] font-bold"
            >
              &ldquo;Your request has reached the Purrlight.&rdquo;
            </motion.p>
          )}

          {stage >= 4 && (
            <motion.div
              key="s4"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-3 w-full max-w-md mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#D5A642] to-[#F0C968] text-[#241017] font-bold text-sm tracking-widest uppercase shadow-[0_4px_20px_rgba(213,166,66,0.6)]">
                <CheckCircle2 className="w-5 h-5 text-[#241017]" />
                <span>REQUEST RECEIVED ✓</span>
              </div>

              <h4 className="font-storybook text-2xl sm:text-3xl font-bold text-[#35151D] mt-2">
                &ldquo;ZEUS will take it from here.&rdquo;
              </h4>

              {/* Email Delivery Status Card */}
              <div className="mt-2 w-full p-4 rounded-2xl bg-[#FFF8EB] border-2 border-[#D5A642] text-left shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <MailCheck className="w-5 h-5 text-[#B95D47]" />
                  <span className="font-storybook text-xs font-bold uppercase tracking-wider text-[#35151D]">
                    Letter Dispatched
                  </span>
                </div>

                <p className="text-xs text-[#7D3042] mb-2 leading-relaxed">
                  Addressed to: <strong className="text-[#35151D]">{userEmail || "your inbox"}</strong>
                </p>

                {emailMode === "resend" ? (
                  <div className="p-2 rounded-lg bg-[#E8F5E9] border border-[#81C784] text-[11px] text-[#2E7D32] font-semibold">
                    ✓ Resend live email has been transmitted to your inbox! Check your inbox or spam folder.
                  </div>
                ) : (
                  <div className="p-2.5 rounded-lg bg-[#FFF2D6] border border-[#D5A642] text-[11px] text-[#451522] leading-relaxed">
                    <p className="font-semibold mb-1">
                      📬 Sanctuary Log Delivery Notice:
                    </p>
                    <p>
                      Because <code>RESEND_API_KEY</code> is not yet configured in <code>.env.local</code>, this transmission is recorded in the server logs. You can read your official letter below:
                    </p>
                  </div>
                )}

                <button
                  onClick={() => setLetterOpen(true)}
                  className="mt-3 w-full py-2 px-4 rounded-xl bg-[#451522] hover:bg-[#641E31] text-[#FFF4DC] text-xs font-serif font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4 text-[#F0C968]" />
                  <span>Read Zeus&apos;s Letter to You 📜</span>
                </button>
              </div>

              {requestId && (
                <span className="text-[10px] text-[#35151D]/60 font-mono tracking-wider font-semibold mt-1">
                  Sanctuary Seal: {requestId}
                </span>
              )}

              <button
                onClick={onReset}
                className="mt-3 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFFDF7] hover:bg-[#FFF3DD] border-2 border-[#D5A642] text-[#451522] text-xs font-serif font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#B95D47]" />
                <span>Speak with Zeus Again</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Letter Modal */}
      <AnimatePresence>
        {letterOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#35151D]/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative parchment-card rounded-3xl max-w-lg w-full p-8 border-2 border-[#D5A642] shadow-2xl text-left"
            >
              <button
                onClick={() => setLetterOpen(false)}
                className="absolute top-4 right-4 p-2 text-[#35151D] hover:bg-[#D5A642]/20 rounded-full transition-colors"
                aria-label="Close letter"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-5 pb-4 border-b border-[#D5A642]/30">
                <span className="text-2xl">🐾✨</span>
                <h3 className="font-storybook text-2xl font-bold text-[#451522] mt-1">
                  ZEUS
                </h3>
                <p className="text-[11px] uppercase tracking-widest text-[#B95D47] font-bold">
                  Guardian of the Purrlight Sanctuary
                </p>
              </div>

              <div className="space-y-3 text-sm text-[#35151D] font-serif leading-relaxed">
                <p className="font-bold text-[#451522] text-base">
                  Dear {userName},
                </p>
                <p>
                  I heard your whisper across the dusk. Even when the night feels heavy and quiet, you are not alone. My purr carries warmth to every corner where sorrow lingers.
                </p>
                <div className="p-3 bg-[#FFF5E2] border-l-4 border-[#D5A642] rounded text-xs italic text-[#7D3042]">
                  &ldquo;{letterPreview?.body.split('Request:')[1]?.split('Submitted:')[0]?.trim() || "Your message was held safely in the Purrlight."}&rdquo;
                </div>
                <p>
                  Take a deep, slow breath. The Purrlight remembers you, and I will keep watch from the crescent moon.
                </p>
                <p className="pt-2 text-right italic font-semibold text-[#451522]">
                  — Zeus, Guardian of the Purrlight 🐾
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D5A642]/30 flex justify-end">
                <button
                  onClick={() => setLetterOpen(false)}
                  className="px-6 py-2 rounded-full bg-[#451522] text-[#FFF4DC] font-serif font-bold text-xs uppercase tracking-wider hover:bg-[#641E31] transition-colors shadow-md"
                >
                  Fold Letter
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
