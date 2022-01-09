import styled, { keyframes } from "styled-components";
import skeletonType from "../../@types/skeletonType";

const pulse = keyframes`
  0% {
    background-color:rgba(0,0,0,0.08);
  }
  
  50% {
    background-color:rgba(0,0,0,0.21);
  }

  100% {
    background-color:rgba(0,0,0,0.05);
  }
`;

const wave = keyframes`
// @for $i from 1 through 100 {
//     {$i}% {
//         background-image: linear-gradient(
//           90deg,transparent, rgba(0, 0, 0, 0.07){$i}%);
//       }
// }
0% {
  background-image: linear-gradient(
    90deg, rgba(0, 0, 0, 0.07), transparent,  transparent,  transparent,  transparent,  transparent);
}

20%{
  background-image: linear-gradient(
    90deg, transparent, rgba(0, 0, 0, 0.07),  transparent,transparent,  transparent,  transparent);
}

40% {
  background-image:linear-gradient(
    90deg, transparent,  transparent,rgba(0, 0, 0, 0.07), transparent,  transparent,  transparent);
}

60% {
  background-image:linear-gradient(
    90deg, transparent,  transparent, transparent ,rgba(0, 0, 0, 0.07),  transparent,  transparent);
    
}
80% {
  background-image:linear-gradient(
    90deg, transparent,  transparent, transparent ,  transparent,  transparent ,rgba(0, 0, 0, 0.07));
}
100% {
  background-image:linear-gradient(
    90deg, transparent,  transparent, transparent ,  transparent,  transparent );
}}
`;

let Skeleton = styled.div.attrs((props: skeletonType) => ({
  as: props.component,
  style: { ...props.style, ...props.sx },
}))`
  background-color: rgba(0, 0, 0, 0.11);
  margin: 5px 0;
  width: ${(props: skeletonType) =>
    props.children !== undefined
      ? "fit-content; & * {visibility: hidden;}"
      : props.width !== undefined && props.width !== ""
      ? typeof props.width === "number"
        ? props.width + "px;"
        : props.width
      : "100%;"};

  height: ${(props) => (props) =>
    props.children !== undefined
      ? "auto"
      : props.height !== undefined && props.height !== ""
      ? typeof props.width === "number"
        ? props.height + "px;"
        : props.height
      : "20px"};

  border-radius: ${(props) =>
    props.variant !== undefined && props.variant !== ""
      ? props.variant === "text"
        ? "4px"
        : props.variant === "circular"
        ? "50%"
        : "0"
      : "4px"};
  animation: ${(props) =>
      props.animation === false
        ? ""
        : props.animation !== undefined && props.animation !== ""
        ? props.animation === "wave"
          ? wave
          : pulse
        : pulse}
    0.9s linear infinite;
`;

export default Skeleton;
