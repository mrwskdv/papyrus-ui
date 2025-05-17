import { atoms } from '@papyrus-ui/style-utils';

export const root = atoms({
  position: 'sticky',
  bottom: 0,
  display: 'flex',
  align: 'center',
  gap: 4,
  py: 3.5,
  px: 4,
  zIndex: 20,
});

export const rootSize = {
  sm: '',
  md: atoms({
    borderTop: 1,
    borderColor: 'neutral100',
    bg: 'white',
  }),
  lg: atoms({
    borderTop: 1,
    borderColor: 'neutral100',
    bg: 'white',
  }),
  xl: atoms({
    borderTop: 1,
    borderColor: 'neutral100',
    bg: 'white',
  }),
};
