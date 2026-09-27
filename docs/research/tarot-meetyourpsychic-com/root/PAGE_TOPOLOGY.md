# Page Topology — tarot.meetyourpsychic.com /

## Site Keys
- **site-key:** `tarot-meetyourpsychic-com`
- **page-key:** `root`
- **app-root:** `.` (repository root)
- **destination route:** `/` (replaces template scaffold)

## Fonts
- **DM Sans** — body text (Google Font, weights 400/500/600/700)
- **Ginger** — decorative headings (custom/Typekit font, serif with swash feel)

## Color Palette
- Background (body): `#1a1539` (deep indigo/navy) — `lab(7.56315 12.2447 -23.3013)`
- Text primary: white `#ffffff`
- Text secondary/muted: `lab(73.5459 0.547767 0.1966)` ≈ `#b3b0a9` warm gray
- Accent gold: `rgb(238, 181, 118)` — `#eeb576`
- Purple highlights: `#372988`, `#1E154D`, `#251d57`
- Card purple gradients: `rgb(31, 26, 59)` → `rgb(22, 20, 51)`
- Card glow: `rgb(127, 101, 242)` → transparent radial

## Page Sections (top to bottom)

### 1. NavBar (sticky)
- `<nav>` — sticky top-0, z-50, 3-column grid
- Left: sound toggle button (canvas animation)
- Center: MeetYourPsychic logo
- Right: "Talk to a Psychic" CTA button (gradient gold, links to meetyourpsychic.com/all-psychics)
- Background: transparent, with a fixed gradient overlay that slides in on scroll

### 2. Hero Section (grid overlay)
- Full-viewport height hero with layered grid composition:
  - **Layer 1 (bottom):** Canvas animation (starfield/particle effect) — full viewport
  - **Layer 2:** Radial gradient overlay from deep purple center
  - **Layer 3:** Hero content (z-10): title "Unlock the Secrets of Your Destiny!", category icons grid (6 items), "AI Psychic Chat" + "Talk to a Psychic" buttons
  - **Layer 4 (z-20):** 6 tarot card images fanned out at bottom, each with 3D perspective tilt
  - **Layer 5:** Decorative candle images (6 candles, 3 left + 3 right) with animated flames (canvas)
  - **Layer 6:** "Disc of life" ornamental image across bottom
  - **Layer 7:** Bottom gradient fade to background

### 3. Card Categories Grid Section
- Radial gradient background from purple center
- Container with grid of 8 cards (2 rows of 4 on desktop)
- Each card: rounded purple gradient, card image with purple glow, title, "Play Now" or "Coming Soon" label
- Cards: Love Tarot, Free Tarot, Yes/No, Daily Tarot, One Card, AI Tarot, AI Psychic Chat, Card Meanings

### 4. About Us Section
- Centered text container, flex column
- "About Us" badge/label
- Long descriptive text about MeetYourPsychic (2 subsections: "About Us" + "About the Digital Tarot Experience")
- Accordion/expandable sections with gradient dividers

### 5. Newsletter Section
- Rounded card (rounded-5xl) with gradient background
- "Get in touch" label, "Subscribe to Our Newsletter" heading
- Email input + "Subscribe" button (gold gradient)

### 6. Footer
- Rounded top corners (rounded-t-4xl), gradient background
- 3-column grid: Logo + description | Quick Links (Home, FAQ, Card Meanings, Contact Us, AI Psychic Chat) | Follow Us (8 social icons)
- Bottom bar: Copyright text | Privacy policy | Terms of use
- Accessibility button (bottom-right)

## Interaction Model
- **NavBar:** Static positioning with scroll-triggered background
- **Hero:** Static layout with canvas animation (starfield particles), animated candle flames
- **Cards:** Hover states on card items (scale/glow transitions)
- **About:** Expandable accordion sections
- **Newsletter:** Form interaction (email input + submit)
- **Footer:** Link hover states
