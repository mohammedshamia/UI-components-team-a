import React from 'react';
import { Code } from './preformattedTextElement.style';

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
