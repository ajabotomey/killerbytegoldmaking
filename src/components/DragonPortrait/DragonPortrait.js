import React from "react";
import Portrait from "../../../static/dragonportrait.png";
import style from "./style.module.css";

export class DragonPortrait extends React.Component {
  constructor(props) {
    super(props);

    this.getCustomStyles = this.getCustomStyles.bind(this);

    this.state = {
      customStyles: null
    };
  }

  componentDidMount() {
    this.getCustomStyles();
  }

  componentDidUpdate(prevProps) {
    const hasContainerChanged = (!prevProps.containerRef || !prevProps.containerRef.current) && (this.props.containerRef || this.props.containerRef.current);
    const hasDirectionChanged = prevProps.direction !== this.props.direction;
    if (
      hasContainerChanged ||
      hasDirectionChanged
    ) {
      this.getCustomStyles();
    }
  }

  getCustomStyles() {
    const { containerRef, direction = "right" } = this.props;

    if (!containerRef || !containerRef.current) {
      return {};
    }

    let customStyles = {};

    const containerBoundingRect = containerRef.current.getBoundingClientRect();

    if (direction === "right") {
      const containerOffsetLeft = containerBoundingRect.left;
      customStyles.left = containerOffsetLeft;
    } 

    if (direction === "left") {
      const containerOffsetRight = containerBoundingRect.right;
      customStyles.left = containerOffsetRight - 50;
    }

    this.setState({
      customStyles
    });
  }

  render() {
    const { direction = "right" } = this.props;

    const { customStyles } = this.state;

    return (
      <div className={style.portrait} data-direction={direction} style={customStyles}>
        <img src={Portrait}/>
        <div className={style.portraitBlockout} data-direction={direction}/>
      </div>
    );
  }
}

export default DragonPortrait;