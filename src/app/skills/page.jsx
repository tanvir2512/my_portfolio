"use client";

import React, { useState } from "react";
import { SKILLS_CATEGORIES, SKILLS_DATA } from "@/data/portfolioData";
import { Terminal } from "lucide-react";
import Link from "next/link"; // <-- Added Next.js Link import
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
 * 2. SKILLS PAGE ("/skills")
 * Matches Showcase Panel 2: Category filter pills, glowing skill icon cards,
 * right-side developer illustration card, and handwritten quote.
 */
export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sideImgError, setSideImgError] = useState(false);

  // Filter skills when a specific tab is clicked, or group by category when "All" is active
  const displayedCategories =
    activeCategory === "All"
      ? SKILLS_CATEGORIES.filter((cat) => cat !== "All")
      : [activeCategory];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 animate-fade-up">
      {/* Section Header */}
      <div className="mb-8">
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-emerald-600 dark:text-neon-primary font-semibold">
          MY SKILLS
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          Technical Skills &amp; Technologies
        </h1>
        <p className="text-slate-600 dark:text-gray-300 mt-2 max-w-xl font-light">
          I work with a range of modern technologies to build scalable,
          efficient and user-friendly solutions.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
        {SKILLS_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                isActive
                  ? "bg-neon-secondary/20 dark:bg-neon-primary/20 text-emerald-700 dark:text-neon-primary border border-neon-secondary dark:border-neon-primary shadow-neon"
                  : "bg-white/70 dark:bg-[#1A1F1E]/70 text-slate-600 dark:text-gray-300 border border-slate-300 dark:border-white/10 hover:border-neon-primary/50"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Main Content Grid: Left Skills Cards + Right Side Visual & Quote */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT 8 COLUMNS: Categorized Skill Cards */}
        <div className="lg:col-span-8 space-y-8">
          {displayedCategories.map((categoryName) => {
            const categoryItems = SKILLS_DATA.filter(
              (item) => item.category === categoryName
            );

            return (
              <div key={categoryName} className="space-y-4">
                <h2 className="text-lg font-semibold text-emerald-600 dark:text-neon-primary tracking-wide">
                  {categoryName === "Frameworks"
                    ? "Frameworks & Libraries"
                    : categoryName}
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {categoryItems.map((skill) => (
                    <div
                      key={skill.id}
                      className="neon-card p-5 flex flex-col items-center justify-center text-center group"
                    >
                      {/* Colored Tech Badge Icon */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base mb-3 transition-transform duration-300 group-hover:scale-110 shadow-md"
                        style={{
                          backgroundColor: `${skill.color}20`,
                          border: `1px solid ${skill.color}`,
                          color: skill.color,
                        }}
                      >
                        {skill.badge}
                      </div>

                      <span className="text-sm font-medium text-slate-800 dark:text-gray-200 group-hover:text-emerald-600 dark:group-hover:text-neon-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT 4 COLUMNS: Workspace Illustration + Handwritten Quote */}
        <div className="lg:col-span-4 space-y-6">
          <div className="neon-card overflow-hidden p-3">
            {!sideImgError ? (
              <img
                src="/images/skills-side.jpg"
                alt="Developer Workspace"
                onError={() => setSideImgError(true)}
                className="w-full h-64 object-cover rounded-lg"
              />
            ) : (
              /* Styled Cyber Workspace Placeholder until /public/images/skills-side.jpg is added */
              <div className="w-full h-64 rounded-lg bg-gradient-to-br from-[#0f1f17] via-[#132a1f] to-[#0B0D0C] border border-neon-primary/30 flex flex-col items-center justify-center p-6 text-center">
                <Terminal className="w-12 h-12 text-neon-primary mb-3 animate-pulse" />
                <p className="text-sm font-semibold text-white">
                  Coding Setup Illustration
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Optional image path:{""}
                  <code className="text-neon-primary">/public/images/skills-side.webp</code>
                </p>
              </div>
            )}
          </div>

          {/* Neon Quote Box from Showcase Panel 2 */}
          <div className="p-5 rounded-xl border border-emerald-500/30 dark:border-neon-primary/30 bg-emerald-500/5 dark:bg-neon-primary/5">
            <p className="font-handwritten text-2xl sm:text-3xl text-emerald-600 dark:text-neon-primary leading-snug">
              &ldquo;Good code builds solutions, Great code builds
              possibilities.&rdquo;
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          href="/experience"
          title="Explore experience"
          className="p-2 rounded-full border border-emerald-500/40 dark:border-neon-primary/40 text-emerald-600 dark:text-neon-primary animate-bounce hover:shadow-neon"
        >
          <Mouse className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}