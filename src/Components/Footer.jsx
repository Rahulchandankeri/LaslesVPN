import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/sass/layouts/footer.scss";
import logo from "../Assets/Images/lasles.svg";
import Facebook from "../Assets/Images/Facebook.svg";
import Instagram from "../Assets/Images/Instagram.svg";
import Twitter from "../Assets/Images/Twitter.svg";
function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="company-info">
          <div className="info">
            <div className="footer-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="company-desc-text">
              <p className="caption">
                <span>LaslesVPN</span> is a private virtual network that has unique features and has high security.
              </p>
            </div>
            <div className="social-media-links">
              <Link to={"/facebook"} className="social-media-icon-ctr">
                <img className="social-media-icon" src={Facebook} alt="Facebook" />
              </Link>
              <Link to={"/Instagram"} className="social-media-icon-ctr">
                <img className="social-media-icon" src={Instagram} alt="Instagram" />
              </Link>
              <Link to={"/Twitter"} className="social-media-icon-ctr">
                <img className="social-media-icon" src={Twitter} alt="Twitter" />
              </Link>
            </div>
            <p className="copyright">©2020LaslesVPN</p>
          </div>{" "}
        </div>
        <div className="footer-links">
          <div>
            <p className="head-label">Product</p>
            <Link to={"/"} className="footer-link" href="#">
              Download
            </Link>
            <Link to={"/"} className="footer-link" href="#">
              Pricing
            </Link>
            <Link to={"/"} className="footer-link" href="#">
              Locations
            </Link>
            <Link to={"/"} className="footer-link" href="#">
              Server
            </Link>
            <Link to={"/"} className="footer-link" href="#">
              Countries
            </Link>
            <Link to={"/"} className="footer-link" href="#">
              Blog
            </Link>
          </div>
          <div className="link-col">
            <p className="head-label">Engage</p>
            <Link to={"/"} className="footer-link" href="#">
              LaslesVPN?
            </Link>
            <Link to={"/"} className="footer-link" href="#">
              FAQ
            </Link>
            <Link to={"/"} className="footer-link" href="#">
              Tutorials
            </Link>
            <Link to={"/"} className="footer-link" href="#">
              About Us
            </Link>
            <Link to={"/"} className="footer-link" href="#">
              Privacy Policy
            </Link>
            <Link to={"/"} className="footer-link" href="#">
              Terms of Services
            </Link>
          </div>
          <div className="link-col">
            <p className="head-label">Earn Money</p>
            <Link to={"/"} className="footer-link" href="#">
              Affiliate
            </Link>
            <Link to={"/"} className="footer-link" href="#">
              Become Partner
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
