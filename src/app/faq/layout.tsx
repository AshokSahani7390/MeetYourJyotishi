import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Sanctuary Guide | MeetYourJyotishi",
  description:
    "Find immediate answers regarding our algorithmic tarot spreads, celestial interpretations, privacy guidelines, and live psychic sessions.",
  openGraph: {
    title: "Frequently Asked Questions & Sanctuary Guide | MeetYourJyotishi",
    description:
      "Find immediate answers regarding our algorithmic tarot spreads, celestial interpretations, privacy guidelines, and live psychic sessions.",
    url: "https://meetyourjyotishi.com/faq",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
