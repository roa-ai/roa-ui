import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *:before, *:after {
    box-sizing: border-box;
  }
  button, input {
    padding: 0;
    border: 0;
  }
  button {
    background-color: transparent;
    cursor: pointer;
    outline: none;
    appearance: none;
  }
  img {
    vertical-align: bottom;
    object-fit: cover;
  }
`;

const withThemeProvider = (Story, context) => {
  return (
    <>
      <GlobalStyle />
      <Story {...context} />
    </>
  );
};
export const decorators = [withThemeProvider];
