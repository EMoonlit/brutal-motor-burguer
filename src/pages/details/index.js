import React, { useContext, useEffect, useState } from 'react';
import * as view from '../../views';
import * as cp from '../../components';
import { MainContainer, MediaContainer, InfoContainer } from './style';
//import data from '../../services/data';
import MotorContext from '../../context/MotorContext';

const Details = () => {
  const { burguersList, isLoading } = useContext(MotorContext)

  const item = burguersList[0];
  return (
    <>
     { isLoading ? <cp.Loading /> :
      <>
      < view.Login />
        < MainContainer >
          < MediaContainer >
            <img src={ item.thumbnail } alt={`Imagem do ${item.name}`} />
            <span> Favoritar | Compartilhar </span>
            <span> Quantidade </span>
            <span> {`R$ ${item.price},00`} </span>
          </MediaContainer>
          < InfoContainer>
            <h1>{ item.name }</h1>
            <ul>
            { item.ingredients.map((ingredient, key) => (
              <li key={key}>{ingredient}</li>
             ))}
           </ul>
          < cp.Button getEvent={() => console.log('Add Carinho ')}> Adicionar ao Carrinho</cp.Button>
          < cp.Button getEvent={() => {
            console.log(burguersList);        
          }} > Comprar! </cp.Button> 
          </ InfoContainer> 
        </ MainContainer>
      < view.Footer />
      </>
    }
    </>
  );
}

export default Details;
