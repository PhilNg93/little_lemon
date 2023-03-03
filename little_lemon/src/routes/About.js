import React from "react";
import Header from "../components/Header";
import { ChakraProvider, Flex} from "@chakra-ui/react";

function About() {
    return (
        <>
        <ChakraProvider>
            <Header />
            <Flex
            alignItems="center"
            justifyContent="center"
            paddingTop={5}>
            <h1>About</h1>

            </Flex>
        </ChakraProvider>
        </>
    )
}

export default About