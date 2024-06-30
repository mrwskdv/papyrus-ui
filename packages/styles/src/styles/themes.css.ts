import { createTheme } from '@vanilla-extract/css';

import { LIGHT_THEME } from '../const';

import { vars } from './global.css';

export const lightTheme = createTheme(vars, LIGHT_THEME);
