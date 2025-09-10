import prettierConfig from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      prettier
    },
    rules: {
      // ⚡ Regras úteis
      "no-unused-vars": "warn",
      "no-console": "off",

      // 🚀 Prettier integrado (formatação tranquila)
      "prettier/prettier": [
        "warn",
        {
          singleQuote: true,
          semi: true,
          trailingComma: "all",
          bracketSpacing: false,
          printWidth: 100,
          tabWidth: 2,
          endOfLine: "auto"
        }
      ]
    },
    extends: [prettierConfig]
  }
];
