import React from "react";
import PropTypes from "prop-types";

import "./CreateEmployee.scss";

import Banner from "./Banner";
import CreateEmployeeForm from "./CreateEmployeeForm";

const CreateEmployeePage = (props) => {
  const { handleSubmit } = props;

  return (
    <div className="create-employee">
      <Banner
        pageTitle="Create Employee"
        linkContent="View Current Employees"
        linkSrc="/employee-list"
      />
      <CreateEmployeeForm handleSubmit={handleSubmit} />
    </div>
  );
};

CreateEmployeePage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default CreateEmployeePage;
