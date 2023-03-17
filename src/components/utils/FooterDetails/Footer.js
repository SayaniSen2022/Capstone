import React from "react";
import "./Footer.css";
import { CiInstagram, CiTwitter, CiFacebook } from "react-icons/ci";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
        <div className="contacts">CONTACT US</div>
        <div>
          <b>Address:</b> 14A, Michigan Avenue, Downtown Chicago, IL-60622-3456
        </div>
        <div>
          <b>Phone number:</b> 800-100-1000
        </div>
        <div>
          <b>Email:</b> LittleLemonChicago@gmail.com
        </div>
      </div>
      <div className="social-group">
        <div className="socials">SOCIAL LINKS</div>
        <div className="social-icons">
          <div>
            <a href="#instagram">
              <IconContext.Provider value={{ className: "footer-icons" }}>
                <CiInstagram />
              </IconContext.Provider>
            </a>
          </div>
          <div>
            <a href="#twitter">
              <IconContext.Provider value={{ className: "footer-icons" }}>
                <CiTwitter />
              </IconContext.Provider>
            </a>
          </div>
          <div>
            <a href="#facebook">
              <IconContext.Provider value={{ className: "footer-icons" }}>
                <CiFacebook />
              </IconContext.Provider>
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">&copy; Little Lemon, 2023</div>
    </footer>
  );
};
export default Footer;
