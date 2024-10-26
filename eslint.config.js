import globals from 'globals'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import react from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'
import jsdoc from 'eslint-plugin-jsdoc'
import tailwind from 'eslint-plugin-tailwindcss'

// ...
// Добавить типографические компоненты (<P>, <H1>...), как в suburbAdvise/components/ui/typography.tsx
// Обновить во всех проектах (mee, mee-server), в докерах версию ноды, настроить zsh + export NVM_AUTO_USE=true
// ...

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
      // "@typescript-eslint/consistent-type-imports": [
      //   "error",
      //   { prefer: "type-imports", fixStyle: "inline-type-imports" },
      // ],
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


import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

// export default tseslint.config(
//   { ignores: ['dist'] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//     },
//   },
// )
