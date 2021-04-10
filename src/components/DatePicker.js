import React from "react";
import PropTypes from "prop-types";

import "./DatePicker.scss";

const DatePicker = (props) => {
  const { pickerLabel, pickerName, pickerValue, handlePickerChange } = props;

  return (
    <label className="datePicker">
      {pickerLabel}
      <input
        type="date"
        name={pickerName}
        value={pickerValue}
        onChange={handlePickerChange}
      />
    </label>
  );
};

DatePicker.propTypes = {
  pickerLabel: PropTypes.string.isRequired,
  pickerName: PropTypes.string.isRequired,
  pickerValue: PropTypes.string.isRequired,
  handlePickerChange: PropTypes.func.isRequired,
};

export default DatePicker;
