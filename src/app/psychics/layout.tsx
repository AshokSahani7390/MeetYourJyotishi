import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talk to a Jyotishi - Master Astrologers & Clairvoyants | MeetYourJyotishi",
  description:
    "Browse vetted Vedic astrologers, tarot readers, and intuitive psychics available for confidential live phone readings and spiritual guidance.",
  openGraph: {
    title: "Talk to a Jyotishi - Master Astrologers & Clairvoyants | MeetYourJyotishi",
    description:
      "Browse vetted Vedic astrologers, tarot readers, and intuitive psychics available for confidential live phone readings and spiritual guidance.",
    url: "https://meetyourjyotishi.com/psychics",
  },
};

export default function PsychicsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
