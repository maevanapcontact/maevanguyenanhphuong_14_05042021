import React, { useState } from "react";
import PropTypes from "prop-types";

import { statesUSA, departments } from "../data";
import { getCurrentDate } from "../utils";

import Dropdown from "./Dropdown";
import DatePicker from "./DatePicker";

const CreateEmployeeForm = ({
  handleSubmit,
  handleOpenModal,
  openedElts,
  handleElementsOpening,
}) => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    birth: "1990-01-01",
    start: getCurrentDate(),
    street: "",
    city: "",
    state: "Alaska",
    zipCode: 0,
    department: "Sales",
  });

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

  const handleSelect = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <form className="create-employee-form" onSubmit={handleSubmitForm}>
      <label>
        First Name
        <input
          type="text"
          name="firstname"
          value={input.firstname}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="lastname"
          value={input.lastname}
          onChange={handleInputChange}
        />
      </label>
      <DatePicker
        pickerLabel="Date of Birth"
        pickerName="birth"
        pickerValue={input.birth}
        handlePickerChange={handleInputChange}
        isOpen={openedElts.birth}
        handleOpen={handleElementsOpening}
      />
      <DatePicker
        pickerLabel="Start Date"
        pickerName="start"
        pickerValue={input.start}
        handlePickerChange={handleInputChange}
        isOpen={openedElts.start}
        handleOpen={handleElementsOpening}
      />
      <fieldset>
        <legend>Address</legend>
        <label>
          Street
          <input
            type="text"
            name="street"
            value={input.street}
            onChange={handleInputChange}
          />
        </label>
        <label>
          City
          <input
            type="text"
            name="city"
            value={input.city}
            onChange={handleInputChange}
          />
        </label>

        <Dropdown
          selectValue={input.state}
          handleSelectChange={handleSelect}
          selectLabel="State"
          selectList={statesUSA}
          selectName="state"
          isOpen={openedElts.state}
          handleOpen={handleElementsOpening}
        />

        <label>
          Zip Code
          <input
            type="number"
            name="zipCode"
            value={input.zipCode}
            onChange={handleInputChange}
          />
        </label>
      </fieldset>

      <Dropdown
        selectValue={input.department}
        handleSelectChange={handleSelect}
        selectLabel="Department"
        selectList={departments}
        selectName="department"
        isOpen={openedElts.department}
        handleOpen={handleElementsOpening}
      />

      <button type="submit" className="create-employee-form-btn">
        Save
      </button>
    </form>
  );
};

CreateEmployeeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  openedElts: PropTypes.object.isRequired,
  handleElementsOpening: PropTypes.func.isRequired,
};

export default CreateEmployeeForm;
