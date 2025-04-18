import {
  Atoms,
  atoms,
  MarginAtoms,
  partitionAtoms,
  SizingAtoms,
} from '@papyrus-ui/styles';
import cn from 'classnames';
import { FC, ImgHTMLAttributes } from 'react';

export interface ImageProps
  extends SizingAtoms,
    MarginAtoms,
    ImgHTMLAttributes<HTMLImageElement> {
  objectFit?: Atoms['objectFit'];
}

export const Image: FC<ImageProps> = ({ alt, className, ...props }) => {
  const [atomsProps, restProps] = partitionAtoms(props);

  return (
    <img
      alt={alt}
      className={cn(atoms(atomsProps), className)}
      {...restProps}
    />
  );
};
