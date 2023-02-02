import * as twindColors from 'twind/colors';

/**
 * Font Family
 */
export const fontFamily = {
  base: 'Montserrat, Segoe UI, sans-serif, -apple-system, Arial',
  'segoe-ui': 'Segoe UI',
  montserrat: 'Montserrat',
  benzin: 'Benzin',
  // https://marella.me/material-icons/demo/
  material: 'Material Icons Outline',
  'material-filled': 'Material Icons',
};

/**
 * Colors
 */
export const colors = {
  ...twindColors,
  primary: 'var(--primary)',
  accent: 'var(--accent)',
  secondary: 'var(--secondary)',
  tertiary: 'var(--tertiary)',
  quaternary: 'var(--quaternary)',
  positive: 'var(--positive)',
  negative: 'var(--negative)',
  info: 'var(--info)',
  warning:'var(--warning)',
};
