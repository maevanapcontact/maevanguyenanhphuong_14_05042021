import React from "react";
import PropTypes from "prop-types";

import { generateID } from "../../utils";

import Cell from "./Cell";

const FirstRow = ({ firstDay }) => {
  const cells = new Array(7).fill(0);

  return (
    <tr>
      {cells.map((cell) => (
        <Cell key={generateID()} number={0} isCurrent />
      ))}
    </tr>
  );
};

FirstRow.propTypes = {
  firstDay: PropTypes.number.isRequired,
};

export default FirstRow;
