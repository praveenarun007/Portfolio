"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { PROFILE, PROJECTS, type ProjectItem } from "@/data/portfolio";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { ProjectCard } from "./ProjectCard";
import { ArchitectureModal } from "./ArchitectureModal";
import { DomainMatrix } from "./DomainMatrix";
import { EducationSection } from "./EducationSection";
import { Footer } from "./Footer";
import { Toast } from "./Toast";
import { SectionReveal } from "./MotionPrimitives";

export function PortfolioClient() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [emailCopied, setEmailCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2600);
  }, []);

  const handleCopyEmail = useCallback(async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(PROFILE.email);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = PROFILE.email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setEmailCopied(true);
      showToast(`Email copied to clipboard: ${PROFILE.email}`);
      setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      showToast(`Email: ${PROFILE.email}`);
    }
  }, [showToast]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isEditable =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (isEditable) return;

      if (event.key === "Escape" && selectedProject) {
        event.preventDefault();
        setSelectedProject(null);
        return;
      }

      if (event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }

      const key = event.key.toLowerCase();

      if (key === "p") {
        event.preventDefault();
        setSelectedProject(null);
        scrollToSection("projects");
      } else if (key === "d") {
        event.preventDefault();
        setSelectedProject(null);
        scrollToSection("domains");
      } else if (key === "e") {
        event.preventDefault();
        setSelectedProject(null);
        scrollToSection("education");
      } else if (key === "k") {
        event.preventDefault();
        setSelectedProject(null);
        scrollToSection("contact");
      } else if (key === "c") {
        event.preventDefault();
        void handleCopyEmail();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleCopyEmail, scrollToSection, selectedProject]);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-klein focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero onCopyEmail={handleCopyEmail} emailCopied={emailCopied} />

        {/* Selected Engineering Projects (2x2 Architectural Grid) */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="border-b border-hairline"
        >
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:border-x lg:border-hairline lg:px-8 lg:py-24">
            <SectionReveal>
              <div className="mb-10 flex flex-col justify-between gap-4 border-b border-hairline pb-6 sm:flex-row sm:items-end">
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-technical text-klein">
                    SECTION 01 // SELECTED WORK
                  </p>
                  <h2
                    id="projects-heading"
                    className="mt-2 text-2xl font-semibold tracking-editorial text-obsidian sm:text-3xl"
                  >
                    Selected Engineering Projects
                  </h2>
                </div>
                <p className="max-w-md text-sm text-slate">
                  Systems spanning full-stack relational applications,
                  event-driven cloud ETL, and acoustic machine learning.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.08}>
              <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline md:grid-cols-2">
                {PROJECTS.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onInspectArchitecture={setSelectedProject}
                  />
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        <DomainMatrix />
        <EducationSection />
      </main>

      <Footer onCopyEmail={handleCopyEmail} emailCopied={emailCopied} />

      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Toast message={toastMessage} />
    </div>
  );
}
