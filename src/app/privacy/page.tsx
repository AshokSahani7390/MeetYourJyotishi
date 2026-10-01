"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Navbar";
import { Footer } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Footer";
import { StarfieldCanvas } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/StarfieldCanvas";
import { Shield, ChevronRight, Lock } from "lucide-react";

const SECTIONS = [
  {
    id: "controller",
    title: "1. Data Controller Information and Legal Entity",
    content: `Advice Wave, LLC operates as the sole data controller for all personal information processing activities conducted through MeetYourJyotishi.com and its associated services, applications, and platforms. Our principal place of business and registered office is located at 304 S. Jones Blvd #1106, Las Vegas, Nevada 89107-2623, United States of America. As a Nevada-based limited liability company conducting commercial operations across multiple international jurisdictions, we maintain comprehensive compliance obligations under federal, state, provincial, and international privacy regulations that govern our data processing activities across all territories where we provide services or have users.

Data Protection Officer and Privacy Contact: All privacy-related inquiries, data subject access requests, correction requests, deletion requests, opt-out requests, and compliance matters should be directed to our designated privacy contact at 1-877-987-7792. We maintain dedicated privacy personnel and resources for responding to all categories of privacy requests within the strict timeframes mandated by applicable law, including Nevada Revised Statutes Chapter 603A, GDPR, and CCPA/CPRA.`,
  },
  {
    id: "framework",
    title: "2. Comprehensive Legal Framework and Multi-Jurisdictional Compliance",
    content: `Our data processing operations are structured to comply with all applicable privacy statutes, regulations, and enforcement guidance across key operational jurisdictions including the United States, Canada, the United Kingdom, and the European Economic Area. We actively monitor international privacy developments to adjust data governance practices proactively.`,
  },
  {
    id: "categories",
    title: "3. Detailed Categories of Personal Information Collected",
    content: `We collect information necessary to provide our digital tarot experiences and connect you with Jyotish services:
• User Inquiry Data: Questions entered into tarot reading prompts, selected cards, and reading timestamps.
• Contact & Identity Data: Name, email address, and optional phone numbers provided via forms.
• Technical & Usage Data: IP addresses, browser types, device fingerprints, screen dimensions, and interaction metrics.
• Payment Data: If you elect to purchase live sessions on MeetYourJyotishi.com, transactions are processed securely through PCI-DSS Level 1 certified gateways. Digital tarot readings remain 100% free and require no payment details.`,
  },
  {
    id: "purposes",
    title: "4. Processing Purposes and Legal Basis Framework",
    content: `We process personal data for explicit, legitimate business purposes:
• Delivering interactive tarot interpretations based on historical card symbolism.
• Maintaining website security, preventing fraudulent activity, and ensuring system availability.
• Fulfilling customer service inquiries and support requests.
• Complying with regulatory obligations and legal disclosures.`,
  },
  {
    id: "sharing",
    title: "5. Data Sharing and International Transfers",
    content: `Advice Wave, LLC does not sell, rent, or trade your personal information to third-party data brokers. We share data only with trusted infrastructure providers (cloud hosting, database providers, customer communication tools) bound by strict confidentiality and data protection agreements.`,
  },
  {
    id: "retention",
    title: "6. Data Retention and Secure Deletion Framework",
    content: `We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, resolve disputes, maintain audit logs, and comply with statutory retention requirements. Users may request prompt deletion of their personal inquiries at any time.`,
  },
  {
    id: "rights",
    title: "7. Data Subject Rights and Exercise Procedures",
    content: `Depending on your jurisdiction, you enjoy statutory rights regarding your personal information:
• The right to access and receive a portable copy of personal data held about you.
• The right to request rectification of inaccurate or incomplete information.
• The right to request total deletion of personal records.
• The right to opt out of promotional communications and marketing tracking.`,
  },
  {
    id: "security",
    title: "8. Advanced Information Security and Incident Response",
    content: `We employ industry-standard encryption protocols (TLS 1.3 in transit, AES-256 at rest) to safeguard all data exchanges. Access to user data is strictly role-restricted to authorized personnel with multi-factor authentication.`,
  },
  {
    id: "cookies",
    title: "9. Cookies and Tracking Technologies",
    content: `We use minimal essential cookies to maintain user session preferences, remember audio/sound settings, and analyze aggregate traffic trends. You may configure your browser to reject cookies, though certain interactive features may have altered responsiveness.`,
  },
  {
    id: "children",
    title: "10. Enhanced Children's Privacy Protection Framework",
    content: `Our services are strictly restricted to individuals who are 18 years of age or older. We do not knowingly solicit or collect personal information from minors. If we discover that personal data of a minor has been inadvertently submitted, it is purged immediately.`,
  },
  {
    id: "contact-info",
    title: "11. Contact Information and Regulatory Oversight",
    content: `For any questions, requests, or privacy concerns, please contact:
Advice Wave, LLC d/b/a MeetYourJyotishi.com
304 S. Jones Blvd #1106
Las Vegas, NV 89107
Toll-Free Phone: 1-877-987-7792`,
  },
  {
    id: "updates",
    title: "12. Policy Updates and Future Compliance Framework",
    content: `We reserve the right to revise this Privacy Policy periodically to reflect technological advances, service modifications, or legislative amendments. Material changes will be noted with an updated effective date on this page.`,
  },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0E0C24] text-white flex flex-col justify-between selection:bg-[#7f65f2] selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-0">
        <StarfieldCanvas />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 container max-w-6xl px-4 py-8 sm:py-16 mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#7F65F2]/20 text-[#EEB576] border border-[#7F65F2]/40">
            <Lock className="size-3.5" />
            Advice Wave, LLC Legal Disclosure
          </div>
          <h1 className="font-header text-4xl sm:text-6xl text-white">
            Privacy <span className="text-[#EEB576]">Policy</span>
          </h1>
          <p className="text-sm sm:text-base text-white/70">
            Last Updated: January 2026 • Governing MeetYourJyotishi.com and all digital tarot services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Table of Contents Sticky Sidebar */}
          <aside className="lg:col-span-4 sticky top-28 hidden lg:block p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="font-header text-lg text-white mb-4 flex items-center gap-2">
              <Shield className="size-4 text-[#EEB576]" />
              Table of Contents
            </h3>
            <nav className="space-y-1 text-xs">
              {SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    activeSection === sec.id
                      ? "bg-[#7F65F2]/30 text-[#EEB576] font-medium"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="truncate">{sec.title}</span>
                  <ChevronRight className="size-3 shrink-0 ml-1 opacity-50" />
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Legal Content */}
          <article className="lg:col-span-8 space-y-8">
            {SECTIONS.map((sec) => (
              <section
                key={sec.id}
                id={sec.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#171138]/70 border border-white/10 shadow-lg backdrop-blur-md scroll-mt-28 space-y-4"
              >
                <h2 className="font-header text-xl sm:text-2xl text-white text-[#EEB576]">
                  {sec.title}
                </h2>
                <div className="text-sm sm:text-base text-white/80 leading-relaxed font-light whitespace-pre-line space-y-3">
                  {sec.content}
                </div>
              </section>
            ))}

            {/* Quick Contact Footer Banner */}
            <div className="p-6 rounded-2xl bg-[#251A54] border border-[#EEB576]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-header text-lg text-white">Questions about your data?</h4>
                <p className="text-xs text-white/60">Our Data Protection Officer is available 24/7.</p>
              </div>
              <Link
                href="/contact"
                className="btn-plain-cta px-5 py-2.5 rounded-full text-xs font-semibold text-white whitespace-nowrap shadow-md"
              >
                Contact Privacy Team
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
