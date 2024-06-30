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
  px: {
    mobile: 0,
    tablet: 4,
  },
  py: {
    mobile: 0,
    tablet: 6,
  },
  zIndex: 30,
});

export const rootSize = {
  sm: atoms({
    justifyContent: {
      mobile: 'flex-end',
      mobileLg: 'center',
    },
    overflowY: 'auto',
  }),
  md: atoms({
    justifyContent: 'center',
    overflowY: {
      mobile: 'hidden',
      tablet: 'auto',
    },
  }),
  lg: atoms({
    justifyContent: 'flex-start',
    overflowY: {
      mobile: 'hidden',
      tablet: 'auto',
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
    maxWidth: {
      mobileLg: 'sm',
    },
    roundedTop: 'xl',
    roundedBottom: {
      mobileLg: 'xl',
    },
    boxShadow: 'md',
    overflow: 'hidden',
  }),
  md: atoms({
    position: {
      mobile: 'absolute',
      tablet: 'static',
    },
    inset: 0,
    maxWidth: {
      tablet: 'lg',
    },
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
      tablet: 'hidden',
    },
  }),
  lg: atoms({
    position: {
      mobile: 'absolute',
      tablet: 'static',
    },
    inset: 0,
    maxWidth: {
      tablet: '4xl',
    },
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
      tablet: 'hidden',
    },
  }),
};
