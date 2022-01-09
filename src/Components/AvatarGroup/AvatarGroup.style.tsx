import { ReactNode } from "react";
import styled from "styled-components";
import { AvatarGroupOptions } from "../../@types/AvatarTypes/AvatarGroup";
import { AvatarProps, ICompAvatar } from "../../@types/AvatarTypes/AvatarProps";
export const GroupDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    & img:first-of-type {
        margin-left: 3px;
    }
    &:hover img:nth-of-type(n+2) {
        margin-left: 3px;
    }
    &:hover .overflow-hidden {
        opacity: 0;
    }
    &:not(:hover) .hidden {
        opacity: 0;
        width: 0;
        margin-left: 0;
    }
`
export interface IAvatarGroup extends AvatarGroupOptions {
    kind: 'circular'|'rounded'|'square'|string
    // Array of strings with avatar names or Avatar object for more control
    avatars: (string | HTMLImageElement)[];
}