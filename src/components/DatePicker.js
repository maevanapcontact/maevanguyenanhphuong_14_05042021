import React, { useState } from "react";
import PropTypes from "prop-types";

import "./DatePicker.scss";

const DatePicker = (props) => {
  const { pickerLabel, pickerName, pickerValue, handlePickerChange } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);

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
        <header className="picker-elt-header">
          <div className="picker-elt-header-sub">
            <button type="button" className="picker-elt-header-btn">
              <img src="./images/arrow-left.png" alt="previous month" />
            </button>
            <button type="button" className="picker-elt-header-btn">
              <img src="./images/home.png" alt="today" />
            </button>
          </div>
          <div className="picker-elt-header-sub">
            <div className="picker-elt-header-select">
              <span
                className="picker-elt-header-select-label"
                onClick={() => setIsMonthOpen(!isMonthOpen)}
              >
                April{" "}
                <img src="./images/arrow-down.png" alt="extend month list" />
              </span>
              <div
                className={
                  isMonthOpen
                    ? "picker-elt-header-select-options active"
                    : "picker-elt-header-select-options"
                }
              >
                <ul>
                  <li className="picker-elt-header-select-option">January</li>
                  <li className="picker-elt-header-select-option">February</li>
                  <li className="picker-elt-header-select-option">March</li>
                  <li className="picker-elt-header-select-option">April</li>
                  <li className="picker-elt-header-select-option">May</li>
                  <li className="picker-elt-header-select-option">June</li>
                  <li className="picker-elt-header-select-option">July</li>
                  <li className="picker-elt-header-select-option">August</li>
                  <li className="picker-elt-header-select-option">September</li>
                  <li className="picker-elt-header-select-option">October</li>
                  <li className="picker-elt-header-select-option">November</li>
                  <li className="picker-elt-header-select-option">December</li>
                </ul>
              </div>
            </div>
            <div className="picker-elt-header-select">
              <span
                className="picker-elt-header-select-label"
                onClick={() => setIsYearOpen(!isYearOpen)}
              >
                2021{" "}
                <img src="./images/arrow-down.png" alt="extend years list" />
              </span>
              <div
                className={
                  isYearOpen
                    ? "picker-elt-header-select-options active"
                    : "picker-elt-header-select-options"
                }
              >
                <ul>
                  <li className="picker-elt-header-select-option">2015</li>
                  <li className="picker-elt-header-select-option">2016</li>
                  <li className="picker-elt-header-select-option">2017</li>
                  <li className="picker-elt-header-select-option">2018</li>
                  <li className="picker-elt-header-select-option">2019</li>
                  <li className="picker-elt-header-select-option">2020</li>
                  <li className="picker-elt-header-select-option">2021</li>
                  <li className="picker-elt-header-select-option">2022</li>
                  <li className="picker-elt-header-select-option">2023</li>
                  <li className="picker-elt-header-select-option">2024</li>
                  <li className="picker-elt-header-select-option">2025</li>
                  <li className="picker-elt-header-select-option">2026</li>
                </ul>
              </div>
            </div>
            <button type="button" className="picker-elt-header-btn">
              <img src="./images/arrow-right.png" alt="next month" />
            </button>
          </div>
        </header>

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
