"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/portfolio";

const filters = ["All", "Migration", "Integration", "B2B"] as const;
export type Filter = (typeof filters)[number];

export function filterProjects(projects: Project[], filter: Filter) {
  return filter === "All"
    ? projects
    : projects.filter((project) => project.category === filter);
}

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const visibleProjects = useMemo(
    () => filterProjects(projects, filter),
    [filter, projects],
  );

  return (
    <div className="project-explorer">
      <div className="filter-row" role="group" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className={filter === item ? "filter-active" : undefined}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
        <span className="project-count" aria-live="polite">
          {String(visibleProjects.length).padStart(2, "0")} projects
        </span>
      </div>

      <div className="project-list">
        {visibleProjects.map((project, index) => (
          <details className="project-card" key={project.id}>
            <summary>
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="project-heading">
                <span className="project-name">{project.name}</span>
                <span className="project-summary">{project.summary}</span>
              </span>
              <span className="project-period">{project.period}</span>
              <span className="project-toggle" aria-hidden="true">
                <span />
                <span />
              </span>
            </summary>
            <div className="project-detail">
              <p>{project.outcome}</p>
              <ul aria-label={`${project.name} technologies`}>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
