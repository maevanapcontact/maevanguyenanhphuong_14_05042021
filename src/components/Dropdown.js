import React, { useState } from "react";
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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-wrapper">
      <label htmlFor={`${selectLabel}-btn`} className="dropdown-label">
        {selectLabel}
      </label>
      <span
        className="dropdown"
        id={`${selectLabel}-btn`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectValue}</span>
        <img src="./images/down-arrow.png" alt="" className="dropdown-btn" />
      </span>
      <div className={isOpen ? "dropdown-options active" : "dropdown-options"}>
        <ul className="dropdown-list">
          {selectList.map((elt) => (
            <li
              key={elt.value}
              value={elt.value}
              onClick={(evt) => {
                handleSelectChange(selectName, evt.target.innerText);
                setIsOpen(false);
              }}
              className="dropdown-option"
            >
              {elt.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
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
