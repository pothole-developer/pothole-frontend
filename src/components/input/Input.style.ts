import styled from 'styled-components';
import { colors } from 'styles/theme';

export const ImportanceInputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledImportanceInput = styled.input`
  width: 60px;
  height: 24px;
  padding: 0 10px;
  border: 1.8px solid ${colors.mainGrey};
  border-radius: 5px;
  box-sizing: border-box;
`;

export const PersentSymbol = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-46%);
  right: 10px;
  pointer-events: none;
`;
