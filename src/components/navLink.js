import React from "react"
import { Link } from "gatsby"

const linkStyles = {
    color: 'white'
};

const NavLink = ({ children, to}) => (
  <Link to={to} style={linkStyles}>
      {children}
  </Link>
);

export default NavLink;