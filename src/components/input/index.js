import React from 'react';
import InputStyled from './style';

const Input = ({ getEvent, placeholder }) => {
    return <InputStyled onChange={ (event) => getEvent(event.target.value) } placeholder={ placeholder } />;
}

export default Input;
