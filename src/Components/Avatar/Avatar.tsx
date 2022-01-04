// import styled from "styled-components";
import {AvatarProps} from '../../@types/AvatarTypes/AvatarProps';
import { Avatar } from "./Avatar.style";

// declare const rem: (value: string | number, base?: string | number) => string;

// type AvatarComp = AvatarProps;

export const AvatarComponent = ({children, src, alt}:AvatarProps) => {
    return(
        <Avatar kind="circular" size="largger">
            {children || <img src={src} alt={alt} />}
        </Avatar>
    );
};

//     // this line to build a custom size as the input is.

//     const createSize = (size:number) => rem(`${size * sizeUnit}px`);

//     //this line to define a default size is 16px.
//     const sizeUnit = 16;
//     type Sizes = {
//         sm?: string,
//         md?: string,
//         lg?: string
//     }

//     const sizes: Sizes = {
//         sm: createSize(3),
//         md: createSize(4),
//         lg: createSize(5)
//       };


// //     export const size = (size:number) => {
// //         if (typeof sizes[size] !== "undefined") {
// //           return sizes[size];
// //         } else {
// //           return sizes["md"];
// //         }
// //       };

// // const AltAvatar = styled.div<{size?:string}>`

// // `
// // export const Avatar = ({img,alt}:AvatarProps, {rounded, circular, square} : AvatarShape) =>{
// //     return (
// //         <div>
// //         {img}
// //         {alt}
// //         </div>
// //     );
// // };
