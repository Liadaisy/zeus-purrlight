"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MessageCircle, AlertCircle, RefreshCw, Send, ShieldAlert } from "lucide-react";
import { ChatMessage as ChatMessageType, HelpRequest } from "@/types/help";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import SubmissionPayoff from "./SubmissionPayoff";
import { validateAge, validateEmail, sanitizeString } from "@/lib/validation";
import { soundFx } from "@/lib/audio";

type StepName = "name" | "age" | "location" | "email" | "grievance" | "submitting" | "success" | "error";

export default function Chatbot() {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [currentStep, setCurrentStep] = useState<StepName>("name");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  // Collected session data
  const [formData, setFormData] = useState<{
    name: string;
    age: number;
    location: string;
    email: string;
    grievance: string;
  }>({
    name: "",
    age: 0,
    location: "",
    email: "",
    grievance: "",
  });

  const [submissionId, setSubmissionId] = useState<string | undefined>(undefined);
  const [emailDispatchMode, setEmailDispatchMode] = useState<"resend" | "logged">("logged");
  const [letterPreview, setLetterPreview] = useState<any>(null);

  // Scroll container strictly scoped to chat box to prevent window dragging
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const scrollChatBoxToBottom = () => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollChatBoxToBottom();
  }, [messages, isTyping]);

  // Brand New Witty, Caricature & Playful Opening Dialogue
  useEffect(() => {
    let isCancelled = false;

    const runOpeningSequence = async () => {
      setIsTyping(true);
      const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

      await delay(700);
      if (isCancelled) return;
      addZeusMessage("🐾 *GASP!* A visitor has arrived at the lunar windowsill!");

      await delay(1100);
      if (isCancelled) return;
      addZeusMessage("I'm Zeus—Guardian of the Purrlight, professional napper, and full-time defender of good vibes! ✨");

      await delay(1200);
      if (isCancelled) return;
      addZeusMessage("My whiskers detected a distress signal from Earth. Before we launch Rescue Protocol Alpha... What heroic name should I write on your Sanctuary Badge? 🏷️");
      setIsTyping(false);
      setCurrentStep("name");
    };

    runOpeningSequence();

    return () => {
      isCancelled = true;
    };
  }, []);

  const addZeusMessage = (text: string) => {
    soundFx.playChime(600);
    setMessages((prev) => [
      ...prev,
      {
        id: "msg_" + Math.random().toString(36).substring(2, 9),
        sender: "zeus",
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: "msg_" + Math.random().toString(36).substring(2, 9),
        sender: "user",
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  // Chatbot Flow Logic with Totally Revamped Style
  const handleUserResponse = async (input: string) => {
    setErrorMessage(undefined);
    const cleaned = sanitizeString(input);

    switch (currentStep) {
      case "name": {
        if (!cleaned || cleaned.length < 2) {
          setErrorMessage("Give me at least 2 letters so I can engrave your badge properly! 🏷️");
          return;
        }
        addUserMessage(cleaned);
        setFormData((prev) => ({ ...prev, name: cleaned }));

        setIsTyping(true);
        setTimeout(() => {
          addZeusMessage(`🌟 *hops down with a happy chirp* ${cleaned}! That name has 10/10 heroic energy.`);
          setTimeout(() => {
            addZeusMessage("Question #2 from the Great Cat Census: How many trips around the sun has your mortal body completed? (Your age, human!) 🎂🐾");
            setIsTyping(false);
            setCurrentStep("age");
          }, 1100);
        }, 800);
        break;
      }

      case "age": {
        const ageVal = validateAge(cleaned);
        if (!ageVal.isValid) {
          setErrorMessage(ageVal.message || "Hold your catnip! Try a real human age! 🐾");
          return;
        }
        addUserMessage(cleaned);
        setFormData((prev) => ({ ...prev, age: ageVal.parsedAge }));

        setIsTyping(true);
        setTimeout(() => {
          addZeusMessage(`${ageVal.parsedAge} years of Earthly wisdom! Not bad for someone without a fur coat. 🐱`);
          setTimeout(() => {
            addZeusMessage("And from which corner of this spinning globe are you broadcasting right now? Which city, forest, or cozy bedroom? 🗺️📍");
            setIsTyping(false);
            setCurrentStep("location");
          }, 1000);
        }, 800);
        break;
      }

      case "location": {
        if (!cleaned || cleaned.length < 2) {
          setErrorMessage("Name your city or kingdom so my radar can lock in! 🗺️");
          return;
        }
        addUserMessage(cleaned);
        setFormData((prev) => ({ ...prev, location: cleaned }));

        setIsTyping(true);
        setTimeout(() => {
          addZeusMessage(`${cleaned}! *whiskers twitch* My celestial purr radar has locked onto your coordinates! 🧭`);
          setTimeout(() => {
            addZeusMessage("Where should my carrier-owls dispatch your official Purrlight Blessing letter? (Hand over your digital email pigeon!) ✉️✨");
            setIsTyping(false);
            setCurrentStep("email");
          }, 1000);
        }, 800);
        break;
      }

      case "email": {
        const rawEmail = input.trim();
        if (!validateEmail(rawEmail)) {
          setErrorMessage("My carrier-owl got dizzy reading that! Give me a real email address (e.g. name@example.com) 🕊️");
          return;
        }
        addUserMessage(rawEmail);
        setFormData((prev) => ({ ...prev, email: rawEmail }));

        setIsTyping(true);
        setTimeout(() => {
          addZeusMessage("✨ *stamps address with a golden pawprint* Address confirmed!");
          setTimeout(() => {
            addZeusMessage(`Alright, ${formData.name}... *tucks paws in like a warm loaf and leans forward with big sparkling eyes* 🐾 Unfurl the scroll. What shadows or storm clouds have been troubling your kingdom? Tell Zeus everything.`);
            setIsTyping(false);
            setCurrentStep("grievance");
          }, 1100);
        }, 800);
        break;
      }

      case "grievance": {
        if (!cleaned || cleaned.length < 8) {
          setErrorMessage("Don't hold back! Pour out your thoughts—Zeus has big velvet ears and all the time in the world. 📜✨");
          return;
        }
        addUserMessage(cleaned);
        const finalData = { ...formData, grievance: cleaned };
        setFormData(finalData);

        // Transition to submitting state
        setCurrentStep("submitting");
        setIsTyping(true);
        await submitHelpRequest(finalData);
        break;
      }

      default:
        break;
    }
  };

  const submitHelpRequest = async (payload: typeof formData) => {
    try {
      const response = await fetch("/api/help", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionId(data.id);
        setEmailDispatchMode(data.emailMode || "logged");
        setLetterPreview(data.letterPreview);
        setIsTyping(false);
        setCurrentStep("success");
      } else {
        throw new Error(data.error || "Submission failed");
      }
    } catch (err) {
      console.error("Help submission error:", err);
      setIsTyping(false);
      setCurrentStep("error");
      addZeusMessage("⚠️ Hold on! Something got tangled in the celestial yarn ball!");
      setTimeout(() => {
        addZeusMessage("Give that red button a tap so we can try transmitting again! 🐾");
      }, 800);
    }
  };

  const handleRetry = () => {
    setCurrentStep("submitting");
    setIsTyping(true);
    submitHelpRequest(formData);
  };

  const handleReset = () => {
    setMessages([]);
    setCurrentStep("name");
    setSubmissionId(undefined);
    setFormData({ name: "", age: 0, location: "", email: "", grievance: "" });

    // Restart with playful energy
    setIsTyping(true);
    setTimeout(() => {
      addZeusMessage("🐾 *perks ears up* Resetting the Guest Register!");
      setTimeout(() => {
        addZeusMessage("What should I write on your badge this time, friend?");
        setIsTyping(false);
      }, 900);
    }, 600);
  };

  const getInputPlaceholder = () => {
    switch (currentStep) {
      case "name":
        return "Type your heroic name or nickname... 🏷️";
      case "age":
        return "Your age in Earth years (e.g. 23)... 🎂";
      case "location":
        return "Your city, town, or secret base... 🗺️";
      case "email":
        return "Where carrier-owls can reach you... ✉️";
      case "grievance":
        return "Tell Zeus what's bothering your heart... 📜";
      default:
        return "...";
    }
  };

  return (
    <section
      id="ask-zeus"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8EB] via-[#FFF2D6] to-[#FFF8EB] border-t border-[#D5A642]/30 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F0C968]/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF7] border-2 border-[#D5A642] text-xs uppercase tracking-[0.25em] text-[#451522] font-bold mb-4 shadow-sm">
            CHAPTER V
          </div>
          <h2 className="font-storybook text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#35151D] mb-3">
            Ask Zeus
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D5A642] to-transparent mx-auto mb-4" />
          <p className="text-base sm:text-lg text-[#7D3042] font-normal leading-relaxed">
            No boring support tickets. No cold bots. Share your story with Zeus, the Guardian of the Purrlight, and receive genuine warmth.
          </p>
        </div>

        {/* Chat Sanctuary Frame */}
        <div className="storybook-frame rounded-3xl bg-[#FFFDF7] border-2 border-[#D5A642] shadow-[0_20px_50px_rgba(69,21,34,0.12)] backdrop-blur-md overflow-hidden flex flex-col min-h-[560px]">
          {/* Top Chat Bar */}
          <div className="px-6 py-4 bg-gradient-to-r from-[#451522] via-[#641E31] to-[#451522] border-b-2 border-[#D5A642] flex items-center justify-between text-[#FFF4DC]">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full bg-[#352019] border-2 border-[#F0C968] overflow-hidden shadow-inner">
                <img
                  src="/images/cat/zeus-avatar.png"
                  alt="Zeus"
                  className="w-full h-full object-cover scale-125 translate-y-1"
                />
              </div>
              <div>
                <h3 className="font-storybook text-base sm:text-lg font-bold text-[#FFF4DC] tracking-wide flex items-center gap-2">
                  <span>ZEUS</span>
                  <span className="w-2 h-2 rounded-full bg-[#F0C968] animate-pulse" />
                </h3>
                <p className="text-[11px] text-[#E9A878] uppercase tracking-wider font-sans -mt-0.5 font-bold">
                  Chief Guardian &bull; Whiskers Active
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                title="Restart conversation"
                className="p-2 rounded-full text-[#FFF4DC]/80 hover:text-[#FFF4DC] hover:bg-[#352019]/60 transition-colors border border-[#D5A642]/40"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Conversation Body (Scrolls ONLY within this container!) */}
          <div
            ref={chatScrollRef}
            className="flex-1 p-6 sm:p-8 overflow-y-auto max-h-[420px] bg-gradient-to-b from-[#FFFBF2] to-[#FFF8ED] space-y-4"
          >
            {currentStep === "success" ? (
              <SubmissionPayoff
                userName={formData.name}
                userEmail={formData.email}
                requestId={submissionId}
                emailMode={emailDispatchMode}
                letterPreview={letterPreview}
                onReset={handleReset}
              />
            ) : (
              <>
                {/* Transcript Messages */}
                {messages.map((msg) => (
                  <ChatMessage key={msg.id} message={msg} />
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="my-2">
                    <TypingIndicator />
                  </div>
                )}

                {/* Submitting Loading State */}
                {currentStep === "submitting" && (
                  <div className="text-center py-6">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#451522] border-2 border-[#D5A642] text-[#FFF4DC] text-sm font-serif font-bold animate-pulse shadow-lg">
                      <Sparkles className="w-4 h-4 animate-spin text-[#F0C968]" />
                      <span>WEAVING PURRLIGHT RESONANCE &bull; Holding your words with care...</span>
                    </div>
                  </div>
                )}

                {/* Error Recovery Banner */}
                {currentStep === "error" && (
                  <div className="p-4 rounded-xl bg-[#FFF2D6] border-2 border-[#B95D47] text-center my-4">
                    <p className="font-serif text-sm text-[#451522] font-bold mb-3">
                      Something got tangled in the celestial yarn ball!
                    </p>
                    <button
                      onClick={handleRetry}
                      className="px-6 py-2 rounded-full bg-gradient-to-r from-[#D5A642] to-[#F0C968] text-[#241017] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all"
                    >
                      TRY AGAIN 🐾
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Bottom Interactive Input Deck */}
          {currentStep !== "success" && (
            <div className="p-4 sm:p-6 bg-[#FFF5E2] border-t-2 border-[#D5A642]/30">
              <ChatInput
                onSend={handleUserResponse}
                disabled={isTyping || currentStep === "submitting"}
                placeholder={getInputPlaceholder()}
                errorMessage={errorMessage}
                inputType={currentStep === "age" ? "number" : currentStep === "email" ? "email" : "text"}
              />
              <div className="flex items-center justify-between text-[11px] text-[#7D3042] font-semibold mt-3 px-2">
                <span>Press Enter to send &bull; Zeus keeps your secrets safe in his velvet ears</span>
                <span className="hidden sm:inline">Protected by the Purrlight Sanctuary 🐾</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
