import React, { useContext, useEffect } from "react";
import { Todo_context } from "../../components/Context/Context";
import "./Modal.css";

const Modal = (props) => {
  const { showModal, setShowModal } = useContext(Todo_context);

  const handleClickOutside = (event) => {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);



  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-content">
        <div className="modal-header p-12 flex items-center justify-between direction-row-reverse">
          <span className="close c-pointer" onClick={() => props.onClose()}>
            &times;
          </span>
          <h2 className="font-weight-600 text-size-18 line-height-22">
            {props.title}
          </h2>
        </div>
        <div className="modal-body pt-20 pb-20">{props.children}</div>
        <div className="modal-footer p-16 flex justify-end gap-10">
          {props.footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;
