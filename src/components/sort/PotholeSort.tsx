import { DropdownToggle } from 'components/toggle/DropdownToggle';
import { SortComponent, SortContainer, SortTitle } from './style';

export const PotholeSort = () => {
  return (
    <SortContainer>
      <SortComponent>
        <SortTitle>Sort</SortTitle>
      </SortComponent>
      <SortComponent>
        <DropdownToggle />
      </SortComponent>
    </SortContainer>
  );
};
