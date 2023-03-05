import {Card, CardHeader, CardBody, Img, Heading, VStack, CardFooter, Text, SimpleGrid, Button } from "@chakra-ui/react";
import React from "react";
import Bruchetta from "../assets/bruchetta.svg"
import GSalad from "../assets/greek salad.jpg"
import LemonDessert from "../assets/lemon dessert.jpg"

function Cards(){
    return (
    <VStack p="20px" >
            <Heading color="#495E57">Our Specials</Heading>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(30vw, 3fr))'>
  <Card>
    <CardHeader>
      <Heading size='md' color="#495E57"> Bruchetta</Heading>
      <Heading size='md' color="#495E57"> $18.99</Heading>
    </CardHeader>
    <CardBody>
    <Img src={Bruchetta} alt="Bruchetta" objectFit="cover" height = "25vw"></Img>
    <Text>Experience the authentic taste of Italy with our exquisite Bruschetta,
                made with fresh crusty bread, sun-ripened tomatoes, garlic,
                and basil, guaranteed to leave your taste buds begging for more.</Text>
    </CardBody>
    <CardFooter>
      <Button bg= "#F4CE14" color="#495E57">Add to Cart</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md' color="#495E57"> Greek Salad</Heading>
      <Heading size='md' color="#495E57"> $18.99</Heading>
    </CardHeader>
    <CardBody>
    <Img src={GSalad} alt="Greek Salad" objectFit="cover" height = "25vw"></Img>
    <Text>
        A refreshing and colorful dish that embodies the spirit of the Mediterranean,
        our Greek salad is made with crisp lettuce, juicy tomatoes,
        tangy feta cheese, briny olives, and a zesty lemon dressing that will transport your taste buds to the sun-drenched shores of Greece.
    </Text>
    </CardBody>
    <CardFooter>
      <Button bg= "#F4CE14" color="#495E57">Add to Cart</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md' color="#495E57"> Lemon Dessert</Heading>
      <Heading size='md' color="#495E57"> $18.99</Heading>
    </CardHeader>
    <CardBody>
      <Img src={LemonDessert} alt="Lemon Dessert" objectFit="cover" height = "25vw"></Img>
      <Text>
        Indulge in our delectable Lemon Dessert,
        crafted with the finest ingredients and bursting with tangy lemon flavor,
        providing a sweet and refreshing end to any meal.</Text>
    </CardBody>
    <CardFooter>
      <Button bg= "#F4CE14" color="#495E57">Add to Cart</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
        </VStack>
    )
}

export default Cards;