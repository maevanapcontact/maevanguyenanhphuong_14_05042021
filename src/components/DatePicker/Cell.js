import React from "react";
import PropTypes from "prop-types";

const Cell = ({ isCurrent, number, handleClick }) => {
  return (
    <td
      className={
        isCurrent ? "picker-elt-table-cell" : "picker-elt-table-cell inactive"
      }
      onClick={handleClick}
    >
      {number}
    </td>
  );
};

Cell.propTypes = {
  isCurrent: PropTypes.bool,
  number: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Cell;
