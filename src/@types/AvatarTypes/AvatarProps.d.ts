import { ElementType, ReactNode } from "react";
import { CSSProperties } from 'styled-components'

interface AvatarProps {
    kind: 'circular'|'rounded'|'square'|string
    alt?: string
    size?: 'small' | 'largger'|string
    children?: ReactNode
    component?: ElementType
    src?: string
    sx?: CSSProperties
    srcSet?: string
    imgProps?: object
}
;

export {AvatarProps};