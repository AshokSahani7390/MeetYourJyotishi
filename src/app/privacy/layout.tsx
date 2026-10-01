import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Sanctuary Policy | MeetYourJyotishi",
  description:
    "Review our comprehensive data protection commitments, GDPR & CCPA disclosures, and privacy practices governing your use of MeetYourJyotishi.",
  openGraph: {
    title: "Privacy Sanctuary Policy | MeetYourJyotishi",
    description:
      "Review our comprehensive data protection commitments, GDPR & CCPA disclosures, and privacy practices governing your use of MeetYourJyotishi.",
    url: "https://meetyourjyotishi.com/privacy",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
