module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint'],
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    semi: ['error', 'always'],
    'func-names': ['error', 'never'],
    'max-len': ['error', { code: 200, ignoreUrls: true, ignoreComments: true, ignoreStrings: true }],
    'arrow-parens': ['error', 'as-needed'],
    'space-before-function-paren': ['error', 'never'],
    'vue/no-v-html': 'off',
    'import/prefer-default-export': 'off',
    'no-tabs': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'multiline-ternary': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'linebreak-style': 0,
    'import/extensions': 'off',
    'vue/v-bind-style': ['error', 'longform'],
    'vue/v-on-style': ['error', 'longform'],
    'no-plusplus': 'off',
    'vue/object-curly-spacing': ['error', 'always'],
    'no-console': ['error', { allow: ['warn', 'error'] }]
  },
  settings: {
    'import/core-modules': ['vue', 'vuex'] // these modules are included in nuxt
  },
  overrides: [
    {
      files: ['components/icon/*.vue'],
      rules: {
        'max-len': 'off'
      }
    }
  ]
};
