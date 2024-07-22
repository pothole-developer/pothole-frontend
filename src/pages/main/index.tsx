import { Map } from 'components/map/Map.tsx';
import { ListViewContainer, MainContentContainer, MainPageContainer } from './style.tsx';
import { PotholeResult } from 'components/listview/PotholeResult.tsx';
import { PotholeListView } from 'components/list/PotholeListView.tsx';
import { Header } from './Header.tsx';

export const Main = () => {
  return (
    <MainPageContainer>
      <Header />

      <MainContentContainer>
        <Map></Map>

        <ListViewContainer>
          <PotholeResult />
          <PotholeListView />
        </ListViewContainer>
      </MainContentContainer>
    </MainPageContainer>
  );
};
