# `@joey-ma/formatted`

This is my personal [Prettier](https://prettier.io) config that I generally like to use.

If you have an idea on how to improve this package, please create an issue.

## Usage

**Install**:

After you have `prettier` installed, install this prettier config and related dependencies.

```bash
npm i -D @joey-ma/formatted @ianvs/prettier-plugin-sort-imports prettier-plugin-tailwindcss
```

**`package.json`**

Edit, or run the following command, to include:

```jsonc
{
  "devDependencies": {
    "@eslint/js": "^9.6.0",
    "@ianvs/prettier-plugin-sort-imports": "^4.3.0",
    "@joey-ma/formatted": "^0.0.8",
    // came with `npx create-next-app@latest`
    "typescript": "^5.4.0",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8", 
    "tailwindcss": "^3.4.4",
    "eslint": "^8.57.0",
    "eslint-config-next": "14.2.4",
    // additional config
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.1.3",
    "eslint-plugin-react": "^7.34.3",
    "eslint-plugin-tailwindcss": "^3.17.4",
  },
  "prettier": "@joey-ma/formatted",
  "type": "module"
}
```

I have them alphabetically ordered since I tend to use cli to install packages.

```
npm i -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-tailwindcss prettier-eslint
```

Should give you the same effect as the following:

```jsonc
{
  // alphabetically ordered
	"dependencies": {
		"next": "14.2.4",
		"react": "^18",
		"react-dom": "^18"
	},
	"devDependencies": {
		"@ianvs/prettier-plugin-sort-imports": "^4.3.0",
		"@joey-ma/formatted": "^0.0.8",
		"@types/node": "^20",
		"@types/react": "^18",
		"@types/react-dom": "^18",
		"eslint": "^8.57.0",
		"eslint-config-next": "14.2.4",
		"eslint-config-prettier": "^9.1.0",
		"eslint-plugin-prettier": "^5.1.3",
		"eslint-plugin-react": "^7.34.3",
		"eslint-plugin-tailwindcss": "^3.17.4",
		"postcss": "^8",
		"tailwindcss": "^3.4.4",
		"typescript": "^5.4.0"
	},
	"prettier": "@joey-ma/formatted",
	"type": "module"
}
```

Run `npm i && npm ci` as needed, and reload your editor window.

This should work already even if you have a basic `.eslintrc.json` such as:

```jsonc
{
  "extends": "next/core-web-vitals",
}
```

However, I like my code clean, so I configure things to my liking.

```js
// .eslintrc.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'tailwindcss'],
  rules: {
    'prettier/prettier': 'error',
    indent: ['error', 2],
  },
};
```

I like my code formatted and linted as I go.
Set your default formatter to `ESLint` with `Format On Save` checked (Format On Save Mode: `file`).

## Additional Configurations

This repository includes both of the files mentioned below.

- `.vscode/settings.json`
- `.vscode/tailwindcss.json`

Create a `tailwindcss.json` file inside `.vscode` directory in the root folder of your project.

```jsonc
{
  "version": 1.1,
  "atDirectives": [
    {
      "name": "@tailwind",
      "description": "Use the @tailwind directive to insert Tailwind's `base`, `components`, `utilities`, and `screens` styles into your CSS.",
    },
    {
      "name": "@apply",
      "description": "Use @apply to inline any existing utility classes into your own custom CSS.",
    },
  ],
}
```

Copy `.vscode/settings.json` into your root directory.
Add a `css.customData` key that points to the `tailwindcss.json` file **relative to the workspace root directory**.
Ref: [Adding Custom At Rules](https://www.codeconcisely.com/posts/tailwind-css-unknown-at-rules/#adding-custom-at-rules)
Additional comments included below.

```jsonc
{
  // Code Spell Checker: super useful VS Code extension
  // to help avoid typos in your code & maintain consistency
  "cSpell.words": ["ianvs"], // add additional words that are not typos
  "cSpell.diagnosticLevel": "Hint", // removes it from your "Problems" tab
  "workbench.colorCustomizations": { // cSpell will red underline the first 2 characters of a typo
    "editorHint.foreground": "#ff0000",
    "editorHint.border": "#ff0000",
  },
  // removes error relating to `@tailwind` in your css files, e.g. `globals.css`
  // i.e. the "Unknown at rule @tailwind" warning
  "css.customData": ["./.vscode/tailwindcss.json"],
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true,
}
```

