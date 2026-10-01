# TarotGamesSection Specification

## Overview
- **Target file:** `src/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/TarotGamesSection.tsx`
- **Screenshot:** `docs/design-references/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/fullpage-desktop-1440.png`
- **Interaction model:** hover cards with 3D tilt, card deck fan-out, and active navigation links

## DOM Structure
- Section: `bg-radial-[40%_40%_at_50%_50%] from-[#372988]/90 via-[#1E154D]/50 to-[#1E154D]/0 py-12 pb-36`.
- Grid Container: `grid gap-12 sm:max-w-3xl lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-24 xl:gap-x-12 2xl:max-w-7xl`.
- 8 Game Cards:
  1. **Love Tarot**: Badge icon, Title "Love Tarot", "Play Now" gold subtext, fanned card deck with `rotate(-16deg)` translateY(24px).
  2. **Free Tarot**: Badge icon, Title "Free Tarot", "Coming Soon!" subtext, card deck `rotate(16deg)`.
  3. **Yes/No Tarot**: Badge icon, Title "Yes/No", "Coming Soon!" subtext, card deck `rotate(-16deg)`.
  4. **Daily Tarot**: Badge icon, Title "Daily Tarot", "Coming Soon!" subtext, card deck `rotate(16deg)`.
  5. **One Card**: Badge icon, Title "One Card", "Coming Soon!" subtext, card deck `rotate(-16deg)`.
  6. **AI Tarot**: Badge icon, Title "AI Tarot", "Coming Soon!" subtext, card deck `rotate(16deg)`.
  7. **AI Psychic Chat**: Title "AI Psychic Chat", "Play Now", portrait graphic with glowing mystic aura.
  8. **Card Meanings**: Title "Card Meanings", "Play Now", cascading fanned card grid (`rotate-25`).

## Computed Styles
- Card background: `.gradient-game-card-bg` (`linear-gradient(rgb(31, 26, 59) 0%, rgb(22, 20, 51) 100%)` with radial border highlight).
- Card border-radius: `rounded-4xl` (`32px`).
- Height: `h-48 md:h-44`.
- Padding: `pl-8`.
- Subtitle Color: `#EEB576`.
