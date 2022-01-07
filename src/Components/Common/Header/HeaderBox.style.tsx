import styled from "styled-components";

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  box-shadow: inset 0px -1px 1px ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
`;

export default HeaderBox;
