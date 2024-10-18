import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  padding: 0;
}

body{ 
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: black;}
`;
