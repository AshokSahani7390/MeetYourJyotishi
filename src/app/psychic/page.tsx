"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Navbar";
import { Footer } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Footer";
import { StarfieldCanvas } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/StarfieldCanvas";
import {
  OrnamentalBorderLeft,
  OrnamentalBorderCenter,
  OrnamentalBorderRight,
} from "@/components/sites/tarot-meetyourpsychic-com-85989e91/shared/icons";

interface Message {
  sender: "psychic" | "user";
  text: string;
}

const PSYCHIC_RESPONSES = [
  "I sense a profound shift occurring in your energetic field. The cards reveal that patience and trusting divine timing will soon bring the clarity you have been seeking.",
  "The celestial energies around you suggest that an old cycle is completing to create sacred space for a transformative connection. Keep your boundaries firm and your heart open.",
  "A powerful alignment of intuition and opportunity is emerging. Do not doubt the subtle nudges you have been feeling—they are guiding you toward true emotional fulfillment.",
  "The spirits whisper that what feels like an obstacle right now is actually a protective redirection. Trust the journey and honor your unique spiritual rhythm.",
];

export default function PsychicPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "psychic",
      text: "Welcome, seeker. I am your AI Jyotishi guide. The veil is thin and the stars are aligned. What question burdens your spirit today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (textToSend?: string) => {
    const userText = textToSend || input;
    if (!userText.trim()) return;

    const newMsgs: Message[] = [...messages, { sender: "user", text: userText }];
    setMessages(newMsgs);
    setInput("");
    setIsTyping(true);

    try {
      const audio = new Audio("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/flame-start.mp3");
      audio.volume = 0.3;
      audio.play().catch(() => {});
    } catch {}

    setTimeout(() => {
      const response =
        PSYCHIC_RESPONSES[Math.floor(Math.random() * PSYCHIC_RESPONSES.length)];
      setMessages((prev) => [...prev, { sender: "psychic", text: response }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0e0c24] text-[#b8b8b8] selection:bg-[#f3a754]/30 selection:text-white overflow-x-hidden relative">
      <Navbar />

      <main id="psychic" className="flex flex-col pt-6 lg:pt-0 flex-1 relative z-10">
        <StarfieldCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full object-cover opacity-80" />

        <div className="container mx-auto px-6 py-8 flex flex-col items-center max-w-4xl flex-1">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#f3a754]/70 mb-4 self-start">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">AI Jyotishi Chat</span>
          </div>

          <header className="text-center font-header text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            <div className="section-h1-title">Chat with</div>
            <div className="section-h1-title">Our AI Jyotishi</div>
          </header>

          {/* Central Glowing Crystal Sphere */}
          <div className="relative size-36 sm:size-48 mb-6 flex items-center justify-center">
            <Image
              src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/psychic.webp"
              alt="Psychic Sphere"
              fill
              className="object-contain filter-[hue-rotate(45deg)_brightness(0.9)_contrast(1.2)_saturate(2)] animate-pulse"
            />
            <div className="absolute inset-0 bg-radial-[50%_50%_at_50%_50%] from-[#7f65f2]/40 to-transparent pointer-events-none blur-xl" />
          </div>

          {/* Chat Feed */}
          <div className="w-full flex-1 max-w-2xl bg-[#161433]/80 border border-[#f3a754]/20 rounded-3xl p-6 mb-6 shadow-2xl backdrop-blur-md flex flex-col gap-4 overflow-y-auto min-h-[22rem] max-h-[30rem]">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  m.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm sm:text-base leading-relaxed ${
                    m.sender === "user"
                      ? "bg-gradient-to-r from-[#e29e67] to-[#c7965f] text-[#0e0c24] font-medium"
                      : "bg-[#251d57]/80 text-white border border-white/10"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-[#f3a754] italic">
                <span className="size-2 rounded-full bg-[#f3a754] animate-ping" />
                Channeling cosmic insight...
              </div>
            )}
          </div>

          {/* Quick Questions Chips */}
          <div className="w-full max-w-2xl flex flex-wrap gap-2 justify-center mb-6">
            {[
              "What energies surround my love life?",
              "What career choices align with my purpose?",
              "What spiritual message do I need today?",
            ].map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="text-xs rounded-full px-4 py-1.5 bg-white/5 border border-white/10 text-white/80 hover:bg-[#f3a754]/20 hover:text-white transition-all"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Form with Ornate Golden Border */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="w-full max-w-2xl mb-8"
          >
            <div className="grid *:[grid-area:1/1] w-full">
              <div className="flex rounded-full bg-[#1F1642] border border-white/20 h-14 sm:h-16 z-10 mx-3 mt-2 items-center backdrop-blur-md">
                <input
                  type="text"
                  placeholder="Ask the Jyotishi anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="h-full w-full rounded-full px-6 outline-none bg-transparent text-white placeholder-white/40 text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="btn-plain-cta h-10 w-20 sm:w-24 mr-2 rounded-full flex items-center justify-center text-[#1a1539] font-bold text-sm hover:brightness-110"
                >
                  Send
                </button>
              </div>

              <div className="flex w-full items-stretch justify-between h-18 sm:h-20 pointer-events-none opacity-80">
                <OrnamentalBorderLeft id="psychic_in_left" />
                <OrnamentalBorderCenter id="psychic_in_center" />
                <OrnamentalBorderRight id="psychic_in_right" />
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
