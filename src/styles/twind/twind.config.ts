import '~/styles/fonts/index.scss';
import '~/styles/palette.scss';

import { defineConfig, install } from '@twind/core';
import { colors, fontFamily } from '~/styles/twind/theme';

import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind/base';
import { preflight } from '~/styles/twind/preflight';
import { rules } from '~/styles/twind/rules';

install(
  defineConfig({
    presets: [
      presetAutoprefix(),
      presetTailwind(),
    ],
    darkMode: 'class',
    hash: (className: string) => className,
    theme: {
      extend: {
        colors,
        fontFamily,
      },
    },
    rules,
    preflight,
  }),
);
