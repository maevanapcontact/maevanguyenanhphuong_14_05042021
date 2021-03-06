import React, { useState } from "react";
import PropTypes from "prop-types";

import "./DatePicker.scss";
import { days, months } from "../../data";
import {
  getNbOfDaysInMonth,
  getMinYear,
  getMaxYear,
  getRangeOfYears,
  getFormattedDate,
} from "../../utils";

import FirstRow from "./FirstRow";
import Row from "./Row";
import LastRow from "./LastRow";

const DatePicker = ({
  pickerLabel,
  pickerValue,
  isOpen,
  handleOpen,
  pickerName,
  handleChange,
}) => {
  const minYear = getMinYear();
  const maxYear = getMaxYear();
  const years = getRangeOfYears();

  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [displayedDate, setDisplayedDate] = useState({
    dayOfweek: currentDayOfWeek,
    day: currentDay,
    month: currentMonth,
    year: currentYear,
  });

  const referenceDate = new Date(displayedDate.year, displayedDate.month, 1);
  const refDayOne = referenceDate.getDay();
  const nbDaysCurrent = getNbOfDaysInMonth(
    displayedDate.month,
    displayedDate.year
  );

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
      month: parseInt(value),
    });
    setIsMonthOpen(false);
  };

  const handleYearChange = (value) => {
    setDisplayedDate({
      ...displayedDate,
      year: parseInt(value),
    });
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

  const onClickCell = (year, month, day) => {
    const value = getFormattedDate(year, month, day);
    handleChange(pickerName, value);
    handleOpen(pickerName);
  };

  return (
    <div className="picker-wrapper">
      <label htmlFor="" className="picker-label">
        {pickerLabel}
      </label>
      <span
        className="picker"
        id="picker"
        onClick={() => handleOpen(pickerName)}
      >
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
                      onClick={() => handleYearChange(year)}
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
            <FirstRow
              firstDay={refDayOne}
              currentMonth={displayedDate.month}
              currentYear={displayedDate.year}
              onClickCell={onClickCell}
            />
            <Row
              start={7 - refDayOne}
              onClickCell={onClickCell}
              currentMonth={displayedDate.month}
              currentYear={displayedDate.year}
            />
            <Row
              start={14 - refDayOne}
              onClickCell={onClickCell}
              currentMonth={displayedDate.month}
              currentYear={displayedDate.year}
            />
            <Row
              start={21 - refDayOne}
              onClickCell={onClickCell}
              currentMonth={displayedDate.month}
              currentYear={displayedDate.year}
            />
            {35 - refDayOne < nbDaysCurrent ? (
              <>
                <Row
                  start={28 - refDayOne}
                  onClickCell={onClickCell}
                  currentMonth={displayedDate.month}
                  currentYear={displayedDate.year}
                />
                <LastRow
                  start={35 - refDayOne}
                  end={nbDaysCurrent}
                  onClickCell={onClickCell}
                  currentMonth={displayedDate.month}
                  currentYear={displayedDate.year}
                />
              </>
            ) : (
              <LastRow
                start={28 - refDayOne}
                end={nbDaysCurrent}
                onClickCell={onClickCell}
                currentMonth={displayedDate.month}
                currentYear={displayedDate.year}
              />
            )}
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
  handleChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default DatePicker;
