import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MeetYourPsychic",
  description:
    "MeetYourPsychic blends ancient tarot wisdom with modern AI to offer free, animated readings that inspire self-discovery, clarity, and personal growth.",
  icons: {
    icon: "/sites/tarot-meetyourpsychic-com/root/images/favicon.ico",
    apple: "/sites/tarot-meetyourpsychic-com/root/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
