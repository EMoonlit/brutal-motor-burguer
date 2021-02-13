import React, { Fragment } from 'react';
import * as cp from './components';
import * as view from './views';
import './App.css';
import GlobalStyle from './style/globalStyle';

function App() {
  return (
    <Fragment>
      < GlobalStyle />
      <cp.Button children={ "Teste" } getEvent={ () => console.log("xablau")} />
      <cp.Input getEvent={ (e) => console.log(e)} />
      <view.BurguerCard />
    </Fragment>
  );
}

export default App;
