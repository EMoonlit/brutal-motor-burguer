import styled from 'styled-components';

 const CardStyled = styled.div`
  align-items: center;
  background-color: #FFD100;
  border: 1px solid black;
  border-radius: 10px;
  display:flex;
  flex-direction: column;
  font-weight: 600;
  justify-content: center;
  margin: 10px;
  padding: 0 0 5px;
  text-align: center;
  width: 260px;

  img {
    padding: 2px;
    border-radius: 10px;
    height: 260px;
    margin: 0;
    width: 260px;
  }

  span {
    font-size: 20px;
  }

  button {
    width: 50%;
    background-color: #3F3F3F;
    color: #FFD100;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default CardStyled;