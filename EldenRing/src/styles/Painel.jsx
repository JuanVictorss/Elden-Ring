import styled from "styled-components";

export const Painel = styled.div`
  position: fixed;
  flex-direction: column;
  left: 0;
  width: 160px;
  height: 100%;
  background-color: #2a2a2a;

  .linkCor {
    text-decoration: none;
    color: wheat;
  }
  li {
    padding: 4%;
    margin: 1% 0;
    list-style-type: none;
  }

  @media screen and (min-width: 230px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1025px) {
    display: block;
  }

  @media screen and (min-width: 1920px) {
    display: block;
  }

  @media screen and (min-height: 900px) {
    font-size: 90%;
    li {
      padding: 10%;
      margin: 1% 0;
      list-style-type: none;
    }
  }
`;
