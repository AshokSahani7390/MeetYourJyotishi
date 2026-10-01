import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Celestial Sanctuary Service | MeetYourJyotishi",
  description:
    "Read the terms, conditions, and entertainment disclosures for accessing readings, spiritual consultations, and services on MeetYourJyotishi.",
  openGraph: {
    title: "Terms of Celestial Sanctuary Service | MeetYourJyotishi",
    description:
      "Read the terms, conditions, and entertainment disclosures for accessing readings, spiritual consultations, and services on MeetYourJyotishi.",
    url: "https://meetyourjyotishi.com/terms",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
