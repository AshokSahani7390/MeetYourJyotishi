import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Jyotishi Chat - Algorithmic Oracle | MeetYourJyotishi",
  description:
    "Consult our conversational AI Oracle for instantaneous tarot interpretations, celestial insights, and grounded reflections on your life inquiries.",
  openGraph: {
    title: "AI Jyotishi Chat - Algorithmic Oracle | MeetYourJyotishi",
    description:
      "Consult our conversational AI Oracle for instantaneous tarot interpretations, celestial insights, and grounded reflections on your life inquiries.",
    url: "https://meetyourjyotishi.com/psychic",
  },
};

export default function PsychicLayout({ children }: { children: React.ReactNode }) {
  return children;
}
