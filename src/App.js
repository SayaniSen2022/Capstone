import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/pages/Home/Main";
import SharedLayout from "./components/SharedLayout";
import BookingPage from "./components/pages/Booking/BookingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="reservations" element={<BookingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
