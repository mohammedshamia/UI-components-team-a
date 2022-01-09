import { Link } from "react-router-dom";
import {
  BottonNotFound,
  Box,
  Container,
  FullBox,
  H1,
  P,
} from "./NotFound.style";

export default function NotFoundPage() {
  return (
    <Container>
      <Box>
        <FullBox>
          <H1>404</H1>
          <P>This page could not be found.</P>
        </FullBox>
        <BottonNotFound as={Link} to="/">
          Home
        </BottonNotFound>
      </Box>
    </Container>
  );
}
