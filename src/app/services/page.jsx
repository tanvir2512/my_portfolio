import React from "react";
//import Link from "next/link";
import { SERVICES_DATA } from "@/data/portfolioData";
import {
  Code2,
  Smartphone,
  Palette,
  BrainCircuit,
  Wrench,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
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

// Map icon names from portfolioData to Lucide React components
const ICON_MAP = {
  Code2,
  Smartphone,
  Palette,
  BrainCircuit,
  Wrench,
  Lightbulb,
};

/**
 * 6. SERVICES PAGE ("/services")
 * Matches Showcase Panel 6: 6 service cards, "Let's Work Together ->" button,
 * and right-side handwritten equation ("Your Ideas + My Skills = Real Solutions").
 */
export default function ServicesPage() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 animate-fade-up">
      {/* Section Header */}
      <div className="mb-10">
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-emerald-600 dark:text-neon-primary font-semibold">
          MY SERVICES
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          What I Offer
        </h1>
        <p className="text-slate-600 dark:text-gray-300 mt-2 max-w-xl font-light">
          I provide a range of services to help bring your ideas to life with
          clean code, modern design and reliable solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT 9 COLUMNS: 3x2 Services Grid */}
        <div className="lg:col-span-9 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => {
              const IconComponent = ICON_MAP[service.iconName] || Code2;
              return (
                <div key={service.id} className="neon-card p-6 space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 dark:bg-neon-primary/15 border border-emerald-500/40 dark:border-neon-primary/40 flex items-center justify-center text-emerald-600 dark:text-neon-primary shadow-neon">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h2>

                  <p className="text-sm text-slate-600 dark:text-gray-300 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Call-To-Action Button */}
          <div className="flex justify-center pt-2">
            <Link href="/contact" className="neon-outline-btn px-7 py-3 text-sm uppercase">
              <span>Let&apos;s Work Together</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* RIGHT 3 COLUMNS: Handwritten Formula Accent from Showcase */}
        <div className="lg:col-span-3 flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-emerald-500/30 dark:border-neon-primary/30 bg-emerald-500/5 dark:bg-neon-primary/5">
          <div className="font-handwritten text-3xl sm:text-4xl text-emerald-600 dark:text-neon-primary space-y-2 leading-tight">
            <p>Your Ideas</p>
            <p className="text-2xl">+</p>
            <p>My Skills</p>
            <p className="text-2xl">=</p>
            <p className="underline decoration-neon-primary/60">
              Real Solutions
            </p>
          </div>
        </div>
      </div>
         <div className="mt-12 flex justify-center">
              <Link
                href="/contact"
                title="Explore Contact"
                className="p-2 rounded-full border border-emerald-500/40 dark:border-neon-primary/40 text-emerald-600 dark:text-neon-primary animate-bounce hover:shadow-neon"
              >
                <Mouse className="w-5 h-5" />
              </Link>
            </div>
    </section>
  );
}