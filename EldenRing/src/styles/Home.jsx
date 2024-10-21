import styled from "styled-components";

export const EstiloHome = styled.div`
  max-width: 99vw;
  max-height: 49vw;

  .geral {
    display: flex;
    flex-direction: row;
  }

  img {
    display: flex;
    float: left;
    width: 99vw;
    height: 49vw;
    object-fit: cover;
  }
  @media only screen and (min-width: 30px) {
    img {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }
  }
  @media only screen and (max-height: 600px) {
    img {
      width: 99vw;
      height: 45vw;
      border: none;
    }
  }
`;
