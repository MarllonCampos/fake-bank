import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./themes";

export default createGlobalStyle<{ theme: ThemeType }>`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }


  img {
    max-width: 100%;
    height: auto;
  }

  body {
    background: ${props => props.theme.backgroundColor};
    font-family: Inter, sans-serif;
    color: ${props => props.theme.gray['900']};
  }


  body, html, #root {
    height: 100%;
  }

  a {
    text-decoration:none;
  }
`