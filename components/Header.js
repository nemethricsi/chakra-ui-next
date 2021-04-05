import React, { useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
    </>
  );
}

function NavBarContainer({ children, ...props }) {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
}

function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize='lg' fontWeight='bold'>
        Logo
      </Text>
    </Box>
  );
}

function MenuToggle({ toggle, isOpen }) {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
}

function MenuItem({ children, isLast, to = "/", ...rest }) {
  return (
    <NextLink href={to}>
      <Text display='block' {...rest}>
        {children}
      </Text>
    </NextLink>
  );
}

function MenuLinks() {
  return (
    <>
      <Stack
        spacing={8}
        align='center'
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      ></Stack>
    </>
  );
}
