import { css } from '@emotion/css';
import { GRAY_700, DANGER } from '../../utils/colors';

export const helpTextStyle = (invalid: boolean) => css`
  font-size: 0.875rem;
  font-family: sans-serif;
  color: ${invalid ? DANGER : GRAY_700};
`;
