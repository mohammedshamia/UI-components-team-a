// import styled from "styled-components";
import styled from 'styled-components';
import { AvatarGroupOptions } from '../../@types/AvatarTypes/AvatarGroup';
import {ICompAvatar} from '../../@types/AvatarTypes/AvatarProps';
import { ANIMATION_EASING, BASE_AVATAR_STYLE, boxShadows, cleanSearchParams } from './utils';

const Img = styled.img<AvatarGroupOptions & { isOverflowAvatar?: boolean }>`
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    transition: margin-left ${ANIMATION_EASING}, opacity ${ANIMATION_EASING}, width ${ANIMATION_EASING};
    border-radius: ${({ kind }) =>
    (kind === "circular" && `50%`) ||
    (kind === "square" && `none`) ||
    (kind === "rounded" && `0.35rem`)};
    box-shadow: ${props => props.shadow ? boxShadows[props.shadow] : 'none'};
    ${BASE_AVATAR_STYLE}
`;
const randomAvatarColor = ["f44336", "e91e63", "9c27b0", "673ab7", "3f51b5", "2196f3", "009688", "ffc107", "ff9800", "ff5722", "795548"];
function colorFromName(name: string, avatarColors = randomAvatarColor) {
    let hash = 0
    let len = name.length;
    for (let i = 0; i < len; i++) {
        hash = ((hash << 5) - hash) + name.charCodeAt(i);
        hash |= 0;
    }
    return avatarColors[Math.abs(hash) % avatarColors.length];
}
export const SingleAvatar = ({ avatar, hidden, onClick, kind, src, backgroundColor, fontColor, bold, uppercase, initialCharacters}: ICompAvatar) => {
    const size =  30;

    if (typeof avatar === "string") {
        const params = new URLSearchParams({
            size: `${size}`,
            name: avatar,
            "font-size": `${0.5}`,
            color: fontColor || "FFFFFF",
            background: backgroundColor || colorFromName(avatar, randomAvatarColor),
            bold: bold ? 'true' : '',
            uppercase: uppercase ? '' : 'false',
            length: initialCharacters ? `${initialCharacters}` : '',
        });

        cleanSearchParams(params);

        return (
                <Img
                    draggable="false"
                    alt={`ui-avatar-${avatar}`}
                    src={`https://ui-avatars.com/api/?${params.toString()}`}
                    size={size * 2}
                    kind={kind}
                    className={hidden ? "hidden" : ""}
                    onClick={onClick}
                />
        )
    } else {
        return (
                <Img
                    draggable="false"
                    alt={`ui-avatar-${avatar.src}`}
                    src={src}
                    size={size * 2}
                    kind={kind}
                    className={hidden ? "hidden" : ""}
                    onClick={onClick}
                />
        )
    }
}