import styled from 'styled-components';

 export const CardStyled = styled.div`
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

export const CtnImage = styled.div`
    height: 260px;
    width: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    background-size: cover;
    background-repeat: no-repeat;

    img {
    border-radius: 10px;
    max-width: 260px;
    max-height: 260px;
    object-position: center;
  }
`;
