module.exports = {
  ignoreFiles: ['node_modules', '.nuxt'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines'
  ],
  rules: {
    indentation: [2, { baseIndentLevel: 0 }],
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'extend', 'tailwind', 'screen', 'layer', 'responsive', 'apply', 'mixin', 'if', 'include', 'function', 'return'
      ]
    }],
    'scss/at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'extend', 'tailwind', 'screen', 'layer', 'responsive', 'apply', 'mixin', 'if', 'include', 'function', 'return'
      ]
    }],
    'max-nesting-depth': null,
    'selector-max-id': null,
    'selector-max-compound-selectors': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null
  }
};
