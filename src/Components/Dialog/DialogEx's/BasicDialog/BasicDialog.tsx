import * as React from 'react';
import ButtonDialog from '../../CommonComponents/Button';

interface BasicDialogProps {
    // text:string,
    // onClick : ()=> void,
}
const BasicDialog:React.FC <BasicDialogProps> = ({})=> {
    return (
       <>
           <p>Selected : {}</p>
           <ButtonDialog text='Open Simple Dialog' onClick={()=>{}}/>
       </>
    )};
export default BasicDialog;


