import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ $background: string; $color: string; $width: string; $border?: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  height: 30px;
  padding: 0px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  z-index: 1;

  ${({ $background, $color, $width, $border }) => css`
    background: ${$background};
    color: ${$color};
    width: ${$width};
    border: ${$border};
  `}
`;
