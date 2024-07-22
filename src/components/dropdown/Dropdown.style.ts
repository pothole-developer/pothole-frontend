import styled, { keyframes } from 'styled-components';
import { colors } from 'styles/theme';

export const DropdownWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const slideDown = keyframes`
  from {
    opacity:0;
    transform: translateY(-100%);
  }to{
    opacity:1;
    transform: translateY(0%);
  }
`;

export const DropdownList = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};
  display: flex;
  flex-direction: column;
  border: 1.8px solid ${colors.mainGrey};
  border-radius: 2px;
  height: fit-content;
  box-sizing: border-box;
  margin-top: 2px;
  animation: ${slideDown} 0.5s ease;
`;

export const DropdownItem = styled.span`
  display: flex;
  align-items: center;
  height: 30px;
  padding-left: 10px;
  background: ${colors.mainWhite};
  cursor: pointer;
`;

export const DropDownPosition = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`;
