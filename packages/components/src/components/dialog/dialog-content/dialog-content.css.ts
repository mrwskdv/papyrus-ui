import { atoms } from '@papyrus-ui/styles';

export const root = atoms({
  position: 'fixed',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 'full',
  height: 'full',
  bg: 'dark500',
  zIndex: 30,
});

export const rootSize = {
  sm: atoms({
    justifyContent: 'center',
    p: 4,
    overflowY: 'auto',
  }),
  md: atoms({
    justifyContent: 'center',
    p: {
      mobile: 0,
      tablet: 4,
    },
    overflowY: {
      mobile: 'hidden',
      tablet: 'auto',
    },
  }),
  lg: atoms({
    justifyContent: 'flex-start',
    p: {
      mobile: 0,
      tablet: 4,
    },
    overflowY: {
      mobile: 'hidden',
      tablet: 'auto',
    },
  }),
  xl: atoms({
    justifyContent: 'flex-start',
    px: {
      mobile: 0,
      desktop: 12,
    },
    py: {
      mobile: 0,
      desktop: 4,
    },
    overflowY: {
      mobile: 'hidden',
      desktop: 'auto',
    },
  }),
};

export const content = atoms({
  bg: 'white',
  flex: 'none',
  display: 'flex',
  flexDirection: 'column',
  width: 'full',
});

export const contentSize = {
  sm: atoms({
    position: 'relative',
    maxWidth: 'sm',
    maxHeight: 'full',
    rounded: 'xl',
    boxShadow: 'md',
    overflow: 'hidden',
  }),
  md: atoms({
    position: {
      mobile: 'absolute',
      tablet: 'relative',
    },
    inset: 0,
    maxWidth: {
      tablet: 'lg',
    },
    height: {
      mobile: 'full',
      tablet: 'auto',
    },
    maxHeight: 'full',
    rounded: {
      tablet: 'xl',
    },
    boxShadow: 'md',
    overflowY: {
      mobile: 'auto',
      tablet: 'hidden',
    },
  }),
  lg: atoms({
    position: {
      mobile: 'absolute',
      tablet: 'relative',
    },
    inset: 0,
    maxWidth: {
      tablet: '4xl',
    },
    minHeight: 'full',
    height: {
      mobile: 'full',
      tablet: 'auto',
    },
    rounded: {
      tablet: 'xl',
    },
    boxShadow: 'md',
    overflowY: {
      mobile: 'auto',
      desktop: 'hidden',
    },
  }),
  xl: atoms({
    position: {
      mobile: 'absolute',
      desktop: 'relative',
    },
    inset: 0,
    minHeight: 'full',
    height: {
      mobile: 'full',
      desktop: 'auto',
    },
    rounded: {
      desktop: 'xl',
    },
    boxShadow: 'md',
    overflowY: {
      mobile: 'auto',
      desktop: 'hidden',
    },
  }),
};
