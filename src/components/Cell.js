import React from "react";
import PropTypes from "prop-types";

const Cell = ({ isCurrentMonth }) => {
  return (
    <td
      className={
        isCurrentMonth
          ? "picker-elt-table-cell"
          : "picker-elt-table-cell inactive"
      }
    ></td>
  );
};

Cell.propTypes = {
  isCurrentMonth: PropTypes.bool,
};

export default Cell;
