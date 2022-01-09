import * as React from 'react';
import {Field } from './Form.style'
interface TextFieldProps {
	 autoFocus:boolean;
	 id:string;
	 label:string;
	 fullWidth:boolean;
	 children? : React.ReactNode;
}
const TextField:React.FC <TextFieldProps> = ({autoFocus,label,id,fullWidth, children, ...props})=> {
	return (
		<Field>
		<label>{label}</label>
		<input name={id} />
		</Field>
	)};
export default TextField;


