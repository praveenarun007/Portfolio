"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import type { ProjectItem } from "@/data/portfolio";

interface ArchitectureModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const EDITORIAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ArchitectureModal({
  project,
  onClose,
}: ArchitectureModalProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="architecture-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian/40 backdrop-blur-[1px]"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.28,
              ease: EDITORIAL_EASE,
            }}
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-obsidian bg-surface"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-hairline bg-canvas px-6 py-4 sm:px-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-technical text-klein">
                  ARCHITECTURE SPEC // {project.index} — {project.domain}
                </p>
                <h2
                  id="architecture-modal-title"
                  className="mt-1 text-xl font-semibold tracking-tight text-obsidian sm:text-2xl"
                >
                  {project.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 border border-hairline bg-surface px-2.5 py-1.5 font-mono text-[11px] text-obsidian transition-colors hover:border-obsidian"
                aria-label="Close architecture specification"
              >
                <span>ESC</span>
                <X className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Body */}
            <div className="space-y-7 px-6 py-6 sm:px-8 sm:py-7">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-technical text-muted">
                  Architectural Pattern
                </p>
                <p className="mt-1.5 font-mono text-xs font-medium text-obsidian">
                  {project.architecture.pattern}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {project.architecture.overview}
                </p>
              </div>

              {/* System Flow Pipeline */}
              <div>
                <h3 className="mb-3 font-mono text-[11px] uppercase tracking-technical text-muted">
                  System Data &amp; Control Flow
                </h3>
                <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline md:grid-cols-3">
                  {project.architecture.pipeline.map((stage, index) => (
                    <div
                      key={stage.label}
                      className="relative bg-surface p-4 sm:p-5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-technical text-klein">
                          {stage.label}
                        </span>
                        {index < project.architecture.pipeline.length - 1 && (
                          <ArrowRight
                            className="hidden h-3.5 w-3.5 text-muted md:block"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <p className="mt-2 text-sm font-semibold text-obsidian">
                        {stage.component}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate">
                        {stage.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h3 className="mb-3 font-mono text-[11px] uppercase tracking-technical text-muted">
                  System Specifications
                </h3>
                <dl className="grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-3">
                  {project.architecture.specs.map((spec) => (
                    <div key={spec.label} className="bg-canvas p-3.5">
                      <dt className="font-mono text-[10px] uppercase tracking-technical text-muted">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 font-mono text-xs font-medium text-obsidian">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Key Engineering Decisions */}
              <div>
                <h3 className="mb-3 font-mono text-[11px] uppercase tracking-technical text-muted">
                  Key Engineering Decisions
                </h3>
                <ul className="space-y-2.5 border border-hairline bg-surface p-4 sm:p-5">
                  {project.architecture.engineeringDecisions.map(
                    (decision, idx) => (
                      <li
                        key={decision}
                        className="flex items-start gap-3 text-sm leading-relaxed text-slate"
                      >
                        <span className="mt-0.5 font-mono text-xs font-semibold text-klein">
                          0{idx + 1}
                        </span>
                        <span>{decision}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hairline bg-canvas px-6 py-4 sm:px-8">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-hairline bg-surface px-2 py-0.5 font-mono text-[11px] text-slate"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 font-mono text-xs">
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-obsidian transition-colors hover:text-klein"
                >
                  <span>Source Code</span>
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-klein px-3.5 py-2 text-white transition-colors hover:bg-klein-hover"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
