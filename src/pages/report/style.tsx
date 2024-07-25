import styled from 'styled-components';

export const ReportPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const MainTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: groove;
  height: 10vh;
`;

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
`;

export const BackButtonContainer = styled.div`
  flex: 1;
  align-content: center;
`

export const ReportPageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding: 0 20px;
`

// button
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
`;

export const Button = styled.button<{ disabled?: boolean }>`
  padding: 10px 15px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#007bff')}; /* 활성화 시 파란색 */
  color: white;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')}; /* 비활성화 시 커서 변경 */
  margin-left: 10px; /* 버튼 간격 */
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#0056b3')}; /* 호버 시 색상 변경 */
  }
`;

// input
export const InputContainer = styled.div`
  margin: 15px 0;
`;

export const DateInput = styled.input`
  margin-left: 10px;
`;

export const Label = styled.label`
  margin-left: 10px;
  font-size: 18px;
`;

export const Select = styled.select`
  margin-left: 10px;
  font-size: 16px;
`;