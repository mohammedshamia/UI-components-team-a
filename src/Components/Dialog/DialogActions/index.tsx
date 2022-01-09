import React from 'react'
import { Actions } from './DialogAction.style'
interface ActionProps {
	children? : React.ReactNode;

}
const DialogAction:React.FC <ActionProps> = ( { children } ) => {
	return (
		<Actions>
			{children}
		</Actions>
)};

export default DialogAction