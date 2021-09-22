import React, { forwardRef, Ref, AllHTMLAttributes } from 'react';
import { HelpTextProps, Merge } from 'types';
import { helpTextStyle } from './HelpText.styles';

type Props = Merge<HelpTextProps, AllHTMLAttributes<HTMLSpanElement>>;

const HelpText = forwardRef<HTMLSpanElement, Props>(
  (
    { children, invalid = false, ...rest }: HelpTextProps,
    forwardedRef: Ref<HTMLSpanElement>
  ) => {
    return (
      <span className={helpTextStyle(invalid)} ref={forwardedRef} {...rest}>
        {children}
      </span>
    );
  }
);

export default HelpText;
