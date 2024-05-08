import LoginForm from 'components/login/LoginForm.tsx';
import { AppTtile } from 'components/title/AppTitle';
import { LoginPageContainer } from './style';

export const LoginPage = () => {
  return (
    <LoginPageContainer>
      <AppTtile />
      <LoginForm />
    </LoginPageContainer>
  )
};