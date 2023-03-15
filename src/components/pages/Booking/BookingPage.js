import React from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";

const BookingPage = () => {
  return (
    <>
      <div className="booking-page">
        <BookingForm />
        <img
          src="./reserved.jpg"
          alt="reserved"
          style={{ width: "50%" }}
          className="reserved"
        />
      </div>
    </>
  );
};
export default BookingPage;
