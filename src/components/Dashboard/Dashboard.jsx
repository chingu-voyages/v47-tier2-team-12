import React, { useContext, useState } from "react";
import { Todo_context } from "../Context/Context";
import "./Dashboard.css";
import { Trash2 } from "react-feather";

const Dashboard = () => {
  const { projectData, setProjectData, globalData,
    setGlobalData, generateMonthData } =
    useContext(Todo_context);
  // const [checked, setChecked] = useState([]);
  const [checkedState, setCheckedState] = useState({});


  console.log(projectData, "project");
  // console.log(globalData)

  function handleDelete(id) {
    // Create a new array with updated tasks excluding the one with the specified id
    const updatedTasks = projectData.activityTypes.map((activityType) => ({
      ...activityType,
      Tasks: activityType.Tasks.filter((task) => task.id !== id),
    }));

    // Create a new array with updated activityTypes
    // const updatedActivityTypes = projectData.activityTypes.map(
    //   (activityType, index) => ({
    //     ...activityType,
    //     Tasks: updatedTasks[index].Tasks,
    //   })
    // );

    // Create a new projectData object with the updated activityTypes
    const updatedProjectData = {
      ...projectData,
      activityTypes: updatedTasks,
    };
    console.log(projectData.id)

    const updateGlobalData = globalData.map((data, index) => {
      return data.id === updatedProjectData.id ? updatedProjectData : data
    })
    // console.log(updatedTasks)
    // console.log(updatedProjectData)
    // console.log(updatedActivityTypes)
    // Set the updated projectData to the state
    setProjectData(updatedProjectData);
    setGlobalData(updateGlobalData)

  }

  function handleCheck(taskId, date) {
    const key = `${taskId}_${date}`;
    const newCheckedState = { ...checkedState, [key]: !checkedState[key] };
    setCheckedState(newCheckedState);
  }
  const monthData = generateMonthData();

  return (
    <div className={`activity-container `}>
      {projectData?.activityTypes?.map((item, ind) => {
        return (
          <div key={ind}>

            <div className="activity-inner-container">
              <div className="activity-name-container">
                <h3 className="activity-name">{item.activityName}</h3>
              </div>
              <div className="day-container">
                {monthData.map((item, index) => {
                  return (
                    <>
                      <div key={index} className="day-inner-container ">
                        <p>{item.date}</p>
                        <p>{item.nameOfDay}</p>
                      </div>
                      {(index % 7 == 6) &&
                        <div className="week-end" >WK</div>
                      }
                    </>
                  );
                })}
              </div>
            </div>
            <div>
              {item.Tasks.map((task, index) => {
                return (
                  <div className="tasks-container" key={index}>
                    <div className="task-inner-container">
                      <div className="task-inner-container-2">
                        <div>
                          <p className=" days">{task.days[0]}</p>
                          <p className="task-name">{task.taskName}</p>
                        </div>
                        <button
                          className="trash-icon"
                          onClick={() => handleDelete(task.id)}
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      <div className="main-div-checkboxes">
                        {monthData.map((day, index) => {
                          const key = `${task.id}_${day.date}`;
                          return (
                            <>
                              <div key={index} className="check-boxes-inner-container ">
                                <input
                                  className="input-checked-box"
                                  id={day.date}
                                  type="checkbox"
                                  checked={checkedState[key] || false}
                                  onChange={() => handleCheck(task.id, day.date)}

                                />
                              </div>
                              {(index % 7 == 6) &&
                                <div className="week-end" ><p className="visiblity-hidden">WK</p></div>
                              }
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
