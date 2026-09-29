# 04: Prune unused SVG assets and clean icon barrel exports

**What to build:** Remove all unused SVG icon assets from the resources bundle so only icons actually rendered across the portfolio and CV sections are bundled and exported.

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

- [ ] All 13 unreferenced SVG assets in the resources directory are deleted
- [ ] Icon barrel module only imports and exports active icons
- [ ] Unused icon import in the About component is removed
- [ ] Icon TypeScript types reflect only active icons
- [ ] All icon usages across the application continue to render properly
