import React, { forwardRef, Ref } from 'react';
// don't forget to create your type definition
import { AvatarProps } from 'types';
import { /* ... */ } from './Avatar.styles';

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    { children, variant = 'primary', ...rest }: AvatarProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const variants = {
      /* add your variants here */
    };
    return (
      <div ref={forwardedRef} {...rest}>
        Avatar
      </div>
    );
  }
);

export default Avatar;
