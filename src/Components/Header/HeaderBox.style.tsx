import styled from "styled-components";

const HeaderBox = styled.div`
  border-bottom: 1px solid silver;
  display: flex;
  padding: 10px 150px;
  align-items: center;
  justify-content:  space-between;
  @media (max-width: 992px) {
    & {
      padding: 10px 125px;
    }
  }
  @media (max-width: 768px) {
    & {
      padding: 10px 50px;
    }
  }

  @media (max-width: 556px) {
    & {
      padding: 8px 20px;
    }
  }
`;

export default HeaderBox;
