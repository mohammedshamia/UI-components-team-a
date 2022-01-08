import styled from "styled-components";

export const Body = styled.div`
width: 100%;
height:100%;
background-color: ${(props) => props.theme.colors.primary};
@media (max-width: 860px) {
  width: auto;
}
`