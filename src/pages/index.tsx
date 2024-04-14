import Head from "next/head";
import { useAuthContext } from "@/context";
import { NextSeo } from "next-seo";
import Footer from "../components/footer";
import { SimpleGrid } from "@chakra-ui/react";
import { FcAdvertising, FcBullish, FcMoneyTransfer } from "react-icons/fc";
import Link from "next/link";
import { ReactElement } from "react";

import {
  Container,
  chakra,
  Stack,
  Text,
  Button,
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react";


interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};



export default function Home() {
  const { user } = useAuthContext();
  return (
    <>
      <NextSeo
        title="Shiksha Finder"
        description="Show case the quality of education"
        openGraph={{
          url: "https://marekting.shikshafinder.com/",
          title: "Let's promote Education quality",
          description: "Home page of shiksha finder",
          images: [
            {
              url: "",
              alt: "Shiksha Finder == happy students",
            },
          ],
          site_name: "shikshafinder.com",
          type: "website",
        }}
      />
      <Head>
        <meta
          name="shikshafinder For Marketing"
          content="Shiksha Finder marketing,most effective way to market students ,how to market my stationary brand?,what is the best way to reach out to students?,Generation Z market place,ads schools"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Container p={{ base: 8, sm: 14 }}>
        <Stack direction="column" spacing={6} alignItems="center">
          <chakra.h1
            fontSize={{ base: "4xl", sm: "5xl" }}
            fontWeight="bold"
            textAlign="center"
            maxW="600px"
          >
            Market to those who{" "}
            <chakra.span
              color="-moz-initial"
              bg="linear-gradient(transparent 90%, #83e9e7 50%)"
            >
              seek your services
            </chakra.span>
          </chakra.h1>
          <Text maxW="550px" fontSize="xl" textAlign="center">
            Shiksha Finder is a platform where students come to find schools and
            educational services, so your target audience is here. We provide
            one of the most affordable and efficient marketing plans to reach
            out to your students.
          </Text>
          <Link href={"/marketingFormForIndustry"}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              w={{ base: "100%", sm: "auto" }}
              spacing={5}
            >
              <Button
                colorScheme="teal"
                rounded="md"
                size="lg"
                height="3.5rem"
                fontSize="1.2rem"
              >
                Get Started
              </Button>
            </Stack>
          </Link>
        </Stack>
      </Container>
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FcAdvertising} w={10} h={10} />}
            title={"Targeted ADS"}
            text={
              "We can help you find the perfect students for your school. We will promote your school to promising students who meet your requirements and live in your area."
            }
          />
          <Feature
            icon={<Icon as={FcBullish} w={10} h={10} />}
            title={"Best call to action"}
            text={
              "After watching your ADS, students can directly feel the admission form of your school."
            }
          />
          <Feature
            icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
            title={"Value for Money"}
            text={
              "You will be able to make an impression on the minds of parents and students who are finding the schools and actively looking out for admission"
            }
          />
        </SimpleGrid>
      </Box>

      <Footer />
    </>
  );
}
