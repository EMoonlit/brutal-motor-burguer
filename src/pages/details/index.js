import React, { useContext } from 'react';
import * as view from '../../views';
import * as cp from '../../components';
import { MainContainer, MediaContainer, InfoContainer } from './style';
import MotorContext from '../../context/MotorContext';

const Details = ({ match: { params: { id } } }) => {
  const { burguersList, isLoading, cartList, setCartList } = useContext(MotorContext)

  const item = burguersList[id];
  return (
    <>
      < view.Login />
        < MainContainer >
     { isLoading ? <cp.Loading /> :
      <>
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
          < cp.Button getEvent={() => setCartList([...cartList, ...[item]])}> Adicionar ao Carrinho</cp.Button>
          < cp.Button getEvent={() => {
            console.log(burguersList);        
          }} > Comprar! </cp.Button> 
          </ InfoContainer> 
      </>
    }
        </ MainContainer>
      < view.Footer />
    </>
  );
}

export default Details;
