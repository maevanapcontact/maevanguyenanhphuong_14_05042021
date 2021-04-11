import React from "react";
import PropTypes from "prop-types";

import "./Modal.scss";

const Modal = (props) => {
  const { modalContent, handleClose } = props;

  return (
    <>
      <div className="modal-overlay" onClick={handleClose}></div>
      <div className="modal">
        <span className="modal-content">{modalContent}</span>
        <button className="modal-close" type="button" onClick={handleClose}>
          <img src="./images/close.png" alt="" />
        </button>
      </div>
    </>
  );
};

Modal.propTypes = {
  modalContent: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
