import React from 'react';
import Typography from "../../Typograhy/typography";
interface ContentProps {
    children? : React.ReactNode;
    DialogContentText? : string;
}
const DialogContent:React.FC <ContentProps> = ({ children, DialogContentText})=> {
    return (

        <Typography variant={"p"} >
                {children}
        </Typography>
    )};
export default DialogContent;


