/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

export default {
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  bracketSpacing: true,
  bracketSameLine: true,
  endOfLine: 'auto',
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss'],
};