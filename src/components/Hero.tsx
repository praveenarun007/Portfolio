"use client";

import React from "react";
import { ArrowDown, Check, Copy } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { MaskedReveal, SectionReveal } from "./MotionPrimitives";

interface HeroProps {
  onCopyEmail: () => void;
  emailCopied: boolean;
}

export function Hero({ onCopyEmail, emailCopied }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-hairline"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20 lg:border-x lg:border-hairline lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column (7 cols): Editorial Statement */}
          <div className="lg:col-span-7">
            <MaskedReveal>
              <div className="mb-6 inline-flex items-center gap-2.5 border border-hairline bg-surface px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-technical text-obsidian">
                <span
                  className="inline-block h-2 w-2 bg-klein"
                  aria-hidden="true"
                />
                <span>{PROFILE.eyebrow}</span>
              </div>
            </MaskedReveal>

            <MaskedReveal delay={0.08}>
              <h1
                id="hero-heading"
                className="text-3xl font-semibold leading-[1.08] tracking-editorial text-obsidian sm:text-4xl lg:text-[48px]"
              >
                {PROFILE.headline}
              </h1>
            </MaskedReveal>

            <SectionReveal delay={0.16}>
              <p className="mt-6 max-w-2xl border-l-2 border-hairline pl-4 text-base leading-relaxed text-slate sm:text-[17px]">
                {PROFILE.bio}
              </p>
            </SectionReveal>

            <SectionReveal delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 border border-klein bg-klein px-5 py-3 font-mono text-xs font-medium tracking-wide text-white transition-colors hover:border-klein-hover hover:bg-klein-hover"
                >
                  <span>Explore Selected Work</span>
                  <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>

                <button
                  type="button"
                  onClick={onCopyEmail}
                  className="inline-flex items-center gap-2 border border-hairline bg-surface px-5 py-3 font-mono text-xs font-medium text-obsidian transition-colors hover:border-strong"
                >
                  {emailCopied ? (
                    <>
                      <Check
                        className="h-3.5 w-3.5 text-klein"
                        strokeWidth={1.5}
                      />
                      <span className="text-klein">Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-slate" strokeWidth={1.5} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column (5 cols): Tabular Engineering Profile & Stack Matrix */}
          <div className="lg:col-span-5">
            <SectionReveal delay={0.18}>
              <aside
                aria-label="Engineering Profile and Stack Matrix"
                className="border border-hairline bg-surface"
              >
                <div className="flex items-center justify-between border-b border-hairline bg-subtle px-5 py-3">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-technical text-obsidian">
                    Engineering Profile &amp; Stack Matrix
                  </span>
                  <span className="font-mono text-[11px] font-medium text-klein">
                    SPEC // 00
                  </span>
                </div>

                <dl className="divide-y divide-hairline">
                  <div className="grid grid-cols-12 gap-2 px-5 py-3">
                    <dt className="col-span-4 font-mono text-[11px] uppercase tracking-technical text-muted">
                      Degree
                    </dt>
                    <dd className="col-span-8 text-xs font-medium text-obsidian sm:text-sm">
                      {PROFILE.degree}
                    </dd>
                  </div>

                  <div className="grid grid-cols-12 gap-2 px-5 py-3">
                    <dt className="col-span-4 font-mono text-[11px] uppercase tracking-technical text-muted">
                      Institution
                    </dt>
                    <dd className="col-span-8 text-xs font-medium text-obsidian sm:text-sm">
                      {PROFILE.institution}
                    </dd>
                  </div>

                  <div className="px-5 py-3.5">
                    <dt className="mb-2.5 font-mono text-[11px] uppercase tracking-technical text-muted">
                      Stack Breakdown
                    </dt>
                    <dd className="space-y-1.5 border border-hairline bg-canvas p-3">
                      {PROFILE.stackGroups.map((group) => (
                        <div
                          key={group.category}
                          className="grid grid-cols-12 items-baseline gap-2 text-xs"
                        >
                          <span className="col-span-4 font-mono text-[10px] uppercase tracking-technical text-muted">
                            {group.category}
                          </span>
                          <span className="col-span-8 font-mono text-[11px] font-medium text-obsidian">
                            {group.items}
                          </span>
                        </div>
                      ))}
                    </dd>
                  </div>

                  <div className="px-5 py-3.5">
                    <dt className="mb-2 font-mono text-[11px] uppercase tracking-technical text-muted">
                      Active Technologies
                    </dt>
                    <dd className="flex flex-wrap items-center gap-y-1 font-mono text-xs font-semibold text-obsidian">
                      {PROFILE.activeStack.map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span>{tech}</span>
                          {idx < PROFILE.activeStack.length - 1 && (
                            <span
                              className="mx-2 text-klein"
                              aria-hidden="true"
                            >
                              •
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-hairline bg-subtle px-5 py-3 font-mono text-[11px] text-slate">
                  <span className="flex items-center gap-1.5">
                    <span>Press</span>
                    <kbd className="border border-hairline bg-surface px-1.5 py-0.5 text-[10px] font-semibold text-obsidian">
                      P
                    </kbd>
                    <span>for Projects</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <kbd className="border border-hairline bg-surface px-1.5 py-0.5 text-[10px] font-semibold text-obsidian">
                      C
                    </kbd>
                    <span>to Copy Email</span>
                  </span>
                </div>
              </aside>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
