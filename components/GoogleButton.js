import { FcGoogle } from "react-icons/fc";
// import { IoLogoSlack } from "react-icons/io";
import { Button, Center, Text } from "@chakra-ui/react";

export default function GoogleButton() {
  return (
    <Center>
      <Button
        w={"full"}
        maxW={"md"}
        variant={"outline"}
        leftIcon={<FcGoogle />}
      >
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
  );
}
