import { css } from '@emotion/css';
import { WHITE, BLUE_500, BLUE_600, GRAY_300, GRAY_500 } from '~/utils/colors';

const base = css`
  height: 36px;
  box-sizing: border-box;
  border-radius: 100px;
  padding: 0 1rem;
  transition: 200ms;
  cursor: pointer;
  font-weight: 700;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const primary = css`
  ${base}

  border: 2px solid ${BLUE_500};
  color: ${BLUE_500};
  background-color: transparent;

  &:hover {
    border-color: ${BLUE_600};
    background-color: ${BLUE_600};
    color: ${WHITE};
  }

  &:disabled {
    background-color: ${GRAY_500};
    border-color: ${GRAY_500};
    color: ${WHITE};
  }
`;

export const link = css`
  ${base}

  border: none;
  color: ${BLUE_500};
  background-color: transparent;

  &:hover {
    text-decoration: underline;
  }

  &:disabled {
    color: ${GRAY_300};

    &:hover {
      text-decoration: none;
    }
  }
`;
