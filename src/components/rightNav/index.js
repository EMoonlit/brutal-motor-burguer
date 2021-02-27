import React from 'react';
import { Link } from 'react-router-dom';
import './style';
import List from './style';

const RightNav = ({ isOpen }) => {
  return (
    <List isOpen={ isOpen }>
      <li>
        < Link to='/'> Sobre </Link>
      </li>
      <li>
        < Link to='/'> Contato </Link>
      </li>
      <li>
        < Link to='/cart'> Carrinho de Compras </Link>
      </li>
    </ List>
  )
};

export default RightNav;