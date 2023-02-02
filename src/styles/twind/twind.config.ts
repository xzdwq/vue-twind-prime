import '~/styles/fonts/index.scss';
import '~/styles/palette.scss';

import { colors, fontFamily } from '~/styles/twind/theme';
import { defineConfig, install } from '@twind/core';

import { preflight } from '~/styles/twind/preflight';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind/base';
import { rules } from '~/styles/twind/rules';

install(
  defineConfig({
    presets: [
      presetAutoprefix(),
      presetTailwind(),
    ],
    darkMode: 'class',
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
