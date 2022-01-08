import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 50px 0 50px 150px;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 860px) {
    padding: 50px 70px;
    width: auto;
    display: block;
    text-align: center;
  }
  @media (max-width: 360px) {
    padding: 30px 10px;
  }
`;
export const ContentLeft = styled.div`
  text-align: left;
  width: 40%;
  justify-content: center;

  padding-right: 10%;

  @media (max-width: 860px) {
    padding-right: 0px;

    width: 100%;
    text-align: center;
    max-width: 100%;
  }
`;

export const ContentRight = styled.div`
  background-color: #f3f6f9;
  width: 50%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: space-between;
  padding: 2rem;
  border-radius: 10px;
  @media (max-width: 860px) {
    display: none;
  }
`;

export const Button = styled(Link)`
  display: block;
  box-shadow: none;
  background-color: #007fff;
  color: #fff;
  padding: 1.1rem 0;
  width: 190px;
  margin: 40px 0;
  text-decoration: none;
  font-size: 17px;
  border-radius: 0.6rem;
  font-weight: 700;
  text-align: center;
  &:hover {
    background: #0059b2;
  }
  @media (max-width: 860px) {
    width: 100%;
  }
`;
export const Content = styled.div`
  padding-left: 1.8rem;
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
`;
