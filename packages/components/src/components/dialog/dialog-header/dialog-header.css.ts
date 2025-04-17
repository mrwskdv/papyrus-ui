import { atoms } from '@papyrus-ui/styles';

export const root = atoms({
  position: 'sticky',
  top: 0,
  display: 'flex',
  align: 'center',
  gap: 4,
  px: 4,
  py: 3.5,
  zIndex: 20,
});

export const rootSize = {
  sm: '',
  md: atoms({
    borderBottom: 1,
    borderColor: 'neutral100',
    bg: 'white',
  }),
  lg: atoms({
    borderBottom: 1,
    borderColor: 'neutral100',
    bg: 'white',
  }),
  xl: atoms({
    borderBottom: 1,
    borderColor: 'neutral100',
    bg: 'white',
  }),
};
