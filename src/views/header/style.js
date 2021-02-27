import Styled from 'styled-components';

export const Container = Styled.header`
  align-items: center;
  background-color: rgb( 0, 0, 0, 0.9);
  top: 0;
  color: white;
  display: flex;
  flex-direction: Row;
  height: 85px;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  z-index: 10;

  a {
    text-decoration: none;
    color: white;
 

  }

  img {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;

export const Nav = Styled.nav`
  width: 100%;
  height: 85px;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  

`;