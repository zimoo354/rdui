import { css } from '@emotion/css';
import {
  BLACK,
  BLUE_300,
  BLUE_500,
  DANGER,
  GRAY_50,
  GRAY_600,
} from '../../utils/colors';

export const inputContainer = css`
  position: relative;
  box-sizing: border-box;
`;

const base = css`
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.75rem;
  height: 40px;
  outline: none;
`;

export const v1 = (invalid: boolean) => css`
  ${base};

  border-width: 1px;
  border-style: solid;
  border-color: ${invalid ? DANGER : BLUE_500};
  color: ${invalid ? DANGER : BLACK};
  margin-bottom: 0.5rem;
  border-radius: 12px;

  &:focus {
    box-shadow: 0px 0px 4px ${BLUE_300};
  }

  &:disabled {
    background-color: ${GRAY_50};
    border: none;
  }
`;

export const v2 = (invalid: boolean) => css`
  ${base};

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

export const eyeButtonStyle = css`
  border: none;
  outline: none;
  background-color: transparent;
  position: absolute;
  right: 0;
  top: 6px;
  height: 28px;
  cursor: pointer;

  svg {
    height: 28px;
    fill: ${BLUE_500};
  }
`;

export const EyeOpen = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentcolor"
    height="32"
    width="32"
    viewBox="0 0 32 32"
  >
    <path d="M16.1 12.1c2.1 0 3.8 1.7 3.8 3.8s-1.7 3.8-3.8 3.8-3.8-1.7-3.8-3.8c0-2.1 1.7-3.8 3.8-3.8m0-1.9c-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8-2.6-5.8-5.8-5.8z" />
    <path d="M16.1 25.5c-6.1 0-11.6-3.6-14-9.2l-.2-.3.2-.4c2.4-5.6 7.9-9.2 14-9.2s11.6 3.6 14 9.2l.2.4-.2.4c-2.4 5.5-7.9 9.1-14 9.1zM4 16c3.2 6.7 11.1 9.5 17.8 6.3 2.8-1.3 5-3.6 6.3-6.3C25 9.3 17 6.5 10.4 9.6 7.6 10.9 5.3 13.2 4 16z" />
  </svg>
);

export const EyeClosed = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentcolor"
    height="32"
    width="32"
    viewBox="0 0 32 32"
  >
    <path d="M30.1 16.4l.2-.4-.2-.4C26.7 7.9 17.7 4.4 10 7.8c-.1 0-.1 0-.2.1L4.6 2.6 3.2 3.9 8 8.7l1.4 1.4 2.2 2.2 1.4 1.4 5.4 5.4 1.4 1.4 2 2 1.4 1.4 5.7 5.7 1.4-1.4-5.4-5.4c2.3-1.6 4.1-3.8 5.2-6.4zm-10.5 1.2l-5-5c.5-.2 1-.3 1.5-.3 2.1 0 3.8 1.7 3.8 3.8 0 .5-.1 1-.3 1.5zm3.9 3.8L21 19c1.6-2.7.7-6.3-2-7.9-1.8-1.1-4.1-1.1-5.9 0l-1.8-1.8c6.5-2.5 13.8.4 16.8 6.7-1 2.2-2.6 4.1-4.6 5.4zM16.1 25.7c1.8 0 3.5-.3 5.2-.9l-1.5-1.5c-6.3 1.8-13-1.2-15.8-7.1.9-1.9 2.2-3.5 3.8-4.8L6.5 10c-1.9 1.5-3.4 3.5-4.4 5.8l-.2.4.2.4c2.4 5.5 7.9 9.1 14 9.1z" />
    <path d="M10.7 14.2c-1.1 3 .4 6.3 3.4 7.4 1.3.5 2.7.5 4 0L16.5 20h-.4c-2.1 0-3.8-1.7-3.8-3.8v-.4l-1.6-1.6z" />
  </svg>
);
