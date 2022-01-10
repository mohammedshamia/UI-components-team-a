import * as React from 'react';
import Typography from '../../Typograhy/typography'
import { Title } from './Title.style'
interface TitleProps {
    title:string
}
const DialogTitle:React.FC <TitleProps> = ({title})=> {
    return (
        <Title><Typography variant="h2">{title}</Typography></Title>

    )};
export default DialogTitle;


