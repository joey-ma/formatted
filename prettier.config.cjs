/* Docs: 
- https://prettier.io/docs/en/configuration.html
- https://github.com/trivago/prettier-plugin-sort-imports 
- https://github.com/tailwindlabs/prettier-plugin-tailwindcss */

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */

module.exports = {
  // Standard prettier options
  endOfLine: 'auto',
  singleQuote: true,
  // Since prettier 3.0, manually specifying plugins is required
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    'react',
    'next',
    '^[.]', // relative imports
    '^@components/(.*)$',
    '^@lib/(.*)$',
    '^@heroicons/(.*)$',
    '^[./]',
    '<BUILTIN_MODULES>', // Node.js built-in modules
    '<THIRD_PARTY_MODULES>', // Imports not matched by other special words or groups.
  ],
};
