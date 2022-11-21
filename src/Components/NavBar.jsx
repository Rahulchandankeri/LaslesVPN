import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Assets/Styles/sass/layouts/navbar.scss";
import logo from "../Assets/Images/lasles.svg";
import menu from "../Assets/Images/menu.png";
function NavBar() {
  const [checked, setChecked] = useState(true);
  const [width, height] = useWindowSize();
  const location = useLocation();
  const handleNav = () => {
    setChecked((x) => !x);
  };
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
        if (window.innerWidth > 1100) setChecked(true);
        if (window.innerWidth < 1100) setChecked(false);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  return (
    <header className="nav-bar">
      <div className="wrapper">
        <div className="nav-bar-logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <input type="checkbox" name="checked" id="checked" />
        <label htmlFor="checked" onClick={() => handleNav()} className="nav-btn">
          <img src={menu} alt="logo" />
        </label>
        <div className={checked === true ? "nav-wrapper show" : "nav-wrapper hide"}>
          <div className="header-links">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#features"> Features</a>
              </li>
              <li>
                <a href="#plans">Pricing </a>
              </li>
              <li>
                <a href="#testimonials"> Testimonals</a>
              </li>
              <li>
                <Link to={"/admin-auth"}> Admin</Link>
              </li>
            </ul>
          </div>
          <div className="authOptions">
            <div className="auth-links">
              {location.pathname !== "/sign-in" && (
                <Link to={"/sign-in"} className="signin">
                  Sign in
                </Link>
              )}
              {location.pathname !== "/sign-up" && (
                <Link to={"/sign-up"} className="cta-btn nav-btn">
                  Sign Up
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
