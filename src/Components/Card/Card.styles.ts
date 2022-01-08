import styled from "styled-components";
import {
  IstyleMainCard,
  IcontentProp,
  IheaderProps,
  IactionProps,
} from "../../@types/Card";

export const MainCard = styled("div")<IstyleMainCard>(
  (props: IstyleMainCard) => ({
    alignItems: `${props.alignItems || "baseline"}`,
    alignContent: `${props.alignContent || "baseline"}`,
    boxShadow: `${props.boxShadow || "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}`,
    transition: "0.3s",
    width: `${props.width || "25%"}`,
    margin: `${props.margin || "20px auto"}`,
    padding: `${props.padding || "none"}`,
    display: "flex",
    flexDirection: `${(props.flexDirection as "row") || ("column" as "column")
      }`,
    borderRadius: `${props.borderRadius || "10px"}`,
    backgroundColor: `${props.backgroundColor || "none"}`,
  }),
  `  @media (max-width: 860px) {
    width: auto;

}`
);

export const Content = styled("div")<IcontentProp>((props: IcontentProp) => ({
  display: "flex",
  padding: `${props.padding || "10px"}`,
  width: `${props.width || "none"}`,
  height: `${props.height || "none"}`,
  maxHeight: `${props.maxHeight || "60%"}`,
  margin: `${props.margin || "5px auto"}`,
}));

export const Header = styled("div")((props: IheaderProps) => ({
  display: "flex",
  height: `${props.height || "50px"}`,
  width: `${props.width || "100%"}`,
  // border: `${props.border || "1px solid black"}`,
  maxHeight: `${props.maxHeight || "20%"}`,
  padding: `${props.padding || "10px"}`,
}));

export const Action = styled("div")<IactionProps>((props: IactionProps) => ({
  display: "flex",
  padding: `${props.padding || "10px"}`,
  width: `${props.width || "100%"}`,
  maxHeight: props.space ? "100px" : "none",
}));

export const ContentAction = styled.div<IcontentProp>`
  // display: "flex";
  padding: ${(props) => props.padding || "none"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "none"};
  maxheight: ${(props) => props.maxHeight || "60%"};
  border: ${(props) => props.border || "none"};
  margin: ${(props) => props.margin || "5px auto"};
  cursor: "pointer";

  &:hover {
    transition: 0.5s ease;
    opacity: 0.1;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    cursor: pointer;
  }
`;

interface ICardMedia {
  padding?: string;
  float?: string;
  width?: string;
  space?: boolean;
  src?: string;
}

export const CardMedia = styled.img<ICardMedia>`
  padding: ${(props) => props.padding || "none"};
  width: ${(props) => props.width || "100%"};
  maxheight: ${(props) => (props.space ? "100px" : "none")};
  src: ${(props) => props.src};
  border: "1px solid black";
  height: 100%;
  &:hover {
    opacity: 0.1;
    font-size: 20px;
    backgroundcolor: rgba(0, 0, 0, 0.5);
  }
`;
