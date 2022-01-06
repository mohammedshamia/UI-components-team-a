import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const BottonNotFound = styled.button`
  background-color: white;
  border: 1px solid #007fff;
  padding: 10px 40px 14px;
  border-radius: 10px;
  font-size: 20px;
  margin: 50px auto;
  text-decoration: none;
  color: #007fff;
  font-weight; &:hover {
    color: white;
    background-color: #007fff;
    color: white;
  }
`;

const H1 = styled.h1`
  display: inline;
  padding-right: 50px;
  border-right: 1px solid silver;
  margin-right: 50px;
`;

const P = styled.p`
  font-size: 22px;
  display: inline;
`;

const FullBox = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
`;

export { BottonNotFound, Container, Box, H1, P, FullBox };
