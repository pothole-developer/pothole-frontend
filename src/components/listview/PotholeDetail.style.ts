import styled from 'styled-components';
import { SidebarPosition, SidebarWrapper } from './PotholeResult.stlye';
import { colors } from 'styles/theme';

export const DetailSidebarWrapper = styled(SidebarWrapper)`
  height: 100%;
  overflow: hidden;
  border-left: groove;
`;

export const DetailSidebarPosition = styled(SidebarPosition)`
  height: 100%;
  overflow: auto;
`;

export const PotholeDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px 10px;
  gap: 12px;
`;

export const CloseButtonPosition = styled.div`
  position: absolute;
  right: 180%;
  margin: 10px;
`;

export const CloseButton = styled.button`
  border: 1px solid ${colors.mainBlack};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  padding-left: 2px;

  cursor: pointer;
`;

export const MainImg = styled.img`
  border: 1px solid ${colors.mainGrey};
  height: 200px;
`;

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.mainBlack};
`;

export const StyledP = styled.p`
  margin: 4px 0 0 4px;
`;

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
  margin-left: 6px;
`;

export const HistoryImg = styled.img`
  border: 1px solid ${colors.mainGrey};
  height: 180px;
`;
