import { useToast, Button } from "@chakra-ui/react";

export default function ToastExample({ status, button, variant }) {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status,
          variant,
          duration: 9000,
          isClosable: true,
        })
      }
    >
      {button}
    </Button>
  );
}
