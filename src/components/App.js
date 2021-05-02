import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import { generateID } from "../utils";

import CreateEmployeePage from "./CreateEmployeePage";
import CurrentEmployeesPage from "./CurrentEmployeesPage";
import Modal from "./Modal";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(employees);

  const createEmployee = (newEmployee) => {
    setEmployees([
      ...employees,
      {
        id: generateID(),
        ...newEmployee,
      },
    ]);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      {isModalOpen && (
        <Modal
          modalContent="Employee Created!"
          handleClose={handleCloseModal}
        />
      )}
      <Switch>
        <Route exact path="/">
          <CreateEmployeePage
            handleSubmit={createEmployee}
            handleOpenModal={handleOpenModal}
          />
        </Route>
        <Route path="/employee-list">
          <CurrentEmployeesPage employeesList={employees} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
