/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'standard'
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname
  },
  plugins: ['react-refresh'],
  rules: {
    '@typescript-eslint/no-floating-promises': true,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'space-before-function-paren': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
