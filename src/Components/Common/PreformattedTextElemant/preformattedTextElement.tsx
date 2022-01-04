import React from 'react';
import { Code } from './preformattedTextElement.style';

interface IProps {
    textElement:
}
const preformattedTextElement = (props: IProps) => {
    return (
        <div>
            <pre>
                <Code>
                    {props}
                </Code>
            </pre>
        </div>
    );
}

export default preformattedTextElement;
