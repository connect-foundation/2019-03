module.exports = {
  extends: ['react-app', 'airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-props-no-spreading': 0,
    'prettier/prettier': 'error',
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'eslint/no-param-reassign': 0,
  },
};
