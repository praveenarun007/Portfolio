"use client";

import React from "react";
import { TECHNICAL_DOMAINS } from "@/data/portfolio";
import { SectionReveal } from "./MotionPrimitives";

export function DomainMatrix() {
  return (
    <section
      id="domains"
      aria-labelledby="domains-heading"
      className="border-b border-hairline"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:border-x lg:border-hairline lg:px-8 lg:py-24">
        <SectionReveal>
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-hairline pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-technical text-klein">
                SECTION 02 // CAPABILITIES MATRIX
              </p>
              <h2
                id="domains-heading"
                className="mt-2 text-2xl font-semibold tracking-editorial text-obsidian sm:text-3xl"
              >
                Core Technical Interests &amp; Stack
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate">
              Structured across application engineering, intelligent systems,
              relational data architecture, and cloud infrastructure.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline md:grid-cols-2">
            {TECHNICAL_DOMAINS.map((domain) => (
              <article
                key={domain.id}
                className="flex flex-col justify-between bg-surface p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-hairline pb-3.5">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-technical text-obsidian">
                      DOMAIN // {domain.code}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-technical text-klein">
                      {domain.layer}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-obsidian">
                    {domain.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {domain.description}
                  </p>
                </div>

                <ul
                  aria-label={`${domain.title} stack`}
                  className="mt-6 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2"
                >
                  {domain.technologies.map((tech, idx) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2.5 bg-canvas px-3 py-2 font-mono text-xs text-obsidian"
                    >
                      <span className="text-[10px] font-semibold text-klein">
                        0{idx + 1}
                      </span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
