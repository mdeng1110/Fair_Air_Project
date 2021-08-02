import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "./fairairlogo.svg";
import Login from "../../pages/login";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavLink to="/">
          <img src={logo} width="160" alt="logo" />
        </NavLink>
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About Us
          </NavLink>
          <NavLink to="/aqi" activeStyle>
            About AQI
          </NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/login">
            <Login></Login>
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
