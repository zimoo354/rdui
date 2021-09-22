import { css } from '@emotion/css';
import {
  BLACK,
  BLUE_300,
  BLUE_500,
  DANGER,
  GRAY_50,
  GRAY_600,
} from '../../utils/colors';

const base = css`
  box-sizing: border-box;
  padding: 0 0.75rem;
  height: 40px;
  outline: none;
  width: 100%;
`;

export const v1 = (invalid: boolean) => css`
  ${base}

  border-radius: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: ${invalid ? DANGER : BLUE_500};
  color: ${invalid ? DANGER : BLACK};
  margin-bottom: 0.5rem;

  &:focus {
    box-shadow: 0px 0px 4px ${BLUE_300};
  }

  &:disabled {
    background-color: ${GRAY_50};
    border: none;
  }
`;

export const v2 = (invalid: boolean) => css`
  ${base}

  border-width: 2px;
  border-style: solid;
  border-color: ${invalid ? DANGER : GRAY_600};
  color: ${invalid ? DANGER : BLACK};
  margin-bottom: 0.5rem;

  &:focus {
    border-color: ${invalid ? DANGER : BLUE_500};
  }

  &:disabled {
    background-color: ${GRAY_50};
    border: none;
  }
`;
