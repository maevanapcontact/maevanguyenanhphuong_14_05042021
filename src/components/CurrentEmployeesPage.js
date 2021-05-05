import React from "react";
import PropTypes from "prop-types";
import DataTables from "datatables-plugin-react";

import { exampleLabels, exampleData } from "../data";

import Banner from "./Banner";
import EmployeesTable from "./EmployeesTable";

const CurrentEmployeesPage = ({ employeesList }) => {
  return (
    <div className="current-employees">
      <Banner pageTitle="Current Employees" linkContent="Home" linkSrc="/" />
      <EmployeesTable employeesList={employeesList} />
      <DataTables labels={exampleLabels} data={exampleData} />
    </div>
  );
};

CurrentEmployeesPage.propTypes = {
  employeesList: PropTypes.array.isRequired,
};

export default CurrentEmployeesPage;
