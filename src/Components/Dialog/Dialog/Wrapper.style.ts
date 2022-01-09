import styled from 'styled-components'


export const Wrapper= styled.div`
   background-color:rgb(18, 18, 18);
   color: rgb(255, 255, 255);
   transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
    background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
    margin: 32px;
    position: relative;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    max-height: calc(100% - 64px);
`;
