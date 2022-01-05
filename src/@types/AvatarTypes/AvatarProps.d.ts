import { ElementType, ReactNode } from "react";
import { CSSProperties } from 'styled-components'


interface ICompAvatar {
    kind: 'circular'|'rounded'|'square'|string
    style: any;
    backgroundColor: any;
    avatar: string | IAvatar;
    options: AvatarGroupOptions;
    hidden?: boolean;
    onClick?: React.MouseEventHandler<HTMLImageElement>;
}
interface AvatarProps {
    kind: 'circular'|'rounded'|'square'|string
    alt?: string
    size?: 'small' | 'largger'|string
    children?: ReactNode
    component?: ElementType
    src?: string
    sx?: CSSProperties
    srcSet?: string
    imgProps?: object,
    hidden?: boolean,
    onClick?: React.MouseEventHandler<HTMLImageElement>,
}
;

export {AvatarProps, ICompAvatar};