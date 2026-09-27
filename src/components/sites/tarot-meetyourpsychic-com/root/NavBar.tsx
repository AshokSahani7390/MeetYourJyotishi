"use client";

import Image from "next/image";
import Link from "next/link";
import { SoundOffIcon, ExternalLinkIcon } from "./icons";
import { cn } from "@/lib/utils";

interface NavBarProps {
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 grid h-20 w-full grid-cols-[40px_1fr_40px] items-center bg-transparent px-8 lg:grid-cols-[240px_1fr_240px]",
        className
      )}
    >
      {/* Left: Sound toggle button */}
      <div className="flex items-center justify-start">
        <button
          type="button"
          aria-label="Toggle sound"
          className="flex size-10 sm:size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7f65f2]"
        >
          <SoundOffIcon className="size-5 sm:size-6" />
        </button>
      </div>

      {/* Center: Logo */}
      <div className="flex items-center justify-center">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/sites/tarot-meetyourpsychic-com/root/images/logo.webp"
            alt="MeetYourPsychic"
            width={199}
            height={45}
            priority
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Right: CTA button */}
      <div className="flex items-center justify-end">
        <a
          href="https://meetyourpsychic.com/all-psychics"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 rounded-full gradient-gold bg-gradient-to-r from-[#e29e67] to-[#c9944f] px-6 py-3 text-sm font-medium text-[#1a1539] transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eeb576]"
        >
          <span>Talk to a Psychic</span>
          <ExternalLinkIcon className="size-4 shrink-0" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
