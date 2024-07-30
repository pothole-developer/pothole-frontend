import { BackButtonContainer, MainTitleContainer } from './style';
import { MainTitleInfo } from 'components/title/MainTitleInfo';
import { ContactUs } from 'components/title/ContactUs';
import { BackButton } from 'components/button/BackButton';

export const Header = () => {
  return (
    <MainTitleContainer>
      <BackButtonContainer>
        <BackButton />
      </BackButtonContainer>
      <MainTitleInfo />
      <ContactUs />
    </MainTitleContainer>
  );
};
