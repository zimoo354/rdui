import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';
import { ButtonProps, Merge } from '../../types';
import { base } from './Button.styles';

type Props = Merge<ButtonProps, ButtonHTMLAttributes<HTMLButtonElement>>;

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { children, variant = 'primary', ...rest }: ButtonProps,
    forwardedRef: Ref<HTMLButtonElement>
  ) => {
    return (
      <button className={base} ref={forwardedRef} {...rest}>
        {children}
      </button>
    );
  }
);

export default Button;
