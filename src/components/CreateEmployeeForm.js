import React, { useState } from "react";

const CreateEmployeeForm = (props) => {
  const { handleSubmit } = props;
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
      <label>
        Date of Birth
        <input
          type="date"
          name="birth"
          value={birth}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Start Date
        <input
          type="date"
          name="start"
          value={start}
          onChange={handleInputChange}
        />
      </label>

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
        <label>
          State
          <select value={state} onChange={handleInputChange} name="state">
            <option value="alabama">Alabama</option>
          </select>
        </label>
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

      <label>
        Department
        <select
          value={department}
          onChange={handleInputChange}
          name="department"
        >
          <option value="sales">Sales</option>
          <option value="marketing">Marketing</option>
          <option value="engineering">Engineering</option>
          <option value="human resources">Human Resources</option>
          <option value="legal">Legal</option>
        </select>
      </label>

      <button type="submit">Save</button>
    </form>
  );
};

export default CreateEmployeeForm;
