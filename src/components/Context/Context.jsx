import React, { createContext, useState, useEffect } from "react";
import todo_global_data from "../Data/Data";
import { nanoid } from "nanoid";
import { generateMonthData } from '../../utilities/MonthDataGenerator/MonthDataGenerator';

export const Todo_context = createContext(null);

const Context = (props) => {
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [globalData, setGlobalData] = useState(null);

  useEffect(() => {
    const delay = setTimeout(() => {
      const localStorageData = localStorage.getItem('globalData');
      if (localStorageData) {
        setGlobalData(JSON.parse(localStorageData));
      } else {
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
        setGlobalData(dataWithId);
        localStorage.setItem('globalData', JSON.stringify(dataWithId));
      }
      setLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);



  return (
    <Todo_context.Provider
      value={{
        projectData,
        setProjectData,
        loading,
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
