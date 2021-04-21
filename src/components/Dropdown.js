import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Dropdown.scss";

const Dropdown = ({
  selectValue,
  handleSelectChange,
  selectLabel,
  selectList,
  selectName,
  isOpen,
  handleOpen,
}) => {
  const [activeDescendant, setActiveDescendant] = useState(
    `option-${selectValue}`
  );

  return (
    <div className="dropdown-wrapper">
      <label htmlFor={`${selectName}-btn`} className="dropdown-label">
        {selectLabel}
      </label>
      <span
        className="dropdown"
        id={`${selectName}-btn`}
        onClick={() => handleOpen(selectName)}
        tabIndex="0"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={`${selectName}-menu`}
        aria-activedescendant={activeDescendant}
        aria-labelledby={activeDescendant}
        aria-haspopup={true}
      >
        <span>{selectValue}</span>
        <img src="./images/down-arrow.png" alt="" className="dropdown-btn" />
      </span>
      <div className={isOpen ? "dropdown-options active" : "dropdown-options"}>
        <ul className="dropdown-list" id={`${selectName}-menu`}>
          {selectList.map((elt) => (
            <li
              key={elt.text}
              value={elt.text}
              onClick={(evt) => {
                handleSelectChange(selectName, evt.target.innerText);
                setActiveDescendant(`option-${elt.text}`);
              }}
              id={`option-${elt.text}`}
              className="dropdown-option"
              tabIndex="-1"
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
  isOpen: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default Dropdown;
