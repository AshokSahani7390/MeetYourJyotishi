<div align="center">

# 🌟 MeetYourJyotishi (मीट योर ज्योतिषी)

### Celestial Destiny, Vedic Wisdom & Interactive Tarot Oracle Platform

An immersive, high-performance digital sanctuary combining ancient celestial archetypes, Vedic astrology insights, and interactive 3D tarot card divination powered by Next.js 16, React 19, and Tailwind CSS v4.

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript Strict](https://img.shields.io/badge/TypeScript-5.9.3_Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.4.4-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Rive App](https://img.shields.io/badge/Rive-4.35.0-orange?style=for-the-badge&logo=rive&logoColor=white)](https://rive.app/)
[![License MIT](https://img.shields.io/badge/License-MIT-amber?style=for-the-badge)](LICENSE)

[Live Repository](https://github.com/AshokSahani7390/MeetYourJyotishi) · [Explore Cards](/cards) · [Love Reading](/game/love) · [Report Issue](https://github.com/AshokSahani7390/MeetYourJyotishi/issues)

</div>

---

## 📖 Overview

**MeetYourJyotishi** is a modern, responsive web application engineered to deliver an authentic celestial divination experience. It bridges timeless cosmic wisdom with modern web standards, featuring real-time 3D card physics, high-definition animated card streaming, interactive candle altars with Rive vector flames, Lenis inertial smooth scrolling, and an enterprise pre-launch software architecture.

---

## ✨ Key Features

### 🔮 1. 78-Card Tarot & Archetype Encyclopedia (`/cards`)
* **Complete Deck Coverage:** Full Major Arcana (22 cards) and all four Minor Arcana suits (Wands, Cups, Swords, Pentacles).
* **Authentic Animated Video Streams:** All 22 Major Arcana archetypes feature HD animated video loops streaming smoothly with zero buffering latency.
* **3D Perspective Hover Flip:** Interactive 3D flip physics, golden light sheen sweeping animations, and binaural audio feedback.
* **Deep Card Detail Modal:** In-depth spiritual breakdowns including upright meanings, reversed shadow resonance, celestial keywords, and actionable spiritual guidance.
* **Instant Keyword Filtering:** Fast fuzzy search across names, themes, and archetypal tags with empty-state recovery prompts.

### 💖 2. Interactive Love Oracle Reading (`/game/love`)
* **Step 1 — Intuitive Inquiry:** Select from romantic prompt inquiries or input personal inquiries.
* **Step 2 — 22-Card Radiating Fan Spread:** Dynamic fan layout with individual card lift physics, selection tracking, and card spread sound effects.
* **Step 3 — 3D Three-Card Reveal:** "Past Influences", "Present Energy", and "Future Trajectory" cards with interactive 3D flip reveals and video animations.

### 🕯️ 3. Sacred Altar & Celestial Motion Engine
* **Interactive Candle Lamps & Flames:** Rive state-machine vector flames that respond to interaction with candle flicker audio.
* **Celestial Starfield Particle Canvas:** Real-time hardware-accelerated canvas simulating twinkling cosmic star fields.
* **Lenis Inertial Smooth Scrolling:** Synchronized smooth scrolling with momentum physics across all viewpoints.

### 🛠️ 4. Standard Pre-Launch Experience Suite
* 🌓 **Dark & Light Mode Toggle:** Smooth theme transition with persisted state across sessions.
* 🍪 **GDPR / CCPA Cookie Banner:** Privacy-compliant cookie consent management drawer.
* ⌨️ **Command Palette (`Cmd+K` / `Ctrl+K`):** Global quick-action search modal for keyboard navigation.
* 🔝 **Smooth Back-to-Top Indicator:** Floating circular progress button indicating scroll depth.
* 📋 **1-Click Copy with Feedback:** Interactive copy buttons with animated confirmation checkmarks.
* 🪟 **Glassmorphism Header:** Responsive sticky navigation with mobile drawer and branding.
* 🛡️ **Enterprise Security:** Hardened Content Security Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options, DNS prefetching, and rate-limited API endpoints.
* 🔍 **Comprehensive SEO:** Medical/Astrological JSON-LD structured data schema, OpenGraph tags, dynamic XML sitemap, and robots.txt.

---

## 🏗️ Architecture & Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | React Server Components, Turbopack, standalone output |
| **UI Library** | React 19 + shadcn/ui | Radix UI primitives, TypeScript strict mode |
| **Styling** | Tailwind CSS v4 | CSS theme tokens (`oklch` / `lab`), custom neon scrollbars |
| **Animations** | Framer Motion + Rive | 3D card transforms, spring physics, vector canvas state machines |
| **Smooth Scroll** | Lenis Scroll | Lightweight inertial smooth scroll engine |
| **Icons** | Lucide React + Custom SVGs | Ornamental borders, sacred geometry vectors |
| **Audio** | HTML5 Web Audio API | Low-latency audio cues for hover, flips, shuffles, and flames |

---

## 📁 Project Directory Structure

```text
MeetYourJyotishi/
├── public/
│   ├── .well-known/         # security.txt
│   ├── faces/               # Minor Arcana card artwork (cups, pentacles, swords, wands)
│   ├── images/              # Brand logos and vector assets
│   ├── sites/               # Audio clips, fonts, and Rive canvas files (.riv)
│   └── favicon.ico          # Multi-resolution favicon
├── src/
│   ├── app/
│   │   ├── api/             # Rate-limited contact & newsletter endpoints
│   │   ├── cards/           # 78-Card Tarot Encyclopedia route
│   │   ├── contact/         # Contact & consultation page
│   │   ├── faq/             # Expandable accordion FAQ page
│   │   ├── game/love/       # Interactive 3-card Love Tarot reading
│   │   ├── privacy/         # Privacy policy page
│   │   ├── psychic/         # AI Jyotishi consultation
│   │   ├── psychics/        # Live Jyotishi directory
│   │   ├── terms/           # Terms of service page
│   │   ├── globals.css      # Design tokens, 3D flipper styles, neon scrollbar
│   │   ├── layout.tsx       # Root layout with providers, SEO schema & navbar
│   │   ├── not-found.tsx    # Cosmic 404 error boundary
│   │   ├── robots.ts        # Dynamic robots.txt
│   │   └── sitemap.ts       # Dynamic sitemap.xml generator
│   ├── components/
│   │   ├── ui/              # Accordion, CopyButton, EmptyState, MagneticButton, Toast
│   │   ├── CardDetailModal.tsx   # Detailed modal with 3D flip card & video playback
│   │   ├── CommandPalette.tsx    # Cmd+K quick launcher
│   │   ├── CookieBanner.tsx      # Privacy consent modal
│   │   ├── EncyclopediaCard.tsx  # Responsive 3D flipper card with hover playback
│   │   ├── SmoothScroll.tsx      # Lenis smooth scroll provider
│   │   └── TarotFlipCard.tsx     # Card flip component with video front
│   ├── data/
│   │   ├── all-cards.ts     # Canonical data for all 78 tarot cards
│   │   └── tarot-cards.ts   # Major Arcana data with streaming video URLs
│   ├── lib/
│   │   └── utils.ts         # Class name utility (cn)
│   └── proxy.ts             # Next.js 16 proxy / middleware conventions
├── next.config.ts           # CSP headers, image optimization & standalone configuration
├── tsconfig.json            # Strict TypeScript settings
└── package.json             # Scripts & dependency definitions
```

---

## 🚀 Getting Started

### Prerequisites

* **Node.js**: v20.x or higher (Node v24 recommended)
* **npm**: v10.x or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AshokSahani7390/MeetYourJyotishi.git
   cd MeetYourJyotishi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches Next.js Turbopack development server on `localhost:3000` |
| `npm run build` | Compiles an optimized production build with static route generation |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint analysis |
| `npm run typecheck` | Validates TypeScript types across the entire codebase |
| `npm run check` | Runs full quality gate: `lint` + `typecheck` + `build` |

---

## 🔒 Security & Quality Standards

* **Content Security Policy (CSP):** Strict allowlist for scripts, styles, fonts, and streaming video CDNs (`https://ffy6hhiqoe.ufs.sh`).
* **API Protection:** In-memory rate limiting and input sanitization on all public endpoints.
* **Strict Type Safety:** Zero `any` types permitted; strict null checks enabled.
* **A11y Compliant:** Accessible contrast ratios, focus rings, ARIA roles, and skip-to-main-content link.

---

## 👤 Author & Links

Developed with care by **Ashok Sahani**:
* **GitHub:** [@AshokSahani7390](https://github.com/AshokSahani7390)
* **LinkedIn:** [Ashok Sahani](https://www.linkedin.com/in/ashok-sahani-b38b94305)
* **Instagram:** [@ashoksahani7390](https://www.instagram.com/ashoksahani7390)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and build upon this project.
