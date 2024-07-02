import { MainTitleContainer } from './style';
import { AppTitle } from 'components/title/AppTitle';
import { MainTitleInfo } from 'components/title/MainTitleInfo';
import { ContactUs } from 'components/title/ContactUs';

export const Header = () => {
  return (
    <MainTitleContainer>
      <AppTitle />
      <MainTitleInfo />
      <ContactUs />
    </MainTitleContainer>
  );
};
