import React, { forwardRef, Ref } from 'react';
import { LinkProps } from 'types';
import { linkStyle } from './Link.styles';

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { children, disabled = false, ...rest }: LinkProps,
    forwardedRef: Ref<HTMLAnchorElement>
  ) => {
    return (
      <a ref={forwardedRef} className={linkStyle(disabled)} {...rest}>
        {children}
      </a>
    );
  }
);

export default Link;
