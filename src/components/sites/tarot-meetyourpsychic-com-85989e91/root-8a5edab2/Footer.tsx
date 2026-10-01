"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import {
  InstagramIcon,
  LinkedInIcon,
  GithubIcon,
} from "@/components/sites/tarot-meetyourpsychic-com-85989e91/shared/icons";
import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
  const [showAccessibilityModal, setShowAccessibilityModal] = useState(false);

  return (
    <footer
      className={cn(
        "gradient-footer-bg relative z-20 mt-16 grid grid-cols-5 gap-8 gap-y-12 rounded-t-4xl border border-b-0 border-transparent sm:grid-cols-9 lg:grid-cols-12 lg:gap-y-20 mx-auto p-8 pt-16 sm:p-12 sm:pt-24 max-w-[calc(100%-1rem)] lg:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-8rem)] pb-24 sm:pb-32 mb-10 shadow-2xl",
        className
      )}
    >
      {/* Brand Column */}
      <section className="col-span-5 flex flex-col gap-4">
        <BrandLogo size="md" className="-ml-1" />
        <p className="text-sm text-[#8c8b9a] sm:max-w-[40ch] sm:text-base xl:text-lg leading-relaxed font-light">
          MeetYourJyotishi blends ancient Vedic wisdom, tarot, and astrology with modern AI to offer free, animated readings that inspire self-discovery, clarity, and personal growth.
        </p>
      </section>

      {/* Quick Links Column */}
      <section className="col-span-full grid h-fit grid-cols-2 gap-x-8 sm:col-span-5 md:col-span-4 lg:gap-x-0">
        <h2 className="col-span-full pb-2 text-lg font-semibold text-[#C5C1B9] sm:pb-7">
          Quick Links
        </h2>
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="text-sm font-light text-white/70 transition-colors hover:text-white sm:text-base"
          >
            Home
          </Link>
          <Link
            href="/faq"
            className="text-sm font-light text-white/70 transition-colors hover:text-white sm:text-base"
          >
            FAQ
          </Link>
          <Link
            href="/cards"
            className="text-sm font-light text-white/70 transition-colors hover:text-white sm:text-base"
          >
            Card Meanings
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            href="/contact"
            className="text-sm font-light text-white/70 transition-colors hover:text-white sm:text-base"
          >
            Contact Us
          </Link>
          <Link
            href="/psychic"
            className="text-sm font-light text-white/70 transition-colors hover:text-white sm:text-base"
          >
            AI Jyotishi Chat
          </Link>
          <Link
            href="/psychics"
            className="text-sm font-light text-white/70 transition-colors hover:text-white sm:text-base"
          >
            All Jyotishis
          </Link>
        </div>
      </section>

      {/* Follow Us Column */}
      <section className="col-span-full flex flex-col gap-4 sm:col-span-4 sm:col-start-6 sm:gap-7.5 lg:col-start-auto xl:col-span-3">
        <h2 className="translate-y-0.5 text-lg font-semibold text-[#C5C1B9]">
          Follow Us
        </h2>
        <div className="-ml-1 flex flex-wrap gap-4 text-white/70">
          <a
            href="https://github.com/AshokSahani7390"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <GithubIcon className="size-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ashok-sahani-b38b94305"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <LinkedInIcon className="size-6" />
          </a>
          <a
            href="https://www.instagram.com/ashoksahani7390?stkn=MTl0bjNrOG8xbDM5ag=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition-colors"
          >
            <InstagramIcon className="size-6" />
          </a>
        </div>
      </section>

      {/* Legal & Copyright Row */}
      <section className="col-span-full flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8c8b9a] sm:text-sm border-t border-white/10 pt-8 mt-4">
        <span className="text-center md:text-left">
          Copyright © 2011 - {new Date().getFullYear()}. All Rights Reserved. Must be 18+. For Entertainment Purposes Only.
        </span>
        <div className="inline-flex items-center gap-3 text-nowrap">
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy policy
          </Link>
          <span className="opacity-40">|</span>
          <Link href="/terms" className="transition-colors hover:text-white">
            Terms of use
          </Link>
        </div>
      </section>

      {/* Accessibility Button & Dialog */}
      <section className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-30">
        <button
          type="button"
          aria-label="Accessibility options"
          onClick={() => setShowAccessibilityModal((prev) => !prev)}
          className="relative size-10 rounded-full lg:size-12 bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center border border-white/10 shadow-lg cursor-pointer"
        >
          <Image
            src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/accessibility.svg"
            alt="Accessibility"
            width={24}
            height={24}
            className="size-6 object-contain"
          />
        </button>

        {showAccessibilityModal && (
          <div className="absolute bottom-16 right-0 w-72 rounded-2xl bg-[#1f1a3b] p-4 text-xs shadow-2xl border border-white/10 z-50 text-white backdrop-blur-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-sm">Accessibility Options</span>
              <button
                type="button"
                onClick={() => setShowAccessibilityModal(false)}
                className="text-white/60 hover:text-white p-1"
              >
                ✕
              </button>
            </div>
            <p className="text-white/70 mb-3 leading-relaxed">
              Standard accessibility profiles, screen reader readiness, and high-contrast modes are enabled.
            </p>
            <div className="flex gap-2">
              <span className="px-2.5 py-1 rounded bg-[#f3a754]/20 text-[#f3a754] text-[11px] font-medium">
                Screen Reader Ready
              </span>
              <span className="px-2.5 py-1 rounded bg-[#f3a754]/20 text-[#f3a754] text-[11px] font-medium">
                Motion Reduced
              </span>
            </div>
          </div>
        )}
      </section>
    </footer>
  );
}

export default Footer;
