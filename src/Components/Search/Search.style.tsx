import styled from "styled-components";

const Lable = styled.label`
  display: flex;
  border: 1px solid silver;
  border-radius: 10px;
  height: 34px;
  align-items: center;
  justify-content: center;
  width: 250px;
  background-color: whitesmoke;
  position: relative;
  @media (max-width: 556px) {
    width: 200px;
  } ;
`;

const Input = styled.input`
  border: none;
  font-size: 15px;
  outline: none;
  padding: 0 5px;
  background: whitesmoke;
  color: darkslategray;
  &:focus + div {
    display: block;
  }
`;

const SearchBox = styled.div`
  box-shadow: 1px 1px 7px 0px #e7e7e7;
  position: absolute;
  width: 230px;
  max-width: 250px;
  background: whitesmoke;
  border-radius: 10px;
  padding: 10px;
  top: 35px;
  display: none;
  &:hover {
    display: block !important;
  }
`;

const Item = styled.div`
  display: block;
  color: darkslategray;
  text-decoration: none;
  padding: 7px 10px 12px;
  border: 1px solid whitesmoke;

  &:hover {
    color: #007fff;
    border: 1px solid #007fff;
    background-color: rgb(240, 247, 255);
    border-radius: 10px;
  }
`;

export { Input, Lable, SearchBox, Item };
