import React from "react";
import PropTypes from "prop-types";

import "./Dropdown.scss";

const Dropdown = (props) => {
  const {
    selectValue,
    handleSelectChange,
    selectLabel,
    selectList,
    selectName,
  } = props;

  return (
    <label className="dropdown">
      {selectLabel}
      <select
        value={selectValue}
        onChange={handleSelectChange}
        name={selectName}
      >
        {selectList.map((elt) => (
          <option key={elt.value} value={elt.value}>
            {elt.text}
          </option>
        ))}
      </select>
    </label>
  );
};

Dropdown.propTypes = {
  selectValue: PropTypes.string.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  selectLabel: PropTypes.string.isRequired,
  selectList: PropTypes.array.isRequired,
  selectName: PropTypes.string.isRequired,
};

export default Dropdown;
