import styled from "styled-components";

export const BossCard = styled.div`
  color: white;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    list-style-type: none;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    width: 40rem;
    padding: 2rem;
    margin: 2rem;
    border-radius: 20px;

    box-shadow: 10px 10px 50px #4a4a4a;
    background-color: #2a2a2a;
  }
  img {
    margin: 1rem;
    width: 25vw;
    height: 25vw;
    border-radius: 1rem;
  }
`;