import '~/styles/prime/index.scss';
import '~/styles/twind/twind.config';

import App from '~/app.vue';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import { i18n } from '~/lang/i18n';
import { tw } from '@twind/core';

const app = createApp(App);

app.config.globalProperties.$tw = tw;

app
  .use(PrimeVue, { ripple: true })
  .use(i18n)
  .mount('#app');
