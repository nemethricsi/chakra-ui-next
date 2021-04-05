import { useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  Heading,
  Text,
  Button,
  Divider,
  Kbd,
  Wrap,
  WrapItem,
  Link,
  LinkBox,
  LinkOverlay,
  Box,
  Image,
  PinInput,
  PinInputField,
  HStack,
  Flex,
  Avatar,
  Badge,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import AlertDialog from "../components/AlertDialog";
import Alert from "../components/Alert";
import Toast from "../components/Toast";
import FormComponent from "../components/FormComponent";
import Accordion from "../components/Accordion";
import BlogPostWithImage from "../components/BlogPostWithImage";
import CardWithIllustration from "../components/CardWithIllustration";
import GoogleButton from "../components/GoogleButton";
import GridListWithHeading from "../components/GridListWithHeading";
import CtaWithIllustration from "../components/CtaWithIllustration.tsx";
import Pricing from "../components/Pricing.tsx";

export default function Chakra() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Create Chakra UI Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CtaWithIllustration />
      <GridListWithHeading />
      <Heading>H2 heading</Heading>
      <Text>Main Content Here</Text>
      <Button colorScheme='red' onClick={() => setIsOpen(true)}>
        Alert Dialog
      </Button>
      <Divider orientation='horizontal' my={4} />
      <span>
        <Kbd>Cmd</Kbd> + <Kbd>C</Kbd>
      </span>
      <Divider orientation='horizontal' my={4} />
      <Alert />
      <Divider orientation='horizontal' my={4} />
      <Wrap>
        <WrapItem>
          <Toast status='info' button={`Show info Toast`} />
        </WrapItem>
        <WrapItem>
          <Toast status='success' button={`Show success Toast`} />
        </WrapItem>
        <WrapItem>
          <Toast status='error' button={`Show error Toast`} />
        </WrapItem>
        <WrapItem>
          <Toast status='warning' button={`Show warning Toast`} />
        </WrapItem>
      </Wrap>
      <Divider orientation='horizontal' my={4} />
      <Heading as='h3' size='lg'>
        With Left Accent
      </Heading>
      <Wrap>
        <WrapItem>
          <Toast
            status='info'
            button={`Show info Toast`}
            variant={`left-accent`}
          />
        </WrapItem>
        <WrapItem>
          <Toast
            status='success'
            button={`Show success Toast`}
            variant={`left-accent`}
          />
        </WrapItem>
        <WrapItem>
          <Toast
            status='error'
            button={`Show error Toast`}
            variant={`left-accent`}
          />
        </WrapItem>
        <WrapItem>
          <Toast
            status='warning'
            button={`Show warning Toast`}
            variant={`left-accent`}
          />
        </WrapItem>
      </Wrap>
      <Divider orientation='horizontal' my={4} />
      <GoogleButton />
      <Divider orientation='horizontal' my={4} />
      <Heading as='h3' size='lg'>
        Links
      </Heading>
      <Link as={NextLink} href={`/blog`}>
        Insider link (Blog)
      </Link>
      <br />
      <Link href='https://chakra-ui.com' isExternal>
        Chakra Design system <ExternalLinkIcon mx='2px' />
      </Link>
      <Divider orientation='horizontal' my={4} />
      <Heading as='h3' size='lg' mb='4'>
        LinkBox, LinkOverlay
      </Heading>
      <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
          13 days ago
        </Box>
        <Heading size='md' my='2'>
          <NextLink href='#' passHref>
            <LinkOverlay>
              New Year, New Beginnings: Smashing Workshops & Audits
            </LinkOverlay>
          </NextLink>
        </Heading>
        <Text>
          Catch up on what’s been cookin’ at Smashing and explore some of the
          most popular community resources.
        </Text>
        <Box as='a' color='teal.400' href='#' fontWeight='bold'>
          Some inner link
        </Box>
      </LinkBox>
      <Divider orientation='horizontal' my={4} />
      <Box>
        <Image src='//unsplash.it/500/500' alt='unsplash' />
      </Box>
      <Divider orientation='horizontal' my={4} />
      <FormComponent />
      <Divider orientation='horizontal' my={4} />
      <HStack>
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Divider orientation='horizontal' my={4} />
      <Flex>
        <Avatar src='https://bit.ly/sage-adebayo' />
        <Box ml='3'>
          <Text fontWeight='bold'>
            Segun Adebayo
            <Badge ml='1' colorScheme='green'>
              New
            </Badge>
          </Text>
          <Text fontSize='sm'>UI Engineer</Text>
        </Box>
      </Flex>
      <Divider orientation='horizontal' my={4} />
      <Accordion />
      <Divider orientation='horizontal' my={4} />
      <BlogPostWithImage />
      <Divider orientation='horizontal' my={4} />
      <Pricing />
      <Divider orientation='horizontal' my={4} />
      <CardWithIllustration />
      <Divider orientation='horizontal' my={4} />

      <AlertDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
