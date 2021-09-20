import { HTMLAttributes } from 'react';
export type Merge<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
}
