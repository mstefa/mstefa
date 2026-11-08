import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import Projects from "../Projects";
import { getProjects } from "@/src/infrastructure/ProjectRepository";

afterEach(() => {
  cleanup();
});

describe("Projects Component", () => {
  const allProjects = getProjects();
  const visibleMainProjects = allProjects.filter((p) => p.show && p.main);

  it("renders section heading and all active main projects", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", { name: /Some Things I’ve Built/i }),
    ).toBeInTheDocument();

    for (const project of visibleMainProjects) {
      expect(
        screen.getByRole("heading", { name: new RegExp(project.name, "i") }),
      ).toBeInTheDocument();
      expect(
        screen.getByAltText(`${project.name} cover image`),
      ).toHaveAttribute("src", project.img);
    }
  });
});
