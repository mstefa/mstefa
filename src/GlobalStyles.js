import { createGlobalStyle } from "styled-components";

export var mainRed = "#820801";
export var darkRed= "#4F0501";
export var lightRed = "#CF4740";
export var lightTel = "#17CFC5";
export var darkTel = "#08827B";
export var lightGreen = "#41CF17";
export var darkGreen = "#41CF17";
export var lightGray ="#F2F2F2"
export var mediumGray ="#D9D9D9"
export var darkGray ="#262626"


export const GlobalStyles = createGlobalStyle`

html{
  scroll-behavior: smooth; 
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${darkRed}
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`