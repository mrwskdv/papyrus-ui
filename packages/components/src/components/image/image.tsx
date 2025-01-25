import {
  Atoms,
  atoms,
  MarginAtoms,
  partitionAtoms,
  SizingAtoms,
} from '@papyrus-ui/styles';
import cn from 'classnames';
import { ImgHTMLAttributes, memo } from 'react';

export interface ImageProps
  extends SizingAtoms,
    MarginAtoms,
    ImgHTMLAttributes<HTMLImageElement> {
  objectFit?: Atoms['objectFit'];
}

export const Image = memo<ImageProps>(({ alt, className, ...props }) => {
  const [atomsProps, restProps] = partitionAtoms(props);

  return (
    <img
      alt={alt}
      className={cn(atoms(atomsProps), className)}
      {...restProps}
    />
  );
});

Image.displayName = 'Image';
