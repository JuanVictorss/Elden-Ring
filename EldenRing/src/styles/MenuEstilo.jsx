import styled from "styled-components";

export const MenuEstilo = styled.div`
  position: fixed;

  left: 0;
  .linkCor {
    text-decoration: none;
    color: wheat;
  }
  ul {
    background-color: #2a2a2a;
    border: none;
    list-style-type: none;
  }
  li {
    list-style-type: none;
    padding: 4%;
    margin: 1% 0;
  }

  button {
    border-radius: 20px;
    color: black;
    height: 10vw;
    width: 12rem;
    border: none;
  }

  @media screen and (min-width: 230px) {
    display: block;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1025px) {
    display: none;
  }

  @media screen and (min-width: 1920px) {
    display: none;
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
