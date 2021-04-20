import React from "react";
import PropTypes from "prop-types";

import { generateID } from "../../utils";

import Cell from "./Cell";

const FirstRow = ({ firstDay }) => {
  const cells = new Array(7).fill(0);
  let starterCurrent = 0;

  return (
    <tr>
      {cells.map((cell, index) => {
        if (index < firstDay) {
          return <Cell key={generateID()} number={0} isCurrent />;
        }
        starterCurrent++;
        return <Cell key={generateID()} number={starterCurrent} isCurrent />;
      })}
    </tr>
  );
};

FirstRow.propTypes = {
  firstDay: PropTypes.number.isRequired,
};

export default FirstRow;
