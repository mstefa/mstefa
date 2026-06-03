import nextConfig from "eslint-config-next/core-web-vitals";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintConfig = [
  ...nextConfig,
  eslintConfigPrettier,
];

export default eslintConfig;
