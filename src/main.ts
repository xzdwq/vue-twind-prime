import '~/styles/prime/index.scss';
import '~/styles/twind/twind.config';

import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import { createApp } from 'vue';
import App from '~/app.vue';
import { i18n } from '~/lang/i18n';
import { router } from '~/router';

export const app = createApp(App);

app
  .use(router)
  .use(PrimeVue, { ripple: true, inputStyle: 'filled' })
  .use(i18n)
  .directive('tooltip', Tooltip)
  .mount('#app');
