"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

/**
 * Custom Inline SVG Icons for GitHub & LinkedIn
 */
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/**
 * 7. CONTACT PAGE ("/contact") - Web3Forms Version
 * Sends form submissions directly to your Gmail inbox instantly.
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitted(false);
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e51a861a-d5c5-4704-88bc-47a68398c012", // <-- PASTE YOUR KEY HERE
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error(data.message || "Failed to submit form.");
      }
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 animate-fade-up">
      {/* Section Header */}
      <div className="mb-10">
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-emerald-600 dark:text-neon-primary font-semibold">
          GET IN TOUCH
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          Contact Me
        </h1>
        <p className="text-slate-600 dark:text-gray-300 mt-2 max-w-md font-light">
          Have a project in mind, a question, or just want to say hi? Feel free
          to reach out — I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT 4 COLUMNS: Contact Information Cards */}
        <div className="lg:col-span-4 space-y-4">
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/15 dark:bg-neon-primary/15 border border-emerald-500/40 dark:border-neon-primary/40 flex items-center justify-center text-emerald-600 dark:text-neon-primary shadow-neon">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-gray-400">
                Email
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-medium text-slate-800 dark:text-white hover:text-neon-primary"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/15 dark:bg-neon-primary/15 border border-emerald-500/40 dark:border-neon-primary/40 flex items-center justify-center text-emerald-600 dark:text-neon-primary shadow-neon">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-gray-400">
                Phone
              </p>
              <p className="text-sm font-medium text-slate-800 dark:text-white">
                {PERSONAL_INFO.phone}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/15 dark:bg-neon-primary/15 border border-emerald-500/40 dark:border-neon-primary/40 flex items-center justify-center text-emerald-600 dark:text-neon-primary shadow-neon">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-gray-400">
                Location
              </p>
              <p className="text-sm font-medium text-slate-800 dark:text-white">
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/15 dark:bg-neon-primary/15 border border-emerald-500/40 dark:border-neon-primary/40 flex items-center justify-center text-emerald-600 dark:text-neon-primary shadow-neon">
              <LinkedinIcon className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-gray-400">
                LinkedIn
              </p>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-800 dark:text-white hover:text-neon-primary"
              >
                {PERSONAL_INFO.linkedinHandle}
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/15 dark:bg-neon-primary/15 border border-emerald-500/40 dark:border-neon-primary/40 flex items-center justify-center text-emerald-600 dark:text-neon-primary shadow-neon">
              <GithubIcon className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-gray-400">
                GitHub
              </p>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-800 dark:text-white hover:text-neon-primary"
              >
                {PERSONAL_INFO.githubHandle}
              </a>
            </div>
          </div>
        </div>

        {/* CENTER 5 COLUMNS: Neon Contact Form */}
        <div className="lg:col-span-5">
          <form onSubmit={handleSubmit} className="neon-card p-6 sm:p-8 space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-600 dark:text-gray-300 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-[#0B0D0C]/90 border border-emerald-500/30 dark:border-neon-primary/30 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-neon-primary focus:shadow-neon"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-600 dark:text-gray-300 mb-2">
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-[#0B0D0C]/90 border border-emerald-500/30 dark:border-neon-primary/30 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-neon-primary focus:shadow-neon"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-600 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                className="w-full px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-[#0B0D0C]/90 border border-emerald-500/30 dark:border-neon-primary/30 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-neon-primary focus:shadow-neon resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="neon-btn w-full uppercase text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <span>Sending...</span>
                  <Loader2 className="w-4 h-4 animate-spin" />
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Success Notification */}
            {submitted && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/15 border border-neon-primary text-emerald-700 dark:text-neon-primary text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>
                  Thank you! Your message has been sent successfully.
                </span>
              </div>
            )}

            {/* Error Notification */}
            {errorMsg && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/15 border border-red-500 text-red-600 dark:text-red-400 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}
          </form>
        </div>

        {/* RIGHT 3 COLUMNS: Handwritten Callout Note */}
        <div className="lg:col-span-3 flex justify-center">
          <div className="font-handwritten text-3xl sm:text-4xl text-emerald-600 dark:text-neon-primary text-center -rotate-6 animate-float-slow">
            <p>Let&apos;s</p>
            <p>Build</p>
            <p>Something</p>
            <p className="underline decoration-neon-primary">Great!</p>
          </div>
        </div>
      </div>
    </section>
  );
}