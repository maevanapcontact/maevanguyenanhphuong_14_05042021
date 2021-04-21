import React, { useState } from "react";
import PropTypes from "prop-types";

import "./CreateEmployee.scss";

import Banner from "./Banner";
import CreateEmployeeForm from "./CreateEmployeeForm";

const CreateEmployeePage = ({ handleSubmit, handleOpenModal }) => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [openedElts, setOpenElts] = useState({
    birth: false,
    start: false,
    state: false,
    department: false,
  });

  const closeAllElements = () => {
    setOpenElts({
      birth: false,
      start: false,
      state: false,
      department: false,
    });
    setIsOverlayActive(false);
  };

  const handleElementsOpening = (elt) => {
    if (openedElts[elt]) setIsOverlayActive(false);
    else setIsOverlayActive(true);
    setOpenElts({
      ...openedElts,
      [elt]: !openedElts[elt],
    });
  };

  return (
    <div className="create-employee">
      {isOverlayActive && (
        <div
          className="create-employee-overlay"
          onClick={closeAllElements}
        ></div>
      )}

      <Banner
        pageTitle="Create Employee"
        linkContent="View Current Employees"
        linkSrc="/employee-list"
      />
      <CreateEmployeeForm
        handleSubmit={handleSubmit}
        handleOpenModal={handleOpenModal}
        handleOverlay={setIsOverlayActive}
        openedElts={openedElts}
        handleElementsOpening={handleElementsOpening}
      />
    </div>
  );
};

CreateEmployeePage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default CreateEmployeePage;
