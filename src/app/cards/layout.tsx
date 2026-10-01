import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarot Card Meanings & 78 Archetypes Simplified | MeetYourJyotishi",
  description:
    "Explore the deep symbolic meanings of all 78 Tarot cards across Major Arcana, Wands, Cups, Swords, and Pentacles. Discover upright and reversed interpretations.",
  openGraph: {
    title: "Tarot Card Meanings & 78 Archetypes Simplified | MeetYourJyotishi",
    description:
      "Explore the deep symbolic meanings of all 78 Tarot cards across Major Arcana, Wands, Cups, Swords, and Pentacles. Discover upright and reversed interpretations.",
    url: "https://meetyourjyotishi.com/cards",
  },
};

export default function CardsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
