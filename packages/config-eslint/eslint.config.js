import eslint from '@eslint/js'
import pluginQuery from '@tanstack/eslint-plugin-query'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import _import from 'eslint-plugin-import'
import jsdoc from 'eslint-plugin-jsdoc'
import react from 'eslint-plugin-react'
import tailwind from 'eslint-plugin-tailwindcss'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import hooks from 'eslint-plugin-react-hooks'

export default tseslint.config([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['**/build/*', '**/node_modules/*', '**/dist/*', '**/src-tauri/*'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...tailwind.configs['flat/recommended'],
  ...pluginQuery.configs['flat/recommended'],
  react.configs.flat.recommended,
  jsdoc.configs['flat/recommended-typescript'],
  // _import.flatConfigs.recommended,

  {
    plugins: {
      import: _import,
      prettier: prettier,
      'react-hooks': hooks,
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
    },
    rules: {
      ...hooks.configs.recommended.rules,
    },
  },

  // other ...
  prettier,
  {
    settings: {
      tailwindcss: {
        callees: [
          'animate-none',
          'animate-spin',
          'animate-ping',
          'animate-pulse',
          'animate-bounce',
        ],
      },
    },
    rules: {
      'jsdoc/require-jsdoc': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'with-single-extends' },
      ],

      'import/order': [
        'warn',
        {
          groups: [
            'type',
            'builtin',
            'object',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '~/**',
              group: 'external',
              position: 'after',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
])
