module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript",
    "airbnb/hooks",
    "next/core-web-vitals",
    "prettier",
  ],
  overrides: [
    {
      files: ["src/pages/**/*", "src/**/*.stories.tsx"],
      excludedFiles: "*.ts",
      rules: {
        "import/prefer-default-export": 2, // New rules for specific files, directories
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "import/prefer-default-export": "off",
    "@typescript-eslint/ban-ts-comment": 2,
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["typeLike", "enumMember"],
        format: ["PascalCase"],
      },
    ],
  },
};
