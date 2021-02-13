import React from 'react';
import ButtonStyled from './style';


const Button = ({ children, getEvent }) => {
  return (
    <ButtonStyled type="button" onClick={ () => getEvent() }>
      { children }
    </ButtonStyled>
  );
}

export default Button;
