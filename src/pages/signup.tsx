"use client";
import { useRouter } from "next/router";
import supabase from "../../supabase";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FaGoogle } from "react-icons/fa";
import { useToast } from "@chakra-ui/react";

export default function SignupCard() {
  const router = useRouter(); // Initialize the router

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const signUpNewUser = async () => {
    const toast = useToast();
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,

        options: {
          emailRedirectTo:
            "https://marketing.shikshafinder.com/marketingFormForIndustry",
          data: {
            firstName,
            lastName,
          },
        },
      });
      router.push("/checkmail");
    } catch (error) {
      console.log(error);
      toast({
        title: "error",
        description: "Invalid email or password",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    name="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    name="lastName"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={signUpNewUser}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link
                  href={"/login"}
                  style={{ color: "blue.400", textDecoration: "underline" }}
                >
                  login
                </Link>
                &nbsp;&nbsp;{" "}
                <Link href="https://qgkjakomwapzuhvnrvgr.supabase.co/auth/v1/authorize?provider=google">
                  &nbsp; &nbsp; &nbsp;{" "}
                  <Button
                    leftIcon={<FaGoogle />}
                    colorScheme="blue"
                    variant="outline"
                    mt={4}
                  >
                    Sign up with Google
                  </Button>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
        <Text>
          By continuing you agree to our{" "}
          <a
            href="https://marketing.shikshafinder.com/privacypolicy"
            // style={{color: "blue"}}
          >
            Privacy Policy
          </a>{" "}
          &{" "}
          <a href="https://marketing.shikshafinder.com/termsofservice">
            Terms of Service
          </a>
        </Text>
      </Stack>
    </Flex>
  );
}
