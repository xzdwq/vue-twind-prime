export interface IThemeList {
  className: string;
  label: string;
  iconClass: string;
  class?: string | null | (() => unknown);
  command?: () => unknown;
}

export enum EThemeScheme {
  AUTO = 'auto',
  LIGHT = 'light',
  DARK = 'dark',
  BRAND = 'brand',
}
