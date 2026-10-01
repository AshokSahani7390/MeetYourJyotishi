# Tech Stack Analysis & Architecture Mapping

## Source Architecture
- **Framework**: Next.js 15/16 with React 19 & Turbopack.
- **Styling**: Tailwind CSS v4 with custom OKLCH / LAB tokens and gradients.
- **Motion & Physics**:
  - Lenis for inertial smooth scroll.
  - `@rive-app/react-canvas` for stateful vector animations (.riv).
  - CSS 3D transforms (`perspective-distant`, `transform-3d`, `rotateX(65deg)`).
- **Fonts**:
  - `DM Sans` (Google Fonts / local woff2).
  - `Ginger` & `OPTISerlio` custom display serif font for headers.

## Destination Architecture
- **Framework**: Next.js 16 (App Router, React 19, TypeScript strict).
- **Styling**: Tailwind CSS v4 with configured theme tokens matching source LAB colors.
- **Animations**:
  - Lenis smooth scrolling integration.
  - `@rive-app/react-canvas` with fallback interactive vector/canvas components.
  - Native Canvas particle system for the hero starfield.
- **Assets**: 100% locally downloaded and served from `/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/`.
