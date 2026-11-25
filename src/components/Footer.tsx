"use client";

import React from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { SectionReveal } from "./MotionPrimitives";

interface FooterProps {
  onCopyEmail: () => void;
  emailCopied: boolean;
}

export function Footer({ onCopyEmail, emailCopied }: FooterProps) {
  return (
    <footer id="contact" className="bg-surface">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:border-x lg:border-hairline lg:px-8">
        <SectionReveal>
          <div className="grid grid-cols-1 gap-10 border-b border-hairline pb-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] font-medium uppercase tracking-technical text-klein">
                SECTION 04 // DIRECT CONTACT
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-editorial text-obsidian sm:text-3xl">
                Available for SWE, Data &amp; Cloud Internships.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate">
                Reach out directly via email for internship opportunities,
                engineering collaborations, or technical discussions.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onCopyEmail}
                  className="inline-flex items-center gap-2.5 border border-klein bg-klein px-5 py-3 font-mono text-xs font-medium text-white transition-colors hover:border-klein-hover hover:bg-klein-hover"
                >
                  {emailCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
                      <span>Copied: {PROFILE.email}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" strokeWidth={1.5} />
                      <span>Copy {PROFILE.email}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 border border-hairline bg-canvas px-4 py-3 font-mono text-xs font-medium text-obsidian transition-colors hover:border-strong"
                >
                  <Mail className="h-3.5 w-3.5 text-slate" strokeWidth={1.5} />
                  <span>Open Mail Client</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-technical text-muted">
                Profiles &amp; Code
              </p>
              <ul className="divide-y divide-hairline border border-hairline bg-canvas">
                {PROFILE.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 text-xs transition-colors hover:bg-surface"
                    >
                      <span className="font-mono font-semibold text-obsidian">
                        {link.label}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-slate">
                        <span>{link.handle}</span>
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-klein"
                          strokeWidth={1.5}
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 font-mono text-[11px] text-muted sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} {PROFILE.fullName} —{" "}
              {PROFILE.institution}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="uppercase tracking-technical">Shortcuts:</span>
              <span>[P] Projects</span>
              <span>[D] Domains</span>
              <span>[E] Education</span>
              <span>[K] Contact</span>
              <span>[C] Copy Email</span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </footer>
  );
}
