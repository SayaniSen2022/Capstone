import React from "react";
import Hero from "./Hero";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
} from "@chakra-ui/react";

const Main = () => {
  return (
    <>
      <Hero />
      <Stack direction="row" spacing={1}>
        <Card maxW="md" bg="pink.900">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name="Segun Adebayo" src="./person1.jpg" />

                <Box>
                  <Heading size="sm">Shawn Goodheart</Heading>
                  <Text>Content Creator</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              Great food, good ambience, I and my partner really enjoyed the
              evening. Thanks for the great service!
            </Text>
          </CardBody>
        </Card>
        <Card maxW="md" bg="pink.800">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name="Segun Adebayo" src="./person2.jpg" />

                <Box>
                  <Heading size="sm">Emily Witherspoon</Heading>
                  <Text>Entrepreneur</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              My children took me to Little Lemon on my 60th birthday and indeed
              the food took me to my childhood days in Greece. Really enjoyed
              the evening!
            </Text>
          </CardBody>
        </Card>
        <Card maxW="md" bg="pink.900">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name="Segun Adebayo" src="./person3.jpg" />

                <Box>
                  <Heading size="sm">Mariam</Heading>
                  <Text>Hairstylist</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              My first time tasting Mediterranean food and I must say I am
              impressed! Will surely recommend Little Lemon for their great food
              and hospitality.
            </Text>
          </CardBody>
        </Card>
      </Stack>
    </>
  );
};
export default Main;
