module.exports = {
  extends: ['react-app', 'airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': 0,
    'prettier/prettier': 'error',
    'react/prop-types': 0,
  },
};
