import { css } from '@emotion/css';
import { BLUE_500, GRAY_300 } from '../../utils/colors';

const disabledStyle = css`
  color: ${GRAY_300};
  cursor: not-allowed;
  pointer-events: none;
`;

export const linkStyle = (disabled = false) => css`
  font-size: 1rem;
  font-weight: 500;
  font-family: sans-serif;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${disabled
    ? disabledStyle
    : css`
        color: ${BLUE_500};
      `}
`;
