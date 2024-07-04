import { usePotholesStore } from 'hooks/usePotholesStore';
import { ResultContainer, ResultTitle } from './style';

export const PotholeResult = () => {
  const visiblePotholes = usePotholesStore((state) => state.visiblePotholes);

  return (
    <ResultContainer>
      <ResultTitle>포트홀 갯수 : {visiblePotholes.length}개</ResultTitle>
    </ResultContainer>
  );
};
