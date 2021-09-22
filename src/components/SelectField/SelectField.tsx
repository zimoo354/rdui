import React, { forwardRef, Ref } from 'react';
import { SelectFieldProps } from 'types';
import { HelpText } from '../HelpText';
import { Select } from '../Select';
import { Label } from '../Label';
import { container } from './SelectField.styles';

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    { label, helpText, error, variant = 'v1', ...rest }: SelectFieldProps,
    forwardedRef: Ref<HTMLSelectElement>
  ) => {
    return (
      <div className={container}>
        <Label>{label}</Label>
        <Select
          ref={forwardedRef}
          variant={variant}
          invalid={!!error}
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

export default SelectField;
