import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import Jobs from "../Jobs";
import { getJobs } from "@/src/infrastructure/JobRepository";

afterEach(() => {
  cleanup();
});

describe("Jobs Component ('Where I’ve Worked' Selector)", () => {
  const jobsData = getJobs();

  it("renders the section heading and all company tabs", () => {
    render(<Jobs />);

    expect(
      screen.getByRole("heading", { name: /Where I’ve Worked/i }),
    ).toBeInTheDocument();

    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(jobsData.length);

    jobsData.forEach((job, idx) => {
      expect(tabs[idx]).toHaveTextContent(job.company);
      expect(tabs[idx]).toHaveAttribute("id", `tab-${idx}`);
      expect(tabs[idx]).toHaveAttribute("aria-controls", `panel-${idx}`);
    });
  });

  it("selects the first job tab by default and hides other panels", () => {
    render(<Jobs />);

    const tabs = screen.getAllByRole("tab");
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(tabs[0]).toHaveAttribute("tabIndex", "0");

    for (let i = 1; i < tabs.length; i++) {
      expect(tabs[i]).toHaveAttribute("aria-selected", "false");
      expect(tabs[i]).toHaveAttribute("tabIndex", "-1");
    }

    const firstPanel = document.getElementById("panel-0");
    expect(firstPanel).toBeVisible();
    expect(firstPanel).toHaveTextContent(jobsData[0].title);

    const secondPanel = document.getElementById("panel-1");
    expect(secondPanel).not.toBeVisible();
    expect(secondPanel).toHaveAttribute("hidden");
  });

  it("switches active tab, panel visibility, and CSS --activeTabId variable when clicking another company tab", async () => {
    const user = userEvent.setup();
    render(<Jobs />);

    const tabs = screen.getAllByRole("tab");

    for (let i = 0; i < jobsData.length; i++) {
      await user.click(tabs[i]);

      expect(tabs[i]).toHaveAttribute("aria-selected", "true");
      expect(tabs[i]).toHaveAttribute("tabIndex", "0");
      expect(
        document.documentElement.style.getPropertyValue("--activeTabId"),
      ).toBe(String(i));

      const activePanel = document.getElementById(`panel-${i}`);
      expect(activePanel).toBeVisible();
      expect(activePanel).toHaveTextContent(jobsData[i].title);
      expect(activePanel).toHaveTextContent(jobsData[i].timeRange);

      for (const skill of jobsData[i].usedSkills) {
        expect(activePanel).toHaveTextContent(skill.name);
      }

      for (let j = 0; j < jobsData.length; j++) {
        if (j !== i) {
          expect(tabs[j]).toHaveAttribute("aria-selected", "false");
          expect(document.getElementById(`panel-${j}`)).not.toBeVisible();
        }
      }
    }
  });
});
