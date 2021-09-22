import React, { forwardRef, Ref, AllHTMLAttributes } from 'react';
// don't forget to create your type definition
import { LabelProps, Merge } from 'types';
import { labelStyle, requiredStyle } from './Label.styles';

type Props = Merge<LabelProps, AllHTMLAttributes<HTMLLabelElement>>;

const Label = forwardRef<HTMLLabelElement, Props>(
  (
    { children, required = false, ...rest }: LabelProps,
    forwardedRef: Ref<HTMLLabelElement>
  ) => {
    return (
      <label ref={forwardedRef} className={labelStyle} {...rest}>
        {children} {required && <span className={requiredStyle}>*</span>}
      </label>
    );
  }
);

export default Label;
