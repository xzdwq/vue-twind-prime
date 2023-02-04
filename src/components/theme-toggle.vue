<template>
  <Button class="p-button-text" @click="next()">
    <i :data-icon="icon" />
  </Button>
  <Button icon="pi pi-angle-down" class="p-button-text" @click="showTieredMenu" />
  <TieredMenu ref="themeMenu" :model="themeList" popup>
    <template #item="{ item }">
      <div class="p-1 cursor-pointer flex" @click="mode = item.className">
        <i :data-icon="item.iconClass" />
        <span class="pl-1">{{ t(item.label as string) }}</span>
      </div>
    </template>
  </TieredMenu>
</template>

<script setup lang="ts">
import { IThemeList } from '~/types/theme';

const { t } = useI18n();

const themeMenu = ref();

const showTieredMenu = (e: Event): void => themeMenu.value.toggle(e);

const mode = useColorMode<string>({
  emitAuto: true,
  storageKey: 'theme',
  modes: {
    brand: 'brand',
  },
});

const themeList: IThemeList[] = (Object.keys(EThemeScheme) as (keyof typeof EThemeScheme)[]).map((item: string) => {
  const needleName = item.toLocaleLowerCase();
  return {
    className: needleName,
    label: `theme.${needleName}`,
    iconClass:
      needleName === EThemeScheme.AUTO ? 'brightness_4' :
      needleName === EThemeScheme.LIGHT ? 'wb_sunny' :
      needleName === EThemeScheme.DARK ? 'mode_night' :
      needleName === EThemeScheme.BRAND ? 'cruelty_free' : 'auto_fix_hight',
    class: () => { return mode.value === needleName ? 'bg-primary text-white' : null },
    command: () => { mode.value = needleName },
  };
});

const { next } = useCycleList(
  themeList.map((i: IThemeList) => i.className),
  { initialValue: mode },
);

const icon = computed<string>(() => themeList.find((i) => i.className === mode.value)?.iconClass ?? 'auto_fix_hight');
</script>
