import React from "react";
import NavLink from "./navLink";

const NavigationButton = ({
  navigationButton
}) => (
  <li><NavLink to={navigationButton.to}>{navigationButton.title}</NavLink></li>
);

export const NavList = ({
  navigationButtons
}) => (
  <nav> 
    {
      navigationButtons.map(navigationButton => (
        <NavigationButton navigationButton={navigationButton} />
      ))
    }
  </nav>
)

export default NavList;