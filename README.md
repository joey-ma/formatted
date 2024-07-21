# `@joey-ma/formatted`

I rely on [Prettier](https://prettier.io) for formatting, and [ESLint](https://eslint.org/) for linting and catching bugs.

This is my personal preferred `prettier` config for JavaScript and TypeScript.

Listed below are instructions on how I'd set up my Next.js (my go-to framework) project, with `eslint` configured.

If you have an idea on how to improve this package, please create an issue.

**Note:** Since many of the related plugins are not ready for eslint 9 yet, I'll consider revamping my configuration later.

## Usage

### Install:

There are two general ways of installing your dependencies:

#### Option 1: using cli

You can install dependencies one by one, or all together by copying and entering the cli command below.

```bash
npm i -D eslint
            eslint-config-prettier
            eslint-plugin-prettier
            eslint-plugin-react
            eslint-plugin-tailwindcss
            prettier
            prettier-plugin-tailwindcss
            @ianvs/prettier-plugin-sort-imports
            @joey-ma/formatted
```

#### Option 2: edit your `package.json`

In addition to `eslint` and `prettier`, you can install related dependencies by editing your `package.json`'s `devDependencies` to include the following:

1. eslint-config-prettier
1. eslint-plugin-prettier
1. eslint-plugin-react
1. eslint-plugin-tailwindcss
1. @ianvs/prettier-plugin-sort-imports
1. @joey-ma/formatted

Here's an example of how it would look like:

```jsonc
// in a Next.js (with TypeScript) project
{
  // dependencies & devDependencies that came with `npx create-next-app@latest`
  "dependencies": {
    "next": "14.2.4",
    "react": "^18",
    "react-dom": "^18",
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8",
    "tailwindcss": "^3.4.4",
    "eslint": "^8",
    "eslint-config-next": "14.2.5",
    // additional config
    "@ianvs/prettier-plugin-sort-imports": "^4.3.1",
    "@joey-ma/formatted": "^0.0.12",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-react": "^7.35.0",
    "eslint-plugin-tailwindcss": "^3.17.4",
    "prettier": "^3.3.3",
  },
  "prettier": "@joey-ma/formatted",
  "type": "module",
}
```

I have them alphabetically ordered since I tend to use cli to install packages.

However, it should give you the same outcome, just in a different order, like so:

```jsonc
// in a Next.js (with TypeScript) project
{
  "dependencies": {
    "next": "14.2.4",
    "react": "^18",
    "react-dom": "^18",
  },
  "devDependencies": {
    // alphabetically ordered
    "@ianvs/prettier-plugin-sort-imports": "^4.3.1",
    "@joey-ma/formatted": "^0.0.12",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.5",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-react": "^7.35.0",
    "eslint-plugin-tailwindcss": "^3.17.4",
    "postcss": "^8",
    "prettier": "^3.3.3",
    "tailwindcss": "^3.4.6",
    "typescript": "^5.5.3",
  },
  "prettier": "@joey-ma/formatted",
  "type": "module",
}
```

Run `npm i` or `npm ci` as needed, and reload your editor window as needed.

This should work already even if you have a basic `.eslintrc.json` such as:

```jsonc
{
  "extends": "next/core-web-vitals",
}
```

### Additional Configurations

#### Configuring ESLint

Nonetheless, I like to configure my settings further & use a `.eslintrc.cjs` instead.

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

I like my code formatted and linted as I go, and with VS Code, it is pretty easy to do.

Set your "Default Formatter" to `ESLint`, with "Format On Save" checked, and set "Format On Save Mode" to `file`.

**Note:** Here we are running Prettier as if it is a linter rule. By running Prettier inside your linters, you didn’t have to set up any new infrastructure and you could re-use your editor integrations for the linters.

Reference: [Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html#docsNav).

This is my preference as this resolves most of the formatting and linter issues before running `prettier . --write` or `npx eslint --ext .jsx --ext .js .`, etc.
To me, this is like practicing shift-left relating to code quality.

#### Add scripts to your `package.json`

Don't forget to add these helpful scripts in your `package.json`.

```jsonc
{
  ...
  "scripts:" {
    ...
    "lint": "next lint", // or "eslint --ext .jsx,.js,.tsx,.ts .",
    "format": "prettier . --write"
  }
}
```

#### Adding custom at(@) rules

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

Additional comments included below:

```jsonc
{
  // removes error relating to `@tailwind` in your css files, e.g. `globals.css`
  // i.e. the "Unknown at rule @tailwind" warning
  "css.customData": ["./.vscode/tailwindcss.json"],
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true,
}
```

Last but not least, I strongly recommend using VS Code extension: Code Spell Checker.
It will by default show any incorrectly spelled words in your "Problems" tab.
If you'd prefer not to have it show in your "Problems" tab, you can configure it so that it red underline the first 2 characters of a typo instead.

```jsonc
{
  // Code Spell Checker: super useful VS Code extension
  // to help avoid typos in your code & maintain consistency
  "cSpell.words": ["ianvs"], // add additional words that are not typos
  "cSpell.diagnosticLevel": "Hint", // removes it from your "Problems" tab
  "workbench.colorCustomizations": {
    "editorHint.foreground": "#ff0000",
    "editorHint.border": "#ff0000",
  },
}
```
