"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, User, MessageSquare, CheckCircle, Sparkles, Send, AlertCircle } from "lucide-react";
import { Navbar } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Navbar";
import { Footer } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Footer";
import { StarfieldCanvas } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/StarfieldCanvas";
import { CopyButton } from "@/components/ui/CopyButton";
import { useToast } from "@/components/ui/Toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (minimum 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters long.";
    }
    if (!formData.agree) {
      newErrors.agree = "You must confirm you are at least 18 years old.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast({
        title: "Incomplete Inquiry",
        description: "Please correct the highlighted fields and confirm age requirements.",
        variant: "warning",
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Inquiry Dispatched ✦",
        description: "Your message has reached our celestial concierges. A response will follow within 24-48h.",
        variant: "success",
      });
    }, 700);
  };

  return (
    <div className="relative min-h-screen bg-[#0E0C24] text-white flex flex-col justify-between selection:bg-[#7f65f2] selection:text-white overflow-x-hidden">
      {/* Dynamic Starfield Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <StarfieldCanvas />
      </div>

      {/* Top Navbar */}
      <Navbar />

      <main id="main-content" className="relative z-10 flex-1 flex flex-col items-center px-4 sm:px-6">
        {/* Contact Us Top Background Glow Art */}
        <div className="absolute top-0 pointer-events-none -z-10 w-full max-w-6xl h-[500px] overflow-hidden opacity-30">
          <Image
            src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/contact-us-bg.webp"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-contain object-top"
          />
        </div>

        {/* Content Container */}
        <div className="w-full max-w-6xl py-12 sm:py-20 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8 w-full"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#f3a754]/10 text-[#f3a754] border border-[#f3a754]/30">
                <Sparkles className="size-3.5" />
                Spiritual Concierge
              </span>
              <h1 className="font-header text-5xl sm:text-6xl lg:text-7xl leading-tight">
                Get in <br />
                <span className="text-[#EEB576]">Touch Today</span>
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light max-w-lg">
                Have questions about your tarot reading or need guidance? We&apos;re here to help. Reach out to us and let&apos;s connect on your journey to spiritual insight and self-discovery.
              </p>
            </div>

            {/* Direct Hotline Card (Clickable Phone Link) */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#241a54]/90 to-[#171038]/90 border border-[#7F65F2]/40 shadow-2xl backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#EEB576] font-semibold">
                  Direct Toll-Free Line
                </span>
                <CopyButton
                  text="1-877-987-7792"
                  label="Copy"
                  toastMessage="Hotline 1-877-987-7792 copied!"
                />
              </div>
              <a
                href="tel:18779877792"
                aria-label="Call 1-877-987-7792"
                className="flex items-center gap-3 text-2xl sm:text-3xl font-header text-white hover:text-[#EEB576] transition-colors"
              >
                <div className="size-11 rounded-full bg-[#7F65F2]/30 flex items-center justify-center text-[#f3a754] shadow-inner shrink-0">
                  <Phone className="size-5" />
                </div>
                <span>1-877-987-7792</span>
              </a>
              <p className="text-xs text-white/60">
                Available 24/7 for live readings, member support, and general assistance.
              </p>
            </div>

            {/* Direct Email Card (Clickable Email Link) */}
            <div className="p-6 rounded-3xl bg-[#19133b]/90 border border-white/10 shadow-xl backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#EEB576] font-semibold">
                  Electronic Support Sanctuary
                </span>
                <CopyButton
                  text="support@meetyourjyotishi.com"
                  label="Copy"
                  toastMessage="Email support@meetyourjyotishi.com copied!"
                />
              </div>
              <a
                href="mailto:support@meetyourjyotishi.com"
                aria-label="Send email to support@meetyourjyotishi.com"
                className="flex items-center gap-3 text-lg sm:text-2xl font-header text-white hover:text-[#EEB576] transition-colors break-all"
              >
                <div className="size-11 rounded-full bg-[#f3a754]/20 flex items-center justify-center text-[#f3a754] shadow-inner shrink-0">
                  <Mail className="size-5" />
                </div>
                <span>support@meetyourjyotishi.com</span>
              </a>
              <p className="text-xs text-white/60">
                Inquiries typically answered within 24–48 business hours with complete discretion.
              </p>
            </div>

            {/* Additional details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-white text-sm">Advice Wave, LLC</h4>
                  <CopyButton
                    text="304 S. Jones Blvd #1106, Las Vegas, NV 89107"
                    label="Copy"
                    toastMessage="Address copied to clipboard!"
                  />
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  304 S. Jones Blvd #1106<br />Las Vegas, NV 89107
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-semibold text-white text-sm">Response Time</h4>
                <p className="text-xs text-white/60 mt-1 leading-relaxed">
                  Electronic inquiries responded to within 24-48 business hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[480px] rounded-3xl bg-[#19133b]/80 border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden"
          >
            {/* Top decorative gradient line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#7F65F2] via-[#EEB576] to-[#7F65F2]" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="size-16 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center border border-[#10b981]/40 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                  <CheckCircle className="size-8" />
                </div>
                <h3 className="font-header text-3xl text-white">Blessings Received</h3>
                <p className="text-white/70 text-sm max-w-xs">
                  Your message has reached our sanctuary team. We will review your inquiry with care and reply promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", message: "", agree: false });
                    setErrors({});
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all cursor-pointer"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="font-header text-2xl text-white">Send a Message</h3>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-white/70 font-medium">
                    Full name <span className="text-[#EEB576]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      placeholder="e.g. Elena Rostova"
                      className={`w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border ${
                        errors.name ? "border-red-500/80 bg-red-500/5" : "border-white/10 hover:border-white/20 focus:border-[#EEB576]"
                      } text-white placeholder-white/40 outline-none text-sm transition-all`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="size-3 shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-white/70 font-medium">
                    Email address <span className="text-[#EEB576]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="e.g. seeker@destiny.com"
                      className={`w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border ${
                        errors.email ? "border-red-500/80 bg-red-500/5" : "border-white/10 hover:border-white/20 focus:border-[#EEB576]"
                      } text-white placeholder-white/40 outline-none text-sm transition-all`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="size-3 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-white/70 font-medium">
                    Phone number (optional)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. (555) 234-5678"
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 focus:border-[#EEB576] text-white placeholder-white/40 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-white/70 font-medium">
                    Message <span className="text-[#EEB576]">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-3.5 size-4 text-white/40" />
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      placeholder="Share your spiritual query or questions about tarot readings..."
                      className={`w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border ${
                        errors.message ? "border-red-500/80 bg-red-500/5" : "border-white/10 hover:border-white/20 focus:border-[#EEB576]"
                      } text-white placeholder-white/40 outline-none text-sm transition-all resize-none`}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="size-3 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Age & Consent Checkbox */}
                <div className="space-y-1 pt-1">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={formData.agree}
                      onChange={(e) => {
                        setFormData({ ...formData, agree: e.target.checked });
                        if (errors.agree) setErrors({ ...errors, agree: "" });
                      }}
                      className="mt-1 size-4 rounded border-white/20 bg-white/5 accent-[#7F65F2] cursor-pointer"
                    />
                    <label htmlFor="consent" className="text-xs text-white/60 leading-normal cursor-pointer select-none">
                      I confirm that I am at least 18 years of age and agree to the{" "}
                      <Link href="/terms" className="text-[#EEB576] underline hover:text-white">
                        Terms of Use
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-[#EEB576] underline hover:text-white">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>
                  {errors.agree && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 pl-7">
                      <AlertCircle className="size-3 shrink-0" />
                      {errors.agree}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full btn-plain-cta font-semibold text-sm text-[#0e0c24] flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="size-5 border-2 border-[#0e0c24] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="size-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>

      {/* Layered Cosmic Footer */}
      <Footer />
    </div>
  );
}
