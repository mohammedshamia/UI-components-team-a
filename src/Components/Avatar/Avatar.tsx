import { ElementType, ReactNode } from "react";
import styled from "styled-components";


declare const rem: (value: string | number, base?: string | number) => string;

type AvatarProps = {
    variant: 'circular'|'rounded'|'square'|string
    alt?: string
    children?: ReactNode
    component?: ElementType
    src?: string
    srcSet?: string
    imgProps?: object
}
;

const Avatar = (props:AvatarProps) =>{
    return(
        <>
        </>
    );
}

type AvatarShape =
    | {
        rounded? : never,
        square?: never,
        circular : string
    }
    | {
        rounded? : never,
        square: string,
        circular?: never
    }
    | {
        rounded : string,
        square?: never,
        circular?: never
    }

          
    // this line to build a custom size as the input is.

    const createSize = (size:number) => rem(`${size * sizeUnit}px`);

    //this line to define a default size is 16px.
    const sizeUnit = 16;
    type Sizes = {
        sm?: string,
        md?: string,
        lg?: string
    }

    const sizes: Sizes = {
        sm: createSize(3),
        md: createSize(4),
        lg: createSize(5)
      };


//     export const size = (size:number) => {
//         if (typeof sizes[size] !== "undefined") {
//           return sizes[size];
//         } else {
//           return sizes["md"];
//         }
//       };

// const AltAvatar = styled.div<{size?:string}>`

// `
// export const Avatar = ({img,alt}:AvatarProps, {rounded, circular, square} : AvatarShape) =>{
//     return (
//         <div>
//         {img}
//         {alt}
//         </div>
//     );
// };
