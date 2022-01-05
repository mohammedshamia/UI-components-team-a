import styled from "styled-components";
import { AvatarGroupOptions } from "../../@types/AvatarTypes/AvatarGroup";
import { ANIMATION_EASING } from "./utils";

export const Img = styled.img<AvatarGroupOptions>`
height: ${props => props.size! - 4}px;
width: ${props => props.size! - 4}px;
transition: margin-left ${ANIMATION_EASING}, opacity ${ANIMATION_EASING}, width ${ANIMATION_EASING};
border-radius: ${props => props.kind ? '0px' : '50%'};
box-shadow: 'none';
border: 2px solid #${props => props.backgroundColor};
`;