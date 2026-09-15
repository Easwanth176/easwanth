import { describe, expect, it } from "vitest";
import { projects } from "../data/portfolio";
import { filterProjects } from "./project-explorer";

describe("filterProjects", () => {
  it("returns every project for the All filter", () => {
    expect(filterProjects(projects, "All")).toHaveLength(projects.length);
  });

  it("returns only projects in the requested category", () => {
    const migrations = filterProjects(projects, "Migration");

    expect(migrations).toHaveLength(2);
    expect(migrations.every((project) => project.category === "Migration")).toBe(
      true,
    );
  });

  it("preserves the original project records", () => {
    const integrations = filterProjects(projects, "Integration");

    expect(integrations.map((project) => project.name)).toEqual([
      "US-DoorDash",
      "US-Nova Tech",
    ]);
  });
});
