// import styled from "styled-components";
import {AvatarProps} from '../../@types/AvatarTypes/AvatarProps';
import { Avatar } from "./Avatar.style";


export const AvatarComponent = ({children, src, alt, kind, sx, size}:AvatarProps) => {
    return(
        <Avatar kind={kind} size={size} sx={sx}>
            {children || <img src={src} alt={alt} />}
        </Avatar>
    );
};
