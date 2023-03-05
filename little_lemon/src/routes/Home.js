import React from "react";
import Header from "../components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Card from "../components/Card";

function Home() {
    return (
        <>
        <ChakraProvider>
            <Header />
            <Hero />
            <Card />
        </ChakraProvider>
        </>
    )
}

export default Home