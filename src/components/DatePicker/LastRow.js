import React from "react";
import PropTypes from "prop-types";

import { generateID } from "../../utils";

import Cell from "./Cell";

const LastRow = ({ start, end }) => {
  const cells = new Array(7).fill(0);
  let starter = start;
  let sarterNext = 0;

  return (
    <tr>
      {cells.map((cell) => {
        starter++;
        if (starter > end) {
          sarterNext++;
          return <Cell key={generateID()} number={sarterNext} />;
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
