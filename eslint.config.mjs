import js from "@eslint/js";
import { configs as tseslintConfigs } from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import prettier from "eslint-config-prettier";

// Import plugin
import importPlugin from "eslint-plugin-import";
import promisePlugin from "eslint-plugin-promise";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    ignores: ["node_modules/**", "out/**", "dist/**", "build/**"],
  },
  {
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  js.configs.recommended,
  ...tseslintConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  // Import plugin recommended sets
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  promisePlugin.configs["flat/recommended"],
  prettier,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      promise: promisePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      ...reactHooks.configs.recommended.rules,
      // Import plugin base rules
      "import/order": "warn",
      "import/no-unresolved": "warn",
      "import/named": "warn",
      "import/namespace": "warn",
      "import/default": "warn",
      "import/no-duplicates": "warn",
      // Prevent extra blank lines
      "no-multiple-empty-lines": ["warn", { max: 1, maxBOF: 0, maxEOF: 1 }],
      // Promise rules
      "promise/param-names": [
        "warn",
        { resolvePattern: "^_|resolve$", rejectPattern: "^_|reject$" },
      ],
      "promise/catch-or-return": ["warn", { allowFinally: true }],
      // Prettier as lint rule (surface formatting in CI/editor)
      "prettier/prettier": [
        "warn",
        {
          semi: true,
          tabWidth: 2,
          printWidth: 100,
          singleQuote: false,
          trailingComma: "all",
          jsxBracketSameLine: false,
        },
      ],
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
