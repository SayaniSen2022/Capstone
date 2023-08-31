import React, { useEffect, useState } from "react";
import "./BookingForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchAPI, submitAPI } from "./../../utils/ApiData";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  HStack,
  Stack,
  Box,
  Image,
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import AvailableTimes from "./AvailableTimes";

const BookingForm = () => {
  const [ocassion, setOcassion] = useState("");
  const [slotDisabled, setSlotDisabled] = useState(true);
  const [slots, setSlots] = useState([]);
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      date: "",
      guest: "",
    },
    validationSchema: Yup.object({
      date: Yup.date().required(),
      guest: Yup.string().required("Please enter number of guests"),
    }),

    onSubmit: () => {
      let submitData = submitAPI(formik.values);
      debugger;
      if (submitData) {
        toast({
          title: "Success",
          description: `Your reservation for ${formik.values.date} is successful.`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setSlots([]);
        setSlotDisabled(true);
      }

      formik.resetForm();
    },
  });

  const updateDate = (dateStr) => {
    if (dateStr === "") return;
    let response = fetchAPI(new Date(formatDate(dateStr)));
    setSlotDisabled(false);
    console.log(response);
    // setDate(e.target.value);
    setSlots(response);
  };
  useEffect(() => {
    updateDate(formik.values.date);
  }, [formik.values.date]);

  const formatDate = (dateString) => {
    let dateArray = dateString.split("-");
    return dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0];
  };

  const updateOcassion = (e) => {
    setOcassion(e.target.value);
  };

  return (
    <>
      <div>
        <h1 className="booking-heading">Reserve A Table</h1>
        <p>
          Please fill the form below accurately to enable us serve you better!..
          welcome!
        </p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <Stack mt="5">
          <Box>
            <FormControl isRequired>
              <FormLabel htmlFor="first-name" fontWeight="semibold">
                First Name
              </FormLabel>
              <Input name="first-name" type="text" w="80" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="last-name" fontWeight="semibold">
                Last Name
              </FormLabel>
              <Input name="last-name" type="text" w="80" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>E-mail</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="ex:myname@example.com"
                w="80"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input name="phone" type="number" w="80" />
            </FormControl>

            <FormControl
              isInvalid={formik.errors.date && formik.touched.date}
              isRequired
            >
              <FormLabel htmlFor="res-date" fontWeight="semibold">
                Choose Date
              </FormLabel>
              <Input
                name="date"
                type="date"
                w="80"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="res-time" fontWeight="semibold">
                Available Slots
              </FormLabel>
              <AvailableTimes isDisabled={slotDisabled} timeData={slots} />
            </FormControl>
            <FormControl
              isInvalid={formik.errors.guest && formik.touched.guest}
              isRequired
            >
              <FormLabel htmlFor="guests" fontWeight="semibold">
                Number of guests
              </FormLabel>
              <Input
                name="guest"
                type="number"
                min="2"
                max="10"
                w="80"
                placeholder="Enter number of guests"
                {...formik.getFieldProps("guest")}
              />
              <FormErrorMessage>{formik.errors.guest}</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="occasion" fontWeight="semibold">
                Occasion
              </FormLabel>
              <Select
                w="80"
                id="occasion"
                value={ocassion}
                onChange={updateOcassion}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Others</option>
              </Select>
            </FormControl>
          </Box>
          <Box alignItems="center" justifyContent="center" py={5}>
            <Button
              size="md"
              type="submit"
              value="submit"
              isDisabled={formik.values.date === ""}
            >
              Make Your Reservation
            </Button>
          </Box>
        </Stack>
      </form>
    </>
  );
};

export default BookingForm;
