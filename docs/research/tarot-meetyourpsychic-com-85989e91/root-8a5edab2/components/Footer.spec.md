# Footer Specification

## Overview
- **Target file:** `src/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Footer.tsx`
- **Screenshot:** `docs/design-references/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/fullpage-desktop-1440.png`
- **Interaction model:** links hover + accessibility menu toggle

## DOM Structure
- Footer: `.gradient-footer-bg.relative.z-20.mt-12.grid.grid-cols-5.gap-8.gap-y-12.rounded-t-4xl.p-8.pt-16.sm:p-12.sm:pt-24`.
- Column 1 (`col-span-5`):
  - Brand Logo: `MeetYourPsychic` webp image (`h-10 sm:h-14`).
  - Mission description: "MeetYourPsychic blends ancient tarot wisdom with modern AI to offer free, animated readings that inspire self-discovery, clarity, and personal growth."
- Column 2 (`col-span-full sm:col-span-5 md:col-span-4`):
  - H2: "Quick Links"
  - Links: Home (`/`), FAQ (`/faq`), Card Meanings (`/cards`), Contact Us (`/contact`), AI Psychic Chat (`/psychic`).
- Column 3 (`col-span-full sm:col-span-4 lg:col-start-auto xl:col-span-3`):
  - H2: "Follow Us"
  - Social icons: Facebook, Pinterest, Instagram, Twitter/X, YouTube, TikTok, LinkedIn, Tumblr.
- Column 4 (`col-span-4 sm:col-span-9 lg:col-span-12`):
  - Copyright: "Copyright © 2011 - 2026. All Rights Reserved. Must be 18+. For Entertainment Purposes Only."
  - Links: Privacy policy (`/privacy`), Terms of use (`/terms`).
- Accessibility Floating Trigger (`section.grid.place-items-center`):
  - Button with accessibility SVG icon (`accessibility.svg`).
