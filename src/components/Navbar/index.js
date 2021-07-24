import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import fair from './fair.svg';
import air from './air.svg';
import logo from './logo.svg'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
            <img src= {fair} width = "100"  alt='Fair Air' />
            <img src= {logo} width = "80"  alt='Fair Air' />
            <img src= {air} width = "100"  alt='Fair Air' />
            
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About Us
          </NavLink>
          <NavLink to='/aqi' activeStyle>
            About AQI
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
         
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;