import React, { Fragment } from 'react';
import * as cp from './components';
import * as view from './views';
import './App.css';
import GlobalStyle from './style/globalStyle';
import data from './services/data';

function App() {
  return (
    <Fragment>
      < GlobalStyle />
      <cp.Button children={ "Teste" } getEvent={ () => console.log(`Arquivo ${data}`)} />
      <cp.Input getEvent={ (e) => console.log(e)} />
      <view.BurguerCard title={'teste de envio por porps'} />
    </Fragment>
  );
}

export default App;
