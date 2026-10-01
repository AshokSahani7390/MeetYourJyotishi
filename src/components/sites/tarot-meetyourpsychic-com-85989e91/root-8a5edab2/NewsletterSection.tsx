"use client";

import React, { useState } from "react";
import { RiveAnimation } from "./RiveAnimation";
import {
  OrnamentalBorderLeft,
  OrnamentalBorderCenter,
  OrnamentalBorderRight,
} from "@/components/sites/tarot-meetyourpsychic-com-85989e91/shared/icons";
import { useToast } from "@/components/ui/Toast";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterSection({ className }: { className?: string }) {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setError("Please provide a valid email address.");
      toast({
        title: "Invalid Email Address",
        description: "Please enter a valid email format to receive astrological forecasts.",
        variant: "warning",
      });
      return;
    }

    setError("");
    setSubscribed(true);
    toast({
      title: "Subscribed to Celestial Forecasts ✦",
      description: "May cosmic insight and astrological clarity illuminate your path with each new moon.",
      variant: "success",
    });
  };

  return (
    <section
      className={cn(
        "gradient-newsletter-bg relative mx-auto mb-24 flex w-full max-w-[calc(100%-3rem)] flex-col items-center rounded-5xl border-b-4 border-b-transparent px-6 py-16 pb-18 text-center sm:min-h-[29rem] sm:px-24 sm:pt-16 sm:pb-20 lg:max-w-4xl xl:max-w-5xl shadow-[0_20px_50px_rgba(37,29,87,0.4)] relative z-20",
        className
      )}
    >
      {/* Top Animated Icon */}
      <div className="flex flex-col items-center">
        <div className="size-28 h-24 sm:w-36 flex items-center justify-center">
          <RiveAnimation
            src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/rive/all-seeing-eye.riv"
            fallback={
              <div className="size-16 rounded-full bg-[#f3a754]/20 flex items-center justify-center text-[#f3a754] text-2xl">
                👁
              </div>
            }
          />
        </div>
        <span className="text-lg md:text-2xl text-[#b8b8b8] font-light">Get in touch</span>
      </div>

      {/* Main Title & Subscription Form */}
      <div className="flex w-full flex-col items-center lg:max-w-2xl mt-2">
        <h2 className="section-h1-title mt-2 mb-8 text-4xl sm:text-5xl font-header font-medium">
          Subscribe to Our Newsletter
        </h2>

        {subscribed ? (
          <div className="flex items-center gap-3 p-4 px-6 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/40 font-medium text-sm shadow-lg">
            <CheckCircle2 className="size-5 shrink-0" />
            <span>Thank you for subscribing! May celestial clarity and insight guide your journey.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex w-full flex-col gap-4 sm:gap-0">
            <div className="flex flex-col gap-1 sm:h-20 w-full">
              <div className="grid *:[grid-area:1/1] w-full">
                {/* Form Input Container */}
                <div className={`flex rounded-full bg-[#C7965F]/10 h-12 text-sm sm:text-base z-10 mx-3.25 mt-2.5 items-center backdrop-blur-sm border ${
                  error ? "border-red-500/80 bg-red-500/5" : "border-white/5"
                }`}>
                  <div className="relative h-full flex-1 overflow-hidden rounded-full">
                    <input
                      type="email"
                      required
                      placeholder="e.g. seeker@destiny.com"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      className="h-full w-full rounded-full px-6 outline-none bg-transparent text-white placeholder-white/40 md:px-8 text-sm sm:text-base"
                    />
                  </div>

                  {/* Desktop Subscribe Button */}
                  <button
                    type="submit"
                    className="btn-plain-cta h-12 w-36 self-start px-6 font-semibold hidden sm:inline-flex items-center justify-center cursor-pointer hover:brightness-110"
                  >
                    <span>Subscribe</span>
                  </button>
                </div>

                {/* Ornate Golden Frame */}
                <div className="flex w-full items-stretch justify-between h-17 pointer-events-none opacity-80">
                  <OrnamentalBorderLeft id="newsletter_left" />
                  <OrnamentalBorderCenter id="newsletter_center" />
                  <OrnamentalBorderRight id="newsletter_right" />
                </div>
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-400 flex items-center justify-center gap-1.5 mt-1">
                <AlertCircle className="size-3.5 shrink-0" />
                {error}
              </p>
            )}

            {/* Mobile Subscribe Button */}
            <button
              type="submit"
              className="btn-plain-cta h-12 w-[calc(100%-1.5rem)] self-center font-semibold sm:!hidden items-center justify-center mt-2 cursor-pointer hover:brightness-110"
            >
              <span>Subscribe</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default NewsletterSection;
