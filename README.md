# `@azz/prettier-config`

> My personal [Prettier](https://prettier.io) config.

## Usage

**Install**:

```bash
$ npm i -D @joey-ma/formatted
```

**Edit `package.json`**:

```jsonc
{
  // ...
  "prettier": "@joey-ma/formatted",
}
```

## Additional Configurations

Copy `.vscode/settings.json` into your root directory.

```jsonc
{
  "cSpell.words": ["ianvs"],
  "css.customData": ["./.vscode/tailwindcss.json"],
  "cSpell.diagnosticLevel": "Hint",
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

add a `css.customData` key that points to the `tailwindcss.json` file **relative to the workspace root directory**.

Ref: [Adding Custom At Rules](https://www.codeconcisely.com/posts/tailwind-css-unknown-at-rules/#adding-custom-at-rules)
