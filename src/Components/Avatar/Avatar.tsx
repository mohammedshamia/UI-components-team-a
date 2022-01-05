// import styled from "styled-components";
import styled from 'styled-components';
import { AvatarGroupOptions } from '../../@types/AvatarTypes/AvatarGroup';
import {ICompAvatar} from '../../@types/AvatarTypes/AvatarProps';
import { ANIMATION_EASING, BASE_AVATAR_STYLE, boxShadows, cleanSearchParams, colorFromName } from './utils';

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

export default function SingleAvatar({ avatar, options, hidden, onClick }: ICompAvatar) {
    const size = options.size || 25;

    if (typeof avatar === "string") {
        const params = new URLSearchParams({
            size: `${size * 2}`,
            name: avatar,
            "font-size": `${options.fontSize || 0.66}`,
            color: options.fontColor || "FFFFFF",
            background: options.backgroundColor || colorFromName(avatar, options.randomBackgroundColors),
            bold: options.bold ? 'true' : '',
            uppercase: options.uppercase ? '' : 'false',
            length: options.initialCharacters ? `${options.initialCharacters}` : '',
            rounded: options.square ? 'false ' : ''
        });

        cleanSearchParams(params);

        return (
                <Img
                    draggable="false"
                    alt={`ui-avatar-${avatar}`}
                    src={`https://ui-avatars.com/api/?${params.toString()}`}
                    size={size}
                    kind={options.kind}
                    shadow={options.shadow}
                    style={options.avatarStyle}
                    className={hidden ? "hidden" : ""}
                    onClick={onClick}
                />
        )
    } else {
        const params = new URLSearchParams({
            size: `${size * 2}`,
            name: avatar.avatar,
            "font-size": `${avatar.fontSize || options.fontSize || 0.66}`,
            color: avatar.fontColor || options.fontColor || "FFFFFF",
            background: avatar.backgroundColor || options.backgroundColor || colorFromName(avatar.avatar, options.randomBackgroundColors),
            bold: options.bold ? 'true' : '',
            uppercase: options.uppercase ? '' : 'false',
            length: options.initialCharacters ? `${options.initialCharacters}` : '',
            rounded: options.square ? 'false ' : ''
        });

        cleanSearchParams(params);

        return (
                <Img
                    draggable="false"
                    alt={`ui-avatar-${avatar.avatar}`}
                    src={`https://ui-avatars.com/api/?${params.toString()}`}
                    size={size}
                    kind={options.kind}
                    shadow={options.shadow}
                    style={avatar.style || options.avatarStyle}
                    className={hidden ? "hidden" : ""}
                    onClick={onClick}
                />
        )
    }
}