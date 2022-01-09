import * as React from 'react';
import {Wrapper, Container } from './Wrapper.style'
import {useEffect, useRef} from "react";
interface DialogProps {
    children? : React.ReactNode;
    open:boolean;
    setIsOpen:(value: boolean | ((value:boolean) => boolean)) => void;
}
const Dialog:React.FC <DialogProps> = ({children, open,setIsOpen,  ...props})=> {
    const wrapperRef = useRef(null);
    const closeByRef = (e:React.MouseEvent) => {
        if (wrapperRef.current === e.target) {
            setIsOpen(()=> false);
        }
    };
    return (
        <>
        {open&&
        <Container ref={wrapperRef} onClick={closeByRef}>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
        }
      </>
    )};
export default Dialog;


