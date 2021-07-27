import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import logo from './fairairlogo.svg';
import Login from '../../pages/login';

const Navbar = () => {
  return (
    <>
      <Nav>
          
        <Bars />
        <img src= {logo} width = "300" alt = "fair air"/>  
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About Us
          </NavLink>
          <NavLink to='/aqi' activeStyle>
            About AQI
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>
            <Login></Login>
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;