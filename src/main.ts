import '~/styles/prime/index.scss';
import '~/styles/twind/twind.config';

import { tw } from '@twind/core';
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import { createApp } from 'vue';
import App from '~/app.vue';
import { i18n } from '~/lang/i18n';
import { router } from '~/router';

export const app = createApp(App);

app.config.globalProperties.$tw = tw;

app
  .use(router)
  .use(PrimeVue, { ripple: true })
  .use(i18n)
  .directive('tooltip', Tooltip)
  .mount('#app');
