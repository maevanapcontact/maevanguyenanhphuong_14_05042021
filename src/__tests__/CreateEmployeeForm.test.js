import React from "react";
import ReactDOM from "react-dom";
import CreateEmployeeForm from "../components/CreateEmployeeForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CreateEmployeeForm />, div);
});
