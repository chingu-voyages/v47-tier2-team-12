import React, { createContext, useState } from "react";
export const Todo_context = createContext(null);
const Context = (props) => {
  const [projectData, setProjectData] = useState([]);
  return (
    <Todo_context.Provider value={{ projectData, setProjectData }}>
      {props.children}
    </Todo_context.Provider>
  );
};

export default Context;
