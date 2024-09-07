import globals from 'globals'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import react from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'
import jsdoc from 'eslint-plugin-jsdoc'
import tailwind from 'eslint-plugin-tailwindcss'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['**/build/*', '**/node_modules/*', '**/dist/*', '**/src-tauri/*'],
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
    plugins: {
      react,
      jsdoc,
    },
    rules: {
      'no-duplicate-imports': 'error',
      'jsdoc/require-description': 'warn',
    },
  },
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  ...ts.configs.strictTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  ...tailwind.configs['flat/recommended'],
  react.configs.flat.recommended,
  jsdoc.configs['flat/recommended-typescript'],
  prettier,
]
