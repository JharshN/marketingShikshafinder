import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcAdvertising, FcBullish, FcMoneyTransfer } from "react-icons/fc";
import Pricing from "../components/pricing"

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

export default function SimpleThreeColumns() {
  return (
    <>
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

      <Pricing />
    </>
  );
}
