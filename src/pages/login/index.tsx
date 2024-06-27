import LoginForm from 'components/login/LoginForm.tsx';
import { AppTitle } from 'components/title/AppTitle';
import { LoginPageContainer } from './style';

export const LoginPage = () => {
  return (
    <LoginPageContainer>
      <AppTitle />
      <LoginForm />
    </LoginPageContainer>
  );
};
