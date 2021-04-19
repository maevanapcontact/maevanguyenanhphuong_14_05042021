import React from "react";
import PropTypes from "prop-types";

import Cell from "./Cell";

const Row = ({ isFirst, isLast }) => {
  if (isFirst) console.log("first");
  if (isLast) console.log("last");

  return (
    <tr>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </tr>
  );
};

Row.propTypes = {
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
};

export default Row;
