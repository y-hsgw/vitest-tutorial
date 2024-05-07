/** @type { import("eslint").Linter.Config } */
module.exports = {
  parser: "@typescript-eslint/parser",
  root: true,
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": "error",
  },
  overrides: [
    {
      files: ["**/*.test.tsx"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      settings: {
        jest: {
          globalPackage: "vitest",
          version: 28,
        },
      },
    },
  ],
};
