import Navbar from "./Navbar.tsx";
import { Container } from "@chakra-ui/react";
import Footer from "./SmallFooter.tsx";
// import Header2 from "./Header2";

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
