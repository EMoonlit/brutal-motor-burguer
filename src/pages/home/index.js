import React, { useContext } from 'react';
import * as view from '../../views';
import * as cp from '../../components';
import MotorContext from '../../context/MotorContext';
import { MainContainer, BurguerContainer, BanerContainer } from './style';

const Home = () => {
  const { burguersList, isLoading, setCartList, cartList } = useContext(MotorContext);

  return (
    <>
    < view.Login />
    < MainContainer>
    {
      isLoading ? <cp.Loading /> :
      <>
      < BanerContainer>
       <h2>SUA FOME ACABA AQUI!</h2>
      </BanerContainer>
      < BurguerContainer >
      { burguersList.map((item, index) => <view.BurguerCard item={item} key={index} setCartList={setCartList} cartList={cartList}/> )}
      </BurguerContainer>
      </>
    };
    </MainContainer>
    < view.Footer />
    </>
  );
}

export default Home;
