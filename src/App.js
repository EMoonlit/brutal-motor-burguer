import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './context';
import Routes from './routes';
import './App.css';
import GlobalStyle from './style/globalStyle';

function App() {
  return (
    
      <Provider>
      <BrowserRouter>
      < GlobalStyle />
        < Routes />
      </BrowserRouter>
      </Provider>  

  );
}

export default App;
