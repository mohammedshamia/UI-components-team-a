import * as React from 'react';
import {Wrapper } from './Wrapper.style'
interface ModalProps {
    children? : React.ReactNode;
    open:boolean;
    onClose?:()=> void

}
const Dialog:React.FC <ModalProps> = ({children, open, onClose})=> {
    return (
        <>
        {open&&
        <Wrapper>
            {children}
        </Wrapper>
        }
      </>
    )};
export default Dialog;


