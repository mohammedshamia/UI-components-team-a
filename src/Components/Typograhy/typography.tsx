import { Container } from './typography.style'
import { IPropTypography } from './types'


const Typography: React.FC<IPropTypography> = ({ variant, children, style, ...props }:
     IPropTypography) => {
    const Component = variant || "p"
    return (
        <Container {...props}>
            <Component style={style} {...props}> {children} </Component>
        </Container>

    )
}
export default Typography