import React, { useState } from "react";
import PropTypes from "prop-types";

import "./DatePicker.scss";
import { days, months } from "../../data";

import FirstRow from "./FirstRow";
import Row from "./Row";
import LastRow from "./LastRow";

const DatePicker = (props) => {
  const { pickerLabel, pickerValue } = props;

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
  const [displayedDate, setDisplayedDate] = useState(initialDisplayedDateState);

  const handleMonthClick = () => {
    setIsMonthOpen(!isMonthOpen);
    setIsYearOpen(false);
  };

  const handleYearClick = () => {
    setIsYearOpen(!isYearOpen);
    setIsMonthOpen(false);
  };

  const handleMonthChange = (value) => {
    setDisplayedDate({
      ...displayedDate,
      month: value,
    });
    setIsMonthOpen(false);
  };

  const handleYearChange = () => {
    setIsYearOpen(false);
  };

  const goToCurrentDate = () => {
    setDisplayedDate({
      dayOfweek: currentDayOfWeek,
      day: currentDay,
      month: currentMonth,
      year: currentYear,
    });
  };

  const goToPreviousMonth = () => {
    if (displayedDate.month === 0) {
      if (displayedDate.year > minYear) {
        setDisplayedDate({
          ...displayedDate,
          month: 11,
          year: displayedDate.year - 1,
        });
      }
    } else {
      setDisplayedDate({
        ...displayedDate,
        month: displayedDate.month - 1,
      });
    }
  };

  const goToNextMonth = () => {
    if (displayedDate.month === 11) {
      if (displayedDate.year < maxYear) {
        setDisplayedDate({
          ...displayedDate,
          month: 0,
          year: displayedDate.year + 1,
        });
      }
    } else {
      setDisplayedDate({
        ...displayedDate,
        month: displayedDate.month + 1,
      });
    }
  };

  const referenceDate = new Date(displayedDate.year, displayedDate.month, 1);
  const refDayOne = referenceDate.getDay();

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
            <button
              type="button"
              className="picker-elt-header-btn"
              onClick={goToPreviousMonth}
            >
              <img src="./images/arrow-left.png" alt="previous month" />
            </button>
            <button
              type="button"
              className="picker-elt-header-btn"
              onClick={goToCurrentDate}
            >
              <img src="./images/home.png" alt="today" />
            </button>
          </div>
          <div className="picker-elt-header-sub">
            <div className="picker-elt-header-select">
              <span
                className="picker-elt-header-select-label"
                onClick={handleMonthClick}
              >
                {`${months[displayedDate.month].text} `}
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
                      key={month.value}
                      className="picker-elt-header-select-option"
                      onClick={() => handleMonthChange(month.value)}
                    >
                      {month.text}
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
            <button
              type="button"
              className="picker-elt-header-btn"
              onClick={goToNextMonth}
            >
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
            <FirstRow firstDay={refDayOne} />
            <Row start={7 - refDayOne} />
            <Row start={14 - refDayOne} />
            <Row start={21 - refDayOne} />
            <LastRow start={28 - refDayOne} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  pickerLabel: PropTypes.string.isRequired,
  pickerName: PropTypes.string,
  pickerValue: PropTypes.string.isRequired,
  handlePickerChange: PropTypes.func,
};

export default DatePicker;
