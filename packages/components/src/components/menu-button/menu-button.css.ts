import { atoms, spacing } from '@papyrus-ui/style-utils';
import { vars } from '@papyrus-ui/theme';
import { style, styleVariants } from '@vanilla-extract/css';

export const rootDirection = {
  vertical: atoms({
    px: 1,
    py: 0.5,
  }),
  horizontal: atoms({
    flex: 1,
    px: 0.5,
    py: 1,
  }),
};

export const link = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: vars.borderRadius.sm,
  textAlign: 'start',
  transition: vars.transition.base,
  cursor: 'pointer',
});

export const linkSize = {
  sm: atoms({
    px: 1,
    py: 0.5,
  }),
  md: atoms({
    px: 1.5,
    py: 1.5,
  }),
  lg: atoms({
    px: 2.5,
    py: 3,
  }),
};

export const linkVariant = styleVariants({
  primary: {
    selectors: {
      '&:hover': {
        background: vars.color.neutral100,
      },
      '&:active': {
        background: vars.color.neutral200,
      },
      '&:disabled': {
        background: 'transparent',
      },
    },
  },
  secondary: {
    selectors: {
      '&:hover': {
        background: vars.color.neutral100,
      },
      '&:active': {
        background: vars.color.neutral200,
      },
      '&:disabled': {
        background: 'transparent',
      },
    },
  },
  ghost: {
    selectors: {
      '&:hover': {
        background: vars.color.light300,
      },
      '&:active': {
        background: vars.color.light400,
      },
      '&:disabled': {
        background: 'transparent',
      },
    },
  },
});

export const linkActiveVariant = styleVariants({
  primary: {
    background: vars.color.neutral100,
  },
  secondary: {
    background: vars.color.neutral100,
  },
  ghost: {
    background: vars.color.light300,
  },
});

export const linkSelectedVariant = styleVariants({
  primary: {},
  secondary: {},
  ghost: {
    background: vars.color.primary500,
    selectors: {
      '&:hover': {
        background: vars.color.primary400,
      },
      '&:active': {
        background: vars.color.primary300,
      },
    },
  },
});

export const linkActiveSelectedVariant = styleVariants({
  primary: {},
  secondary: {},
  ghost: {
    background: vars.color.primary400,
  },
});

export const linkDisabled = style({
  background: 'transparent',
  pointerEvents: 'none',
});

export const linkCollapsed = style({
  flexDirection: 'column',
  minWidth: 0,
  height: '3rem',
  padding: `0 ${spacing[2]}`,
});

export const indent = atoms({
  display: 'block',
});

export const icon = atoms({
  fontSize: 'xl',
  mx: 1,
});

export const iconVariant = {
  primary: atoms({
    color: 'neutral500',
  }),
  secondary: atoms({
    color: 'neutral500',
  }),
  ghost: atoms({
    color: 'white',
  }),
};

export const iconCollapsed = atoms({
  fontSize: '2xl',
  mb: 0.5,
});

export const iconCollapsedVariant = {
  primary: atoms({
    color: 'neutral900',
  }),
  secondary: atoms({
    color: 'neutral900',
  }),
  ghost: atoms({
    color: 'white',
  }),
};

export const iconSelectedVariant = styleVariants({
  primary: {
    color: vars.color.primary500,
  },
  secondary: {
    color: vars.color.primary500,
  },
  ghost: {},
});

export const iconDanger = style({
  color: vars.color.danger500,
});

export const iconDisabledVariant = styleVariants({
  primary: {
    color: vars.color.neutral300,
  },
  secondary: {
    color: vars.color.neutral300,
  },
  ghost: {
    color: vars.color.light400,
  },
});

export const label = style({
  display: 'block',
  ...vars.typography.body.md.primary.regular,
  margin: `0 ${spacing[1]}`,
});

export const labelDirection = {
  vertical: atoms({
    flex: 1,
  }),
  horizontal: '',
};

export const labelVariant = {
  primary: atoms({
    color: 'neutral900',
  }),
  secondary: atoms({
    color: 'neutral900',
  }),
  ghost: atoms({
    color: 'white',
  }),
};

export const labelSelected = style({
  ...vars.typography.body.md.primary.bold,
});

export const labelSelectedVariant = styleVariants({
  primary: {},
  secondary: {
    color: vars.color.primary500,
  },
  ghost: {},
});

export const labelCollapsed = style({
  ...vars.typography.caption,
  textAlign: 'center',
});

export const labelCollapsedVariant = {
  primary: atoms({
    color: 'neutral500',
  }),
  secondary: atoms({
    color: 'neutral500',
  }),
  ghost: atoms({
    color: 'white',
  }),
};

export const labelCollapsedSelectedVariant = styleVariants({
  primary: {
    color: vars.color.primary500,
  },
  secondary: {
    color: vars.color.primary500,
  },
  ghost: {},
});

export const labelDanger = style({
  color: vars.color.danger500,
});

export const labelDisabledVariant = styleVariants({
  primary: {
    color: vars.color.neutral300,
  },
  secondary: {
    color: vars.color.neutral300,
  },
  ghost: {
    color: vars.color.light400,
  },
});

export const endIconVariant = {
  primary: atoms({
    color: 'neutral900',
  }),
  secondary: atoms({
    color: 'neutral900',
  }),
  ghost: atoms({
    color: 'white',
  }),
};

export const underline = atoms({
  position: 'absolute',
  display: 'block',
  rounded: 'full',
  bg: 'primary500',
});

export const underlineDirection = {
  vertical: atoms({
    top: 1,
    bottom: 1,
    left: '-1',
    width: 1,
  }),
  horizontal: atoms({
    bottom: '-1',
    left: 1,
    right: 1,
    height: 1,
  }),
};

export const underlineDanger = style({
  background: vars.color.danger500,
});
