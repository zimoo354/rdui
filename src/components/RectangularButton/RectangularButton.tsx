import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';
import { RectangularButtonProps, Merge } from '../../types';
import { primary, secondary, tertiary } from './RectangularButton.styles';

type Props = Merge<
  RectangularButtonProps,
  ButtonHTMLAttributes<HTMLButtonElement>
>;

const RectangularButton = forwardRef<HTMLButtonElement, Props>(
  (
    { children, variant = 'primary', ...rest }: RectangularButtonProps,
    forwardedRef: Ref<HTMLButtonElement>
  ) => {
    const variants = {
      primary,
      secondary,
      tertiary,
    };
    return (
      <button className={variants[variant]} ref={forwardedRef} {...rest}>
        {children}
      </button>
    );
  }
);

export default RectangularButton;
