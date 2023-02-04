import VueI18n from '@intlify/vite-plugin-vue-i18n';
import yaml from '@rollup/plugin-yaml';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 4444,
    watch: {
      usePolling: true,
    },
  },
  preview: { port: 4445 },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/],
      reactivityTransform: true,
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
      dirs: ['src/**/*', 'node_modules/primevue/**/*'],
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/**/*'],
      resolvers: [ElementPlusResolver()],
      vueTemplate: true,
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'src/lang/translation/**')],
    }),
    yaml({
      transform(data) {
        return data === null ? {} : undefined;
      },
      exclude: [path.resolve(__dirname, 'src/lang/translation/**')],
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: '[name].[hash].entry.js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: ({ name }) => {
          let extPath = '[ext]';
          if (/\.(gif|jpe?g|png|svg|tiff|bmp|ico)$/.test(name ?? '')) {
            extPath = 'images';
          }
          if (/\.css$/.test(name ?? '')) {
            extPath = 'css';
          }
          if (/\.(woff2?|ttf|eot|otf)$/.test(name ?? '')) {
            extPath = 'fonts';
          }
          return `assets/${extPath}/[name].[hash][extname]`;
        },
      },
    },
  },
});
