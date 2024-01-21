# `@joey-ma/formatted`

This is my personal [Prettier](https://prettier.io) config that I generally like to use.

If you have an idea on how to improve this package, please create an issue.

## Usage

**Install**:

After you have `prettier` installed, install this prettier config and related dependencies.

```bash
npm i -D @joey-ma/formatted
```

```bash
npm i -D @ianvs/prettier-plugin-sort-imports
```

```bash
npm i -D prettier-plugin-tailwindcss
```

**Edit `package.json`** to include:

```jsonc
{
  // ...
  "prettier": "@joey-ma/formatted",
  // ...
}
```

If needed, run `npm ci` and/or reload your editor window.

This should work already even if you have a basic `.eslintrc.json` such as:

```jsonc
{
  "extends": "next/core-web-vitals",
}
```

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

```jsonc
{
  "cSpell.words": ["ianvs", "clsx"],
  "css.customData": ["./.vscode/tailwindcss.json"],
  "cSpell.diagnosticLevel": "Hint",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
  ],
  "workbench.colorCustomizations": {
    "editorHint.foreground": "#ff0000",
    "editorHint.border": "#ff0000",
  },
}
```

Add a `css.customData` key that points to the `tailwindcss.json` file **relative to the workspace root directory**.

Ref: [Adding Custom At Rules](https://www.codeconcisely.com/posts/tailwind-css-unknown-at-rules/#adding-custom-at-rules)
