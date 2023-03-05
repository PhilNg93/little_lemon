import React from "react";
import Header from "../components/Header";
import { ChakraProvider} from "@chakra-ui/react";

function Menu() {
    return (
        <>
        <ChakraProvider>
            <Header />
            </ChakraProvider>
        </>
    )
}

export default Menu