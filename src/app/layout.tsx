import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { CommandPalette } from "@/components/CommandPalette";
import { BackToTop } from "@/components/BackToTop";
import { CookieBanner } from "@/components/CookieBanner";
import { AuthModal } from "@/components/AuthModal";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ginger = localFont({
  src: "../../public/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/fonts/Ginger.otf",
  variable: "--font-ginger",
  display: "swap",
});

const serlio = localFont({
  src: "../../public/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/fonts/OPTISerlio.otf",
  variable: "--font-serlio",
  display: "swap",
});

// 12. OpenGraph Meta Tags & Comprehensive SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://meetyourjyotishi.com"),
  title: "MeetYourJyotishi - Unlock the Secrets of Your Destiny!",
  description:
    "Unlock the Secrets of Your Destiny! MeetYourJyotishi blends ancient Vedic wisdom, tarot archetypes, and astrology with modern AI to offer free, animated readings that inspire self-discovery, clarity, and personal growth.",
  keywords: [
    "Tarot Reading",
    "MeetYourJyotishi",
    "Vedic Astrology",
    "Jyotishi",
    "Love Tarot",
    "Major Arcana",
    "Minor Arcana",
    "AI Tarot",
    "Daily Horoscope",
    "Free Tarot Spread",
  ],
  authors: [{ name: "Advice Wave, LLC" }],
  creator: "Advice Wave, LLC",
  publisher: "MeetYourJyotishi",
  icons: {
    icon: [
      { url: "/images/logo.svg", type: "image/svg+xml" },
      { url: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/seo/favicon.ico" },
    ],
    apple: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/seo/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://meetyourjyotishi.com",
    siteName: "MeetYourJyotishi",
    title: "MeetYourJyotishi - Unlock the Secrets of Your Destiny!",
    description:
      "Explore free 3D interactive tarot readings, consult our AI Jyotishi oracle, and connect with verified Vedic astrology advisors.",
    images: [
      {
        url: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/love.webp",
        width: 1200,
        height: 630,
        alt: "MeetYourJyotishi - Celestial Destiny & Tarot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MeetYourJyotishi - Unlock the Secrets of Your Destiny!",
    description:
      "Free interactive animated tarot readings and AI Vedic wisdom guidance for love, career, and spiritual growth.",
    images: ["/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/love.webp"],
  },
};

// 12. Structured JSON-LD Schema (WebSite, Organization, ProfessionalService)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://meetyourjyotishi.com/#website",
      "url": "https://meetyourjyotishi.com",
      "name": "MeetYourJyotishi",
      "description":
        "Unlock the Secrets of Your Destiny with Vedic Wisdom, Tarot Archetypes, and AI Jyotishi Guidance.",
      "publisher": {
        "@id": "https://meetyourjyotishi.com/#organization",
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://meetyourjyotishi.com/cards?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://meetyourjyotishi.com/#organization",
      "name": "MeetYourJyotishi",
      "url": "https://meetyourjyotishi.com",
      "logo": "https://meetyourjyotishi.com/images/logo.svg",
      "sameAs": [
        "https://github.com/AshokSahani7390",
        "https://www.linkedin.com/in/ashok-sahani-b38b94305",
        "https://www.instagram.com/ashoksahani7390",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-877-987-7792",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://meetyourjyotishi.com/#service",
      "name": "MeetYourJyotishi Celestial Readings",
      "serviceType": "Vedic Astrology, Tarot Readings & Spiritual Guidance",
      "provider": {
        "@id": "https://meetyourjyotishi.com/#organization",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "12850",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${ginger.variable} ${serlio.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#0e0c24] text-[#b8b8b8] selection:bg-[#f3a754]/30 selection:text-white transition-colors duration-300">
        {/* 11. Accessible Skip to Main Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-5 focus:py-2.5 focus:bg-gradient-to-r focus:from-[#F3A754] focus:to-[#F5C678] focus:text-[#0E0C24] focus:font-bold focus:rounded-full focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>

        <ThemeProvider>
          <ToastProvider>
            <SmoothScroll>
              {children}
              <BackToTop />
              <CookieBanner />
              <CommandPalette />
              <AuthModal />
            </SmoothScroll>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
