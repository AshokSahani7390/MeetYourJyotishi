"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface NewsletterSectionProps
  extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  onSubscribe?: (email: string) => void;
}

export function NewsletterSection({
  className,
  onSubscribe,
  ...props
}: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    if (onSubscribe) {
      onSubscribe(email);
    }
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section
      className={cn(
        "rounded-[2.5rem] gradient-newsletter-bg bg-[linear-gradient(135deg,#251d57,#1a1539_50%,#251d57)] border-b-4 border-b-transparent",
        "px-6 py-16 pb-18 sm:px-24 sm:pt-16 sm:pb-20",
        "text-center flex flex-col items-center",
        "mb-24 max-w-4xl xl:max-w-5xl mx-auto w-full",
        className
      )}
      {...props}
    >
      <span className="text-sm text-gold tracking-wider uppercase mb-2">
        Get in touch
      </span>
      <h2 className="font-header text-3xl sm:text-4xl text-white mb-8">
        Subscribe to Our Newsletter
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          aria-label="Email address"
          className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-colors"
        />
        <button
          type="submit"
          className="gradient-gold rounded-full px-8 py-3 text-[#1a1539] font-semibold text-sm hover:opacity-90 transition cursor-pointer whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
      {isSubmitted && (
        <p className="mt-4 text-xs text-gold/90 animate-fade-in" role="status">
          Thank you for subscribing!
        </p>
      )}
    </section>
  );
}

export default NewsletterSection;
