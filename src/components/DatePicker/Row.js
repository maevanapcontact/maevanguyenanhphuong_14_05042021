import React from "react";
import PropTypes from "prop-types";

import { generateID } from "../../utils";

import Cell from "./Cell";

const Row = ({ start }) => {
  const cells = new Array(7).fill(0);

  return (
    <tr>
      {cells.map((cell) => (
        <Cell key={generateID()} number={0} isCurrent />
      ))}
    </tr>
  );
};

Row.propTypes = {
  start: PropTypes.number.isRequired,
};

export default Row;
