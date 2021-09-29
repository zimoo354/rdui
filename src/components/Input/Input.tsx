import React, { useState, forwardRef, Ref } from 'react';
import { InputProps } from 'types';
import {
  v1,
  v2,
  eyeButtonStyle,
  inputContainer,
  EyeOpen,
  EyeClosed,
} from './Input.styles';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'v1',
      type = 'text',
      invalid = false,
      className,
      ...rest
    }: InputProps,
    forwardedRef: Ref<HTMLInputElement>
  ) => {
    const [visible, setVisible] = useState<boolean>(false);

    console.log(type);

    const variants: { v1: string; v2: string } = {
      v1: v1(invalid),
      v2: v2(invalid),
    };

    const renderTogglePassword = () => {
      const isPassword = type === 'password';
      if (isPassword)
        return (
          <button
            tabIndex={-1}
            type="button"
            onClick={() => setVisible(!visible)}
            className={eyeButtonStyle}
          >
            {visible ? <EyeOpen /> : <EyeClosed />}
          </button>
        );
      return null;
    };

    const getPasswordType = () => (visible ? 'text' : 'password');

    return (
      <div className={inputContainer}>
        <input
          className={variants[variant]}
          type={type === 'password' ? getPasswordType() : type}
          ref={forwardedRef}
          {...rest}
        />
        {renderTogglePassword()}
      </div>
    );
  }
);

export default Input;
