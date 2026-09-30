# 03: Prune package dependencies and clean build configuration

**What to build:** Remove all blog-related dependencies, unused rehype/MDX packages, and obsolete ESLint compatibility libraries from the package manifest, move linters to devDependencies, and clean up Next.js configuration.

**Blocked by:** 01: Remove blog functionality and article infrastructure, 02: Remove dead legacy prototype files

**Status:** completed

- [x] All blog-specific dependencies (next-mdx-remote, @mdx-js/loader, @mdx-js/react, @next/mdx, dayjs, glob, reading-time, rehype-autolink-headings, rehype-code-titles, rehype-highlight, rehype-slug, @types/mdx) are removed
- [x] Obsolete ESLint compatibility packages (@eslint/eslintrc, @eslint/js) are removed
- [x] Development tools (eslint, eslint-config-next) are moved from dependencies to devDependencies
- [x] Next.js config is cleaned of dead experimental flags and commented-out loader code
- [x] Lockfile is regenerated and all verification commands (`pnpm build`, `pnpm lint`) pass cleanly
