import React from "react";
import Typography from "../../Components/Typograhy/typography";
import { ContentLeft, ContentRight, Wrapper ,Button} from './homePage.style'
export default function HomePage() {
	return <Wrapper><ContentLeft>
		<Typography variant="h1" fontSize="2rem" color=" #0A1929">
			The React
			<Typography variant="span" style={{ color: " blue" }}>
				UI library
			</Typography>
			you always wanted
		</Typography>
		<Typography color="#3E5060" lineHeight="1.5"
		>MUI provides a robust, customizable, and accessible library of
			foundational and advanced components, enabling you to build your
			own design system and develop React applications faster.
		</Typography>
		<Button to="/components/typography">Get started  <Typography variant="span" style={{ marginLeft:'2rem',color:'white' }}>&gt;</Typography></Button>
	</ContentLeft>
		<ContentRight>
			<Typography variant="h1" color="#3E5060">  h1. Heading</Typography>
			<Typography variant="h2" color="#3E5060">  h2. Heading</Typography>
			<Typography variant="h3" color="#3E5060">  h3. Heading</Typography>

		</ContentRight>
	</Wrapper>;
}
