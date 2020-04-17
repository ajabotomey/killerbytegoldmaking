import { Link } from "gatsby"
import PropTypes, { node } from "prop-types"
import React from "react"

import navigationButtons from "./navigationButtons";
import NavList from "../NavList";
import style from "./style.module.css";

const Header = ({ siteTitle }) => (
  <header>
    <div
      className={style.headerWrapper}
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

      <NavList navigationButtons={navigationButtons} />
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
