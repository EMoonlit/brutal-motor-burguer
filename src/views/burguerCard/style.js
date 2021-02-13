import styled from 'styled-components';

 const CardStyled = styled.div`
  background-color: #FFD100;
  border: 1px solid;
  border-radius: 10px;
  padding: 5px 10px;
  transition: all ease 0.2s;
  outline: none;
  transform: scale(0.9);
  transform: all ease 0.2s;

  :hover {
    cursor: pointer;
  }
  :active {
    transform: scale(1);
  }
`;

export default CardStyled;