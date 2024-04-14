import React from 'react'
import Imgg from './Imgg'
import {
  Image,
  Stack,
  Card,
  CardBody,
  Heading,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import { useState } from 'react';

interface ImageInputButtonProps {
  getDataSetter: (callback: (prevalue: any) => any) => void;
}
function introcard() {
   let [FullData, setFullData] = useState({
     scName: "",
     email: "",
     DISE: "",
   });
  
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">
              Ask your doubts ,solve your queries to your personal Ai chatbot
            </Heading>

            <Text py="2">
              With help of your board Trained chatbot you will be able to
              generate presice answer.
            </Text>
          </CardBody>

          <CardFooter>
             <Imgg getDataSetter={setFullData} />
          </CardFooter>
        </Stack>
      </Card>
      ;
    </>
  );
}

export default introcard