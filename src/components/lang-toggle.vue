<template>
  <Button class="p-button-text" @click="toggleLocales()">
    <img :src="currentLangFlag" style="height: 18px; width: 20px" />
  </Button>
  <Button icon="pi pi-angle-down" class="p-button-text" @click="showTieredMenu" />
  <TieredMenu ref="langMenu" :model="localesList" popup>
    <template #item="{ item }">
      <div class="p-1 cursor-pointer flex">
        <img :src="item.img" style="height: 18px; width: 20px" />
        <span class="pl-1">{{ item.label }}</span>
      </div>
    </template>
  </TieredMenu>
</template>

<script setup lang="ts">
import availableLanguages from '~/lang/available-languages.yml';
import { ILocalesList } from '~/types/locales';

const { locale } = useI18n();

const langMenu = ref();

const showTieredMenu = (e: Event): void => langMenu.value.toggle(e);

const storageLocale = useStorage('locale', locale);
const availableLocales = Object.entries(availableLanguages).map(([key]) => key);
const getFlagPath = (langCode: string): string =>
  new URL(`../assets/img/flags/${langCode}.png`, import.meta.url).href;

const { next, state } = useCycleList(availableLocales);
state.value = storageLocale.value;

const localesList: ILocalesList[] = availableLocales.map((item: string) => {
  return {
    label: availableLanguages[item],
    code: item,
    img: getFlagPath(item),
    class: () => state.value === item ? 'bg-primary text-white' : null,
    command: () => toggleLocales(item),
  };
});

onMounted(async() => {
  await setLanguage(state.value);
});

const toggleLocales = async(item: string | null = null): Promise<void> => {
  next();
  if (item) state.value = item;
  locale.value = state.value;
  await setLanguage(state.value);
};

const currentLangFlag = computed<string>(
  () => localesList.find((i) => i.code === state.value)?.img ?? getFlagPath('unknown'),
);
</script>
