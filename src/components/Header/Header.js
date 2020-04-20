import { Link } from "gatsby"
import PropTypes, { node } from "prop-types"
import React from "react"

import navigationButtons from "./navigationButtons";
import NavList from "../NavList";
import style from "./style.module.css";
import DragonPortrait from "../DragonPortrait";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.titleRef = React.createRef();
  }

  render() {
    const { siteTitle } = this.props;
    return (
      <header>
        <div
          className={style.headerWrapper}
        >
          <h1 className="title" ref={this.titleRef}>
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
    
          <DragonPortrait direction={"right"} containerRef={this.titleRef}/>
    
          <NavList navigationButtons={navigationButtons} />
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
