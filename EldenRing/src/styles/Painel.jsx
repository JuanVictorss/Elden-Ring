import styled from "styled-components";

export const Painel = styled.div`
  position: fixed;
  flex-direction: column;
  left: 0;
  width: 10rem;
  height: auto;

  .linkCor {
    text-decoration: none;
    color: wheat;
  }
  li {
    padding: 13%;
    margin: 1% 0;
    background-color: #2a2a2a;
    list-style-type: none;
  }

  .menu {
    display: none;
  }

  @media only screen and (max-height: 600px) {
    li {
      padding: 5%;
      margin: 1% 0;
      background-color: #2a2a2a;
      list-style-type: none;
    }
  }
`;
