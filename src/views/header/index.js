import React from 'react';
import { Link } from 'react-router-dom';
import Container from './style';

const Login = ({item}) => {
  return (
    < Container>
      <nav>
        <h1> Brutal MotorBurguer!</h1>
        < Link to='/'> Brutalize sua Fome </Link>
        < Link to='/'> Sobre </Link>
        < Link to='/'> Contato </Link>
      </nav>
    </ Container>
  )};

export default Login;
