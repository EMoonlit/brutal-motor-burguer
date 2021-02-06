import styled from "styled-components";

const MeuBotao = styled.button`
    background: yellow;
    border: 2px solid black;
    border-radius: 10px;
    color: black;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
    &:hover {
      background: white;
      padding: 2rem;
    }
`;

export default MeuBotao;