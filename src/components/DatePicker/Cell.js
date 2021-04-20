import React from "react";
import PropTypes from "prop-types";

const Cell = ({ isCurrent, number }) => {
  return (
    <td
      className={
        isCurrent ? "picker-elt-table-cell" : "picker-elt-table-cell inactive"
      }
    >
      {number}
    </td>
  );
};

Cell.propTypes = {
  isCurrent: PropTypes.bool,
  number: PropTypes.number.isRequired,
};

export default Cell;
