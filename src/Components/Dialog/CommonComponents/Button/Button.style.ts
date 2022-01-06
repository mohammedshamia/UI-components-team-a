import styled from 'styled-components'


export const Button= styled.button`
    border: 1px solid rgba(144, 202, 249, 0.5);
    color: rgb(144, 202, 249);
    padding:7px 15px;
    min-width:64px;
    text-transform:uppercase;
    font-weight:500;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    align-items:center;
    border-radius:4px;
    cursor:pointer;
    outline: 0;
    margin: 0;
    font-size:0.875rem;
    background-color:transparent;
    &:hover{
        text-decoration: none;
        background-color: rgba(144, 202, 249, 0.08);
        border: 1px solid rgb(144, 202, 249);
    }

`
