import styled from "styled-components";

declare const rem: (value: string | number, base?: string | number) => string;

/**Interface */
interface Props {
    size : number
}
/* components */
const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

// const Wrapper = styled.div<Props>`
//   box-sizing: border-box;
//   border-radius: 50%;
//   border: ${rem("2px")} solid #ddd;
//   padding: ${rem("2px")};
//   width: ${(props) => size(props.size)};
//   height: ${props => size(props.size)};
//   background-color: white;
// `;

// export {Wrapper, Image};