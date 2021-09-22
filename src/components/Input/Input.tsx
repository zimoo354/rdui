import React, { forwardRef, Ref } from 'react';
import { InputProps } from 'types';
import { v1, v2 } from './Input.styles';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { variant = 'v1', invalid = false, ...rest }: InputProps,
    forwardedRef: Ref<HTMLInputElement>
  ) => {
    const variants: { v1: string; v2: string } = {
      v1: v1(invalid),
      v2: v2(invalid),
    };

    return <input className={variants[variant]} ref={forwardedRef} {...rest} />;
  }
);

export default Input;
