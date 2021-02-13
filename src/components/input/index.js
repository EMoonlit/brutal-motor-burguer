import React from 'react';
import InputStyled from './style';

const Input = ({ getEvent }) => {
    return <InputStyled onChange={ (event) => getEvent(event.target.value) } />;
}

export default Input;
