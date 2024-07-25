import styled from 'styled-components';
import { colors } from 'styles/theme';

export const FilterWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 4px 10px;
`;

export const FilterItemWrapper = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Divider = styled.div`
  width: 100%;
  border-top: 1px solid ${colors.mainGrey};
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const Dash = styled(Divider)`
  width: 10px;
`;

export const ImportanceInputBox = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
