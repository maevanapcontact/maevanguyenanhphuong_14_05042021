import React from "react";
import PropTypes from "prop-types";

import { generateID, getNbOfDaysInMonth } from "../../utils";

import Cell from "./Cell";

const FirstRow = ({ firstDay, currentMonth, currentYear, onClickCell }) => {
  const cells = new Array(7).fill(0);
  let starterCurrent = 0;

  const getPreviousMonthDays = () => {
    if (currentMonth === 0) {
      return getNbOfDaysInMonth(11, currentYear - 1);
    }
    return getNbOfDaysInMonth(currentMonth - 1, currentYear);
  };

  let starterPrevious = getPreviousMonthDays() - firstDay;

  return (
    <tr>
      {cells.map((cell, index) => {
        if (index < firstDay) {
          starterPrevious++;
          return (
            <Cell
              key={generateID()}
              number={starterPrevious}
              handleClick={onClickCell}
            />
          );
        }
        starterCurrent++;
        return (
          <Cell
            key={generateID()}
            number={starterCurrent}
            isCurrent
            handleClick={onClickCell}
          />
        );
      })}
    </tr>
  );
};

FirstRow.propTypes = {
  firstDay: PropTypes.number.isRequired,
  currentMonth: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  currentYear: PropTypes.number.isRequired,
  onClickCell: PropTypes.func.isRequired,
};

export default FirstRow;
