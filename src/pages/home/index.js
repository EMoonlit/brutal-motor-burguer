import React, { Fragment } from 'react';
import * as cp from '../../components';
import * as view from '../../views';
import data from '../../services/data';

const Home = () => {
  return (
    <Fragment>
      < view.Login />
      <cp.Button children={ "Teste" } getEvent={ () => console.log(data.hamburgueres)} />
      <cp.Input getEvent={ (e) => console.log(e)} />
      <div style={{display: "flex", width: "95vw", backgroundColor: "white", height: "100vw", justifyItems: "center", alignItems: "space-around", flexWrap: "wrap", overflowY: "scroll" }}>
      { data.hamburgueres.map((item, index) => <view.BurguerCard item={item} key={index} /> )}
      </div>
      < view.Footer />
    </Fragment>
  );
}

export default Home;
