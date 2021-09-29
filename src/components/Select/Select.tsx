import React, { forwardRef, Ref } from 'react';
import { SelectProps } from 'types';
import { v1, v2 } from './Select.styles';

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      children,
      variant = 'v1',
      invalid = false,
      className,
      ...rest
    }: SelectProps,
    forwardedRef: Ref<HTMLSelectElement>
  ) => {
    const variants: { v1: string; v2: string } = {
      v1: v1(invalid),
      v2: v2(invalid),
    };
    return (
      <select className={variants[variant]} ref={forwardedRef} {...rest}>
        {children}
      </select>
    );
  }
);

export default Select;
