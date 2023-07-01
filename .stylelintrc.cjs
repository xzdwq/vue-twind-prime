module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-html',
    'stylelint-config-recommended-vue',
    'stylelint-config-recommended-vue/scss',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
    'at-rule-no-unknown': null,
    'no-duplicate-selectors': null,
    'no-empty-source': null,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'no-empty-source': true,
    'rule-empty-line-before': 'never',
    'block-no-empty': true,
    'scss/dollar-variable-pattern': /[a-z][a-zA-Z]+/,
    'selector-class-pattern': /[a-z][a-zA-Z]+/,
    'media-feature-range-notation': 'prefix',
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'unit-allowed-list': ['px', 'em', 'rem', 's'],
      },
    },
  ],
};
