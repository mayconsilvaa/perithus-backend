module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next"}],
    "eslint-disable-line no-console": "off",
    "default-case": 0,
    'no-console': ['error', { allow: ['log'] }],
  },
};
