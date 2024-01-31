import React, { createContext, useState } from "react";
import todo_global_data from "../Data/Data";
export const Todo_context = createContext(null);
// For creating Unique id for each task 
import { nanoid } from "nanoid";


const Context = (props) => {

  // here the whole data is being recreated with unique id for each task
  const dataWithId = todo_global_data.map(category => ({
    ...category,
    activityTypes: category.activityTypes.map(activityType => ({
      ...activityType,
      Tasks: activityType.Tasks.map(task => ({
        ...task,
        id: nanoid(),
      })),
    })),
  }));


  const [globalData, setGlobalData] = useState(dataWithId);
  const [projectData, setProjectData] = useState([]);
  const [showModal, setShowModal] = useState(false);


  console.log(globalData)
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
