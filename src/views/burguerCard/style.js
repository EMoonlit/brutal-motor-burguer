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
    border-radius: 5px;
    height: 260px;
    margin: 0;
    width: 260px;
  }

  span {
    font-size: 20px;
  }
`;

export default CardStyled;