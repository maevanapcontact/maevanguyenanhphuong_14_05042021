import React from "react";
import PropTypes from "prop-types";

const EmployeesTable = ({ employeesList }) => {
  console.log(employeesList);

  return <table className="current-employees-table"></table>;
};

EmployeesTable.propTypes = {
  employeesList: PropTypes.array.isRequired,
};

export default EmployeesTable;
