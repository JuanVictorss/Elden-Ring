import styled from "styled-components";

export const EstiloHome = styled.div`
  max-width: 100vw;
  max-height: 100vw;
  img {
    width: 99vw;
    height: 49vw;
  }
  @media only screen and (max-height: 600px) {
    img {
      width: 99vw;
      height: 45vw;
      border: none;
    }
  }
`;
