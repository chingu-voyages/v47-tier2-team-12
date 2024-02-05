import React, { useContext, useState } from "react";
import { Todo_context } from "../Context/Context";
import "./Dashboard.css";
import { Trash2 } from "react-feather";

const Dashboard = () => {
  const { projectData, setProjectData, generateMonthData } =
    useContext(Todo_context);
  console.log(projectData)
  // const [checked, setChecked] = useState([]);

  // console.log(projectData, "project");

  function handleDelete(id) {
    // Create a new array with updated tasks excluding the one with the specified id
    const updatedTasks = projectData.activityTypes.map((activityType) => ({
      ...activityType,
      Tasks: activityType.Tasks.filter((task) => task.id !== id),
    }));

    // Create a new array with updated activityTypes
    const updatedActivityTypes = projectData.activityTypes.map(
      (activityType, index) => ({
        ...activityType,
        Tasks: updatedTasks[index].Tasks,
      })
    );

    // Create a new projectData object with the updated activityTypes
    const updatedProjectData = {
      ...projectData,
      activityTypes: updatedActivityTypes,
    };

    // Set the updated projectData to the state
    setProjectData(updatedProjectData);
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
              {item.Tasks.map((ele, index) => {
                return (
                  <div className="tasks-container" key={index}>
                    <div className="task-inner-container">
                      <div className="task-inner-container-2">
                        <div>
                          <p className=" days">{ele.days[0]}</p>
                          <p className="task-name">{ele.taskName}</p>
                        </div>
                        <button
                          className="trash-icon"
                          onClick={() => handleDelete(ele.id)}
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      <div className="main-div-checkboxes">
                        {monthData.map((item, index) => {
                          return (
                            <>
                              <div key={index} className="check-boxes-inner-container ">
                                <input
                                  className="input-checked-box"
                                  // defaultChecked={
                                  //   checked?.some(
                                  //     (checked) => checked?.index == index
                                  //   )
                                  //     ? true
                                  //     : false
                                  // }
                                  type="checkbox"
                                // onClick={(e) => {
                                //   if (
                                //     !checked.some(
                                //       (item2) => item2?.index == index
                                //     )
                                //   ) {
                                //     setChecked([
                                //       ...checked,
                                //       { index: index, value: "checked" },
                                //     ]);
                                //   } else {
                                //     setChecked([
                                //       ...checked?.filter(
                                //         (item3) => item3?.index != index
                                //       ),
                                //     ]);
                                //   }
                                // }}
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
