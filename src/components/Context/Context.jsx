import React, { createContext, useState } from "react";
import todo_global_data from "../Data/Data";
export const Todo_context = createContext(null);
const Context = (props) => {
  const [globalData, setGlobalData] = useState(todo_global_data);
  const [projectData, setProjectData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  return (
    <Todo_context.Provider
      value={{
        projectData,
        setProjectData,
        showModal,
        setShowModal,
        globalData,
        setGlobalData,
      }}
    >
      {props.children}
    </Todo_context.Provider>
  );
};

export default Context;
