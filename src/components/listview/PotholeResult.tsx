import { usePotholesStore } from 'hooks/usePotholesStore';
import { ResultContainer, ResultTitle } from './PotholeResult.stlye';
import { Button } from 'components/button/Button';
import { colors } from 'styles/theme';
import FilterIcon from 'assets/images/filter.svg?react';

export const PotholeResult = () => {
  const visiblePotholes = usePotholesStore((state) => state.visiblePotholes);

  return (
    <ResultContainer>
      <ResultTitle>포트홀 갯수 : {visiblePotholes.length}개</ResultTitle>
      <Button onClick={() => alert('click')} background={colors.mainBlue} color={colors.mainWhite} width="100px">
        <FilterIcon />
        필터
      </Button>
    </ResultContainer>
  );
};
