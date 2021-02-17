import React from 'react';
import * as view from '../../views';
import data from '../../services/data';
import { MainContainer, BurguerContainer, BanerContainer } from './style';

const Home = () => {
  return (
    <>
    < view.Login />
    < MainContainer>
      < BanerContainer>
       <h2>SUA FOME ACABA AQUI!</h2>
      </BanerContainer>
      < BurguerContainer >
      { data.hamburgueres.map((item, index) => <view.BurguerCard item={item} key={index} /> )}
      </BurguerContainer>
    </MainContainer>
    < view.Footer />
    </>
  );
}

export default Home;
