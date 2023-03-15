import { Outlet } from "react-router-dom";
import Nav from "./utils/Navbar/Nav";
import Footer from "./utils/FooterDetails/Footer";

const SharedLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
