import nextConfig from "eslint-config-next/core-web-vitals";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintConfig = [
  {
    ignores: [".worktrees/**", ".pnpm-store/**", "out/**", ".next/**"],
  },
  ...nextConfig,
  eslintConfigPrettier,
];

export default eslintConfig;
