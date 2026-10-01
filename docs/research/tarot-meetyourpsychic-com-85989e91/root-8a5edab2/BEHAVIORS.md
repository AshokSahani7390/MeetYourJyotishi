# Interactive Behaviors & Motion Specifications

## 1. Smooth Inertial Scrolling (Lenis)
- The entire page utilizes Lenis smooth scrolling with custom physics duration (`~1.2s`) and cubic easing.

## 2. Dynamic Audio & Ambient Sounds
- Sound button in Navbar toggles global audio mute/unmute state.
- Interacting with candle flames triggers sound effects:
  - `flame-start.mp3` on flame ignition.
  - `flame-end.mp3` on flame blow-out.
  - `flame-all-start.mp3` on all candles reset.

## 3. Starfield & Cosmic Atmosphere
- Canvas runs an optimized particle animation loop:
  - Multi-layered star clusters with variable twinkling opacity and drift.
  - Responsive resizing to window dimensions.

## 4. 3D Card Hover & Tilting
- Hero tarot cards rendered with CSS 3D transform (`perspective: 1200px`, `transform: rotateX(65deg)`).
- Hovering raises card elevation and tilts towards the viewer (`rotateX(0deg)` / `translateY(-20px)`).

## 5. Scroll-Triggered Text Word Blur Reveals
- In the About section, each word is wrapped in an inline-block span:
  - Hidden state: `opacity: 0; filter: blur(8px); transform: translateY(20px);`
  - In-view state: `opacity: 1; filter: blur(0px); transform: none;`
  - Triggered with IntersectionObserver or scroll position with subtle staggered delay per word.

## 6. Rive Micro-Interactions
- Rive Canvas renders:
  - Sound Button (`sound-button.riv`)
  - Hero CTA Button (`hero-cta-btn.riv`)
  - Tarot Icons (`tarot-icons.riv`)
  - Candle Flames (`candle-flame.riv`)
  - Ornamental Section Dividers (`about-feature-breaks.riv`, `about-feature-ending.riv`)
  - All-Seeing Eye (`all-seeing-eye.riv`)
