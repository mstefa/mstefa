# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added
- Added changelog update requirement prior to commits in `agents.md`.
- Initialized `CHANGELOG.md`.
- Added agent skill configuration and lockfile (`.agents/`, `skills-lock.json`).


### Changed
- **Testing Configuration**:
  - Configured `passWithNoTests: true` in `vitest.config.ts` to allow the test suite to pass cleanly without failing when zero test suites remain.
- **Documentation**:
  - Updated `docs/architecture.md` to align with the Clean Architecture layers for the portfolio and CV without blog references.
  - Updated `agents.md` directory structure to remove `data/articles/` and references to filesystem MDX reading.
  - Completed and checked off all checklist items in `docs/todo/01-remove-blog-functionality.md`.

### Removed
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
