import { css } from '@emotion/css';

const variants = {
  v1: css`
    > label,
    > span {
      margin-left: 0.5rem;
    }
  `,
  v2: css``,
};

export const container = (variant: keyof typeof variants) => css`
  display: flex;
  flex-direction: column;

  ${variants[variant]};
`;
