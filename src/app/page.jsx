"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Download,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Mouse,
  User,
} from "lucide-react";

/**
 * 1. ABOUT PAGE (Root Route "/")
 * - Continuous looping typewriter animation for Name ("Tanvirul Islam")
 *   (Types out -> Pauses -> Deletes -> Repeats continuously)
 * - Mobile View: Photo is at the TOP (order-1), and all text/buttons/badges are CENTERED.
 * - Desktop View: Text on Left (order-1), Photo on Right (order-2).
 * - "Build. Learn. Grow." is positioned completely OUTSIDE the photo card frame.
 */
export default function AboutPage() {
  const [imgError, setImgError] = useState(false);

  // =========================================================================
  // TYPEWRITER LOOP STATE (Type -> Pause -> Delete -> Repeat)
  // =========================================================================
  const fullName = PERSONAL_INFO.name || "Tanvirul Islam";
  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Speed configuration (in milliseconds)
    const typingSpeed = 120;      // Speed while typing each character
    const deletingSpeed = 60;     // Speed while backspacing
    const pauseAfterTyped = 2000; // Wait 2 seconds after full name is typed
    const pauseAfterDeleted = 400;// Brief pause before typing starts again

    let timer;

    if (!isDeleting && typedName.length < fullName.length) {
      // 1. Typing forward
      timer = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && typedName.length === fullName.length) {
      // 2. Finished typing -> Pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterTyped);
    } else if (isDeleting && typedName.length > 0) {
      // 3. Deleting backward
      timer = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && typedName.length === 0) {
      // 4. Finished deleting -> Pause briefly then start typing again
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, pauseAfterDeleted);
    }

    return () => clearTimeout(timer);
  }, [typedName, isDeleting, fullName]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:py-16 animate-fade-up overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* =====================================================================
            PHOTO COLUMN:
            - order-1 on Mobile (shows at the TOP)
            - lg:order-2 on Desktop (shows on the RIGHT)
           ===================================================================== */}
        <div className="order-1 lg:order-2 lg:col-span-5 relative flex flex-col items-center justify-center pt-2 lg:pt-0">
          {/* Outer wrapper gives room for the quote outside the card */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center">
            
            {/* PHOTO CARD CONTAINER */}
            <div className="relative w-64 h-72 sm:w-72 sm:h-88 flex items-end justify-center">
              {/* LAYER 1 (UNDER PNG): Ambient Neon Radial Aura */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-neon-secondary/30 via-neon-primary/20 to-transparent blur-2xl -z-20 animate-pulse" />

              {/* LAYER 2 (UNDER PNG): Tilted Geometric Cyber Frame */}
              <div className="absolute inset-2 rounded-2xl border border-emerald-500/30 dark:border-neon-primary/30 rotate-3 transition-transform duration-500 hover:rotate-6 -z-10" />

              {/* LAYER 3 (UNDER PNG): Main Neon Card Backdrop */}
              <div className="absolute inset-x-3 bottom-0 top-4 rounded-2xl bg-gradient-to-b from-emerald-950/60 via-[#121A16] to-[#0B0D0C] border-2 border-neon-secondary dark:border-neon-primary shadow-neon overflow-hidden -z-10">
                <div className="absolute -top-10 -left-10 w-40 h-40 border border-neon-primary/20 rotate-45" />
                <div className="absolute bottom-6 right-6 w-24 h-24 rounded-full border border-neon-primary/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(57,255,20,0.22),transparent_70%)]" />
              </div>

              {/* Corner Neon Brackets */}
              <div className="absolute top-1 left-0 w-6 h-6 border-t-2 border-l-2 border-neon-primary rounded-tl-md" />
              <div className="absolute -bottom-2 right-0 w-6 h-6 border-b-2 border-r-2 border-neon-primary rounded-br-md" />

              {/* LAYER 4 (TOP): User's Transparent PNG Photo */}
              {!imgError ? (
                <img
                  src="/images/profile.webp"
                  alt={PERSONAL_INFO.name}
                  onError={() => setImgError(true)}
                  className="relative z-10 w-56 sm:w-64 h-auto max-h-84 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-[1.03]"
                />
              ) : (
                <div className="relative z-10 flex flex-col items-center justify-center w-56 h-72 text-center p-6">
                  <div className="w-20 h-20 rounded-full bg-neon-primary/15 border border-neon-primary flex items-center justify-center mb-3 shadow-neon">
                    <User className="w-10 h-10 text-neon-primary" />
                  </div>
                  <p className="text-sm font-semibold text-white">
                    Transparent PNG Slot
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Place photo at:{" "}
                    <code className="text-neon-primary">/public/images/profile.webp</code>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =====================================================================
            TEXT & INFO COLUMN:
            - order-2 on Mobile (shows BELOW the photo) & CENTER-ALIGNED
            - lg:order-1 on Desktop (shows on the LEFT) & LEFT-ALIGNED
           ===================================================================== */}
        <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
          <p className="text-sm sm:text-base uppercase tracking-[0.25em] text-emerald-600 dark:text-neon-primary font-semibold">
            HELLO, I&apos;M
          </p>

          {/* Name in Bitcount / Pixel Display Font with Continuous Typewriter Effect */}
          <h1
            aria-label={fullName}
            className="font-bitcount text-3xl sm:text-5xl xl:text-6xl text-emerald-600 dark:text-neon-primary drop-shadow-[0_0_12px_rgba(57,255,20,0.35)] leading-tight min-h-[2.75rem] sm:min-h-[3.75rem] xl:min-h-[4.5rem] flex items-center justify-center lg:justify-start"
          >
            <span>{typedName}</span>
            {/* Blinking Neon Cursor Bar */}
            <span
              aria-hidden="true"
              className="inline-block w-[3px] sm:w-[4px] h-[0.9em] ml-1.5 bg-emerald-600 dark:bg-neon-primary shadow-neon animate-pulse"
            />
          </h1>

          {/* Designation / Subtitle */}
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white tracking-wide">
            {PERSONAL_INFO.title}
          </h2>

          {/* Bio Paragraph */}
          <p className="text-slate-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            {PERSONAL_INFO.bio}
          </p>
 
          {/* Action Buttons (Centered on mobile, left-aligned on desktop) */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full">
            <a href={PERSONAL_INFO.cvUrl} download className="neon-btn">
              <span>Download CV</span>
              <Download className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="neon-outline-btn bg-white/70 dark:bg-[#1A1F1E]/80 px-6 py-2.5"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </Link>
          </div>
          {/* =================================================================
                HANDWRITTEN QUOTE ("Build. Learn. Grow.")
                Positioned completely OUTSIDE the photo card frame!
               ================================================================= */}
            <div className="mt-5 sm:mt-0 sm:ml-5 lg:ml-6 z-20 font-handwritten text-2xl sm:text-3xl leading-tight text-emerald-600 dark:text-neon-primary drop-shadow-[0_0_8px_rgba(57,255,20,0.5)] animate-float-slow text-center sm:text-left select-none">
              <p>Learn.  Build.  Grow. <span className="block text-lg">⟶</span></p>
            </div>

          {/* 3 Bottom Highlight Badges (Centered on mobile, 3 columns on desktop) */}
          <div className="pt-6 border-t border-emerald-500/20 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-xl justify-items-center lg:justify-items-start">
            {/* Location 
            /*<div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 dark:bg-neon-primary/10 border border-emerald-500/30 dark:border-neon-primary/30 text-emerald-600 dark:text-neon-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800 dark:text-white">
                  Chattogram,
                </p>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  Bangladesh
                </p>
              </div>
            </div>*/}
           

            {/* Education */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 dark:bg-neon-primary/10 border border-emerald-500/30 dark:border-neon-primary/30 text-emerald-600 dark:text-neon-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800 dark:text-white">
                  {PERSONAL_INFO.educationBadge}
                </p>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  {PERSONAL_INFO.institutionShort}
                </p>
              </div>
            </div>

            {/* Opportunity Status */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 dark:bg-neon-primary/10 border border-emerald-500/30 dark:border-neon-primary/30 text-emerald-600 dark:text-neon-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800 dark:text-white">
                  Open to
                </p>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Mouse Scroll / Page Indicator Icon */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/skills"
          title="Explore Skills"
          className="p-2 rounded-full border border-emerald-500/40 dark:border-neon-primary/40 text-emerald-600 dark:text-neon-primary animate-bounce hover:shadow-neon"
        >
          <Mouse className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}