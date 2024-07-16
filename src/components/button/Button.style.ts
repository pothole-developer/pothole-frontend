import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{
  $background: string;
  $color: string;
  $width: string;
  $justifyContent?: string;
  $border?: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  height: 30px;
  padding: 0px;
  border-radius: 2px;
  border: none;
  padding: 0 10px;
  gap: 4px;
  cursor: pointer;

  ${({ $background, $color, $width, $justifyContent, $border }) => css`
    background: ${$background};
    color: ${$color};
    width: ${$width};
    border: ${$border};
    justify-content: ${$justifyContent || 'center'};
  `}
`;
