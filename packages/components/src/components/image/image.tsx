import {
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
    Omit<ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  htmlWidth?: number | string;
  htmlHeight?: number | string;
}

export const Image = memo<ImageProps>(
  ({ alt, className, htmlWidth, htmlHeight, ...props }) => {
    const [atomsProps, restProps] = partitionAtoms(props);

    return (
      <img
        alt={alt}
        className={cn(atoms(atomsProps), className)}
        height={htmlHeight}
        width={htmlWidth}
        {...restProps}
      />
    );
  },
);

Image.displayName = 'Image';
