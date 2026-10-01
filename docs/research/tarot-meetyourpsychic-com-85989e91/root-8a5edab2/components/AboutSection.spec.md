# AboutSection Specification

## Overview
- **Target file:** `src/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/AboutSection.tsx`
- **Screenshot:** `docs/design-references/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/fullpage-desktop-1440.png`
- **Interaction model:** scroll-triggered word blur-in reveal

## DOM Structure
- Section: `container flex flex-col items-center gap-6 pb-36 text-center sm:gap-12 2xl:pb-48`.
- Header:
  - Eye / Star animated canvas (`all-seeing-eye.riv` or `star-icon.riv`).
  - H1: "About Us" with `.section-h1-title` gradient text.
- Text Block 1:
  - Paragraph with max-width `max-w-[72ch]`.
  - Verbatim text:
    "Since 2009, MeetYourPsychic.com has delivered millions of successful readings to clients seeking clarity, direction, and insight. We connect individuals with experienced psychic advisors who provide tarot readings, intuitive guidance, and spiritual insight with professionalism and discretion. Our mission is to offer a trusted and supportive environment where you can explore important life questions with confidence. Whether you are navigating love, career decisions, personal growth, or significant transitions, our advisors are committed to delivering thoughtful and grounded guidance. Every reading on MeetYourPsychic.com is designed to provide perspective rather than pressure. We believe psychic insight should empower you to think clearly, act responsibly, and make informed decisions about your future."
- Ornate Section Divider:
  - Canvas: `about-feature-breaks.riv` (`w-72 sm:w-96 h-14`).
- Secondary Headline:
  - H2: "About the Digital Tarot Experience" in `.gtext-shim-gradient-4` metallic gold.
- Text Block 2:
  - Verbatim text:
    "This interactive tarot experience uses artificial intelligence to interpret traditional card symbolism and provide reflective insights. It is designed for personal inspiration, self exploration, and entertainment. AI generated readings are not a substitute for professional advice in medical, legal, financial, or psychological matters. Interpretations reflect symbolic perspectives based on established tarot frameworks and should not be viewed as factual predictions or guarantees of future outcomes. Our goal is to combine time honored tarot symbolism with modern technology to offer an engaging and accessible experience for users worldwide."
- Ending Divider:
  - Canvas: `about-feature-ending.riv` (`w-64 sm:w-72 h-9`).
