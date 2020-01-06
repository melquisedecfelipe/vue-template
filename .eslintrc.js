module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:vue/base', 'plugin:prettier/recommended', 'prettier/vue'],
  plugins: ['eslint-plugin-import-helpers'],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/components/', '/services/', '/store/', '/utils/', '/image/'],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
