import React from "react";

import "./CreateEmployee.scss";

import Banner from "./Banner";
import CreateEmployeeForm from "./CreateEmployeeForm";

const CreateEmployeePage = () => {
  return (
    <div className="create-employee">
      <Banner
        pageTitle="Create Employee"
        linkContent="View Current Employees"
        linkSrc="/employee-list"
      />
      <CreateEmployeeForm />
    </div>
  );
};

export default CreateEmployeePage;
