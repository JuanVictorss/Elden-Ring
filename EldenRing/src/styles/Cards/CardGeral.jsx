import styled from "styled-components";

export const CardGeral = styled.div`
  color: white;

  ul {
    display: grid;
    grid-template-columns: auto auto;
    flex-direction: column;
    list-style-type: none;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    width: 35vw;
    padding: 2rem;
    margin: 2rem;
    border-radius: 20px;

    box-shadow: 10px 10px 50px #847f7f;
    background-color: #2a2a2a;
  }
  img {
    margin: 1rem;
    width: 23vw;
    height: 23vw;
    border-radius: 1rem;
  }

  @media screen and (max-width: 855px) {
    li {
      width: 80vw;
      padding: 2rem;
      margin: 2rem;
      border-radius: 20px;
    }
    img {
      margin: 1rem;
      width: 32vw;
      height: 32vw;
      border-radius: 1rem;
    }
  }
  @media screen and (max-width: 1300px) {
    ul {
      display: grid;
      grid-template-columns: auto;
      list-style-type: none;
    }
    li {
      width: 60vw;
      padding: 2rem;
      margin: 2rem;
      border-radius: 20px;
    }
  }
`;
