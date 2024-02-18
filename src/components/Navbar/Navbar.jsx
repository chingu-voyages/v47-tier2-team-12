import React, { useContext } from "react";
import { Menu } from "react-feather";
import { Todo_context } from "../Context/Context";
import "./Navbar.css";

const Navbar = () => {
  const { setShowModal,setshowSidebar,showSidebar } = useContext(Todo_context);
  return (
    <nav className="navbar p-6">
      <div className="p-4 flex justify-between">
        <div className="flex items-center gap-12 ml-8">
          <Menu onClick={() => setshowSidebar(!showSidebar)} className="c-pointer" />
          <h3 className="text-size-18">Todo Lister</h3>
        </div>
        <button
          className="c-pointer add-more-btn"
          onClick={() => setShowModal(true)}
        >
          Add More Project
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
