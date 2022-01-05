import React from 'react';
import { Code } from './preformattedTextElement.style';

//when use preformattedTextElement example:

/* const textElment: string = `
  import * as React from 'react'; 
  import { styled } from '@mui/material/styles';
  const Div = styled('div')(({ theme }) => ({
   ...theme.typography.button,
   backgroundColor: theme.palette.background.paper,
   padding: theme.spacing(1),
 }));
 export default function TypographyTheme() {
 return &ltDiv&gt{"This div's text looks like that of a button."}&lt/Div&gt; `


 
 <PreformattedTextElement textElement={textElment} /> */

interface IProps {
    textElement: string
}
const preformattedTextElement = (props: IProps) => {
    { console.log(props) }
    return (
        <div>
            <Code>
                <pre>
                    <code>
                        <div dangerouslySetInnerHTML={{ __html: props.textElement }} /></code>
                </pre>
            </Code>
        </div>
    );
}

export default preformattedTextElement;
