import React from 'react';
import CardStyled from './style';
import * as cp from '../../components';

const BurguerCard = ({item}) => {
  return (
    <CardStyled>
      <img src={item.thumbnail} alt={`Imagem do ${item.name}`}/>
      <h2>{item.name}</h2>
      <span>{`R$ ${item.price},00`}</span>
      <cp.Button children={'Comprar'} getEvent={ () => console.log('xablau')}/>
    </CardStyled>
  )};

export default BurguerCard;
