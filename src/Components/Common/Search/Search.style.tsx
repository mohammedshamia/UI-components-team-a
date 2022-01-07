import styled from "styled-components";

const Lable = styled.label`
  display: flex;
  border: 2px solid ${(props) =>props.theme.colors.secondary};
  border-radius: 10px;
  height: 34px;
  align-items: center;
  justify-content: center;
  background-color:${(props) =>props.theme.colors.primary}  ;  
  position: relative;
  padding: 0rem 1rem;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Input = styled.input`
  border: none;
  font-size: 15px;
  outline: none;
  background-color:${(props) =>props.theme.colors.primary}  ;  
  color: darkslategray;
  &:focus + div {
    display: block;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchBox = styled.div`
  box-shadow: 1px 1px 7px 0px #e7e7e7;
  position: absolute;
  width: 90%;
  background: whitesmoke;
  border-radius: 10px;
  top: 35px;
  padding: 10px;
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
