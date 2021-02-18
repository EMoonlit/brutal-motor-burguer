import React, { useContext, useEffect, useState } from 'react'
import MainContainer from './style';
import Motorcontext from '../../context/MotorContext';
import * as view from '../../views';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cartList } = useContext(Motorcontext);
  useEffect(()=> {
    const sumPrices = () => {
      setTotal(cartList.reduce((total, item) => total + (item.price), 0));
      }
    sumPrices()
  }, [total, cartList])
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
      <view.Footer/>
    </MainContainer>
  )
}

export default Cart;