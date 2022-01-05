import styled, {css} from "styled-components";
import {AvatarProps} from '../../@types/AvatarTypes/AvatarProps';

const rem = (size?: string | undefined) : number =>{
    if(typeof size !== 'undefined' && (size.split('rem')[0] !== '1.25' || size.split('rem')[0] !== '1.5')){
        return parseInt(size.split('rem')[0]);
    }
    else {
        return 1.25;
    }
}

export const Avatar = styled.div<AvatarProps>`
    width: ${({ size }) =>
    (size === "small" && `4rem`) || (size === "largger" && `6rem`) || size};
    height: ${({ size }) =>
    (size === "small" && `4rem`) || (size === "largger" && `6rem`) || size};
    border-radius: ${({ kind }) =>
    (kind === "circular" && `50%`) ||
    (kind === "square" && `none`) ||
    (kind === "rounded" && `0.35rem`)};
    color: white;
    background-color: red;
    margin-left: -8px;
    font-size: ${({ size }) =>
    (size === "small" && `1.25rem`) || (size === "largger" && `1.5rem`) || (rem(size) - 3 + 'rem').toString() };
    display: flex;
    overflow: hidden;
    position: relative;
    align-items: center;
    flex-shrink: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 1;
    justify-content: center;
    > img {
        color: transparent;
        width: 100%;
        height: 100%;
        object-fit: cover;
        text-align: center;
        text-indent: 10000px;
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

Avatar.defaultProps = {
    size: 'small' || '4rem',
    kind: 'circular',
};