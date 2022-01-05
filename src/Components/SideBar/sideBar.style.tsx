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
box-shadow: rgba(100,100,111,0.2) -4px 3px 19px 0px;
position: fixed;
border-right: 2px solid #F0F7FF;
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
color:#3E5060 ;
justify-content: space-between;
align-items: center;
padding:.5rem 2rem;
list-style: none;
text-decoration: none;
font-size: 16px;
&:hover {
  background:#F0F7FF;
  color: black;
  cursor: pointer;
  padding:2rem
  border-radius: .5rem; 
  
`;



export const Icon = styled.img<IPropsSideBar>`
width:1.2rem;
height:1.2rem;
color: rgb(0, 114, 229);
cursor: pointer;
padding:.6rem;
border:1px solid #F0F7FF;
margin-left:1rem;
border-radius: 1rem; 
display:none;
@media (max-width: 768px) {
    display: ${({ sidebar }) => (!sidebar ? "none" : "block")};
    cursor: pointer;

}
`