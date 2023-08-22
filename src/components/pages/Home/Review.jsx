import React from "react";
import "./Review.css";
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
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
const Review = () => {
  return (
    <>
      <Stack direction="row" p="3" spacing={2} bgColor="#0e1814">
        <Card maxW="lg" className="review-body" borderRadius="50">
          <CardHeader>
            <Flex color="#EBF8FF">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name="Shawn Goodheart" src="./person1.jpg" size="lg" />

                <Box>
                  <Heading size="sm">Shawn Goodheart</Heading>
                  <Text fontStyle="italic" fontSize="xs" fontWeight="thin">
                    Content Creator
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody pt="0">
            <Text fontSize="xl" fontWeight="hairline" color="#EBF8FF">
              "Great food, good ambience, I and my partner really enjoyed the
              evening. Thanks for the great service!"
            </Text>
            <span className="review-stars">
              <IconContext.Provider value={{ className: "star-design" }}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </IconContext.Provider>
            </span>
          </CardBody>
        </Card>
        <Card maxW="md" className="review-body" borderRadius="50">
          <CardHeader>
            <Flex color="#EBF8FF">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Emily Witherspoon"
                  src="./person2.jpg"
                  size="lg"
                />

                <Box>
                  <Heading size="sm">Emily Witherspoon</Heading>
                  <Text fontStyle="italic" fontSize="xs" fontWeight="thin">
                    Entrepreneur
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody pt="0">
            <Text fontSize="xl" fontWeight="hairline" color="#EBF8FF">
              "My children took me to Little Lemon on my 60th birthday and
              indeed the food took me to my childhood days in Greece. Really
              enjoyed the evening!"
            </Text>
            <span className="review-stars">
              <IconContext.Provider value={{ className: "star-design" }}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </IconContext.Provider>
            </span>
          </CardBody>
        </Card>
        <Card maxW="md" className="review-body" borderRadius="50">
          <CardHeader>
            <Flex color="#EBF8FF">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name="Mariam" src="./person3.jpg" size="lg" />

                <Box>
                  <Heading size="sm">Mariam</Heading>
                  <Text fontStyle="italic" fontSize="xs" fontWeight="thin">
                    Hairstylist
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody pt="0">
            <Text fontSize="xl" fontWeight="hairline" color="#EBF8FF">
              "My first time tasting Mediterranean food and I must say I am
              impressed! Will surely recommend Little Lemon for their great food
              and hospitality."
            </Text>
            <span className="review-stars">
              <IconContext.Provider value={{ className: "star-design" }}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </IconContext.Provider>
              <AiFillStar />
            </span>
          </CardBody>
        </Card>
      </Stack>
    </>
  );
};

export default Review;
