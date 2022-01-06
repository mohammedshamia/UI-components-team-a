import * as React from 'react';
import { Button } from './Button.style'
interface ButtonProps {
    text:string,
    onClick : ()=> void,
}
const ButtonDialog:React.FC <ButtonProps> = ({text, onClick})=> {
    return (
        <Button onClick={onClick}>
            {text}
        </Button>
    )};
export default ButtonDialog;
