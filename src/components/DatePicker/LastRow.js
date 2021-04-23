import React from "react";
import PropTypes from "prop-types";

import { generateID } from "../../utils";

import Cell from "./Cell";

const LastRow = ({ start, end, onClickCell, currentMonth, currentYear }) => {
  const cells = new Array(7).fill(0);
  let starter = start;
  let sarterNext = 0;

  return (
    <tr>
      {cells.map((cell) => {
        starter++;
        if (starter > end) {
          sarterNext++;
          return (
            <Cell
              key={generateID()}
              number={sarterNext}
              handleClick={onClickCell}
              currentMonth={currentMonth}
              currentYear={currentYear}
              isNext
            />
          );
        }
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

LastRow.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  currentMonth: PropTypes.number.isRequired,
  currentYear: PropTypes.number.isRequired,
  onClickCell: PropTypes.func.isRequired,
};

export default LastRow;
