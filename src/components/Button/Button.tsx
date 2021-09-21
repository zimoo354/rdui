import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';
import { ButtonProps, Merge } from 'types';
import { primary, link } from './Button.styles';

type Props = Merge<ButtonProps, ButtonHTMLAttributes<HTMLButtonElement>>;

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { children, variant = 'primary', ...rest }: ButtonProps,
    forwardedRef: Ref<HTMLButtonElement>
  ) => {
    const variants = {
      primary,
      link,
    };
    return (
      <button className={variants[variant]} ref={forwardedRef} {...rest}>
        {children}
      </button>
    );
  }
);

export default Button;
