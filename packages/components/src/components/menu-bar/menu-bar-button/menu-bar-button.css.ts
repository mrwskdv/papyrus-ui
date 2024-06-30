import { atoms, MIN_WIDTH, SPACING, vars } from '@papyrus-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: vars.borderRadius.md,
  textAlign: 'start',
  transition: 'base',
  margin: `${SPACING[1]} ${SPACING[0.5]}`,
});

export const rootSize = {
  sm: atoms({
    px: 1.5,
    p: 0.5,
  }),
  md: atoms({
    px: 2.5,
    py: 1.5,
  }),
  lg: atoms({
    px: 3.5,
    py: 2.5,
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

export const rootNested = style({
  minWidth: MIN_WIDTH[36],
  padding: `${SPACING[0.5]} ${SPACING[1]}`,
  margin: `${SPACING[0.5]} ${SPACING[1]}`,
});

export const rootNestedSelectedVariant = styleVariants({
  primary: {
    color: vars.color.primary500,
    background: vars.color.primary100,
    selectors: {
      '&:hover': {
        background: vars.color.primary200,
      },
      '&:active': {
        background: vars.color.primary300,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        background: 'transparent',
      },
    },
  },
  secondary: {
    color: vars.color.primary500,
    background: vars.color.primary100,
    selectors: {
      '&:hover': {
        background: vars.color.primary200,
      },
      '&:active': {
        background: vars.color.primary300,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        background: 'transparent',
      },
    },
  },
  dark: {
    color: vars.color.white,
    background: vars.color.primary500,
    selectors: {
      '&:hover': {
        background: vars.color.primary400,
      },
      '&:active': {
        background: vars.color.primary300,
      },
      '&:disabled': {
        color: vars.color.light400,
        background: 'transparent',
      },
    },
  },
});

export const rootCollapsed = style({
  justifyContent: 'center',
  flexDirection: 'column',
  minWidth: 0,
  padding: `${SPACING[1]} ${SPACING[2]}`,
  margin: `${SPACING[1]} ${SPACING[0.5]}`,
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
    color: vars.color.white,
    background: vars.color.primary500,
    selectors: {
      '&:hover': {
        background: vars.color.primary400,
      },
      '&:active': {
        background: vars.color.primary300,
      },
      '&:disabled': {
        color: vars.color.light400,
        background: 'transparent',
      },
    },
  },
});

export const startIcon = atoms({
  fontSize: 'xl',
  mx: 1,
});

export const startIconVariant = {
  primary: atoms({
    color: 'neutral500',
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

export const startIconDisabled = style({
  color: 'inherit',
});

export const label = atoms({
  display: 'block',
  fontSize: 'md',
  mx: 1,
});

export const labelSelected = atoms({
  fontWeight: 'semiBold',
});

export const labelNested = atoms({
  flex: 1,
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
  bottom: SPACING[-1],
  left: SPACING[1],
  right: SPACING[1],
  display: 'block',
  height: SPACING[1],
  borderRadius: vars.borderRadius.full,
});

export const underlineSelected = atoms({
  bg: 'primary400',
});
