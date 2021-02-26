import Styled from 'styled-components';

const Container = Styled.header`
  align-items: center;
  background-color: black;
  top: 0;
  color: white;
  display: flex;
  flex-direction: Column;
  height: 85px;
  justify-content: center;
  width: 100vw;
  position: fixed;
  z-index: 10;

  a {
    text-decoration: none;
    color: white;
  }
`;

const Wrapper = Styled.div``;
const Column = Styled.div``;
const Row = Styled.div``;
const Link = Styled.div``;
const Title = Styled.div``;

export default Container;