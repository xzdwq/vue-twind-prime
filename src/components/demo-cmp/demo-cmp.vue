<template>
  <div>
    <div class="flex justify-center items-center pt-4 font-semibold text(lg tertiary)">Vue 3 Vite TS Twind</div>
    <div class="flex justify-center items-center pt-4">{{ d(new Date(), 'long') }} - {{ n(100, 'currency') }}</div>
    <div class="flex justify-center items-center pt-4 font-semibold text(lg tertiary)">
      <Button>
        <i data-icon="add" />
        <span>Add data</span>
      </Button>
      <i data-icon="settings" />
      <i data-icon="settings" class="filled" />
    </div>
    <div class="flex justify-center items-center h-full pt-2">
      <div>
        <div class="flex justify-center items-center">{{ d(date, 'short') }}</div>
        <div class="items-start">
          <Calendar v-model="date" inline show-week />
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center h-full">
      <div class="[&>*]:(my-2)">
        <div v-for="item in demoList" :key="item.fontName">
          <error-boundary :key="item.fontName" stop-propagation>
            <template #boundary="{ hasError, info, error }">
              <list-item v-if="!hasError" :name="item.name" :font-name="item.fontName" />
              <list-item-error v-else :info="info" :error-msg="error" />
            </template>
          </error-boundary>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ErrorBoundary from 'vue-error-boundary';
const { d, n } = useI18n();

const date = ref<Date>(new Date());

const demoList = [
  {
    name: 'Noto Sans',
    fontName: 'notosans',
  },
  {
    name: 'Montserrat',
    fontName: 'montserrat',
  },
  {
    name: 'Segoe UI',
    fontName: 'segoe-ui',
  },
  {
    name: 'Benzin',
    fontName: 'benzin',
  },
  {
    name: '',
    fontName: 'error',
  },
];
</script>
