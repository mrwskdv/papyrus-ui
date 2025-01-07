import {
  createTheme,
  createThemeContract,
  globalStyle,
} from '@vanilla-extract/css';

import darkMode from '../assets/themes/dark-mode.json';
import lightMode from '../assets/themes/light-mode.json';

/**
 * Document
 * ========
 */

/**
 * Define variables
 */

export const lightThemeTokens = { ...lightMode };

export const darkThemeTokens = { ...darkMode };

export const vars = createThemeContract(lightThemeTokens);

/**
 * Allow adding a border to an element by just adding a border-width.
 */
globalStyle('*, ::before, ::after', {
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: 'currentcolor',
});

/**
 * 1. Set default text style.
 * 2. Disable tap highlights on iOS.
 */

globalStyle('html, :host', {
  color: vars.color.neutral900, // 1
  ...vars.typography.body.md.primary.regular, // 1
  WebkitTapHighlightColor: 'transparent', // 2
});

/**
 * Inherit line-height from `html` so users can set them as a class directly on the `html` element.
 */
globalStyle('body', {
  lineHeight: 'inherit',
});

/**
 * Set focus styles.
 */
globalStyle(':focus-visible', {
  outline: 'none',
  boxShadow: vars.boxShadow.focus,
});

/**
 * Typography
 * ==========
 */

/**
 * Remove the default font size and weight for headings.
 */
globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: 'inherit',
  fontWeight: 'inherit',
});

/**
 * Ensure horizontal rules are visible by default.
 */
globalStyle('hr', {
  borderTopWidth: '1px',
});

/**
 * Reset links to optimize for opt-in styling instead of opt-out.
 */
globalStyle('a', {
  color: 'inherit',
  textDecoration: 'inherit',
});

/**
 * Forms
 * =====
 */

/**
 * Ensure labels are displayed as inline-block by default.
 */
globalStyle('label', {
  display: 'inline-block',
});

/**
 * 1. Change the font styles in all browsers.
 * 2. Reset default input styles.
 * 3. Remove default padding in all browsers.
 */
globalStyle('button, input, optgroup, select, textarea', {
  fontWeight: 'inherit', // 1
  lineHeight: 'inherit', // 1
  letterSpacing: 'inherit', // 1
  color: 'inherit', // 1
  border: 'none', // 2
  background: 'transparent', // 2
  padding: 0, // 3
});

/**
 * Set the default cursor for buttons.
 */
globalStyle('button, [role="button"]', {
  cursor: 'pointer',
});

/**
 * 1. Reset the default placeholder opacity in Firefox.
 * 2. Set the default placeholder color from themes.
 */
globalStyle('input::placeholder, textarea::placeholder', {
  opacity: 1, // 1
  color: vars.color.neutral500, // 2
});

/**
 * Ensure consistency in display and width for inputs.
 */
globalStyle('input, select, textarea', {
  display: 'block',
  width: '100%',
});

/**
 * Reset focus styles for input components.
 */
globalStyle(
  'input:not([type="checkbox"]):not([type="radio"]):focus-visible, select:focus-visible, textarea:focus-visible',
  {
    boxShadow: 'none',
  },
);

/**
 * Adjust disabled input styles.
 */
globalStyle('input:disabled, textarea:disabled, select:disabled', {
  color: vars.color.neutral900,
  opacity: 0.4,
  WebkitTextFillColor: vars.color.neutral900,
});

/**
 * Adjust placeholder styles for disabled inputs.
 */
globalStyle(
  'input:disabled::placeholder,' +
    'textarea:disabled::placeholder,' +
    'select:disabled::placeholder',
  {
    opacity: 0.4,
  },
);

/**
 * Reset components for select for all browsers.
 */
globalStyle('select', {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
});

/**
 * Prevent resizing textareas horizontally by default.
 */
globalStyle('textarea', {
  resize: 'vertical',
});

/**
 * Ensure checkboxes and radio buttons have a consistent styles components across modern browsers.
 */
globalStyle('[type=checkbox], [type=radio]', {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  display: 'inline-block',
  width: '1rem',
  height: '1rem',
  border: `1px solid ${vars.color.neutral300}`,
  lineHeight: '100%',
  verticalAlign: '-0.125em',
  backgroundColor: vars.color.neutral100,
  backgroundOrigin: 'border-box',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  transition: vars.transition.base,
  WebkitPrintColorAdjust: 'exact',
  printColorAdjust: 'exact',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  userSelect: 'none',
  cursor: 'pointer',
});

/**
 * Set cursor default for disabled and read-only inputs.
 */
globalStyle(
  '[type=checkbox]:disabled, [type=checkbox][readonly], [type=radio]:disabled, [type=radio][readonly]',
  {
    cursor: 'default',
  },
);

/**
 * Apply a consistent border radius to checkboxes.
 */
globalStyle('[type=checkbox]', {
  borderRadius: vars.borderRadius.sm,
});

/**
 * Apply a full border radius to radio buttons.
 */
globalStyle('[type=radio]', {
  borderRadius: vars.borderRadius.full,
  backgroundImage:
    "url(\"data:image/svg+xml;charset=utf-8,%3Csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='16px' height='16px'><circle cx='8' cy='8' r='8' fill='white'/%3E%3C/svg%3E\")",
  backgroundSize: 0,
});

/**
 * Style hover state for checkboxes and radio buttons.
 */
globalStyle(
  '[type=checkbox]:hover:not(:disabled):not([readonly]), [type=radio]:hover:not(:disabled):not([readonly])',
  {
    backgroundColor: vars.color.neutral200,
  },
);

/**
 * Style checked state for checkboxes and radio buttons.
 */
globalStyle('[type=checkbox]:checked, [type=radio]:checked', {
  borderColor: 'transparent',
  backgroundColor: vars.color.primary500,
});

/**
 * Add custom checkmark for checked checkboxes.
 */
globalStyle('[type=checkbox]:checked', {
  backgroundImage:
    "url(\"data:image/svg+xml;charset=utf-8,%3Csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3E%3C/svg%3E\")",
  backgroundSize: '62.5%',
});

/**
 * Add custom dot for checked radio buttons.
 */
globalStyle('[type=radio]:checked', {
  backgroundSize: '37.5%',
});

/**
 * Style checked and hovered state for checkboxes and radio buttons.
 */
globalStyle(
  '[type=checkbox]:checked:hover:not(:disabled):not([readonly]), [type=radio]:checked:hover:not(:disabled):not([readonly])',
  {
    backgroundColor: vars.color.primary400,
  },
);

/**
 * Range input styles
 */

/**
 * Ensure range inputs have a consistent styles components across modern browsers.
 */
globalStyle('[type="range"]', {
  WebkitAppearance: 'none',
  appearance: 'none',
  width: '100%',
  background: 'transparent',
  padding: '0.5rem 0',
  cursor: 'pointer',
});

/**
 * Style the track of range inputs in WebKit browsers.
 */
globalStyle('[type="range"]::-webkit-slider-runnable-track', {
  height: '0.25rem',
  borderRadius: vars.borderRadius.full,
  background: vars.color.neutral100,
  boxShadow: vars.boxShadow.inset,
});

/**
 * Style the track of range inputs in Mozilla browsers.
 */
globalStyle('[type="range"]::-moz-range-track', {
  height: '0.25rem',
  borderRadius: vars.borderRadius.full,
  background: vars.color.neutral100,
  boxShadow: vars.boxShadow.inset,
});

/**
 * Style the thumb of range inputs in WebKit browsers.
 */
globalStyle('[type="range"]::-webkit-slider-thumb', {
  WebkitAppearance: 'none',
  appearance: 'none',
  width: '0.75rem',
  height: '0.75rem',
  borderRadius: vars.borderRadius.full,
  background: vars.color.primary500,
  boxShadow: vars.boxShadow.sm,
  transition: vars.transition.base,
  marginTop: '-0.25rem',
});

/**
 * Style the thumb of range inputs in Mozilla browsers.
 */
globalStyle('[type="range"]::-moz-range-thumb', {
  width: '0.75rem',
  height: '0.75rem',
  borderRadius: vars.borderRadius.full,
  border: 'none',
  background: vars.color.primary500,
  boxShadow: vars.boxShadow.sm,
  transition: vars.transition.base,
});

/**
 * Style the thumb of range inputs in Microsoft browsers.
 */
globalStyle('[type="range"]::-ms-thumb', {
  width: '0.75rem',
  height: '0.75rem',
  borderRadius: vars.borderRadius.full,
  border: 'none',
  background: vars.color.primary500,
  boxShadow: vars.boxShadow.sm,
  transition: vars.transition.base,
});

/**
 * Style the fill of range inputs in WebKit browsers.
 */
globalStyle('[type="range"]::-webkit-slider-runnable-track', {
  height: '0.25rem',
  borderRadius: vars.borderRadius.full,
  background: vars.color.neutral100,
  boxShadow: vars.boxShadow.inset,
});

/**
 * Style the fill of range inputs in Mozilla browsers.
 */
globalStyle('[type="range"]::-moz-range-track', {
  height: '0.25rem',
  borderRadius: vars.borderRadius.full,
  background: vars.color.neutral100,
  boxShadow: vars.boxShadow.inset,
});

/**
 * Style the thumb of range inputs in Microsoft browsers.
 */
globalStyle('[type="range"]::-ms-thumb', {
  width: '0.75rem',
  height: '0.75rem',
  borderRadius: vars.borderRadius.full,
  border: 'none',
  background: vars.color.primary500,
  boxShadow: vars.boxShadow.sm,
  transition: vars.transition.base,
});

/**
 * Increase thumb size on hover for WebKit range inputs.
 */
globalStyle('[type="range"]:hover::-webkit-slider-thumb', {
  transform: 'scale(1.33)',
});

/**
 * Increase thumb size on hover for Mozilla range inputs.
 */
globalStyle('[type="range"]:hover::-moz-range-thumb', {
  transform: 'scale(1.33)',
});

/**
 * Apply focus style to WebKit range inputs.
 */
globalStyle('[type="range"]:focus-visible::-webkit-slider-thumb', {
  boxShadow: vars.boxShadow.focus,
});

/**
 * Apply focus style to Mozilla range inputs.
 */
globalStyle('[type="range"]:focus-visible::-moz-range-thumb', {
  boxShadow: vars.boxShadow.focus,
});

/**
 * Reset default opacity style for range
 */
globalStyle('[type="range"]:disabled', {
  opacity: 1,
});

/**
 * Adjust components of disabled WebKit range inputs.
 */
globalStyle('[type="range"]:disabled::-webkit-slider-thumb', {
  background: vars.color.neutral200,
  boxShadow: 'none',
  transform: 'none',
});

/**
 * Adjust components of disabled Mozilla range inputs.
 */
globalStyle('[type="range"]:disabled::-moz-range-thumb', {
  background: vars.color.neutral200,
  boxShadow: 'none',
  transform: 'none',
});

/**
 * Make sure disabled inputs don't get the pointer cursor.
 */
globalStyle(':disabled', {
  cursor: 'default',
});

/**
 * Miscellaneous
 * =============
 */

/**
 * Remove default spacing and border for lists and menus.
 */
globalStyle('ol, ul, menu', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

/**
 * Remove gaps between table borders by default.
 */
globalStyle('table', {
  borderCollapse: 'collapse',
});

/**
 * Remove the default spacing and border for appropriate components.
 */
globalStyle('blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre', {
  margin: 0,
});

/**
 * Remove default spacing and border for fieldsets.
 */
globalStyle('fieldset', {
  margin: 0,
  padding: 0,
});

/**
 * Remove default padding for dialogs.
 */
globalStyle('dialog', {
  padding: 0,
});

/**
 * 1. Make replaced components `display: block` by default.
 * 2. Add `vertical-align: middle` to align replaced components more sensibly by default.
 */
globalStyle('img, svg, video, canvas, audio, iframe, embed, object', {
  display: 'block', // 1
  verticalAlign: 'middle', // 2
});

/**
 * Constrain images and videos to the parent width and preserve their intrinsic aspect ratio.
 */
globalStyle('img, video', {
  maxWidth: '100%',
  height: 'auto',
});

/**
 * Set default font properties for images.
 */
globalStyle('img', {
  ...vars.typography.caption,
});

/**
 * Make components with the HTML hidden attribute stay hidden by default.
 */
globalStyle('[hidden]', {
  display: 'none',
});

/**
 * Define Themes
 */

export const lightTheme = createTheme(vars, lightThemeTokens);

export const darkTheme = createTheme(vars, darkThemeTokens);
