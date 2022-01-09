import * as React from 'react';
import {Wrapper, Container } from './Wrapper.style'
interface DialogProps {
    children? : React.ReactNode;
    open:boolean;
    onClose?:()=> void;
}
const Dialog:React.FC <DialogProps> = ({children, open, onClose, ...props})=> {
    console.log(open, 'open');
    return (
        <>
        {open&&
        <Container>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
        }
      </>
    )};
export default Dialog;


