import { apply, css, type BaseTheme, type Rule } from '@twind/core';

export const rules: Array<Rule<BaseTheme & { extend: never }>> = [
  [
    'filled',
    css`
      font-family: theme(fontFamily.material-filled);
    `,
  ],
  ['light', `bg-primary`],
  [
    'dark',
    css`
      color-scheme: dark;
      ${apply`bg-primary`}
    `,
  ],
];
