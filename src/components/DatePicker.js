import React, { useState } from "react";
import PropTypes from "prop-types";

import "./DatePicker.scss";

const DatePicker = (props) => {
  const { pickerLabel, pickerName, pickerValue, handlePickerChange } = props;
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const minYear = 1950;
  const maxYear = 2050;
  const years = [];
  for (let i = minYear; i <= maxYear; i++) years.push(i);

  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [isOpen, setIsOpen] = useState(false);
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);

  const initialDisplayedDateState = {
    dayOfweek: currentDayOfWeek,
    day: currentDay,
    month: currentMonth,
    year: currentYear,
  };
  const [displayedDate] = useState(initialDisplayedDateState);
  console.log(displayedDate);

  const handleMonthClick = () => {
    setIsMonthOpen(!isMonthOpen);
    setIsYearOpen(false);
  };

  const handleYearClick = () => {
    setIsYearOpen(!isYearOpen);
    setIsMonthOpen(false);
  };

  const handleMonthChange = () => {
    setIsMonthOpen(false);
  };

  const handleYearChange = () => {
    setIsYearOpen(false);
  };

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
                onClick={handleMonthClick}
              >
                {`${months[displayedDate.month]} `}
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
                  {months.map((month) => (
                    <li
                      key={month}
                      className="picker-elt-header-select-option"
                      onClick={handleMonthChange}
                    >
                      {month}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="picker-elt-header-select">
              <span
                className="picker-elt-header-select-label"
                onClick={handleYearClick}
              >
                {displayedDate.year}
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
                  {years.map((year) => (
                    <li
                      key={year}
                      className="picker-elt-header-select-option"
                      onClick={handleYearChange}
                    >
                      {year}
                    </li>
                  ))}
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
              {days.map((day) => (
                <th key={day} className="picker-elt-table-header-cell">
                  {day}
                </th>
              ))}
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
