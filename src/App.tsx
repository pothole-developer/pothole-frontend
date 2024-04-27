import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main/index.tsx';

const App = () => {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
