# Guidelines for AI Coding Assistants

Welcome! This file provides essential information about the repository structure, tools, developer workflows, and rule constraints to help you pair program effectively.

## Technology Stack & Environment

* **Node.js**: `v22.x` (managed via NVM, which is lazy-loaded in the user's shell profile). Sourcing `~/.nvm/nvm.sh` is required to access `node`, `pnpm`, or `npm` in non-interactive sessions.
* **Package Manager**: **`pnpm`** (do not use `npm` or `yarn`).
* **Framework**: Next.js 16 (configured for Static Site Generation - SSG).
* **Styling**: Sass (`.scss`).
* **Linter**: ESLint 9+ with Flat Config (`eslint.config.mjs`).
* **Test Runner**: Vitest.

---

## Directory Structure & Architecture

The project is structured according to **Clean Architecture** patterns:

* **`src/domain/`**: Pure domain entities and TypeScript types. No dependencies on frameworks or libraries.
* **`src/application/`**: Services implementing business logic and use cases.
* **`src/infrastructure/`**: Implementation of adapters (such as reading JSON data from the filesystem).
* **`src/app/`**: Next.js App Router presentation layer. Note: dynamic routing parameters (`params`) are asynchronous in Next.js 15+ and must be awaited.
* **`src/components/`**: Decoupled React UI components.
* **`docs/`**: Holds architecture guidelines, documentation, and implementation plans.

---

## Developer Commands

Always run these commands with NVM sourced:

```bash
# Load NVM (if not present in the subshell PATH)
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build the project
pnpm build

# Lint the codebase
pnpm lint

# Run unit tests
pnpm test
```

---

## Source Control Constraints

* **Commit Rules**: Never commit autonomously. Always obtain explicit user confirmation before staging (`git add`) or committing (`git commit`).
* **Changelog Updates**: Whenever requested to commit changes, document the changes in the changelog (`CHANGELOG.md`) first. The item or items must be added to the changelog before committing.
* **Double-Check Protocol**: Even when requested to commit, always perform a final review first:
  1. Ensure the changelog (`CHANGELOG.md`) is updated with the changes made.
  2. Run `git status`.
  3. Show `git diff HEAD` (or cached changes).
  4. Propose the commit message for final approval.
* **Push Rules**: Ask for explicit confirmation before pushing changes to the remote repository.

