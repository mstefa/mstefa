import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img {...props} />
  ),
}));

vi.mock("@/src/resources/icons", () => ({
  chevronDown: () => <svg data-testid="icon-chevronDown" />,
  email: () => <svg data-testid="icon-email" />,
  github: () => <svg data-testid="icon-github" />,
  link: () => <svg data-testid="icon-link" />,
  linkedin: () => <svg data-testid="icon-linkedin" />,
  menu: () => <svg data-testid="icon-menu" />,
  paperPlane: () => <svg data-testid="icon-paperPlane" />,
  twitter: () => <svg data-testid="icon-twitter" />,
}));
