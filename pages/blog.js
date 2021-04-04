import Head from "next/head";
import { Heading, Text } from "@chakra-ui/react";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Heading>Blog</Heading>
      <Text>Main Content Here</Text>
    </>
  );
}
