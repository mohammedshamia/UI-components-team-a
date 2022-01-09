import styled from "styled-components";

const HeaderBox = styled.div`
  padding: 0.8rem 3rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  box-shadow: inset 0px -1px 1px ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
`;

export default HeaderBox;
