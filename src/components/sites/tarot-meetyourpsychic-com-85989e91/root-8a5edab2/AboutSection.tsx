"use client";

import React from "react";
import { RiveAnimation } from "./RiveAnimation";
import { cn } from "@/lib/utils";

const aboutText1 =
  "Since 2009, MeetYourJyotishi.com has delivered millions of successful readings to clients seeking clarity, direction, and insight. We connect individuals with experienced Jyotish advisors and Vedic masters who provide tarot readings, intuitive guidance, and spiritual insight with professionalism and discretion. Our mission is to offer a trusted and supportive environment where you can explore important life questions with confidence. Whether you are navigating love, career decisions, personal growth, or significant transitions, our advisors are committed to delivering thoughtful and grounded guidance. Every reading on MeetYourJyotishi.com is designed to provide perspective rather than pressure. We believe celestial insight should empower you to think clearly, act responsibly, and make informed decisions about your future.";

const aboutText2 =
  "This interactive tarot experience uses artificial intelligence to interpret traditional card symbolism and provide reflective insights. It is designed for personal inspiration, self exploration, and entertainment. AI generated readings are not a substitute for professional advice in medical, legal, financial, or psychological matters. Interpretations reflect symbolic perspectives based on established tarot frameworks and should not be viewed as factual predictions or guarantees of future outcomes. Our goal is to combine time honored tarot symbolism with modern technology to offer an engaging and accessible experience for users worldwide.";

export function AboutSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "container flex flex-col items-center gap-6 pb-36 text-center sm:gap-12 2xl:pb-48 mx-auto px-6 max-w-5xl relative z-20",
        className
      )}
    >
      {/* Header: About Us */}
      <div className="inline-flex items-center gap-3">
        <div className="h-16 w-10 sm:h-18 sm:w-12 md:h-20 md:w-14 flex items-center justify-center">
          <RiveAnimation
            src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/rive/star-icon.riv"
            fallback={
              <div className="size-8 rounded-full bg-[#f3a754]/20 border border-[#f3a754]/40 flex items-center justify-center text-[#f3a754]">
                ★
              </div>
            }
          />
        </div>
        <h1 className="section-h1-title text-4xl sm:text-5xl md:text-6xl font-header font-medium">
          About Us
        </h1>
      </div>

      {/* Text Block 1 */}
      <div className="flex flex-col gap-4">
        <p className="max-w-[72ch] leading-relaxed text-pretty text-[#b8b8b8] md:text-xl font-light">
          {aboutText1.split(" ").map((word, index) => (
            <span
              key={index}
              className="inline-block mr-1.5 transition-all duration-500 opacity-90 hover:opacity-100 hover:text-white"
            >
              {word}
            </span>
          ))}
        </p>
      </div>

      {/* Decorative Middle Divider */}
      <div className="h-14 w-72 sm:-my-4 sm:w-96 flex items-center justify-center my-4">
        <div className="size-full">
          <RiveAnimation
            src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/rive/about-feature-breaks.riv"
            fallback={
              <div className="w-full flex items-center justify-center gap-3">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#f3a754]/40" />
                <span className="text-[#f3a754]">✦</span>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#f3a754]/40" />
              </div>
            }
          />
        </div>
      </div>

      {/* Secondary Headline & Text Block 2 */}
      <div className="flex flex-col items-center space-y-6">
        <h2 className="gtext-shim-gradient-4 font-header text-3xl font-medium sm:text-4xl md:text-5xl leading-tight">
          About the Digital Tarot Experience
        </h2>

        <div className="flex flex-col gap-4">
          <p className="max-w-[72ch] leading-relaxed text-pretty text-[#b8b8b8] md:text-xl font-light">
            {aboutText2.split(" ").map((word, index) => (
              <span
                key={index}
                className="inline-block mr-1.5 transition-all duration-500 opacity-90 hover:opacity-100 hover:text-white"
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Ending Divider */}
      <div className="h-9 w-64 sm:-mt-4 sm:h-10 sm:w-72 flex items-center justify-center">
        <div className="size-full">
          <RiveAnimation
            src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/rive/about-feature-ending.riv"
            fallback={
              <div className="w-full flex items-center justify-center">
                <div className="h-px w-36 bg-gradient-to-r from-transparent via-[#f3a754]/30 to-transparent" />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
