import { MainTitleContainer, RightHeaderContainer, RightHeaderContentContainer } from './style';
import { AppTitle } from 'components/title/AppTitle';
import { MainTitleInfo } from 'components/title/MainTitleInfo';
import { ContactUs } from 'components/title/ContactUs';
import { ReportButton } from 'components/title/ReportButton';

export const Header = () => {
  return (
    <MainTitleContainer>
      <AppTitle />
      <MainTitleInfo />
      <RightHeaderContainer>
        <RightHeaderContentContainer>
          <ReportButton />
          <ContactUs />
        </RightHeaderContentContainer>
      </RightHeaderContainer>
    </MainTitleContainer>
  );
};
