import React from "react";
import ReactDOM from "react-dom";
import CreateEmployeePage from "../components/CreateEmployeePage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CreateEmployeePage />, div);
});
