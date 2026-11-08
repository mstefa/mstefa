import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, afterEach } from "vitest";
import NavBar from "../NavBar";

afterEach(() => {
  cleanup();
});

describe("NavBar Component", () => {
  it("renders brand logo link and all section navigation links", () => {
    render(<NavBar />);

    expect(
      screen.getByRole("link", { name: /Mat[ií]as Stefanutti/i }),
    ).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /About me/i })).toHaveAttribute(
      "href",
      "/#about",
    );
    expect(screen.getByRole("link", { name: /Work/i })).toHaveAttribute(
      "href",
      "/#jobs",
    );
    expect(screen.getByRole("link", { name: /Projects/i })).toHaveAttribute(
      "href",
      "/#projects",
    );
    expect(screen.getByRole("link", { name: /Contact/i })).toHaveAttribute(
      "href",
      "/#contact",
    );
  });

  it("toggles mobile navigation menu when clicking the hamburger button", async () => {
    const user = userEvent.setup();
    render(<NavBar />);

    const toggleButton = screen.getByRole("button");
    const navListContainer = screen.getByRole("list").parentElement;

    expect(navListContainer?.className).toMatch(/navigationMenuHiden/);

    await user.click(toggleButton);
    expect(navListContainer?.className).toMatch(/navigationMenuExpanded/);

    await user.click(toggleButton);
    expect(navListContainer?.className).toMatch(/navigationMenuHiden/);
  });

  it("hides navbar on scroll down and reveals it on scroll up", () => {
    Object.defineProperty(window, "scrollY", {
      writable: true,
      configurable: true,
      value: 0,
    });

    render(<NavBar />);
    const nav = screen.getByRole("navigation");
    expect(nav.className).toMatch(/navBar/);

    // Scroll down
    Object.defineProperty(window, "scrollY", { value: 200 });
    fireEvent.scroll(window);
    expect(nav.className).toMatch(/navBarHidden/);

    // Scroll up
    Object.defineProperty(window, "scrollY", { value: 50 });
    fireEvent.scroll(window);
    expect(nav.className).not.toMatch(/navBarHidden/);
  });
});
