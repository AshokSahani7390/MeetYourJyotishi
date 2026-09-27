import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  TiktokIcon,
  TumblrIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./icons";

interface FooterProps {
  className?: string;
}

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/meetyourpsychic",
    icon: FacebookIcon,
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/meetyourpsychic/",
    icon: PinterestIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/meetyourpsychic",
    icon: InstagramIcon,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/meetyourpsychic",
    icon: TwitterIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/user/MeetYourPsychic",
    icon: YoutubeIcon,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@meetyourpsychic",
    icon: TiktokIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/meet-your-psychic",
    icon: LinkedinIcon,
  },
  {
    name: "Tumblr",
    href: "https://www.tumblr.com/meetyourpsychic",
    icon: TumblrIcon,
  },
];

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "rounded-t-3xl border border-transparent bg-[linear-gradient(180deg,#251d57,#1a1539)] p-8 pt-16 sm:p-12 sm:pt-24",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        {/* Main 3-column layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand (5 cols on lg) */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <Link href="/" className="inline-block w-fit">
              <Image
                src="/sites/tarot-meetyourpsychic-com/root/images/logo.webp"
                alt="MeetYourPsychic"
                width={177}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              MeetYourPsychic blends ancient tarot wisdom with modern AI to offer
              free, animated readings that inspire self-discovery, clarity, and
              personal growth.
            </p>
          </div>

          {/* Column 2: Quick Links (4 cols on lg) */}
          <div className="lg:col-span-4">
            <h3 className="mb-4 text-base font-semibold text-white">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {/* Col A */}
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-muted-foreground transition hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cards"
                    className="text-sm text-muted-foreground transition hover:text-white"
                  >
                    Card Meanings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/psychic"
                    className="text-sm text-muted-foreground transition hover:text-white"
                  >
                    AI Psychic Chat
                  </Link>
                </li>
              </ul>

              {/* Col B */}
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link
                    href="/faq"
                    className="text-sm text-muted-foreground transition hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground transition hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Follow Us (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-base font-semibold text-white">
              Follow Us
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${item.name}`}
                  title={item.name}
                  className="text-muted-foreground transition hover:text-white"
                >
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p className="text-center sm:text-left">
            Copyright &copy; 2011 - 2026. All Rights Reserved. Must be 18+. For
            Entertainment Purposes Only.
          </p>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition hover:text-white"
            >
              Privacy policy
            </Link>
            <span aria-hidden="true" className="mx-1 text-white/30">
              |
            </span>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground transition hover:text-white"
            >
              Terms of use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
