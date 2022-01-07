import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const ContentLeft = styled.div`
  text-align: left;
  width: 40%;
  margin: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContentRight = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: space-between;
  padding: 2rem;
  border-radius: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled(Link)`
  display: flex;
  box-shadow: none;
  background-color: #007fff;
  color: #fff;
  padding: 1.1rem 1rem;
  align-items: center;
  list-style: none;
  width: 25%;
  text-decoration: none;
  font-size: 16px;
  border-radius: 0.6rem;
  @media (max-width: 768px) {
    width: 40%;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background: #5468ff;
  }
`;
export const Content = styled.div`
  margin-left: 1.8rem;
`;
