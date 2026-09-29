# 06: Fix component markup bugs, styling classes, and link icons

**What to build:** Fix broken CSS classes and UI presentation issues across portfolio sections so styles apply properly, correct icons are shown for external links, and linter warnings are resolved.

**Blocked by:** 04: Prune unused SVG assets and clean icon barrel exports

**Status:** ready-for-agent

- [ ] Jobs component uses dynamic JSX expressions for company and time range CSS class names instead of literal string paths
- [ ] Dead tab focus ref and state logic in Jobs component is removed, resolving the React exhaustive-deps lint warning
- [ ] MainProject renders the GitHub icon for source repository links rather than the LinkedIn icon
- [ ] Projects component filters valid projects before mapping over them
- [ ] External links specify secure attributes (`rel="noopener noreferrer"`) and correct target names
- [ ] Project linter (`pnpm lint`) passes with zero warnings or errors
