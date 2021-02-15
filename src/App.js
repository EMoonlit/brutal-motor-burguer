import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import './App.css';
import GlobalStyle from './style/globalStyle';

function App() {
  return (
      <BrowserRouter>
        < GlobalStyle />
        < Routes />
      </BrowserRouter>
  );
}

export default App;
