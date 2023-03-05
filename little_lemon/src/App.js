import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Login from "./routes/Login";
import Menu from "./routes/Menu";
import Reservations from "./routes/Reservations";
import OnlineOrder from "./routes/OnlineOrder";
import {Route, Routes} from "react-router-dom";
import { ChakraProvider, Text, extendTheme } from "@chakra-ui/react";



const theme = extendTheme({
  fonts: {
    heading: "Markazi Text",
    body: "Karla Regular",
  },
  colors: {
    brand: {
      500: "#49SE57",
    },
  },
});

function App() {
  return (
    <>
    <ChakraProvider theme={theme}>
      <Text fontFamily="heading"
            fontSize="16pt"
            color="brand.500">
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/menu" element = {<Menu />}/>
        <Route path = "/online-order" element = {<OnlineOrder />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
      </Routes>
      </Text>
    </ChakraProvider>
    </>
  );
}

export default App;
