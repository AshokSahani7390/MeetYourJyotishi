"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Navbar";
import { Footer } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Footer";
import { StarfieldCanvas } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/StarfieldCanvas";
import { FileText, ChevronRight, AlertTriangle } from "lucide-react";

const TERMS_SECTIONS = [
  {
    id: "preamble",
    title: "Terms and Conditions of Use",
    content: `PLEASE REVIEW THESE TERMS AND CONDITIONS OF USE IN THEIR ENTIRETY BEFORE USING MEETYOURJYOTISHI.COM OR ITS AFFILIATED EXPERIENCES. THESE TERMS AND CONDITIONS OF USE AFFECT YOUR LEGAL RIGHTS AND OBLIGATIONS, INCLUDING DISPUTE RESOLUTION, LIMITATION OF LIABILITY, WAIVERS OF RIGHTS, AND INDEMNITY OBLIGATIONS.

Welcome to MeetYourJyotishi.com, provided to you by Advice Wave LLC, a Nevada limited liability company (the "Company"). By accessing this website or digital tarot application, you agree to comply with and be bound by the following terms and conditions, as well as the Privacy Policy. If you do not agree to these terms in their entirety, you must discontinue use immediately.`,
  },
  {
    id: "jurisdictions",
    title: "1. Not For Use In Certain Jurisdictions",
    content: `MeetYourJyotishi.com makes no representation that the contents, materials, or services available on this Site are legal, appropriate, or available for use in jurisdictions where tarot or spiritual guidance services are prohibited by local statute. Users accessing the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws.`,
  },
  {
    id: "age",
    title: "2. User Age Restrictions (18+ Only)",
    content: `You must be at least 18 years of age (or the legal age of majority in your jurisdiction) to access or utilize MeetYourJyotishi.com and its digital tarot applications. By using this service, you represent and warrant that you meet this age requirement.`,
  },
  {
    id: "entertainment",
    title: "3. No Professional Advice - Entertainment Purposes Only",
    content: `ALL CONTENT, TAROT SPREADS, ALGORITHMIC READINGS, AND PSYCHIC COMMUNICATIONS ARE PROVIDED STRICTLY FOR ENTERTAINMENT AND PERSONAL INTROSPECTION PURPOSES ONLY.
The Site does not provide medical, clinical, legal, tax, financial, or other licensed professional counsel. You should never rely on readings or card interpretations for life-critical medical diagnoses, legal decisions, or financial investments. Always consult a qualified, licensed professional.`,
  },
  {
    id: "services",
    title: "4. Digital Readings vs. Live Advisory Sessions",
    content: `The Digital Tarot Reading provides free, AI-interpreted tarot spreads based on traditional card archetypes. Separate live jyotishi phone and chat sessions are available through MeetYourJyotishi.com as independent contractor advisory services with established per-minute or bundle rates.`,
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual Property & Limited License",
    content: `All design elements, animations, SVG graphics, Rive state machines, custom code, card graphics, and textual narratives are the exclusive intellectual property of Advice Wave, LLC or its licensors. You are granted a personal, non-exclusive, revocable license to access the Site for non-commercial personal use.`,
  },
  {
    id: "disclaimer",
    title: "6. Disclaimer of Warranties",
    content: `THE SITE AND ALL DIGITAL TAROT READINGS ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, THE COMPANY DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.`,
  },
  {
    id: "dispute",
    title: "7. Binding Arbitration & Class Action Waiver",
    content: `Any dispute, claim, or controversy arising out of or relating to these Terms or the use of MeetYourJyotishi.com shall be resolved through binding individual arbitration administered in Clark County, Nevada under the rules of the American Arbitration Association, rather than in court. You agree to waive any right to participate in a class action lawsuit or class-wide arbitration.`,
  },
];

export default function TermsOfUsePage() {
  const [activeId, setActiveId] = useState(TERMS_SECTIONS[0].id);

  const scrollTo = (id: string) => {
    setActiveId(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#f3a754]/20 text-[#EEB576] border border-[#f3a754]/40">
            <AlertTriangle className="size-3.5" />
            18+ Only • Entertainment Purposes
          </div>
          <h1 className="font-header text-4xl sm:text-6xl text-white">
            Terms <span className="text-[#EEB576]">of Use</span>
          </h1>
          <p className="text-sm sm:text-base text-white/70">
            Advice Wave, LLC d/b/a MeetYourJyotishi.com • Please read carefully before using this service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Table of Contents Sticky Sidebar */}
          <aside className="lg:col-span-4 sticky top-28 hidden lg:block p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="font-header text-lg text-white mb-4 flex items-center gap-2">
              <FileText className="size-4 text-[#EEB576]" />
              Provisions
            </h3>
            <nav className="space-y-1 text-xs">
              {TERMS_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    activeId === sec.id
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
            {TERMS_SECTIONS.map((sec) => (
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

            <div className="p-6 rounded-2xl bg-[#251A54] border border-[#EEB576]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-header text-lg text-white">Need support or billing assistance?</h4>
                <p className="text-xs text-white/60">Our customer care team is here to assist.</p>
              </div>
              <Link
                href="/contact"
                className="btn-plain-cta px-5 py-2.5 rounded-full text-xs font-semibold text-white whitespace-nowrap shadow-md"
              >
                Contact Support
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
