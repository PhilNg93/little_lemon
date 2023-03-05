import React from "react";
import chef from "../assets/Mario and Adrian A.jpg";
import { Flex, Text, Img, Heading, Button, VStack } from "@chakra-ui/react";

function Hero() {
  return (
    <Flex
      bg="#495E57"
      alignItems="center"
      justifyContent="space-evenly"
      minHeight="25vh"
      width="100vw"
    >
    <VStack
    alignItems="flex-start" textAlign="left" justifyContent="center" mb={4}>
      <Text maxW="500px">
        <Heading fontSize="4xl" fontWeight="bold" mb={4} color="white">
          The Little Lemon
        </Heading>
        <Text fontSize="xl" color="white">
          We are a charming and cozy family-owned restaurant, specializing in
          Mediterranean cuisine that is prepared with the utmost care and
          authenticity.
        </Text>
      </Text>
      <Button bg= "#F4CE14" color="#495E57"> Reserve a table </Button>
    </VStack>
      <Img
        src={chef}
        alt="Little Lemon Chefs"
        height="25vh"
        objectFit="cover"
        mr={4}
        p={4}
      />
    </Flex>
  );
}

export default Hero;
