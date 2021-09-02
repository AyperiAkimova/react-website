module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'no-trailing-spaces': 'off',
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'require-jsdoc': 'off',
    'semi': 'off',
    'no-unused-vars': 'warn',
    'operator-linebreak': 'off',
  },
};
