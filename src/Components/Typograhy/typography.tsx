import { Container } from './typography.style'
import { IPropTypography } from './types'

// when use Typography Example:
/*

<Typography variant="h1">
h1. Heading
</Typography>

<Typography variant="p" >
paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
</Typography>

<Typography variant="span" weight='bold' fontSize={12}>
span Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
tenetur unde suscipit, quam beatae rerum inventore consectetur,
neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
Eum quasi quidem quibusdam 
</Typography>
*/

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