import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
const ComponentView = styled.div`
    background-color: inherit;
    margin: 1rem;
    padding: 1rem;
    max-width: calc(50vw - 32px);
     display:flex;
    flex-direction: column;
    border-radius: 1rem;
    border: 1px solid rgb(19, 47, 76);
     color: rgb(252, 146, 158);
    overflow: auto;`


    interface IProps {
        element: ReactNode
    }
    const ComponentViewDiv = (props: IProps) => {
        { console.log(props) }
        return (
            <div>
                <ComponentView>
                    <div children={props.element} />
                </ComponentView>
            </div>
        );
    }
    
    export default ComponentViewDiv;