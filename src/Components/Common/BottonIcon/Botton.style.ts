import styled from "styled-components";

const BottonIcon = styled.button`
fill:#007FFF;
border: 2px solid ${(props) =>props.theme.colors.secondary};
background-color: ${(props)=>props.theme.colors.primary};
cursor:pointer;
border-radius:10px;
outline: none;
height:33px;
width:33px;
display: flex;
justify-content: center;
align-items: center;
margin:0 5px;
`
export default BottonIcon;