import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  Input,
  Select,
  Button,
  Stack,
  Box,
} from "@chakra-ui/react";

const BookingForm = () => {
  const [guests, setGuests] = useState(0);

  const updateGuest = (e) => {
    setGuests(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <FormControl mr={3} isRequired>
      <FormLabel htmlFor="res-date" mb={2}>
        Choose Date & Time
      </FormLabel>
      <Input
        focusBorderColor="blue.200"
        type="datetime-local"
        placeholder="Select date and time"
        mb={2}
      />

      <FormLabel htmlFor="guests" mb={2}>
        Number of guests
      </FormLabel>
      <NumberInput
        focusBorderColor="blue.200"
        mb={2}
        value={guests}
        onChange={updateGuest}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <FormLabel htmlFor="occasion" mb={2}>
        Occasion
      </FormLabel>
      <Select focusBorderColor="blue.200" id="occasion" mb={2}>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Others</option>
      </Select>
      <Stack direction="column">
        <Box display="flex" alignItems="center" justifyContent="center" py={12}>
          <Button
            size="md"
            type="submit"
            colorScheme="teal"
            variant="solid"
            onClick={handleSubmit}
          >
            Make Your Reservation
          </Button>
        </Box>
      </Stack>
    </FormControl>
  );
};

export default BookingForm;
