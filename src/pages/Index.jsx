import React, { useState } from "react";
import { Box, Button, Container, Heading, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { FaCat, FaRandom, FaList } from "react-icons/fa";

const Index = () => {
  const [breeds, setBreeds] = useState([]);
  const [randomFact, setRandomFact] = useState("");
  const [facts, setFacts] = useState([]);

  const fetchBreeds = async () => {
    try {
      const response = await fetch("/breeds");
      const data = await response.json();
      setBreeds(data);
    } catch (error) {
      console.error("Error fetching breeds:", error);
    }
  };

  const fetchRandomFact = async () => {
    try {
      const response = await fetch("/fact");
      const data = await response.json();
      setRandomFact(data.fact);
    } catch (error) {
      console.error("Error fetching random fact:", error);
    }
  };

  const fetchFacts = async () => {
    try {
      const response = await fetch("/facts");
      const data = await response.json();
      setFacts(data);
    } catch (error) {
      console.error("Error fetching facts:", error);
    }
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" textAlign="center">
          Cat Facts API
        </Heading>

        <Box w="100%" textAlign="center">
          <Button leftIcon={<FaCat />} colorScheme="teal" onClick={fetchBreeds}>
            Get Breeds
          </Button>
          <List spacing={3} mt={4}>
            {breeds.map((breed, index) => (
              <ListItem key={index}>
                <Text fontWeight="bold">{breed.breed}</Text>
                <Text>Country: {breed.country}</Text>
                <Text>Origin: {breed.origin}</Text>
                <Text>Coat: {breed.coat}</Text>
                <Text>Pattern: {breed.pattern}</Text>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box w="100%" textAlign="center">
          <Button leftIcon={<FaRandom />} colorScheme="orange" onClick={fetchRandomFact}>
            Get Random Fact
          </Button>
          {randomFact && (
            <Text mt={4} fontSize="lg">
              {randomFact}
            </Text>
          )}
        </Box>

        <Box w="100%" textAlign="center">
          <Button leftIcon={<FaList />} colorScheme="purple" onClick={fetchFacts}>
            Get Facts
          </Button>
          <List spacing={3} mt={4}>
            {facts.map((fact, index) => (
              <ListItem key={index}>
                <Text>{fact.fact}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
