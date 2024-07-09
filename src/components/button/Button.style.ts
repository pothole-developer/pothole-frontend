import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ $background: string; $color: string; $width: string }>`
  ${({ $background, $color, $width }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 16px;
    background: ${$background};
    color: ${$color};
    width: ${$width};
    height: 30px;
    border: none;
    border-radius: 2px;
  `}
`;
