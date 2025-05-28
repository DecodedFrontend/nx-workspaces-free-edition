const pluginJs = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['**/dist', 'eslint.config.cjs'],
  },
  {
    files: ['**/*.ts'],
    // Override or add rules here
    rules: {
      semi: 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      'prefer-const': 'error',
    },
  },
];
