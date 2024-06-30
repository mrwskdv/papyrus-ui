import { atoms, SPACING, vars } from '@papyrus-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  display: 'flex',
  borderRadius: vars.borderRadius.md,
  alignItems: 'center',
  textAlign: 'start',
  transition: vars.transition.base,
  margin: `${SPACING[0.5]} ${SPACING[1]}`,
});

export const rootSize = {
  sm: atoms({
    minWidth: 36,
    px: 1,
    py: 0.5,
  }),
  md: atoms({
    minWidth: 40,
    p: 1.5,
  }),
  lg: atoms({
    minWidth: 44,
    p: 2.5,
  }),
};

export const rootVariant = styleVariants({
  primary: {
    color: vars.color.neutral900,
    selectors: {
      '&:hover': {
        background: vars.color.neutral100,
      },
      '&:active': {
        background: vars.color.neutral200,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        background: 'transparent',
      },
    },
  },
  secondary: {
    color: vars.color.neutral900,
    selectors: {
      '&:hover': {
        background: vars.color.neutral100,
      },
      '&:active': {
        background: vars.color.neutral200,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        background: 'transparent',
      },
    },
  },
  dark: {
    color: vars.color.white,
    selectors: {
      '&:hover': {
        background: vars.color.light300,
      },
      '&:active': {
        background: vars.color.light400,
      },
      '&:disabled': {
        color: vars.color.light400,
        background: 'transparent',
      },
    },
  },
});

export const rootSelectedVariant = styleVariants({
  primary: {},
  secondary: {
    background: vars.color.primary100,
    selectors: {
      '&:hover': {
        background: vars.color.primary200,
      },
      '&:active': {
        background: vars.color.primary300,
      },
      '&:disabled': {
        background: 'transparent',
      },
    },
  },
  dark: {
    background: vars.color.primary500,
    selectors: {
      '&:hover': {
        background: vars.color.primary400,
      },
      '&:active': {
        background: vars.color.primary300,
      },
      '&:disabled': {
        background: 'transparent',
      },
    },
  },
});

export const rootCollapsed = atoms({
  justifyContent: 'center',
  flexDirection: 'column',
  minWidth: 0,
  px: 2,
  py: 1,
});

export const rootCollapsedVariant = styleVariants({
  primary: {
    color: vars.color.neutral500,
    selectors: {
      '&:hover': {
        background: vars.color.neutral100,
      },
      '&:active': {
        background: vars.color.neutral200,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        background: 'transparent',
      },
    },
  },
  secondary: {
    color: vars.color.neutral500,
    selectors: {
      '&:hover': {
        background: vars.color.neutral100,
      },
      '&:active': {
        background: vars.color.neutral200,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        background: 'transparent',
      },
    },
  },
  dark: {
    color: vars.color.white,
    selectors: {
      '&:hover': {
        background: vars.color.light300,
      },
      '&:active': {
        background: vars.color.light400,
      },
      '&:disabled': {
        color: vars.color.light400,
        background: 'transparent',
      },
    },
  },
});

export const rootCollapsedSelectedVariant = styleVariants({
  primary: {
    color: vars.color.primary500,
    selectors: {
      '&:disabled': {
        color: vars.color.neutral300,
      },
    },
  },
  secondary: {
    color: vars.color.primary500,
    selectors: {
      '&:disabled': {
        color: vars.color.neutral300,
      },
    },
  },
  dark: {
    background: vars.color.primary500,
    selectors: {
      '&:hover': {
        background: vars.color.primary400,
      },
      '&:active': {
        background: vars.color.primary300,
      },
      '&:disabled': {
        background: 'transparent',
      },
    },
  },
});

export const indent = atoms({
  display: 'block',
});

export const startIcon = atoms({
  fontSize: 'xl',
  mx: 1,
});

export const startIconVariant = {
  primary: atoms({
    color: 'neutral900',
  }),
  secondary: atoms({
    color: 'neutral500',
  }),
  dark: atoms({
    color: 'white',
  }),
};

export const startIconSelectedVariant = styleVariants({
  primary: {
    color: vars.color.primary500,
  },
  secondary: {
    color: vars.color.primary500,
  },
  dark: {
    color: vars.color.white,
  },
});

export const startIconCollapsed = atoms({
  fontSize: '2xl',
  mb: 1,
});

export const startIconCollapsedVariant = {
  primary: atoms({
    color: 'neutral900',
  }),
  secondary: atoms({
    color: 'neutral900',
  }),
  dark: atoms({
    color: 'white',
  }),
};

export const startIconCollapsedSelectedVariant = styleVariants({
  primary: {
    color: vars.color.primary500,
  },
  secondary: {
    color: vars.color.primary500,
  },
  dark: {
    color: vars.color.white,
  },
});

export const startIconDisabled = style({
  color: 'inherit',
});

export const label = atoms({
  flex: 1,
  display: 'block',
});

export const labelSelected = atoms({
  fontWeight: 'semiBold',
});

export const labelCollapsed = style({
  fontSize: vars.fontSize.xs,
  letterSpacing: vars.letterSpacing.wide,
  fontWeight: vars.fontWeight.regular,
  lineHeight: vars.lineHeight.snug,
  textAlign: 'center',
  margin: `0 ${SPACING[1.5]}`,
});

export const endIcon = atoms({
  fontSize: 'xl',
  mx: 1,
});

export const underline = style({
  position: 'absolute',
  left: SPACING[-1],
  top: SPACING[1],
  bottom: SPACING[1],
  display: 'block',
  width: SPACING[1],
  borderRadius: vars.borderRadius.full,
});

export const underlineSelected = atoms({
  bg: 'primary400',
});
