import React, { useState } from "react";
import PropTypes from "prop-types";

import { statesUSA, departments } from "../data";

import Dropdown from "./Dropdown";
import DatePicker from "./DatePicker";

const CreateEmployeeForm = (props) => {
  const { handleSubmit, handleOpenModal } = props;
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    birth: "1990-01-01",
    start: "2021-01-01",
    street: "",
    city: "",
    state: "alabama",
    zip: 0,
    department: "sales",
  });
  const {
    firstname,
    lastname,
    birth,
    start,
    street,
    city,
    state,
    zip,
    department,
  } = input;

  const handleInputChange = (evt) => {
    setInput({
      ...input,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    handleSubmit(input);
    handleOpenModal();
  };

  return (
    <form className="create-employee-form" onSubmit={handleSubmitForm}>
      <label>
        First Name
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={handleInputChange}
        />
      </label>
      <DatePicker
        pickerLabel="Date of Birth"
        pickerName="birth"
        pickerValue={birth}
        handlePickerChange={handleInputChange}
      />
      <DatePicker
        pickerLabel="Start Date"
        pickerName="start"
        pickerValue={start}
        handlePickerChange={handleInputChange}
      />
      <fieldset>
        <legend>Address</legend>
        <label>
          Street
          <input
            type="text"
            name="street"
            value={street}
            onChange={handleInputChange}
          />
        </label>
        <label>
          City
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleInputChange}
          />
        </label>

        <Dropdown
          selectValue={state}
          handleSelectChange={handleInputChange}
          selectLabel="State"
          selectList={statesUSA}
          selectName="state"
        />

        <label>
          Zip Code
          <input
            type="number"
            name="zip"
            value={zip}
            onChange={handleInputChange}
          />
        </label>
      </fieldset>

      <Dropdown
        selectValue={department}
        handleSelectChange={handleInputChange}
        selectLabel="Department"
        selectList={departments}
        selectName="department"
      />

      <button type="submit">Save</button>
    </form>
  );
};

CreateEmployeeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default CreateEmployeeForm;
