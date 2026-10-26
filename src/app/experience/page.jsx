"use client";

import React, { useState } from "react";
import { EXPERIENCE_DATA } from "@/data/portfolioData";
import { Briefcase } from "lucide-react";
import Link from "next/link"; // <-- Added Next.js Link import
import {
  Download,
  Mail,
  MapPin,
  GraduationCap,
  //Briefcase,
  Mouse,
  User,
} from "lucide-react";
/**
 * Custom Inline SVG Icon for YouTube
 * (Compatible with lucide-react v1+ without needing external brand icon packages)
 */
function YoutubeIcon({ className = "w-5 h-5" }) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3v6Z" fill="currentColor" />
    </svg>
  );
}

/**
 * 3. EXPERIENCE PAGE ("/experience")
 * Matches Showcase Panel 3: Neon vertical timeline on the left and
 * workspace card with handwritten quote on the right.
 */
export default function ExperiencePage() {
  const [sideImgError, setSideImgError] = useState(false);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 animate-fade-up">
      {/* Section Header */}
      <div className="mb-10">
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-emerald-600 dark:text-neon-primary font-semibold">
          MY JOURNEY
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          Work &amp; Academic Experience
        </h1>
        <p className="text-slate-600 dark:text-gray-300 mt-2 max-w-xl font-light">
          A blend of academic projects, hands-on experience and leadership roles
          that shaped my journey in tech.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* LEFT 7 COLUMNS: Vertical Neon Timeline */}
        <div className="lg:col-span-7 relative pl-6 sm:pl-8 border-l-2 border-emerald-500/40 dark:border-neon-primary/50 space-y-8">
          {EXPERIENCE_DATA.map((item) => (
            <div key={item.id} className="relative group">
              {/* Glowing Timeline Node Dot */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#0B0D0C] border-2 border-neon-secondary dark:border-neon-primary shadow-neon group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="neon-card p-5 sm:p-6">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-neon-primary">
                  {item.period}
                </span>

                {/* Organization Title + Optional Clickable YouTube Icon */}
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1 flex items-center flex-wrap gap-2">
                  <span>{item.organization}</span>

                  {item.youtubeUrl && (
                    <a
                      href={item.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Visit YouTube Channel"
                      title="Visit Solve with Tanvir on YouTube"
                      className="inline-flex items-center justify-center p-1.5 rounded-lg bg-red-500/10 border border-red-500/40 text-red-500 hover:bg-red-500 hover:text-white hover:shadow-[0_0_12px_rgba(239,68,68,0.6)] transition-all duration-300 hover:scale-110"
                    >
                      <YoutubeIcon className="w-4 h-4" />
                    </a>
                  )}
                </h2>

                <h3 className="text- font-medium text-emerald-700 dark:text-neon-primary/90 mb-3">
                  {item.role}
                </h3>

                <ul className="space-y-1.5 text-sm text-slate-600 dark:text-gray-300 font-light">
                  {item.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-neon-primary mt-1">
                        •
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT 5 COLUMNS: Side Image Card + Handwritten Quote */}
        <div className="lg:col-span-5 space-y-6">
          <div className="neon-card p-4 overflow-hidden">
            {!sideImgError ? (
              <img
                src="/images/experience-side.webp"
                alt="Experience Workspace"
                onError={() => setSideImgError(true)}
                className="w-full h-72 object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-72 rounded-lg bg-gradient-to-br from-[#0f1f17] via-[#152e22] to-[#0B0D0C] border border-neon-primary/30 flex flex-col items-center justify-center p-6 text-center">
                <Briefcase className="w-12 h-12 text-neon-primary mb-3" />
                <p className="text-sm font-semibold text-white">
                  Workspace Photo Slot
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Optional image path:{" "}
                  <code className="text-neon-primary">
                    /public/images/experience-side.webp
                  </code>
                </p>
              </div>
            )}

            {/* Handwritten Quote Inside Frame */}
            <div className="mt-5 p-4 rounded-lg bg-emerald-500/5 dark:bg-neon-primary/5 border border-emerald-500/20 dark:border-neon-primary/20">
              <p className="font-handwritten text-2xl sm:text-3xl text-emerald-600 dark:text-neon-primary">
                &ldquo;Experience turns knowledge into confidence.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
       <div className="mt-12 flex justify-center">
        <Link
          href="/projects"
          title="Explore projects"
          className="p-2 rounded-full border border-emerald-500/40 dark:border-neon-primary/40 text-emerald-600 dark:text-neon-primary animate-bounce hover:shadow-neon"
        >
          <Mouse className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}