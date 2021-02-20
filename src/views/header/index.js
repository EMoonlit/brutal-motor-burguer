import React from 'react';
import { Link } from 'react-router-dom';
import Container from './style';

const Login = ({item}) => {
  return (
    < Container>
      <nav>
      < Link to='/'>
        <h1> Brutal MotorBurger!</h1>
        <span>Brutalize sua Fome</span>
      </Link>
        < Link to='/'> Sobre </Link>
        < Link to='/'> Contato </Link>
        < Link to='/cart'> Carrinho de Compras do Inferno </Link>
      </nav>
    </ Container>
  )};

export default Login;
