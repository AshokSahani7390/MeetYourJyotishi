# Design Tokens: tarot.meetyourpsychic.com

## Color System

### Background & Surface
- **Canvas / Root Background**: `lab(7.56% 12.24 -23.30)` / `#0e0c24` (Deep Cosmic Indigo)
- **Secondary Card Background**: `linear-gradient(rgb(31, 26, 59) 0%, rgb(22, 20, 51) 100%)`
- **Game Card Radial Highlight**: `radial-gradient(62.75% 83.44% at 50% 150%, rgb(255, 255, 255) 0%, rgb(106, 93, 179) 50%, rgb(59, 51, 114) 100%)`
- **Newsletter Card Background**: `radial-gradient(50% 70% at 50% 0%, rgb(82, 63, 160) 0%, rgb(29, 18, 72) 100%)`
- **Footer Background**: `linear-gradient(0deg, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0)), radial-gradient(62.75% 83.44% at 50% 100%, rgb(53, 37, 129) 0%, rgb(53, 41, 100) 100%)`

### Accents & Gradients
- **Gold Primary / CTA**: `linear-gradient(90deg, #F3A754 0%, #F5C678 100%)`
- **Gold Metallic Gradient (Shimmer)**: `linear-gradient(90deg, #4f2b0a, #594028 27%, #efc575 55%, #8c6743 86%)`
- **H1 Shimmer Gradient (Header Titles)**: `linear-gradient(rgba(255, 255, 255, 0.97) -9.37%, rgba(153, 153, 153, 0.92) 113.12%)`
- **Button Secondary Background**: `rgba(247, 195, 103, 0.06)` with border `rgba(247, 195, 103, 0.31)`

### Typography
- **Primary Body Font**: `DM Sans`, sans-serif (`font-sans`)
- **Display / Header Font**: `ginger`, `OPTISerlio`, serif (`font-header`)
- **Mono Font**: `ui-monospace`, monospace

### Typography Scale
- **H1 (Hero)**: `clamp(2.75rem, 5vw, 3.75rem)` (44px - 60px), line-height 1
- **H2 (Card / Section)**: `2.25rem` (36px) - `3rem` (48px)
- **Subtitles**: `0.875rem` - `1rem` (14px - 16px) with golden accent (`#EEB576`)
- **Body**: `1rem` - `1.125rem` (16px - 18px), leading `1.5`

### Radii
- **Card**: `2rem` (`32px` - `rounded-4xl`)
- **Newsletter**: `3rem` (`48px` - `rounded-5xl`)
- **Pills / Buttons**: `9999px` (`rounded-full`)

### Elevations & Shadows
- **Tarot 3D Cards Drop Shadow**: `drop-shadow(0px 20px 4px rgba(0, 0, 0, 0.5))`
- **Secondary Icon Glow**: `0px 1.6px 48px 8px rgba(247, 195, 103, 0.06)`
- **Header Top Fade**: `linear-gradient(to bottom, lab(7.56% 12.24 -23.30), transparent)`

### Breakpoints
- **sm**: `640px`
- **md**: `768px`
- **lg**: `1024px`
- **xl**: `1280px`
- **2xl**: `1536px`
