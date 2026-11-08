import { test, expect } from "@playwright/test";
import jobsData from "../data/jobsData.json";

test.describe("'Where I’ve Worked' Job Selector E2E", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    const jobsHeading = page.locator("#jobs");
    await jobsHeading.scrollIntoViewIfNeeded();
    await expect(jobsHeading).toBeVisible();
    await expect(jobsHeading).toContainText("Where I’ve Worked");
  });

  test("renders all company tabs and activates the first job by default", async ({
    page,
  }) => {
    const tabs = page.getByRole("tab");
    await expect(tabs).toHaveCount(jobsData.length);

    for (let i = 0; i < jobsData.length; i++) {
      const tab = page.locator(`#tab-${i}`);
      await expect(tab).toBeVisible();
      await expect(tab).toHaveText(jobsData[i].company);
      await expect(tab).toHaveAttribute(
        "aria-selected",
        i === 0 ? "true" : "false",
      );
    }

    const firstPanel = page.locator("#panel-0");
    await expect(firstPanel).toBeVisible();
    await expect(firstPanel).toContainText(jobsData[0].title);
    await expect(firstPanel).toContainText(jobsData[0].timeRange);

    for (let i = 1; i < jobsData.length; i++) {
      await expect(page.locator(`#panel-${i}`)).toBeHidden();
    }
  });

  test("cycles through every company tab and updates active panel, job details, skills, and CSS indicator", async ({
    page,
  }) => {
    for (let i = 0; i < jobsData.length; i++) {
      const job = jobsData[i];
      const tab = page.locator(`#tab-${i}`);
      const panel = page.locator(`#panel-${i}`);

      await tab.click();

      // 1. Selected tab state & ARIA attributes
      await expect(tab).toHaveAttribute("aria-selected", "true");
      await expect(tab).toHaveAttribute("tabindex", "0");

      // 2. CSS custom property driving the highlight bar transform
      const activeTabCssVar = await page.evaluate(() =>
        document.documentElement.style.getPropertyValue("--activeTabId"),
      );
      expect(activeTabCssVar).toBe(String(i));

      // 3. Target panel visibility & content verification
      await expect(panel).toBeVisible();
      await expect(panel.locator("h4")).toContainText(job.title);
      await expect(panel).toContainText(job.timeRange);

      if (job.companyWebSite) {
        const companyLink = panel.locator("h4 a");
        await expect(companyLink).toHaveAttribute("href", job.companyWebSite);
        await expect(companyLink).toHaveText(job.company);
      }

      for (const item of job.itemsDescriptions) {
        await expect(panel).toContainText(item.description);
      }

      for (const skill of job.usedSkills) {
        await expect(panel).toContainText(skill.name);
      }

      // 4. All other tabs deselected and panels hidden
      for (let j = 0; j < jobsData.length; j++) {
        if (j !== i) {
          await expect(page.locator(`#tab-${j}`)).toHaveAttribute(
            "aria-selected",
            "false",
          );
          await expect(page.locator(`#panel-${j}`)).toBeHidden();
        }
      }
    }
  });

  test("works on mobile viewport with horizontal tab bar", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.locator("#jobs").scrollIntoViewIfNeeded();

    // Switch to Viaplay Group (index 1) and Henry (index 5) on mobile
    const viaplayTab = page.locator("#tab-1");
    await viaplayTab.scrollIntoViewIfNeeded();
    await viaplayTab.click();
    await expect(viaplayTab).toHaveAttribute("aria-selected", "true");
    await expect(page.locator("#panel-1")).toBeVisible();
    await expect(page.locator("#panel-1")).toContainText("Viaplay Group");

    const henryTab = page.locator("#tab-5");
    await henryTab.scrollIntoViewIfNeeded();
    await henryTab.click();
    await expect(henryTab).toHaveAttribute("aria-selected", "true");
    await expect(page.locator("#panel-5")).toBeVisible();
    await expect(page.locator("#panel-5")).toContainText("Teaching Assistant");
  });
});
