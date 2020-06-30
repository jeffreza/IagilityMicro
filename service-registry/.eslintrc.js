module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "linebreak-style": 0,
    'no-plusplus': 'off',
    'no-console': 'off',
    'indent': 'off',
    'max-len': 'off',
    'no-next-line':'off',
    'no-unused-vars':'off'

  },
};
