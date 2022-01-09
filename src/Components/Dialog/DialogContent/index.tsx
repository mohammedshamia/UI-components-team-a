import * as React from 'react';
import {Content, ContentText} from './DialogContent.style'
interface ContentProps {
    children? : React.ReactNode;
    DialogContentText? : string;
}
const DialogContent:React.FC <ContentProps> = ({ children, DialogContentText})=> {
    return (
        <Content>
            <ContentText>
                {{children}}
            </ContentText>

        </Content>
    )};
export default DialogContent;


