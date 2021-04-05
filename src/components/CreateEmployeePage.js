import React from "react";

import Banner from "./Banner";

const CreateEmployeePage = () => {
  return (
    <div className="create-employee">
      <Banner
        pageTitle="Create Employee"
        linkContent="View Current Employees"
        linkSrc="/employee-list"
      />
    </div>
  );
};

export default CreateEmployeePage;
