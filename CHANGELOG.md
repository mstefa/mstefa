# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added
- Added changelog update requirement prior to commits in `agents.md`.
- Initialized `CHANGELOG.md`.
- Added agent skill configuration and lockfile (`.agents/`, `skills-lock.json`).


### Changed
- **Dependencies & Build Tooling**:
  - Moved `eslint` and `eslint-config-next` from `dependencies` to `devDependencies` in `package.json`.
  - Cleaned `next.config.js` by removing obsolete experimental `mdxRs` flag and commented-out loader wrappers.
  - Regenerated lockfile (`pnpm-lock.yaml`), pruning 233 unused packages.
- **Testing Configuration**:
  - Configured `passWithNoTests: true` in `vitest.config.ts` to allow the test suite to pass cleanly without failing when zero test suites remain.
- **Assets & Icons**:
  - Pruned icon barrel (`src/resources/icons.tsx`) to import and export only the 8 active icons (`chevronDown`, `email`, `github`, `link`, `linkedin`, `menu`, `paperPlane`, `twitter`).
  - Narrowed `Icons` TypeScript type in `src/components/icon/Icon.tsx` to active icon keys.
- **Documentation**:
  - Updated `docs/architecture.md` to align with the Clean Architecture layers for the portfolio and CV without blog references.
  - Updated `agents.md` directory structure to remove `data/articles/` and references to filesystem MDX reading.
  - Completed and checked off all checklist items in `docs/todo/01-remove-blog-functionality.md`.
  - Completed and checked off all checklist items in `docs/todo/02-remove-dead-legacy-files.md`.
  - Completed and checked off all checklist items in `docs/todo/03-prune-dependencies-and-clean-config.md`.
  - Completed and checked off all checklist items in `docs/todo/04-prune-unused-svg-assets.md`.

### Removed
- **Unused SVG Assets & Imports**:
  - Removed 13 unreferenced SVG assets from `src/resources/`: `arrow-left.svg`, `arrow-right.svg`, `check.svg`, `chevron-right.svg`, `chevron-up.svg`, `close.svg`, `codely.svg`, `facebook.svg`, `info.svg`, `instagram.svg`, `play.svg`, `tiktok.svg`, and `twitch.svg`.
  - Removed unused `Icon` import from `src/components/about/About.tsx`.
- **Blog & MDX Dependencies**:
  - Removed blog-specific runtime dependencies: `next-mdx-remote`, `@mdx-js/loader`, `@mdx-js/react`, `@next/mdx`, `dayjs`, `glob`, `reading-time`, `rehype-autolink-headings`, `rehype-code-titles`, `rehype-highlight`, and `rehype-slug`.
  - Removed MDX types package: `@types/mdx`.
- **ESLint Compatibility Packages**:
  - Removed obsolete ESLint compatibility wrappers: `@eslint/eslintrc` and `@eslint/js`.
- **Legacy Prototype & Template Files**:
  - Removed obsolete standalone test HTML mockup (`test.html`).
  - Removed leftover Create-React-App HTML template (`public/index.html`).
  - Removed empty placeholder skills data file (`data/skils.json`).
  - Removed commented-out icon button component and its stylesheet (`src/components/icon/InconButton.tsx`, `src/components/icon/iconButton.module.scss`).
  - Removed orphaned duplicate LinkedIn SVG asset (`src/components/socialmedia/linkedin.svg`).
  - Removed unused Next.js MDX configuration adapter (`mdx-components.tsx`).
- **Presentation Routes**:
  - Removed Next.js App Router blog pages and layout (`src/app/blog/page.tsx`, `src/app/blog/layout.tsx`, `src/app/blog/page.module.scss`).
  - Removed dynamic article routes and MDX client renderer (`src/app/blog/[slug]/page.tsx`, `src/app/blog/[slug]/MdxContent.tsx`, `src/app/blog/[slug]/slug.module.scss`).
  - Next.js build now only generates `/`, `/_not-found`, and `/cv`.
- **UI Components**:
  - Removed blog navigation bar component and stylesheet (`src/components/blogNavBar/BlogNavBar.tsx`, `src/components/blogNavBar/blogNavBar.module.scss`).
  - Removed blog header component and stylesheet (`src/components/blog-header/BlogHeader.tsx`, `src/components/blog-header/blogHeader.module.scss`).
  - Removed article card and card container components and stylesheets (`src/components/article-card/ArticleCard.tsx`, `src/components/article-card/ArticleContainer.tsx`, `src/components/article-card/articleCard.module.scss`, `src/components/article-card/articles.module.scss`).
  - Removed dead/commented-out blog navigation link from `src/components/navBar/NavBar.tsx`.
- **Data Files**:
  - Removed markdown article files from `data/articles/` (`an_example.mdx`, `ejemplo.mdx`, `solid.mdx`).
- **Domain Layer**:
  - Removed `Article`, `Frontmatter`, `Post`, and `ArticleMetadata` entities from `src/domain/Article.ts`.
- **Application Layer**:
  - Removed article application service and its unit tests (`src/application/article.service.ts`, `src/application/article.service.test.ts`).
- **Infrastructure Layer**:
  - Removed MDX file repository adapter and its unit tests (`src/infrastructure/file-managment/mdx-file-repository.ts`, `src/infrastructure/file-managment/mdx-file-repository.test.ts`).
