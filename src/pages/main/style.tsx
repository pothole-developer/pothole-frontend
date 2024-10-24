import styled from 'styled-components';

export const MainPageContainer = styled.div`
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

export const ListViewContainer = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 25vw;
`;

export const RightHeaderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  text-align: end;
`;

export const RightHeaderContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  padding: 5px;
`;