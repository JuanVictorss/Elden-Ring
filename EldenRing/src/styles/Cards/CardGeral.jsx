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

    box-shadow: 10px 10px 50px #4a4a4a;
    background-color: #2a2a2a;
  }
  img {
    margin: 1rem;
    width: 23vw;
    height: 23vw;
    border-radius: 1rem;
  }

  @media screen and (max-width: 1340px) {
    ul {
      display: grid;
      grid-template-columns: auto;
      flex-direction: column;
      list-style-type: none;
    }
    li {
      width: 60vw;
      padding: 2rem;
      margin: 2rem;
      border-radius: 20px;
    }
  }
  @media screen and (max-width: 900px) {
    ul {
      display: grid;
      grid-template-columns: auto;
      flex-direction: column;
      list-style-type: none;
    }
  }
`;
