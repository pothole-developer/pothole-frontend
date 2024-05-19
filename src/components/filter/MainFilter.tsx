import { useState } from 'react';
import { FilterComponent, FilterMainContainer, FilterMenuContainer, FilterResultContainer, FilterTitle } from './style';
import { FilterSimpleResult } from './FilterSimpleResult';
import { FilterRangeResult } from './FilterRangeResult';

export const MainFilter = () => {
  const [area, setArea] = useState(["전체 도로", "전체 지역"]);

  let filterResult = {
    type: "해당 영역",
    results: area
  }

  const filterButtonClick = () => {
    console.log("hi")
    setArea(["없음"])
  }

  return (
  <FilterMainContainer>
    <FilterMenuContainer>
      <FilterComponent>
        <text>Filter</text>
      </FilterComponent>
      <FilterComponent>
        <img src='img/filter.png' width={'40'} height={'40'} onClick={filterButtonClick}></img>
      </FilterComponent>
      <FilterComponent>
        <button>Reset</button>
      </FilterComponent>
    </FilterMenuContainer>
    <FilterResultContainer>
      <FilterSimpleResult type={filterResult.type} results={filterResult.results} />
      <FilterRangeResult type={'중요도 범위'} start={30} end={90} />
      <FilterSimpleResult type={'처리 상태'} results={['응급 보수 완료', '정식 보수 중']} />
    </FilterResultContainer>
  </FilterMainContainer>
  );
}