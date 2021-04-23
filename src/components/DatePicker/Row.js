import React from "react";
import PropTypes from "prop-types";

import { generateID } from "../../utils";

import Cell from "./Cell";

const Row = ({ start, onClickCell, currentMonth, currentYear }) => {
  const cells = new Array(7).fill(0);
  let starter = start;

  return (
    <tr>
      {cells.map((cell) => {
        starter++;
        return (
          <Cell
            key={generateID()}
            number={starter}
            isCurrent
            handleClick={onClickCell}
            currentMonth={currentMonth}
            currentYear={currentYear}
          />
        );
      })}
    </tr>
  );
};

Row.propTypes = {
  start: PropTypes.number.isRequired,
  currentMonth: PropTypes.number.isRequired,
  currentYear: PropTypes.number.isRequired,
  onClickCell: PropTypes.func.isRequired,
};

export default Row;
