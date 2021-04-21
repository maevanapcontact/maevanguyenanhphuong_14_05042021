import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Banner.scss";

const Banner = ({ pageTitle, linkContent, linkSrc }) => {
  return (
    <div className="banner">
      <h1>HRNet</h1>
      <Link to={linkSrc}>{linkContent}</Link>
      <h2>{pageTitle}</h2>
    </div>
  );
};

Banner.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  linkContent: PropTypes.string.isRequired,
  linkSrc: PropTypes.string.isRequired,
};

export default Banner;
