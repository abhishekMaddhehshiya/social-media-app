import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // This object defines custom rules or overrides for the entire config
    rules: {
      // Disable the 'no-explicit-any' rule
      "@typescript-eslint/no-explicit-any": "off",
      // You can also set it to 'warn' if you want it to be a warning instead of an error
      // "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];

export default eslintConfig;
