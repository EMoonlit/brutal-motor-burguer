import React, { useContext, useEffect, useState } from 'react'
import MainContainer from './style';
import Motorcontext from '../../context/MotorContext';
import * as view from '../../views';
import * as cp from '../../components';
import configureUrl from '../../services/whatsApi';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    adress: '',
  })
  const { cartList } = useContext(Motorcontext);
  useEffect(()=> {
    const sumPrices = () => {
      setTotal(cartList.reduce((total, item) => total + (item.price), 0));
      }
    sumPrices()
  }, [total, cartList])

  const sendList = () => {
    const url = configureUrl(personalInfo, cartList, total);
    window.location.href =url
  };

  return(
    <MainContainer>
      <view.Login />
      <h2>{`Total: R$ ${total},00`}</h2>
      <ul>
        {cartList && cartList.map((item, key) => {
          return(
            <li 
              key={key}
            >
              {`R$ ${item.price},00  ${item.name}`}
            </li>
          );
        }
      )}
      </ul>
      <span>{`Atenção! O valor listado, Total: R$ ${total},00, não inclui a entrega.`}</span>
      <cp.Input 
        placeholder={'Digite aqui seu nome'}
        getEvent={(e) => setPersonalInfo({ ...personalInfo, name: e })}
      />
      <cp.Input 
        placeholder={'Digite aqui seu endereço'}
        getEvent={(e) => setPersonalInfo({ ...personalInfo, adress: e })}
      />
      <cp.Button getEvent={() => sendList()}>Enviar Pedido!</cp.Button>
      <view.Footer/>
    </MainContainer>
  )
}

export default Cart;