import React from "react";
import PropTypes from "prop-types";

const Cell = ({
  isCurrent,
  number,
  handleClick,
  currentMonth,
  currentYear,
  isPrevious,
  isNext,
}) => {
  let year = currentYear;
  let month = currentMonth;

  const setDate = () => {
    if (isPrevious) {
      if (currentMonth === 0) {
        year--;
        month = 11;
      } else {
        month--;
      }
    }
    if (isNext) {
      if (currentMonth === 11) {
        year++;
        month = 0;
      } else {
        month++;
      }
    }
  };

  setDate();

  return (
    <td
      className={
        isCurrent ? "picker-elt-table-cell" : "picker-elt-table-cell inactive"
      }
      onClick={() => handleClick(year, month + 1, number)}
    >
      {number}
    </td>
  );
};

Cell.propTypes = {
  isCurrent: PropTypes.bool,
  isPrevious: PropTypes.bool,
  isNext: PropTypes.bool,
  number: PropTypes.number.isRequired,
  currentMonth: PropTypes.number.isRequired,
  currentYear: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Cell;
