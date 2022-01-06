import { AvatarProps } from "./AvatarProps";

interface IOverflowAvatar {
    avatar: string;
    options: AvatarGroupOptions;
    hidden?: boolean;
    kind: 'circular'|'rounded'|'square'|string;
}

export {IOverflowAvatar}