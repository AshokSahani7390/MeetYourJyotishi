# Navbar Specification

## Overview
- **Target file:** `src/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Navbar.tsx`
- **Screenshot:** `docs/design-references/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/fullpage-desktop-1440.png`
- **Interaction model:** click-driven & sticky scroll overlay

## DOM Structure
- `nav`: sticky container with `h-[104px]`, grid with 3 columns (`grid-cols-[var(--szw)_1fr_var(--szw)]`), `z-50`.
- Left item: Sound toggle button (`rounded-full`, `size-10` sm:`size-12`, with sound Rive animation or fallback icon).
- Center item: `MeetYourPsychic` logo link (`src/app/page.tsx` or `/`), `width: 199px`, `height: 45px`.
- Right item: "Talk to a Psychic" hero CTA button (`size: 240px x 96px`, with Rive animation or pill button fallback).
- Top gradient backdrop: `div.fixed.inset-x-0.top-0.-z-10.h-24.bg-linear-to-b.from-background`.

## Computed Styles
- Height: `104px` (`6.5rem`).
- Background: transparent with fade gradient overlay.
- Padding: `px-8`.
- Position: `sticky`, `top: 0`, `z-index: 50`.
- Logo Dimensions: desktop `height: 56px` (`sm:h-14`), mobile `height: 48px` (`h-12`).

## States & Behaviors
- **Sound Toggle:**
  - Click toggles audio mute state (`soundOn: boolean`).
  - Plays subtle sound cue when clicked.
- **CTA Hover:**
  - Scale up and subtle brightness shift.
