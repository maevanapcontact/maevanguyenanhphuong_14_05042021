import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import CreateEmployeePage from "./CreateEmployeePage";
import CurrentEmployeesPage from "./CurrentEmployeesPage";

const App = () => {
  const [employees, setEmployees] = useState([]);

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

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <CreateEmployeePage handleSubmit={createEmployee} />
        </Route>
        <Route path="/employee-list">
          <CurrentEmployeesPage employeesList={employees} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
