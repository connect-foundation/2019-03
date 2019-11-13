module.exports = {
  parserOptions: {
    ecmaVersion: 9,
  },
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    node: true,
  },
  plugins: ['import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
