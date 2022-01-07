import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { CSSProperties } from 'react';

interface IPropsSideBar {
    sidebar?: boolean
}
export const SidebarNav = styled.nav<IPropsSideBar>`
background: white;
display: flex;
justify-content: center;
box-shadow: 5px 0 5px -5px ${(props) =>props.theme.colors.secondary};
position: fixed;
transition: 350ms;
background-color: ${(props)=>props.theme.colors.primary};
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
width: 100%;
max-width: 216px;
height: 100vh;
z-index: 10;
@media (max-width: 768px) {
    left: ${({ sidebar }) => (sidebar ? "-100%" : "0")};
}

`;

export const Menu = styled.div`
text-transform: capitalize;

`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const SidebarLink = styled(Link)`
display: flex;
margin:1rem 0.5rem;
color:${(props)=>props.theme.textColor.primary};
justify-content: space-between;
align-items: center;
padding:.5rem 2rem;
list-style: none;
text-decoration: none;
font-size: 16px;
&:hover {
  background-color: ${(props)=>props.theme.colors.secondary};
  color:${(props)=>props.theme.textColor.primary};
  cursor: pointer;
  border-radius: .5rem; 
  
`;



export const Icon = styled.img<IPropsSideBar>`
width:1.2rem;
height:1.2rem;
color: rgb(0, 114, 229);
cursor: pointer;
padding:.6rem;
border: 2px solid ${(props) =>props.theme.colors.secondary};
margin-left:1rem;
border-radius: 1rem; 
display:none;
@media (max-width: 768px) {
    display: ${({ sidebar }) => (!sidebar ? "none" : "block")};
    cursor: pointer;

}
`