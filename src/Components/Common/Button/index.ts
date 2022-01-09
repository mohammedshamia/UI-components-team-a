import styled from "styled-components";

interface IStyleButton {
  minWidth?: string;
  borderRadius?: string;
  border?: string;
  background?: string;
  color?: string;
  fontSize?: string;
  cursor?: string;
  width?: string;
  height?: string;
  padding?: string;
}

export const Button = styled.button<IStyleButton>`
  minwidth: ${(props) => props.minWidth || "100px"};
  width: ${(props) => props.width || "none"};
  height: ${(props) => props.height || "none"};
  padding: ${(props) => props.padding || "16px 32px"};
  border-radius: ${(props) => props.borderRadius || "4px"};
  border: ${(props) => props.border || "none"};
  background: ${(props) => props.background || "#007fff"};
  color: ${(props) => props.color || "#fff"};
  font-size: ${(props) => props.fontSize || "16px"};
  cursor: ${(props) => props.cursor || "pointer"};
  align-items: "baseline";

  &:hover {
    background: #0059b2;
  }
`;
