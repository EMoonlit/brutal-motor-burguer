import styled from 'styled-components';

 const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  a { 
    text-decoration: none;
    color: white;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(192,192,192, 0.9);
    position: fixed;
    transform: ${({isOpen}) => isOpen ? 'translateX(0)': 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    align-items: center;

    li {
      color: black;
    }

    a { 
      text-decoration: none;
      color: black;
    }
  }

`;

export default List;