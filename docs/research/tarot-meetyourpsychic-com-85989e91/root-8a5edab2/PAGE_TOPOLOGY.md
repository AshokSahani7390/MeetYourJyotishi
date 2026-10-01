# Page Topology & Layout Architecture

```
[Sticky Header / Navbar] (z-index: 50, fixed top gradient overlay)
  ├── Sound Toggle Button (left, Rive sound-button)
  ├── Brand Logo (center, MeetYourPsychic)
  └── CTA Button (right, Rive hero-cta-btn / Talk to a Psychic)

[Hero Section] (min-h-230, full screen background)
  ├── Particle Starfield (Canvas, z-0)
  ├── Nebula Radial Glow (absolute top, z-0)
  ├── Header & Title ("Unlock the Secrets of Your Destiny!", z-10)
  ├── Game Categories Quick-Nav Pills (6 items, z-10)
  ├── Central Action Buttons ("AI Psychic Chat" & "Talk to a Psychic", z-10)
  ├── 3D Perspective Cards Carousel (rotateX(65deg), z-20)
  └── Altar Foreground (Disc of life + 6 Candle groups + 12 animated flame canvases, z-10)

[Tarot Games Grid] (section.bg-radial, py-12 pb-36)
  └── Container (2 columns on lg, 1 column on mobile)
      ├── Card 1: Love Tarot (Active link, card deck illustration)
      ├── Card 2: Free Tarot (Coming soon)
      ├── Card 3: Yes/No Tarot (Coming soon)
      ├── Card 4: Daily Tarot (Coming soon)
      ├── Card 5: One Card (Coming soon)
      ├── Card 6: AI Tarot (Coming soon)
      ├── Card 7: AI Psychic Chat (Active link, psychic portrait)
      └── Card 8: Card Meanings (Active link, fanned out tarot cards)

[About Section] (container, pb-36)
  ├── "About Us" Header with Rive Eye/Star icon
  ├── Text block 1 (staggered blur-in word reveal on scroll)
  ├── Ornate divider (Rive about-feature-breaks)
  ├── "About the Digital Tarot Experience" H2 title
  ├── Text block 2 (staggered blur-in word reveal on scroll)
  └── Ending divider (Rive about-feature-ending)

[Newsletter Section] (gradient-newsletter-bg, rounded-5xl, mx-auto)
  ├── Top Eye canvas (Rive)
  ├── "Get in touch" label
  ├── "Subscribe to Our Newsletter" H1
  └── Email Form with Ornate Golden SVG Borders + "Subscribe" button

[Footer] (gradient-footer-bg, rounded-t-4xl)
  ├── Col 1: Logo + Summary description
  ├── Col 2: Quick Links (5 items)
  ├── Col 3: Follow Us (8 social SVG icons)
  ├── Col 4: Copyright & Legal (Terms, Privacy)
  └── Accessibility Button (bottom-right)
```
