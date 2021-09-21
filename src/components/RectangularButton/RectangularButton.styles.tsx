import { css } from '@emotion/css';
import {
  WHITE,
  BLUE_500,
  BLUE_600,
  GRAY_500,
  BLACK,
  GRAY_800,
  BLUE_300,
} from '../../utils/colors';

const base = css`
  height: 40px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  padding: 0 2rem;
  transition: 200ms;
  cursor: pointer;
  text-transform: uppercase;
  border: none;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const primary = css`
  ${base}

  background-color: ${BLACK};
  color: ${WHITE};

  &:hover {
    background-color: ${GRAY_800};
  }

  &:disabled {
    background-color: ${GRAY_500};
  }
`;

export const secondary = css`
  ${base}

  background-color: ${BLUE_500};
  color: ${WHITE};

  &:hover {
    background-color: ${BLUE_600};
  }

  &:disabled {
    background-color: ${BLUE_300};
  }
`;

export const tertiary = css`
  ${base}

  border: 2px solid ${BLACK};
  background-color: transparent;
  color: ${BLACK};

  &:disabled {
    border-color: ${GRAY_500};
    color: ${GRAY_500};
  }
`;
