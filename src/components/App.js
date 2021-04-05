import React from "react";
import { Switch, Route } from "react-router-dom";

import CreateEmployeePage from "./CreateEmployeePage";
import CurrentEmployeesPage from "./CurrentEmployeesPage";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <CreateEmployeePage />
        </Route>
        <Route path="/employee-list">
          <CurrentEmployeesPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
