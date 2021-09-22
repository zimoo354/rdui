import { HTMLAttributes } from 'react';
export type Merge<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'link';
}

export interface RectangularButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  variant?: 'v1' | 'v2';
  invalid?: boolean;
}
export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  variant?: 'v1' | 'v2';
  invalid?: boolean;
}

export interface InputFieldProps extends HTMLAttributes<HTMLInputElement> {
  variant?: 'v1' | 'v2';
  label: string;
  helpText?: string;
  error?: string;
}

export interface SelectFieldProps extends HTMLAttributes<HTMLSelectElement> {
  variant?: 'v1' | 'v2';
  label: string;
  helpText?: string;
  error?: string;
}

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export interface HelpTextProps extends HTMLAttributes<HTMLSpanElement> {
  invalid?: boolean;
}

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
}
