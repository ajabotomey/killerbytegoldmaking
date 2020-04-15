import { Link } from "gatsby"
import PropTypes, { node } from "prop-types"
import React from "react"

import NavLink from "../components/navLink"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className="title">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <nav> 
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/recommended-addons">Addons</NavLink></li>
        <li><NavLink to="/about">About Killerbyte</NavLink></li>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
