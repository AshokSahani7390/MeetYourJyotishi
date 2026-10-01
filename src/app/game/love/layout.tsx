import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Love & Relationship Tarot Reading | MeetYourJyotishi",
  description:
    "Receive celestial clarity on romance, soulmate connections, and emotional harmony with our animated 3-card Love Tarot spread.",
  openGraph: {
    title: "Interactive Love & Relationship Tarot Reading | MeetYourJyotishi",
    description:
      "Receive celestial clarity on romance, soulmate connections, and emotional harmony with our animated 3-card Love Tarot spread.",
    url: "https://meetyourjyotishi.com/game/love",
  },
};

export default function LoveTarotLayout({ children }: { children: React.ReactNode }) {
  return children;
}
