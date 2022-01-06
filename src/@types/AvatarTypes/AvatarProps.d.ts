import { ElementType, ReactNode } from "react";
import { CSSProperties } from 'styled-components'
import { Img } from "../../Components/Avatar/Image";


interface ICompAvatar {
    kind: 'circular'|'rounded'|'square'|string
    style?: any;
    src?: string;
    backgroundColor?: any;
    avatar: string | React.ImgHTMLAttributes;
    options?: AvatarGroupOptions;
    hidden?: boolean;
    onClick?: React.MouseEventHandler<HTMLImageElement>;
}
interface AvatarProps {
    kind: 'circular'|'rounded'|'square'|string
    alt?: string
    size?: 'small' | 'largger'|string
    avatar?: string;
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