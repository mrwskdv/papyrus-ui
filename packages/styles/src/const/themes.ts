import hexToRgba from 'hex-to-rgba';

import { Theme } from '../types';

export const LIGHT_THEME: Theme = {
  borderRadius: {
    'xs': '0.125rem', // 2px
    'sm': '0.25rem', // 4px
    'md': '0.375rem', // 6px
    'lg': '0.5rem', // 8px
    'xl': '0.75rem', // 12px
    '2xl': '1rem', // 16px
    '3xl': '1.5rem', // 24px
    'full': '9999px',
  },

  color: {
    black: '#000000',
    white: '#ffffff',

    primary900: '#011630',
    primary800: '#022B61',
    primary700: '#034191',
    primary600: '#0456C2',
    primary500: '#056CF2',
    primary400: '#358BFB',
    primary300: '#6CAAFC',
    primary200: '#A3CAFD',
    primary100: '#DAEAFE',
    primary50: '#EDF4FF',

    accent900: '#331810',
    accent800: '#612718',
    accent700: '#92351F',
    accent600: '#C74327',
    accent500: '#FF512F',
    accent400: '#FF7A56',
    accent300: '#FF9D7E',
    accent200: '#FFBFA8',
    accent100: '#FFDFD3',
    accent50: '#FFEFE9',

    success900: '#1A2212',
    success800: '#2C3E1C',
    success700: '#3F5D26',
    success600: '#537D2F',
    success500: '#689F38',
    success400: '#87B260',
    success300: '#A5C587',
    success200: '#C3D8AE',
    success100: '#E1ECD6',
    success50: '#F0F5EA',

    warning900: '#311A0B',
    warning800: '#5E2D10',
    warning700: '#8E4010',
    warning600: '#C0540E',
    warning500: '#F46904',
    warning400: '#FE8944',
    warning300: '#FFA772',
    warning200: '#FFC5A0',
    warning100: '#FFE2CF',
    warning50: '#FFF0E7',

    danger900: '#2F130D',
    danger800: '#581C14',
    danger700: '#84221A',
    danger600: '#B22520',
    danger500: '#E22525',
    danger400: '#F0604D',
    danger300: '#FA8B77',
    danger200: '#FFB2A2',
    danger100: '#FFD9D0',
    danger50: '#FFECE7',

    neutral900: '#1b1c1c',
    neutral800: '#363838',
    neutral700: '#515454',
    neutral600: '#6d7070',
    neutral500: '#888C8C',
    neutral400: '#a2a5a5',
    neutral300: '#bbbdbd',
    neutral200: '#d5d6d6',
    neutral100: '#eeefef',
    neutral50: '#f7f7f7',

    light900: 'rgba(255, 255, 255, 0.9)',
    light800: 'rgba(255, 255, 255, 0.8)',
    light700: 'rgba(255, 255, 255, 0.7)',
    light600: 'rgba(255, 255, 255, 0.6)',
    light500: 'rgba(255, 255, 255, 0.5)',
    light400: 'rgba(255, 255, 255, 0.4)',
    light300: 'rgba(255, 255, 255, 0.3)',
    light200: 'rgba(255, 255, 255, 0.2)',
    light100: 'rgba(255, 255, 255, 0.1)',
    light50: 'rgba(255, 255, 255, 0.05)',

    dark900: 'rgba(0,0,0, 0.9)',
    dark800: 'rgba(0,0,0, 0.8)',
    dark700: 'rgba(0,0,0, 0.7)',
    dark600: 'rgba(0,0,0, 0.6)',
    dark500: 'rgba(0,0,0, 0.5)',
    dark400: 'rgba(0,0,0, 0.4)',
    dark300: 'rgba(0,0,0, 0.3)',
    dark200: 'rgba(0,0,0, 0.2)',
    dark100: 'rgba(0,0,0, 0.1)',
    dark50: 'rgba(0,0,0, 0.05)',
  },

  fontFamily: {
    primary: '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
    secondary: 'Vollkorn,Georgia,Cambria,"Times New Roman",Times,serif',
  },

  fontSize: {
    'xs': '0.75rem', // 12px
    'sm': '0.875rem', // 14px
    'md': '1rem', // 16px
    'lg': '1.125rem', // 18px
    'xl': '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.75rem', // 28px
    '4xl': '2rem', // 32px
    '5xl': '2.5rem', // 40px
    '6xl': '3rem', // 48px
  },

  fontWeight: {
    thin: '100',
    extraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  },

  letterSpacing: {
    tighter: '0',
    tight: '0.002em',
    normal: '0.004em',
    wide: '0.008em',
    wider: '0.012em',
    widest: '0.024em',
  },

  lineHeight: {
    tight: '1.112',
    snug: '1.2',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  gradient: {
    highlight:
      'linear-gradient(90deg, #FF512F 0%, #DD2476 50%, #FF512F 100%) left / 200% auto',
    highlightAlt:
      'linear-gradient(90deg, #FF512F 0%, #DD2476 50%, #FF512F 100%) right / 200% auto',
    skeleton:
      'linear-gradient(90deg, #EAEAEB 0%, #F4F5F5 99.82%, #EAEAEB 199.63%) left / 200% auto',
    skeletonAlt:
      'linear-gradient(90deg, #EAEAEB 0%, #F4F5F5 99.82%, #EAEAEB 199.63%) right / 200% auto',
  },

  boxShadow: {
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.06)',
    focus: `0 0 0 4px ${hexToRgba('#358BFB', 0.5)}`,
    focusDanger: `0 0 0 4px ${hexToRgba('#F0604D', 0.5)}`,
    focusSuccess: `0 0 0 4px ${hexToRgba('#87B260', 0.5)}`,
    inset: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },

  transition: {
    base: 'color 0.15s ease-in-out, background 0.15s ease-in-out, border-color 0.15s ease-in-out, outline-color 0.15s ease-in-out, text-decoration-color 0.15s ease-in-out, fill 0.15s ease-in-out, stroke 0.15s ease-in-out, opacity 0.15s ease-in-out, box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out, filter 0.15s ease-in-out, backdrop-filter 0.15s ease-in-out',
    fade: 'opacity 0.15s linear',
    collapse: 'max-height 0.3s ease',
  },
};
