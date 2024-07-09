/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

module.exports = {
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  bracketSpacing: true,
  bracketSameLine: true,
  endOfLine: 'auto',
  useTabs: false,
  plugins: ['prettier-plugin-tailwindcss'],
}
