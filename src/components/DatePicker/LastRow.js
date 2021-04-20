import React from "react";
import PropTypes from "prop-types";

import { generateID } from "../../utils";

import Cell from "./Cell";

const LastRow = ({ start, end }) => {
  const cells = new Array(7).fill(0);
  let starter = start;

  return (
    <tr>
      {cells.map((cell) => {
        starter++;
        if (starter > end) {
          return <Cell key={generateID()} number={0} isCurrent />;
        }
        return <Cell key={generateID()} number={starter} isCurrent />;
      })}
    </tr>
  );
};

LastRow.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
};

export default LastRow;
