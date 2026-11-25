"use client";

import React from "react";
import { ArrowUpRight, Layers } from "lucide-react";
import type { ProjectItem } from "@/data/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
  onInspectArchitecture: (project: ProjectItem) => void;
}

export function ProjectCard({
  project,
  onInspectArchitecture,
}: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col justify-between border-t-2 border-t-transparent bg-surface p-6 transition-colors duration-200 hover:border-t-klein hover:bg-[#FCFCFC] sm:p-8">
      <div>
        <div className="flex items-center justify-between gap-3 border-b border-hairline pb-3.5">
          <span className="font-mono text-[11px] font-medium uppercase tracking-technical text-slate">
            {project.domain}
          </span>
          <span className="border border-hairline bg-canvas px-2 py-0.5 font-mono text-[11px] font-semibold text-obsidian transition-colors group-hover:border-klein group-hover:text-klein">
            {project.index}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-semibold tracking-tight text-obsidian">
          {project.title}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-slate">
          {project.summary}
        </p>

        {/* Well-defined project architecture summary rows */}
        <dl className="mt-5 divide-y divide-hairline border border-hairline bg-canvas">
          {project.highlights.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-12 gap-2 px-3 py-2 text-xs"
            >
              <dt className="col-span-4 font-mono text-[10px] uppercase tracking-technical text-muted">
                {item.label}
              </dt>
              <dd className="col-span-8 font-medium text-obsidian">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <ul
          aria-label={`${project.title} technologies`}
          className="mt-4 flex flex-wrap gap-1.5"
        >
          {project.stack.map((item) => (
            <li
              key={item}
              className="border border-hairline bg-surface px-2 py-0.5 font-mono text-[11px] text-slate"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-hairline pt-4 font-mono text-xs">
        <button
          type="button"
          onClick={() => onInspectArchitecture(project)}
          className="inline-flex items-center gap-1.5 font-semibold text-klein transition-colors hover:text-klein-hover"
        >
          <Layers className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span>Architecture Spec</span>
        </button>

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
          className="inline-flex items-center gap-1 text-obsidian transition-colors hover:text-klein"
        >
          <span>Live Demo</span>
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </a>
      </div>
    </article>
  );
}
