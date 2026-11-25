"use client";

import React, { useEffect, useState } from "react";
import { PROFILE } from "@/data/portfolio";

const NAV_LINKS = [
  { id: "projects", label: "Projects", href: "#projects", shortcut: "P" },
  { id: "domains", label: "Domains", href: "#domains", shortcut: "D" },
  { id: "education", label: "Education", href: "#education", shortcut: "E" },
  { id: "contact", label: "Contact", href: "#contact", shortcut: "K" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-canvas/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:border-x lg:border-hairline lg:px-8">
        <a
          href="#"
          className="inline-flex items-center gap-2.5 font-mono text-xs font-semibold tracking-technical text-obsidian transition-colors hover:text-klein sm:text-sm"
          aria-label="Praveen A — Home"
        >
          <span
            className="inline-block h-2 w-2 border border-obsidian bg-obsidian"
            aria-hidden="true"
          />
          <span>{PROFILE.name}</span>
        </a>

        <div className="flex flex-wrap items-center gap-4 sm:gap-7">
          <nav
            aria-label="Primary Navigation"
            className="flex items-center gap-4 sm:gap-6"
          >
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 font-mono text-xs transition-colors ${
                    isActive
                      ? "font-semibold text-klein"
                      : "text-slate hover:text-obsidian"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute inset-x-0 -bottom-[15px] h-[2px] bg-klein"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div
            className="hidden items-center gap-2 border border-hairline bg-surface px-2.5 py-1 font-mono text-[11px] font-medium text-obsidian md:inline-flex"
            title="Current availability status"
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-klein"
              aria-hidden="true"
            />
            <span>{PROFILE.status}</span>
          </div>
        </div>
      </div>

      {/* Compact status bar on smaller viewports */}
      <div className="border-t border-hairline bg-surface px-4 py-1.5 md:hidden">
        <div className="mx-auto flex max-w-[1200px] items-center gap-2 font-mono text-[11px] text-obsidian">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-klein"
            aria-hidden="true"
          />
          <span>{PROFILE.status}</span>
        </div>
      </div>
    </header>
  );
}
