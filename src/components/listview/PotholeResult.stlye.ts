import styled, { keyframes } from 'styled-components';
import { colors } from 'styles/theme';

export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 2px;
`;

export const ResultTitle = styled.span`
  font-size: larger;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const slideIn = keyframes`
  from {
    opacity:0;
    transform: translateX(100%);
  }
  to {
    opacity:1;
    transform: translateX(0%);
  }
`;

export const SidebarWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 100%;
  width: 80%;
  height: 100%;
  margin-right: 1.5px;
`;

export const SidebarPosition = styled.div`
  width: 100%;
  position: absolute;
  background: ${colors.mainWhite};
  animation: ${slideIn} ease 0.3s;
  padding: 10px 0px;
  z-index: 1;
`;
