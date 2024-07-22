import { usePotholesStore } from 'hooks/usePotholesStore';
import { ResultContainer, ResultTitle, SidebarPosition, SidebarWrapper } from './PotholeResult.stlye';
import { Button } from 'components/button/Button';
import { colors } from 'styles/theme';
import FilterIcon from 'assets/images/filter.svg?react';
import { useState } from 'react';
import { Filter } from 'components/filter/Filter';

export const PotholeResult = () => {
  const visiblePotholes = usePotholesStore((state) => state.visiblePotholes);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSlidebar = () => {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  };

  return (
    <ResultContainer>
      <ResultTitle>포트홀 갯수 : {visiblePotholes.length}개</ResultTitle>
      <Button onClick={toggleSlidebar} background={colors.mainBlue} color={colors.mainWhite} width="100px">
        <FilterIcon />
        필터
      </Button>

      {isSidebarOpen && (
        <SidebarWrapper>
          <SidebarPosition>
            <Filter />
          </SidebarPosition>
        </SidebarWrapper>
      )}
    </ResultContainer>
  );
};
