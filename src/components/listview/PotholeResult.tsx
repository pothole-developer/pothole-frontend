import { ResultContainer, ResultTitle } from './style';

export const PotholeResult = ({ numPotholes }: { numPotholes: number }) => {
  return (
    <ResultContainer>
      <ResultTitle>포트홀 갯수 : {numPotholes}개</ResultTitle>
    </ResultContainer>
  );
};
