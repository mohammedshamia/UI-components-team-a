import { ElementType, ReactNode } from "react";
import { CSSProperties } from 'styled-components'
import { Img } from "../../Components/Avatar/Image";


interface ICompAvatar {
    kind: 'circular'|'rounded'|'square'|string;
    fontColor?: string;
    style?: any;
    bold? : boolean;
    uppercase?: boolean;
    src?: string;
    backgroundColor?: string;
    avatar: string | React.ImgHTMLAttributes;
    options?: AvatarGroupOptions;
    initialCharacters?: number;
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