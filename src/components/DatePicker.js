import React, { useState } from "react";
import PropTypes from "prop-types";

import "./DatePicker.scss";

const DatePicker = (props) => {
  const { pickerLabel, pickerName, pickerValue, handlePickerChange } = props;

  const [isOpen, setIsOpen] = useState(false);

  console.log(pickerName);
  console.log(handlePickerChange);

  return (
    <div className="picker-wrapper">
      <label htmlFor="" className="picker-label">
        {pickerLabel}
      </label>
      <span className="picker" id="picker" onClick={() => setIsOpen(!isOpen)}>
        {pickerValue}
      </span>
      <div className={isOpen ? "picker-elt active" : "picker-elt"}>
        <header className="picker-elt-header"></header>
        <table className="picker-elt-table">
          <thead>
            <tr>
              <th className="picker-elt-table-header-cell">Sun</th>
              <th className="picker-elt-table-header-cell">Mon</th>
              <th className="picker-elt-table-header-cell">Tue</th>
              <th className="picker-elt-table-header-cell">Wed</th>
              <th className="picker-elt-table-header-cell">Thu</th>
              <th className="picker-elt-table-header-cell">Fri</th>
              <th className="picker-elt-table-header-cell">Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
            </tr>
            <tr>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
            </tr>
            <tr>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
            </tr>
            <tr>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
            </tr>
            <tr>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
              <td className="picker-elt-table-cell"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  pickerLabel: PropTypes.string.isRequired,
  pickerName: PropTypes.string.isRequired,
  pickerValue: PropTypes.string.isRequired,
  handlePickerChange: PropTypes.func.isRequired,
};

export default DatePicker;
