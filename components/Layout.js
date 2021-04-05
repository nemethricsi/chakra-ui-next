import Navbar from "./Navbar.tsx";
import { Container } from "@chakra-ui/react";
import Footer from "./SmallFooter.tsx";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container maxW='container.lg' mt={4}>
        {children}
      </Container>
      <Footer />
    </>
  );
}
