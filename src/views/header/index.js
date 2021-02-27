import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav } from './style';
import * as cp from '../../components';
import Logo from '../../assets/BrutalLogoAmarelo.svg';

const Login = () => {
  return (
    < Container >
    < Nav>
      < Link to='/'>
        <img className='logo' src={ Logo } alt='Brutal MotorBurger!' />
      </Link>
      < cp.BurguerNav />
    </ Nav>
    </Container>
  )};

export default Login;
