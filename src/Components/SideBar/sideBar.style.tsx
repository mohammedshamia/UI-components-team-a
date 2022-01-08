import { Link } from "react-router-dom";
import styled from "styled-components";

interface IPropsSideBar {
  sidebar?: boolean;
}
export const SidebarNav = styled.nav<IPropsSideBar>`
  background: white;
  display: flex;
  justify-content: center;
  box-shadow: 5px 0 5px -5px #aaa;
  position: fixed;
  transition: 350ms;
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
  margin: 1rem 0.5rem;
  color: #3e5060;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  list-style: none;
  text-decoration: none;
  font-size: 16px;
  border: 1px solid white;

  &:hover {
    color: #007fff;
    border: 1px solid #007fff;
    background-color: rgb(240, 247, 255);
    border-radius: 10px;
  }
`;

export const Icon = styled.img<IPropsSideBar>`
  width: 1.2rem;
  height: 1.2rem;
  color: rgb(0, 114, 229);
  cursor: pointer;
  padding: 0.6rem;
  border: 1px solid #f0f7ff;
  margin-left: 1rem;
  border-radius: 1rem;
  display: none;
  @media (max-width: 768px) {
    display: ${({ sidebar }) => (!sidebar ? "none" : "block")};
    cursor: pointer;
  }
`;
