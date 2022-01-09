import { CSSProperties } from 'react';

export interface IPropsTypographyStyle       {
    color?: string
    fontSize?: number |string,
    margin?: number |string,
    weight?: number |string,
    padding?: number |string,
    lineHeight?:number |string,
    align?:number |string,
    style?: CSSProperties
}


type variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"|"span" ;

export interface IPropTypography extends React.HTMLAttributes<HTMLHeadingElement> {
    color?: string,
    children?: React.ReactNode,
    variant?: variant,
    fontSize?: string | number,
    margin?: string | number,
    weight?: string,
    padding?: string | number,
    lineHeight?:string | number,
    align?:string,
    style?: CSSProperties,
}