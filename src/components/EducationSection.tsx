"use client";

import React from "react";
import { GraduationCap, Target } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { SectionReveal } from "./MotionPrimitives";

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-hairline"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:border-x lg:border-hairline lg:px-8 lg:py-24">
        <SectionReveal>
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-hairline pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-technical text-klein">
                SECTION 03 // ACADEMIC &amp; DIRECTION
              </p>
              <h2
                id="education-heading"
                className="mt-2 text-2xl font-semibold tracking-editorial text-obsidian sm:text-3xl"
              >
                Education &amp; Career Objective
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate">
              Academic grounding in artificial intelligence, data systems, and
              foundational computer science principles.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline lg:grid-cols-12">
            {/* Academic Credential */}
            <div className="bg-surface p-6 sm:p-8 lg:col-span-6">
              <div className="flex items-center justify-between border-b border-hairline pb-3.5">
                <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-technical text-obsidian">
                  <GraduationCap
                    className="h-4 w-4 text-klein"
                    strokeWidth={1.5}
                  />
                  <span>Academic Foundation</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-technical text-muted">
                  B.E. DEGREE
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-obsidian">
                {PROFILE.degree}
              </h3>

              <p className="mt-1.5 font-mono text-xs font-medium uppercase tracking-wide text-klein">
                {PROFILE.institution}
              </p>

              <div className="mt-6">
                <p className="mb-2.5 font-mono text-[10px] uppercase tracking-technical text-muted">
                  Core Technical Coursework
                </p>
                <ul className="grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2">
                  {PROFILE.coursework.map((course) => (
                    <li
                      key={course}
                      className="bg-canvas px-3 py-2 font-mono text-[11px] text-obsidian"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Career Objective Editorial Callout */}
            <div className="flex flex-col justify-between bg-surface p-6 sm:p-8 lg:col-span-6">
              <div>
                <div className="flex items-center justify-between border-b border-hairline pb-3.5">
                  <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-technical text-obsidian">
                    <Target className="h-4 w-4 text-klein" strokeWidth={1.5} />
                    <span>Career Objective</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-technical text-muted">
                    ENGINEERING FOCUS
                  </span>
                </div>

                <blockquote className="mt-6 border-l-2 border-klein pl-5 text-lg font-medium leading-relaxed text-obsidian sm:text-xl">
                  &ldquo;{PROFILE.careerObjective}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 border-t border-hairline pt-5">
                <p className="text-sm leading-relaxed text-slate">
                  Focused on mastering system design, clean codebases,
                  relational and serverless data pipelines, and pragmatic machine
                  learning—seeking SWE, Full-Stack, Data, and Cloud internships
                  where engineering rigor directly drives product reliability.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
