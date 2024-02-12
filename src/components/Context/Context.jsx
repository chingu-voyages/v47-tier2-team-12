import React, { createContext, useState } from "react";
import todo_global_data from "../Data/Data";
export const Todo_context = createContext(null);
// For creating Unique id for each task 
import { nanoid } from "nanoid";
import { generateMonthData } from '../../utilities/MonthDataGenerator/MonthDataGenerator'


const Context = (props) => {

  // here the whole data is being recreated with unique id for each task
  const dataWithId = todo_global_data.map(category => ({
    ...category,
    id: nanoid(),
    activityTypes: category.activityTypes.map(activityType => ({
      id: nanoid(),
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




  return (
    <Todo_context.Provider
      value={{
        projectData,
        setProjectData,
        showModal,
        setShowModal,
        globalData,
        setGlobalData,
        generateMonthData
      }}
    >
      {props.children}
    </Todo_context.Provider>
  );
};

export default Context;