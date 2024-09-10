import { createTheme } from '@vanilla-extract/css';

import lightMode from '../assets/themes/light-mode.json';

import { vars } from './global.css';

export const lightTheme = createTheme(vars, lightMode);
