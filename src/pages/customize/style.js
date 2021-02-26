import styled from 'styled-components';

export const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  background-color: silver;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 85px;
  margin-bottom: 55px;
  width: 100vw;

  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
  
`;

export const MediaContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;

  img {
    width: 60%;
    height: 60%;
    border-radius: 10px;
    margin-top: 5px;
  }

  @media(max-width: 800px) {
    flex-direction: column;

    img {
      width: 260px;
      height: 260px;
      border-radius: 10px;
      margin-top: 5px;
    }
  }
`;

export const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  
  h1 {
    color: #FFD100;
    font-style: italic;
    font-weight: 900;
  }
`;

/*align-items: center;
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
width: 260px;*/