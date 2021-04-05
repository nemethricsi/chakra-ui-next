import Head from "next/head";
import NextLink from "next/link";
import { Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Chakra UI Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Heading>Cím</Heading>
      <Text>Szöveg</Text>
    </>
  );
}
