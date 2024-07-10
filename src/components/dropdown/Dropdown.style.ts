import styled, { keyframes } from 'styled-components';
import { colors } from 'styles/theme';

export const DropdownWrapper = styled.div`
  width: fit-content;
  overflow: hidden;
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }to{
    transform: translateY(0%);
  }
`;

export const DropdownList = styled.div`
  width: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1.8px solid ${colors.mainGrey};
  border-radius: 2px;
  height: fit-content;
  list-style: none;
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
