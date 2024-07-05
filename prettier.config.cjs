/**
 * @see https://prettier.io/docs/en/configuration.html
 * @see https://github.com/trivago/prettier-plugin-sort-imports
 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss
//  * @type {import("prettier").Config}
 * @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */

module.exports = {
  // standard prettier options
  endOfLine: 'auto',
  singleQuote: true,
  // since prettier 3.0, manually specifying plugins is required
  plugins: [
    require('@ianvs/prettier-plugin-sort-imports'),
    import('prettier-plugin-tailwindcss'),
  ],
  importOrder: [
    '<TYPES>^(node:)',
    '<TYPES>',
    '<TYPES>^[.]',
    'react',
    'next',
    '<BUILT_IN_MODULES>', // Node.js built-in modules
    '<THIRD_PARTY_MODULES>', // imports not matched by other special words or groups.
    '^(@api|@assets@components|@lib|@ui|)(/.*)$',
    '^[.]', // relative imports
    '^(?!.*[.]css$)[./].*$', // place css files at the bottom of the list of imports
    '.css$',
  ],
  // ensure that the class sorting takes into consideration any of your project's Tailwind customizations
  // comment or modify next line if file name or location of tailwind config file has changed (e.g., here it is changed from `.js` to `.ts`)
  tailwindConfig: 'tailwind.config.ts',
};
