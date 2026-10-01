# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/HeroSection.tsx`
- **Screenshot:** `docs/design-references/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/fullpage-desktop-1440.png`
- **Interaction model:** 3D perspective tilt on hover + candle flame toggle on click

## DOM Structure
- Container: `div.grid.*:[grid-area:1/1]` with min-height `min-h-230`.
- Background:
  - `StarfieldCanvas`: particle canvas with star clusters.
  - Nebula radial glow: `bg-radial-[40%_75%_at_50%_10%] from-[#251d57] to-85%`.
- Content stack (`z-10`):
  - H1 Header: "Unlock the Secrets of Your Destiny!" in `font-header` (`ginger`) with gradient text.
  - Game Category Quick-Nav Pills (`ul.my-8.grid.grid-cols-3.gap-4.lg:grid-cols-6`):
    - Love Tarot (`/game/love`) - Active
    - Free Tarot - Coming Soon!
    - Yes/No - Coming Soon!
    - Daily Tarot - Coming Soon!
    - AI Tarot - Coming Soon!
    - One Card - Coming Soon!
  - Center CTA buttons:
    - "AI Psychic Chat" (`href="/psychic"`) with ornate golden ornamental SVG borders (`OrnamentalBorderLeft`, `Center`, `Right`).
    - "Talk to a Psychic" (`href="https://meetyourpsychic.com/all-psychics"`, mobile/tablet).
- 3D Perspective Cards Carousel (`z-20`):
  - Container with `perspective: 1200px` (`perspective-distant`).
  - 6 Cards with `transform: rotateX(65deg)`.
  - On hover: raises elevation `translateY(-20px)` and tilts upright.
- Foreground Altar & Candles (`z-10`):
  - Altar disc: `hero-fg-desktop.webp` (desktop) / `tablet` / `mobile`.
  - 6 candle stands with 12 flame canvases playing `candle-flame.riv`.
  - Clicking any candle plays `flame-start.mp3` or `flame-end.mp3` and toggles candle flame state.
