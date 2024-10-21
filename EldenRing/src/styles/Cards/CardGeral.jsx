import styled from "styled-components";

export const CardGeral = styled.div`
  color: white;

  ul {
    display: grid;
    grid-template-columns: auto;
    flex-direction: column;
    list-style-type: none;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    box-shadow: 10px 10px 50px #545252;
    background-color: #06060681;
  }

  img {
    margin: 1rem;
    border-radius: 1rem;
    transition: transform 0.3s ease;
  }
  img:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 144px) {
    li {
      width: 90vw;
      padding: 2rem;
      margin: 2rem;
      border-radius: 20px;
    }
    img {
      width: 60vw;
      height: 60vw;
    }
  }
  @media screen and (min-width: 414px) {
    li {
      width: 70vw;
      padding: 2rem;
      margin: 2rem;
      border-radius: 20px;
    }
    img {
      width: 50vw;
      height: 50vw;
    }
  }
  @media screen and (min-width: 768px) {
    li {
      width: 50vw;
      padding: 2rem;
      margin: 2rem;
      border-radius: 20px;
    }
    img {
      width: 40vw;
      height: 40vw;
    }
  }
  @media screen and (min-width: 1025px) {
    ul {
      grid-template-columns: auto auto;
      list-style-type: none;
    }
    li {
      width: 30vw;
      padding: 2rem;
      margin: 2rem;
      border-radius: 20px;
    }
    img {
      width: 23vw;
      height: 23vw;
    }
  }
  @media screen and (min-width: 1350px) {
    ul {
      grid-template-columns: auto auto;
      list-style-type: none;
    }
    li {
      width: 34vw;
      padding: 2rem;
      margin: 2rem;
      border-radius: 20px;
    }
    img {
      width: 23vw;
      height: 23vw;
    }
  }

  @media screen and (min-width: 1920px) {
    ul {
      grid-template-columns: auto auto;
      list-style-type: none;
    }
    li {
      width: 35vw;
      padding: 2rem;
      margin: 2rem;
      border-radius: 20px;
    }
    img {
      width: 23vw;
      height: 23vw;
    }
  }
`;
