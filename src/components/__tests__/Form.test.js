import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../pages/Booking/BookingForm";
import { Button, FormLabel } from "@chakra-ui/react";

it("Renders the booking form heading", async () => {
  render(<BookingForm />);
  const headingElement = screen.getByRole("heading", { name: "Book Now" });
  expect(headingElement).toBeInTheDocument();
});

it("should render input element", async () => {
  render(<BookingForm />);
  const inputElement = screen.getByPlaceholderText(/Enter number of guests/i);
  expect(inputElement).toBeInTheDocument();
});

test("enables button when date is entered", () => {
  render(<BookingForm />);

  const buttonElement = screen.getByRole("button");

  expect(buttonElement).toHaveAttribute("disabled");
  expect(buttonElement).toBeDisabled();
});
