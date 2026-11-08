import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach, vi } from "vitest";
import CvPage from "../page";
import { getJobs } from "@/src/infrastructure/JobRepository";
import { getPersonalInfo } from "@/src/infrastructure/PersonaInfoRepository";

const mockHandlePrint = vi.fn();
vi.mock("react-to-print", () => ({
  useReactToPrint: () => mockHandlePrint,
}));

afterEach(() => {
  cleanup();
  mockHandlePrint.mockClear();
});

describe("CV Page (/cv)", () => {
  const jobs = getJobs();
  const personalInfo = getPersonalInfo();

  it("renders personal info, skills, and only jobs where showOnCv is true", () => {
    render(<CvPage />);

    expect(
      screen.getByRole("heading", { name: personalInfo.name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: personalInfo.title }),
    ).toBeInTheDocument();

    const cvJobs = jobs.filter((j) => j.showOnCv);
    const nonCvJobs = jobs.filter((j) => !j.showOnCv);

    for (const job of cvJobs) {
      expect(screen.getAllByText(new RegExp(job.company, "i")).length).toBeGreaterThan(0);
    }

    for (const hiddenJob of nonCvJobs) {
      expect(
        screen.queryByText(new RegExp(`${hiddenJob.title}, ${hiddenJob.company}`, "i")),
      ).not.toBeInTheDocument();
    }

    expect(
      screen.getByRole("button", { name: /Download CV as PDF/i }),
    ).toBeInTheDocument();
  });
});
