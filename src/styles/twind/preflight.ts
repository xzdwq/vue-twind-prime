import { css } from '@twind/core';

export const preflight = css({
  html: {
    '@apply': 'h-full w-full text-[12px]',
  },
  body: {
    fontFamily: 'theme(fontFamily.base)',
    '@apply': 'm-0 relative h-full',
  },
  '[id=app]': {
    background: 'theme(colors.secondary)',
    '@apply': 'h-full text-2xl leading-tight',
  },
  button: {
    '@apply': 'border-none m-0 p-0 decoration-0 cursor-pointer font-base rounded inline-flex items-center text-base focus:outline-btn',
  },
  i: {
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: '1',
    letterSpacing: 'normal',
    textTransform: 'none',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
    direction: 'ltr',
    fontFamily: 'Material Icons Outline',
    fontSize: '1.5rem',
    '&::after': { content: 'attr(data-icon)' },
  },
});

