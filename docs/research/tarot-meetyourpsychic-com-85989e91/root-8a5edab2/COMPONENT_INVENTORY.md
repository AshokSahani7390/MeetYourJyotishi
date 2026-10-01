# Component Inventory: tarot.meetyourpsychic.com

## 1. Navbar (`Navbar.tsx`)
- **Structure**:
  - Sticky glass header with height `h-26` (`104px`).
  - Left: Interactive sound toggle button (`sound-button.riv`) playing audio.
  - Center: Brand Logo (`MeetYourPsychic` webp link to `/`).
  - Right: "Talk to a Psychic" hero CTA button (`hero-cta-btn.riv` link to `meetyourpsychic.com/all-psychics`).
  - Background overlay: gradient fade-to-bottom.

## 2. HeroSection (`HeroSection.tsx`)
- **Structure**:
  - Full-screen Starfield Canvas background (`StarfieldCanvas.tsx`) with cosmic dust, twinkling stars, and purple top nebula glow.
  - Header title with gradient text mask: "Unlock the Secrets of Your Destiny!" in `ginger` serif font.
  - Game Category Quick-Nav (`GameNavPills.tsx`): 6 pill buttons with animated Rive icons (`tarot-icons.riv`), active indicators, and "Coming Soon!" status tags.
  - Center Action CTA Buttons:
    - "AI Psychic Chat" button with ornate golden ornamental SVG border frame.
    - Mobile-only "Talk to a Psychic" CTA button.
  - 3D Perspective Tarot Cards (`Hero3DCards.tsx`): 6 tarot cards rendered in 3D perspective (`rotateX(65deg)`) that smoothly react to hover and cursor orientation.
  - Candlelight & Disc of Life Foreground (`HeroForeground.tsx`):
    - Altar disc graphic (`hero-fg-desktop.webp` / `tablet` / `mobile`).
    - 6 Candle stands on the altar with 12 animated Rive flame canvases (`candle-flame.riv`).
    - Clickable candle interactions that play `flame-start.mp3`, `flame-end.mp3`, and toggle flame state!

## 3. TarotGamesSection (`TarotGamesSection.tsx`)
- **Structure**:
  - Radial indigo aura background.
  - 2-column responsive grid (desktop) / 1-column (mobile).
  - 6 Interactive Tarot Game Cards:
    1. **Love Tarot** (Active: "Play Now", href: `/game/love`, tilted card deck with hover reveal).
    2. **Free Tarot** ("Coming Soon!", tilted cards).
    3. **Yes/No** ("Coming Soon!", tilted cards).
    4. **Daily Tarot** ("Coming Soon!", tilted cards).
    5. **One Card** ("Coming Soon!", tilted cards).
    6. **AI Tarot** ("Coming Soon!", tilted cards).
    7. **AI Psychic Chat** (Play Now, href: `/psychic`, mystic portrait illustration).
    8. **Card Meanings** (Play Now, href: `/cards`, rotating cascading cards stack).
  - Each card features custom double-gradient borders (`gradient-game-card-bg`), badges, and hover glow transitions.

## 4. AboutSection (`AboutSection.tsx`)
- **Structure**:
  - Center header: "About Us" with eye / star canvas accent (`all-seeing-eye.riv` or `star-icon.riv`).
  - Staggered word-by-word blur-up text reveal on scroll:
    "Since 2009, MeetYourPsychic.com has delivered millions of successful readings..."
  - Decorative divider canvas: `about-feature-breaks.riv`.
  - Secondary headline: "About the Digital Tarot Experience" in gold metallic gradient.
  - Secondary explanatory text with word-by-word blur-up effect.
  - Ending decorative canvas: `about-feature-ending.riv`.

## 5. NewsletterSection (`NewsletterSection.tsx`)
- **Structure**:
  - Cosmic curved container (`rounded-5xl`, `gradient-newsletter-bg`).
  - Top animated icon canvas (`all-seeing-eye.riv`).
  - Subtitle: "Get in touch".
  - Main H1 title: "Subscribe to Our Newsletter" with gradient text.
  - Email subscription form with ornate decorative golden SVG border, input field, and "Subscribe" gold gradient pill button.

## 6. Footer (`Footer.tsx`)
- **Structure**:
  - Dark layered indigo container (`gradient-footer-bg`, `rounded-t-4xl`).
  - Brand column: `MeetYourPsychic` logo and mission statement.
  - Quick Links column: Home, FAQ, Card Meanings, Contact Us, AI Psychic Chat.
  - Social Links: Facebook, Pinterest, Instagram, Twitter/X, YouTube, TikTok, LinkedIn, Tumblr.
  - Legal & Copyright notice (2011 - 2026, 18+ entertainment only).
  - Accessibility floating/toggle button (`accessibility.svg`).
