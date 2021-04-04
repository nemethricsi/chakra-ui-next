import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Form,
  Heading,
  Text,
  Code,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

export default function FormComponent() {
  return (
    <>
      <Heading>Form Control</Heading>
      <Text>
        FormControl provides context such as <Code>isInvalid</Code>,{" "}
        <Code>isDisabled</Code>, and
        <Code>isRequired</Code> to form elements.
      </Text>
      <form>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type='email' placeholder='abc@example.com' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl isInvalid>
          <FormLabel>Invalid input</FormLabel>
          <Input type='text' />
          <FormHelperText>We'll never...</FormHelperText>
        </FormControl>
        <FormControl isDisabled>
          <FormLabel>Disabled input</FormLabel>
          <Input type='text' />
          <FormHelperText>We'll never...</FormHelperText>
        </FormControl>
        <FormControl>
          <PasswordInput />
        </FormControl>
      </form>
    </>
  );
}

function PasswordInput() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? "text" : "password"}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
