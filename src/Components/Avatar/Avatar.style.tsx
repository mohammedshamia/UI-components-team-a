import styled from "styled-components";
import {AvatarProps} from '../../@types/AvatarTypes/AvatarProps';

export const Avatar = styled.div<AvatarProps>`
    width: ${({ size }) =>
    (size === "small" && `4rem`) || (size === "largger" && `6rem`)};
    height: ${({ size }) =>
    (size === "small" && `4rem`) || (size === "largger" && `6rem`)};
    border-radius: ${({ kind }) =>
    (kind === "circular" && `50%`) ||
    (kind === "square" && `none`) ||
    (kind === "rounded" && `0.35rem`)};
    font-size: ${({ size }) =>
    (size === "small" && `1.25rem`) || (size === "largger" && `1.5rem`)};
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
`