import { Map } from 'components/map/Map.tsx';
import {
  FilterContainer,
  ListViewContainer,
  MainContentContainer,
  MainContentListContainer,
  MainPageContainer,
  SortContainer,
} from './style.tsx';
import { MainFilter } from 'components/filter/MainFilter.tsx';
import { PotholeSort } from 'components/sort/PotholeSort.tsx';
import { PotholeResult } from 'components/listview/PotholeResult.tsx';
import { PotholeListView } from 'components/list/PotholeListView.tsx';
import { Header } from './Header.tsx';

export const Main = () => {
  return (
    <MainPageContainer>
      <Header />

      <MainContentContainer>
        <Map></Map>

        <MainContentListContainer>
          <FilterContainer>
            <MainFilter />
          </FilterContainer>

          <SortContainer>
            <PotholeSort />
          </SortContainer>

          <ListViewContainer>
            <PotholeResult />
            <PotholeListView />
          </ListViewContainer>
        </MainContentListContainer>
      </MainContentContainer>
    </MainPageContainer>
  );
};
