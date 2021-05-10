import React from "react";
import PropTypes from "prop-types";
import DataTables from "datatables-plugin-react";

import { labels } from "../data";
import "./DataTable.scss";

import Banner from "./Banner";

const CurrentEmployeesPage = ({ employeesList }) => {
  const employeesData = employeesList.map((elt) => ({
    ...elt,
    department: elt.department.text,
    state: elt.state.value,
  }));

  return (
    <div className="current-employees">
      <Banner
        pageTitle="Current Employees"
        linkContent="Home"
        linkSrc="/p14-react/"
      />
      <DataTables labels={labels} data={employeesData} />
    </div>
  );
};

CurrentEmployeesPage.propTypes = {
  employeesList: PropTypes.array.isRequired,
};

export default CurrentEmployeesPage;
