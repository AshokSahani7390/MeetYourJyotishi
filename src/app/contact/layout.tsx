import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Spiritual Concierge | MeetYourJyotishi",
  description:
    "Get in touch with the MeetYourJyotishi sanctuary team. Connect with our 24/7 toll-free concierge at 1-877-987-7792 or submit an inquiry for personalized assistance.",
  openGraph: {
    title: "Contact Spiritual Concierge | MeetYourJyotishi",
    description:
      "Get in touch with the MeetYourJyotishi sanctuary team. Connect with our 24/7 toll-free concierge at 1-877-987-7792 or submit an inquiry for personalized assistance.",
    url: "https://meetyourjyotishi.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
