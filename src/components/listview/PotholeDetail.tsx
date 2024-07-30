import { convertValueToDisplay } from 'utils/converter';
import {
  AddressInfo,
  CloseButton,
  CloseButtonPosition,
  DetailSidebarPosition,
  DetailSidebarWrapper,
  HistoryImg,
  HistoryWrapper,
  MainImg,
  PotholeDetailWrapper,
  StyledP,
  Title,
} from './PotholeDetail.style';
import { usePotholeDetailQuery } from 'hooks/usePotholeDetailQuery';
import DoubleRightArrow from 'assets/images/doublerightarrow.svg?react';
import { useEffect } from 'react';

export const PotholeDetail = ({ potholeId, closeSlidebar }: { potholeId: number; closeSlidebar: () => void }) => {
  const { data, refetch } = usePotholeDetailQuery(potholeId);

  useEffect(() => {
    refetch();
  }, [potholeId]);

  if (data) {
    return (
      <>
        <CloseButtonPosition>
          <CloseButton onClick={closeSlidebar}>
            <DoubleRightArrow />
          </CloseButton>
        </CloseButtonPosition>
        <DetailSidebarWrapper>
          <DetailSidebarPosition>
            <PotholeDetailWrapper>
              <MainImg src={data.thumbnail} />
              <AddressInfo>
                <Title>위치</Title>
                <StyledP>{data.roadName}</StyledP>
                <StyledP>위도: {data.lat}</StyledP>
                <StyledP>경도: {data.lon}</StyledP>
              </AddressInfo>
              <Title>위험도: {data.dangerous}%</Title>
              <Title>중요도: {data.importance}%</Title>
              <Title>진행도: {convertValueToDisplay(data.progressStatus)}</Title>
              <Title>작업기록</Title>
              {data.potholeHistories.map((history) => {
                return (
                  <HistoryWrapper key={history.potholeHistoryId}>
                    <Title>{convertValueToDisplay(history.progressStatus)}</Title>
                    {history.potholeHistoryImages.map((image) => (
                      <HistoryImg key={image.potholeHistoryImageId} src={image.potholeHistoryImageUrl} />
                    ))}
                  </HistoryWrapper>
                );
              })}
            </PotholeDetailWrapper>
          </DetailSidebarPosition>
        </DetailSidebarWrapper>
      </>
    );
  }
};
