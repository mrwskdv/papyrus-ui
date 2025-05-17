import {
  Atoms,
  atoms,
  MarginAtoms,
  partitionAtoms,
  PositionAtoms,
  ResponsiveValue,
  RoundedAtoms,
  SizingAtoms,
} from '@papyrus-ui/style-utils';
import cn from 'classnames';
import { cloneElement, FC, ImgHTMLAttributes, ReactElement } from 'react';

export interface ImageProps
  extends PositionAtoms,
    RoundedAtoms,
    SizingAtoms,
    MarginAtoms,
    ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  display?: ResponsiveValue<'block' | 'inline-block' | 'none'>;
  objectFit?: Atoms['objectFit'];
  src: string;
  children?: ReactElement<ImgHTMLAttributes<HTMLImageElement>>;
}

export const Image: FC<ImageProps> = ({
  alt,
  className,
  children,
  ...props
}) => {
  const [atomsProps, restProps] = partitionAtoms(props);
  const classNames = cn(atoms(atomsProps), className);

  return children ? (
    cloneElement(children, { ...restProps, alt, className: classNames })
  ) : (
    <img {...restProps} alt={alt} className={classNames} />
  );
};
