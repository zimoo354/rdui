import React, { forwardRef, Ref } from 'react';
import { InputFieldProps } from 'types';
import { HelpText } from '../HelpText';
import { Input } from '../Input';
import { Label } from '../Label';
import { container } from './InputField.styles';

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { label, helpText, error, variant = 'v1', ...rest }: InputFieldProps,
    forwardedRef: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={container(variant)}>
        <Label>{label}</Label>
        <Input
          variant={variant}
          invalid={!!error}
          ref={forwardedRef}
          {...rest}
        />
        {error ? (
          <HelpText invalid>{error}</HelpText>
        ) : helpText ? (
          <HelpText>{helpText}</HelpText>
        ) : null}
      </div>
    );
  }
);

export default InputField;
