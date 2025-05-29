import type { Config } from 'tailwindcss';

export const theme: Config['theme'] = {
  fontFamily: {
    sans: [
      'Source Sans 3',
      'system-ui',
      'Segoe UI',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
    ],
    serif: [
      'Vollkorn',
      'system-ui',
      'Segoe UI',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
    ],
  },
  extend: {
    colors: {
      primary: {
        900: '#011630',
        800: '#022B61',
        700: '#034191',
        600: '#0456C2',
        500: '#056CF2',
        400: '#3789F5',
        300: '#69A7F7',
        200: '#9BC4FA',
        100: '#CDE2FC',
        50: '#E6F0FE',
      },
      secondary: {
        900: '#331009',
        800: '#662013',
        700: '#99311C',
        600: '#CC4126',
        500: '#FF512F',
        400: '#FF7459',
        300: '#FF9782',
        200: '#FFB9AC',
        100: '#FFDCD5',
        50: '#FFEEEA',
      },
      info: {
        900: '#001E28',
        800: '#003C50',
        700: '#005A77',
        600: '#00789F',
        500: '#0096C7',
        400: '#33ABD2',
        300: '#66C0DD',
        200: '#99D5E9',
        100: '#CCEAF4',
        50: '#E6F5F9',
      },
      success: {
        900: '#0C1F06',
        800: '#183E0B',
        700: '#245E11',
        600: '#307D16',
        500: '#3C9C1C',
        400: '#63B049',
        300: '#7CC78F',
        200: '#A8DAB4',
        100: '#D3ECDA',
        50: '#E9F6EC',
      },
      warning: {
        900: '#311501',
        800: '#622A02',
        700: '#923F02',
        600: '#C35403',
        500: '#F46904',
        400: '#F68736',
        300: '#F8A568',
        200: '#FBC39B',
        100: '#FDE1CD',
        50: '#FEF0E6',
      },
      danger: {
        900: '#2D0707',
        800: '#5A0F0F',
        700: '#881616',
        600: '#B51E1E',
        500: '#E22525',
        400: '#E85151',
        300: '#EE7C7C',
        200: '#F3A8A8',
        100: '#F9D3D3',
        50: '#FCE9E9',
      },
      neutral: {
        900: '#1B1C1C',
        800: '#363838',
        700: '#515454',
        600: '#6D7070',
        500: '#888C8C',
        400: '#A2A5A5',
        300: '#BBBDBD',
        200: '#D5D6D6',
        100: '#EEEFEF',
        50: '#F7F7F7',
      },
      light: {
        900: '#FFFFFFE6',
        800: '#FFFFFFCC',
        700: '#FFFFFFB3',
        600: '#FFFFFF99',
        500: '#FFFFFF80',
        400: '#FFFFFF66',
        300: '#FFFFFF4D',
        200: '#FFFFFF33',
        100: '#FFFFFF1A',
        50: '#FFFFFF0D',
      },
      dark: {
        900: '#000000E6',
        800: '#000000CC',
        700: '#000000B3',
        600: '#00000099',
        500: '#00000080',
        400: '#00000066',
        300: '#0000004D',
        200: '#00000033',
        100: '#0000001A',
        50: '#0000000D',
      },
      disabled: '#16161766',
    },
    fontSize: {
      // Headings - Primary
      'h1-primary-desktop': [
        '3rem',
        {
          lineHeight: '1.112',
          fontWeight: '800',
          letterSpacing: '0.004em',
        },
      ],
      'h1-primary-mobile': [
        '2.25rem',
        {
          lineHeight: '1.112',
          fontWeight: '800',
          letterSpacing: '0.008em',
        },
      ],
      'h2-primary-desktop': [
        '1.75rem',
        {
          lineHeight: '1.112',
          fontWeight: '600',
          letterSpacing: '0.008em',
        },
      ],
      'h2-primary-mobile': [
        '1.5rem',
        {
          lineHeight: '1.112',
          fontWeight: '600',
          letterSpacing: '0.012em',
        },
      ],
      'h3-primary': [
        '1.25rem',
        {
          lineHeight: '1.112',
          fontWeight: '600',
          letterSpacing: '0.012em',
        },
      ],
      'h4-primary': [
        '1.125rem',
        {
          lineHeight: '1.112',
          fontWeight: '600',
          letterSpacing: '0.012em',
        },
      ],
      'h5-primary': [
        '1rem',
        {
          lineHeight: '1.112',
          fontWeight: '600',
          letterSpacing: '0.012em',
        },
      ],
      'h6-primary': [
        '0.875rem',
        {
          lineHeight: '1.112',
          fontWeight: '600',
          letterSpacing: '0.024em',
        },
      ],
      // Headings - Secondary
      'h1-secondary-desktop': [
        '3rem',
        {
          lineHeight: '1.112',
          fontWeight: '500',
          letterSpacing: '0.004em',
        },
      ],
      'h1-secondary-mobile': [
        '2.25rem',
        {
          lineHeight: '1.112',
          fontWeight: '500',
          letterSpacing: '0.008em',
        },
      ],
      'h2-secondary-desktop': [
        '1.75rem',
        {
          lineHeight: '1.112',
          fontWeight: '700',
          letterSpacing: '0.008em',
        },
      ],
      'h2-secondary-mobile': [
        '1.5rem',
        {
          lineHeight: '1.112',
          fontWeight: '700',
          letterSpacing: '0.008em',
        },
      ],
      'h3-secondary': [
        '1.25rem',
        {
          lineHeight: '1.112',
          fontWeight: '700',
          letterSpacing: '0.012em',
        },
      ],
      'h4-secondary': [
        '1.125rem',
        {
          lineHeight: '1.112',
          fontWeight: '700',
          letterSpacing: '0.012em',
        },
      ],
      'h5-secondary': [
        '1rem',
        {
          lineHeight: '1.112',
          fontWeight: '700',
          letterSpacing: '0.012em',
        },
      ],
      'h6-secondary': [
        '0.875rem',
        {
          lineHeight: '1.112',
          fontWeight: '700',
          letterSpacing: '0.024em',
        },
      ],
      // Body styles
      'body-md-primary': [
        '1rem',
        {
          lineHeight: '1.5',
          fontWeight: '400',
          letterSpacing: '0.012em',
        },
      ],
      'body-md-primary-bold': [
        '1rem',
        {
          lineHeight: '1.5',
          fontWeight: '600',
          letterSpacing: '0.012em',
        },
      ],
      'body-md-secondary': [
        '1rem',
        {
          lineHeight: '1.5',
          fontWeight: '400',
          letterSpacing: '0.008em',
        },
      ],
      'body-md-secondary-bold': [
        '1rem',
        {
          lineHeight: '1.5',
          fontWeight: '600',
          letterSpacing: '0.008em',
        },
      ],
      'body-sm-primary': [
        '0.875rem',
        {
          lineHeight: '1.5',
          fontWeight: '400',
          letterSpacing: '0.012em',
        },
      ],
      'body-sm-primary-bold': [
        '0.875rem',
        {
          lineHeight: '1.5',
          fontWeight: '600',
          letterSpacing: '0.012em',
        },
      ],
      'body-sm-secondary': [
        '0.875rem',
        {
          lineHeight: '1.5',
          fontWeight: '400',
          letterSpacing: '0.008em',
        },
      ],
      'body-sm-secondary-bold': [
        '0.875rem',
        {
          lineHeight: '1.5',
          fontWeight: '600',
          letterSpacing: '0.008em',
        },
      ],
      // Button and other styles
      'button': [
        '0.875rem',
        {
          lineHeight: '1',
          fontWeight: '600',
          letterSpacing: '0.024em',
        },
      ],
      'caption': [
        '0.75rem',
        {
          lineHeight: '1.2',
          fontWeight: '400',
          letterSpacing: '0.024em',
        },
      ],
      'label': [
        '1rem',
        {
          lineHeight: '1.2',
          fontWeight: '600',
          letterSpacing: '0.024em',
        },
      ],
    },
    borderRadius: {
      button: '0.375rem',
      tag: '0.25rem',
    },
  },
};
