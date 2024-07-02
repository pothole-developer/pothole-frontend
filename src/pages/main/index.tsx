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
import { usePotholeListQuery } from 'hooks/usePotholeQuery.ts';

export const Main = () => {
  const { data, isLoading, isError } = usePotholeListQuery();

  if (data) {
    const markers = data.data.map((pothole) => ({
      latitude: pothole.lat,
      longitude: pothole.lon,
    }));
    return (
      <MainPageContainer>
        <Header />

        <MainContentContainer>
          <Map markers={markers}></Map>

          <MainContentListContainer>
            <FilterContainer>
              <MainFilter />
            </FilterContainer>
            <SortContainer>
              <PotholeSort />
            </SortContainer>
            <ListViewContainer>
              <PotholeResult numPotholes={data.data.length} />
              <PotholeListView items={data.data} />
            </ListViewContainer>
          </MainContentListContainer>
        </MainContentContainer>
      </MainPageContainer>
    );
  }

  if (isLoading) return <div>Loading</div>;

  if (isError) return <div>Error</div>;
};
