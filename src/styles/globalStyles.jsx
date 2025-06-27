import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

html, body, #root {
    min-height: 100%;
    margin: 0;
    padding: 0;
    background-color: #fff;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Ancizar Serif", serif;
}
`