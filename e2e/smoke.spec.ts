import { test, expect } from "@playwright/test";

test.describe("Frontend Smoke Suite", () => {
  test("Home page (/) renders all main portfolio sections without console or page errors", async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });

    await page.goto("/");

    // Hero / Presentation
    await expect(
      page.getByRole("heading", { name: "Matías Stefanutti", level: 1 }),
    ).toBeVisible();
    await expect(page.getByText(/Software Engineer/i).first()).toBeVisible();

    // Main section headings
    await expect(page.locator("#about")).toContainText("About Me");
    await expect(page.locator("#jobs")).toContainText("Where I’ve Worked");
    await expect(page.locator("#projects")).toContainText(
      "Some Things I’ve Built",
    );
    await expect(page.locator("#contact")).toContainText("Get In Touch");

    // Navigation bar links
    const nav = page.getByRole("navigation").first();
    await expect(nav).toBeVisible();
    await expect(nav.getByRole("link", { name: "About me" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Work" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Projects" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Contact" })).toBeVisible();

    expect(errors).toEqual([]);
  });

  test("CV page (/cv) renders resume sections and PDF download button", async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto("/cv");

    await expect(
      page.getByRole("heading", { name: "Matias Stefanutti", level: 1 }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Experience", level: 3 }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Education", level: 3 }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Skills", level: 3 }),
    ).toBeVisible();

    const downloadBtn = page.getByRole("button", {
      name: /Download CV as PDF/i,
    });
    await expect(downloadBtn).toBeVisible();

    expect(errors).toEqual([]);
  });
});
