import React from "react";
import Header from "../components/Header";
import { ChakraProvider } from "@chakra-ui/react";

function Login() {
    return (
        <>
        <ChakraProvider>
                <Header />
        </ChakraProvider>
        </>
    )
}

export default Login