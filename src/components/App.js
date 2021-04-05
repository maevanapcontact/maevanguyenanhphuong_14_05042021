import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import CreateEmployeePage from "./CreateEmployeePage";
import CurrentEmployeesPage from "./CurrentEmployeesPage";
import Modal from "./Modal";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateRandomID = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const createEmployee = (newEmployee) => {
    setEmployees([
      ...employees,
      {
        id: generateRandomID(),
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
