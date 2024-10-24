import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main/index.tsx';
import { LoginPage } from 'pages/login/index.tsx';
import ProtectedRoute from 'pages/routes/ProtectedRoute.tsx';
import { ThemeProvider } from 'styled-components';
import { colors } from 'styles/theme.ts';
import { ReportPage } from 'pages/report/index.tsx';

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <HashRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/main" element={<Main />} />
          </Route>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<LoginPage />} />
          <Route path="/report" element={<ReportPage />}/>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
