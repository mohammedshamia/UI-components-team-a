import styled, { createGlobalStyle } from "styled-components";

export const Body = styled.div`
width: 100%;
height:100%;
box-sizing:border-box;
background-color: ${(props) => props.theme.colors.primary};
@media (max-width: 860px) {
  width: auto;
}
`

export const GlobalStyles=createGlobalStyle`

body {
  background-color: ${(props) => props.theme.colors.primary};
}
`