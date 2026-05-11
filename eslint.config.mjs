import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Apostrophes in JSX prose are intentional — disable cosmetic rule
      "react/no-unescaped-entities": "off",
      // Unused vars are warnings, not hard errors
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]);

export default eslintConfig;
