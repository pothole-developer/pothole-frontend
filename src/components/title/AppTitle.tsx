import { AppTitleContainer } from './style';

export const AppTitle = () => {
  return (
    <AppTitleContainer>
      <h1>{import.meta.env.VITE_TITLE}</h1>
    </AppTitleContainer>
  );
};
