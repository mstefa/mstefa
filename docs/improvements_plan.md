# Codebase Improvements Plan

This plan addresses a set of code improvements, bugs, and documentation requirements in the repository.

## Planned Improvements

### 1. Fix Next.js 15+ Async Params Bug
* **Target File**: [src/app/blog/\[slug\]/page.tsx](file:///Users/mstefanutti/workspace/mstefa/src/app/blog/%5Bslug%5D/page.tsx)
* **Goal**: Correctly await the dynamic `params` object as a `Promise` in the page component.
* **Proposed Code Change**:
  ```typescript
  export default async function BlogsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = await getArticle(slug);
    ...
  }
  ```

### 2. Fix and Migrate ESLint Configuration
* **Target Files**:
  * [package.json](file:///Users/mstefanutti/workspace/mstefa/package.json): Update `"lint": "next lint"` to `"lint": "eslint ."`
  * `eslint.config.mjs` (New File): Add modern ESLint Flat Config wrapping Next.js and Prettier setups using `FlatCompat` to avoid circular references and configuration errors.
  * `.eslintrc.json` (Delete File)
* **Proposed `eslint.config.mjs` Content**:
  ```javascript
  import js from "@eslint/js";
  import { FlatCompat } from "@eslint/eslintrc";
  import path from "node:path";
  import { fileURLToPath } from "node:url";

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
  });

  const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "prettier"),
  ];

  export default eslintConfig;
  ```

### 3. Setup Testing Framework (Vitest)
* **Target Files**:
  * [package.json](file:///Users/mstefanutti/workspace/mstefa/package.json): Add `"test": "vitest run"` and install `vitest` dependency.
  * `vitest.config.ts` (New File): Simple configuration file for Vitest.
  * `src/infrastructure/file-managment/mdx-file-repository.test.ts` (New File): Unit tests checking slug extraction and MDX loading functions.
  * `src/application/article.service.test.ts` (New File): Unit tests checking metadata extraction, date formatting, and reading-time calculations.

### 4. Create AI Assistants Guide (`agents.md`)
* **Target File**: `agents.md` (New File in project root)
* **Goal**: Assist future AI code agents in understanding the stack, architecture, commands, and rules.

---

## Verification Plan

1. **Bug Resolution**: Running `npm run build` should complete without the `ENOENT` errors for `undefined.mdx`.
2. **Lint Verification**: Running `npm run lint` should run the new flat eslint rules over the project.
3. **Test Verification**: Running `npm run test` should run Vitest and pass all unit tests.
