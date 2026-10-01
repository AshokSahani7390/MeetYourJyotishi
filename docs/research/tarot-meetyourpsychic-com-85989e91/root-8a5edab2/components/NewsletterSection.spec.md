# NewsletterSection Specification

## Overview
- **Target file:** `src/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/NewsletterSection.tsx`
- **Screenshot:** `docs/design-references/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/fullpage-desktop-1440.png`
- **Interaction model:** input focus and interactive submission

## DOM Structure
- Section: `.gradient-newsletter-bg.relative.mx-auto.mb-24.flex.w-full.max-w-[calc(100%---spacing(12))].flex-col.items-center.rounded-5xl.border-b-4.border-b-transparent.px-6.py-16.pb-18.text-center.sm:min-h-117.sm:px-24.sm:pt-16.sm:pb-20.lg:max-w-4xl.xl:max-w-5xl`.
- Header:
  - Canvas: `all-seeing-eye.riv` (`size-28 h-24 sm:w-36`).
  - Label: "Get in touch" (`text-lg md:text-2xl`).
  - H1 Title: "Subscribe to Our Newsletter" with `.section-h1-title`.
- Form:
  - Container with ornate golden decorative SVG border:
    `OrnamentalBorderLeft`, `OrnamentalBorderCenter`, `OrnamentalBorderRight`.
  - Inner input wrapper: `rounded-full bg-[#C7965F]/10 h-12 text-sm sm:text-base`.
  - Input: placeholder "Enter your email", auto-complete "email", transparent background.
  - Submit Button: `.btn-plain-cta` with "Subscribe" text and gold gradient pill style.
